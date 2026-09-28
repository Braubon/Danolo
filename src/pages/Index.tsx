import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import portrait from "@/assets/profile/portrait.jpg";
import designImg from "@/assets/diseno/cobalto/revista.jpg";
import aiImg from "@/assets/ia/identidad-consistente/becca/becca-6.jpg";
import threeDImg from "@/assets/3d/service-3d.jpg";
import { Navbar } from "@/components/Navbar";
import { Marquee } from "@/components/Marquee";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useT } from "@/i18n/LanguageContext";
import { RichText } from "@/i18n/RichText";

const Index = () => {
  const t = useT();
  const [activeAccordion, setActiveAccordion] = useState<number>(0);

  const disciplines = [
    {
      idx: 0,
      title: "Diseño Gráfico & Retoque",
      subtitle: "Packaging, branding y dirección de arte cosmética",
      to: "/diseno",
      image: designImg,
      alt: t.home.design.imageAlt,
      body: t.home.design.body,
      tag: "10+ AÑOS DE EXPERIENCIA",
    },
    {
      idx: 1,
      title: "IA bajo control",
      subtitle: "Flujos de nodos con ComfyUI y máxima privacidad",
      to: "/ia",
      image: aiImg,
      alt: t.home.ai.imageAlt,
      body: t.home.ai.body,
      tag: "WORKFLOW NODAL PRIVADO",
    },
    {
      idx: 2,
      title: "Diseño y Modelado 3D",
      subtitle: "Hard surface, packshots e infoarquitectura",
      to: "/3d",
      image: threeDImg,
      alt: t.home.threed.imageAlt,
      body: t.home.threed.body,
      tag: "BLENDER & CYCLES",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 font-jakarta selection:bg-[#b24b74] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION — EDITORIAL MAGAZINE */}
        <section className="border-b border-stone-200 overflow-hidden">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 py-10 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-center">
                <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.04] text-stone-950">
                  Rigor técnico y <span className="italic font-normal underline decoration-stone-300 decoration-1 underline-offset-4">propósito visual</span> en cada proyecto.
                </h1>

                <p className="mt-6 sm:mt-7 text-lg sm:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl">
                  {t.hero.intro}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="/CV-Daniel-Sanchez.pdf"
                    download="CV-Daniel-Sanchez.pdf"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-stone-900 text-stone-50 hover:bg-[#b24b74] transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg hover:translate-y-[-1px]"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t.hero.cv}</span>
                  </a>
                  <a
                    href="#contacto"
                    className="px-4 py-3 text-stone-600 hover:text-stone-950 text-sm font-mono uppercase tracking-wider transition-colors"
                  >
                    {t.contact.title} →
                  </a>
                </div>
              </div>

              {/* Right Column (5 cols) — Full Height Portrait covering entire header height */}
              <div className="lg:col-span-5 self-stretch h-full pb-8 lg:pb-0 flex flex-col items-stretch">
                <Link
                  to="/about"
                  className="relative group block cursor-pointer w-full h-full flex-1"
                  aria-label={t.hero.about}
                >
                  <div className="relative overflow-hidden w-full h-full min-h-[400px] lg:min-h-full aspect-[831/1024] lg:aspect-auto">
                    <img
                      src={portrait}
                      alt={t.hero.portraitAlt}
                      className="w-full h-full object-cover object-center block select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Cartel Hover Sobre mí */}
                    <div className="absolute inset-0 bg-stone-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
                      <div className="px-6 py-2.5 rounded-full bg-white/95 text-stone-950 shadow-2xl border border-stone-200 font-editorial text-lg tracking-wide flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="italic font-normal">Sobre mí</span>
                        <ArrowRight className="w-4 h-4 text-[#b24b74]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <Marquee />

        {/* INTERACTIVE EXPANDABLE ACCORDION SHOWCASE */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-10">
              <h2 className="text-4xl sm:text-5xl font-editorial italic font-normal text-stone-950">
                Tres pilares visuales
              </h2>
            </div>

            {/* Desktop Fluid Horizontal Accordion */}
            <div className="hidden md:flex gap-4 h-[560px] w-full">
              {disciplines.map((d) => {
                const isActive = activeAccordion === d.idx;
                return (
                  <div
                    key={d.idx}
                    onMouseEnter={() => setActiveAccordion(d.idx)}
                    className={`relative rounded-3xl overflow-hidden border border-stone-200/90 bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer flex flex-col justify-end ${
                      isActive ? "flex-[3.2] shadow-xl" : "flex-[1.1] hover:flex-[1.4] opacity-85 hover:opacity-100"
                    }`}
                  >
                    {/* Background Image */}
                    <img
                      src={d.image}
                      alt={d.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        isActive ? "scale-105 filter-none" : "scale-100 brightness-[0.92]"
                      }`}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 p-6 lg:p-8 text-white">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider mb-2">
                        {d.tag}
                      </span>

                      <h3 className="text-2xl lg:text-3xl font-bold font-editorial text-white tracking-wide">
                        {d.title}
                      </h3>

                      <p className="text-xs text-stone-300 font-mono mt-0.5">
                        {d.subtitle}
                      </p>

                      {/* Expandable text when active */}
                      <div
                        className={`transition-all duration-500 overflow-hidden ${
                          isActive ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="text-sm text-stone-200 font-normal leading-relaxed line-clamp-3 mb-4">
                          <RichText text={d.body} />
                        </div>

                        <Link
                          to={d.to}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-stone-900 font-semibold text-xs hover:bg-[#b24b74] hover:text-white transition-colors"
                        >
                          <span>{t.common.seeMore}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Vertical Accordion */}
            <div className="md:hidden space-y-4">
              {disciplines.map((d) => (
                <div
                  key={d.idx}
                  className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm"
                >
                  <div className="aspect-[16/9] relative">
                    <img src={d.image} alt={d.alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white">
                      <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded">
                        {d.tag}
                      </span>
                      <h3 className="text-xl font-bold font-editorial mt-1">{d.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-sm text-stone-600 font-normal leading-relaxed">
                      <RichText text={d.body} />
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-100 flex justify-end">
                      <Link
                        to={d.to}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b24b74] uppercase tracking-wider"
                      >
                        <span>{t.common.seeMore}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
