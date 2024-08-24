/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import Project from "../components/Project";
import data from "../../user-data.json";

const Projects = ({ isEnglish }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="z-50">
      <h1 className="font-bold text-3xl pb-4 text-balance">{"Projects 🚀"}</h1>
      <br />
      <div className="w-full grid place-items-center">
        {loaded ? null : <Loader />}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 z-50">
        {data.projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            badges={project.badges}
            code={project.repository}
            preview={project.preview}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
