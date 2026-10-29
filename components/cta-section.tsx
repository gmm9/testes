import { WHATSAPP_URL } from "@/lib/landing-content";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-brand px-6 py-14 text-center text-white">
        <h2 className="text-3xl font-bold tracking-tight">Pronto para mimar seu pet?</h2>
        <p className="max-w-md text-white/90">
          Agende um horário pelo WhatsApp e garanta o dia de spa do seu melhor amigo.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-6 py-3 font-semibold text-brand-dark transition-transform hover:scale-105"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
