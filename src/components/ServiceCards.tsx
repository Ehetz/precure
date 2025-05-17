'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    label: 'LÖSUNGEN',
    title: 'Digitalisierung',
    text: 'Echtzeitdaten, Automatisierung & smarte Industrieprozesse.',
    image: '/images/digitalisierung.jpg',
  },
  {
    label: 'SERVICE',
    title: 'Schwingungsanalyse',
    text: 'Zustandsüberwachung durch präzise Sensordatenanalyse.',
    image: '/images/analyse.jpg',
  },
  {
    label: 'VORTEILE',
    title: 'Prädiktive Instandhaltung',
    text: 'Vermeidung von Stillstand durch vorausschauende Wartung.',
    image: '/images/instandhaltung.jpg',
  },
]

export default function ServiceCards() {
  return (
    <section className="bg-[#082a4e] py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold tracking-wide drop-shadow">Entdecken Sie unsere Leistungen</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((item, i) => (
          <motion.div
            key={i}
            className="relative rounded-xl overflow-hidden group shadow-lg backdrop-blur-lg bg-white/10 border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Imagen de fondo */}
            <div className="absolute inset-0 z-0">
              <Image
                src={item.image}
                alt={`${item.title} – ${item.text}`}
                fill
                className="object-cover opacity-30 group-hover:opacity-40 transition duration-300"
              />
            </div>

            {/* Contenido */}
            <div className="relative z-10 p-8 h-[300px] flex flex-col justify-between text-white">
              <div className="text-sm text-blue-200 uppercase tracking-wide">{item.label}</div>
              <div>
                <h3 className="text-2xl font-bold mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-blue-100">{item.text}</p>
              </div>
              <div className="mt-6">
                <a href="#" className="underline text-white hover:text-blue-300 text-sm">
                  Mehr erfahren
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
