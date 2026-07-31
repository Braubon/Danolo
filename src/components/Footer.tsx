import { ArrowUp } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

export const Footer = () => {
  const t = useT();
  return (
    <footer className="border-t-2 border-foreground bg-background mt-0">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider">
        <span>2026 Danolo Designs</span>
        <span className="text-muted-foreground">{t.footer.city}</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 hover:text-accent transition-colors"
        >
          {t.footer.backTop} <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
