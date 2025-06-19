'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import VillaLogo from "../public/VillaLogo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detectar si estamos haciendo scroll hacia arriba
      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setIsScrollingUp(true);
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingUp(false);
        setIsVisible(false);
      }
      
      // Detectar si hemos scrolleado más de 50px
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 py-3 shadow backdrop-blur-lg transition-all duration-300 md:top-6 md:rounded-3xl lg:max-w-screen-lg ${
        isScrolled 
          ? 'bg-white/95 shadow-lg' 
          : 'bg-white/80'
      } ${
        isVisible
          ? 'translate-y-0' 
          : '-translate-y-full'
      }`}
    >
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center shrink-0 gap-2">
           
            <Image
              title="Logo de Villa & Asociados"
              src={VillaLogo}
              width={100}
              height={100}
              alt="Villa & Asociados Logo"
              className="h-10 w-10 object-contain"
              style={{ objectFit: 'contain' }}
            />
          </div>
          {/* Main navigation */}
          <nav className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-400 hover:text-white   "
              style={{ color: "#1D2D44" }}
              href="#sobre-la-firma"
              title="Ir a Sobre la firma"
            >
              Sobre la firma
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-400 hover:text-white"
              style={{ color: "#1D2D44" }}
              href="#que-hacemos"
              title="Ir a Qué hacemos"
            >
              Qué hacemos
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-400 hover:text-white"
              style={{ color: "#1D2D44" }}
              href="#como-trabajamos"
              title="Ir a Cómo trabajamos"
            >
              Cómo trabajamos
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-400 hover:text-white"
              style={{ color: "#1D2D44" }}
              href="#noticias"
              title="Ir a Noticias"
            >
              Noticias
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-400 hover:text-white"
              style={{ color: "#1D2D44" }}
              href="#contacto"
              title="Ir a Contacto"
            >
              Contacto
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-400 hover:text-white"
              style={{ color: "#1D2D44" }}
              href="#faq"
              title="Ir a FAQ"
            >
              FAQ
            </Link>
          </nav>
          {/* Auth buttons */}
        </div>
      </div>
      {/* Mobile nav */}
      <nav className="flex md:hidden mt-3 px-4 gap-4 justify-center">
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-400 hover:text-white"
          style={{ color: "#1D2D44" }}
          href="#sobre-la-firma"
          title="Ir a Sobre la firma"
        >
          Sobre la firma
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-400 hover:text-white"
          style={{ color: "#1D2D44" }}
          href="#que-hacemos"
          title="Ir a Qué hacemos"
        >
          Qué hacemos
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-400 hover:text-white"
          style={{ color: "#1D2D44" }}
          href="#como-trabajamos"
          title="Ir a Cómo trabajamos"
        >
          Cómo trabajamos
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-400 hover:text-white"
          style={{ color: "#1D2D44" }}
          href="#noticias"
          title="Ir a Noticias"
        >
          Noticias
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-400 hover:text-white"
          style={{ color: "#1D2D44" }}
          href="#contacto"
          title="Ir a Contacto"
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
}
