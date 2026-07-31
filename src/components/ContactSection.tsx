import { useT } from "@/i18n/LanguageContext";

export const ContactSection = () => {
  const email = "segovax.14.3@gmail.com";
  const phone = "+34 638 512 171";
  const t = useT();

  return (
    <section id="contacto" className="border-t-2 border-foreground bg-foreground text-background">
      <div className="container py-16 md:py-20">
        <p className="font-mono text-xs uppercase tracking-wider opacity-70">{t.contact.eyebrow}</p>
        <h2 className="font-display font-bold text-5xl md:text-7xl mt-2 leading-none">
          {t.contact.title}<span className="text-accent blink-dot">.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider opacity-70">
              {t.contact.writeMe}
            </p>
            <a
              href={`mailto:${email}`}
              className="block mt-3 font-display font-bold text-accent text-3xl md:text-4xl hover:underline break-all"
            >
              {email}
            </a>
            <a
              href={`mailto:${email}`}
              className="contact-submit inline-block mt-6 bg-accent text-accent-foreground border-2 border-background px-8 py-2.5 font-display"
            >
              {t.contact.openEmail}
            </a>
          </div>

          <div className="md:text-right">
            <p className="font-mono text-xs uppercase tracking-wider opacity-70">{t.contact.preferCall}</p>
            <p className="font-mono text-xs uppercase tracking-wider opacity-70 mt-1">
              {t.contact.hereNumber}
            </p>
            <a
              href="tel:+34638512171"
              className="block mt-3 font-display font-bold text-accent text-3xl md:text-4xl hover:underline"
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
