import { SiArduino, SiFirebase, SiJquery, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMui } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const Badge = ({ type }) => {
  return (
    <>
      {type == "tailwind" ? (
        <div className="px-2 py-1 rounded-3xl text-sm font-light flex gap-2 items-center justify-center bg-[#003159]">
          <SiTailwindcss color="#00bcff" />
          <p>Tailwind CSS</p>
        </div>
      ) : type == "react" ? (
        <div className="px-2 py-1 rounded-3xl text-sm font-light flex gap-2 items-center justify-center bg-[#10012a]">
          <FaReact color="#25dbff" />
          <p>React</p>
        </div>
      ) : type == "arduino" ? (
        <div className="px-2 py-1 rounded-3xl text-sm font-light flex gap-2 items-center justify-center bg-[#020f24]">
          <SiArduino color="rgb(0, 130, 132)" />
          <p>Arduino</p>
        </div>
      ) : type == "flutter" ? (
        <div className="px-2 py-1 rounded-3xl text-sm font-light flex gap-2 items-center justify-center bg-[#2b0c59]">
          <RiFlutterFill color="rgb(69, 209, 252)" />
          <p>Flutter</p>
        </div>
      ) : type == "firebase" ? (
        <div className="px-2 py-1 rounded-3xl text-sm font-light flex gap-2 items-center justify-center bg-[#614200]">
          <SiFirebase color="#ffff00" />
          <p>Firebase</p>
        </div>
      ) : type == "javascript" ? (
        <div className="px-2 py-1 rounded-3xl text-sm font-light flex gap-2 items-center justify-center bg-[#332f00] ">
          <IoLogoJavascript color="#ffeb00" />
          <p>JavaScript</p>
        </div>
      ) : type == "jquery" ? (
        <div className="px-2 py-1 rounded-3xl text-sm font-light flex gap-2 items-center justify-center bg-[#020a35] ">
          <SiJquery color="rgb(6, 105, 173)" />
          <p>JQuery</p>
        </div>
      ) : type == "apis" ? (
        <div className="px-2 py-1 rounded-3xl text-sm font-light flex gap-2 items-center justify-center bg-[#2e0604] ">
          <TbApi color="rgb(38, 38, 38)" />
          <p>APIs</p>
        </div>
      ) : type == "mui" ? (
        <div className="px-2 py-1 rounded-3xl text-sm font-light flex gap-2 items-center justify-center bg-[#00142e] ">
          <SiMui color="#0071ff" />
          <p>Material UI</p>
        </div>
      ) : null}
    </>
  );
};

export default Badge;
