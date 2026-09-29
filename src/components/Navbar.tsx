import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Download } from "lucide-react";
import { useLang, useT } from "@/i18n/LanguageContext";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { lang, setLang } = useLang();
  const t = useT();

  const rawLinks = [
    {
      label: t.nav.design,
      to: "/diseno",
      projects: [
        { label: t.nav.cobalto, to: "/diseno/cobalto" },
        { label: t.nav.diceup, to: "/diseno/diceup" },
        { label: t.nav.arsenal, to: "/diseno/arsenal" },
        { label: t.nav.oshun, to: "/diseno/oshun" },
      ],
    },
    {
      label: t.nav.ai,
      to: "/ia",
      projects: [
        { label: t.nav.aiPhotography, to: "/ia/fotografia-publicitaria" },
        { label: t.nav.aiIdentity, to: "/ia/identidad-consistente" },
      ],
    },
    {
      label: t.nav.threed,
      to: "/3d",
      projects: undefined as undefined | { label: string; to: string }[],
    },
    { label: t.nav.about, to: "/about", projects: undefined },
    { label: t.nav.contact, to: "#contacto", projects: undefined },
  ];

  const links = rawLinks;

  const LangToggle = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div
      role="group"
      aria-label={t.nav.language}
      className="inline-flex items-center rounded-full p-0.5 border border-stone-200 bg-stone-100/80 text-xs"
    >
      {(["es", "en"] as const).map((code) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            className={`px-2.5 py-1 text-xs font-mono font-semibold transition-all ${
              isActive
                ? "bg-white text-stone-950 shadow-sm rounded-full"
                : "text-stone-500 hover:text-stone-900"
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );

  return (
    <header className="sticky top-0 z-40 transition-colors bg-[#faf8f5]/90 border-b border-stone-200 text-stone-900 backdrop-blur-md">
      <nav className="container flex items-center justify-between py-2 sm:py-2.5">
        {/* Brand Typographic Identity */}
        <Link to="/" className="group flex flex-col items-start gap-0.5" aria-label="Daniel Sánchez — Portfolio">
          <span className="text-2xl sm:text-3xl font-editorial italic font-normal tracking-tight text-stone-950 group-hover:text-[#b24b74] transition-colors">
            Daniel Sánchez
          </span>
          <span className="text-[10px] sm:text-xs font-mono tracking-wider text-stone-500 uppercase flex items-center">
            {t.about.role}
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium font-jakarta">
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
                  className={`inline-flex items-center gap-1 py-1 transition-colors ${
                    active ? "text-[#b24b74] font-semibold" : "text-stone-700 hover:text-stone-950"
                  }`}
                >
                  <span>{l.label}</span>
                  {l.projects && (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 opacity-60 group-hover:opacity-100" />
                  )}
                </Link>

                {l.projects && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <ul className="min-w-[210px] py-2 bg-white text-stone-900 border border-stone-200 shadow-xl rounded-2xl">
                      {l.projects.map((p) => (
                        <li key={p.label}>
                          <Link
                            to={p.to}
                            className="block px-4 py-2 text-xs font-medium hover:bg-stone-50 hover:text-[#b24b74] transition-colors"
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
        </ul>

        {/* Right Actions: Lang + CV */}
        <div className="hidden md:flex items-center gap-4">
          <LangToggle />
          <a
            href={t.common.cvFile}
            download={t.common.cvFilename}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold font-jakarta tracking-wide transition-all bg-stone-950 text-white rounded-full hover:bg-[#b24b74] shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <LangToggle isMobile />
          <button
            className="p-2 border border-stone-200 bg-white rounded-xl shadow-sm text-stone-900"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.openMenu}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t border-stone-200 bg-[#faf8f5]/95 backdrop-blur-md px-6 py-6 shadow-xl animate-fade-in font-jakarta">
          <ul className="flex flex-col gap-4 text-base font-medium text-stone-900">
            {links.map((l) => {
              const isHash = l.to.startsWith("#");
              return (
                <li key={l.label}>
                  <Link
                    to={isHash ? pathname + l.to : l.to}
                    onClick={() => {
                      setOpen(false);
                      if (isHash) {
                        const id = l.to.slice(1);
                        const el = document.getElementById(id);
                        if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
                      }
                    }}
                    className="block py-1 text-lg font-semibold"
                  >
                    {l.label}
                  </Link>
                  {l.projects && (
                    <ul className="pl-4 mt-1 space-y-1.5 border-l-2 border-stone-300">
                      {l.projects.map((p) => (
                        <li key={p.label}>
                          <Link
                            to={p.to}
                            onClick={() => setOpen(false)}
                            className="block py-0.5 text-sm text-stone-600 hover:text-[#b24b74]"
                          >
                            → {p.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
            <li className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs font-mono text-stone-500 uppercase">Curriculum Vitae</span>
              <a
                href={t.common.cvFile}
                download={t.common.cvFilename}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-stone-950 text-white rounded-full"
              >
                <Download className="w-3.5 h-3.5" />
                {t.hero.cv}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
