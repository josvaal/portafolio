import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMui } from "react-icons/si";

// eslint-disable-next-line react/prop-types
const Badge = ({ type }) => {
  return (
    <>
      {type == "tailwind" ? (
        <div className="px-2 py-1 rounded-3xl text-sm font-light flex gap-2 items-center justify-center bg-[#003159]">
          <SiTailwindcss color="#00bcff" />
          Tailwind CSS
        </div>
      ) : type == "react" ? (
        <div className="px-2 py-1 rounded-3xl text-sm font-light flex gap-2 items-center justify-center bg-[#10012a]">
          <FaReact color="#25dbff" />
          React
        </div>
      ) : type == "javascript" ? (
        <div className="px-2 py-1 rounded-3xl text-sm font-light flex gap-2 items-center justify-center bg-[#332f00] ">
          <IoLogoJavascript color="#ffeb00" />
          JavaScript
        </div>
      ) : type == "mui" ? (
        <div className="px-2 py-1 rounded-3xl text-sm font-light flex gap-2 items-center justify-center bg-[#00142e] ">
          <SiMui color="#0071ff" />
          Material UI
        </div>
      ) : null}
    </>
  );
};

export default Badge;
