export function Pricing() {
  return (
    <section id="reserve" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="glass overflow-hidden rounded-[40px] border border-white/10">
        <div className="grid gap-10 p-10 sm:grid-cols-[1.1fr_1fr] sm:p-16">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.36em] text-aurora-100">
              Founder&apos;s Batch
            </span>
            <h3 className="font-display text-3xl text-white sm:text-4xl">
              Become one of the first 1,000 to own AURIC Sync.
            </h3>
            <p className="text-sm text-white/70">
              Early access units ship with the full adaptive suite, wireless lossless codec, CNC
              machined travel stand, and lifetime access to personalization updates.
            </p>
            <ul className="space-y-3 text-sm text-white/65">
              <li>• Complimentary acoustic calibration session</li>
              <li>• Titanium travel frame with anti-resonant coating</li>
              <li>• Dual-device Qi wireless charging pad included</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-white/5 bg-black/50 p-8 text-white/80">
            <div>
              <div className="text-xs uppercase tracking-[0.32em] text-white/50">Investment</div>
              <div className="mt-4 flex items-baseline gap-2 font-display text-4xl">
                $749 <span className="text-sm text-white/50">USD</span>
              </div>
              <p className="mt-3 text-sm text-white/60">Flexible financing starting at $68/mo.</p>
            </div>
            <a
              href="https://forms.gle/Xn1YQBBHAU9cA7sx6"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-medium text-obsidian transition hover:bg-aurora-100"
            >
              Secure your build slot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
