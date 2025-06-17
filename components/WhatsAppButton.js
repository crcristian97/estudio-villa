'use client';

import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '541126493333';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center"
      style={{
        width: '60px',
        height: '60px',
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton; 