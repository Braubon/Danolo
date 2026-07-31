import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { ProjectsShowcase, ShowcaseProject } from "@/components/ProjectsShowcase";
import { useT } from "@/i18n/LanguageContext";
import { RichText } from "@/i18n/RichText";
import dewImg from "@/assets/service-design.jpg";
import diceupCover from "@/assets/diceup/Presentación_DiceUp_2-estuche dados.jpg";
import oshunCover from "@/assets/oshun/revista-abierta.webp";
import arsenalCover from "@/assets/arsenal/Presentación Portfolio_2_store.webp";

const Diseno = () => {
  const t = useT();
  const p = t.diseno.projects;
  const projects: ShowcaseProject[] = [
    { slug: "arsenal", title: p.arsenal.title, blurb: p.arsenal.blurb, description: [...p.arsenal.description], image: arsenalCover },
    { slug: "dew", title: p.dew.title, blurb: p.dew.blurb, description: [...p.dew.description], image: dewImg },
    { slug: "oshun", title: p.oshun.title, blurb: p.oshun.blurb, description: [...p.oshun.description], image: oshunCover },
    { slug: "diceup", title: p.diceup.title, blurb: p.diceup.blurb, description: [...p.diceup.description], image: diceupCover },
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
            {t.diseno.title}
          </h1>
          <div className="max-w-2xl mt-6 font-sans text-foreground/85 leading-relaxed">
            <p className="text-lg mb-3"><RichText text={t.diseno.lead} /></p>
            <p>{t.diseno.body}</p>
          </div>
        </section>

        <ProjectsShowcase projects={projects} basePath="/diseno" />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Diseno;
