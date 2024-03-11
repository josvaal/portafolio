import Button from "../components/Button";
import {
  // FaFreeCodeCamp,
  FaReact,
  // FaUniversity,
  // FaYoutube,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiSvelte } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
// import { TbWorldWww } from "react-icons/tb";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl pb-4 text-balance">
        Hola, soy Josval 👋
      </h1>
      <p className="text-pretty text-lg">
        +3 años de experiencia.{" "}
        <span className="font-bold text-red-200">
          Desarrollador de software y Creador de Contenido sobre Programación
        </span>{" "}
        de Madre de Dios, Perú 🇵🇪. Especializado en aprender y mejorar de manera autodidacta mis aptitudes.
      </p>
      <br />
      <p>Mis principales herramientas:</p>
      <br />
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <Button text="React" icon={<FaReact />} url="https://react.dev/" />
        <Button
          text="SvelteKit"
          icon={<SiSvelte />}
          url="https://kit.svelte.dev/"
        />
        <Button text="Go" icon={<FaGolang />} url="https://go.dev/" />
        <Button text="MySQL" icon={<GrMysql />} url="https://www.mysql.com/" />
      </div>
      {/* <br />
      <p>Mis estudios:</p>
      <br />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Button
          text="UNAMAD"
          icon={<FaUniversity />}
          url="https://portal.unamad.edu.pe/"
        />
        <Button
          text="FreeCodeCamp"
          icon={<FaFreeCodeCamp />}
          url="https://www.freecodecamp.org/"
        />
        <Button
          text="Open Bootcamp"
          icon={<TbWorldWww />}
          url="https://open-bootcamp.com/"
        />
        <Button text="Cursos de Youtube" icon={<FaYoutube />} />
      </div> */}
    </div>
  );
};

export default Home;
