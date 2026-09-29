import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Diseno from "@/pages/Diseno";
import DisenoCobalto from "@/pages/DisenoCobalto";
import DisenoDiceUp from "@/pages/DisenoDiceUp";
import IA from "@/pages/IA";
import ThreeD from "@/pages/ThreeD";
import NotFound from "@/pages/NotFound";

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <TooltipProvider>
      <LanguageProvider>
        <BrowserRouter>{component}</BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  );
};

describe("Redesigned Portfolio Web (Studio Magazine Editorial)", () => {
  it("renders Index page with approved Studio Magazine header, hero, and disciplines", () => {
    const { container } = renderWithProviders(<Index />);
    expect(container.textContent).toContain("Daniel Sánchez");
    expect(container.textContent).toContain("Diseño gráfico · IA bajo control · Render 3D");
    expect(container.textContent).toContain("Diseño gráfico adaptado a los");
    expect(container.textContent).toContain("Sobre mí");
    expect(container.textContent).toContain("Diseño Gráfico & Retoque");
    expect(container.textContent).toContain("IA bajo control");
    expect(container.textContent).toContain("Diseño y Modelado 3D");
    expect(container.textContent).toContain("Trabajemos juntos");
    const cvLink = container.querySelector('a[href="/Portfolio_2026_ES.pdf"]');
    expect(cvLink).not.toBeNull();
    expect(container.textContent).not.toContain("Edición Portfolio 2026");
    expect(container.textContent).not.toContain("Respuesta garantizada en menos de 24 horas");
    expect(container.textContent).not.toContain("EXPLORA POR DISCIPLINA");
  });

  it("renders About page with biography and toolkit", () => {
    const { container } = renderWithProviders(<About />);
    expect(container.textContent).toContain("Daniel Sánchez");
    expect(container.textContent).toContain("CV");
  });

  it("renders Diseno catalog and project pages", () => {
    const { container: catContainer } = renderWithProviders(<Diseno />);
    expect(catContainer.textContent).toContain("Cobalto");
    expect(catContainer.textContent).toContain("DiceUp");

    const { container: cobaltoContainer } = renderWithProviders(<DisenoCobalto />);
    expect(cobaltoContainer.textContent).toContain("Cobalto");

    const { container: diceupContainer } = renderWithProviders(<DisenoDiceUp />);
    expect(diceupContainer.textContent).toContain("DiceUp");
  });

  it("renders IA page and ThreeD page", () => {
    const { container: iaContainer } = renderWithProviders(<IA />);
    expect(iaContainer.textContent).toContain("IA");

    const { container: threeDContainer } = renderWithProviders(<ThreeD />);
    expect(threeDContainer.textContent).toContain("3D");
  });

  it("renders NotFound page with editorial styling", () => {
    const { container } = renderWithProviders(<NotFound />);
    expect(container.textContent).toContain("Página no encontrada");
    expect(container.textContent).toContain("Volver al inicio");
  });

  it("switches to English and downloads Portfolio_2026_EN.pdf", () => {
    const { container, getAllByText } = renderWithProviders(<Index />);
    const enButtons = getAllByText("EN");
    fireEvent.click(enButtons[0]);
    expect(container.textContent).toContain("Graphic design · AI under control · 3D render");
    expect(container.textContent).toContain("Graphic Design & Retouching");
    expect(container.textContent).toContain("AI under control");
    expect(container.textContent).toContain("3D Design & Modeling");
    expect(container.textContent).toContain("Three visual pillars");
    const cvLink = container.querySelector('a[href="/Portfolio_2026_EN.pdf"]');
    expect(cvLink).not.toBeNull();
  });
});

