import React from "react";

const steps = [
  {
    title: "Contanos tu situación",
    description: "Completá nuestro formulario o escribinos para que podamos conocer tu caso y tus objetivos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-[#3E5C76] group-hover:text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.6569 16.9706 22 12 22C7.02944 22 3 20.6569 3 19V5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
  },
  {
    title: "Evaluamos y te asesoramos",
    description: "Analizamos tu consulta y te proponemos un plan de acción legal a medida.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-[#3E5C76] group-hover:text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
  },
  {
    title: "Trabajamos juntos",
    description: "Te acompañamos en cada paso, gestionando trámites, negociaciones y representándote ante quien corresponda.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-[#3E5C76] group-hover:text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
  },
  {
    title: "Solucionamos tu caso",
    description: "Buscamos la mejor resolución para vos, priorizando la paz familiar y la protección de tu patrimonio.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-[#3E5C76] group-hover:text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9998L8.99985 15M17.0024 8.99951C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99951C13.0024 7.89494 13.8979 6.99951 15.0024 6.99951C16.107 6.99951 17.0024 7.89494 17.0024 8.99951ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
  },
];

export const HowWorks = () => (
  <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24" id="como-trabajamos">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#3E5C76]">¿Cómo trabajamos?</p>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#1D2D44] sm:text-4xl lg:text-5xl">
          Solucionamos tu caso<br className="hidden sm:block" /> en 4 pasos simples
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-[#3E5C76] lg:text-xl lg:leading-8">
          Te acompañamos de principio a fin, con claridad jurídica, empatía y compromiso.
        </p>
      </div>
      <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
        {steps.map((step, idx) => (
          <li key={step.title} className="flex-start group relative flex lg:flex-col">
            {idx < steps.length - 1 && (
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-[#748CAB] lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)] cursor-alias"
                aria-hidden="true"
              ></span>
            )}
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#748CAB] bg-[#F9FAFB] transition-all duration-200 group-hover:border-[#3E5C76] group-hover:bg-[#3E5C76]">
              {step.icon}
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3 className="text-xl font-bold text-[#1D2D44] before:mb-2 before:block before:font-mono before:text-sm before:text-[#748CAB]">
                {step.title}
              </h3>
              <h4 className="mt-2 text-base text-[#3E5C76]">{step.description}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

