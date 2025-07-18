"use client";

import React, { useRef, useState } from "react";

const testimonials = [
  {
    text: `"He utilizado estos servicios durante años y siempre superan mis expectativas. ¡El equipo de soporte es fantástico!"`,
    name: "Pepe Madrid",
  },
  {
    text: `"Las soluciones financieras que ofrecen son de primer nivel. He visto un crecimiento significativo en mis inversiones desde que empecé a usar su plataforma."`,
    name: "Michael Andreuzza",
  },
  {
    text: `"Su atención al cliente es inigualable. Realmente hacen un esfuerzo extra para asegurar la satisfacción del cliente."`,
    name: "Fernando Pio",
  }
];

const ArrowCircle = ({ direction = "left", ...props }) => (
  <button
    type="button"
    aria-label={direction === "left" ? "Anterior" : "Siguiente"}
    {...props}
    className={`inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#B49B5A] bg-[#3E5C76] text-[#F0EBD8] shadow transition hover:bg-[#B49B5A] hover:text-[#3E5C76] focus:outline-none cursor-pointer ${
      props.disabled ? "opacity-40 cursor-not-allowed" : ""
    } ${props.className || ""}`}
    tabIndex={props.disabled ? -1 : 0}
    disabled={props.disabled}
  >
    {direction === "left" ? (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M20.5 11l-6 5 6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) : (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M11.5 11l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )}
  </button>
);

export const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  // Responsive: update slide width on resize
  React.useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const width = sliderRef.current.firstElementChild.offsetWidth;
        sliderRef.current.scrollTo({
          left: current * width,
          behavior: "smooth"
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [current]);

  // Scroll to current slide when current changes
  React.useEffect(() => {
    if (sliderRef.current) {
      const width = sliderRef.current.firstElementChild.offsetWidth;
      sliderRef.current.scrollTo({
        left: current * width,
        behavior: "smooth"
      });
    }
  }, [current]);

  // iColor from your app: #3E5C76 (from context)
  const iColor = "#3E5C76";

  return (
    <section className="bg-white">
      <div className="w-full mx-auto max-w-5xl flex flex-col justify-center py-24 sm:py-32 md:py-40 relative px-4 sm:px-8 md:px-16">
        <div className="prose text-gray-500 prose-lg prose-headings:font-normal prose-headings:text-3xl">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1D2D44] mb-4 text-center">
              Testimonios
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-[#3E5C76] text-center">
              Lo que dicen nuestros clientes
            </p>
          </div>
        </div>
        <div className="mt-10 border-t pt-12 sm:pt-16 md:pt-20 max-w-full sm:max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="flex flex-col w-full">
            <div
              className="flex flex-col w-full"
              aria-labelledby="carousel-label"
              role="region"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === "ArrowLeft" && current > 0) setCurrent(current - 1);
                if (e.key === "ArrowRight" && current < testimonials.length - 1) setCurrent(current + 1);
              }}
            >
              <h2 className="sr-only" hidden id="carousel-label">
                Carousel
              </h2>
              <span className="sr-only" hidden id="carousel-content-label">
                Carousel
              </span>
              {/* Arrows with circle */}
              <div className="flex items-center justify-center mb-4 gap-4 sm:gap-8">
                <ArrowCircle
                  direction="left"
                  onClick={() => setCurrent(current - 1)}
                  disabled={current === 0}
                />
                <div className="items-center inline-flex lg:px-4 space-x-2 sm:space-x-4 justify-center">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all duration-200 ${
                        current === idx
                          ? "bg-[#3E5C76] scale-125"
                          : "bg-[#748CAB]/40"
                      }`}
                      aria-label={`Ir al testimonio ${idx + 1}`}
                      onClick={() => setCurrent(idx)}
                    />
                  ))}
                </div>
                <ArrowCircle
                  direction="right"
                  onClick={() => setCurrent(current + 1)}
                  disabled={current === testimonials.length - 1}
                />
              </div>
              <ul
                className="flex gap-4 sm:gap-6 mt-4 sm:mt-8 snap-mandatory snap-x w-full rounded-3xl"
                role="listbox"
                aria-labelledby="carousel-content-label"
                tabIndex={0}
                ref={sliderRef}
                style={{
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                  overflowX: "hidden"
                }}
              >
                {testimonials.map((t, idx) => (
                  <li
                    key={idx}
                    className="items-center justify-center w-full flex flex-col shrink-0 snap-start h-full p-8 sm:p-16 rounded-3xl lg:p-20 bg-gray-100"
                    role="option"
                    aria-selected={current === idx}
                    style={{
                      minWidth: "100%",
                      transition: "box-shadow 0.2s"
                    }}
                  >
                    <figure>
                      <div className="max-w-4xl">
                        <div className="flex flex-col gap-12 sm:gap-20">
                          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-display text-balance text-center leading-relaxed">
                            {t.text}
                          </p>
                          <div className="block flex-shrink-0">
                            <div className="flex items-center justify-center">
                              {/* Avatar removed */}
                              <div>
                                <p className="text-lg sm:text-xl font-medium" style={{ color: iColor }}>
                                  {t.name}
                                </p>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
