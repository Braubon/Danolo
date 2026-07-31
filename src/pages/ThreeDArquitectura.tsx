import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useT } from "@/i18n/LanguageContext";

import salon from "@/assets/3d/arq-salon.webp";
import cocina from "@/assets/3d/arq-cocina.webp";
import estudio from "@/assets/3d/arq-estudio.webp";
import escritorio from "@/assets/3d/arq-escritorio.webp";

const ThreeDArquitectura = () => {
  const t = useT();
  const gallery = [
    { src: salon, alt: t.threed.arch.alt.salon },
    { src: cocina, alt: t.threed.arch.alt.cocina },
    { src: estudio, alt: t.threed.arch.alt.estudio },
    { src: escritorio, alt: t.threed.arch.alt.escritorio }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(() => setOpenIdx((i) => (i === null ? i : (i + 1) % gallery.length)), [gallery.length]);
  const prev = useCallback(() => setOpenIdx((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)), [gallery.length]);

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

  const openImage = (src: string) => { const idx = gallery.findIndex((im) => im.src === src); if (idx >= 0) setOpenIdx(idx); };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container py-10 md:py-14">
          <Link to="/3d" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider hover:text-accent">
            <ArrowLeft className="w-3.5 h-3.5" /> {t.threed.backLabel}
          </Link>
          <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="font-display font-bold text-accent text-5xl md:text-7xl leading-tight">{t.threed.projects.arch.title}</h1>
            <p className="max-w-md font-sans text-base md:text-lg text-foreground/85">{t.threed.projects.arch.tagline}</p>
          </div>
        </section>

        <section className="container pb-12">
          {/* Bloque continuo de presentación */}
          <div className="hard-block w-full overflow-hidden flex flex-col mb-14 bg-[#1a1a1c]">
            <img src={salon} alt={t.threed.arch.alt.salon} onClick={() => openImage(salon)} className="w-full h-auto block cursor-pointer" />
            <img src={cocina} alt={t.threed.arch.alt.cocina} onClick={() => openImage(cocina)} className="w-full h-auto block cursor-pointer" />
            
            <div className="grid grid-cols-2">
              <img src={estudio} alt={t.threed.arch.alt.estudio} onClick={() => openImage(estudio)} className="w-full h-auto block cursor-pointer" />
              <img src={escritorio} alt={t.threed.arch.alt.escritorio} onClick={() => openImage(escritorio)} className="w-full h-auto block cursor-pointer" />
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <Link to="/3d" className="hard-block squish inline-flex items-center gap-3 bg-cta text-cta-foreground font-display font-bold uppercase tracking-wider px-8 py-4">
              <ArrowLeft className="w-4 h-4" /> {t.threed.backToProjects}
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
          <img src={gallery[openIdx].src} alt={gallery[openIdx].alt} onClick={(e) => e.stopPropagation()} className="max-h-[88vh] max-w-[90vw] object-contain select-none" />
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 md:right-6 text-white/90 hover:text-white p-2" aria-label={t.common.next}><ArrowRight className="w-7 h-7" /></button>
          <div className="absolute bottom-4 left-0 right-0 text-center font-mono text-xs text-white/70">{openIdx + 1} / {gallery.length}</div>
        </div>
      )}
    </div>
  );
};

export default ThreeDArquitectura;
