"use client";

import React, { useRef, useState } from "react";

const testimonials = [
  {
    text: `"I've been using this services for years, and they
           consistently exceed my expectations. The support team is
           fantastic! "`,
    name: "Pepe Madrid",
    title: "CEO of Something INC"
  },
  {
    text: `"The financial solutions they offer are top-notch. I've
           seen significant growth in my investments since I
           started using their platform. "`,
    name: "Michael Andreuzza",
    title: "CEO of Something INC"
  },
  {
    text: `"Their customer service is unparalleled. They really go
           the extra mile to ensure customer satisfaction. "`,
    name: "Fernando Pio",
    title: "CEO of Something INC"
  }
];

const ArrowCircle = ({ direction = "left", ...props }) => (
  <button
    type="button"
    aria-label={direction === "left" ? "Anterior" : "Siguiente"}
    {...props}
    className={`inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#B49B5A] bg-[#3E5C76] text-[#F0EBD8] shadow transition hover:bg-[#B49B5A] hover:text-[#3E5C76] focus:outline-none ${
      props.disabled ? "opacity-40 cursor-not-allowed" : ""
    } ${props.className || ""}`}
    tabIndex={props.disabled ? -1 : 0}
    disabled={props.disabled}
  >
    {direction === "left" ? (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M14.5 8l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) : (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M9.5 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
      <div className="w-full mx-auto max-w-xl flex flex-col justify-center py-16 sm:py-20 md:py-24 relative px-2 sm:px-4 md:px-8">
        <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#1D2D44] mb-2 text-center">
              Testimonios
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-[#3E5C76] text-center">
              Lo que dicen nuestros clientes
            </p>
          </div>
        </div>
        <div className="mt-6 border-t pt-8 sm:pt-10 md:pt-12 max-w-full sm:max-w-xl mx-auto">
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
              <div className="flex items-center justify-center mb-2 gap-2 sm:gap-4">
                <ArrowCircle
                  direction="left"
                  onClick={() => setCurrent(current - 1)}
                  disabled={current === 0}
                />
                <div className="items-center inline-flex lg:px-2 space-x-1 sm:space-x-2 justify-center">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                        current === idx
                          ? "bg-[#3E5C76] scale-110"
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
                className="flex gap-2 sm:gap-3 mt-2 sm:mt-4 snap-mandatory snap-x w-full rounded-2xl"
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
                    className="items-center justify-center w-full flex flex-col shrink-0 snap-start h-full p-4 sm:p-8 rounded-2xl lg:p-10 bg-gray-100"
                    role="option"
                    aria-selected={current === idx}
                    style={{
                      minWidth: "100%",
                      transition: "box-shadow 0.2s"
                    }}
                  >
                    <figure>
                      <div className="max-w-2xl">
                        <div className="flex flex-col gap-8 sm:gap-12">
                          <p className="text-sm sm:text-base md:text-lg text-gray-900 font-display text-balance text-center">
                            {t.text}
                          </p>
                          <div className="block flex-shrink-0">
                            <div className="flex items-center justify-center">
                              {/* Avatar removed */}
                              <div>
                                <p className="text-xs sm:text-sm font-medium" style={{ color: iColor }}>
                                  {t.name}
                                </p>
                                <p className="text-xs font-medium text-gray-500">
                                  {t.title}
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
