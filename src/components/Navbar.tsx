import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { useLang, useT } from "@/i18n/LanguageContext";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { lang, setLang } = useLang();
  const t = useT();

  const links = [
    {
      label: t.nav.design,
      to: "/diseno",
      projects: [
        { label: t.nav.arsenal, to: "/diseno/arsenal" },
        { label: t.nav.dew, to: "/diseno/dew" },
        { label: t.nav.diceup, to: "/diseno/diceup" },
        { label: t.nav.oshun, to: "/diseno/oshun" },
      ],
    },
    {
      label: t.nav.ai,
      to: "/ia",
      projects: [
        { label: t.nav.aiPhotography, to: "/ia/fotografia-publicitaria" },
        { label: t.nav.aiIdentity, to: "/ia/identidad-consistente" },
        { label: t.nav.aiSketch, to: "/ia/del-boceto-a-la-realidad" },
      ],
    },
    {
      label: t.nav.threed,
      to: "/3d",
      projects: undefined as undefined | { label: string; to: string }[],
    },
    { label: t.nav.about, to: "/about", projects: undefined as undefined | { label: string; to: string }[] },
    { label: t.nav.contact, to: "#contacto", projects: undefined },
  ];

  const LangToggle = ({ className = "" }: { className?: string }) => (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`inline-flex items-center border-2 border-foreground bg-card font-mono text-xs uppercase tracking-wider ${className}`}
    >
      {(["es", "en"] as const).map((code, i) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1 transition-colors ${
            lang === code ? "bg-accent text-accent-foreground" : "hover:text-accent"
          } ${i === 0 ? "border-r-2 border-foreground" : ""}`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur">
      {/* Portfolio-in-progress banner */}
      <div className="border-b-2 border-foreground bg-accent text-accent-foreground">
        <p className="container py-1.5 text-center font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] animate-[pulse_3s_ease-in-out_infinite]">
          {t.common.portfolioBanner}
        </p>
      </div>

      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 squish-sm" aria-label={t.nav.home}>
          <Logo className="w-12 h-auto" variant="icon" />
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-display text-base">
          {links.map((l) => {
            const active = l.to === pathname;
            const isHash = l.to.startsWith("#");
            const handleHash = (e: React.MouseEvent) => {
              if (!isHash) return;
              e.preventDefault();
              const id = l.to.slice(1);
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            };
            return (
              <li key={l.label} className="relative group">
                <Link
                  to={isHash ? pathname + l.to : l.to}
                  onClick={handleHash}
                  className={`inline-flex items-center gap-1 transition-colors hover:text-accent ${
                    active ? "text-accent" : ""
                  }`}
                >
                  {l.label}
                  {l.projects && (
                    <ChevronDown
                      className="w-3.5 h-3.5 transition-transform group-hover:rotate-180"
                      strokeWidth={2.5}
                    />
                  )}
                </Link>
                {l.projects && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <ul className="hard-block-sm bg-card min-w-[180px] py-2">
                      {l.projects.map((p) => (
                        <li key={p.label}>
                          <Link
                            to={p.to}
                            className="block px-4 py-1.5 text-sm hover:text-accent hover:bg-muted/50"
                          >
                            {p.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
          <li>
            <LangToggle />
          </li>
        </ul>

        <button
          className="md:hidden p-2 border-2 border-foreground bg-card"
          onClick={() => setOpen((v) => !v)}
          aria-label={t.nav.openMenu}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>



      {open && (
        <div className="md:hidden border-t-2 border-foreground bg-card">
          <ul className="container flex flex-col py-4 gap-3 font-display">
            {links.map((l) => {
              const isHash = l.to.startsWith("#");
              return (
                <li key={l.label}>
                  <Link
                    to={isHash ? pathname + l.to : l.to}
                    onClick={(e) => {
                      setOpen(false);
                      if (isHash) {
                        e.preventDefault();
                        const el = document.getElementById(l.to.slice(1));
                        if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
                      }
                    }}
                    className="block py-1"
                  >
                    {l.label}
                  </Link>
                  {l.projects && (
                    <ul className="pl-4 mt-1 space-y-1 text-sm opacity-80">
                      {l.projects.map((p) => (
                        <li key={p.label}>
                          <Link to={p.to} onClick={() => setOpen(false)} className="block py-0.5">
                            → {p.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
            <li className="pt-2 border-t-2 border-foreground/20">
              <LangToggle />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
