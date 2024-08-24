/* eslint-disable react/prop-types */
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
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../user-data.json";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const Home = () => {
  const currentYear = new Date().getFullYear();
  const initialYear = data.initialYear;
  const yearsPassed = currentYear - initialYear;

  return (
    <div className="z-50">
      <h1 className="font-bold text-3xl pb-4 text-balance z-50">
        Hi, i'm {data.name} 👋👨🏻‍💻{" "}
      </h1>
      <p className="text-pretty text-lg z-50">
        +{yearsPassed} years of experience.{" "}
        <span className="font-bold text-red-200">{data.role + " "}</span>
        from {data.country}. {data.description} My motto,{" "}
        <span className="font-bold text-red-200">{data.motto + " "}</span>
        of {data.mottoAuthor}, {data.mottoReflect + ""}
      </p>
      <br />
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 6, // 6 slides visibles en pantallas medianas y más grandes
          },
          0: {
            slidesPerView: 3, // 3 slides visibles en pantallas pequeñas
          },
        }}
        freeMode
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        className="w-ful h-auto bg-black bg-opacity-15 rounded-xl p-10 flex"
      >
        <SwiperSlide>
          <IconTech icon={<TbBrandSvelte />} text="SvelteKit" />
        </SwiperSlide>
        <SwiperSlide>
          <IconTech icon={<FaReact />} text="React" />
        </SwiperSlide>
        <SwiperSlide>
          <IconTech icon={<RiFlutterFill />} text="Flutter" />
        </SwiperSlide>
        <SwiperSlide>
          <IconTech icon={<SiTailwindcss />} text="TailwindCSS" />
        </SwiperSlide>
        <SwiperSlide>
          <IconTech icon={<FaBootstrap />} text="Bootstrap" />
        </SwiperSlide>
        <SwiperSlide>
          <IconTech icon={<FaNodeJs />} text="NodeJS" />
        </SwiperSlide>
        <SwiperSlide>
          <IconTech icon={<SiSpring />} text="Spring" />
        </SwiperSlide>
        <SwiperSlide>
          <IconTech icon={<GrMysql />} text="MySQL" />
        </SwiperSlide>
        <SwiperSlide>
          <IconTech icon={<SiSqlite />} text="SQLite" />
        </SwiperSlide>
        <SwiperSlide>
          <IconTech icon={<SiMongodb />} text="MongoDB" />
        </SwiperSlide>
        <SwiperSlide>
          <IconTech icon={<SiFirebase />} text="Firebase" />
        </SwiperSlide>
        <SwiperSlide>
          <IconTech icon={<FaAws />} text="AWS" />
        </SwiperSlide>
        <SwiperSlide>
          <IconTech icon={<SiArduino />} text="Arduino" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
