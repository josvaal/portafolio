/* eslint-disable react/prop-types */
import Experience from "../components/Experience";
import data from "../../user-data.json";

const Experiences = ({ isEnglish }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl pb-4 text-balance">Experience 💼</h1>
      <br />
      <div className="relative pl-8">
        <div className="absolute left-1 top-0 bottom-0 w-1 bg-red-400"></div>
        <div className="grid grid-cols-1 gap-10">
          {data.experience.map((experience, index) => (
            <Experience
              key={index}
              job={experience.role}
              company={experience.company}
              company_link={experience.company_link}
              date={experience.date}
              descriptions={experience.descriptions}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
