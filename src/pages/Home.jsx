/* eslint-disable react/no-unescaped-entities */
import { FaReact } from "react-icons/fa";
import {
  FaAws,
  FaBootstrap,
  FaGolang,
  FaJava,
  FaNodeJs,
} from "react-icons/fa6";
import {
  SiArduino,
  SiDart,
  SiFirebase,
  SiMongodb,
  SiSpring,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import IconTech from "../components/IconTech";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { TbBrandCpp, TbBrandSvelte, TbSql } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
// import { TbWorldWww } from "react-icons/tb";

const Home = () => {
  return (
    <div className="z-50">
      <h1 className="font-bold text-3xl pb-4 text-balance z-50">
        Hola, soy josval 👋👨🏻‍💻
      </h1>
      <p className="text-pretty text-lg z-50">
        +2 años de experiencia.{" "}
        <span className="font-bold text-red-200">
          Desarrollador Full Stack{" "}
        </span>
        de Madre de Dios, Perú 🇵🇪. Apasionado por la tecnología y el Open
        Source. Me enfoco en crear soluciones eficientes y prácticas, con un
        interés particular en optimizar procesos y mejorar la experiencia del
        usuario. Mi lema,{" "}
        <span className="font-bold text-red-200">
          "Talk is cheap. Show me the code"{" "}
        </span>
        de Linus Torvalds, refleja mi dedicación a la calidad del código y a
        resultados tangibles
      </p>
      <br />
      <div className="grid gap-4 grid-cols-6 md:grid-cols-12">
        <IconTech icon={<BiLogoJavascript />} text="JavaScript" />
        <IconTech icon={<BiLogoTypescript />} text="TypeScript" />
        <IconTech icon={<FaJava />} text="Java" />
        <IconTech icon={<SiDart />} text="Dart" />
        <IconTech icon={<FaGolang />} text="Go" />
        <IconTech icon={<TbBrandCpp />} text="C++" />
        <IconTech icon={<TbSql />} text="SQL" />
        <IconTech icon={<TbBrandSvelte />} text="SvelteKit" />
        <IconTech icon={<FaReact />} text="React" />
        <IconTech icon={<RiFlutterFill />} text="Flutter" />
        <IconTech icon={<SiTailwindcss />} text="TailwindCSS" />
        <IconTech icon={<FaBootstrap />} text="Bootstrap" />
        <IconTech icon={<FaNodeJs />} text="NodeJS" />
        <IconTech icon={<SiSpring />} text="Spring" />
        <IconTech icon={<GrMysql />} text="MySQL" />
        <IconTech icon={<SiSqlite />} text="SQLite" />
        <IconTech icon={<SiMongodb />} text="MongoDB" />
        <IconTech icon={<SiFirebase />} text="Firebase" />
        <IconTech icon={<FaAws />} text="AWS" />
        <IconTech icon={<SiArduino />} text="Arduino" />
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
