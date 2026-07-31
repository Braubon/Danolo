import { useParams, Navigate } from "react-router-dom";
import { ProjectPage } from "@/components/ProjectPage";
import dewImg from "@/assets/service-design.jpg";

const projects: Record<string, React.ComponentProps<typeof ProjectPage>> = {
  dew: {
    category: "Diseño Gráfico",
    categoryPath: "/diseno",
    title: "DEW",
    tagline: "Una botella para cada uno de nosotros.",
    cover: dewImg,
    sections: [
      {
        heading: "La idea",
        text: "Queríamos que llevar una botella ecológica no fuera aburrido. El reto era que Dew fuera tan variada como la gente que la usa.",
        image: dewImg,
        imageAlt: "Botella DEW con packaging kraft",
      },
      {
        heading: "Cómo lo hicimos",
        text: "Creamos una identidad viva. Tan pronto ves una botella con acabados de fibra de carbono para ir a la oficina, como otra llena de dibujos divertidos hechos a mano para el finde.",
        image: dewImg,
      },
      {
        heading: "El resultado",
        text: "Un diseño que no solo reduce el plástico, sino que te apetece llevar encima porque encaja con tu estilo, sea cual sea.",
        image: dewImg,
      },
    ],
  },
  diceup: {
    category: "Diseño Gráfico",
    categoryPath: "/diseno",
    title: "DiceUp",
    tagline: "La suerte está echada.",
    cover: dewImg,
    sections: [
      {
        heading: "La idea",
        text: "¿Cómo diseñas algo que cambia todo el tiempo como el azar? En DiceUp, la marca tenía que ser tan emocionante como una partida de rol.",
        image: dewImg,
      },
      {
        heading: "Cómo lo hicimos",
        text: "Nos quedamos con el blanco y el negro para poner un poco de orden, y a partir de ahí, ¡a jugar! Usamos las letras para crear carteles que parecen cobrar vida y dados que te dicen qué descuento te ha tocado.",
        image: dewImg,
      },
      {
        heading: "El resultado",
        text: "Una tienda donde cada cartel y cada entrada cuenta una historia diferente, haciendo que ir a comprar sea parte del juego.",
        image: dewImg,
      },
    ],
  },
  oshun: {
    category: "Diseño Gráfico",
    categoryPath: "/diseno",
    title: "Oshun",
    tagline: "Diseño que cuenta historias.",
    cover: dewImg,
    sections: [
      {
        heading: "La idea",
        text: "Ropa que habla de sus orígenes. Oshun necesitaba un lenguaje que se sintiera artesanal, étnico y muy elegante a la vez.",
        image: dewImg,
      },
      {
        heading: "Cómo lo hicimos",
        text: "Nos inspiramos en patrones tribales para crear un diseño que se siente natural. Usamos materiales como el papel kraft en las etiquetas para que, al tocarlo, sientas esa conexión con lo hecho a mano.",
        image: dewImg,
      },
      {
        heading: "El resultado",
        text: "Una marca de moda que no solo vende ropa, sino una cultura. Es limpia, es premium y, sobre todo, tiene alma.",
        image: dewImg,
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
