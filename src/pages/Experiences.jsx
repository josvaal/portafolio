import Experience from "../components/Experience";

const Experiences = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl pb-4 text-balance">
        Experiencia laboral 💼
      </h1>
      <br />
      <div className="grid grid-cols-1 gap-10">
        <Experience
          job="Desarrollador Frontend"
          company="Aukde"
          company_link="https://aukde.com/"
          date="04/2022 - 05/2023"
          descriptions={[
            "Desarrollé sitios web interactivos con React para el frontend, creando componentes reutilizables.",
            "Diseñé interfaces atractivas usando Tailwind CSS para un estilo moderno y adaptable.",
            "Conecté el frontend con APIs externas para mejorar la funcionalidad e interactividad.",
            "Participé en la planificación de mejoras y en reuniones para coordinar requisitos y funcionalidades.",
          ]}
        />
      </div>
    </div>
  );
};

export default Experiences;
