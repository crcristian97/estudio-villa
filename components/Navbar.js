import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex shrink-0">
            <span className="text-xl font-bold" style={{ color: "#1D2D44" }}>Estudio Villa</span>
          </div>
          {/* Main navigation */}
          <nav className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
              style={{ color: "#1D2D44" }}
              href="#sobre-la-firma"
              title="Ir a Sobre la firma"
            >
              Sobre la firma
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
              style={{ color: "#1D2D44" }}
              href="#que-hacemos"
              title="Ir a Qué hacemos"
            >
              Qué hacemos
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
              style={{ color: "#1D2D44" }}
              href="#como-trabajamos"
              title="Ir a Cómo trabajamos"
            >
              Cómo trabajamos
            </Link>
            
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
              style={{ color: "#1D2D44" }}
              href="#noticias"
              title="Ir a Noticias"
            >
              Noticias
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
              style={{ color: "#1D2D44" }}
              href="#contacto"
              title="Ir a Contacto"
            >
              Contacto
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
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
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
          style={{ color: "#1D2D44" }}
          href="#sobre-la-firma"
          title="Ir a Sobre la firma"
        >
          Sobre la firma
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
          style={{ color: "#1D2D44" }}
          href="#que-hacemos"
          title="Ir a Qué hacemos"
        >
          Qué hacemos
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
          style={{ color: "#1D2D44" }}
          href="#como-trabajamos"
          title="Ir a Cómo trabajamos"
        >
          Cómo trabajamos
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
          style={{ color: "#1D2D44" }}
          href="#noticias"
          title="Ir a Noticias"
        >
          Noticias
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
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
