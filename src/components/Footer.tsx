import { ArrowUp } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

export const Footer = () => {
  const t = useT();

  return (
    <footer className="bg-[#faf8f5] border-t border-stone-200/80 text-stone-600 font-jakarta py-4 sm:py-5">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="font-editorial italic font-normal text-base text-stone-900 tracking-wide">
            Daniel Sánchez
          </span>
          <span className="text-stone-300">·</span>
          <span className="text-stone-500 text-[11px] font-normal">
            © 2026 · Graphic design, AI & 3D render
          </span>
        </div>

        <div className="text-stone-500 text-[11px] font-normal">
          {t.footer.city}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1.5 text-stone-700 hover:text-[#b24b74] font-medium transition-colors text-xs"
        >
          <span>{t.footer.backTop}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
