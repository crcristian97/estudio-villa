"use client";
import { motion } from "framer-motion";

export const CTA2 = () => (
  <div
    className="w-full py-20 lg:py-40 relative"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749246869/facultad-de-derecho-buenos-aires.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    id="noticias"
  >
    <div className="absolute inset-0 bg-[#F0EBD8]/80 pointer-events-none" aria-hidden="true"></div>
    <div className="container mx-auto relative z-10">
      <motion.div
        className="flex flex-col text-center py-14 gap-4 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-[#1D2D44]">
            Explorá artículos y casos reales
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-[#3E5C76] max-w-xl">
            Sobre resolución de conflictos, herencias empresarias y planificación sucesoria.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-row gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.linkedin.com/company/villa-y-asociados-estudio-juridico/"
            title="Ir a LinkedIn"
            aria-label="Ir a LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3E5C76] text-white hover:bg-[#748CAB] transition-colors font-semibold text-base"
          >
            Ir a LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </div>
  </div>
);
