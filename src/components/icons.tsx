import type { SVGProps } from "react";

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}><path d="M5 19 19 5M5 5h14v14" /></svg>;
}

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}><path d="M12 3v17m-7-7 7 7 7-7" /></svg>;
}

export function Asterisk(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...props}><path d="m43 0 14 0 1 32 24-23 10 10-24 24 32 0v14l-32 1 23 24-10 10-24-24v32H43l-1-32-24 23L8 81l24-24H0V43l32-1L9 18 19 8l24 24z" /></svg>;
}

export function Globe(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 72 40" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" {...props}><ellipse cx="36" cy="20" rx="34" ry="17" /><ellipse cx="36" cy="20" rx="22" ry="17" /><ellipse cx="36" cy="20" rx="9" ry="17" /><path d="M2 20h68M36 3v34" /></svg>;
}
