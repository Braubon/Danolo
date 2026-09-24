import { Link } from "react-router-dom";
import portrait from "@/assets/hero-portrait-crop.webp";
import { Logo } from "./Logo";
import { useT } from "@/i18n/LanguageContext";

export const Hero = () => {
  const t = useT();

  return (
    <section className="relative overflow-hidden w-full border-b border-border bg-background">
      <div className="flex flex-col md:flex-row items-stretch min-h-[380px] md:min-h-[440px] lg:min-h-[480px]">
        {/* Mitad Izquierda: Retrato centrado y con dimensiones más contenidas */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden min-h-[260px] sm:min-h-[320px] md:min-h-full">
          <div className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] flex items-center justify-center">
            <img
              src={portrait}
              alt={t.hero.portraitAlt}
              className="w-full h-auto max-h-[260px] sm:max-h-[320px] md:max-h-[380px] lg:max-h-[420px] object-contain object-center block select-none pointer-events-none"
              loading="eager"
            />
          </div>
        </div>

        {/* Mitad Derecha: Información */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-8 sm:py-10 md:py-12 px-6 sm:px-10 md:px-12 lg:px-16 text-foreground">
          <div className="max-w-lg">
            <Logo
              variant="horizontal"
              className="w-52 sm:w-60 md:w-64 lg:w-72 h-auto mb-4 md:mb-5"
            />

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
              {t.hero.welcome}
            </h1>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-foreground/85 mt-3 md:mt-4">
              {t.hero.intro}
            </p>

            <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="/CV-Daniel-Sanchez.pdf"
                download="CV-Daniel-Sanchez.pdf"
                className="inline-block hard-block-sm bg-cta text-cta-foreground px-6 sm:px-7 py-2.5 sm:py-3 font-display font-bold text-sm sm:text-base tracking-wide"
              >
                {t.hero.cv}
              </a>
              <Link
                to="/about"
                className="inline-block hard-block-sm bg-card text-foreground px-6 sm:px-7 py-2.5 sm:py-3 font-display text-sm sm:text-base tracking-wide"
              >
                {t.hero.about}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
