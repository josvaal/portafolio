import { useEffect } from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import Project from "../components/Project";

const Projects = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="z-50">
      <h1 className="font-bold text-3xl pb-4 text-balance">
        Proyectos destacables 💻
      </h1>
      <br />
      <div className="w-full grid place-items-center">
        {loaded ? null : <Loader />}
      </div>
      <div className="grid grid-cols-1 gap-16 md:gap-10 z-50">
        <Project
          title="Sistema De Gestión Académica IoT"
          img="https://raw.githubusercontent.com/josvaal/iot-academic-management/main/assets/preview.png"
          description="El Sistema de Gestión de Espacios Académicos optimiza la administración de espacios universitarios con monitorización en tiempo real, control de acceso y programación de horarios"
          badges={["arduino", "flutter", "firebase"]}
          code="https://github.com/josvaal/iot-academic-management.git"
        />
        <Project
          title="Traductor de Idiomas"
          img="https://raw.githubusercontent.com/josvaal/js-translator/main/assets/preview.png"
          description="La herramienta de traducción de idiomas permite convertir texto entre diferentes idiomas de manera eficiente y versátil."
          badges={["javascript", "jquery", "apis"]}
          code="https://github.com/josvaal/js-translator.git"
          preview="https://josvaal.github.io/js-translator/"
        />
        <Project
          title="Generador De Colores"
          img="https://raw.githubusercontent.com/josvaal/color-extractor/main/images/screenshot.png"
          description="La herramienta permite cargar imágenes y extraer automáticamente una paleta de colores, facilitando la inspiración cromática y el diseño creativo a través de una interfaz intuitiva."
          badges={["react", "tailwind"]}
          code="https://github.com/josvaal/color-extractor"
          preview="https://color-extractor-one.vercel.app/"
        />
        <Project
          title="MarkDown a HTML"
          img="https://raw.githubusercontent.com/josvaal/markdown-a-html/master/public/preview1.png"
          description="La herramienta convierte documentos Markdown a HTML de manera fácil y rápida, proporcionando una interfaz simple para una conversión sin complicaciones y mejorando la visualización en plataformas web."
          badges={["react", "mui"]}
          code="https://github.com/josvaal/markdown-a-html.git"
          preview="https://mdtohtml-bice.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
