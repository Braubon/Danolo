import { useEffect, useRef, useState } from "react";
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
  const scrollWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollWrapRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      const idx = Math.min(projects.length - 1, Math.floor(progress * projects.length));
      setActiveIdx((prev) => (prev === idx ? prev : idx));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [projects.length]);

  const goToTab = (idx: number) => {
    const el = scrollWrapRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const target =
      el.getBoundingClientRect().top +
      window.scrollY +
      (total * (idx + 0.5)) / projects.length;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <div
      ref={scrollWrapRef}
      style={{ height: `${projects.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen flex items-center">
        <section className="container pb-8 w-full">
          <div role="tablist" aria-label="Proyectos" className="flex flex-wrap items-end relative z-10">
            {projects.map((p, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={p.slug}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => goToTab(i)}
                  className={`font-display font-bold uppercase tracking-wider px-6 sm:px-10 border-2 border-foreground border-b-0 transition-all duration-500 ease-out ${
                    i > 0 ? "-ml-[2px]" : ""
                  } ${
                    isActive
                      ? "bg-card text-cta text-base sm:text-lg py-3 translate-y-[2px]"
                      : "bg-secondary text-foreground hover:bg-card text-sm sm:text-base py-[7px] sm:py-[9px]"
                  }`}
                >
                  {p.title}
                </button>
              );
            })}
          </div>

          <div className="hard-block bg-card p-4 sm:p-6 md:p-8 max-h-[calc(100vh-12rem)] overflow-auto">
            <div
              key={current.slug}
              className="animate-fade-in grid md:grid-cols-2 gap-6 md:gap-8 items-start"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted border-2 border-foreground">
                <img src={current.image} alt={current.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col h-full">
                <p className="font-display font-bold text-lg md:text-xl leading-snug">
                  {current.blurb}
                </p>

                <div className="font-sans text-foreground/85 leading-relaxed mt-4 space-y-3 text-sm md:text-base">
                  {current.description.map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}
                </div>

                <div className="mt-6 flex justify-end">
                  <Link
                    to={`${basePath}/${current.slug}`}
                    className="inline-block hard-block-sm squish-sm bg-cta text-cta-foreground px-6 py-3 font-display text-base uppercase tracking-wider"
                  >
                    {t.common.seeProject}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
