import { useParams, Navigate } from "react-router-dom";
import { ProjectPage } from "@/components/ProjectPage";
import cobaltoImg from "@/assets/Cobalto/Presentación Portfolio Cobalto_Foto impacto.jpg";
import defaultImg from "@/assets/service-design.jpg";

const projects: Record<string, React.ComponentProps<typeof ProjectPage>> = {
  cobalto: {
    category: "Diseño Gráfico",
    categoryPath: "/diseno",
    title: "Cobalto",
    tagline: "Herencia mediterránea y producto gourmet.",
    cover: cobaltoImg,
    sections: [
      {
        heading: "La idea",
        text: "Homenaje a la tradición cerámica mediterránea combinada con conservas y productos gastronómicos de la más alta calidad.",
        image: cobaltoImg,
        imageAlt: "Bodegón de producto Cobalto",
      },
    ],
  },
  diceup: {
    category: "Diseño Gráfico",
    categoryPath: "/diseno",
    title: "DiceUp",
    tagline: "La suerte está echada.",
    cover: defaultImg,
    sections: [
      {
        heading: "La idea",
        text: "¿Cómo diseñas algo que cambia todo el tiempo como el azar? En DiceUp, la marca tenía que ser tan emocionante como una partida de rol.",
        image: defaultImg,
      },
      {
        heading: "Cómo lo hicimos",
        text: "Nos quedamos con el blanco y el negro para poner un poco de orden, y a partir de ahí, ¡a jugar! Usamos las letras para crear carteles que parecen cobrar vida y dados que te dicen qué descuento te ha tocado.",
        image: defaultImg,
      },
      {
        heading: "El resultado",
        text: "Una tienda donde cada cartel y cada entrada cuenta una historia diferente, haciendo que ir a comprar sea parte del juego.",
        image: defaultImg,
      },
    ],
  },
  oshun: {
    category: "Diseño Gráfico",
    categoryPath: "/diseno",
    title: "Oshun",
    tagline: "Diseño que cuenta historias.",
    cover: defaultImg,
    sections: [
      {
        heading: "La idea",
        text: "Ropa que habla de sus orígenes. Oshun necesitaba un lenguaje que se sintiera artesanal, étnico y muy elegante a la vez.",
        image: defaultImg,
      },
      {
        heading: "Cómo lo hicimos",
        text: "Nos inspiramos en patrones tribales para crear un diseño que se siente natural. Usamos materiales como el papel kraft en las etiquetas para que, al tocarlo, sientas esa conexión con lo hecho a mano.",
        image: defaultImg,
      },
      {
        heading: "El resultado",
        text: "Una marca de moda que no solo vende ropa, sino una cultura. Es limpia, es premium y, sobre todo, tiene alma.",
        image: defaultImg,
      },
    ],
  },
};

const DisenoProject = () => {
  const { slug } = useParams();
  const data = slug ? projects[slug] : null;
  if (!data) return <Navigate to="/diseno" replace />;
  return <ProjectPage {...data} />;
};

export default DisenoProject;
