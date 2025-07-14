'use client'

import { motion } from 'framer-motion'
import { Server, Activity, LayoutGrid, Users } from 'lucide-react'

const features = [
  {
    icon: Server,
    title: 'Spitzentechnologie',
    text:
      'Wir stellen unseren Kunden modernste Technologien zur Verfügung, mit Fokus auf Prozesseffizienz.',
  },
  {
    icon: Activity,
    title: 'Fachkundige Ingenieure',
    text:
      'Unsere Fachleute sind auf alle Bereiche unserer Dienstleistungen spezialisiert und garantieren eine persönliche Betreuung.',
  },
  {
    icon: LayoutGrid,
    title: 'Kundensupport',
    text:
      'Wir sind über soziale Netzwerke, Chat, E-Mail und Telefon stets erreichbar und betreuen jeden einzelnen Kunden.',
  },
  {
    icon: Users,
    title: 'Pünktliche Lieferung',
    text:
      'Die termingerechte Lieferung unserer Produkte und Dienstleistungen ist für uns essenziell – für Vertrauen und Zufriedenheit.',
  },
]

export default function MonitoringFeatures() {
  return (
    <section className="py-20 px-4 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Texto izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Wir sind der führende Anbieter von Technologie in Chile</h2>
          <p className="text-lg">
            Wir zeichnen uns durch unsere Innovationskraft in der Instandhaltung aus. Gemeinsam mit unseren Kunden entwickeln wir klare Lösungen, um Wettbewerbsvorteile in Produktionsprozessen zu schaffen.
          </p>
        </div>

        {/* Fichas derecha */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.li
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer list-none"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
              >
                <div className="mb-3">
                  <Icon size={28} className="text-red-500" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.text}</p>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
