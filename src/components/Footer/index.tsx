import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Sección de logos y descripción */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          {/* Logo */}
          <div className="flex items-center mb-4 sm:mb-0">
            <Image
              src="/images/logo.png" // Ruta a tu logo
              alt="Logo de la empresa"
              width={150}
              height={50}
            />
            <p className="ml-4 text-lg">Tu Organización</p>
          </div>

          {/* Descripción o slogan */}
          <p className="text-center sm:text-left">
            Impulsamos la ciencia y el conocimiento en todo el mundo.
          </p>
        </div>

        {/* Sección de enlaces */}
        <div className="flex flex-wrap sm:justify-between gap-8 mb-8">
          {/* Enlaces principales */}
          <div className="w-full sm:w-1/4">
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul>
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Enlaces de redes sociales */}
          <div className="w-full sm:w-1/4">
            <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://www.facebook.com"
                  className="hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/facebook-icon.svg" // Ruta al ícono de Facebook
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/twitter-icon.svg" // Ruta al ícono de Twitter
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  className="hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/instagram-icon.svg" // Ruta al ícono de Instagram
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces adicionales */}
          <div className="w-full sm:w-1/4">
            <h3 className="font-semibold text-lg mb-4">Más Información</h3>
            <ul>
              <li>
                <Link href="/terms" className="hover:text-blue-400">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm">
            &copy; 2025 Tu Organización. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
