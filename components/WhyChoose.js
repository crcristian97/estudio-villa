import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Más que abogados, facilitadores de acuerdos",
    description:
      "Acompañamos a nuestros clientes en la construcción de soluciones consensuadas, priorizando el diálogo y la prevención de conflictos.",
    icon: <CheckCircle className="text-white w-7 h-7" />,
  },
  {
    title: "Experiencia en familias empresarias y conflictos societarios",
    description:
      "Amplia trayectoria asesorando a familias empresarias y resolviendo disputas societarias con visión estratégica.",
    icon: <CheckCircle className="text-white w-7 h-7" />,
  },
  {
    title: "Soluciones jurídicas con enfoque humano",
    description:
      "Entendemos la importancia de los vínculos y diseñamos estrategias legales que cuidan tanto lo patrimonial como lo personal.",
    icon: <CheckCircle className="text-white w-7 h-7" />,
  },
  {
    title: "Confidencialidad, transparencia y seguimiento activo",
    description:
      "Garantizamos absoluta reserva, comunicación clara y acompañamiento permanente en cada etapa del proceso.",
    icon: <CheckCircle className="text-white w-7 h-7" />,
  },
  {
    title: "Resultados sostenibles que cuidan vínculos y patrimonio",
    description:
      "Buscamos soluciones duraderas que protejan tus relaciones y tu legado familiar o empresarial.",
    icon: <CheckCircle className="text-white w-7 h-7" />,
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Left column: Text */}
          <div className="h-full flex">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1D2D44] mb-4 tracking-tight">
                ¿Por qué elegir Estudio Villa?
              </h2>
              <p className="text-lg text-[#3E5C76] font-medium mb-2">
                El respaldo en el que podés confiar
              </p>
            </div>
          </div>
          {/* Right column: Features */}
          <div>
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-[#3E5C76] rounded-xl shadow-md p-6 hover:bg-[#1D2D44] transition-shadow transition-colors"
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
