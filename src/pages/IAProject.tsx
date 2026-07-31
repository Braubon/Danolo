import { useState, useEffect, useCallback } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useT } from "@/i18n/LanguageContext";
import fresli01 from "@/assets/fresli/cartel-01.png";
import fresli02 from "@/assets/fresli/cartel-02.png";
import fresli03 from "@/assets/fresli/cartel-03.png";

const IAProject = () => {
  const t = useT();
  const { slug = "" } = useParams();

  const fresli = [
    { src: fresli01, alt: t.ia.altFresli1 },
    { src: fresli02, alt: t.ia.altFresli2 },
    { src: fresli03, alt: t.ia.altFresli3 },
  ];

  const projectMap: Record<string, { title: string; tagline: string }> = {
    "fotografia-publicitaria": { title: t.ia.projects.photo.title, tagline: t.ia.projects.photo.tagline },
    "identidad-consistente": { title: t.ia.projects.identity.title, tagline: t.ia.projects.identity.tagline },
    "del-boceto-a-la-realidad": { title: t.ia.projects.sketch.title, tagline: t.ia.projects.sketch.tagline },
  };
  const project = projectMap[slug];

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(() => setOpenIdx((i) => (i === null ? i : (i + 1) % fresli.length)), [fresli.length]);
  const prev = useCallback(() => setOpenIdx((i) => (i === null ? i : (i - 1 + fresli.length) % fresli.length)), [fresli.length]);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [openIdx, close, next, prev]);

  if (!project) return <Navigate to="/ia" replace />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container py-10 md:py-14">
          <Link to="/ia" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider hover:text-accent">
            <ArrowLeft className="w-3.5 h-3.5" /> {t.ia.backLabel}
          </Link>
          <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="font-display font-bold text-accent text-5xl md:text-7xl leading-tight">{project.title}</h1>
            <p className="max-w-md font-sans text-base md:text-lg text-foreground/85">{project.tagline}</p>
          </div>
        </section>

        <section className="container pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {fresli.map((p, i) => (
              <button key={p.src} type="button" onClick={() => setOpenIdx(i)} className="hard-block-sm squish-sm overflow-hidden block w-full p-0 group" aria-label={`${t.common.enlarge}: ${p.alt}`}>
                <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-[1.02]" />
              </button>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link to="/ia" className="hard-block squish inline-flex items-center gap-3 bg-cta text-cta-foreground font-display font-bold uppercase tracking-wider px-8 py-4">
              <ArrowLeft className="w-4 h-4" /> {t.ia.backToProjects}
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />

      {openIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in" onClick={close} role="dialog" aria-modal="true">
          <button type="button" onClick={(e) => { e.stopPropagation(); close(); }} className="absolute top-4 right-4 text-white/90 hover:text-white p-2" aria-label={t.common.close}><X className="w-6 h-6" /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 md:left-6 text-white/90 hover:text-white p-2" aria-label={t.common.prev}><ArrowLeft className="w-7 h-7" /></button>
          <img src={fresli[openIdx].src} alt={fresli[openIdx].alt} onClick={(e) => e.stopPropagation()} className="max-h-[88vh] max-w-[90vw] object-contain select-none" />
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 md:right-6 text-white/90 hover:text-white p-2" aria-label={t.common.next}><ArrowRight className="w-7 h-7" /></button>
          <div className="absolute bottom-4 left-0 right-0 text-center font-mono text-xs text-white/70">{openIdx + 1} / {fresli.length}</div>
        </div>
      )}
    </div>
  );
};

export default IAProject;
