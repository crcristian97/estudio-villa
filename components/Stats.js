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
    value: 300,
    label: "Clientes",
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#3E5C76]/10">
        <svg className="w-9 h-9 text-[#3E5C76]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6" />
        </svg>
      </span>
    ),
    numberColor: "text-[#3E5C76]",
    borderColor: "border-[#3E5C76]",
    shadow: "shadow-lg"
  },
  {
    value: 50,
    label: "Casos",
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F0EBD8]/60">
        <svg className="w-9 h-9 text-[#B49B5A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 3v15" />
          <path d="M5 21h14" />
          <path d="M7 21a5 5 0 0 1-5-5l5-9 5 9a5 5 0 0 1-5 5z" />
          <path d="M17 21a5 5 0 0 0 5-5l-5-9-5 9a5 5 0 0 0 5 5z" />
        </svg>
      </span>
    ),
    numberColor: "text-[#B49B5A]",
    borderColor: "border-[#B49B5A]",
    shadow: "shadow-lg"
  },
  {
    value: 15,
    label: "Empresas",
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#748CAB]/10">
        <svg className="w-9 h-9 text-[#748CAB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="7" width="7" height="13" rx="2" />
          <rect x="14" y="3" width="7" height="17" rx="2" />
          <path d="M8 11v2M8 15v2M17 7v2M17 11v2M17 15v2" />
        </svg>
      </span>
    ),
    numberColor: "text-[#748CAB]",
    borderColor: "border-[#748CAB]",
    shadow: "shadow-lg"
  }
];

export const Stats = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  const clients = useCountUpWhenInView(300, 2000, inView);
  const cases = useCountUpWhenInView(50, 2000, inView);
  const companies = useCountUpWhenInView(15, 2000, inView);

  const animatedValues = [clients, cases, companies];

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 bg-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
        {statsData.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-row items-center bg-white border ${stat.borderColor} rounded-2xl px-12 py-10 ${stat.shadow} transition-transform hover:scale-105 min-w-[270px] cursor-pointer`}
          >
            <div className="mr-7">{stat.icon}</div>
            <div className="flex flex-col items-start">
              <span
                className={`text-5xl font-extrabold tracking-tight ${stat.numberColor} drop-shadow`}
                style={{
                  WebkitTextStroke: "0.5px #e5e7eb",
                  letterSpacing: "-0.02em"
                }}
              >
                +{animatedValues[idx]}
              </span>
              <span className="uppercase text-base font-semibold tracking-widest text-[#3E5C76] mt-2 drop-shadow-sm">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};