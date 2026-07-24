import { Reveal } from "../ui/Reveal";
import { Kicker } from "../ui/Kicker";

export function WhoIsThis() {
  return (
    <section className="relative bg-chapter-belief/40 px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <Reveal>
          <Kicker tone="orange">Who Is This For?</Kicker>
          <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] md:text-4xl">
            Open to every child.{" "}
            <em className="italic">Free for those who need it.</em>
          </h2>

          <div className="mt-10 grid max-w-2xl mx-auto gap-4 sm:grid-cols-2 text-left">
            <div className="rounded-3xl border border-brand-green/30 bg-brand-green/5 p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-green">
                Makimei Children's Home
              </div>
              <div className="mt-4 font-display text-5xl font-medium text-ink">
                FREE
              </div>
              <p className="mt-3 text-sm text-ink/60">
                Fully sponsored — no cost to the child or home.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-blue/30 bg-brand-blue/5 p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                Community Children
              </div>
              <div className="mt-4 font-display text-5xl font-medium text-ink">
                KES 1,500
              </div>
              <p className="mt-3 text-sm text-ink/60">
                Covers snacks and materials for 3 days.
              </p>
            </div>
          </div>

          <p className="mt-8 font-medium text-ink/70">
            Ages 8–16. No prior skill needed.{" "}
            <span className="text-brand-orange">That's the whole point.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
