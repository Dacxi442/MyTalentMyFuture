import { Reveal } from "../ui/Reveal";
import { Kicker } from "../ui/Kicker";
import { sponsorshipTiers } from "../../lib/data";

export function Sponsor() {
  return (
    <section id="sponsor" className="relative bg-parchment px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Kicker tone="orange">Sponsorship</Kicker>
          <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] md:text-5xl">
            Fund a <em className="italic">child's journey.</em>
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/70">
            We are actively looking for sponsors and partners to help us
            reach our goal. Every contribution goes directly to the children's
            experience.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sponsorshipTiers.map((t, i) => (
            <Reveal
              key={t.tier}
              delay={i * 50}
              className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-6"
            >
              <div className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
                {t.tier}
              </div>
              <div className="mt-4 font-display text-3xl font-medium text-ink">
                {t.amount}
              </div>
              <p className="mt-2 text-sm text-ink/70">{t.line}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <section id="payment" className="relative bg-ink px-4 py-4 text-parchment">
        <div className="mx-auto max-w-xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-4xl font-medium leading-[1.05] md:text-5xl">
                Make a <em className="italic">Contribution</em>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                For direct donations, sponsor a child or pay registration fees, use our official Payment details below.
              </p>

              <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 text-left">
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
                  Paybill
                </div>
                <div className="mt-6 space-y-4 font-mono text-lg text-white/90">
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span>Business No.</span>
                    <span className="font-medium text-white">247247</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-4 pt-2">
                    <span>Account No.</span>
                    <span className="font-medium text-white">792447</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-white/50">
                  Please forward the confirmation message to 0711427775 for receipting.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </section>


  );
}
