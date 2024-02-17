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
          job="Desarrollador Full Stack"
          company="Aukde"
          company_link="https://aukde.com/"
          date="04/2022 - 05/2023"
          description="He desarrollado sitios y sistemas web interactivos con React en el frontend y
          backend eficiente con NodeJS, asegurando escalabilidad. He creado
          interfaces atractivas con Tailwind CSS, integré APIs externas y
          participé en reuniones para planificar mejoras en proyectos."
        />
        <Experience
          job="Desarrollador Frontend"
          company="Freelancer"
          company_link="https://www.freelancer.es/"
          date="2020 - 2022"
          description="He trabajado como freelancer, destacándome en el desarrollo de páginas web, creación de mockups y resolución de problemas. Mi enfoque se centró en proporcionar soluciones creativas y funcionales, demostrando versatilidad en diseño y desarrollo web."
        />
      </div>
    </div>
  );
};

export default Experiences;
