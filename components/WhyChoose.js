"use client";
import { CheckCircle, Handshake, Briefcase, Shield, Users, FileText } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Facilitadores de acuerdos",
    description:
      "Acompañamos a nuestros clientes en la construcción de soluciones consensuadas, priorizando el diálogo y la prevención de conflictos.",
    icon: <Handshake className="text-white w-7 h-7" />,
  },
  {
    title: "Experiencia en empresas",
    description:
      "Amplia trayectoria asesorando a familias empresarias y resolviendo disputas societarias con visión estratégica.",
    icon: <Briefcase className="text-white w-7 h-7" />,
  },
  {
    title: "Soluciones jurídicas",
    description:
      "Entendemos la importancia de los vínculos y diseñamos estrategias legales que cuidan tanto lo patrimonial como lo personal.",
    icon: <CheckCircle className="text-white w-7 h-7" />,
  },
  {
    title: "Confidencialidad y transparencia",
    description:
      "Garantizamos absoluta reserva, comunicación clara y acompañamiento permanente en cada etapa del proceso.",
    icon: <Shield className="text-white w-7 h-7" />,
  },
  {
    title: "Enfoque en lo humano y patrimonio",
    description:
      "Buscamos soluciones duraderas que protejan tus relaciones y tu legado familiar o empresarial.",
    icon: <Users className="text-white w-7 h-7" />,
  },
  {
    title: "Asesoramiento en conflictos laborales",
    description:
      "Brindamos asesoramiento y representación en conflictos entre empleador y empleado, despidos con o sin causa, redacción y respuesta de cartas documento, enfermedades y licencias, trámites ante el SECLO y cualquier otra cuestión de Derecho del Trabajo.",
    icon: <FileText className="text-white w-7 h-7" />,
  },
];

function FeatureCard({ feature, idx }) {
  return (
    <motion.div
      key={idx}
      className="flex flex-col items-start bg-[#3E5C76] rounded-2xl shadow-lg px-7 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 hover:bg-[#1D2D44] transition-shadow transition-colors h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: idx * 0.07 }}
    >
      <div className="flex items-center w-full justify-start mb-3 gap-3">
        <span className="flex-shrink-0 flex items-center">{feature.icon}</span>
        <h3 className="text-lg font-semibold text-white text-left">{feature.title}</h3>
      </div>
      <p className="text-white text-sm text-left w-full leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function WhyChoose() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1D2D44] mb-4 tracking-tight">
            ¿Por qué elegir Estudio Villa?
          </h2>
          <p className="text-lg text-[#3E5C76] font-medium">
            El respaldo en el que podés confiar
          </p>
        </motion.div>
        <div className="max-w-6xl mx-auto">
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              gap-8 
              md:gap-10
            "
          >
            {features.map((feature, idx) => (
              <FeatureCard feature={feature} idx={idx} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
