import { testimonials } from "@/lib/landing-content";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="scroll-mt-16 bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
          O que dizem os tutores
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col justify-between rounded-2xl border border-brand-soft bg-background p-6"
            >
              <blockquote className="text-muted">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold">{testimonial.name}</span>
                <span className="text-muted"> · {testimonial.pet}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
