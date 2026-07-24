import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function TopNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: "/#spark", label: "The Spark" },
    { href: "/#context", label: "The Challenge" },
    { href: "/#belief", label: "The Transformation" },
    { href: "/#discovery", label: "The Crafts" },
    { href: "/#journey", label: "Three Days" },
    { href: "/#circle", label: "The Circle" },
    { href: "/#invitation", label: "Get Involved" },
    { href: "/#details", label: "FAQ & Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-parchment/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <a
          href="/#spark"
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
          <Link
            to="/register"
            className="hidden items-center gap-2 rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-parchment ring-1 ring-ink transition-colors hover:bg-brand-orange hover:ring-brand-orange sm:inline-flex"
          >
            Register
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
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
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-between rounded-full bg-ink px-4 py-2 text-sm font-medium text-parchment sm:hidden"
            >
              Register a child
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
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
            <a href="/#discovery" className="hover:text-ink">
              Crafts
            </a>
            <a href="/#journey" className="hover:text-ink">
              Three Days
            </a>
            <a href="/#invitation" className="hover:text-ink">
              Invitation
            </a>
            <a href="/#details" className="hover:text-ink">
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

export function Layout({ children }: { children: React.ReactNode }) {
  // Use a unique key on main so that scrolling changes can trigger if needed, or simply render children
  return (
    <main className="relative overflow-x-hidden text-ink">
      <div
        aria-hidden
        className="thread pointer-events-none fixed left-6 top-0 z-0 hidden h-full w-px opacity-40 lg:block"
      />
      <TopNav />
      {children}
      <SiteFooter />
    </main>
  );
}
