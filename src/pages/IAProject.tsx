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

import forseti1 from "@/assets/grafica-publicitaria/forseti-1.jpg";
import forseti2 from "@/assets/grafica-publicitaria/forseti-2.jpg";
import forseti3 from "@/assets/grafica-publicitaria/forseti-3.jpg";

import anubis4 from "@/assets/grafica-publicitaria/anubis-4.jpg";
import anubis5 from "@/assets/grafica-publicitaria/anubis-5.jpg";
import anubis6 from "@/assets/grafica-publicitaria/anubis-6.jpg";

import sneaker7 from "@/assets/grafica-publicitaria/sneaker-7.jpg";
import sneaker8 from "@/assets/grafica-publicitaria/sneaker-8.jpg";
import sneaker9 from "@/assets/grafica-publicitaria/sneaker-9.jpg";

import becca1 from "@/assets/identidad-consistente/becca/becca-1.jpg";
import becca2 from "@/assets/identidad-consistente/becca/becca-2.jpg";
import becca3 from "@/assets/identidad-consistente/becca/becca-3.jpg";
import becca4 from "@/assets/identidad-consistente/becca/becca-4.jpg";
import becca5 from "@/assets/identidad-consistente/becca/becca-5.jpg";
import becca6 from "@/assets/identidad-consistente/becca/becca-6.jpg";
import becca6b from "@/assets/identidad-consistente/becca/becca-6b.jpg";
import becca7 from "@/assets/identidad-consistente/becca/becca-7.jpg";
import becca8 from "@/assets/identidad-consistente/becca/becca-8.jpg";
import becca9 from "@/assets/identidad-consistente/becca/becca-9.jpg";
import becca10 from "@/assets/identidad-consistente/becca/becca-10.jpg";
import becca11 from "@/assets/identidad-consistente/becca/becca-11.jpg";

import burt12 from "@/assets/identidad-consistente/burt/burt-12.jpg";
import burt13 from "@/assets/identidad-consistente/burt/burt-13.jpg";
import burt14 from "@/assets/identidad-consistente/burt/burt-14.jpg";
import burt15 from "@/assets/identidad-consistente/burt/burt-15.jpg";
import burt16 from "@/assets/identidad-consistente/burt/burt-16.jpg";
import burt17 from "@/assets/identidad-consistente/burt/burt-17.jpg";
import burt18 from "@/assets/identidad-consistente/burt/burt-18.jpg";
import burt19 from "@/assets/identidad-consistente/burt/burt-19.jpg";
import burt20 from "@/assets/identidad-consistente/burt/burt-20.jpg";
import burt21 from "@/assets/identidad-consistente/burt/burt-21.jpg";
import burt22 from "@/assets/identidad-consistente/burt/burt-22.jpg";

import claudia23 from "@/assets/identidad-consistente/claudia/claudia-23.jpg";
import claudia24 from "@/assets/identidad-consistente/claudia/claudia-24.jpg";
import claudia25 from "@/assets/identidad-consistente/claudia/claudia-25.jpg";
import claudia26 from "@/assets/identidad-consistente/claudia/claudia-26.jpg";
import claudia27 from "@/assets/identidad-consistente/claudia/claudia-27.jpg";
import claudia28 from "@/assets/identidad-consistente/claudia/claudia-28.jpg";
import claudia29 from "@/assets/identidad-consistente/claudia/claudia-29.jpg";
import claudia30 from "@/assets/identidad-consistente/claudia/claudia-30.jpg";
import claudia31 from "@/assets/identidad-consistente/claudia/claudia-31.jpg";
import claudia32 from "@/assets/identidad-consistente/claudia/claudia-32.jpg";
import claudia33 from "@/assets/identidad-consistente/claudia/claudia-33.jpg";
import claudia34 from "@/assets/identidad-consistente/claudia/claudia-34.jpg";
import claudia35 from "@/assets/identidad-consistente/claudia/claudia-35.jpg";
import claudia36 from "@/assets/identidad-consistente/claudia/claudia-36.jpg";
import claudia37 from "@/assets/identidad-consistente/claudia/claudia-37.jpg";

const IAProject = () => {
  const t = useT();
  const { slug = "" } = useParams();

  const photoImages = [
    { src: fresli01, alt: t.ia.altFresli1 },
    { src: fresli02, alt: t.ia.altFresli2 },
    { src: fresli03, alt: t.ia.altFresli3 },
    { src: forseti1, alt: "Fotografía Publicitaria — Forseti 1" },
    { src: forseti2, alt: "Fotografía Publicitaria — Forseti 2" },
    { src: forseti3, alt: "Fotografía Publicitaria — Forseti 3" },
    { src: anubis4, alt: "Fotografía Publicitaria — Anubis 4" },
    { src: anubis5, alt: "Fotografía Publicitaria — Anubis 5" },
    { src: anubis6, alt: "Fotografía Publicitaria — Anubis 6" },
    { src: sneaker7, alt: "Fotografía Publicitaria — Sneaker 7" },
    { src: sneaker8, alt: "Fotografía Publicitaria — Sneaker 8" },
    { src: sneaker9, alt: "Fotografía Publicitaria — Sneaker 9" },
  ];

  const allCharacterImages = [
    { src: becca1, alt: "Identidad Consistente — Becca 1" },
    { src: becca2, alt: "Identidad Consistente — Becca 2" },
    { src: becca3, alt: "Identidad Consistente — Becca 3" },
    { src: becca4, alt: "Identidad Consistente — Becca 4" },
    { src: becca5, alt: "Identidad Consistente — Becca 5" },
    { src: becca6, alt: "Identidad Consistente — Becca 6" },
    { src: becca6b, alt: "Identidad Consistente — Becca Busto Cuarzo" },
    { src: becca7, alt: "Identidad Consistente — Becca 7" },
    { src: becca8, alt: "Identidad Consistente — Becca 8" },
    { src: becca9, alt: "Identidad Consistente — Becca 9" },
    { src: becca10, alt: "Identidad Consistente — Becca 10" },
    { src: becca11, alt: "Identidad Consistente — Becca 11" },
    { src: burt12, alt: "Identidad Consistente — Burt 12" },
    { src: burt13, alt: "Identidad Consistente — Burt 13" },
    { src: burt14, alt: "Identidad Consistente — Burt 14" },
    { src: burt15, alt: "Identidad Consistente — Burt 15" },
    { src: burt16, alt: "Identidad Consistente — Burt 16" },
    { src: burt17, alt: "Identidad Consistente — Burt 17" },
    { src: burt18, alt: "Identidad Consistente — Burt 18" },
    { src: burt19, alt: "Identidad Consistente — Burt 19" },
    { src: burt20, alt: "Identidad Consistente — Burt 20" },
    { src: burt21, alt: "Identidad Consistente — Burt 21" },
    { src: burt22, alt: "Identidad Consistente — Burt 22" },
    { src: claudia23, alt: "Identidad Consistente — Claudia 23" },
    { src: claudia24, alt: "Identidad Consistente — Claudia 24" },
    { src: claudia25, alt: "Identidad Consistente — Claudia 25" },
    { src: claudia26, alt: "Identidad Consistente — Claudia 26" },
    { src: claudia27, alt: "Identidad Consistente — Claudia 27" },
    { src: claudia28, alt: "Identidad Consistente — Claudia 28" },
    { src: claudia29, alt: "Identidad Consistente — Claudia 29" },
    { src: claudia30, alt: "Identidad Consistente — Claudia 30" },
    { src: claudia31, alt: "Identidad Consistente — Claudia 31" },
    { src: claudia32, alt: "Identidad Consistente — Claudia 32" },
    { src: claudia33, alt: "Identidad Consistente — Claudia 33" },
    { src: claudia34, alt: "Identidad Consistente — Claudia 34" },
    { src: claudia35, alt: "Identidad Consistente — Claudia 35" },
    { src: claudia36, alt: "Identidad Consistente — Claudia 36" },
    { src: claudia37, alt: "Identidad Consistente — Claudia 37" },
  ];

  const currentGallery = slug === "identidad-consistente" ? allCharacterImages : photoImages;

  const projectMap: Record<string, { title: string; tagline: string }> = {
    "fotografia-publicitaria": { title: t.ia.projects.photo.title, tagline: t.ia.projects.photo.tagline },
    "identidad-consistente": { title: t.ia.projects.identity.title, tagline: t.ia.projects.identity.tagline },
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
            <div className="space-y-12 md:space-y-16">
              {/* Sección 01: Becca */}
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-accent mb-4 tracking-wider uppercase">
                  01 — Becca
                </h2>
                <div className="hard-block w-full overflow-hidden flex flex-col bg-[#1a1a1c]">
                  {/* Becca 1 (Ancho completo) */}
                  <img src={becca1} alt="Becca 1" onClick={() => setOpenIdx(0)} className="w-full h-auto block cursor-pointer" />
                  
                  {/* Becca 2 y Becca 3 (2 columnas) */}
                  <div className="flex w-full justify-center">
                    <img src={becca2} alt="Becca 2" onClick={() => setOpenIdx(1)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={becca3} alt="Becca 3" onClick={() => setOpenIdx(2)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>

                  {/* Becca 4 (Ancho completo) */}
                  <img src={becca4} alt="Becca 4" onClick={() => setOpenIdx(3)} className="w-full h-auto block cursor-pointer" />

                  {/* Becca 5 (Ancho completo) */}
                  <img src={becca5} alt="Becca 5" onClick={() => setOpenIdx(4)} className="w-full h-auto block cursor-pointer" />

                  {/* Becca 6 y Becca 6b (2 columnas — Pez velo & Busto cuarzo rosa) */}
                  <div className="flex w-full justify-center">
                    <img src={becca6} alt="Becca 6" onClick={() => setOpenIdx(5)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={becca6b} alt="Becca 6b" onClick={() => setOpenIdx(6)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>

                  {/* Becca 7, 8, 9 (3 columnas — Yoga) */}
                  <div className="flex w-full justify-center">
                    <img src={becca7} alt="Becca 7" onClick={() => setOpenIdx(7)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={becca8} alt="Becca 8" onClick={() => setOpenIdx(8)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={becca9} alt="Becca 9" onClick={() => setOpenIdx(9)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>

                  {/* Becca 10 y 11 (2 columnas — Ventana portátil & Ventana taza) */}
                  <div className="flex w-full justify-center">
                    <img src={becca10} alt="Becca 10" onClick={() => setOpenIdx(10)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={becca11} alt="Becca 11" onClick={() => setOpenIdx(11)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>
                </div>
              </div>

              {/* Sección 02: Burt */}
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-accent mb-4 tracking-wider uppercase">
                  02 — Burt
                </h2>
                <div className="hard-block w-full overflow-hidden flex flex-col bg-[#1a1a1c]">
                  {/* Burt 12 (Ancho completo) */}
                  <img src={burt12} alt="Burt 12" onClick={() => setOpenIdx(12)} className="w-full h-auto block cursor-pointer" />

                  {/* Burt 13 y 14 (2 columnas — Cuello alto & Sillón) */}
                  <div className="flex w-full justify-center">
                    <img src={burt13} alt="Burt 13" onClick={() => setOpenIdx(13)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={burt14} alt="Burt 14" onClick={() => setOpenIdx(14)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>

                  {/* Burt 15 y 16 (2 columnas — Gafas naranja & Chaqueta chándal) */}
                  <div className="flex w-full justify-center">
                    <img src={burt15} alt="Burt 15" onClick={() => setOpenIdx(15)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={burt16} alt="Burt 16" onClick={() => setOpenIdx(16)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>

                  {/* Burt 17 (Ancho completo — Busto mármol) */}
                  <img src={burt17} alt="Burt 17" onClick={() => setOpenIdx(17)} className="w-full h-auto block cursor-pointer" />

                  {/* Burt 18 (Ancho completo — Capa seda verde) */}
                  <img src={burt18} alt="Burt 18" onClick={() => setOpenIdx(18)} className="w-full h-auto block cursor-pointer" />

                  {/* Burt 19 y 20 (2 columnas — Camiseta tirantes & Playa atardecer) */}
                  <div className="flex w-full justify-center">
                    <img src={burt19} alt="Burt 19" onClick={() => setOpenIdx(19)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={burt20} alt="Burt 20" onClick={() => setOpenIdx(20)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>

                  {/* Burt 21 y 22 (2 columnas — Bosque gorra & Banco jardín) */}
                  <div className="flex w-full justify-center">
                    <img src={burt21} alt="Burt 21" onClick={() => setOpenIdx(21)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={burt22} alt="Burt 22" onClick={() => setOpenIdx(22)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>
                </div>
              </div>

              {/* Sección 03: Claudia */}
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-accent mb-4 tracking-wider uppercase">
                  03 — Claudia
                </h2>
                <div className="hard-block w-full overflow-hidden flex flex-col bg-[#1a1a1c]">
                  {/* Claudia 23 (Ancho completo — Orquídea roja) */}
                  <img src={claudia23} alt="Claudia 23" onClick={() => setOpenIdx(23)} className="w-full h-auto block cursor-pointer" />

                  {/* Claudia 24 y 25 (2 columnas — Sombras & Desierto) */}
                  <div className="flex w-full justify-center">
                    <img src={claudia24} alt="Claudia 24" onClick={() => setOpenIdx(24)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={claudia25} alt="Claudia 25" onClick={() => setOpenIdx(25)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>

                  {/* Claudia 26 y 27 (2 columnas — Chaqueta neón & Sombrero paja) */}
                  <div className="flex w-full justify-center">
                    <img src={claudia26} alt="Claudia 26" onClick={() => setOpenIdx(26)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={claudia27} alt="Claudia 27" onClick={() => setOpenIdx(27)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>

                  {/* Claudia 28 (Ancho completo — Auriculares) */}
                  <img src={claudia28} alt="Claudia 28" onClick={() => setOpenIdx(28)} className="w-full h-auto block cursor-pointer" />

                  {/* Claudia 29, 30 y 31 (3 COLUMNAS EN PARALELO — Pop Art, Silueta roja & Glitch RGB) */}
                  <div className="flex w-full justify-center">
                    <img src={claudia29} alt="Claudia 29" onClick={() => setOpenIdx(28)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={claudia30} alt="Claudia 30" onClick={() => setOpenIdx(29)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={claudia31} alt="Claudia 31" onClick={() => setOpenIdx(30)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>

                  {/* Claudia 32 y 33 (2 columnas — Blazer blanco & Bajo el agua) */}
                  <div className="flex w-full justify-center">
                    <img src={claudia32} alt="Claudia 32" onClick={() => setOpenIdx(31)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={claudia33} alt="Claudia 33" onClick={() => setOpenIdx(32)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>

                  {/* Claudia 34 y 35 (2 columnas — Piscina bata roja & Cocina manzana verde) */}
                  <div className="flex w-full justify-center">
                    <img src={claudia34} alt="Claudia 34" onClick={() => setOpenIdx(33)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={claudia35} alt="Claudia 35" onClick={() => setOpenIdx(34)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>

                  {/* Claudia 36 y 37 (2 columnas — Azotea luces & Playa atardecer) */}
                  <div className="flex w-full justify-center">
                    <img src={claudia36} alt="Claudia 36" onClick={() => setOpenIdx(35)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={claudia37} alt="Claudia 37" onClick={() => setOpenIdx(36)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Fotografía publicitaria (Fresli, Forseti, Anubis, Sneaker) */
            <div className="space-y-12 md:space-y-16">
              {/* 01: Fresli */}
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-accent mb-4 tracking-wider uppercase">
                  01 — Fresli
                </h2>
                <div className="hard-block w-full overflow-hidden flex flex-col bg-[#1a1a1c]">
                  <div className="flex w-full justify-center">
                    <img src={fresli01} alt={t.ia.altFresli1} onClick={() => setOpenIdx(0)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={fresli02} alt={t.ia.altFresli2} onClick={() => setOpenIdx(1)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={fresli03} alt={t.ia.altFresli3} onClick={() => setOpenIdx(2)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>
                </div>
              </div>

              {/* 02: Forseti */}
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-accent mb-4 tracking-wider uppercase">
                  02 — Forseti
                </h2>
                <div className="hard-block w-full overflow-hidden flex flex-col bg-[#1a1a1c]">
                  <img src={forseti1} alt="Forseti 1" onClick={() => setOpenIdx(3)} className="w-full h-auto block cursor-pointer" />
                  <div className="flex w-full justify-center">
                    <img src={forseti2} alt="Forseti 2" onClick={() => setOpenIdx(4)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={forseti3} alt="Forseti 3" onClick={() => setOpenIdx(5)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>
                </div>
              </div>

              {/* 03: Anubis */}
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-accent mb-4 tracking-wider uppercase">
                  03 — Anubis
                </h2>
                <div className="hard-block w-full overflow-hidden flex flex-col bg-[#1a1a1c]">
                  <div className="flex w-full justify-center items-start">
                    <img src={anubis4} alt="Anubis 4" onClick={() => setOpenIdx(6)} style={{ width: "79.94%" }} className="h-auto block cursor-pointer object-contain" />
                    <div className="flex flex-col" style={{ width: "20.06%" }}>
                      <img src={anubis5} alt="Anubis 5" onClick={() => setOpenIdx(7)} className="w-full h-auto block cursor-pointer object-contain" />
                      <img src={anubis6} alt="Anubis 6" onClick={() => setOpenIdx(8)} className="w-full h-auto block cursor-pointer object-contain" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 04: Sneaker */}
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-accent mb-4 tracking-wider uppercase">
                  04 — Sneaker
                </h2>
                <div className="hard-block w-full overflow-hidden flex flex-col bg-[#1a1a1c]">
                  <div className="flex w-full justify-center">
                    <img src={sneaker7} alt="Sneaker 7" onClick={() => setOpenIdx(9)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                    <img src={sneaker8} alt="Sneaker 8" onClick={() => setOpenIdx(10)} className="w-auto h-auto min-w-0 shrink block cursor-pointer object-contain" />
                  </div>
                  <img src={sneaker9} alt="Sneaker 9" onClick={() => setOpenIdx(11)} className="w-full h-auto block cursor-pointer" />
                </div>
              </div>
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
