import { Link } from "react-router-dom";
import portrait from "@/assets/hero-portrait-crop.webp";
import { Logo } from "./Logo";
import { useT } from "@/i18n/LanguageContext";

export const Hero = () => {
  const t = useT();

  return (
    <section className="relative overflow-hidden py-8 sm:py-10 md:py-14 lg:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-14">
        {/* Mitad Izquierda: Foto */}
        <div className="flex items-center justify-center order-1">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[500px]">
            <img
              src={portrait}
              alt={t.hero.portraitAlt}
              className="w-full h-auto object-contain block drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>

        {/* Mitad Derecha: Información */}
        <div className="flex flex-col items-start justify-center order-2 text-foreground">
          <Logo
            variant="vertical"
            className="w-44 sm:w-52 md:w-56 lg:w-64 h-auto mb-4 md:mb-6"
          />

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-foreground">
            {t.hero.welcome}
          </h1>

          <p className="font-sans text-sm sm:text-base leading-relaxed text-foreground/85 max-w-lg mt-3 md:mt-4">
            {t.hero.intro}
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="/CV-Daniel-Sanchez.pdf"
              download="CV-Daniel-Sanchez.pdf"
              className="inline-block hard-block-sm squish-sm bg-cta text-cta-foreground px-6 sm:px-7 py-2.5 sm:py-3 font-display text-sm sm:text-base tracking-wide"
            >
              {t.hero.cv}
            </a>
            <Link
              to="/about"
              className="inline-block hard-block-sm squish-sm bg-card text-foreground px-6 sm:px-7 py-2.5 sm:py-3 font-display text-sm sm:text-base tracking-wide"
            >
              {t.hero.about}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
