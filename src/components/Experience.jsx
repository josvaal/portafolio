/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Experience = ({ job, company, company_link, date, descriptions }) => {
  return (
    <div className="grid grid-cols-1 relative md:grid-cols-7 z-50 gap-10">
      <div className="absolute -left-7 top-0 bottom-0 flex flex-col items-center">
        <div className="w-1 bg-red-400 h-full"></div> {/* Línea vertical */}
        <div className="w-4 h-4 bg-white rounded-full absolute -left-1.5 "></div>{" "}
        {/* Punto */}
      </div>
      <div className="md:col-span-3 pb-5">
        <h1 className="text-xl font-bold text-balance text-red-400">{job}</h1>
        <div className="pb-1">
          <a
            className="text-2xl font-bold text-balance hover:opacity-75 transition-all"
            href={company_link}
            target="_blank"
            rel="noreferrer"
          >
            {company}
          </a>
        </div>
        <p className="text-sm">{date}</p>
      </div>
      <div className="md:col-span-4">
        <ul>
          {descriptions.map((description, i) => (
            <li key={i}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
