import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

interface Section {
  heading?: string;
  text: React.ReactNode;
  image?: string;
  imageAlt?: string;
}

interface ProjectPageProps {
  category: string;
  categoryPath: string;
  title: string;
  tagline: string;
  cover: string;
  sections: Section[];
}

export const ProjectPage = ({ category, categoryPath, title, tagline, cover, sections }: ProjectPageProps) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <section className="container py-12 md:py-16">
        <Link to={categoryPath} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider hover:text-accent">
          <ArrowLeft className="w-3.5 h-3.5" /> {category}
        </Link>
        <h1 className="font-display font-bold text-accent text-5xl md:text-7xl mt-6 leading-tight">{title}</h1>
        <p className="max-w-2xl mt-4 font-sans text-lg text-foreground/85">{tagline}</p>

        <div className="hard-block mt-10 overflow-hidden">
          <img src={cover} alt={title} className="w-full h-auto object-cover aspect-[16/9]" />
        </div>
      </section>

      <section className="container pb-16 space-y-12">
        {sections.map((s, i) => (
          <div key={i} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
            <div className="[direction:ltr]">
              {s.heading && (
                <h3 className="font-display font-bold text-2xl text-accent mb-3">{s.heading}</h3>
              )}
              <div className="font-sans text-foreground/85 leading-relaxed">{s.text}</div>
            </div>
            {s.image && (
              <div className="hard-block-sm overflow-hidden [direction:ltr]">
                <img src={s.image} alt={s.imageAlt ?? ""} className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
              </div>
            )}
          </div>
        ))}
      </section>

      <ContactSection />
    </main>
    <Footer />
  </div>
);
