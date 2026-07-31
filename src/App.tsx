import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./i18n/LanguageContext.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Diseno from "./pages/Diseno.tsx";
import DisenoProject from "./pages/DisenoProject.tsx";
import DisenoDiceUp from "./pages/DisenoDiceUp.tsx";
import DisenoDEW from "./pages/DisenoDEW.tsx";
import DisenoOshun from "./pages/DisenoOshun.tsx";
import DisenoArsenal from "./pages/DisenoArsenal.tsx";
import IA from "./pages/IA.tsx";
import IAProject from "./pages/IAProject.tsx";
import ThreeD from "./pages/ThreeD.tsx";
import ThreeDProducto from "./pages/ThreeDProducto.tsx";
import ThreeDArquitectura from "./pages/ThreeDArquitectura.tsx";
import About from "./pages/About.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diseno" element={<Diseno />} />
          <Route path="/diseno/diceup" element={<DisenoDiceUp />} />
          <Route path="/diseno/dew" element={<DisenoDEW />} />
          <Route path="/diseno/oshun" element={<DisenoOshun />} />
          <Route path="/diseno/arsenal" element={<DisenoArsenal />} />
          <Route path="/diseno/:slug" element={<DisenoProject />} />
          <Route path="/ia" element={<IA />} />
          <Route path="/ia/:slug" element={<IAProject />} />
          <Route path="/3d" element={<ThreeD />} />
          <Route path="/3d/producto" element={<ThreeDProducto />} />
          <Route path="/3d/arquitectura" element={<ThreeDArquitectura />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
