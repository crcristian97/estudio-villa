
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Solución de conflictos societarios",
    description:
      "Intervenimos en disputas entre socios, bloqueos societarios, diferencias en la gestión y conflictos de intereses, priorizando la viabilidad y estabilidad de la empresa.",
  },
  {
    title: "Empresas familiares y sucesión",
    description:
      "Diseñamos protocolos familiares, pactos de socios y estrategias sucesorias para facilitar la transición generacional y evitar litigios futuros.",
  },
  {
    title: "Mediación y negociación",
    description:
      "Amplia experiencia en procesos de mediación y negociación, logrando acuerdos duraderos y evitando la judicialización innecesaria.",
  },
  {
    title: "Prevención y planificación",
    description:
      "Asesoramiento integral en la redacción de estatutos, acuerdos de accionistas y estructuras societarias adaptadas a la realidad de cada empresa.",
  },
];


export const LegalServicesSection = () => (
  <section className="w-full py-20 bg-white">
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Imagen destacada a la izquierda en desktop, arriba en mobile */}
      <div className="order-1 lg:order-none flex items-center justify-center">
        <div className="w-full max-w-2xl h-[380px] md:h-[520px] bg-[#F0EBD8] rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden relative">
          <Image
            src="https://res.cloudinary.com/dgzi8i2ji/image/upload/derecho-societario-familiar.webp"
            alt="Derecho societario y familiar para empresas en buenos aires"
            fill
            title="Derecho societario y familiar para empresas en buenos aires"
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
            quality={90}
            loading="lazy"
          />
        </div>
      </div>
      {/* Contenido textual */}
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3E5C76] mb-2 leading-tight">
          Derecho societario y familiar para empresas
        </h2>
        <p className="text-[#3E5C76] text-lg md:text-xl mb-2">
          Soluciones estratégicas y preventivas para empresas familiares y sociedades. Prevenimos y resolvemos conflictos societarios, familiares y sucesorios, asegurando la continuidad y el crecimiento empresarial.
        </p>
        <ul className="space-y-4 mb-4">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="text-[#B49B5A] min-w-[1.5em] min-h-[1.5em]" size={24} />
              <div>
                <span className="font-semibold text-[#3E5C76]">{item.title}:</span>{" "}
                <span className="text-[#3E5C76]">{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-6">
          <div>
            <h3 className="font-semibold text-[#3E5C76] mb-1">Enfoque interdisciplinario</h3>
            <p className="text-[#3E5C76] text-sm">
              Trabajamos junto a contadores, mediadores y especialistas en empresas familiares para brindar soluciones integrales y personalizadas.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#3E5C76] mb-1">Confidencialidad y compromiso</h3>
            <p className="text-[#3E5C76] text-sm">
              Garantizamos absoluta reserva y acompañamiento cercano en cada etapa del proceso.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);