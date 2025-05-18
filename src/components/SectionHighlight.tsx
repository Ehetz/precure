import Image from 'next/image'

export default function SectionHighlight() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#0a0f1a] text-white">
      {/* Imagen */}
      <div>
        <Image
          src="/images/industry.jpg"
          alt="Industrielle Produktion – Symbolbild für klimaneutrale Prozesse"
          width={600}
          height={400}
          className="rounded-xl w-full h-[300px] object-cover"
        />
      </div>

      {/* Texto */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Klimaneutralität – was bedeutet das für precure?</h3>
        <p className="mb-6 text-base leading-relaxed">
          Klimaneutralität bedeutet, dass unsere industriellen Prozesse auf Umweltfreundlichkeit und Ausgleich der CO₂-Emissionen optimiert sind – durch effiziente Technik und nachhaltige Partnerprojekte.
        </p>
        <a href="#" className="inline-block bg-black text-white py-2 px-5 rounded shadow hover:bg-gray-800 transition" tabIndex={0}>
          mehr erfahren
        </a>
      </div>
    </section>
  )
}
