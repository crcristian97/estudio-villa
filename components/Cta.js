import { MoveRight } from "lucide-react";

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
  >
    <div className="absolute inset-0 bg-[#F0EBD8]/80 pointer-events-none" aria-hidden="true"></div>
    <div className="container mx-auto relative z-10">
      <div className="flex flex-col text-center py-14 gap-4 items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-[#1D2D44]">
            Mirá las notas del blog y los posteos recientes
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-[#3E5C76] max-w-xl">
            Encontrá información útil, consejos legales y novedades sobre sucesiones, empresas familiares y conflictos societarios.
          </p>
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3E5C76] text-white hover:bg-[#748CAB] transition-colors font-semibold text-base"
          >
            Ir a LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
);
