import { experiences } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function ExperienceShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Adaptive Experience"
            title="Intelligence that molds to every environment."
            description="AURIC Sync learns your behavior, understands context, and shapes the soundstage in real time. Your focus becomes the priority signal."
          />
          <div className="mt-10 space-y-8 text-sm text-white/70">
            {experiences.map((experience) => (
              <div key={experience.title} className="flex gap-4">
                <div className="mt-1 h-12 w-12 flex-none rounded-full border border-white/10 bg-white/10 text-center font-display text-lg leading-[48px] text-aurora-100">
                  {experience.title.slice(0, 1)}
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-xl text-white">{experience.title}</h3>
                  <p className="text-white/60">{experience.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-aurora-600/10 to-transparent blur-2xl" />
          <div className="relative glass overflow-hidden rounded-[32px] border border-white/10 p-10">
            <div className="grid gap-6">
              <SpecRow
                label="ANC Depth"
                value="52 dB"
                description="of broadband attenuation with multi-band prediction"
              />
              <SpecRow
                label="Latency"
                value="17 μs"
                description="signal pipeline from detection to inversion"
              />
              <SpecRow
                label="Battery Life"
                value="42 h"
                description="continuous playback with adaptive ANC enabled"
              />
              <SpecRow
                label="Rapid Charge"
                value="10 min → 6 h"
                description="flight-ready in the time it takes to board"
              />
            </div>
            <div className="mt-8 rounded-2xl bg-black/40 p-6 text-sm text-white/65">
              <p className="font-semibold uppercase tracking-[0.28em] text-aurora-200">
                Flight-tested
              </p>
              <p className="mt-3 text-white/70">
                Pressure-adaptive earcups equalize cabin pressure shifts to prevent ear fatigue on
                long-haul travel and high-altitude operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type SpecRowProps = {
  label: string;
  value: string;
  description: string;
};

function SpecRow({ label, value, description }: SpecRowProps) {
  return (
    <div className="flex items-start justify-between gap-6 rounded-2xl border border-white/5 bg-white/5 p-4">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-white/50">{label}</p>
        <p className="mt-1 text-[13px] text-white/60">{description}</p>
      </div>
      <p className="font-display text-3xl text-white">{value}</p>
    </div>
  );
}
