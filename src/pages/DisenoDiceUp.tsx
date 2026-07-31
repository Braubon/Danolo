import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useT } from "@/i18n/LanguageContext";

import videoSrc from "@/assets/diceup/1-video.mp4";
import estuche from "@/assets/diceup/2-estuche-dados.jpg";
import carteles from "@/assets/diceup/3-carteles.jpg";
import cartelesDado from "@/assets/diceup/3-1-carteles-dado.jpg";
import colores from "@/assets/diceup/4-colores.jpg";
import tipografia from "@/assets/diceup/5-tipografia.jpg";
import fachada from "@/assets/diceup/6-fachada.jpg";
import pattern1 from "@/assets/diceup/7-pattern.jpg";
import papelRegalo from "@/assets/diceup/8-papel-regalo.jpg";
import bolsas from "@/assets/diceup/9-bolsas.jpg";
import pattern2 from "@/assets/diceup/10-pattern.jpg";
import tarjetas from "@/assets/diceup/11-tarjetas.jpg";
import identificaciones from "@/assets/diceup/12-identificaciones.jpg";
import pattern3 from "@/assets/diceup/13-pattern.jpg";
import cajaCartas from "@/assets/diceup/14-caja-cartas.jpg";

const DisenoDiceUp = () => {
  const t = useT();
  const gallery = [
    { src: estuche, alt: "DiceUp Estuche" },
    { src: carteles, alt: "DiceUp Carteles" },
    { src: cartelesDado, alt: "DiceUp Carteles Dado" },
    { src: colores, alt: "DiceUp Colores" },
    { src: tipografia, alt: "DiceUp Tipografía" },
    { src: fachada, alt: "DiceUp Fachada" },
    { src: pattern1, alt: "DiceUp Pattern" },
    { src: papelRegalo, alt: "DiceUp Papel Regalo" },
    { src: bolsas, alt: "DiceUp Bolsas" },
    { src: pattern2, alt: "DiceUp Pattern" },
    { src: tarjetas, alt: "DiceUp Tarjetas" },
    { src: identificaciones, alt: "DiceUp Identificaciones" },
    { src: pattern3, alt: "DiceUp Pattern" },
    { src: cajaCartas, alt: "DiceUp Caja Cartas" }
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
            <h1 className="font-display font-bold text-accent text-5xl md:text-7xl leading-tight">{t.diceupPage.title}</h1>
            <p className="max-w-md font-sans text-base md:text-lg text-foreground/85">{t.diceupPage.tagline}</p>
          </div>
        </section>

        <section className="container pb-12">
          {/* Bloque continuo de presentación */}
          <div className="hard-block w-full overflow-hidden flex flex-col mb-14 bg-[#1a1a1c]">
            <video src={videoSrc} controls autoPlay muted loop playsInline preload="metadata" className="w-full h-auto block bg-black" />
            
            <img src={estuche} alt="DiceUp Estuche" onClick={() => openImage(estuche)} className="w-full h-auto block cursor-pointer" />
            <img src={carteles} alt="DiceUp Carteles" onClick={() => openImage(carteles)} className="w-full h-auto block cursor-pointer" />
            <img src={cartelesDado} alt="DiceUp Carteles Dado" onClick={() => openImage(cartelesDado)} className="w-full h-auto block cursor-pointer" />
            <img src={colores} alt="DiceUp Colores" onClick={() => openImage(colores)} className="w-full h-auto block cursor-pointer" />
            <img src={tipografia} alt="DiceUp Tipografía" onClick={() => openImage(tipografia)} className="w-full h-auto block cursor-pointer" />
            <img src={fachada} alt="DiceUp Fachada" onClick={() => openImage(fachada)} className="w-full h-auto block cursor-pointer" />
            <img src={pattern1} alt="DiceUp Pattern" onClick={() => openImage(pattern1)} className="w-full h-auto block cursor-pointer" />
            
            <div className="flex w-full justify-center">
              <img src={papelRegalo} alt="DiceUp Papel Regalo" onClick={() => openImage(papelRegalo)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
              <img src={bolsas} alt="DiceUp Bolsas" onClick={() => openImage(bolsas)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
            </div>

            <img src={pattern2} alt="DiceUp Pattern" onClick={() => openImage(pattern2)} className="w-full h-auto block cursor-pointer" />
            
            <div className="flex w-full justify-center">
              <img src={tarjetas} alt="DiceUp Tarjetas" onClick={() => openImage(tarjetas)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
              <img src={identificaciones} alt="DiceUp Identificaciones" onClick={() => openImage(identificaciones)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
            </div>

            <img src={pattern3} alt="DiceUp Pattern" onClick={() => openImage(pattern3)} className="w-full h-auto block cursor-pointer" />
            <img src={cajaCartas} alt="DiceUp Caja Cartas" onClick={() => openImage(cajaCartas)} className="w-full h-auto block cursor-pointer" />
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

export default DisenoDiceUp;
