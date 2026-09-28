import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useT } from "@/i18n/LanguageContext";

import camara1 from "@/assets/3d/3d-camara-1.jpg";
import camara2 from "@/assets/3d/3d-camara-2.jpg";
import camara3 from "@/assets/3d/3d-camara-3.jpg";
import camara4 from "@/assets/3d/3d-camara-4.jpg";

import sesderma5 from "@/assets/3d/3d-sesderma-5.jpg";
import sesderma6 from "@/assets/3d/3d-sesderma-6.jpg";
import sesderma7 from "@/assets/3d/3d-sesderma-7.jpg";

import info8 from "@/assets/3d/3d-infoarquitectura-8.jpg";
import info9 from "@/assets/3d/3d-infoarquitectura-9.jpg";
import info10 from "@/assets/3d/3d-infoarquitectura-10.jpg";
import info11 from "@/assets/3d/3d-infoarquitectura-11.jpg";
import info12 from "@/assets/3d/3d-infoarquitectura-12.jpg";

import reloj13 from "@/assets/3d/3d-reloj-13.jpg";
import reloj14 from "@/assets/3d/3d-reloj-14.jpg";

const ThreeD = () => {
  const t = useT();

  const gallery = [
    { src: camara1, alt: "3D Cámara 1" },
    { src: camara2, alt: "3D Cámara 2" },
    { src: camara3, alt: "3D Cámara 3" },
    { src: camara4, alt: "3D Cámara 4" },
    { src: sesderma5, alt: "3D Sesderma 5" },
    { src: sesderma6, alt: "3D Sesderma 6" },
    { src: sesderma7, alt: "3D Sesderma 7" },
    { src: info8, alt: "3D Infoarquitectura 8" },
    { src: info9, alt: "3D Infoarquitectura 9" },
    { src: info10, alt: "3D Infoarquitectura 10" },
    { src: info11, alt: "3D Infoarquitectura 11" },
    { src: info12, alt: "3D Infoarquitectura 12" },
    { src: reloj13, alt: "3D Reloj 13" },
    { src: reloj14, alt: "3D Reloj 14" },
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
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 font-jakarta selection:bg-[#b24b74] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <section className="container pt-8 pb-8 md:pt-12 md:pb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-stone-500 hover:text-stone-950 transition-colors mb-6 md:mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {t.common.back}
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-12">
            <div className="md:w-1/2 lg:w-5/12 shrink-0">
              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.06] text-stone-950 whitespace-pre-line">
                {t.threed.title}
              </h1>
            </div>

            <div className="hidden md:block w-px self-stretch bg-stone-300 my-1" />

            <div className="flex-1 font-jakarta max-w-2xl">
              <p className="text-base sm:text-lg text-stone-900 font-normal leading-relaxed">
                {t.threed.lead}
              </p>
            </div>
          </div>
        </section>

        <section className="container pb-16">
          {/* Proyecto 1: Cámara */}
          <div className="mb-12 md:mb-16">
            <h2 className="font-editorial italic text-2xl md:text-3xl text-stone-950 font-normal mb-4">
              01 — Cámara
            </h2>
            <div className="bg-white border border-stone-200/90 rounded-3xl shadow-sm overflow-hidden flex flex-col">
              <img src={camara1} alt="3D Cámara 1" onClick={() => openImage(camara1)} className="w-full h-auto block cursor-pointer" />
              <div className="flex w-full justify-center">
                <img src={camara2} alt="3D Cámara 2" onClick={() => openImage(camara2)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                <img src={camara3} alt="3D Cámara 3" onClick={() => openImage(camara3)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
              </div>
              <img src={camara4} alt="3D Cámara 4" onClick={() => openImage(camara4)} className="w-full h-auto block cursor-pointer" />
            </div>
          </div>

          {/* Proyecto 2: Sesderma */}
          <div className="mb-12 md:mb-16">
            <h2 className="font-editorial italic text-2xl md:text-3xl text-stone-950 font-normal mb-4">
              02 — Sesderma
            </h2>
            <div className="bg-white border border-stone-200/90 rounded-3xl shadow-sm overflow-hidden flex flex-col">
              <img src={sesderma5} alt="3D Sesderma 5" onClick={() => openImage(sesderma5)} className="w-full h-auto block cursor-pointer" />
              <div className="flex w-full justify-center">
                <img src={sesderma6} alt="3D Sesderma 6" onClick={() => openImage(sesderma6)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                <img src={sesderma7} alt="3D Sesderma 7" onClick={() => openImage(sesderma7)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
              </div>
            </div>
          </div>

          {/* Proyecto 3: Infoarquitectura */}
          <div className="mb-12 md:mb-16">
            <h2 className="font-editorial italic text-2xl md:text-3xl text-stone-950 font-normal mb-4">
              03 — Infoarquitectura
            </h2>
            <div className="bg-white border border-stone-200/90 rounded-3xl shadow-sm overflow-hidden flex flex-col">
              <img src={info8} alt="3D Infoarquitectura 8" onClick={() => openImage(info8)} className="w-full h-auto block cursor-pointer" />
              <img src={info9} alt="3D Infoarquitectura 9" onClick={() => openImage(info9)} className="w-full h-auto block cursor-pointer" />
              <img src={info10} alt="3D Infoarquitectura 10" onClick={() => openImage(info10)} className="w-full h-auto block cursor-pointer" />
              <div className="flex w-full justify-center">
                <img src={info11} alt="3D Infoarquitectura 11" onClick={() => openImage(info11)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                <img src={info12} alt="3D Infoarquitectura 12" onClick={() => openImage(info12)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
              </div>
            </div>
          </div>

          {/* Proyecto 4: Reloj */}
          <div className="mb-14">
            <h2 className="font-editorial italic text-2xl md:text-3xl text-stone-950 font-normal mb-4">
              04 — Reloj
            </h2>
            <div className="bg-white border border-stone-200/90 rounded-3xl shadow-sm overflow-hidden flex flex-col">
              <div className="flex w-full justify-center">
                <img src={reloj13} alt="3D Reloj 13" onClick={() => openImage(reloj13)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                <img src={reloj14} alt="3D Reloj 14" onClick={() => openImage(reloj14)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-stone-950 text-white font-jakarta font-semibold text-xs uppercase tracking-wider hover:bg-[#b24b74] transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" /> {t.common.back}
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />

      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
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
            className="max-h-[88vh] max-w-[90vw] object-contain select-none rounded-xl"
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

export default ThreeD;
