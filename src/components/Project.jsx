import Badge from "./Badge";
import Button from "./Button";
import { FaGithub, FaLink } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Project = ({ title, img, badges, description, code, preview }) => {
  return (
    <div className="gap-5 z-50 bg-black bg-opacity-15 rounded-xl p-10">
      <div>
        <h1 className="text-xl font-bold pb-2">{title}</h1>
        <div className=" pb-2 gap-2 grid grid-cols-2 md:grid-cols-3">
          {/* eslint-disable-next-line react/prop-types */}
          {badges.map((badge, i) => (
            <Badge key={i} type={badge} />
          ))}
        </div>
        <p className="pb-4">{description}</p>
        <div className="flex gap-4">
          {code ? <Button icon={<FaGithub />} text="Repo" url={code} /> : null}
          {preview ? (
            <Button icon={<FaLink />} text="Preview" url={preview} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Project;
