import { Link } from "react-router-dom";
import portrait from "@/assets/hero-portrait.webp";
import { Logo } from "./Logo";
import { useT } from "@/i18n/LanguageContext";

const PORTFOLIO_URL =
  "https://drive.google.com/drive/folders/1PwmEx9HLqzmsIkZ56DhRUzJ1nYYKWrMM?usp=drive_link";

export const Hero = () => {
  const t = useT();
  return (
    <section className="relative overflow-hidden">
      {/* Background portrait — solo visible desde md hacia arriba como fondo completo */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <img
          src={portrait}
          alt={t.hero.portraitAlt}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* === MOBILE LAYOUT (< md) === */}
      <div className="md:hidden relative container min-h-[85vh] pt-6 pb-12 flex flex-col justify-between">
        <div className="absolute inset-0 -z-10">
          <img
            src={portrait}
            alt={t.hero.portraitAlt}
            className="w-full h-full object-cover object-[75%_center]"
            loading="eager"
          />
        </div>

        <div className="text-foreground z-10 w-[55%] flex flex-col gap-2">
          <Logo variant="vertical" className="w-36 h-auto mb-4" />
          <h2 className="font-display font-bold text-3xl mb-1 leading-none">
            {t.hero.welcome}
          </h2>
          <p className="font-sans text-xs leading-relaxed text-foreground/90">
            {t.hero.intro}
          </p>
        </div>

        <div className="z-10 mt-6 flex flex-col items-start gap-2.5 w-[55%]">
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hard-block-sm squish-sm bg-cta text-cta-foreground px-5 py-2 font-display text-sm"
          >
            {t.hero.cv}
          </a>
          <Link
            to="/about"
            className="inline-block hard-block-sm squish-sm bg-background text-foreground px-5 py-2 font-display text-sm"
          >
            {t.hero.about}
          </Link>
        </div>

        {/* Flechas en la parte inferior */}
        <div className="absolute inset-x-0 bottom-1 flex justify-center items-end gap-3 pointer-events-none">
          {[0, 0.15, 0.3, 0.45, 0.6].map((d, i) => (
            <span
              key={i}
              className="font-mono text-white text-3xl leading-none arrow-wave select-none drop-shadow"
              style={{ animationDelay: `${d}s` }}
              aria-hidden="true"
            >
              ↓
            </span>
          ))}
        </div>
      </div>

      {/* === TABLET / DESKTOP LAYOUT (>= md) === */}
      <div className="hidden md:flex container pt-14 pb-20 min-h-[85vh] flex-col">
        <div className="max-w-md lg:max-w-2xl text-foreground">
          <Logo
            variant="vertical"
            className="w-56 lg:w-72 h-auto mb-8"
          />

          <div className="mt-4 max-w-sm lg:max-w-md">
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4 leading-none">
              {t.hero.welcome}
            </h2>
            <p className="font-sans text-base leading-relaxed">
              {t.hero.intro}
            </p>
          </div>
        </div>

        <div className="mt-auto pt-16 flex flex-wrap items-center gap-4">
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hard-block-sm squish-sm bg-cta text-cta-foreground px-7 py-3 font-display text-lg"
          >
            {t.hero.cv}
          </a>
          <Link
            to="/about"
            className="inline-block hard-block-sm squish-sm bg-background text-foreground px-6 py-3 font-display text-base"
          >
            {t.hero.about}
          </Link>
        </div>

        <div className="pt-10 flex justify-center items-end gap-6 md:gap-8">
          {[0, 0.15, 0.3, 0.45, 0.6].map((d, i) => (
            <span
              key={i}
              className="font-mono text-white text-5xl md:text-6xl leading-none arrow-wave select-none"
              style={{ animationDelay: `${d}s` }}
              aria-hidden="true"
            >
              ↓
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
