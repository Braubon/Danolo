import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";
import { RichText } from "@/i18n/RichText";
import portrait from "@/assets/About-portrait.webp";
import iconPhotoshop from "@/assets/tools/photoshop.svg";
import iconIllustrator from "@/assets/tools/illustrator.svg";
import iconIndesign from "@/assets/tools/indesign.svg";
import iconFigma from "@/assets/tools/figma.svg";
import iconBlender from "@/assets/tools/blender.svg";
import iconAffinity from "@/assets/tools/affinity.svg";
import iconComfyui from "@/assets/tools/comfyui.svg";
import iconHtml from "@/assets/tools/html.svg";
import iconCss from "@/assets/tools/css.svg";
import iconJs from "@/assets/tools/javascript.svg";

type TimelineItem = { range: string; title: string; place?: string };

const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <ol className="relative ml-3 border-l-2 border-foreground space-y-6">
    {items.map((it) => (
      <li key={it.range + it.title} className="pl-6 relative">
        <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-accent border-2 border-foreground" aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{it.range}</p>
        <p className="font-display font-bold text-lg leading-tight mt-1">{it.title}</p>
        {it.place && <p className="font-sans text-sm text-foreground/80 mt-0.5">{it.place}</p>}
      </li>
    ))}
  </ol>
);

const Bar = ({ label, value, suffix, highlight = false }: { label: string; value: number; suffix?: string; highlight?: boolean }) => (
  <div>
    <div className="flex items-baseline justify-between mb-1.5">
      <span className="font-display text-sm">{label}</span>
      {suffix && <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{suffix}</span>}
    </div>
    <div className="h-3 border-2 border-foreground bg-background overflow-hidden">
      <div className={`h-full ${highlight ? "bg-cta" : "bg-accent"}`} style={{ width: `${value}%` }} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} />
    </div>
  </div>
);

const CircleStat = ({ icon, label, sub, value }: { icon: string; label: string; sub?: string; value: number }) => {
  const SEGMENTS = 20;
  const filled = Math.round((value / 100) * SEGMENTS);
  const cx = 50, cy = 50, rOuter = 46, rInner = 34, gap = 4;
  const step = 360 / SEGMENTS;
  const polar = (r: number, deg: number) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  };
  const segmentPath = (i: number) => {
    const a0 = i * step + gap / 2;
    const a1 = (i + 1) * step - gap / 2;
    const [x0o, y0o] = polar(rOuter, a0);
    const [x1o, y1o] = polar(rOuter, a1);
    const [x1i, y1i] = polar(rInner, a1);
    const [x0i, y0i] = polar(rInner, a0);
    return `M ${x0o} ${y0o} A ${rOuter} ${rOuter} 0 0 1 ${x1o} ${y1o} L ${x1i} ${y1i} A ${rInner} ${rInner} 0 0 0 ${x0i} ${y0i} Z`;
  };
  return (
    <div className="flex flex-col items-center text-center gap-3 sm:flex-row sm:text-left sm:items-center">
      <div className="relative w-20 h-20 shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {Array.from({ length: SEGMENTS }).map((_, i) => (
            <path key={i} d={segmentPath(i)} className={i < filled ? "fill-accent" : "fill-foreground"} />
          ))}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={icon} alt={label} className="w-7 h-7 object-contain" loading="lazy" />
        </div>
      </div>
      <div className="leading-tight">
        <p className="font-display font-bold text-sm">{label}</p>
        {sub && <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground italic">{sub}</p>}
      </div>
    </div>
  );
};

type Tool = { label: string; sub?: string; icon: string; value: number };

const herramientas: Tool[] = [
  { label: "Photoshop", icon: iconPhotoshop, value: 95 },
  { label: "Illustrator", icon: iconIllustrator, value: 90 },
  { label: "InDesign", icon: iconIndesign, value: 80 },
  { label: "Figma", icon: iconFigma, value: 80 },
  { label: "Blender", sub: "(3D)", icon: iconBlender, value: 75 },
  { label: "Affinity", icon: iconAffinity, value: 70 },
  { label: "ComfyUI", sub: "(IA)", icon: iconComfyui, value: 70 },
  { label: "HTML", icon: iconHtml, value: 75 },
  { label: "CSS", icon: iconCss, value: 65 },
  { label: "JavaScript", sub: "(JS)", icon: iconJs, value: 55 },
];

const About = () => {
  const t = useT();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider hover:text-accent">
            <ArrowLeft className="w-3.5 h-3.5" /> {t.common.back}
          </Link>

          <div className="hard-block bg-card mt-8 flex flex-col-reverse md:flex-row items-stretch overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16 md:w-[65%] lg:w-[70%] flex flex-col justify-center relative z-10 pointer-events-none">
              <div className="pointer-events-auto">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{t.about.eyebrow}</p>
                <h1 className="font-display font-bold text-accent text-6xl lg:text-[5.5rem] leading-none mt-2 tracking-tight">Daniel Sánchez</h1>
                <p className="font-mono text-sm uppercase tracking-wider text-foreground/70 mt-3">{t.about.role}</p>
                <div className="mt-8 font-sans text-foreground/85 leading-relaxed space-y-4 max-w-2xl">
                  <p><RichText text={t.about.bio1} /></p>
                  <p><RichText text={t.about.bio2} /></p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[45%] lg:w-[40%] shrink-0 relative min-h-[350px] md:min-h-0 md:-ml-[10%]">
              <img src={portrait} alt={t.about.portraitAlt} className="absolute inset-0 w-full h-full object-cover object-[center_top]" />
            </div>
          </div>
        </section>

        <section className="container pb-16 grid md:grid-cols-2 gap-10 md:gap-12">
          <div className="hard-block bg-card p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{t.about.formationEyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-1 mb-6">{t.about.formationTitle}</h2>
            <Timeline items={[...t.about.formacion]} />
          </div>

          <div className="hard-block bg-card p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{t.about.experienceEyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-1 mb-6">{t.about.experienceTitle}</h2>
            <Timeline items={[...t.about.experiencia]} />
          </div>
        </section>

        <section className="container pb-16 grid md:grid-cols-2 gap-10 md:gap-12">
          <div className="hard-block bg-card p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{t.about.skillsEyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-1 mb-6">{t.about.skillsTitle}</h2>
            <div className="space-y-4">
              {t.about.competencias.map((c, idx) => (
                <Bar key={c.label} label={c.label} value={c.value} highlight={idx < 3} />
              ))}
            </div>
          </div>

          <div className="hard-block bg-card p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{t.about.languagesEyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-1 mb-6">{t.about.languagesTitle}</h2>
            <div className="space-y-4">
              {t.about.idiomas.map((i, idx) => (
                <Bar key={i.label} label={i.label} value={i.value} suffix={i.nivel} highlight={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="container pb-20">
          <div className="hard-block bg-card p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{t.about.stackEyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-1 mb-6">{t.about.stackTitle}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 sm:gap-y-6">
              {herramientas.map((h) => (
                <CircleStat key={h.label} icon={h.icon} label={h.label} sub={h.sub} value={h.value} />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
