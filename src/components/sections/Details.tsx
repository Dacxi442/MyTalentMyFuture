import React, { useState } from "react";
import { Plus, Minus, Phone, MessageCircle, Mail, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { Kicker } from "../ui/Kicker";
import { faqs } from "../../lib/data";

function FaqRow({
  q,
  a,
  defaultOpen = false,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="py-6">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="font-display text-xl font-medium">{q}</span>
        <span
          aria-hidden
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink/5 text-ink/70"
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows,opacity] duration-500 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0.6,
        }}
      >
        <div className="overflow-hidden">
          <p className="pt-4 max-w-[56ch] text-ink/70">{a}</p>
        </div>
      </div>
    </div>
  );
}

function ContactRow({
  Icon,
  label,
  value,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white ring-1 ring-black/5 text-brand-blue">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-ink/50">
          {label}
        </div>
        <div className="truncate font-medium">{value}</div>
      </div>
    </div>
  );
}

export function Details() {
  return (
    <section id="details" className="relative bg-parchment px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal className="max-w-[46ch]">
            <Kicker tone="blue">Chapter VIII · The Details</Kicker>
            <h2 className="mt-6 font-display text-4xl font-medium md:text-4xl">
              Answers, <em className="italic">quietly.</em>
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-black/10">
            {faqs.map((f, i) => (
              <FaqRow key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>

        <Reveal className="lg:col-span-6" delay={150}>
          <div className="rounded-3xl bg-chapter-spark p-10 ring-1 ring-black/5">
            <div className="kicker text-brand-blue">Find us</div>
            <div className="mt-6 grid gap-5 text-sm">
              <ContactRow
                Icon={Phone}
                label="Call"
                value="+254 711427775 or 0100603100"
              />
              <ContactRow
                Icon={MessageCircle}
                label="WhatsApp"
                value="+254 711427775 or 0100603100"
              />
              <ContactRow
                Icon={Mail}
                label="Email"
                value="palaverafrica@gmail.com"
              />
              <ContactRow
                Icon={MapPin}
                label="Location"
                value="Makimei Children's Home Gitaru, Kikuyu-Kiambu"
              />
            </div>

            <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-black/5 relative">
              <iframe
                title="Makimei Children's Home Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.893130743292!2d36.67592347374697!3d-1.2339138355685728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1f3543222bff%3A0x97d2ab5eb2fe1fbe!2sMakimei%20Children&#39;s%20Home.!5e0!3m2!1sen!2ske!4v1784752097675!5m2!1sen!2ske"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-8 flex items-center gap-3">
              {(
                [
                  { Icon: Instagram, href: "https://instagram.com/mytalentmyfuture", label: "Instagram" },
                  { Icon: Facebook, href: "https://facebook.com/mytalentmyfuture", label: "Facebook" },
                  { Icon: Twitter, href: "https://twitter.com/MyTalentMyFuture", label: "Twitter / X" },
                  { Icon: Youtube, href: "https://youtube.com/@mytalentmyfuture", label: "YouTube" },
                ] as const
              ).map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-black/5 text-ink/60 hover:bg-brand-orange hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
