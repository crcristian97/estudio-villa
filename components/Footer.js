import React from "react";

const Footer = () => (
  <footer>
    <div className="bg-white">
      <div className="max-w-screen-lg px-4 sm:px-6 text-[#2B2B2B] sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div className="p-5">
          <h3 className="font-bold text-xl text-[#1D2D44]">Estudio Villa</h3>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-[#1D2D44] font-bold">Estudio</div>
          <a className="my-3 block hover:text-[#BFA181]" href="#que-hacemos">
            Que hacemos
          </a>
          <a className="my-3 block hover:text-[#BFA181]" href="#sobre-la-firma">
            Sobre la firma
          </a>
          <a className="my-3 block hover:text-[#BFA181]" href="#como-trabajamos">
            Como trabajamos
          </a>
        </div>
       
        <div className="p-5">
          <div className="text-sm uppercase text-[#1D2D44] font-bold">Contacto</div>
          <a className="my-3 block hover:text-[#BFA181]" href="mailto:estudio@robertovillayasociados.com.ar">
          estudio@robertovillayasociados.com.ar
          </a>
          <a className="my-3 block hover:text-[#BFA181]" href="https://wa.me/541126493333" target="_blank" rel="noopener noreferrer">
            +54 11 2649 3333
          </a>
          <span className="my-3 block">Buenos Aires, Argentina</span>
          <span className="my-3 block">25 de Mayo 577</span>
        </div>
      </div>
    </div>

    <div className="bg-white pt-2">
      <div className="flex pb-5 px-3 m-auto pt-5 border-t border-[#BFA181] text-[#2B2B2B] text-sm flex-col max-w-screen-lg items-center">
        <div className="my-5">
          © {new Date().getFullYear()} Estudio Villa. Todos los derechos reservados.
        </div>
        <div>
          Diseñado por{" "}
          <a
            href="https://www.wemakeitlab.com/es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1D2D44] hover:underline"
          >
            We make it Lab
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
