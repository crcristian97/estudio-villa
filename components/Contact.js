"use client";
import React from "react";

export const Contact = () => (
  <section className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-[#1D2D44]">Visitá nuestro estudio</h2>
        <p className="mt-4 text-lg text-[#1D2D44]">
          Estamos en el corazón de la Ciudad de Buenos Aires. Acercate para una consulta o escribinos por cualquier duda.
        </p>
      </div>
      <div className="mt-16 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1007490339516!2d-58.3712874!3d-34.601613799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a335332ebb2e8b%3A0xfd16dec2f5c5057!2s25%20de%20Mayo%20577%2C%20C1002ABK%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1750165481349!5m2!1ses-419!2sar"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Google Buenos Aires"
            ></iframe>
          </div>
          <div>
            <div className="max-w-full mx-auto rounded-lg overflow-hidden bg-white shadow cursor-pointer">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-[#1D2D44]">Dirección</h3>
                <p className="mt-1 text-[#1D2D44]">25 de Mayo 577, C1002ABK, Ciudad Autónoma de Buenos Aires, Argentina</p>
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-[#1D2D44]">Horarios</h3>
                <p className="mt-1 text-[#1D2D44]">Lunes a Viernes: 9:00 a 18:00 hs</p>
                <p className="mt-1 text-[#1D2D44]">Sábados: 10:00 a 14:00 hs</p>
                <p className="mt-1 text-[#1D2D44]">Domingos: Cerrado</p>
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-[#1D2D44]">Contacto</h3>
                <p className="mt-1 text-[#1D2D44]">Email: rovilla@gmail.com</p>
                <p className="mt-1 text-[#1D2D44]">Teléfono: +54 11 2649 3333</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
