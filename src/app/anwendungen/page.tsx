// src/app/anwendungen/page.tsx

import AnwendungenCards from '@/components/anwendungencards'

export default function AnwendungenPage() {
  return (
    <main className="min-h-screen pb-16">
      {/* Banner */}
      <section className="relative w-full py-16 px-4 flex items-center justify-center">
        {/* Imagen de fondo opcional */}
        {/* <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <img src="/images/anwendungen-banner.jpg" alt="" className="w-full h-full object-cover" />
        </div> */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Anwendungen
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Entdecken Sie, in welchen Branchen und Einsatzbereichen unsere Lösungen den Unterschied machen. Klicken Sie auf eine Karte, um mehr zu erfahren!
          </p>
        </div>
      </section>

      {/* Cards */}
      <AnwendungenCards />
    </main>
  )
}
