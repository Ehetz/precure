'use client'

import { motion } from 'framer-motion'
import { Server, Activity, LayoutGrid, Users } from 'lucide-react'

const features = [
  {
    icon: Server,
    title: 'Echtzeit-Überwachung',
    text: 'Unsere Plattform bietet sofortige Zustandsanalyse von Maschinen für bessere Entscheidungen.',
  },
  {
    icon: Activity,
    title: 'Intelligente Datenauswertung',
    text: 'Nutzen Sie erweiterte Analysen zur Optimierung von Wartung und Betrieb.',
  },
  {
    icon: LayoutGrid,
    title: 'Flexible Anwendung',
    text: 'Unsere Lösung passt sich vielseitig an unterschiedliche industrielle Umgebungen an.',
  },
  {
    icon: Users,
    title: 'Kundensupport inklusive',
    text: 'Wir begleiten Sie mit technischem Support, um die Technologie optimal zu nutzen.',
  },
]

export default function MonitoringFeatures() {
  return (
    <section className="py-20 px-4 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Texto izquierda */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Zustandsüberwachung für Industrieanlagen</h2>
          <p className="text-lg">
            Mit unseren kabellosen Sensortechnologien ermöglichen wir eine vorausschauende Wartung,
            reduzieren Ausfallzeiten und erhöhen die Effizienz Ihrer Produktionsprozesse.
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
