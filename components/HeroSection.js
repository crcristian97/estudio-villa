import { MoveRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import { ServicesGrid } from "./ServicesGrid";

export const Hero3 = () => (
  <section className="w-full">
    <div className="container">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <h2 className="text-5xl md:text-5xl max-w-lg tracking-tighter text-left font-regular">
              Resolución estratégica de conflictos legales complejos
            </h2>
            <h1 className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              En nuestro estudio jurídico, nos especializamos en ofrecer soluciones legales que protegen lo que más valora. Confíe en nuestra experiencia y compromiso para resolver sus conflictos de manera eficiente y transparente.
            </h1>
          </div>
          <div className="flex flex-row gap-4">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#3E5C76] border-[#F0EBD8] text-white rounded-md hover:bg-[#748CAB] transition-colors">
              Consultá por WhatsApp <PhoneCall className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 border bg-[#F0EBD8] border-[#3E5C76] rounded-md hover:bg-gray-100 transition-colors text-[#3E5C76]">
              Conocé tus derechos <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square overflow-hidden">
          <Image
            width="800"
            height="800"
            src="https://res.cloudinary.com/dgzi8i2ji/image/upload/abogados-conflictos-societarios-empresas.webp"
            alt="Abogados especialistas en conflictos societarios"
            className="w-full h-full object-cover"
            quality={100}
            loading="lazy"
          />
        </div>
      </div>
      <ServicesGrid />
    </div>
  </section>
);  
