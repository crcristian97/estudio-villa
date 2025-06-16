"use client"
import { PhoneCall } from "lucide-react";
import { useState } from "react";

const faqQuestions = [
  {
    question: "¿Qué es la mediación?",
    answer:
      "La mediación es un proceso extrajudicial donde un tercero imparcial ayuda a las partes a llegar a un acuerdo. Es una alternativa eficiente y confidencial para resolver conflictos. Promueve la comunicación y puede ser menos costosa que un litigio.",
  },
  {
    question: "¿Cómo se inicia un litigio?",
    answer:
      "Para iniciar un litigio, se debe presentar una demanda ante el tribunal correspondiente. Es fundamental contar con asesoría legal para garantizar que se sigan todos los procedimientos adecuados. Nuestro estudio está aquí para guiarlo en cada paso del proceso.",
  },
  {
    question: "¿Qué es el servicio estrella?",
    answer:
      "Nuestro servicio estrella, la Resolución Estratégica de Conflictos Complejos, ofrece soluciones integrales para conflictos difíciles. Combinamos un enfoque interdisciplinario con la confidencialidad y eficiencia. Esto nos permite abordar cada caso de manera única y efectiva.",
  },
  {
    question: "¿Cuánto tiempo toma un proceso legal?",
    answer:
      "La duración de un proceso legal puede variar significativamente según la complejidad del caso. Algunos litigios pueden resolverse en meses, mientras que otros pueden tardar años. Nuestro equipo se compromete a mantenerlo informado sobre cada etapa del proceso.",
  },
  {
    question: "¿Ofrecen consultas iniciales?",
    answer:
      "Sí, ofrecemos consultas iniciales para evaluar su situación legal. Durante esta consulta, discutiremos sus opciones y cómo podemos ayudarle. No dude en contactarnos para programar su cita.",
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
            className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none hover:bg-[#F0EBD8] transition text-[#1D2D44] cursor-pointer"
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
              Preguntas frecuentes
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-[#3E5C76] max-w-xl text-center">
              Respondemos las dudas más comunes sobre nuestros servicios legales. Si tenés otra consulta, no dudes en contactarnos.
            </p>
          </div>
          <div>
            <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F0EBD8] text-[#3E5C76] hover:bg-[#3E5C76] hover:text-white transition-colors font-semibold cursor-pointer">
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
