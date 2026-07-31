import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { ProjectsShowcase, ShowcaseProject } from "@/components/ProjectsShowcase";
import { useT } from "@/i18n/LanguageContext";
import productoCover from "@/assets/3d/producto-camera.webp";
import arqCover from "@/assets/3d/arq-salon.webp";

const ThreeD = () => {
  const t = useT();
  const p = t.threed.projects;
  const projects: ShowcaseProject[] = [
    { slug: "producto", title: p.product.title, blurb: p.product.blurb, description: [...p.product.description], image: productoCover },
    { slug: "arquitectura", title: p.arch.title, blurb: p.arch.blurb, description: [...p.arch.description], image: arqCover },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider hover:text-accent">
            <ArrowLeft className="w-3.5 h-3.5" /> {t.common.back}
          </Link>
          <h1 className="font-display font-bold text-accent text-5xl md:text-6xl mt-6 leading-tight">
            {t.threed.title}
          </h1>
          <div className="max-w-2xl mt-6 font-sans text-foreground/85 leading-relaxed">
            <p>{t.threed.lead}</p>
          </div>
        </section>

        <ProjectsShowcase projects={projects} basePath="/3d" />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ThreeD;
