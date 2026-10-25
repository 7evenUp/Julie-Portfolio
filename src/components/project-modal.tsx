"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

export function ProjectModal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isProjectRoute = pathname.startsWith("/projects/");

  function close() {
    ref.current?.close();
    router.back();
  }

  useEffect(() => {
    if (!isProjectRoute) return;
    const dialog = ref.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => { dialog?.close(); document.body.style.overflow = previousOverflow; };
  }, [isProjectRoute]);

  useEffect(() => { ref.current?.scrollTo({ top: 0 }); }, [pathname]);

  if (!isProjectRoute) return null;

  return (
    <dialog className="project-modal" ref={ref} aria-labelledby="project-title" onCancel={(event) => { event.preventDefault(); close(); }} onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="modal-panel">
        <div className="modal-topbar"><span className="mono">В деталях</span><button type="button" onClick={close} aria-label="Закрыть проект"><span className="mono">Закрыть</span><span className="close-icon" aria-hidden="true" /></button></div>
        {children}
      </div>
    </dialog>
  );
}
