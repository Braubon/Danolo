import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf8f5] text-stone-900 font-jakarta px-4 selection:bg-[#b24b74] selection:text-white">
      <div className="text-center max-w-md">
        <span className="font-mono text-xs uppercase tracking-widest text-[#b24b74] font-semibold">404 Error</span>
        <h1 className="mt-3 mb-4 font-editorial italic text-6xl sm:text-7xl font-normal text-stone-950">
          Página no encontrada
        </h1>
        <p className="mb-8 font-jakarta text-stone-600 text-base font-normal">
          La página que buscas no existe o ha sido trasladada.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-stone-950 text-white font-jakarta font-semibold text-xs uppercase tracking-wider hover:bg-[#b24b74] transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
