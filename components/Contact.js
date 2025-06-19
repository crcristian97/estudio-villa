"use client";
import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 18 } },
};

export const Contact = () => {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    sendCopy: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "El email no es válido.";
    }
    if (!form.message.trim()) newErrors.message = "El mensaje es obligatorio.";
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      // Aquí podrías enviar el formulario a un backend o servicio externo
      // Por ahora solo reseteamos el formulario
      setForm({
        name: "",
        email: "",
        message: "",
        sendCopy: false,
      });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section className="mb-32" id="contacto">
      <div className="container px-6 md:px-12">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-primary">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mapa a la izquierda */}
            <div className="w-full lg:w-5/12 flex-shrink-0 flex-grow-0 mb-8 lg:mb-0">
              <div
                id="map"
                className="relative h-[300px] lg:h-full min-h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat rounded-lg shadow"
                style={{ minHeight: "400px", height: "100%" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1007490339516!2d-58.3712874!3d-34.601613799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a335332ebb2e8b%3A0xfd16dec2f5c5057!2s25%20de%20Mayo%20577%2C%20C1002ABK%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1750165481349!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Google Buenos Aires"
                ></iframe>
              </div>
            </div>
            {/* Formulario y datos a la derecha */}
            <div className="w-full lg:w-7/12 flex-shrink-0 flex-grow-0">
              <div className="flex flex-col gap-8">
                {/* Formulario */}
                <motion.div
                  className="w-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInRight}
                >
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="relative mb-6">
                      <input
                        type="text"
                        name="name"
                        id="contactName"
                        className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none`}
                        style={{
                          color: "#3D5C76",
                          borderColor: errors.name ? "#ef4444" : "#3D5C76"
                        }}
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                      />
                      
                      {errors.name && (
                        <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.name}</p>
                      )}
                    </div>
                    <div className="relative mb-6">
                      <input
                        type="email"
                        name="email"
                        id="contactEmail"
                        className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none`}
                        style={{
                          color: "#3D5C76",
                          borderColor: errors.email ? "#ef4444" : "#3D5C76"
                        }}
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                      />
                      
                      {errors.email && (
                        <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.email}</p>
                      )}
                    </div>
                    <div className="relative mb-6">
                      <textarea
                        name="message"
                        id="contactMessage"
                        rows={3}
                        className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none`}
                        style={{
                          color: "#3D5C76",
                          borderColor: errors.message ? "#ef4444" : "#3D5C76"
                        }}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Mensaje"
                      />
                      
                      {errors.message && (
                        <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.message}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="mb-6 w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0 cursor-pointer transition-all duration-200 hover:bg-[#1C2D44] hover:scale-105 hover:shadow-lg"
                      style={{ backgroundColor: "#3D5C76", color: "#fff" }}
                    >
                      Enviar
                    </button>
                    {submitted && (
                      <div className="text-center text-sm mt-2" style={{ color: "#22c55e" }}>
                        ¡Mensaje enviado! Nos pondremos en contacto pronto.
                      </div>
                    )}
                  </form>
                </motion.div>
                {/* Info de contacto */}
                <div className="w-full">
                  <div className="flex flex-wrap">
                    {/* Dirección */}
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-[#1C2D44] p-4">
                            {/* Icono dirección */}
                            <MapPin className="h-6 w-6" color="#F0EBD8" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold" style={{ color: "#3D5C76" }}>Dirección</p>
                          <p className="text-sm" style={{ color: "#3D5C76" }}>
                            25 de Mayo 577, C1002ABK,<br />
                            Ciudad Autónoma de Buenos Aires, Argentina
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Horarios */}
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-[#1C2D44] p-4">
                            {/* Icono reloj */}
                            <Clock className="w-7 h-7" color="#F0EBD8" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold" style={{ color: "#3D5C76" }}>Horarios</p>
                          <p className="text-sm" style={{ color: "#3D5C76" }}>
                            Lunes a Viernes: 9:00 a 18:00 hs<br />
                            Sábados: 10:00 a 14:00 hs<br />
                            Domingos: Cerrado
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Email y Teléfono */}
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-[#1C2D44] p-4">
                            {/* Icono email */}
                            <Mail className="w-6 h-6" color="#F0EBD8" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold" style={{ color: "#3D5C76" }}>Email</p>
                          <p style={{ color: "#3D5C76" }}>
                            estudio@robertovillayasociados.com.ar
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-[#1C2D44] p-4">
                            {/* Icono teléfono */}
                            <Phone className="w-6 h-6" color="#F0EBD8" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold" style={{ color: "#3D5C76" }}>Teléfono</p>
                          <p style={{ color: "#3D5C76" }}>+54 11 2649 3333</p>
                        </div>
                      </div>
                    </div>
                    {/* Fin info */}
                  </div>
                </div>
              </div>
            </div>
            {/* Fin flex row */}
          </div>
        </div>
      </div>
    </section>
  );
};
