import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../uiy/Reveal";
import { Kicker } from "../uiy/Kicker";
import journeyScene from "@/assets/journey-scene.jpg";
import showcaseKite from "@/assets/showcase-kite.jpg";

export function Journey() {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const scheduleRows = [
    {
      time: "8–9 AM",
      day1: "Check-in & welcome",
      day2: "Warm-up",
      day3: "Final rehearsals",
      highlight: false,
    },
    {
      time: "9–12 PM",
      day1: "Rotate through 4 workshops",
      day2: "Deep-dive in chosen craft",
      day3: "Public showcase (open to all!)",
      highlight: true,
    },
    {
      time: "12–1 PM",
      day1: "Lunch",
      day2: "Lunch",
      day3: "Lunch & awards",
      highlight: false,
    },
    {
      time: "1–4 PM",
      day1: "Rotate through 4 more workshops",
      day2: "Continue deep-dive",
      day3: "Farewell & parent pick-up",
      highlight: false,
    },
    {
      time: "4–5 PM",
      day1: "Reflection & choose your craft",
      day2: "Mentor feedback",
      day3: "—",
      highlight: false,
    },
  ];
  const days = [
    {
      day: "Day One",
      title: "Discovery",
      body: "Children rotate through every workshop, tasting each craft to find where their heart beats fastest.",
      color: "brand-yellow",
    },
    {
      day: "Day Two",
      title: "Immersion",
      body: "Deep-dive mentorship. They spend the entire day in their chosen craft. Mentors move from showing to guiding.",
      color: "brand-green",
    },
    {
      day: "Day Three",
      title: "The Showcase",
      body: " The payoff. Family, friends and the community gather as the children showcase what they've made and, quietly, who they've become.",
      color: "brand-orange",
    },
  ];

  return (
    <section id="journey" className="relative bg-chapter-belief px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Kicker tone="orange">Chapter V · Three Days</Kicker>
          <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] md:text-5xl">
            A sprint from curiosity <br />
            <em className="italic">to creation.</em>
          </h2>
        </Reveal>

        {/* Narrative days */}
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {days.map((d, i) => (
            <Reveal key={d.day} delay={i * 100}>
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-${d.color}/10 text-xl font-bold text-${d.color}`}
                >
                  {i + 1}
                </div>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-widest text-${d.color}`}>
                    {d.day}
                  </div>
                  <h3 className="font-display text-2xl font-medium">{d.title}</h3>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-ink/70">
                {d.body}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Story spread illustration — a payoff image at the emotional peak */}
        <Reveal className="mt-20 grid gap-6 md:grid-cols-3">
          <img
            src={journeyScene}
            alt="Three children painting, filming and playing music at the bootcamp."
            width={1408}
            height={912}
            loading="lazy"
            className="col-span-2 aspect-[16/10] w-full rounded-3xl object-cover shadow-[0_40px_60px_-40px_rgba(234,179,8,0.4)]"
          />
          <img
            src={showcaseKite}
            alt="A child on a small stage flying a kite at sunset — the showcase."
            width={1008}
            height={1200}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover md:aspect-auto"
          />
        </Reveal>

        {/* Collapsible daily schedule */}
        <div className="mt-16 border-t border-brand-orange/20 pt-8 max-w-4xl mx-auto">
          <button
            onClick={() => setScheduleOpen((o) => !o)}
            aria-expanded={scheduleOpen}
            className="flex items-center gap-3 text-sm font-medium text-ink/70 transition-colors hover:text-ink w-full justify-center"
          >
            <span
              className={`grid h-7 w-7 place-items-center rounded-full bg-ink/5 transition-transform duration-300 ${scheduleOpen ? "rotate-180" : ""
                }`}
            >
              <ChevronDown className="h-4 w-4" />
            </span>
            {scheduleOpen ? "Hide schedule" : "See the full daily schedule"}
          </button>

          <div
            className="grid transition-[grid-template-rows,opacity] duration-500 ease-out"
            style={{
              gridTemplateRows: scheduleOpen ? "1fr" : "0fr",
              opacity: scheduleOpen ? 1 : 0.6,
            }}
          >
            <div className="overflow-hidden">
              <div className="mt-6 overflow-x-auto rounded-2xl border border-black/5 bg-white/70">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-black/5 bg-parchment">
                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-widest text-ink/50">
                        Time
                      </th>
                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-widest text-brand-yellow">
                        Day 1 · Discover
                      </th>
                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-widest text-brand-green">
                        Day 2 · Learn
                      </th>
                      <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-widest text-brand-orange">
                        Day 3 · Showcase
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    {scheduleRows.map((row) => (
                      <tr
                        key={row.time}
                        className="transition-colors hover:bg-parchment/50"
                      >
                        <td className="px-5 py-3 font-mono text-xs text-ink/50 whitespace-nowrap">
                          {row.time}
                        </td>
                        <td className="px-5 py-3 text-ink/80">{row.day1}</td>
                        <td className="px-5 py-3 text-ink/80">{row.day2}</td>
                        <td
                          className={`px-5 py-3 ${row.highlight
                            ? "font-medium text-brand-orange"
                            : "text-ink/80"
                            }`}
                        >
                          {row.day3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
