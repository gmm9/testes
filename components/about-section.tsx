import { SITE_NAME, stats } from "@/lib/landing-content";

export function AboutSection() {
  return (
    <section id="sobre" className="mx-auto grid max-w-6xl scroll-mt-16 gap-12 px-4 py-20 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Feito por quem ama pets</h2>
        <p className="mt-4 text-muted">
          A {SITE_NAME} nasceu da paixão por animais. Nossa equipe trata cada pet como se fosse da
          família, com ambiente limpo, profissionais qualificados e muito carinho em cada atendimento.
        </p>
      </div>
      <dl className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse rounded-2xl bg-brand-soft p-4 text-center">
            <dt className="mt-1 text-xs text-muted md:text-sm">{stat.label}</dt>
            <dd className="text-2xl font-extrabold text-brand md:text-3xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
