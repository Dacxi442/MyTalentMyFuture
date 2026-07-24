import { Reveal } from "../uiy/Reveal";
import { Kicker } from "../uiy/Kicker";

export function About() {
  const stats = [
    { n: "100+", label: "Children reached" },
    { n: "10+", label: "Mentors on the floor" },
    { n: "11", label: "Crafts to try" },
    { n: "100%", label: "Free for every child" },
  ];

  return (
    <>
      <section id="context" className="relative bg-chapter-belief/50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Kicker tone="blue">Chapter II · The Challenge</Kicker>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.1] md:text-4xl">
                Resources without <em className="italic">mentors</em> remain
                silent.
              </h2>
              <div className="mt-10 max-w-[48ch] space-y-6 text-lg leading-relaxed text-ink/70">
                <p>
                  This bootcamp is organized primarily for the children at Makimei
                  Children's Home.
                </p>
                <p>
                  The home already possesses valuable resources: computers, sewing
                  machines, musical instruments, baking equipment, and learning
                  facilities. The challenge is not simply a lack of equipment.
                </p>
                <p>
                  The challenge is that these resources remain underutilized
                  because the children have not had enough opportunities to learn
                  from skilled mentors who can guide them. We are here to activate
                  those resources.
                </p>
              </div>
            </div>
            <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-full border border-black/5 bg-chapter-spark">
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center font-display text-2xl italic text-ink/60">
                "Children do not simply watch demonstrations. They participate.
                They create. They explore. They build."
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="belief" className="relative bg-chapter-belief px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <Reveal>
              <Kicker tone="blue">Chapter III · The Transformation</Kicker>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.1] md:text-4xl">
                "I discovered something <br />
                <em className="italic">I can become."</em>
              </h2>
              <div className="mt-10 max-w-[52ch] space-y-6 text-lg leading-relaxed text-ink/70">
                <p>
                  The purpose is not entertainment. The purpose is transformation.
                  The goal is not to make experts in three days, but to ignite
                  curiosity and build confidence.
                </p>
                <p>
                  We expose children to practical experiences in coding,
                  photography, baking, and leadership. We plant seeds that
                  continue growing long after the boot camp ends.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col justify-center rounded-3xl border border-black/5 p-8 ${i === 0
                      ? "bg-brand-blue text-white ring-1 ring-brand-blue"
                      : "bg-white/50"
                    }`}
                >
                  <div
                    className={`font-display text-4xl font-medium md:text-5xl ${i === 0 ? "text-white" : "text-brand-orange"
                      }`}
                  >
                    {s.n}
                  </div>
                  <div
                    className={`mt-2 text-sm font-medium ${i === 0 ? "text-white/80" : "text-ink/60"
                      }`}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
