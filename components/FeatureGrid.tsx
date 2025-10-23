import { coreFeatures } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function FeatureGrid() {
  return (
    <section id="technology" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionTitle
        eyebrow="Signal Architecture"
        title="An acoustic system that thinks ahead of noise."
        description="Every layer of AURIC Sync is tuned to preserve the soul of the music while dissolving the rest. Explore the signal chain that makes it possible."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {coreFeatures.map((feature) => (
          <article
            key={feature.name}
            className="glass relative overflow-hidden rounded-3xl p-8 shadow-[0_24px_60px_-40px_rgba(41,180,234,0.65)]"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-aurora-500/20 blur-3xl" />
            <header className="space-y-1">
              <span className="text-xs uppercase tracking-[0.28em] text-aurora-200/90">
                {feature.name}
              </span>
              <h3 className="font-display text-2xl text-white">{feature.headline}</h3>
            </header>
            <p className="mt-4 text-sm text-white/70">{feature.description}</p>
            {feature.spectralNote ? (
              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-aurora-200/70">
                {feature.spectralNote}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
