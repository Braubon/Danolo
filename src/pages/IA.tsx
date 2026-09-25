import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { ProjectsShowcase, ShowcaseProject } from "@/components/ProjectsShowcase";
import { useT } from "@/i18n/LanguageContext";
import fotografiaCover from "@/assets/fresli/cartel-01.png";
import identidadCover from "@/assets/identidad-consistente/becca/becca-3.jpg";

const IA = () => {
  const t = useT();
  const p = t.ia.projects;
  const projects: ShowcaseProject[] = [
    { slug: "fotografia-publicitaria", title: p.photo.title, blurb: p.photo.blurb, description: [...p.photo.description], image: fotografiaCover },
    { slug: "identidad-consistente", title: p.identity.title, blurb: p.identity.blurb, description: [...p.identity.description], image: identidadCover },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container pt-6 pb-2 md:pt-8 md:pb-3">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider hover:text-accent">
            <ArrowLeft className="w-3.5 h-3.5" /> {t.common.back}
          </Link>
          <h1 className="font-display font-bold text-accent text-5xl md:text-6xl mt-4 leading-tight">
            {t.ia.title}
          </h1>
          <div className="max-w-2xl mt-4 font-sans text-foreground/85 leading-relaxed text-base md:text-lg">
            <p>{t.ia.lead}</p>
          </div>
        </section>

        <ProjectsShowcase projects={projects} basePath="/ia" />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default IA;
