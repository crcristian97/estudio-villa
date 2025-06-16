import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Especialización en Sucesiones",
    description:
      "Contamos con amplia experiencia en procesos sucesorios, brindando asesoramiento claro y acompañamiento en cada etapa.",
    icon: <CheckCircle className="text-white w-7 h-7" />,
  },
  {
    title: "Atención Personalizada",
    description:
      "Cada caso es único. Escuchamos tus necesidades y diseñamos estrategias legales a medida.",
    icon: <CheckCircle className="text-white w-7 h-7" />,
  },
  {
    title: "Transparencia y Confianza",
    description:
      "Priorizamos la comunicación clara y la honestidad en todo momento, para que tomes decisiones informadas.",
    icon: <CheckCircle className="text-white w-7 h-7" />,
  },
  {
    title: "Resolución Ágil",
    description:
      "Buscamos soluciones eficientes para que tu proceso avance sin demoras innecesarias.",
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
