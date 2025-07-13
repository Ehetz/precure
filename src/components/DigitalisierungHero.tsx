'use client'

import { motion } from 'framer-motion'

export default function DigitalisierungHero() {
  return (
    <section className="relative w-full py-20 px-4 flex items-center justify-center text-black">
      {/* Overlay sutil, puedes agregar una imagen de fondo en el futuro */}
      {/* <div className="absolute inset-0 z-0">
        <img src="/images/tu-banner.jpg" alt="" className="w-full h-full object-cover opacity-30" />
      </div> */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Digitale Transformation in der Industrie: <br className="hidden md:inline" />Jetzt die Weichen stellen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Die industrielle Digitalisierung ist längst kein Zukunftsthema mehr – sie entscheidet heute darüber, wie wettbewerbsfähig der Produktionsstandort Deutschland morgen bleibt.
          Wer seine Maschinen, Daten und Mitarbeitenden intelligent vernetzt, senkt Kosten, erhöht die Anlagenverfügbarkeit und schafft Raum für völlig neue Geschäftsmodelle.
        </motion.p>
      </div>
    </section>
  )
}
