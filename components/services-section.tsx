import { services } from "@/lib/landing-content";

export function ServicesSection() {
  return (
    <section id="servicos" className="scroll-mt-16 bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Nossos serviços</h2>
          <p className="mt-3 text-muted">Tudo pensado para o conforto e a saúde do seu pet.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-brand-soft bg-background p-6 transition-shadow hover:shadow-lg"
            >
              <span aria-hidden className="text-4xl">
                {service.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
