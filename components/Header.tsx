import Link from "next/link";

const navItems = [
  { href: "#technology", label: "Technology" },
  { href: "#reserve", label: "Reserve" },
  { href: "#reviews", label: "Reviews" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-obsidian/85 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-white/70">
        <Link href="/" className="font-display text-lg text-white">
          AURIC<span className="text-aurora-200"> Sync</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="#reserve"
          className="rounded-full border border-white/20 px-4 py-2 font-medium text-white transition hover:border-white hover:bg-white/10"
        >
          Pre-order
        </Link>
      </nav>
    </header>
  );
}
