import { Card } from "./ui/Card"
import { Zap, Footprints, Armchair as Wheelchair, Wrench, Shield, Shirt, Bone, Lightbulb } from "lucide-react"

const products = [
  {
    icon: Wrench,
    name: "Ortesis",
    description: "Diseño y adaptación de órtesis personalizadas",
  },
  {
    icon: Bone,
    name: "Prótesis",
    description: "Diseño de prótesis para miembros superiores e inferiores",
  },
  {
    icon: Footprints,
    name: "Zapatos Ortopédicos",
    description: "Calzado especializado para corrección y comodidad",
  },
  {
    icon: Wheelchair,
    name: "Sillas de Ruedas",
    description: "Sillas de ruedas manuales y motorizadas",
  },
  {
    icon: Shield,
    name: "Inmovilizadores",
    description: "Dispositivos para inmovilización y protección",
  },
  {
    icon: Shirt,
    name: "Línea Blanda",
    description: "Fajas, corsés y prendas de compresión",
  },
  {
    icon: Lightbulb,
    name: "Plantillas",
    description: "plantillas ortopédicas de uso terapéutico",
  },
  {
    icon: Zap,
    name: "Accesorios",
    description: "Complementos y accesorios ortopédicos",
  },
]

export default function Products() {
  return (
    <section id="Servicios" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Áreas de Atención</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos servicios especializados en evaluación, diseño y adaptación de órtesis, prótesis y ayudas técnicas para la rehabilitación y movilidad de nuestros pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition border-0 bg-white">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
