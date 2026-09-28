import { useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUpRight } from "lucide-react";
import { useLang, useT } from "@/i18n/LanguageContext";

export const ContactSection = () => {
  const email = "segovax.14.3@gmail.com";
  const phone = "+34 638 512 171";
  const { lang } = useLang();
  const t = useT();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-[#f8f6f0] border-t border-stone-200 text-stone-900 transition-colors">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200/80">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial tracking-tight text-stone-950 font-normal">
              {lang === "es" ? "Trabajemos juntos" : "Let's work together"}
              <span className="text-[#b24b74]">.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-10">
          {/* Card Email */}
          <div className="p-6 sm:p-8 border border-stone-200 bg-white rounded-3xl shadow-sm hover:shadow-md hover:border-stone-300 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#b24b74]" />
                {t.contact.writeMe}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-xs font-mono text-stone-500 hover:text-stone-900 inline-flex items-center gap-1 transition-colors px-2 py-1 rounded-lg bg-stone-100"
                title="Copiar email al portapapeles"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#b24b74]" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? (lang === "es" ? "Copiado" : "Copied") : (lang === "es" ? "Copiar" : "Copy")}
              </button>
            </div>

            <a
              href={`mailto:${email}`}
              className="block text-2xl sm:text-3xl font-editorial italic font-normal tracking-wide hover:text-[#b24b74] transition-colors break-all text-stone-950"
            >
              {email}
            </a>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-xs font-jakarta tracking-wide bg-stone-950 text-white hover:bg-[#b24b74] rounded-full shadow-sm transition-all"
              >
                <span>{t.contact.openEmail}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card Phone */}
          <div className="p-6 sm:p-8 border border-stone-200 bg-white rounded-3xl shadow-sm hover:shadow-md hover:border-stone-300 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#b24b74]" />
                {t.contact.preferCall}
              </span>
            </div>

            <a
              href="tel:+34638512171"
              className="block text-2xl sm:text-3xl font-editorial italic font-normal tracking-wide hover:text-[#b24b74] transition-colors text-stone-950"
            >
              {phone}
            </a>

            <div className="mt-6">
              <a
                href="tel:+34638512171"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-xs font-jakarta tracking-wide border border-stone-300 bg-white text-stone-900 hover:bg-stone-50 hover:border-[#b24b74] hover:text-[#b24b74] rounded-full transition-all"
              >
                <span>{t.contact.callDirect || (lang === "es" ? "Llamar directamente" : "Call directly")}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
