import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

export interface ShowcaseProject {
  slug: string;
  title: string;
  blurb: string;
  description: string[];
  image: string;
}

interface ProjectsShowcaseProps {
  projects: ShowcaseProject[];
  basePath: string; // e.g. /diseno, /ia, /3d
}

export const ProjectsShowcase = ({ projects, basePath }: ProjectsShowcaseProps) => {
  const t = useT();
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="container pt-4 pb-14 md:pt-6 md:pb-20 w-full">
      {/* Desktop Fluid Horizontal Accordion — Aligned with Home Pillars */}
      <div className="hidden md:flex gap-4 h-[580px] w-full">
        {projects.map((p, i) => {
          const isActive = activeIdx === i;
          return (
            <div
              key={p.slug}
              onMouseEnter={() => setActiveIdx(i)}
              onClick={() => setActiveIdx(i)}
              className={`relative rounded-3xl overflow-hidden border border-stone-200/90 bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer flex flex-col justify-end ${
                isActive
                  ? "flex-[3.5] shadow-2xl"
                  : "flex-[1.1] hover:flex-[1.4] opacity-85 hover:opacity-100"
              }`}
            >
              {/* Background Project Cover */}
              <img
                src={p.image}
                alt={p.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  isActive ? "scale-105 filter-none" : "scale-100 brightness-[0.88]"
                }`}
              />

              {/* Gradient Overlay for Editorial Typography Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />

              {/* Panel Content */}
              <div className="relative z-10 p-6 lg:p-8 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider mb-2">
                  {`0${i + 1} · ${t.common.caseStudy.toUpperCase()}`}
                </span>

                <h3 className="text-2xl lg:text-3xl font-bold font-editorial text-white tracking-wide">
                  {p.title}
                </h3>

                <p className="text-xs text-stone-300 font-mono mt-0.5 line-clamp-1">
                  {p.blurb}
                </p>

                {/* Expandable Content Area */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isActive ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-sm text-stone-200 font-normal leading-relaxed line-clamp-3 mb-4 space-y-1.5 font-jakarta">
                    {p.description.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  <Link
                    to={`${basePath}/${p.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-stone-950 font-jakarta font-semibold text-xs uppercase tracking-wider hover:bg-[#b24b74] hover:text-white transition-all shadow-md group/btn"
                  >
                    <span>{t.common.seeProject}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Vertical Accordion / Cards */}
      <div className="md:hidden space-y-4">
        {projects.map((p, i) => (
          <div
            key={p.slug}
            className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-sm"
          >
            <div className="aspect-[16/10] relative">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-mono bg-white/20 backdrop-blur-md px-2 py-0.5 rounded">
                  {`0${i + 1} · ${t.common.caseStudy.toUpperCase()}`}
                </span>
                <h3 className="text-2xl font-bold font-editorial mt-1">{p.title}</h3>
                <p className="text-xs text-stone-300 font-mono mt-0.5">{p.blurb}</p>
              </div>
            </div>
            <div className="p-5">
              <div className="text-sm text-stone-600 font-normal leading-relaxed space-y-2">
                {p.description.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex justify-end">
                <Link
                  to={`${basePath}/${p.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b24b74] uppercase tracking-wider hover:underline"
                >
                  <span>{t.common.seeProject}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
