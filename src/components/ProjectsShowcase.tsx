import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [activeIdx, setActiveIdx] = useState(0);
  const current = projects[activeIdx];

  return (
    <section className="container pt-1 pb-10 md:pt-2 md:pb-12 w-full">
      <div className="flex flex-row md:flex-col items-stretch gap-0 relative">
        {/* Tabs List */}
        <div
          role="tablist"
          aria-label="Proyectos"
          className="flex flex-col md:flex-row shrink-0 w-[45px] sm:w-[55px] md:w-full relative z-20 md:z-10"
        >
          {projects.map((p, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={p.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIdx(i)}
                className={`font-display font-bold uppercase tracking-wider text-xs md:text-sm lg:text-base transition-all duration-300 ease-out text-center md:text-left whitespace-nowrap relative border border-foreground flex items-center justify-center
                  w-full h-auto py-6 px-1 sm:px-2 [writing-mode:vertical-lr] rotate-180 border-b-0 last:border-b
                  ${isActive ? "bg-card text-cta border-r-0 translate-x-[1px] z-30" : "bg-secondary text-foreground hover:bg-card z-10"}
                  
                  md:w-auto md:h-auto md:py-3.5 md:px-10 md:[writing-mode:horizontal-tb] md:rotate-0
                  md:border-b-0 md:last:border-b-0 md:border-r
                  ${i > 0 ? "md:-ml-[1px]" : ""}
                  ${isActive 
                    ? "md:bg-card md:text-cta md:border-b-0 md:translate-x-0 md:translate-y-[1px] md:z-30" 
                    : "md:bg-secondary md:text-foreground md:hover:bg-card md:z-10"
                  }
                `}
              >
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Content Folder */}
        <div className="hard-block flex-1 bg-card p-4 sm:p-6 md:p-8 relative z-10 -ml-[1px] md:ml-0 md:-mt-[1px]">
          <div
            key={current.slug}
            className="animate-fade-in grid md:grid-cols-2 gap-6 md:gap-8 items-start"
          >
            <div className="aspect-[16/7] md:aspect-[4/3] overflow-hidden bg-muted border border-foreground">
              <img src={current.image} alt={current.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col h-full justify-between">
              <div>
                <p className="font-display font-bold text-lg md:text-xl leading-snug">
                  {current.blurb}
                </p>

                <div className="font-sans text-foreground/85 leading-relaxed mt-4 space-y-3 text-base md:text-lg">
                  {current.description.map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Link
                  to={`${basePath}/${current.slug}`}
                  className="inline-block hard-block-sm squish-sm bg-cta text-cta-foreground px-6 py-3 font-display font-bold text-base uppercase tracking-wider"
                >
                  {t.common.seeProject}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
