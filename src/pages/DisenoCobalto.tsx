import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useT } from "@/i18n/LanguageContext";

import logo from "@/assets/Cobalto/logo.jpg";
import fotoImpacto from "@/assets/Cobalto/foto-impacto.jpg";
import color from "@/assets/Cobalto/color.jpg";
import tipografias from "@/assets/Cobalto/tipografias.jpg";
import bonito from "@/assets/Cobalto/bonito.jpg";
import revista from "@/assets/Cobalto/revista.jpg";
import aceite from "@/assets/Cobalto/aceite.jpg";
import videoRRSS from "@/assets/Cobalto/video-rrss.mp4";
import cartel9 from "@/assets/Cobalto/carteles-9.jpg";
import cartel10 from "@/assets/Cobalto/carteles-10.jpg";
import cartel11 from "@/assets/Cobalto/carteles-11.jpg";
import cajaEnvios from "@/assets/Cobalto/caja-envios.jpg";
import bodegonCierre from "@/assets/Cobalto/bodegon-cierre.jpg";

const DisenoCobalto = () => {
  const t = useT();

  const gallery = [
    { src: logo, alt: t.cobaltoPage.altLogo },
    { src: fotoImpacto, alt: t.cobaltoPage.altFotoImpacto },
    { src: color, alt: t.cobaltoPage.altColor },
    { src: tipografias, alt: t.cobaltoPage.altTipografias },
    { src: bonito, alt: t.cobaltoPage.altBonito },
    { src: revista, alt: t.cobaltoPage.altRevista },
    { src: aceite, alt: t.cobaltoPage.altAceite },
    { src: cartel9, alt: t.cobaltoPage.altCartel9 },
    { src: cartel10, alt: t.cobaltoPage.altCartel10 },
    { src: cartel11, alt: t.cobaltoPage.altCartel11 },
    { src: cajaEnvios, alt: t.cobaltoPage.altCajaEnvios },
    { src: bodegonCierre, alt: t.cobaltoPage.altBodegonCierre },
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
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx, close, next, prev]);

  const openImage = (src: string) => {
    const idx = gallery.findIndex((g) => g.src === src);
    if (idx >= 0) setOpenIdx(idx);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container py-10 md:py-14">
          <Link
            to="/diseno"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider hover:text-accent"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {t.diseno.backLabel}
          </Link>
          <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1 className="font-display font-bold text-accent text-5xl md:text-7xl leading-tight">
              {t.cobaltoPage.title}
            </h1>
            <p className="max-w-md font-sans text-base md:text-lg text-foreground/85">
              {t.cobaltoPage.tagline}
            </p>
          </div>
        </section>

        <section className="container pb-12">
          {/* Bloque continuo de presentación estilo Behance */}
          <div className="hard-block w-full overflow-hidden flex flex-col mb-14 bg-white">
            {/* 1. Logo */}
            <img
              src={logo}
              alt={t.cobaltoPage.altLogo}
              onClick={() => openImage(logo)}
              className="w-full h-auto block cursor-pointer"
            />

            {/* 2. Foto impacto */}
            <img
              src={fotoImpacto}
              alt={t.cobaltoPage.altFotoImpacto}
              onClick={() => openImage(fotoImpacto)}
              className="w-full h-auto block cursor-pointer"
            />

            {/* 3. Color */}
            <img
              src={color}
              alt={t.cobaltoPage.altColor}
              onClick={() => openImage(color)}
              className="w-full h-auto block cursor-pointer"
            />

            {/* 4. Tipografías */}
            <img
              src={tipografias}
              alt={t.cobaltoPage.altTipografias}
              onClick={() => openImage(tipografias)}
              className="w-full h-auto block cursor-pointer"
            />

            {/* 5. Fila única: Producto en la red (Bonito) + Revista abierta */}
            <div className="flex flex-row flex-nowrap w-full">
              <img
                src={bonito}
                alt={t.cobaltoPage.altBonito}
                onClick={() => openImage(bonito)}
                style={{ width: "35.0806%" }}
                className="h-auto block cursor-pointer shrink-0"
              />
              <img
                src={revista}
                alt={t.cobaltoPage.altRevista}
                onClick={() => openImage(revista)}
                style={{ width: "64.9194%" }}
                className="h-auto block cursor-pointer shrink-0"
              />
            </div>

            {/* 6. Aceite */}
            <img
              src={aceite}
              alt={t.cobaltoPage.altAceite}
              onClick={() => openImage(aceite)}
              className="w-full h-auto block cursor-pointer"
            />

            {/* 7. Vídeo RRSS */}
            <video
              src={videoRRSS}
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-auto block bg-black"
            />

            {/* 8. Fila única: Trío de carteles en paralelo */}
            <div className="flex flex-row flex-nowrap w-full">
              <img
                src={cartel9}
                alt={t.cobaltoPage.altCartel9}
                onClick={() => openImage(cartel9)}
                className="w-1/3 h-auto block cursor-pointer shrink-0"
              />
              <img
                src={cartel10}
                alt={t.cobaltoPage.altCartel10}
                onClick={() => openImage(cartel10)}
                className="w-1/3 h-auto block cursor-pointer shrink-0"
              />
              <img
                src={cartel11}
                alt={t.cobaltoPage.altCartel11}
                onClick={() => openImage(cartel11)}
                className="w-1/3 h-auto block cursor-pointer shrink-0"
              />
            </div>

            {/* 9. Caja de envíos */}
            <img
              src={cajaEnvios}
              alt={t.cobaltoPage.altCajaEnvios}
              onClick={() => openImage(cajaEnvios)}
              className="w-full h-auto block cursor-pointer"
            />

            {/* 10. Bodegón de cierre */}
            <img
              src={bodegonCierre}
              alt={t.cobaltoPage.altBodegonCierre}
              onClick={() => openImage(bodegonCierre)}
              className="w-full h-auto block cursor-pointer"
            />
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/diseno"
              className="hard-block squish inline-flex items-center gap-3 bg-cta text-cta-foreground font-display font-bold uppercase tracking-wider px-8 py-4"
            >
              <ArrowLeft className="w-4 h-4" /> {t.diseno.backToProjects}
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />

      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-4 right-4 text-white/90 hover:text-white p-2"
            aria-label={t.common.close}
          >
            <X className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 md:left-6 text-white/90 hover:text-white p-2"
            aria-label={t.common.prev}
          >
            <ArrowLeft className="w-7 h-7" />
          </button>
          <img
            src={gallery[openIdx].src}
            alt={gallery[openIdx].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[90vw] object-contain select-none"
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 md:right-6 text-white/90 hover:text-white p-2"
            aria-label={t.common.next}
          >
            <ArrowRight className="w-7 h-7" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center font-mono text-xs text-white/70">
            {openIdx + 1} / {gallery.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default DisenoCobalto;
