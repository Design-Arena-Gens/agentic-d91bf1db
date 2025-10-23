"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-aurora-600 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-aurora-400/80 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse gap-16 px-6 py-24 sm:py-32 lg:flex-row lg:items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={heroVariants}
          className="max-w-2xl space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.32em] text-white/70">
            Introducing
            <span className="font-semibold text-white/90">AURIC Sync</span>
          </span>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-6xl">
            The definitive adaptive noise cancelling headphones.
          </h1>
          <p className="max-w-xl text-lg text-white/70">
            Engineered for deep work, total escape, and perfect clarity. A hybrid ANC engine tuned
            by neural models senses, predicts, and vanishes distraction while preserving the audio
            you live for.
          </p>
          <div className="flex flex-col gap-4 text-sm text-white/70 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <Link
                href="#reserve"
                className="rounded-full bg-white px-6 py-3 font-medium text-obsidian transition hover:bg-aurora-100 hover:text-obsidian"
              >
                Reserve your pair
              </Link>
              <Link
                href="#technology"
                className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white hover:bg-white/10"
              >
                Explore the tech
              </Link>
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
              <div className="h-2 w-2 rounded-full bg-aurora-400 shadow-[0_0_12px] shadow-aurora-400/80" />
              Shipping Q4 2024
            </div>
          </div>
        </motion.div>

        <div className="relative flex justify-center lg:flex-1">
          <div className="noise-grid glass relative flex h-[420px] w-[420px] items-center justify-center rounded-[2.5rem] border-white/10 p-10">
            <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-white/6 via-white/2 to-white/0" />
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" } }}
              className="relative z-10"
            >
              <div className="relative h-80 w-80 rounded-full bg-gradient-to-br from-aurora-500/50 via-aurora-400/40 to-transparent p-8 shadow-[0_40px_80px_-40px_rgba(58,165,220,0.85)]">
                <div className="absolute inset-0 rotate-12 rounded-full border border-white/10" />
                <div className="absolute -left-6 top-24 h-16 w-16 rounded-full bg-white/40 blur-3xl" />
                <div className="absolute right-4 top-6 h-20 w-20 rounded-full border border-white/30" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-obsidian/60 backdrop-blur-xl">
                  <HeadphoneRender />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeadphoneRender() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-72 w-72 text-white/90"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="band" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(58,165,220,0.8)" />
          <stop offset="100%" stopColor="rgba(15,30,40,0.9)" />
        </linearGradient>
        <linearGradient id="cup" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
          <stop offset="100%" stopColor="rgba(70,110,125,0.05)" />
        </linearGradient>
      </defs>

      <path
        d="M85 198c0-72 61-138 115-138s115 66 115 138"
        stroke="url(#band)"
        strokeWidth="26"
        strokeLinecap="round"
        fill="none"
        opacity="0.92"
      />
      <g filter="url(#shadow)">
        <rect x="58" y="190" rx="48" ry="48" width="90" height="150" fill="url(#cup)" />
        <rect x="252" y="190" rx="48" ry="48" width="90" height="150" fill="url(#cup)" />
      </g>
      <rect
        x="70"
        y="205"
        width="64"
        height="120"
        rx="36"
        fill="rgba(12,22,32,0.95)"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="4"
      />
      <rect
        x="264"
        y="205"
        width="64"
        height="120"
        rx="36"
        fill="rgba(12,22,32,0.95)"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="4"
      />
      <path
        d="M125 210c2-18 14-32 32-41"
        stroke="rgba(90,205,245,0.45)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M275 210c-2-18-14-32-32-41"
        stroke="rgba(90,205,245,0.45)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
