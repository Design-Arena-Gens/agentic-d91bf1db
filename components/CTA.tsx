export function CTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 sm:pb-32">
      <div className="glass overflow-hidden rounded-[38px] border border-white/10">
        <div className="relative overflow-hidden px-8 py-14 sm:px-16">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-aurora-400/40 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-aurora-200/30 blur-[110px]" />
          <div className="relative text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-white/60">AURIC Sync</p>
            <h3 className="mt-5 font-display text-3xl text-white sm:text-4xl">
              Silence engineered. Sound perfected.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70">
              From the neural ANC kernel to the breathable acoustic mesh, every detail is tuned for
              the purest listening experience. Join the cohort redefining what noise cancelling can
              feel like.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-white/70 sm:flex-row">
              <a
                href="#reserve"
                className="rounded-full bg-white px-6 py-3 font-medium text-obsidian transition hover:bg-aurora-100"
              >
                Reserve AURIC Sync
              </a>
              <a
                href="mailto:partnerships@auric-sync.com"
                className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white hover:bg-white/10"
              >
                Partnership inquiries
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
