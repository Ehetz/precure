'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1a] text-white flex flex-col items-center justify-center py-12">
      <div className="max-w-2xl p-8 rounded-xl bg-[#161c26] shadow-lg border border-blue-900/20 mb-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-200">Über uns</h1>
        <p className="mb-4 text-blue-100">
          Precure ist ein deutsches Unternehmen, das sich auf industrielle Instandhaltung und moderne Schwingungssensorik spezialisiert hat. Unser Ziel ist es, innovative Technologien für die Zustandsüberwachung von Maschinen und Anlagen zugänglich, effizient und zuverlässig zu machen.
        </p>
        <p className="mb-4 text-blue-100">
          Mit einem engagierten Team aus erfahrenen Ingenieuren und Techniker:innen bieten wir individuelle Lösungen, Beratung und erstklassigen Support für unsere Kunden in verschiedenen Industriezweigen – von der Papierindustrie bis zum Anlagenbau.
        </p>
        <p className="mb-4 text-blue-100">
          Vertrauen, Partnerschaft und Nachhaltigkeit stehen bei uns im Mittelpunkt. Wir begleiten Sie Schritt für Schritt auf dem Weg zur digitalen und vorausschauenden Instandhaltung.
        </p>
        <p className="text-blue-300 font-semibold mt-6">
          Ihr Precure Team
        </p>
      </div>

      {/* Sektion CEO-Fotos */}
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#161c26] rounded-2xl p-6 flex flex-col items-center border border-blue-900/30 shadow-lg w-[260px]"
        >
          <Image
            src="/images/ceo1.jpg"
            alt="CEO Anna Schmidt"
            width={150}
            height={150}
            className="rounded-full mb-4 object-cover"
          />
          <div className="text-xl font-semibold text-blue-100 mb-1">Anna Schmidt</div>
          <div className="text-blue-300 text-sm mb-2">CEO & Gründerin</div>
          <p className="text-blue-100 text-center text-sm">Expertin für Digitalisierung und industrielle Innovation.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#161c26] rounded-2xl p-6 flex flex-col items-center border border-blue-900/30 shadow-lg w-[260px]"
        >
          <Image
            src="/images/ceo2.jpg"
            alt="CEO Lukas Weber"
            width={150}
            height={150}
            className="rounded-full mb-4 object-cover"
          />
          <div className="text-xl font-semibold text-blue-100 mb-1">Lukas Weber</div>
          <div className="text-blue-300 text-sm mb-2">CEO & Mitgründer</div>
          <p className="text-blue-100 text-center text-sm">Spezialist für Maschinenbau, Prozessoptimierung und Kundenservice.</p>
        </motion.div>
      </div>
    </main>
  )
}
