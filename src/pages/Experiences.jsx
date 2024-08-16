/* eslint-disable react/prop-types */
import Experience from "../components/Experience";

const Experiences = ({ isEnglish }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl pb-4 text-balance">
        {isEnglish ? "Work experience 💼" : "Experiencia laboral 💼"}
      </h1>
      <br />
      <div className="grid grid-cols-1 gap-10">
        <Experience
          job={isEnglish ? "Frontend Developer" : "Desarrollador Frontend"}
          company="Aukde"
          company_link="https://aukde.com/"
          date="04/2022 - 05/2023"
          descriptions={
            isEnglish
              ? [
                  "I developed interactive websites with React for the frontend, creating reusable components.",
                  "I designed attractive interfaces using Tailwind CSS for modern, adaptive styling.",
                  "I connected the frontend with external APIs to improve functionality and interactivity.",
                  "I participated in enhancement planning and meetings to coordinate requirements and functionalities.",
                ]
              : [
                  "Desarrollé sitios web interactivos con React para el frontend, creando componentes reutilizables.",
                  "Diseñé interfaces atractivas usando Tailwind CSS para un estilo moderno y adaptable.",
                  "Conecté el frontend con APIs externas para mejorar la funcionalidad e interactividad.",
                  "Participé en la planificación de mejoras y en reuniones para coordinar requisitos y funcionalidades.",
                ]
          }
        />
        <Experience
          job={isEnglish ? "Frontend Developer" : "Desarrollador Frontend"}
          company={
            isEnglish
              ? "National Amazonian University of Madre de Dios."
              : "Universidad Nacional Amazónica de Madre de Dios."
          }
          company_link="https://www.gob.pe/unamad"
          date="10/2023 - 11/2023"
          descriptions={
            isEnglish
              ? [
                  "I designed and developed the presentation page for the National Congress of Computer Science and Technologies in the Amazon (CONCETTA).",
                  "I implemented a responsive interface, ensuring compatibility with multiple devices",
                  "I included detailed sections for the presentation of the event, agenda with speakers and workshops, timeline and sponsors.",
                ]
              : [
                  "Diseñé y desarrollé la página de presentación para el Congreso Nacional de Ciencias de la Computación y Tecnologías en la Amazonía (CONCETTA).",
                  "Implementé una interfaz responsive, asegurando la compatibilidad con múltiples dispositivos",
                  "Incluí secciones detalladas para la presentación del evento, temario con ponentes y talleres, cronograma y patrocinadores.",
                ]
          }
        />
      </div>
    </div>
  );
};

export default Experiences;
