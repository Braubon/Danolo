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
    <article className="container py-8 md:py-10">
      <Link
        to={to}
        aria-label={`${t.common.seeMore} — ${typeof title === "string" ? title : ""}`}
        className="hard-block block overflow-hidden bg-card group"
      >
        <div className={`grid md:grid-cols-2 items-stretch ${reverse ? "md:[direction:rtl]" : ""}`}>
          <div className="overflow-hidden [direction:ltr]">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover aspect-[8/3] md:aspect-[4/3]"
              loading="lazy"
            />
          </div>

          <div className={`p-6 md:p-8 flex flex-col [direction:ltr] border-t-2 md:border-t-0 border-foreground ${reverse ? "md:border-r-2" : "md:border-l-2"}`}>
            <h3 className="font-display font-bold text-accent text-3xl md:text-4xl leading-tight">
              {title}
            </h3>
            <div className="mt-4 font-sans text-foreground/85 text-[0.95rem] leading-relaxed flex-1">
              {body}
            </div>
            <div className="mt-6 flex justify-end">
              <span className="inline-block hard-block-sm squish-sm bg-cta text-cta-foreground px-6 py-3 font-display text-base uppercase tracking-wider">
                {t.common.seeMore}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

