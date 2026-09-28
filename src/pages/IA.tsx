import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { ProjectsShowcase, ShowcaseProject } from "@/components/ProjectsShowcase";
import { useT } from "@/i18n/LanguageContext";
import { RichText } from "@/i18n/RichText";
import fotografiaCover from "@/assets/ia/grafica-publicitaria/forseti-1.jpg";
import identidadCover from "@/assets/ia/identidad-consistente/becca/becca-6.jpg";

const IA = () => {
  const t = useT();
  const p = t.ia.projects;
  const projects: ShowcaseProject[] = [
    { slug: "fotografia-publicitaria", title: p.photo.title, blurb: p.photo.blurb, description: [...p.photo.description], image: fotografiaCover },
    { slug: "identidad-consistente", title: p.identity.title, blurb: p.identity.blurb, description: [...p.identity.description], image: identidadCover },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 font-jakarta selection:bg-[#b24b74] selection:text-white">
      <Navbar />
      <main className="flex-1">
        {/* Editorial Header Section with Vertical Divider */}
        <section className="container pt-8 pb-8 md:pt-12 md:pb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-stone-500 hover:text-stone-950 transition-colors mb-6 md:mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {t.common.back}
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-12">
            {/* Page Title Left */}
            <div className="md:w-1/2 lg:w-5/12 shrink-0">
              <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.06] text-stone-950 whitespace-pre-line">
                {t.ia.title}
              </h1>
            </div>

            {/* Vertical Hairline Divider */}
            <div className="hidden md:block w-px self-stretch bg-stone-300 my-1" />

            {/* Explanatory Body Right */}
            <div className="flex-1 space-y-4 font-jakarta max-w-2xl">
              <p className="text-base sm:text-lg text-stone-900 font-normal leading-relaxed">
                <RichText text={t.ia.lead} />
              </p>
              {t.ia.body && (
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                  {t.ia.body}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Expandable Projects Showcase */}
        <ProjectsShowcase projects={projects} basePath="/ia" />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default IA;
