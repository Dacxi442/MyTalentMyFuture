import { CalendarDays, Plus } from "lucide-react";
import heroSpark from "@/assets/hero-spark.jpg";
import { Kicker } from "../ui/Kicker";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section
      id="spark"
      className="relative overflow-hidden bg-chapter-spark px-6 pb-16 pt-28 md:pb-20 md:pt-32"
    >
      {/* Faint drawn thread — appears here for the first time. */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M -50 700 C 300 620, 500 780, 780 640 S 1200 500, 1500 560"
          fill="none"
          stroke="url(#threadGrad)"
          strokeWidth="1.5"
          className="animate-thread-draw"
        />
        <defs>
          <linearGradient id="threadGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.5" />
            <stop
              offset="100%"
              stopColor="var(--brand-yellow)"
              stopOpacity="0.9"
            />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center justify-center pb-16 mb-4">
        <p className="my-6 max-w-[36ch] text-center font-display text-lg italic text-ink/60">
          A dream waiting to catch the wind.
        </p>
        <div className="relative flex justify-center w-full max-w-[280px] sm:max-w-md md:max-w-xl min-h-[140px] items-center">
          {/* Cloud 1 - Far Left (Small) */}
          <svg
            aria-hidden
            width="80"
            height="40"
            viewBox="0 0 120 60"
            className="absolute -left-6 sm:-left-2 md:-left-8 top-12 animate-cloud-drift opacity-90 text-white drop-shadow-sm"
            fill="currentColor"
          >
            <path d="M30 45 C15 45, 10 30, 25 25 C25 10, 55 5, 65 20 C85 10, 105 25, 95 40 C110 45, 95 60, 75 55 C60 60, 45 55, 30 45 Z" />
          </svg>

          {/* Cloud 2 - Mid Left (Medium) */}
          <svg
            aria-hidden
            width="120"
            height="60"
            viewBox="0 0 120 60"
            className="absolute left-2 sm:left-6 md:left-12 -top-2 animate-cloud-drift-reverse opacity-100 text-white drop-shadow-md"
            fill="currentColor"
          >
            <path d="M30 45 C15 45, 10 30, 25 25 C25 10, 55 5, 65 20 C85 10, 105 25, 95 40 C110 45, 95 60, 75 55 C60 60, 45 55, 30 45 Z" />
          </svg>

          {/* Cloud 3 - Background Left (Large, faint blue) */}
          <svg
            aria-hidden
            width="160"
            height="80"
            viewBox="0 0 120 60"
            className="absolute -left-16 sm:-left-12 md:-left-20 top-2 animate-cloud-drift opacity-15 text-brand-blue"
            fill="currentColor"
          >
            <path d="M25 35 C10 35, 5 25, 20 20 C20 10, 45 5, 55 15 C70 5, 90 20, 80 30 C95 35, 80 45, 65 42 C50 48, 35 45, 25 35 Z" />
          </svg>

          <svg
            aria-hidden
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className="animate-float-slow relative z-10 mx-auto"
          >
            {/* Upright, rising kite */}
            <polygon
              points="24,4 40,16 24,44 8,16"
              fill="var(--brand-orange)"
              opacity="0.9"
            />
            <line x1="24" y1="4" x2="24" y2="44" stroke="white" strokeWidth="1" />
            <line x1="8" y1="16" x2="40" y2="16" stroke="white" strokeWidth="1" />
          </svg>

          {/* Cloud 4 - Mid Right (Medium) */}
          <svg
            aria-hidden
            width="100"
            height="50"
            viewBox="0 0 100 50"
            className="absolute right-0 sm:right-4 md:right-16 top-6 animate-cloud-drift-reverse opacity-100 text-white drop-shadow-md"
            fill="currentColor"
          >
            <path d="M25 35 C10 35, 5 25, 20 20 C20 10, 45 5, 55 15 C70 5, 90 20, 80 30 C95 35, 80 45, 65 42 C50 48, 35 45, 25 35 Z" />
          </svg>

          {/* Cloud 5 - Far Right (Small) */}
          <svg
            aria-hidden
            width="70"
            height="35"
            viewBox="0 0 120 60"
            className="absolute -right-6 sm:-right-4 md:-right-8 -top-4 animate-cloud-drift opacity-90 text-white drop-shadow-sm"
            fill="currentColor"
          >
            <path d="M30 45 C15 45, 10 30, 25 25 C25 10, 55 5, 65 20 C85 10, 105 25, 95 40 C110 45, 95 60, 75 55 C60 60, 45 55, 30 45 Z" />
          </svg>

          {/* Cloud 6 - Background Right (Large, faint blue) */}
          <svg
            aria-hidden
            width="140"
            height="70"
            viewBox="0 0 100 50"
            className="absolute -right-12 sm:-right-8 md:-right-24 top-10 animate-cloud-drift-reverse opacity-15 text-brand-blue"
            fill="currentColor"
          >
            <path d="M25 35 C10 35, 5 25, 20 20 C20 10, 45 5, 55 15 C70 5, 90 20, 80 30 C95 35, 80 45, 65 42 C50 48, 35 45, 25 35 Z" />
          </svg>
        </div>
        <div className="thread h-16 w-px opacity-70 mt-2" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Kicker tone="blue">Chapter I · The Spark</Kicker>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-ink/70 [border-width:0.5px] border-ink/15">
            <CalendarDays className="h-3.5 w-3.5 text-brand-orange" />
            August 20 – 22, 2026 · Thu · Fri · Sat
          </div>
          <h1 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Every child has a{" "}
            <em className="italic font-light">gift.</em>{" "}
            We help them find it.
          </h1>
          <p className="mt-6 max-w-[52ch] text-pretty text-base leading-relaxed text-ink/70 md:text-lg">
            This August, 100+ children will discover what they're made of.
            Through coding, music, baking, photography, fashion, sports, and
            more — they'll try, learn, and surprise themselves.
          </p>
          <p className="mt-3 max-w-[52ch] text-pretty text-sm font-medium leading-relaxed text-brand-blue md:text-base">
            This is Year 1. We're building it together.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/register"
              className="inline-flex items-center gap-3 rounded-full bg-brand-blue py-3 pl-3 pr-5 text-sm font-medium text-white ring-1 ring-brand-blue hover:translate-y-px transition-transform"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                <Plus className="h-3.5 w-3.5" />
              </span>
              Register a child
            </Link>
            <a
              href="/#journey"
              className="inline-flex items-center gap-3 rounded-full bg-transparent py-3 pl-3 pr-5 text-sm font-medium text-ink/80 ring-1 ring-black/10 hover:bg-white transition-colors"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-ink/5">
                →
              </span>
              Read the story
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src={heroSpark}
              alt="A child looking upward at a glowing thread of light in their open palm — the moment of discovery."
              width={1200}
              height={1408}
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_40px_80px_-40px_rgba(3,105,161,0.35)]"
            />
            {/* Decorative dashed circle — a soft "orbit" behind the child */}
            <div
              aria-hidden
              className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-dashed border-brand-blue/30 animate-float-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
