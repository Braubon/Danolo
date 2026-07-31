import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceBlock } from "@/components/ServiceBlock";
import { ContactSection } from "@/components/ContactSection";
import { useT } from "@/i18n/LanguageContext";
import { RichText } from "@/i18n/RichText";
import designImg from "@/assets/service-design.jpg";
import aiImg from "@/assets/service-ai.png";
import threeDImg from "@/assets/service-3d.jpg";

const Index = () => {
  const t = useT();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />

        <div className="space-y-2 py-6 md:py-10">
          <ServiceBlock
            to="/diseno"
            title={<RichText text={t.home.design.title} />}
            image={designImg}
            imageAlt={t.home.design.imageAlt}
            body={<p><RichText text={t.home.design.body} /></p>}
          />

          <ServiceBlock
            to="/ia"
            title={t.home.ai.title}
            image={aiImg}
            imageAlt={t.home.ai.imageAlt}
            reverse
            body={<p><RichText text={t.home.ai.body} /></p>}
          />

          <ServiceBlock
            to="/3d"
            title={t.home.threed.title}
            image={threeDImg}
            imageAlt={t.home.threed.imageAlt}
            body={<p><RichText text={t.home.threed.body} /></p>}
          />
        </div>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
