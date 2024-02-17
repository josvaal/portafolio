import { FaBriefcase, FaCode, FaHome } from "react-icons/fa";
import { Link, useLocation } from "wouter";

const Navbar = () => {
  const [location] = useLocation();

  return (
    <div className="pb-16">
      <ul className="flex  gap-4 md:gap-6 text-sm md:text-base">
        <li>
          <Link
            href="/"
            className={`duration-300 flex gap-2 items-center justify-center ${
              location == "/"
                ? "opacity-100 font-bold text-red-400"
                : "opacity-50 hover:text-red-400"
            }`}
          >
            <FaHome />
            <p>inicio</p>
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`duration-300 flex gap-2 items-center justify-center ${
              location == "/projects"
                ? "opacity-100 font-bold text-red-400"
                : "opacity-50 hover:text-red-400"
            }`}
          >
            <FaCode />
            <p>proyectos</p>
          </Link>
        </li>
        <li>
          <Link
            href="/experience"
            className={`duration-300 flex gap-2 items-center justify-center ${
              location == "/experience"
                ? "opacity-100 font-bold text-red-400"
                : "opacity-50 hover:text-red-400"
            }`}
          >
            <FaBriefcase />
            <p>experiencia</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
