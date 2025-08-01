'use client'

import { Smartphone, Users, MessageCircle, Clock } from 'lucide-react'

const items = [
  {
    icon: Smartphone,
    title: 'Spitzentechnologie',
    text: 'Wir stellen unseren Kunden modernste Technologien zur Verfügung, mit Fokus auf die Prozesseffizienz.',
  },
  {
    icon: Users,
    title: 'Fachkundige Ingenieure',
    text: 'Wir verfügen über Expertinnen und Experten in allen Bereichen unserer Dienstleistungen, was uns eine individuelle Betreuung Ihrer Anforderungen ermöglicht.',
  },
  {
    icon: MessageCircle,
    title: 'Kundensupport',
    text: 'Wir sind stets über unsere Kommunikationskanäle verfügbar – soziale Netzwerke, Chat, E-Mail und Telefon – und betreuen all unsere Kundinnen und Kunden persönlich.',
  },
  {
    icon: Clock,
    title: 'Pünktliche Lieferung',
    text: 'Die termingerechte Lieferung unserer Produkte und Dienstleistungen ist für uns zentral – sie schafft Vertrauen und Zufriedenheit während der Umsetzung.',
  },
]

export default function ContactBenefits() {
  return (
    <section className="bg-white py-12 px-4 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <div key={i} className="flex flex-col items-center space-y-2">
              <div className="bg-gray-100 p-4 rounded-full mb-2">
                <Icon className="w-6 h-6 text-gray-700" aria-hidden="true" />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

