import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Toaster, toast } from "sonner";

function Footer() {
  return (
    <div>
      <Toaster richColors />
      <div className="flex gap-4 justify-center mt-10">
        <a
          href="mailto:josvalmtrz@gmail.com"
          className="hover:text-red-400 transition-all"
        >
          <IoMdMail size={30} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCM-COMfvjuqxmQaoAlRtXNA"
          className="hover:text-red-400 transition-all"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/josval/"
          className="hover:text-red-400 transition-all"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/heyy-josval/"
          className="hover:text-red-400 transition-all"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <div
        className="flex justify-center text-sm mt-2 opacity-50 hover:text-red-400 transition-all hover:cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText("josvalmtrz@gmail.com");
          toast.success("Correo copiado!");
        }}
      >
        josvalmtrz@gmail.com
      </div>
      <div className="flex justify-between opacity-20 mt-10">
        <p>
          © {new Date().getFullYear()} Josval. Casi todos los derechos
          reservados
        </p>
        <div className="flex gap-5">
          {/* <a
            className="hover:underline"
            href="https://josval.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Sobre mí
          </a> */}
          <a className="hover:underline" href="mailto:josvalmtrz@gmail.com">
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
