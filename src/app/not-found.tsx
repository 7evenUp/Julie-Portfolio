import Link from "next/link"

import { Asterisk } from "@/components/icons"

const NotFound = () => {
  return (
    <main
      id="main"
      className="flex min-h-screen min-w-[1120px] flex-col items-center justify-center gap-[30px]"
    >
      <Asterisk className="size-[70px] text-accent" />
      <span className="font-mono text-[10px] leading-[1.65] font-normal tracking-[0.035em] text-muted wide:text-[11px]">
        404 / Немного заблудились
      </span>
      <h1 className="text-center text-[70px] leading-[1.15] font-normal tracking-[-4px]">
        Этой страницы
        <br />
        пока нет.
      </h1>
      <Link
        href="/"
        className="inline-flex items-center justify-center gap-6 rounded-[40px] border border-accent bg-accent px-[25px] py-[19px] text-[12px] font-semibold text-[#20251a] transition-[background,transform] duration-250 hover:-translate-y-[3px] hover:bg-[#e3ffac]"
      >
        Вернуться на главную ↗
      </Link>
    </main>
  )
}

export default NotFound
