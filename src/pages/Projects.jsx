import { useEffect } from "react";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Loader from "../components/Loader";
import axios from "axios";
import Markdown2HTML from "react-markdown-to-html";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    async function getRepos() {
      const { data } = await axios.get(
        "https://gist.githubusercontent.com/heyy-josval/4868eb7a8a80a27f6b95295fb60e177b/raw/39a5c24b012ed76134aeb332d6aa33766e0954f8/projects.json"
      );
      console.log(data);
      setProjects(data);
    }
    getRepos();
    setLoaded(true);
  }, []);

  return (
    <div>
      <h1 className="font-bold text-xl pb-4">Proyectos destacables 💻</h1>
      <br />
      <div className="w-full grid place-items-center">
        {loaded ? null : <Loader />}
      </div>
      <div className="grid grid-cols-1 gap-5">
        {loaded
          ? projects.map((repo, i) => (
              <ProjectCard
                key={i}
                title={repo.name}
                description={repo.description}
                img={repo.image}
              />
            ))
          : null}
      </div>
      <div>
        <Markdown2HTML src="README.md" />
      </div>
    </div>
  );
};

export default Projects;
