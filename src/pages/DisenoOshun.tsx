import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useT } from "@/i18n/LanguageContext";
import revistaAbierta from "@/assets/diseno/oshun/revista-abierta.webp";
import revistaOI from "@/assets/diseno/oshun/revista-portada-oi.webp";
import revistaPV from "@/assets/diseno/oshun/revista-portada-pv.webp";
import etiquetas from "@/assets/diseno/oshun/etiquetas.webp";
import bolsa from "@/assets/diseno/oshun/bolsa.webp";

const DisenoOshun = () => {
  const t = useT();
  const gallery = [
    { src: revistaAbierta, alt: t.oshunPage.altOpen },
    { src: revistaOI, alt: t.oshunPage.altOI },
    { src: revistaPV, alt: t.oshunPage.altPV },
    { src: etiquetas, alt: t.oshunPage.altLabels },
    { src: bolsa, alt: t.oshunPage.altBag },
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
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 font-jakarta selection:bg-[#b24b74] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <Link to="/diseno" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-stone-500 hover:text-stone-950 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> {t.diseno.backLabel}
          </Link>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="font-editorial italic font-normal text-5xl sm:text-6xl md:text-7xl leading-tight text-stone-950">
              {t.oshunPage.title}
            </h1>
            <p className="max-w-md font-jakarta text-base md:text-lg text-stone-600 font-normal">
              {t.oshunPage.tagline}
            </p>
          </div>
        </section>

        <section className="container pb-16">
          <div className="bg-white border border-stone-200/90 rounded-3xl shadow-sm overflow-hidden flex flex-col mb-14">
            {/* 1. Portada / Doble página */}
            <img src={revistaAbierta} alt={t.oshunPage.altOpen} onClick={() => openImage(revistaAbierta)} className="w-full h-auto block cursor-pointer" />

            {/* 2. Dos portadas juntas */}
            <div className="flex flex-row flex-nowrap w-full">
              <img src={revistaOI} alt={t.oshunPage.altOI} onClick={() => openImage(revistaOI)} className="w-1/2 h-auto block cursor-pointer" />
              <img src={revistaPV} alt={t.oshunPage.altPV} onClick={() => openImage(revistaPV)} className="w-1/2 h-auto block cursor-pointer" />
            </div>

            {/* 3. Etiquetas */}
            <img src={etiquetas} alt={t.oshunPage.altLabels} onClick={() => openImage(etiquetas)} className="w-full h-auto block cursor-pointer" />

            {/* 4. Bolsa */}
            <img src={bolsa} alt={t.oshunPage.altBag} onClick={() => openImage(bolsa)} className="w-full h-auto block cursor-pointer" />
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/diseno"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-stone-950 text-white font-jakarta font-semibold text-xs uppercase tracking-wider hover:bg-[#b24b74] transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" /> {t.diseno.backToProjects}
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />

      {openIdx !== null && (
        <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in" onClick={close} role="dialog" aria-modal="true">
          <button type="button" onClick={(e) => { e.stopPropagation(); close(); }} className="absolute top-4 right-4 text-white/90 hover:text-white p-2" aria-label={t.common.close}><X className="w-6 h-6" /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 md:left-6 text-white/90 hover:text-white p-2" aria-label={t.common.prev}><ArrowLeft className="w-7 h-7" /></button>
          <img src={gallery[openIdx].src} alt={gallery[openIdx].alt} onClick={(e) => e.stopPropagation()} className="max-h-[88vh] max-w-[90vw] object-contain select-none rounded-xl" />
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 md:right-6 text-white/90 hover:text-white p-2" aria-label={t.common.next}><ArrowRight className="w-7 h-7" /></button>
          <div className="absolute bottom-4 left-0 right-0 text-center font-mono text-xs text-white/70">{openIdx + 1} / {gallery.length}</div>
        </div>
      )}
    </div>
  );
};

export default DisenoOshun;
