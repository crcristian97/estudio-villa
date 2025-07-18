'use client'
import Image from "next/image";
import { motion } from "framer-motion";

// 4-image grid, visually balanced and responsive, with framer-motion effects
const imageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring", stiffness: 60 }
  }),
};

const AboutImagesGrid = () => (
  <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 lg:gap-8 h-full">
    {[
      {
        src: "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749246869/facultad-de-derecho-buenos-aires.webp",
        alt: "Facultad de Derecho Buenos Aires",
        title: "Facultad de Derecho Buenos Aires",
      },
      {
        src: "https://res.cloudinary.com/dgzi8i2ji/image/upload/estudio-juridico-ciudad-buenos-aires.webp",
        alt: "Estudio Jurídico en Ciudad de Buenos Aires",
        title: "Estudio Jurídico en Ciudad de Buenos Aires",
      },
      {
        src: "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749392316/derecho-civil-en-buenos-aires.webp",
        alt: "Derecho Civil en Buenos Aires",
        title: "Derecho Civil en Buenos Aires",
      },
      {
        src: "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749313341/asesoria-derecho-penal-en-buenos-aires.webp",
        alt: "Asesoría Derecho Penal en Buenos Aires",
        title: "Asesoría Derecho Penal en Buenos Aires",
      },
    ].map((img, i) => (
      <motion.div
        key={img.src}
        className="bg-[#F0EBD8] rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-[220px] shadow-lg"
        custom={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
      >
        <Image
          src={img.src}
          alt={img.alt}
          title={img.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48vw"
          quality={90}
          loading="lazy"
        />
      </motion.div>
    ))}
  </div>
);

export const AboutUs = () => (
  <section className="w-full py-20 lg:py-36 bg-[#F9FAFB] " id="sobre-la-firma">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="uppercase text-xs font-bold tracking-widest text-[#1D2D44] mb-2">
            Sobre la firma
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1D2D44] mb-4 leading-tight">
            Villa &amp; Asociados<br />
            <span className="text-[#1D2D44]">Estudio Jurídico</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1D2D44] leading-relaxed max-w-xl mb-4">
            Somos un equipo de abogados especializados en derecho sucesorio, societario y civil, con amplia experiencia en la resolución de conflictos complejos en familias empresarias. Nuestro enfoque combina estrategia legal, sensibilidad humana y visión de futuro.
          </p>
          <ul className="list-disc pl-6 text-[#1D2D44] text-base md:text-lg space-y-2 mb-4">
            <li>
              <strong>Soluciones a medida:</strong> Facilitamos acuerdos duraderos y diseñamos estrategias jurídicas que protegen el patrimonio y los vínculos familiares.
            </li>
            <li>
              <strong>Prevención y resolución:</strong> Intervenimos en herencias disputadas, empresas bloqueadas y desacuerdos societarios, utilizando herramientas como pactos sucesorios, protocolos familiares y estructuras societarias claras.
            </li>
            <li>
              <strong>Enfoque humano:</strong> Cada conflicto es una oportunidad de transformación. Trabajamos con perspectiva interdisciplinaria y responsabilidad, priorizando la paz familiar y la continuidad empresarial.
            </li>
          </ul>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-[#1D2D44]">Nuestro compromiso:</span>
            <div className="flex flex-wrap gap-3">
              <span className="inline-block bg-[#1D2D44] text-white px-4 py-1 rounded-full text-sm font-medium shadow transition-colors duration-200 hover:bg-[#748CAB]">
                Claridad jurídica
              </span>
              <span className="inline-block bg-[#1D2D44] text-white px-4 py-1 rounded-full text-sm font-medium shadow transition-colors duration-200 hover:bg-[#748CAB]">
                Continuidad empresarial
              </span>
              <span className="inline-block bg-[#1D2D44] text-white px-4 py-1 rounded-full text-sm font-medium shadow transition-colors duration-200 hover:bg-[#748CAB]">
                Paz familiar
              </span>
            </div>
          </div>
          <p className="text-base md:text-lg text-[#1D2D44] mt-6">
            Descubrí cómo podemos ayudarte a ordenar el presente y asegurar el futuro de tu legado.
          </p>
        </motion.div>
        <AboutImagesGrid />
      </div>
    </div>
  </section>
);