import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex shrink-0">
            <span className="text-xl font-bold text-[#1D2D44]">Estudio Villa</span>
          </div>
          {/* Main navigation */}
          <nav className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#sobre-la-firma"
            >
              Sobre la firma
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#que-hacemos"
            >
              Qué hacemos
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#como-trabajamos"
            >
              Cómo trabajamos
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#contacto"
            >
              Contacto
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#noticias"
            >
              Noticias
            </Link>
          </nav>
          {/* Auth buttons */}
        </div>
      </div>
      {/* Mobile nav */}
      <nav className="flex md:hidden mt-3 px-4 gap-4 justify-center">
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#sobre-la-firma"
        >
          Sobre la firma
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#que-hacemos"
        >
          Qué hacemos
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#como-trabajamos"
        >
          Cómo trabajamos
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#contacto"
        >
          Contacto
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#noticias"
        >
          Noticias
        </Link>
      </nav>
    </header>
  );
}
