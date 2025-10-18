import { Phone, Mail, MapPin } from "lucide-react"

export default function CTA() {
    return (
        <section id="contacto" className="py-20 md:py-32 bg-gradient-to-br from-primary to-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos Hoy</h2>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Estamos listos para ayudarte. Reserva tu cita o comunícate con nosotros.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                        <Phone className="w-8 h-8 mx-auto mb-4" />
                        <p className="text-sm text-blue-100 mb-2">Teléfono</p>
                        <p className="font-bold text-lg">310 2566319 - 323 4733428</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                        <Mail className="w-8 h-8 mx-auto mb-4" />
                        <p className="text-sm text-blue-100 mb-2">Email</p>
                        <p className="font-bold text-lg">orproteccaribe1@hotmail.com</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                        <MapPin className="w-8 h-8 mx-auto mb-4" />
                        <p className="text-sm text-blue-100 mb-2">Ubicación</p>
                        <p className="font-bold text-lg">Cartagena, Colombia</p>
                    </div>
                </div>
                {/*
        <div className="text-center">
          <button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            Reservar Cita Ahora
          </button>
        </div>
            */}
            </div>
        </section>
    )
}
