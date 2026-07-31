import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useT } from "@/i18n/LanguageContext";

import cover from "@/assets/3d/producto-camera.webp";
import gafas from "@/assets/3d/producto-gafas.webp";
import detalle from "@/assets/3d/producto-camera-detail.webp";
import guitarra from "@/assets/3d/producto-guitarra.webp";
import reloj from "@/assets/3d/producto-reloj.webp";

const ThreeDProducto = () => {
  const t = useT();
  const gallery = [
    { src: cover, alt: t.threed.product.alt.cover },
    { src: gafas, alt: t.threed.product.alt.gafas },
    { src: detalle, alt: t.threed.product.alt.detalle },
    { src: guitarra, alt: t.threed.product.alt.guitarra },
    { src: reloj, alt: t.threed.product.alt.reloj }
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
            <h1 className="font-display font-bold text-accent text-5xl md:text-7xl leading-tight">{t.threed.projects.product.title}</h1>
            <p className="max-w-md font-sans text-base md:text-lg text-foreground/85">{t.threed.projects.product.tagline}</p>
          </div>
        </section>

        <section className="container pb-12">
          {/* Bloque continuo de presentación */}
          <div className="hard-block w-full overflow-hidden flex flex-col mb-14 bg-[#1a1a1c]">
            <img src={cover} alt={t.threed.product.alt.cover} onClick={() => openImage(cover)} className="w-full h-auto block cursor-pointer" />
            
            <div className="flex w-full">
              <img src={gafas} alt={t.threed.product.alt.gafas} onClick={() => openImage(gafas)} className="w-[55.35%] h-auto block cursor-pointer" />
              <img src={detalle} alt={t.threed.product.alt.detalle} onClick={() => openImage(detalle)} className="w-[44.65%] h-auto block cursor-pointer" />
            </div>

            <img src={guitarra} alt={t.threed.product.alt.guitarra} onClick={() => openImage(guitarra)} className="w-full h-auto block cursor-pointer" />
            <img src={reloj} alt={t.threed.product.alt.reloj} onClick={() => openImage(reloj)} className="w-full h-auto block cursor-pointer" />
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

export default ThreeDProducto;
