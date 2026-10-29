import { WHATSAPP_URL } from "@/lib/landing-content";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
      <div className="flex flex-col gap-6">
        <span className="w-fit rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand-dark dark:text-brand">
          Cuidado completo para o seu melhor amigo
        </span>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Seu pet feliz, <span className="text-brand">saudável</span> e cheiroso.
        </h1>
        <p className="max-w-md text-lg text-muted">
          Banho e tosa, veterinário, hotelzinho e tudo o que seu cão ou gato precisa, em um só lugar.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Agendar banho
          </a>
          <a
            href="#servicos"
            className="rounded-full border border-brand px-6 py-3 text-center font-semibold text-brand transition-colors hover:bg-brand-soft"
          >
            Ver serviços
          </a>
        </div>
      </div>
      <div
        aria-hidden
        className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-full bg-brand-soft"
      >
        <span className="text-[9rem] leading-none">🐶</span>
        <span className="absolute bottom-6 right-6 text-7xl">🐱</span>
        <span className="absolute left-8 top-8 text-4xl">🐾</span>
      </div>
    </section>
  );
}
