'use client'

import { motion } from 'framer-motion'
import { Radio, Cpu, BrainCircuit, BellRing, Award } from 'lucide-react'

const steps = [
  {
    icon: Radio,
    title: "Schwingungssensoren",
    text: "Drahtlose Schwingungssensoren erfassen kontinuierlich Mikrovibrationen wichtiger Antriebe.",
  },
  {
    icon: Cpu,
    title: "Edge-Analytics",
    text: "Edge-Analytics filtert Rohdaten direkt an der Maschine und erkennt Anomalien frühzeitig.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    text: "Machine-Learning-Modelle prognostizieren die Restlebensdauer von Komponenten und berechnen den optimalen Wartungszeitpunkt.",
  },
  {
    icon: BellRing,
    title: "Dashboards & Alerts",
    text: "Dashboards & Alerts liefern Wartungsteams klare Handlungsempfehlungen – mobil, in der Leitwarte oder per API.",
  },
]

export default function PredictiveMaintenance() {
  return (
    <section className="relative bg-[#101524] py-20 px-4 overflow-hidden">
      {/* Imagen de fondo tech opcional */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <img src="/images/tech-bg.png" className="object-cover w-full h-full" alt="" />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-100 mb-12 text-center"
        >
          Predictive Maintenance als Schlüsseltechnologie
        </motion.h2>

        {/* Tarjetas animadas */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.14 }}
                viewport={{ once: true }}
                className="
                  bg-[#161c26] border border-blue-900/30 rounded-2xl shadow-lg px-7 py-8
                  flex flex-col items-center text-center w-full md:max-w-xs
                  hover:border-blue-700 transition
                "
              >
                <div className="mb-3">
                  <Icon size={40} className="text-blue-400 drop-shadow" />
                </div>
                <h3 className="text-lg font-bold text-blue-200 mb-2">{step.title}</h3>
                <p className="text-blue-100 text-sm">{step.text}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Resultado final destacado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          viewport={{ once: true }}
          className="
            mx-auto mt-14 max-w-2xl rounded-2xl border border-blue-700 bg-gradient-to-br
            from-[#123661]/80 via-[#0a2540]/90 to-[#161c26]/90 shadow-2xl p-8 text-center
            flex flex-col items-center gap-4
          "
        >
          <Award size={42} className="text-amber-400 mb-2" />
          <span className="text-xl md:text-2xl font-bold text-white mb-1">
            Das Resultat:
          </span>
          <span className="text-blue-100 text-lg">
            bessere Planbarkeit, weniger Notfalleinsätze und ein längeres Maschinenleben.
          </span>
        </motion.div>
      </div>
    </section>
  )
}
