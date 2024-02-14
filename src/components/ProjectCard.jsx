// eslint-disable-next-line react/prop-types, no-unused-vars
const ProjectCard = ({ img, title, description, languages }) => {
  return (
    <div className="bg-black bg-opacity-20 backdrop-blur-lg rounded-xl drop-shadow-lg p-7">
      <h1 className="text-xl text-center">{title}</h1>
      <br />
      <div>
        <img
          src={img}
          className="object-cover h-44 md:h-72 w-full rounded-xl"
        />
      </div>
      <br />
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
