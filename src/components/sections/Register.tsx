import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { Kicker } from "../ui/Kicker";
import { FORM_LINKS } from "../../lib/data";

export function Register() {
  return (
    <section id="register" className="relative bg-chapter-spark px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Kicker tone="blue">Registration</Kicker>
              <h2 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.05] md:text-5xl">
                Ready to <em className="italic">join us?</em>
              </h2>
            </div>
          </div>

          <div className="mt-12 bg-white/60 p-8 rounded-3xl border border-black/5 max-w-2xl">
            <h3 className="font-display text-2xl font-medium mb-6">Ways to get involved</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Register a child (KES 1,500)", href: FORM_LINKS.registerChild, primary: true },
                { label: "Volunteer as a mentor", href: FORM_LINKS.mentor },
                { label: "Partner with us", href: FORM_LINKS.partner },
                { label: "Make a donation", href: FORM_LINKS.donate },
              ].map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-medium transition-colors ${cta.primary
                    ? "bg-brand-blue text-white ring-1 ring-brand-blue"
                    : "bg-parchment ring-1 ring-black/5 hover:bg-brand-yellow/20"
                    }`}
                >
                  <span>{cta.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
