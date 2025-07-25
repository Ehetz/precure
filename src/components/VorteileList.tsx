'use client'

import Image from 'next/image'
import { TrendingDown, CheckCircle, Star, Eye, Users } from 'lucide-react'

const items = [
  {
    icon: TrendingDown,
    title: 'Kostenreduktion',
    text: 'Digitale Workflows und zustandsbasierte Instandhaltung reduzieren Wartungs- und Stillstandskosten.',
  },
  {
    icon: CheckCircle,
    title: 'Höhere Verfügbarkeit',
    text: 'Permanente Maschinenüberwachung führt zu weniger ungeplanten Ausfällen und steigert OEE.',
  },
  {
    icon: Star,
    title: 'Qualitätssteigerung',
    text: 'Lückenlos erfasste Prozessdaten ermöglichen frühzeitiges Eingreifen, bevor Ausschuss entsteht.',
  },
  {
    icon: Eye,
    title: 'Transparenz & Compliance',
    text: 'Automatische Protokollierung erleichtert Audits und ESG-Reporting.',
  },
  {
    icon: Users,
    title: 'Mitarbeiterentlastung',
    text: 'Routineaufgaben werden automatisiert, Fachkräfte konzentrieren sich auf wertschöpfende Entscheidungen.',
  }
]

export default function VorteileList() {
  return (
    <section className="py-20 px-4 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        {/* Cards a la izquierda */}
        <div className="relative z-10 grid grid-cols-1 gap-8">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-xl px-7 py-7 flex gap-5 items-start border border-gray-200 hover:border-gray-300 transition"
              >
                <div className="mt-1">
                  <Icon size={32} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm">{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Hero Card a la derecha */}
        <div className="relative flex flex-col h-full">
          <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden hidden md:block">
            <Image
              src="/images/digitalisierung2.jpg"
              alt="Vorteile Hero"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          <div className="relative z-10 p-8 md:p-12 bg-white rounded-2xl text-black h-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Die fünf größten Vorteile<br />für produzierende Betriebe
            </h2>
            <p className="text-lg max-w-xl">
              Digitalisierung und smarte Instandhaltung schaffen Wettbewerbsvorteile, senken Kosten und erhöhen die Effizienz Ihrer Produktion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
