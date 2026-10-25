import { site } from "@/content/site";
import { ArrowUpRight, Asterisk } from "./icons";

export function Contact() {
  const contacts = [
    { label: "Telegram", href: site.telegram },
    { label: "Электронная почта", href: site.email ? `mailto:${site.email}` : "" },
    { label: "Behance", href: site.behance },
  ];
  return (
    <section className="contact-section page-width" id="contact">
      <div className="section-topline mono"><span>[ 03 — Контакты ]</span><span>Всё начинается с разговора</span></div>
      <div className="contact-main"><h2>Есть идея?<br /><span>Давайте создадим.</span></h2><Asterisk className="contact-asterisk" /></div>
      <div className="contact-bottom"><p>Расскажите, что вы задумали.<br />Найдём для этого красивую форму.</p><div className="contact-links">{contacts.map((contact) => contact.href ? <a key={contact.label} href={contact.href} target={contact.href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">{contact.label}<ArrowUpRight /></a> : <div className="contact-placeholder" key={contact.label}><span>{contact.label}</span><span className="mono">Скоро <ArrowUpRight /></span></div>)}</div></div>
    </section>
  );
}
