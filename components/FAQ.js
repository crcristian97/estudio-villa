"use client"
import { PhoneCall } from "lucide-react";
import { useState } from "react";

// Utilidad para poner en negrita ciertas palabras/frases clave en las respuestas
function boldify(text) {
  // Lista de frases/palabras a poner en negrita (puedes ajustar según necesidad)
  const boldWords = [
    "mediación",
    "demanda judicial",
    "consulta",
    "acuerdos",
    "juicio",
    "herederos",
    "asesoramiento jurídico",
    "colación hereditaria",
    "reducción de donaciones inoficiosas",
    "empresa",
    "sociedades",
    "protocolos familiares",
    "planificación sucesoria",
    "patrimonio",
    "abogado",
    "estrategia jurídica",
    "acuerdos duraderos",
    "solución justa",
    "familias empresarias",
    "visión estratégica",
    "conocimiento interdisciplinario",
    "conflictos",
    "bienes",
    "donaciones encubiertas",
    "empresas familiares",
    "protocolos",
    "disputas",
    "derechos",
    "litiga",
    "facilita acuerdos",
    "protege tus derechos",
    "soluciones",
    "extrajudicial",
    "acuerdos anticipados",
    "pactos sucesorios",
    "reparto",
    "usufructo"
  ];

  // Ordenar por longitud descendente para evitar solapamientos
  boldWords.sort((a, b) => b.length - a.length);

  // Reemplazar cada palabra/frase por su versión en <strong>
  let result = text;
  boldWords.forEach(word => {
    // Escapar caracteres especiales para RegExp
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Solo poner en negrita si no está ya dentro de una etiqueta <strong>
    result = result.replace(
      new RegExp(`(?<!<strong[^>]*?>)(${escaped})(?![^<]*?</strong>)`, "gi"),
      '<strong class="font-semibold text-[#1D2D44]">$1</strong>'
    );
  });

  // Manejar saltos de línea como <br />
  result = result.replace(/\n/g, "<br />");

  return result;
}

const faqQuestions = [
  {
    question: "¿Qué es la mediación?",
    answer:
      "Es una herramienta legal para resolver conflictos sin juicio, con intervención de un tercero imparcial. Promueve acuerdos más rápidos, confidenciales y sostenibles.",
  },
  {
    question: "¿Cómo se inicia un litigio?",
    answer:
      "Con una demanda judicial. Pero antes evaluamos si existen vías alternativas más eficaces. Te guiamos en cada paso.",
  },
  {
    question: "¿Ofrecen consultas iniciales?",
    answer:
      "Sí. La primera consulta nos permite entender tu situación y proponerte un plan de acción sin compromiso.",
  },
  {
    question: "¿Qué tipo de conflictos resuelven?",
    answer:
      "Especialmente aquellos donde se cruzan intereses patrimoniales, familiares y empresariales. Somos expertos en resolver lo que parece no tener solución.",
  },
  {
    question: "¿Cuánto dura un proceso legal?",
    answer:
      "Depende del caso. Algunos se resuelven en semanas con acuerdos, otros pueden durar años si van a juicio. Siempre te mantenemos informado.",
  },
  {
    question: "¿Qué pasa si los herederos no se ponen de acuerdo?",
    answer:
      "Cuando hay desacuerdos entre herederos, especialmente si hay bienes complejos o empresas de por medio, es fundamental contar con asesoramiento jurídico. Podemos facilitar acuerdos a través de mediación o, si es necesario, representar en juicio para resguardar tus derechos.",
  },
  {
    question: "¿Puedo reclamar una herencia si sospecho que me ocultaron bienes?",
    answer:
      "Sí. Existen herramientas legales como la colación hereditaria o la reducción de donaciones inoficiosas para equilibrar lo recibido por todos los herederos. Investigamos operaciones sospechosas y te ayudamos a defender tu porción legítima.",
  },
  {
    question: "¿Qué pasa si hay una empresa dentro de la herencia?",
    answer:
      "Cuando el patrimonio hereditario incluye participaciones en sociedades, es clave analizar el vínculo entre los herederos y los socios. Actuamos para evitar bloqueos societarios y conflictos entre familiares que también son socios.",
  },
  {
    question: "¿Se puede evitar llegar a juicio en una sucesión complicada?",
    answer:
      "Sí. Diseñamos acuerdos anticipados, pactos sucesorios y protocolos familiares que permiten resolver de forma extrajudicial. Nuestro enfoque busca preservar los vínculos personales sin resignar tus derechos.",
  },
  {
    question: "¿Qué es la planificación sucesoria y por qué debería hacerla?",
    answer:
      "Es un proceso legal que permite organizar el destino de tu patrimonio antes del fallecimiento, evitando conflictos futuros. Es especialmente útil si tenés bienes valiosos, empresas familiares o hijos de diferentes vínculos. Es posible establecer reglas claras de administración, reparto o usufructo.",
  },
  {
    question: "¿Qué situaciones complejas pueden surgir en una sucesión?",
    answer:
      "Ocultamiento o simulación de bienes.\nDonaciones encubiertas que perjudican a otros herederos.\nEmpresas familiares bloqueadas por desacuerdos.\nFalta de protocolos entre herederos que también son socios.\nDisputas por el uso o la partición de bienes indivisos.",
  },
  {
    question: "¿Cómo se resuelve una sucesión con conflictos?",
    answer:
      "Desde el estudio, analizamos el caso, diseñamos una estrategia jurídica y buscamos acuerdos duraderos. Si no es posible negociar, representamos tus intereses ante la justicia para lograr una solución justa.",
  },
  {
    question: "¿Cuál es el rol del abogado en estos casos?",
    answer:
      "El abogado no solo litiga: facilita acuerdos, protege tus derechos y busca soluciones que contemplen tanto lo jurídico como lo humano. En casos de familias empresarias, actuamos con sensibilidad, visión estratégica y conocimiento interdisciplinario.",
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
            <span
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: boldify(item.answer) }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export const FAQ2 = () => (
  <div className="w-full py-20 lg:py-40" id="faq">
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
