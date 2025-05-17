'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const data = [
  {
    title: 'Papierindustrie',
    image: '/images/papierindustrie.jpg',
    content: `Überwachung von Lagern, Saugwalzen und Trockenzylindern in den Abschnitten Formung, Pressung, Trocknung und Kalandrieren.

Vorteile:
- Vermeidung kritischer Lagerschäden
- Reduzierung ungeplanter Stillstände
- Optimierung präventiver Wartung

Herausforderungen:
- Hohe Temperaturen und Luftfeuchtigkeit
- Chemikalienbelastung
- Eingeschränkter Zugang zu kritischen Komponenten

Live-Überwachung – Nutzen:
- Frühzeitige Erkennung von Anomalien
- Verlängerung der Maschinenlebensdauer
- Verbesserung der Endproduktqualität`,
  },
  {
    title: 'Wasserkraftwerke',
    image: '/images/wasserkraftwerke.jpg',
    content: `Überwachung von Turbinen, Generatoren und Pumpen.

Vorteile:
- Vermeidung katastrophaler Ausfälle
- Maximierung der Betriebseffizienz
- Verlängerung der Lebensdauer der Anlagen

Herausforderungen:
- Extrembedingungen (Feuchtigkeit, Korrosion)
- Schwierige Erkennung von Frühschäden

Live-Überwachung – Nutzen:
- Sofortige Reaktion auf Anomalien
- Senkung der Wartungskosten
- Erhöhung der Betriebssicherheit`,
  },
  {
    title: 'Bergbauindustrie',
    image: '/images/bergbauindustrie.jpg',
    content: `Überwachung von Brechern, Förderbändern und Mühlen.

Vorteile:
- Erkennung von Ausrichtungs- und Unwuchtproblemen
- Optimierung der Geräteleistung
- Reduzierung von Ausfallzeiten

Herausforderungen:
- Staubige Umgebungen und starke Vibrationen
- Schneller Verschleiß von Komponenten

Live-Überwachung – Nutzen:
- Effektive prädiktive Wartung
- Erhöhte Sicherheit für das Personal
- Produktivitätssteigerung`,
  },
  {
    title: 'Öl- und Gasindustrie',
    image: '/images/oelgasindustrie.jpg',
    content: `Überwachung von Pumpen, Kompressoren und Rohrleitungssystemen.

Vorteile:
- Verhinderung von Lecks und strukturellen Ausfällen
- Optimierung des Prozessflusses
- Minimierung ökologischer Risiken

Herausforderungen:
- Extreme Druck- und Temperaturbedingungen
- Innen- und Außenkorrosion

Live-Überwachung – Nutzen:
- Sofortige Anomalieerkennung
- Effiziente Wartungsplanung
- Einhaltung von Sicherheitsvorschriften`,
  },
  {
    title: 'Lebensmittelindustrie',
    image: '/images/lebensmittelindustrie.jpg',
    content: `Überwachung von Motoren, Förderanlagen und Kühlsystemen.

Vorteile:
- Sicherung der Produktqualität
- Reduktion von Ausschuss durch Maschinenausfälle
- Einhaltung hygienischer Standards

Herausforderungen:
- Kreuzkontamination durch Defekte
- Unerwartete Produktionsunterbrechungen

Live-Überwachung – Nutzen:
- Proaktives Wartungsmanagement
- Effizienzsteigerung in der Produktion
- Senkung der Betriebskosten`,
  },
]

export default function AnwendungenPage() {
  return (
    <main className="min-h-screen bg-white text-blue-900 px-6 py-16">
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold">Anwendungen industrieller Schwingungssensorik</h1>
        <p className="mt-4 text-lg text-blue-800">
          Unsere Technologien werden in zahlreichen Branchen zur Überwachung, Diagnose und Wartung eingesetzt.
        </p>
      </div>

      {data.map((item, i) => (
        <motion.section
          key={item.title}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 * i }}
          viewport={{ once: true }}
        >
          {/* Image left/right alternated */}
          {i % 2 === 0 ? (
            <>
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="rounded-lg w-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <pre className="whitespace-pre-wrap text-blue-800">{item.content}</pre>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <pre className="whitespace-pre-wrap text-blue-800">{item.content}</pre>
              </div>
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="rounded-lg w-full object-cover"
              />
            </>
          )}
        </motion.section>
      ))}
    </main>
  )
}
