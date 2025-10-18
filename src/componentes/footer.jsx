"use client"

import { Facebook, Instagram, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ORPROTEC</h3>
            <p className="text-sm opacity-80">
              Atención y soluciones ortopédicas profesionales para tu rehabilitación.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100">
                  Ayudas de movilidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Linea blanda
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Zapatos Ortopédicos
                </a>
              </li>
              
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/orproteccaribeltda1" className="hover:opacity-100 opacity-80">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/orproteccaribesas/" className="hover:opacity-100 opacity-80">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-100 opacity-80">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 ORPROTEC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
