"use client";
import { useState, useEffect, useRef } from "react";

// Custom hook to detect if an element is in viewport
function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3, ...options }
    );
    observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return inView;
}

// Count up only when in view
function useCountUpWhenInView(to, duration = 2000, inView) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let start = 0;
    const increment = to / (duration / 16);
    let raf;

    function animate() {
      start += increment;
      if (start < to) {
        setCount(Math.floor(start));
        raf = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, inView]);

  return count;
}

const statsData = [
  {
    value: 120,
    label: (
      <>
        <span className="block font-bold tracking-tight text-[#3E5C76] text-xs sm:text-sm md:text-base leading-tight">
          EMPRESAS FAMILIARES
        </span>
        <span className="block font-bold tracking-tight text-[#3E5C76] text-xs sm:text-sm md:text-base leading-tight">
          ACOMPAÑADAS
        </span>
      </>
    ),
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#3E5C76]/10">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#3E5C76]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6" />
        </svg>
      </span>
    ),
    numberColor: "text-[#3E5C76]",
    borderColor: "border-[#3E5C76]/30",
    shadow: "shadow-[0_2px_8px_0_rgba(62,92,118,0.08)]"
  },
  {
    value: 30,
    label: (
      <>
        <span className="block font-bold tracking-tight text-[#B49B5A] text-xs sm:text-sm md:text-base leading-tight">
          AÑOS DE
        </span>
        <span className="block font-bold tracking-tight text-[#B49B5A] text-xs sm:text-sm md:text-base leading-tight">
          TRAYECTORIA PROFESIONAL
        </span>
      </>
    ),
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#F0EBD8]/80">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#B49B5A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 3v15" />
          <path d="M5 21h14" />
          <path d="M7 21a5 5 0 0 1-5-5l5-9 5 9a5 5 0 0 1-5 5z" />
          <path d="M17 21a5 5 0 0 0 5-5l-5-9-5 9a5 5 0 0 0 5 5z" />
        </svg>
      </span>
    ),
    numberColor: "text-[#B49B5A]",
    borderColor: "border-[#B49B5A]/30",
    shadow: "shadow-[0_2px_8px_0_rgba(180,155,90,0.08)]"
  },
  {
    value: 80,
    label: (
      <>
        <span className="block font-bold tracking-tight text-[#748CAB] text-xs sm:text-sm md:text-base leading-tight">
          ESTRATEGIAS DE RESOLUCIÓN
        </span>
        <span className="block font-bold tracking-tight text-[#748CAB] text-xs sm:text-sm md:text-base leading-tight">
          IMPLEMENTADAS
        </span>
      </>
    ),
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#748CAB]/10">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#748CAB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="7" width="7" height="13" rx="2" />
          <rect x="14" y="3" width="7" height="17" rx="2" />
          <path d="M8 11v2M8 15v2M17 7v2M17 11v2M17 15v2" />
        </svg>
      </span>
    ),
    numberColor: "text-[#748CAB]",
    borderColor: "border-[#748CAB]/30",
    shadow: "shadow-[0_2px_8px_0_rgba(116,140,171,0.08)]"
  },
  {
    value: 60,
    label: (
      <>
        <span className="block font-bold tracking-tight text-[#BFA181] text-xs sm:text-sm md:text-base leading-tight">
          PROCESOS SUCESORIOS Y
        </span>
        <span className="block font-bold tracking-tight text-[#BFA181] text-xs sm:text-sm md:text-base leading-tight">
          SOCIETARIOS GESTIONADOS
        </span>
      </>
    ),
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#BFA181]/10">
        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#BFA181]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
          <polyline points="7 9 12 4 17 9" />
          <line x1="12" y1="4" x2="12" y2="16" />
        </svg>
      </span>
    ),
    numberColor: "text-[#BFA181]",
    borderColor: "border-[#BFA181]/30",
    shadow: "shadow-[0_2px_8px_0_rgba(191,161,129,0.08)]"
  }
];

export const Stats = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  // Ajusta los valores animados para que coincidan con la cantidad de stats
  const animatedValues = statsData.map((stat) =>
    useCountUpWhenInView(stat.value, 1800, inView)
  );

  return (
    <section
      ref={sectionRef}
      className="w-full py-8 sm:py-12 md:py-16 bg-white"
    >
      <div className="container mx-auto flex flex-row flex-wrap justify-center items-stretch gap-4 sm:gap-6 md:gap-8">
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            className={`
              flex flex-col items-center justify-center
              bg-white border ${stat.borderColor}
              rounded-xl
              px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8
              ${stat.shadow}
              min-w-[150px] sm:min-w-[180px] md:min-w-[210px]
              max-w-[210px]
              transition-all
              hover:shadow-lg
              hover:-translate-y-1
              relative
              select-none
              text-center
            `}
            style={{
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.06)",
              borderWidth: "1.5px"
            }}
          >
            <div className="mb-2">{stat.icon}</div>
            <span
              className={`
                text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${stat.numberColor}
                drop-shadow
                mb-1
              `}
              style={{
                WebkitTextStroke: "0.5px #e5e7eb",
                letterSpacing: "-0.02em"
              }}
            >
              +{animatedValues[idx]}
            </span>
            <div className="mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};