import { Building2, Scale, Gavel, Users, Briefcase, Handshake } from "lucide-react";

export const ServicesGrid = () => {
  const services = [
    {
      icon: (cls) => <Building2 className={cls} />,
      title: "Derecho Societario y Familiar",
      description: "Solución de conflictos societarios, incluso en contextos familiares o sucesorios. Experiencia en mediaciones y negociaciones complejas."
    },
    {
      icon: (cls) => <Scale className={cls} />,
      title: "Sucesiones con participación societaria",
      description: "Abordaje de sucesiones con empresas involucradas: co-herederos, socios y familiares, todo en un mismo proceso."
    },
    {
      icon: (cls) => <Briefcase className={cls} />,
      title: "Conflictos Civiles y Comerciales",
      description: "Reclamos por incumplimientos, contratos en crisis, daños y perjuicios, y administración de conflictos patrimoniales."
    },
    {
      icon: (cls) => <Gavel className={cls} />,
      title: "Derecho Penal y Penal Tributario",
      description: "Defensa integral y representación de víctimas. Análisis de riesgos penales, estrategias de defensa y resolución de casos complejos."
    },
    {
      icon: (cls) => <Handshake className={cls} />,
      title: "Mediaciones y Soluciones Alternativas",
      description: "Buscamos evitar el conflicto judicial cuando es posible, priorizando resoluciones efectivas, rápidas y sostenibles."
    }
  ];

  return (
    <div className="w-full bg-white mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full divide-y sm:divide-y-0 sm:divide-x divide-[#E0E0E0]">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col items-start px-6 py-8 min-h-[220px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white cursor-pointer"
          >
            <div className="mb-4">
              {service.icon("w-8 h-8 text-[#F0EBD8] transition-colors duration-300 group-hover:text-[#3E5C76]")}
            </div>
            <h3 className="text-lg font-semibold text-[#1D2D44] mb-2 text-left">
              {service.title}
            </h3>
            <p className="text-sm text-[#3E5C76] leading-relaxed text-left">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}; 