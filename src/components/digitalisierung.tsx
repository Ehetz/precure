'use client'

import Image from 'next/image'
import { Activity, FileText, ShieldCheck, Layers, Users } from 'lucide-react'

const steps = [
  {
    icon: Activity,
    title: 'Reifegrad bewerten',
    text: 'Wie steht es um Konnektivität, Datentiefe und Automatisierung Ihrer Anlagen?',
  },
  {
    icon: FileText,
    title: 'Pilot definieren',
    text: "Starten Sie mit einer kritischen Linie oder einem 'Bad-Actor'-Aggregat für schnellen ROI.",
  },
  {
    icon: ShieldCheck,
    title: 'Datenstrategie festlegen',
    text: 'Ownership, Governance und Zugriffsrechte frühzeitig regeln und dokumentieren.',
  },
  {
    icon: Layers,
    title: 'Skalieren & standardisieren',
    text: 'Erfolgreiche Piloten nach RAMI-4.0-Struktur ausrollen und unternehmensweit etablieren.',
  },
  {
    icon: Users,
    title: 'Mitarbeitende einbinden',
    text: 'Schulungen, Change-Management und Kommunikation sichern die Akzeptanz.',
  },
]

export default function ZukunftsSichereDigitalisierungSection() {
  return (
    <section className="py-20 px-4 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        {/* Imagen y texto a la izquierda */}
        <div className="relative flex flex-col h-full">
          <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden hidden md:block">
            <Image
              src="/images/digitalisierung2.jpg"
              alt="Digitalisierung"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          <div className="relative z-10 p-8 md:p-12 bg-white rounded-2xl text-black h-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zukunftssichere Digitalisierung:<br />Ihre nächsten Schritte</h2>
            <p className="text-lg max-w-xl">
              Machen Sie Ihr Unternehmen bereit für die Zukunft: <br />
              Schritt für Schritt zur erfolgreichen digitalen Transformation und nachhaltigen Wertschöpfung.
            </p>
          </div>
        </div>

        {/* Steps / Cards */}
        <div className="relative z-10 grid grid-cols-1 gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="bg-white rounded-xl shadow-xl px-7 py-7 flex gap-5 items-start border border-gray-200 hover:border-gray-300 transition"
              >
                <div className="mt-1">
                  <Icon size={32} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-sm">{step.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
