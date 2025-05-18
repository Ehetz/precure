'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PredictiveMaintenanceSection() {
  return (
    <section className="bg-[#161c26] py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-[350px] h-[240px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/images/predictive.jpg" // reemplaza por tu imagen real
              alt="Predictive Maintenance in der Industrie"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Texto y gráfico */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold mb-2 text-blue-100">
            Predictive Maintenance als Schlüsseltechnologie
          </h2>
          <p className="text-lg text-blue-100">
            Mit vorausschauender Wartung erkennen Sie Anomalien frühzeitig und vermeiden Notfalleinsätze sowie unnötige Kosten. Moderne Sensorik, Edge-Analytics und Machine Learning sorgen für zuverlässige Prognosen.
          </p>
          {/* Gráfico animado SVG */}
          <div className="flex items-end gap-8 mt-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-green-400 mb-1">
                -68%
              </span>
              <span className="text-sm text-blue-200">Notfalleinsätze</span>
              {/* Simple animated bar */}
              <svg width="48" height="60">
                <rect x="16" y="15" width="16" height="35" fill="#10b981" rx="4">
                  <animate
                    attributeName="height"
                    from="0"
                    to="35"
                    dur="1s"
                    fill="freeze"
                  />
                  <animate
                    attributeName="y"
                    from="50"
                    to="15"
                    dur="1s"
                    fill="freeze"
                  />
                </rect>
              </svg>
            </div>
            <div>
              <p className="text-blue-200 text-xs">
                Durchschnittliche Reduktion von Notfalleinsätzen bei Einführung von Predictive Maintenance (Quelle: VDMA).
              </p>
            </div>
          </div>
          <ul className="list-disc ml-6 mt-6 text-blue-200 space-y-1">
            <li>Drahtlose Sensoren überwachen Mikrovibrationen permanent.</li>
            <li>Edge-Analytics erkennt Abweichungen in Echtzeit.</li>
            <li>Dashboards & Alerts geben klare Handlungsempfehlungen.</li>
          </ul>
          <button
            className="mt-8 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow transition"
          >
            Jetzt Beratung anfragen
          </button>
        </motion.div>
      </div>
    </section>
  )
}
