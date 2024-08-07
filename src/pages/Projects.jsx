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
    <div>
      <h1 className="font-bold text-3xl pb-4 text-balance">
        Proyectos destacables 💻
      </h1>
      <br />
      <div className="w-full grid place-items-center">
        {loaded ? null : <Loader />}
      </div>
      <div className="grid grid-cols-1 gap-16 md:gap-10">
        <Project
          title="Traductor de idiomas"
          img="https://camo.githubusercontent.com/321ef441c3ffdc635279b951384e7c3de970051b9525f2a278c0c095c0bc140f/68747470733a2f2f692e696d6775722e636f6d2f69796958356c422e6a7067"
          description="Traductor de Idiomas en JavaScript con jQuery y API: Traduce texto fácilmente entre idiomas mediante una interfaz eficiente."
          badges={["javascript"]}
          code="https://github.com/josvaal/js-translator"
          preview="https://josvaal.github/js-translator/"
        />
        <Project
          title="Color extractor"
          img="https://raw.githubusercontent.com/josvaal/color-extractor/main/images/screenshot.png"
          description="Extractor de Colores en ReactJS: Sube imágenes, obtén una paleta de colores automáticamente. Interfaz intuitiva para explorar y utilizar en proyectos creativos."
          badges={["react", "tailwind"]}
          code="https://github.com/josvaal/color-extractor"
          preview="https://color-extractor-one.vercel.app/"
        />
        <Project
          title="MarkDown a HTML"
          img="https://raw.githubusercontent.com/josvaal/markdown-a-html/master/public/preview1.png"
          description="Convertidor de Markdown a HTML en React y Material-UI: Interfaz simple para transformar fácilmente documentos Markdown a HTML."
          badges={["react", "mui"]}
          code="https://github.com/josvaal/markdown-a-html"
          preview="https://mdtohtml-bice.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
