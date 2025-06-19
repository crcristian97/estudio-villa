import { Building2, Scale, Gavel, Users, Briefcase, Handshake } from "lucide-react";
import { motion } from "framer-motion";

export const ServicesGrid = () => {
  const services = [
    {
      icon: (cls) => <Building2 className={cls} />,
      title: "Derecho societario y familiar",
      description: "Solución de conflictos societarios, incluso en contextos familiares o sucesorios. Experiencia en mediaciones y negociaciones complejas."
    },
    {
      icon: (cls) => <Scale className={cls} />,
      title: "Sucesiones con participación societaria",
      description: "Abordaje de sucesiones con empresas involucradas: co-herederos, socios y familiares, todo en un mismo proceso."
    },
    {
      icon: (cls) => <Briefcase className={cls} />,
      title: "Conflictos civiles y comerciales",
      description: "Reclamos por incumplimientos, contratos en crisis, daños y perjuicios, y administración de conflictos patrimoniales."
    },
    {
      icon: (cls) => <Gavel className={cls} />,
      title: "Derecho penal y penal tributario",
      description: "Defensa integral y representación de víctimas. Análisis de riesgos penales, estrategias de defensa y resolución de casos complejos."
    },
    {
      icon: (cls) => <Handshake className={cls} />,
      title: "Mediaciones y soluciones alternativas",
      description: "Buscamos evitar el conflicto judicial cuando es posible, priorizando resoluciones efectivas, rápidas y sostenibles."
    }
  ];

  // Framer Motion variants for slow fade-in and slight up effect
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        duration: 1.2,
        type: "spring",
        stiffness: 60,
        damping: 18
      }
    })
  };

  return (
    <div className="w-full bg-white mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full divide-y sm:divide-y-0 sm:divide-x divide-[#E0E0E0]">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group flex flex-col items-start px-6 py-8 min-h-[220px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white cursor-pointer"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 