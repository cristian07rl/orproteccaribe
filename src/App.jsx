import CTA from "./componentes/contacto";
import Footer from "./componentes/footer";
import Products from "./componentes/productos";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-22">
            <div className="flex items-center gap-3">
              <img src="/images/logo-full.png" alt="ORPROTEC Logo" width={80} height={100} className="h-18 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              <a href="#Inicio" className="text-foreground hover:text-primary text-2xl transition">
                Inicio
              </a>
              <a href="#Servicios" className="text-foreground hover:text-primary text-2xl transition">
                Servicios
              </a>

              <a href="#contacto" className="text-foreground hover:text-primary text-2xl transition">
                Contacto
              </a>
            </nav>

            {/* CTA Button 
            <div className="hidden md:block">
              <button className="bg-secondary hover:bg-secondary/90 text-white">Reservar Cita</button>
            </div>
            */}
          </div>

        </div>
      </header>

      <main className="min-h-screen bg-background">
        <section id="Inicio" className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-blue-900 text-white overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>

                <h1 className="text-8xl md:text-5xl font-bold mb-6 text-balance">Tu Salud en las Mejores Manos</h1>
                <p className="text-xl text-blue-100 mb-8 text-balance">
                  Atención ortopédica personalizada para mejorar tu movilidad y bienestar.
                </p>
                {/*
                <div className="flex flex-col sm:flex-row gap-4">
                  <button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    Reservar Cita
                  </button>
                  <button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-transparent">
                    Ver Productos
                  </button>
                </div>
                  */}
              </div>

              <div className="relative h-96 md:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl"></div>
                <img
                  src="/images/portada.png"
                  alt="Dispositivos Ortopédicos"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <Products />
        <CTA />
      </main>
      <Footer />

    </div>
  );
}
