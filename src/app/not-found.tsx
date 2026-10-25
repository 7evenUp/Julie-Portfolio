import Link from "next/link";
import { Asterisk } from "@/components/icons";

export default function NotFound() {
  return <main id="main" className="not-found"><Asterisk /><span className="mono">404 / Немного заблудились</span><h1>Этой страницы<br />пока нет.</h1><Link href="/" className="pill-button">Вернуться на главную ↗</Link></main>;
}
