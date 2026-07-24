import { Reveal } from "../uiy/Reveal";

export function Payment() {
  return (
    <section id="payment" className="relative bg-ink px-4 py-16 text-parchment">
      <div className="mx-auto max-w-7xl">
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
  );
}
