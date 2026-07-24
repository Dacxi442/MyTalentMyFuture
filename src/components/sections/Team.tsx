import { Reveal } from "../ui/Reveal";
import { Kicker } from "../ui/Kicker";
import { team, partners } from "../../lib/data";
import { Linkedin, Twitter, Instagram, Globe } from "lucide-react";

export function Team() {
  return (
    <section id="circle" className="relative bg-chapter-spark px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Kicker tone="blue">Chapter VI · The Circle</Kicker>
          <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-[20ch] text-balance font-display text-4xl font-medium leading-[1.05] md:text-5xl">
              It takes a <em className="italic">village.</em>
            </h2>
            <p className="max-w-[42ch] text-pretty text-lg leading-relaxed text-ink/70">
              The organizing team, the partners and the mentors who give up their
              August holiday to show a child what's possible.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal
              key={member.name}
              delay={i * 50}
              className="flex flex-col gap-4 rounded-3xl border border-black/5 bg-white p-4 transition-transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full shrink-0 overflow-hidden rounded-2xl bg-parchment">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-display text-4xl text-ink/10">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-1 px-2 pb-2">
                <h3 className="font-display text-xl font-medium">{member.name}</h3>
                <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1">
                  {member.roles.map((role, rIndex) => (
                    <span
                      key={role}
                      className="text-xs font-medium text-brand-orange"
                    >
                      {role}
                      {rIndex < member.roles.length - 1 && (
                        <span className="ml-2 text-ink/20">·</span>
                      )}
                    </span>
                  ))}
                </div>
                {member.bio && (
                  <p className="mt-3 text-sm text-ink/70 flex-1">
                    {member.bio}
                  </p>
                )}
                
                {/* Connect Section */}
                {member.socials && Object.keys(member.socials).length > 0 && (
                  <div className="mt-4 pt-4 border-t border-black/5">
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-ink/40 mb-2">Connect</div>
                    <div className="flex gap-3 text-ink/40">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="hover:text-brand-blue transition-colors" aria-label="LinkedIn">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} className="hover:text-brand-blue transition-colors" aria-label="Twitter">
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a href={member.socials.instagram} className="hover:text-brand-orange transition-colors" aria-label="Instagram">
                          <Instagram className="h-4 w-4" />
                        </a>
                      )}
                      {member.socials.portfolio && (
                        <a href={member.socials.portfolio} className="hover:text-brand-green transition-colors" aria-label="Portfolio">
                          <Globe className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 border-t border-black/5 pt-16 opacity-60">
          <div className="w-full text-center text-xs font-semibold uppercase tracking-widest text-ink/40">
            With thanks to our partners
          </div>
          {partners.map((partner) => (
            <div
              key={partner}
              className="font-display text-xl font-medium tracking-tight md:text-2xl"
            >
              {partner}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
