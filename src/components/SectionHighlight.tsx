import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    title: 'Vibrationen',
    image: '/images/analyse.jpg',
    description: 'Komplettes Equipment für Vibrationsanalyse',
    link: '#',
  },
  {
    title: 'Laser-Ausrichtung',
    image: '/images/anwendungen2.jpg',
    description: 'Alles rund um die Laser-Ausrichtung',
    link: '#',
  },
  {
    title: 'Thermografiekameras',
    image: '/images/digitalisierung2.jpg',
    description: 'Komplettes Equipment für Thermografie',
    link: '#',
  },
  {
    title: 'Ultraschallgeräte',
    image: '/images/digitalisierung.jpg',
    description: 'Komplettes Equipment für Ultraschallprüfungen',
    link: '#',
  },
]

export default function SectionHighlight() {
  return (
    <section className="bg-white py-16 px-4 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Besuchen Sie unsere Produktbereiche
          </h2>
          <p className="text-gray-500 mt-2">
            Entdecken Sie die beste Technologie für Ihre Instandhaltung
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <Link
                    href={p.link}
                    className="mt-1 text-white text-sm underline hover:text-gray-200"
                  >
                    Mehr erfahren →
                  </Link>
                </div>
              </div>
              <p className="p-4 text-sm text-center text-gray-800">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
