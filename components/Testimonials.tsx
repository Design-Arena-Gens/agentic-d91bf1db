import { testimonials } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionTitle
        eyebrow="Trusted by professionals"
        title="Voices from the sonic frontier."
        description="We partnered with pilots, mastering engineers, and product leaders to validate AURIC Sync in extreme environments."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="glass h-full rounded-3xl border border-white/10 p-8 text-sm text-white/70"
          >
            <blockquote className="text-base leading-relaxed text-white/80">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6 pt-6 text-xs uppercase tracking-[0.28em] text-white/60">
              <div className="font-semibold text-white/90">{testimonial.name}</div>
              <div>{testimonial.title}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
