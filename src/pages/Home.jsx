import { IoLogoCss3, IoLogoFirebase, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import {
  FaLinux,
  FaReact,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiPostman, SiSvelte, SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import IconTech from "../components/IconTech";
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
      <div className="grid gap-4 grid-cols-6 md:grid-cols-12">
        <IconTech icon={<FaReact />} text="React" />
        <IconTech icon={<SiSvelte />} text="SvelteKit" />
        <IconTech icon={<IoLogoNodejs />} text="NodeJS" />
        <IconTech icon={<IoLogoJavascript />} text="JavaScript" />
        <IconTech icon={<FaGolang />} text="Go" />
        <IconTech icon={<IoLogoFirebase />} text="Firebase" />
        <IconTech icon={<GrMysql />} text="MySQL" />
        <IconTech icon={<IoLogoHtml5 />} text="HTML" />
        <IconTech icon={<IoLogoCss3 />} text="CSS" />
        <IconTech icon={<SiTailwindcss />} text="TailwindCSS" />
        <IconTech icon={<FaLinux />} text="Linux" />
        <IconTech icon={<SiPostman />} text="Postman" />
        {/* <Button text="MySQL" icon={<GrMysql />} url="https://www.mysql.com/" /> */}
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
