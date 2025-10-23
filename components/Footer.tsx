export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-xs uppercase tracking-[0.28em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <div>AURIC Sync · Acoustic Division</div>
        <div>Designed in Reykjavík · Engineered in Tokyo · Assembled in Copenhagen</div>
        <div>© {new Date().getFullYear()} Auric Instruments</div>
      </div>
    </footer>
  );
}
