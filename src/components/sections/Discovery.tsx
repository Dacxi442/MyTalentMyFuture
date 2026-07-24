import { Reveal } from "../uiy/Reveal";
import { Kicker } from "../uiy/Kicker";
import { departments } from "../../lib/data";

export function Discovery() {
  return (
    <section id="discovery" className="relative bg-chapter-discovery px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Kicker tone="orange">Chapter IV · The Crafts</Kicker>
          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-[20ch] text-balance font-display text-4xl font-medium leading-[1.05] md:text-5xl">
              Eleven ways to <em className="italic">spark a mind.</em>
            </h2>
            <p className="max-w-[42ch] text-pretty text-lg leading-relaxed text-ink/70">
              Children don't know what they love until they've held it in their
              hands. Over three days, they rotate through these practical
              workshops.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((dept, i) => (
            <Reveal
              key={dept.name}
              delay={i * 50}
              className="group flex flex-col justify-between rounded-3xl border border-black/5 bg-white/40 p-6 transition-colors hover:bg-white/80"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow/20 text-brand-orange transition-transform group-hover:scale-110">
                  <dept.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-medium">
                  {dept.name}
                </h3>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-orange">
                  {dept.tag}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                {dept.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
