'use client';
import { MoveRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import { ServicesGrid } from "./ServicesGrid";
import Link from "next/link";

export const Hero3 = () => (
  <section className="w-full">
    <div className="container px-4 md:px-0">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        {/* Text Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-lg tracking-tighter text-left font-regular">
              Resolución estratégica de conflictos legales complejos
            </h2>
            <h1 className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              En nuestro estudio jurídico, nos especializamos en ofrecer soluciones legales que protegen lo que más valora. Confíe en nuestra experiencia y compromiso para resolver sus conflictos de manera eficiente y transparente. Atendemos especialmente conflictos societarios y civiles, brindando asesoramiento integral para cada situación.
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a
              href="https://wa.me/541126493333"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#3E5C76] border-[#F0EBD8] text-white rounded-md hover:bg-[#748CAB] transition-colors w-full sm:w-auto cursor-pointer"
            >
              Contanos tu caso <PhoneCall className="w-4 h-4" />
            </a>
            <Link href="#que-hacemos" className="inline-flex items-center justify-center gap-2 px-4 py-2 border bg-[#F0EBD8] border-[#3E5C76] rounded-md hover:bg-gray-100 transition-colors text-[#3E5C76] w-full sm:w-auto cursor-pointer">
              Ver servicios <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        {/* Image Section */}
        <div className="bg-muted rounded-md aspect-square overflow-hidden w-full max-w-md mx-auto lg:max-w-full">
          <Image
            width={800}
            height={800}
            src="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogados-conflictos-societarios-empresas.webp"
            alt="Abogados especialistas en conflictos societarios en buenos aires"
            title="Abogados especialistas en conflictos societarios en buenos aires"
            className="w-full h-full object-cover"
            quality={100}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="mt-8">
        <ServicesGrid />
      </div>
    </div>
  </section>
);  
