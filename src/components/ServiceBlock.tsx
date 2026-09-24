import { Link } from "react-router-dom";
import { useT } from "@/i18n/LanguageContext";

interface ServiceBlockProps {
  title: React.ReactNode;
  body: React.ReactNode;
  image: string;
  imageAlt: string;
  to: string;
  reverse?: boolean;
}

export const ServiceBlock = ({ title, body, image, imageAlt, to, reverse }: ServiceBlockProps) => {
  const t = useT();
  return (
    <article className="container py-4 md:py-5">
      <div
        className="hard-block block overflow-hidden bg-card"
      >
        <div className={`grid md:grid-cols-2 items-stretch ${reverse ? "md:[direction:rtl]" : ""}`}>
          <div className="overflow-hidden [direction:ltr]">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover aspect-[16/7] md:aspect-[16/9]"
              loading="lazy"
            />
          </div>

          <div className={`p-5 md:py-6 md:px-7 flex flex-col justify-between [direction:ltr] border-t md:border-t-0 border-foreground ${reverse ? "md:border-r" : "md:border-l"}`}>
            <div>
              <h3 className="font-display font-bold text-accent text-2xl md:text-3xl leading-tight">
                {title}
              </h3>
              <div className="mt-3 font-sans text-foreground/85 text-[0.92rem] leading-relaxed">
                {body}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Link
                to={to}
                aria-label={`${t.common.seeMore} — ${typeof title === "string" ? title : ""}`}
                className="inline-block hard-block-sm squish-sm bg-cta text-cta-foreground px-5 py-2.5 font-display text-sm md:text-base uppercase tracking-wider"
              >
                {t.common.seeMore}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

