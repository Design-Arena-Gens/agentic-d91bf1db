type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-xl space-y-3">
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-sm text-white/70 sm:text-base">{description}</p> : null}
    </div>
  );
}
