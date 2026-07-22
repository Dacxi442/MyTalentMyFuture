import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Music4,
  Cookie,
  Scissors,
  Palette,
  Camera,
  Video,
  Users,
  Crown,
  Trophy,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ArrowUpRight,
  Plus,
  Minus,
  Menu,
  X,
  CalendarDays,
  KeyboardMusic,
} from "lucide-react";

import heroSpark from "@/assets/hero-spark.jpg";
import journeyScene from "@/assets/journey-scene.jpg";
import showcaseKite from "@/assets/showcase-kite.jpg";
import daniewega from "@/assets/danielwega.jpg";
import wahuu from "@/assets/wahuu.jpeg";
import kym from "@/assets/kym.jpg";

/**
 * #MyTalentMyFuture — a single-page narrative for a 3-day children's
 * talent-discovery bootcamp charity.
 *
 * The page is structured as CHAPTERS of an emotional arc, not a stack of
 * generic sections. Each chapter shifts background color one step warmer
 * (blue → cream → yellow → orange) so scrolling reads like a sunrise.
 * A single recurring motif — "the thread" — appears faint in the hero and
 * resolves as a kite string in the Invitation, echoing a child discovering
 * their potential over three days.
 */
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "#MyTalentMyFuture — A 3-Day Children's Talent Discovery Bootcamp",
      },
      {
        name: "description",
        content:
          "Three days. Eleven crafts. One child discovering what they're capable of. Register, mentor, sponsor or donate to #MyTalentMyFuture.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "#MyTalentMyFuture — Where Children Meet Their Potential",
      },
      {
        property: "og:description",
        content:
          "A hand-crafted 3-day bootcamp helping children discover talent in coding, music, arts, leadership and more.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "#MyTalentMyFuture — Where Children Meet Their Potential",
      },
      {
        name: "twitter:description",
        content:
          "A hand-crafted 3-day bootcamp helping children discover talent in coding, music, arts, leadership and more.",
      },
    ],
  }),
  component: Index,
});

/* ------------------------------------------------------------------ */
/*   Small storytelling primitives                                     */
/* ------------------------------------------------------------------ */

/**
 * Reveal — fades + rises its children on scroll-in. Used sparingly: chapter
 * openings and payoff moments only, never on every element (that would flatten
 * the pacing).
 */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            node.setAttribute("data-visible", "true");
            io.unobserve(node);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/**
 * Kicker — the small "Chapter I" label above each chapter title. Same
 * typographic voice everywhere so chapters feel like acts in one book.
 */
function Kicker({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "yellow" | "orange" | "green";
}) {
  const toneClass = {
    blue: "text-brand-blue",
    yellow: "text-brand-yellow",
    orange: "text-brand-orange",
    green: "text-brand-green",
  }[tone];
  return <span className={`kicker ${toneClass}`}>{children}</span>;
}

/* ------------------------------------------------------------------ */
/*   Content data                                                      */
/* ------------------------------------------------------------------ */

const departments = [
  {
    name: "Creative Coding",
    tag: "Logic as art",
    body: "Using AI to build real apps, websites and small games. Children learn to think in steps, break problems open, and watch an idea become something they can click.",
    Icon: Code2,
  },
  {
    name: "Music & Rhythm",
    tag: "Songs from silence",
    body: "Hands-on time with guitars, pianos and drum sets. From the first shy note to a full band jam, every child finds a sound that belongs to them.",
    Icon: KeyboardMusic,
  },
  {
    name: "The Art of Baking",
    tag: "Science in the kitchen",
    body: "Cakes, buns, fries and pastry designs. A warm workshop where measuring, patience and a little courage turn simple ingredients into something worth sharing.",
    Icon: Cookie,
  },
  {
    name: "Fashion & Design",
    tag: "Stitching identity",
    body: "Tailoring, crocheting and needlework. Children sketch, cut and stitch their first pieces — learning that clothes can be a language they write themselves.",
    Icon: Scissors,
  },
  {
    name: "Arts & Crafts",
    tag: "Colour, texture, story",
    body: "Paint, paper, clay and found materials. A free-form studio where a smudge becomes a sky and every child discovers that a blank page is an invitation, not a test.",
    Icon: Palette,
  },
  {
    name: "Photography",
    tag: "Seeing on purpose",
    body: "Learning to notice — light, faces, small ordinary miracles. Children handle real cameras and leave with a portfolio of frames only they could have seen.",
    Icon: Camera,
  },
  {
    name: "Videography",
    tag: "Stories that move",
    body: "From phone-shot scenes to short films: framing, sound and the first taste of editing. Children learn that a story you can play back is a story that lasts.",
    Icon: Video,
  },
  {
    name: "Leadership",
    tag: "The courage to guide",
    body: "Small-group challenges that quietly teach children to speak up, listen well and take a decision with a room watching. Confidence, practised.",
    Icon: Users,
  },
  {
    name: "Indoor & Strategy Games",
    tag: "Play that sharpens the mind",
    body: "Chess, Monopoly, Scrabble, cards and Jenga. Focus, patience and playful rivalry — where losing well is the first lesson and thinking ahead is the reward.",
    Icon: Crown,
  },
  {
    name: "Sports",
    tag: "The joy of the body",
    body: "Football, athletics and outdoor drills. Sweat, laughter and the small triumph of a body that surprises its owner by what it can do.",
    Icon: Trophy,
  },
  {
    name: "Team Building",
    tag: "Better together",
    body: "Group tasks that only work when everyone shows up. Trust, communication and the quiet magic of a plan that a team — not a person — pulled off.",
    Icon: HeartHandshake,
  },
];

const sponsorshipTiers = [
  {
    tier: "Meals",
    line: "Warm plates for one child, all three days.",
    amount: "KES 1,500",
  },
  {
    tier: "Materials",
    line: "Paint, code kits and thread for one workshop.",
    amount: "KES 3,000",
  },
  {
    tier: "Equipment",
    line: "A camera or an instrument that outlasts the camp.",
    amount: "KES 8,000",
  },
  {
    tier: "Transport",
    line: "Getting a child to camp, and safely home.",
    amount: "KES 2,000",
  },
  {
    tier: "Scholarship",
    line: "A full path — meals, materials, mentorship for one dreamer.",
    amount: "KES 15,000",
  },
  {
    tier: "General Gift",
    line: "Wherever the need is loudest. Every shilling counts.",
    amount: "Any amount",
  },
];

const faqs = [
  {
    q: "Who is the bootcamp for?",
    a: "Any child aged 8 to 16. No prior skill is needed — the whole point is discovery. We reserve half of every cohort for children from underserved communities.",
  },
  {
    q: "How much does it cost to attend?",
    a: "Children from the home attend fully free. Children joining from the wider community contribute KES 1,500 each — this covers their snacks, materials and a share of the organizing costs. Sponsors and partners cover everything else.",
  },
  {
    q: "When and where does it happen?",
    a: "Thursday 20th, Friday 21st and Saturday 22nd of August — three days during the August school holiday. The venue is our home base in Nairobi; full directions are shared on registration.",
  },
  {
    q: "How are the children kept safe?",
    a: "Every mentor is background-checked and trained in child safeguarding. Parents check in and out of the venue in person, and we operate a strict 1:6 mentor-to-child ratio.",
  },
  {
    q: "Can my company become a partner?",
    a: "Yes. We work with a handful of long-term partners each year on materials, equipment and scholarships. Reach out through the invitation section and we'll send our partnership pack.",
  },
  {
    q: "Where does my donation actually go?",
    a: "100% of donations go directly to the child experience: meals, transport, materials, equipment and scholarships. Our books are audited and published annually.",
  },
];

/* Google Form links — replaced by the organiser as they finalise each form. */
const FORM_LINKS = {
  registerChild: "https://forms.gle/your-child-registration-form",
  mentor: "https://forms.gle/oUs5PPs4JaR99gdA7",
  partner: "https://forms.gle/oUs5PPs4JaR99gdA7",
  donate: "https://forms.gle/oUs5PPs4JaR99gdA7",
};

/* ------------------------------------------------------------------ */
/*   Page                                                              */
/* ------------------------------------------------------------------ */

function Index() {
  return (
    <main className="relative overflow-x-hidden text-ink">
      {/*
        THE THREAD (global motif) — a single hairline that runs down the left
        edge of the layout and warms from cool blue to orange. It is the visual
        embodiment of "potential unlocking" and reappears, resolved, in the
        footer as a kite string.
      */}
      <div
        aria-hidden
        className="thread pointer-events-none fixed left-6 top-0 z-0 hidden h-full w-px opacity-40 lg:block"
      />

      <TopNav />
      <ChapterSpark />
      <ChapterContext />
      <ChapterBelief />
      <ChapterDiscovery />
      <ChapterJourney />
      <ChapterCircle />
      <ChapterInvitation />
      <ChapterDetails />
      <SiteFooter />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*   Nav                                                               */
/* ------------------------------------------------------------------ */

function TopNav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#spark", label: "The Spark" },
    { href: "#context", label: "The Challenge" },
    { href: "#belief", label: "The Transformation" },
    { href: "#discovery", label: "The Crafts" },
    { href: "#journey", label: "Three Days" },
    { href: "#circle", label: "The Circle" },
    { href: "#invitation", label: "Get Involved" },
    { href: "#details", label: "FAQ & Contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-parchment/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <a
          href="#spark"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-2"
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 shrink-0 rounded-full bg-brand-orange"
          />
          <span className="truncate font-display text-base font-medium tracking-tight sm:text-lg">
            #MyTalentMyFuture
          </span>
        </a>

        {/* Desktop chapter nav */}
        <nav
          aria-label="Chapters"
          className="hidden flex-1 justify-center gap-5 text-[13px] text-ink/70 xl:flex"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#invitation"
            className="hidden items-center gap-2 rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-parchment ring-1 ring-ink transition-colors hover:bg-brand-orange hover:ring-brand-orange sm:inline-flex"
          >
            Register
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full bg-white ring-1 ring-black/10 text-ink xl:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet chapter drawer */}
      {open && (
        <div className="border-t border-black/5 bg-parchment/95 backdrop-blur-md xl:hidden">
          <nav
            aria-label="Chapters (mobile)"
            className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-white hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#invitation"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-between rounded-full bg-ink px-4 py-2 text-sm font-medium text-parchment sm:hidden"
            >
              Register a child
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*   Chapter I — The Spark                                             */
/* ------------------------------------------------------------------ */

function ChapterSpark() {
  return (
    <section
      id="spark"
      className="relative overflow-hidden bg-chapter-spark px-6 pb-16 pt-28 md:pb-20 md:pt-32"
    >
      {/* Faint drawn thread — appears here for the first time. */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M -50 700 C 300 620, 500 780, 780 640 S 1200 500, 1500 560"
          fill="none"
          stroke="url(#threadGrad)"
          strokeWidth="1.5"
          className="animate-thread-draw"
        />
        <defs>
          <linearGradient id="threadGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.5" />
            <stop
              offset="100%"
              stopColor="var(--brand-yellow)"
              stopOpacity="0.9"
            />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center justify-center pb-16 mb-4">
        <p className="my-6 max-w-[36ch] text-center font-display text-lg italic text-ink/60">
          A dream waiting to catch the wind.
        </p>
        <svg
          aria-hidden
          width="48"
          height="48"
          viewBox="0 0 48 48"
          className="animate-float-slow"
        >
          {/* Upright, rising kite */}
          <polygon
            points="24,4 40,16 24,44 8,16"
            fill="var(--brand-orange)"
            opacity="0.9"
          />
          <line x1="24" y1="4" x2="24" y2="44" stroke="white" strokeWidth="1" />
          <line x1="8" y1="16" x2="40" y2="16" stroke="white" strokeWidth="1" />
        </svg>
        <div className="thread h-16 w-px opacity-70 mt-2" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Kicker tone="blue">Chapter I · The Spark</Kicker>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-ink/70 [border-width:0.5px] border-ink/15">
            <CalendarDays className="h-3.5 w-3.5 text-brand-orange" />
            August 20 – 22, 2026 · Thu · Fri · Sat
          </div>
          <h1 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Every child has <em className="italic font-light">potential</em>.
          </h1>
          <p className="mt-6 max-w-[52ch] text-pretty text-base leading-relaxed text-ink/70 md:text-lg">
            But potential alone is not enough. They need exposure, mentors, and
            opportunities. This is a movement to help children discover what
            they can become.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#invitation"
              className="inline-flex items-center gap-3 rounded-full bg-brand-blue py-3 pl-3 pr-5 text-sm font-medium text-white ring-1 ring-brand-blue hover:translate-y-px transition-transform"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                <Plus className="h-3.5 w-3.5" />
              </span>
              Register a child
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-3 rounded-full bg-transparent py-3 pl-3 pr-5 text-sm font-medium text-ink/80 ring-1 ring-black/10 hover:bg-white transition-colors"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-ink/5">
                →
              </span>
              Read the story
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src={heroSpark}
              alt="A child looking upward at a glowing thread of light in their open palm — the moment of discovery."
              width={1200}
              height={1408}
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_40px_80px_-40px_rgba(3,105,161,0.35)]"
            />
            {/* Decorative dashed circle — a soft "orbit" behind the child */}
            <div
              aria-hidden
              className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-dashed border-brand-blue/30 animate-float-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*   Chapter II — The Context (Makimei Children's Home)                */
/* ------------------------------------------------------------------ */

function ChapterContext() {
  return (
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
  );
}

/* ------------------------------------------------------------------ */
/*   Chapter III — The Transformation                                  */
/* ------------------------------------------------------------------ */

function ChapterBelief() {
  const stats = [
    { n: "100+", label: "Children reached" },
    { n: "10+", label: "Mentors on the floor" },
    { n: "11", label: "Crafts to try" },
    { n: "100%", label: "Free for every child" },
  ];
  return (
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
                className={`rounded-3xl border border-black/5 bg-white/70 p-8 ${
                  i === 1 ? "translate-y-8" : ""
                } ${i === 2 ? "-translate-y-4" : ""}`}
              >
                <div className="font-display text-4xl font-medium text-brand-blue md:text-5xl">
                  {s.n}
                </div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-widest text-ink/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-[40ch] font-display text-xl italic text-ink/60">
            "Many children never discover their gifts because they have never
            been exposed to different possibilities."
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*   Chapter IV — The Discovery (departments)                          */
/* ------------------------------------------------------------------ */

function ChapterDiscovery() {
  return (
    <section
      id="discovery"
      className="relative bg-chapter-discovery px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[48ch]">
            <Kicker tone="yellow">Chapter IV · The Discovery</Kicker>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] md:text-4xl">
              Eleven worlds. <br />
              <em className="italic">One doorway.</em>
            </h2>
          </div>
          <p className="max-w-[36ch] text-ink/70">
            From the precision of code to the rhythm of the drum — every craft
            is a mirror held up to a different child.
          </p>
        </Reveal>

        {/*
          Staggered off-grid layout — every third card lifts, every fifth drops.
          Cards deliberately break the uniform-grid instinct so this chapter
          reads as a curated set of doorways, not a spreadsheet.
        */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((d, i) => (
            <Reveal
              key={d.name}
              delay={(i % 4) * 80}
              className={`group relative overflow-hidden rounded-3xl bg-white/70 p-8 transition-all [border-width:0.5px] border-ink/15 hover:border-brand-orange/60 hover:bg-white ${
                i % 3 === 0 ? "lg:translate-y-6" : ""
              } ${i % 5 === 0 ? "lg:-translate-y-2" : ""}`}
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <d.Icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-medium">
                {d.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-ink/40">
                {d.tag}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {d.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*   Chapter V — The Journey (three-day arc)                            */
/* ------------------------------------------------------------------ */

function ChapterJourney() {
  const days = [
    {
      day: "Day One",
      title: "Discover",
      body: "Children rotate through every workshop, tasting each craft to find where their heart beats fastest.",
      tone: "text-brand-yellow",
      dot: "bg-brand-yellow",
    },
    {
      day: "Day Two",
      title: "Learn",
      body: "Deep-dive mentorship. Every child chooses their path and begins building the cornerstone piece they'll show the world.",
      tone: "text-brand-green",
      dot: "bg-brand-green",
    },
    {
      day: "Day Three",
      title: "Showcase",
      body: "Family, friends and the community gather as the children unveil what they've made — and, quietly, who they've become.",
      tone: "text-brand-orange",
      dot: "bg-brand-orange",
    },
  ];

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-chapter-journey px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-24 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Kicker tone="orange">Chapter V · The Journey</Kicker>
            <h2 className="mt-6 font-display text-4xl font-medium md:text-4xl">
              A story in <em className="italic">three acts.</em>
            </h2>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-ink/70">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 [border-width:0.5px] border-ink/15">
                <CalendarDays className="h-3.5 w-3.5 text-brand-orange" />
                Thu 20 – Sat 22 August, 2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 [border-width:0.5px] border-ink/15">
                Children from the home ·{" "}
                <strong className="font-semibold text-ink">Free</strong>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 [border-width:0.5px] border-ink/15">
                Community children ·{" "}
                <strong className="font-semibold text-ink">KES 1,500</strong>
              </span>
            </div>
          </div>
          <p className="max-w-[38ch] text-ink/70">
            The camp is deliberately short. Three days is long enough for a
            child to try, to choose, and to show what they made.
          </p>
        </Reveal>

        {/* Horizontal three-column spread on desktop, storybook-style */}
        <div className="relative border-t border-brand-orange/20 pt-14 md:grid md:grid-cols-3 md:gap-12">
          {days.map((d, i) => (
            <Reveal
              key={d.day}
              delay={i * 200}
              className="relative mt-14 first:mt-0 md:mt-0"
            >
              <span
                aria-hidden
                className={`absolute -top-[3.75rem] left-0 h-3 w-3 rounded-full ${d.dot}`}
              />
              <div className={`kicker ${d.tone}`}>{d.day}</div>
              <h3 className="mt-4 font-display text-3xl font-medium md:text-4xl">
                {d.title}
              </h3>
              <p className="mt-4 max-w-[36ch] text-ink/70">{d.body}</p>
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
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*   Chapter VI — The Circle (team / partners / volunteer CTA)         */
/* ------------------------------------------------------------------ */

function ChapterCircle() {
  const team = [
    {
      name: "Daniel Wega",
      roles: ["Founder Dacxi Technologies", "Bootcamp Lead Coordinator"],
      image: daniewega,
    },
    {
      name: "Ochran Ongeri",
      roles: ["Founder Palaver Africa", "Assistant Bootcamp Coordinator"],
      image: "",
    },
    {
      name: "Carolyne Wahuu",
      roles: ["Miss Kikuyu 2026-2027"],
      image: wahuu,
    },
    {
      name: "Anthony Turungi",
      roles: ["Founder Kym_creates"],
      image: kym,
    },
    {
      name: "Amina K.",
      roles: ["Operations Lead", "Safeguarding"],
      image: "",
    },
    {
      name: "Joel M.",
      roles: ["Head of Mentorship"],
      image: "",
    },
  ];
  const partners = [
    "Makimei Children's Home",
    "Palaver Africa",
    "Dacxi Technologies",
    "Kym_creates",
  ];

  return (
    <section id="circle" className="relative bg-chapter-journey/60 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center max-w-[54ch] mx-auto">
          <Kicker tone="green">Chapter VI · The Circle</Kicker>
          <h2 className="mt-6 font-display text-4xl font-medium md:text-4xl">
            None of this happens <em className="italic">alone.</em>
          </h2>
          <p className="mt-6 text-ink/70">
            A small, stubborn team, a wider circle of mentors, and the partners
            who quietly make the impossible tick.
          </p>
        </Reveal>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="group flex flex-col items-center gap-6 rounded-3xl border border-black/5 bg-white/70 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 hover:bg-white hover:shadow-lg"
              >
                <img
                  src={m.image}
                  className="h-24 w-24 shrink-0 rounded-full object-cover ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105 bg-black/5"
                />
                <div className="flex flex-col gap-2 w-full">
                  <div className="font-display text-xl font-medium leading-tight">
                    {m.name}
                  </div>
                  <div className="flex flex-col gap-1 mt-2">
                    {m.roles.map((role, idx) => (
                      <div
                        key={idx}
                        className="text-[11px] leading-tight uppercase tracking-widest text-ink/50"
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 items-start">
          <div className="rounded-3xl border border-black/5 bg-white/70 p-10 h-full">
            <div className="kicker text-brand-blue">Our partners</div>
            <ul className="mt-6 divide-y divide-black/5">
              {partners.map((p) => (
                <li
                  key={p}
                  className="flex items-center justify-between py-5 font-display text-xl"
                >
                  <span>{p}</span>
                  <span className="text-ink/30 text-xs font-sans">
                    since '22
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-ink p-10 text-parchment ring-1 ring-ink h-full flex flex-col justify-between">
            <div>
              <div className="kicker text-parchment/60">Volunteers</div>
              <h3 className="mt-4 font-display text-3xl font-medium">
                Invest in a young life.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-parchment/80">
                Children often discover their future because one adult believed
                in them. Volunteers make that possible. They bring knowledge,
                encouragement, and mentorship.
              </p>
              <p className="mt-3 text-base leading-relaxed text-parchment/80">
                You don't need to be a teacher. We need people to organize,
                mentor, supervise, coordinate logistics, support departments,
                and capture media.
              </p>
            </div>
            <a
              href="https://forms.gle/oUs5PPs4JaR99gdA7"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-parchment px-5 py-3 text-sm font-medium text-ink ring-1 ring-parchment transition-colors hover:bg-brand-orange hover:text-white hover:ring-brand-orange w-fit"
            >
              Volunteer with us <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*   Chapter VII — The Invitation (register / sponsor / donate)        */
/* ------------------------------------------------------------------ */

function ChapterInvitation() {
  return (
    <section
      id="invitation"
      className="relative bg-chapter-invitation px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-20 max-w-[56ch]">
          <Kicker tone="orange">Chapter VII · The Invitation</Kicker>
          <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] sm:text-4xl md:text-4xl">
            Partners in <br />
            <em className="italic">impact.</em>
          </h2>
          <p className="mt-8 max-w-[46ch] text-lg text-ink/70">
            Sponsorship is an investment in the future of children. While
            financial support is crucial, we also invite partners to support
            through equipment, books, internet, computers, training materials,
            or professional expertise.
          </p>
        </Reveal>

        {/* Sponsorship tiers, styled as handwritten gift tags rather than
            identical pricing cards. Each tag has a clipped corner + a "hole". */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sponsorshipTiers.map((t, i) => (
            <Reveal
              key={t.tier}
              delay={(i % 3) * 100}
              className="gift-tag relative flex flex-col items-start bg-white p-8 ring-1 ring-black/5"
            >
              <div
                aria-hidden
                className="absolute left-4 top-4 h-3 w-3 rounded-full border border-ink/20 bg-chapter-invitation"
              />
              <div className="kicker mt-4 text-ink/40">{t.tier}</div>
              <p className="mt-4 max-w-[24ch] font-display text-xl leading-snug">
                {t.line}
              </p>
              <div className="mt-auto flex w-full items-center justify-between pt-8">
                <span className="font-display text-lg text-ink">
                  {t.amount}
                </span>
                <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-brand-orange ring-1 ring-brand-orange/30 hover:bg-brand-orange hover:text-white transition-colors">
                  Sponsor <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Registration hub + payment details */}
        <Reveal className="mt-16 overflow-hidden rounded-3xl bg-white ring-1 ring-black/5">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14">
              <div className="kicker text-brand-blue">Registration hub</div>
              <h3 className="mt-4 font-display text-3xl font-medium">
                Join the circle.
              </h3>
              <p className="mt-3 max-w-[40ch] text-sm text-ink/60">
                Four doors, one arena. Open for children aged 8–16 and the
                adults who show up for them. Community children contribute KES
                1,500 to cover snacks and materials.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  {
                    label: "Register a child",
                    href: FORM_LINKS.registerChild,
                    primary: true,
                  },
                  { label: "Volunteer as a mentor", href: FORM_LINKS.mentor },
                  { label: "Partner with us", href: FORM_LINKS.partner },
                  { label: "Make a donation", href: FORM_LINKS.donate },
                ].map((cta) => (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-medium transition-colors ${
                      cta.primary
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

            <div className="bg-ink p-10 text-parchment md:p-14">
              <div className="kicker text-parchment/50">Give directly</div>
              <h3 className="mt-4 font-display text-3xl font-medium">
                Straight to the child.
              </h3>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-[10px] uppercase tracking-widest text-parchment/50">
                    Paybill/Business No.
                  </div>
                  <div className="mt-1 font-mono text-2xl font-medium">
                    247247
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-parchment/50">
                    Account No.
                  </div>
                  <div className="mt-1 font-mono text-2xl font-medium">
                    792447
                  </div>
                  <div className="mt-1 text-xs text-parchment/60">
                    Account Name: MyTalentMyFuture Bootcamp Makimei
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs leading-relaxed text-parchment/60">
                    100% of donations go directly to child resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*   Chapter IX — The Details (FAQ + contact)                          */
/* ------------------------------------------------------------------ */

function ChapterDetails() {
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
              {[Instagram, Facebook, Twitter, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-black/5 text-ink/60 hover:bg-brand-orange hover:text-white transition-colors"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

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

/* ------------------------------------------------------------------ */
/*   Footer — the motif resolves                                        */
/* ------------------------------------------------------------------ */

function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-parchment px-6 pb-12 pt-24 border-t border-black/5">
      {/* The thread resolves here: it terminates at a small kite. */}
      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-col items-center justify-center pb-16">
          <div className="thread h-24 w-px opacity-70" />
          <svg
            aria-hidden
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className="mt-1 animate-float-slow"
          >
            <polygon
              points="24,4 44,24 24,44 4,24"
              fill="var(--brand-orange)"
              opacity="0.9"
            />
            <line
              x1="24"
              y1="4"
              x2="24"
              y2="44"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="4"
              y1="24"
              x2="44"
              y2="24"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
          <p className="mt-6 max-w-[36ch] text-center font-display text-lg italic text-ink/60">
            From a silent song, to a kite in the sky.
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 border-t border-black/10 pt-10 md:flex-row md:items-center">
          <div>
            <div className="font-display text-2xl font-medium">
              #MyTalentMyFuture
            </div>
            <p className="mt-2 max-w-[42ch] text-sm text-ink/60">
              A community-led initiative for the unbridled creativity of our
              youth. Nairobi, Kenya.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/60"
          >
            <a href="#discovery" className="hover:text-ink">
              Crafts
            </a>
            <a href="#journey" className="hover:text-ink">
              Three Days
            </a>
            <a href="#invitation" className="hover:text-ink">
              Invitation
            </a>
            <a href="#details" className="hover:text-ink">
              FAQ
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 text-[10px] uppercase tracking-widest text-ink/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} MyTalentMyFuture Initiative.</span>
          <span>Hand-crafted with hope.</span>
        </div>
      </div>
    </footer>
  );
}
