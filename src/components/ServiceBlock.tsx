import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
        className="hard-block squish block overflow-hidden bg-card"
      >
        <div className={`grid md:grid-cols-2 items-stretch ${reverse ? "md:[direction:rtl]" : ""}`}>
          <div className="overflow-hidden [direction:ltr]">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover aspect-[4/3]"
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
            <span className="self-end mt-6 inline-flex items-center gap-2 font-display text-accent">
              {t.common.seeMore} <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

