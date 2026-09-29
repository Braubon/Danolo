import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { useLang, useT } from "@/i18n/LanguageContext";
import { RichText } from "@/i18n/RichText";
import portrait from "@/assets/profile/portrait.jpg";
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
  <ol className="relative ml-3 border-l-2 border-stone-200 space-y-6">
    {items.map((it) => (
      <li key={it.range + it.title} className="pl-6 relative">
        <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#b24b74] border-2 border-white shadow-sm" aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-wider text-stone-500 font-semibold">{it.range}</p>
        <p className="font-editorial text-xl sm:text-2xl text-stone-950 leading-tight mt-1">{it.title}</p>
        {it.place && <p className="font-jakarta text-sm text-stone-600 mt-0.5 font-normal">{it.place}</p>}
      </li>
    ))}
  </ol>
);

const Bar = ({ label, value, suffix, highlight = false }: { label: string; value: number; suffix?: string; highlight?: boolean }) => (
  <div>
    <div className="flex items-baseline justify-between mb-1.5">
      <span className="font-jakarta font-medium text-sm text-stone-900">{label}</span>
      {suffix ? (
        <span className="font-mono text-xs uppercase tracking-wider text-stone-500">{suffix}</span>
      ) : (
        <span className="font-mono text-xs text-stone-400 font-semibold">{value}%</span>
      )}
    </div>
    <div className="h-2.5 rounded-full bg-stone-100 overflow-hidden border border-stone-200/60">
      <div
        className={`h-full rounded-full transition-all duration-700 ${highlight ? "bg-[#b24b74]" : "bg-stone-800"}`}
        style={{ width: `${value}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      />
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
    <div className="flex flex-col items-center text-center gap-3 sm:flex-row sm:text-left sm:items-center p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
      <div className="relative w-16 h-16 shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {Array.from({ length: SEGMENTS }).map((_, i) => (
            <path key={i} d={segmentPath(i)} className={i < filled ? "fill-[#b24b74]" : "fill-stone-200"} />
          ))}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={icon} alt={label} className="w-6 h-6 object-contain" loading="lazy" />
        </div>
      </div>
      <div className="leading-tight">
        <p className="font-jakarta font-semibold text-sm text-stone-950">{label}</p>
        {sub && <p className="font-mono text-[11px] uppercase tracking-wider text-stone-500">{sub}</p>}
      </div>
    </div>
  );
};

type Tool = { label: string; sub?: string; icon: string; value: number };

const About = () => {
  const { lang } = useLang();
  const t = useT();

  const herramientas: Tool[] = [
    { label: "Photoshop", icon: iconPhotoshop, value: 95 },
    { label: "Illustrator", icon: iconIllustrator, value: 90 },
    { label: "InDesign", icon: iconIndesign, value: 80 },
    { label: "Figma", icon: iconFigma, value: 80 },
    { label: "Blender", sub: "(3D)", icon: iconBlender, value: 75 },
    { label: "Affinity", icon: iconAffinity, value: 70 },
    { label: "ComfyUI", sub: lang === "es" ? "(IA)" : "(AI)", icon: iconComfyui, value: 70 },
    { label: "HTML", icon: iconHtml, value: 75 },
    { label: "CSS", icon: iconCss, value: 65 },
    { label: "JavaScript", sub: "(JS)", icon: iconJs, value: 55 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 font-jakarta selection:bg-[#b24b74] selection:text-white">
      <Navbar />
      <main className="flex-1">
        {/* HERO / BIO SECTION */}
        <section className="container py-10 md:py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-stone-500 hover:text-stone-950 transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {t.common.back}
          </Link>

          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Bio text (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight text-stone-950">
                Daniel Sánchez
              </h1>
              <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-stone-500 mt-2 font-medium">
                {t.about.role}
              </p>

              <div className="mt-8 font-jakarta text-stone-600 leading-relaxed space-y-4 max-w-2xl text-base md:text-lg font-normal">
                <p><RichText text={t.about.bio1} /></p>
                <p><RichText text={t.about.bio2} /></p>
              </div>
            </div>

            {/* Portrait (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="aspect-[831/1024] rounded-2xl overflow-hidden bg-stone-100 max-w-sm w-full border border-stone-200 shadow-md">
                <img
                  src={portrait}
                  alt={t.about.portraitAlt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINES (STUDIES & EXPERIENCE) */}
        <section className="container pb-14 grid md:grid-cols-2 gap-8 md:gap-10">
          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-[#b24b74] font-semibold block mb-1">
              {t.about.formationEyebrow}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-stone-950 font-normal mb-8">
              {t.about.formationTitle}
            </h2>
            <Timeline items={[...t.about.formacion]} />
          </div>

          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-[#b24b74] font-semibold block mb-1">
              {t.about.experienceEyebrow}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-stone-950 font-normal mb-8">
              {t.about.experienceTitle}
            </h2>
            <Timeline items={[...t.about.experiencia]} />
          </div>
        </section>

        {/* SKILLS & LANGUAGES */}
        <section className="container pb-14 grid md:grid-cols-2 gap-8 md:gap-10">
          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-[#b24b74] font-semibold block mb-1">
              {t.about.skillsEyebrow}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-stone-950 font-normal mb-6">
              {t.about.skillsTitle}
            </h2>
            <div className="space-y-4">
              {t.about.competencias.map((c, idx) => (
                <Bar key={c.label} label={c.label} value={c.value} highlight={idx < 3} />
              ))}
            </div>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-[#b24b74] font-semibold block mb-1">
              {t.about.languagesEyebrow}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-stone-950 font-normal mb-6">
              {t.about.languagesTitle}
            </h2>
            <div className="space-y-4">
              {t.about.idiomas.map((i, idx) => (
                <Bar key={i.label} label={i.label} value={i.value} suffix={i.nivel} highlight={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* STACK / TOOLS */}
        <section className="container pb-16 md:pb-20">
          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-[#b24b74] font-semibold block mb-1">
              {t.about.stackEyebrow}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-stone-950 font-normal mb-6">
              {t.about.stackTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
