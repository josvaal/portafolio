import Badge from "./Badge";
import Button from "./Button";
import { FaGithub, FaLink } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Project = ({ title, img, badges, description, code, preview }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex items-center">
        <img
          src={img}
          alt=""
          className="min-h-56 max-h-56 w-full object-cover rounded-xl"
        />
      </div>
      <div>
        <h1 className="text-xl font-bold pb-2">{title}</h1>
        <div className="flex pb-2 gap-2">
          {/* eslint-disable-next-line react/prop-types */}
          {badges.map((badge, i) => (
            <Badge key={i} type={badge} />
          ))}
        </div>
        <p className="pb-4">{description}</p>
        <div className="flex gap-4">
          {code ? <Button icon={<FaGithub />} text="Code" url={code} /> : null}
          {preview ? (
            <Button icon={<FaLink />} text="Preview" url={preview} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Project;
