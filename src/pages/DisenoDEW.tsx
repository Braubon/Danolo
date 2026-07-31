import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useT } from "@/i18n/LanguageContext";
import portada from "@/assets/dew/portada.webp";
import cartelFibra from "@/assets/dew/cartel-fibra.webp";
import cartelMonigotes from "@/assets/dew/cartel-monigotes.webp";
import cartelMilitar from "@/assets/dew/cartel-militar.webp";
import bolsa from "@/assets/dew/bolsa.webp";
import tubo from "@/assets/dew/tubo.webp";

const DisenoDEW = () => {
  const t = useT();
  const carteles = [
    { src: cartelFibra, alt: t.dewPage.altFibra },
    { src: cartelMonigotes, alt: t.dewPage.altMoni },
    { src: cartelMilitar, alt: t.dewPage.altMilitar },
  ];
  const packaging = [
    { src: bolsa, alt: t.dewPage.altBolsa },
    { src: tubo, alt: t.dewPage.altTubo },
  ];
  const gallery = [{ src: portada, alt: t.dewPage.altCover }, ...carteles, ...packaging];

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

  const openImage = (src: string) => { const idx = gallery.findIndex((g) => g.src === src); if (idx >= 0) setOpenIdx(idx); };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container py-10 md:py-14">
          <Link to="/diseno" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider hover:text-accent">
            <ArrowLeft className="w-3.5 h-3.5" /> {t.diseno.backLabel}
          </Link>
          <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="font-display font-bold text-accent text-5xl md:text-7xl leading-tight">{t.dewPage.title}</h1>
            <p className="max-w-md font-sans text-base md:text-lg text-foreground/85">{t.dewPage.tagline}</p>
          </div>
        </section>

        <section className="container pb-12">
          <button type="button" onClick={() => openImage(portada)} className="hard-block-sm squish-sm overflow-hidden block w-full p-0 group" aria-label={`${t.common.enlarge}: ${t.dewPage.altCover}`}>
            <img src={portada} alt={t.dewPage.altCover} className="w-full h-full object-cover aspect-[21/9] transition-transform duration-500 group-hover:scale-[1.02]" />
          </button>

          <div className="max-w-2xl mt-6 md:mt-8 mb-10 md:mb-14">
            <h3 className="font-display font-bold text-xl md:text-2xl text-accent mb-2">{t.dewPage.coverTitle}</h3>
            <p className="font-sans text-foreground/85 leading-relaxed">{t.dewPage.coverText}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-display font-bold text-xl md:text-2xl text-accent mb-2">{t.dewPage.campaignTitle}</h3>
            <p className="font-sans text-foreground/85 leading-relaxed max-w-2xl">{t.dewPage.campaignText}</p>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-6 mb-10 md:mb-14">
            {carteles.map((p) => (
              <button key={p.src} type="button" onClick={() => openImage(p.src)} className="hard-block-sm squish-sm overflow-hidden block w-full p-0 group" aria-label={`${t.common.enlarge}: ${p.alt}`}>
                <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-[1.02]" />
              </button>
            ))}
          </div>

          <div className="mb-4">
            <h3 className="font-display font-bold text-xl md:text-2xl text-accent mb-2">{t.dewPage.packagingTitle}</h3>
            <p className="font-sans text-foreground/85 leading-relaxed max-w-2xl">{t.dewPage.packagingText}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {packaging.map((p) => (
              <button key={p.src} type="button" onClick={() => openImage(p.src)} className="hard-block-sm squish-sm overflow-hidden block w-full p-0 group" aria-label={`${t.common.enlarge}: ${p.alt}`}>
                <img src={p.src} alt={p.alt} loading="lazy" className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-[1.02]" />
              </button>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link to="/diseno" className="hard-block squish inline-flex items-center gap-3 bg-cta text-cta-foreground font-display font-bold uppercase tracking-wider px-8 py-4">
              <ArrowLeft className="w-4 h-4" /> {t.diseno.backToProjects}
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

export default DisenoDEW;
