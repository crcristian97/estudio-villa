'use client';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

export default function ContactForm() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      form.current,
      emailjsConfig.publicKey
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSubmitStatus('success');
        form.current.reset();
      }, (error) => {
        console.log('FAILED...', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#1D2D44" }}>
          Contáctanos
        </h2>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium mb-2" style={{ color: "#1D2D44" }}>
                Nombre completo *
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Tu nombre completo"
              />
            </div>
            
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium mb-2" style={{ color: "#1D2D44" }}>
                Email *
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="user_phone" className="block text-sm font-medium mb-2" style={{ color: "#1D2D44" }}>
              Teléfono
            </label>
            <input
              type="tel"
              name="user_phone"
              id="user_phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="+54 11 1234-5678"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: "#1D2D44" }}>
              Asunto *
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#1D2D44" }}>
              Mensaje *
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Cuéntanos más sobre tu consulta..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
          </div>
        )}

        {/* EmailJS Setup Instructions */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-medium mb-2" style={{ color: "#1D2D44" }}>Configuración necesaria:</h3>
          <p className="text-sm text-gray-600 mb-2">
            Para que el formulario funcione, necesitas configurar EmailJS:
          </p>
          <ol className="text-sm text-gray-600 list-decimal list-inside space-y-1">
            <li>Ve a <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">emailjs.com</a> y crea una cuenta</li>
            <li>Crea un servicio de email (Gmail, Outlook, etc.)</li>
            <li>Crea una plantilla de email con las variables: {{user_name}}, {{user_email}}, {{user_phone}}, {{subject}}, {{message}}</li>
            <li>Configura el email de destino como: estudio@robertovillayasociados.com.ar</li>
            <li>Reemplaza YOUR_SERVICE_ID, YOUR_TEMPLATE_ID y YOUR_PUBLIC_KEY en el código</li>
          </ol>
        </div>
      </div>
    </div>
  );
} 