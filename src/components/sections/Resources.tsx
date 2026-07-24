import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { Kicker } from "../ui/Kicker";
import { FORM_LINKS } from "../../lib/data";

export function Resources() {
  const haveItems = [
    "Venue secured at Makimei Children's Home",
    "11 hands-on learning pathways",
    "14 registered mentors",
    "Computers, sewing machines & musical instruments",
    "Dedicated organizing team and volunteers",
  ];

  const needItems = [
    "More mentors across all skill areas",
    "Official partners & sponsors",
    "Financial contributions and donations",
    "Learning materials & workshop supplies",
    "Community support — share, volunteer or connect us",
  ];

  return (
    <section className="relative bg-chapter-belief/30 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <Kicker tone="blue">The Resources</Kicker>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] md:text-4xl">
              What we have.{" "}
              <em className="italic">What we need.</em>
            </h2>
            <p className="mt-4 mx-auto max-w-[52ch] text-ink/70">
              We have the foundation. Here's exactly what's still needed to make
              this happen.
            </p>
          </div>

          <div className="mt-10 mx-auto max-w-4xl overflow-hidden rounded-3xl border border-black/5 bg-white/70">
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black/5">
              {/* We Have column */}
              <div>
                <div className="flex items-center gap-2 border-b border-black/5 bg-brand-green/10 px-8 py-4">
                  <span className="h-2 w-2 rounded-full bg-brand-green" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink/60">
                    We Have
                  </span>
                </div>
                <ul className="divide-y divide-black/5">
                  {haveItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 px-8 py-4"
                    >
                      <span className="shrink-0 text-sm text-brand-green">✓</span>
                      <span className="text-sm text-ink/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* We Need column */}
              <div>
                <div className="flex items-center gap-2 border-b border-black/5 bg-brand-orange/10 px-8 py-4">
                  <span className="h-2 w-2 rounded-full bg-brand-orange" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink/60">
                    We Need
                  </span>
                </div>
                <ul className="divide-y divide-black/5">
                  {needItems.map((item, i) => (
                    <li
                      key={item}
                      className={`flex items-center gap-3 px-8 py-4 ${i === needItems.length - 1 ? "bg-brand-orange/5" : ""
                        }`}
                    >
                      <span
                        className={`shrink-0 text-sm ${i === needItems.length - 1
                            ? "font-bold text-brand-orange"
                            : "text-brand-orange"
                          }`}
                      >
                        {i === needItems.length - 1 ? "→" : "◯"}
                      </span>
                      <span
                        className={`text-sm ${i === needItems.length - 1
                            ? "font-bold text-brand-orange"
                            : "text-ink/80"
                          }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={FORM_LINKS.mentor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-parchment ring-1 ring-ink transition-colors hover:bg-brand-orange hover:ring-brand-orange"
            >
              Volunteer <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="/sponsor"
              className="inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-2.5 text-sm font-medium text-ink ring-1 ring-black/15 transition-colors hover:bg-brand-yellow/20"
            >
              Sponsor <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="/register"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-medium text-white ring-1 ring-brand-blue transition-colors hover:bg-brand-blue/90"
            >
              Register a Child <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
