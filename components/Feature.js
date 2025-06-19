"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const LegalServicesSection = () => (
  <section className="w-full py-20 bg-white" id="que-hacemos">
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Imagen destacada a la izquierda en desktop, arriba en mobile */}
      <motion.div
        className="order-1 lg:order-none flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeLeft}
      >
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
      </motion.div>
      {/* Contenido textual */}
      <motion.div
        className="flex flex-col gap-6 max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeRight}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-[#3E5C76] mb-2 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Derecho societario y familiar para empresas
        </motion.h2>
        <motion.p
          className="text-[#3E5C76] text-lg md:text-xl mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Soluciones estratégicas y preventivas para empresas familiares y sociedades. Prevenimos y resolvemos conflictos societarios, familiares y sucesorios, asegurando la continuidad y el crecimiento empresarial.
        </motion.p>
        <ul className="space-y-4 mb-4">
          {features.map((item, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <CheckCircle className="text-[#B49B5A] min-w-[1.5em] min-h-[1.5em]" size={24} />
              <div>
                <span className="font-semibold text-[#3E5C76]">{item.title}:</span>{" "}
                <span className="text-[#3E5C76]">{item.description}</span>
              </div>
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </motion.div>
    </div>
  </section>
);