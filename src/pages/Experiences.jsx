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
        <Experience
          job="Desarrollador Frontend"
          company="Universidad Nacional Amazónica de Madre de Dios"
          company_link="https://www.gob.pe/unamad"
          date="10/2023 - 11/2023"
          descriptions={[
            "Diseñé y desarrollé la página de presentación para el Congreso Nacional de Ciencias de la Computación y Tecnologías en la Amazonía (CONCETTA).",
            "Implementé una interfaz responsive, asegurando la compatibilidad con múltiples dispositivos",
            "Incluí secciones detalladas para la presentación del evento, temario con ponentes y talleres, cronograma y patrocinadores.",
          ]}
        />
      </div>
    </div>
  );
};

export default Experiences;
