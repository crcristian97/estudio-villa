"use client"
import { PhoneCall } from "lucide-react";
import { useState } from "react";

const faqQuestions = [
  {
    question: "¿Qué es una sucesión y cuándo es necesaria?",
    answer:
      "La sucesión es el proceso legal mediante el cual se transmiten los bienes, derechos y obligaciones de una persona fallecida a sus herederos. Es necesaria cuando una persona fallece y deja bienes a su nombre.",
  },
  {
    question: "¿Cuánto tiempo dura un proceso sucesorio?",
    answer:
      "La duración varía según la complejidad del caso, la cantidad de herederos y bienes, y si existe acuerdo entre las partes. En general, puede demorar entre 6 meses y 2 años.",
  },
  {
    question: "¿Qué documentación necesito para iniciar una sucesión?",
    answer:
      "Generalmente se requiere el acta de defunción, partidas de nacimiento y matrimonio de los herederos, DNI, títulos de propiedad y documentación de los bienes a heredar.",
  },
  {
    question: "¿Puedo vender una propiedad antes de finalizar la sucesión?",
    answer:
      "No, hasta que la sucesión no esté inscripta y los bienes adjudicados a los herederos, no es posible vender legalmente una propiedad heredada.",
  },
  {
    question: "¿Qué pasa si hay desacuerdo entre los herederos?",
    answer:
      "Si no hay acuerdo, el proceso puede judicializarse y demorar más tiempo. Un abogado puede mediar para intentar llegar a una solución consensuada.",
  },
  {
    question: "¿Cuáles son los costos de una sucesión?",
    answer:
      "Los costos incluyen honorarios profesionales, tasas judiciales y gastos administrativos. El monto depende del valor de los bienes y la complejidad del trámite.",
  },
  {
    question: "¿Puedo iniciar la sucesión si vivo en otra provincia o en el exterior?",
    answer:
      "Sí, es posible iniciar y tramitar la sucesión a distancia, otorgando un poder a un abogado de confianza en la jurisdicción correspondiente.",
  },
  {
    question: "¿Por qué es importante contar con asesoramiento legal en una sucesión?",
    answer:
      "Un abogado especializado garantiza que el proceso se realice correctamente, evitando errores, demoras y conflictos entre herederos.",
  },
];

// Simple Accordion component
function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="divide-y divide-gray-200 border rounded-lg w-full bg-white">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none hover:bg-[#F0EBD8] transition text-[#1D2D44]"
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-content-${idx}`}
          >
            <span className="font-medium text-[#1D2D44]">{item.question}</span>
            <span className="ml-4 text-[#3E5C76]">
              {openIndex === idx ? (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#3E5C76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6-6-6 6"/></svg>
              ) : (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#3E5C76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6"/></svg>
              )}
            </span>
          </button>
          <div
            id={`faq-content-${idx}`}
            className={`px-6 pb-4 text-[#3E5C76] transition-all duration-300 ease-in-out ${
              openIndex === idx ? "block" : "hidden"
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

export const FAQ2 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular text-[#1D2D44]">
              Preguntas frecuentes sobre sucesiones
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-[#3E5C76] max-w-xl text-center">
              Respondemos las dudas más comunes sobre procesos sucesorios en Argentina. Si tenés otra consulta, no dudes en contactarnos.
            </p>
          </div>
          <div>
            <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F0EBD8] text-[#3E5C76] hover:bg-[#3E5C76] hover:text-white transition-colors font-semibold">
              ¿Tenés preguntas? Escribinos <PhoneCall className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="max-w-3xl w-full mx-auto">
          <Accordion items={faqQuestions} />
        </div>
      </div>
    </div>
  </div>
);
