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

import becca1 from "@/assets/identidad-consistente/becca/becca-1.jpg";
import becca2 from "@/assets/identidad-consistente/becca/becca-2.jpg";
import becca3 from "@/assets/identidad-consistente/becca/becca-3.jpg";
import becca4 from "@/assets/identidad-consistente/becca/becca-4.jpg";
import becca5 from "@/assets/identidad-consistente/becca/becca-5.jpg";
import becca6 from "@/assets/identidad-consistente/becca/becca-6.jpg";
import becca7 from "@/assets/identidad-consistente/becca/becca-7.jpg";
import becca8 from "@/assets/identidad-consistente/becca/becca-8.jpg";
import becca9 from "@/assets/identidad-consistente/becca/becca-9.jpg";
import becca10 from "@/assets/identidad-consistente/becca/becca-10.jpg";
import becca11 from "@/assets/identidad-consistente/becca/becca-11.jpg";

const IAProject = () => {
  const t = useT();
  const { slug = "" } = useParams();

  const fresliImages = [
    { src: fresli01, alt: t.ia.altFresli1 },
    { src: fresli02, alt: t.ia.altFresli2 },
    { src: fresli03, alt: t.ia.altFresli3 },
  ];

  const beccaImages = [
    { src: becca1, alt: "Identidad Consistente — Becca 1" },
    { src: becca2, alt: "Identidad Consistente — Becca 2" },
    { src: becca3, alt: "Identidad Consistente — Becca 3" },
    { src: becca4, alt: "Identidad Consistente — Becca 4" },
    { src: becca5, alt: "Identidad Consistente — Becca 5" },
    { src: becca6, alt: "Identidad Consistente — Becca 6" },
    { src: becca7, alt: "Identidad Consistente — Becca 7" },
    { src: becca8, alt: "Identidad Consistente — Becca 8" },
    { src: becca9, alt: "Identidad Consistente — Becca 9" },
    { src: becca10, alt: "Identidad Consistente — Becca 10" },
    { src: becca11, alt: "Identidad Consistente — Becca 11" },
  ];

  const currentGallery = slug === "identidad-consistente" ? beccaImages : fresliImages;

  const projectMap: Record<string, { title: string; tagline: string }> = {
    "fotografia-publicitaria": { title: t.ia.projects.photo.title, tagline: t.ia.projects.photo.tagline },
    "identidad-consistente": { title: t.ia.projects.identity.title, tagline: t.ia.projects.identity.tagline },
    "del-boceto-a-la-realidad": { title: t.ia.projects.sketch.title, tagline: t.ia.projects.sketch.tagline },
  };
  const project = projectMap[slug];

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(() => setOpenIdx((i) => (i === null ? i : (i + 1) % currentGallery.length)), [currentGallery.length]);
  const prev = useCallback(() => setOpenIdx((i) => (i === null ? i : (i - 1 + currentGallery.length) % currentGallery.length)), [currentGallery.length]);

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
          {slug === "identidad-consistente" ? (
            /* Bloque continuo de presentación Behance según referencia visual */
            <div className="hard-block w-full overflow-hidden flex flex-col mb-14 bg-[#1a1a1c]">
              {/* 1. Becca 1 (Ancho completo - Círculo Amarillo) */}
              <img src={becca1} alt="Becca 1" onClick={() => setOpenIdx(0)} className="w-full h-auto block cursor-pointer" />
              
              {/* 2. Becca 2 y Becca 3 (2 columnas: Rostro agua & Vestido negro) */}
              <div className="flex w-full justify-center">
                <img src={becca2} alt="Becca 2" onClick={() => setOpenIdx(1)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                <img src={becca3} alt="Becca 3" onClick={() => setOpenIdx(2)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
              </div>

              {/* 3. Becca 4 (Ancho completo - Barco bikini) */}
              <img src={becca4} alt="Becca 4" onClick={() => setOpenIdx(3)} className="w-full h-auto block cursor-pointer" />

              {/* 4. Becca 5 y Becca 6 (2 columnas: Chimenea & Pez/Busto rosa) */}
              <div className="flex w-full justify-center">
                <img src={becca5} alt="Becca 5" onClick={() => setOpenIdx(4)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                <img src={becca6} alt="Becca 6" onClick={() => setOpenIdx(5)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
              </div>

              {/* 5. Becca 7, Becca 8 y Becca 9 (3 columnas en paralelo - Yoga) */}
              <div className="flex w-full justify-center">
                <img src={becca7} alt="Becca 7" onClick={() => setOpenIdx(6)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                <img src={becca8} alt="Becca 8" onClick={() => setOpenIdx(7)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                <img src={becca9} alt="Becca 9" onClick={() => setOpenIdx(8)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
              </div>

              {/* 6. Becca 10 y Becca 11 (2 columnas en paralelo - Ventanas) */}
              <div className="flex w-full justify-center">
                <img src={becca10} alt="Becca 10" onClick={() => setOpenIdx(9)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                <img src={becca11} alt="Becca 11" onClick={() => setOpenIdx(10)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
              </div>
            </div>
          ) : (
            /* Grid genérico */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {currentGallery.map((p, i) => (
                <button key={p.src} type="button" onClick={() => setOpenIdx(i)} className="hard-block-sm squish-sm overflow-hidden block w-full p-0 group" aria-label={`${t.common.enlarge}: ${p.alt}`}>
                  <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-[1.02]" />
                </button>
              ))}
            </div>
          )}

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
          <img src={currentGallery[openIdx].src} alt={currentGallery[openIdx].alt} onClick={(e) => e.stopPropagation()} className="max-h-[88vh] max-w-[90vw] object-contain select-none" />
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 md:right-6 text-white/90 hover:text-white p-2" aria-label={t.common.next}><ArrowRight className="w-7 h-7" /></button>
          <div className="absolute bottom-4 left-0 right-0 text-center font-mono text-xs text-white/70">{openIdx + 1} / {currentGallery.length}</div>
        </div>
      )}
    </div>
  );
};

export default IAProject;
