import Button from "../components/Button";
import {
  FaFreeCodeCamp,
  FaReact,
  FaUniversity,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl pb-4 text-balance">
        Hola, soy Josval 👋
      </h1>
      <p>
        Apasionado desarrollador autodidacta con una fascinación temprana por la
        tecnología. Especializado en soluciones integrales y creativas. Fuerte
        dedicación a la excelencia en desarrollo web. Constante aprendiz y
        apasionado por desafíos tecnológicos.
      </p>
      <br />
      <p>Mis principales herramientas:</p>
      <br />
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <Button text="React" icon={<FaReact />} url="https://react.dev/" />
        <Button
          text="JavaScript"
          icon={<IoLogoJavascript />}
          url="https://developer.mozilla.org/es/docs/Web/JavaScript/"
        />
        <Button
          text="Firebase"
          icon={<IoLogoFirebase />}
          url="https://firebase.google.com/?hl=es"
        />
        <Button text="Git" icon={<FaGitAlt />} url="https://git-scm.com/" />
      </div>
      <br />
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
      </div>
    </div>
  );
};

export default Home;
