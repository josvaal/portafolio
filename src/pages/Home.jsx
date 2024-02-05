import Button from "../components/Button"
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-xl pb-4">Hola, soy josval 👋</h1>
      <p>Apasionado desarrollador autodidacta con una fascinación temprana por la tecnología. Especializado en soluciones integrales y creativas. Fuerte dedicación a la excelencia en desarrollo web. Constante aprendiz y apasionado por desafíos tecnológicos.</p>
      <br />
      <p>Mis principales herramientas:</p>
      <br />
      <div className="flex gap-4">
        <Button text="React" icon={<FaReact />} />
        <Button text="Firebase" icon={<IoLogoFirebase />} />
        <Button text="Supabase" icon={<RiSupabaseFill />} />
        <Button text="Node.js" icon={<FaNodeJs />} />
        <Button text="Git" icon={<FaGitAlt />} />
      </div>
    </div>
  )
}

export default Home