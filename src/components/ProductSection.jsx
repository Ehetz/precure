import React from 'react'

const products = [
  {
    title: 'Schwingungen',
    description: 'Komplette Ausrüstung zur Schwingungsanalyse',
    image: '/path-to-image.jpg',
  },
  {
    title: 'Laser-Ausrichtung',
    description: 'Alles zur Laser-Ausrichtung finden',
    image: '/path-to-image.jpg',
  },
  {
    title: 'Wärmebildkameras',
    description: 'Komplette Ausrüstung für Thermografie',
    image: '/path-to-image.jpg',
  },
  {
    title: 'Ultraschallgeräte',
    description: 'Komplette Ausrüstung für Ultraschallprüfungen',
    image: '/path-to-image.jpg',
  },
]

export default function ProductSection() {
  return (
    <section className="bg-[#FAFAFA] py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Unsere Produkte</h2>
        <p className="text-gray-600">Entdecken Sie unsere Auswahl</p>
        <div className="w-12 h-1 bg-blue-700 mx-auto rounded mt-2" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="bg-gray-300 h-64 rounded-xl p-4 text-white bg-cover bg-center flex flex-col justify-between w-full"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h3 className="text-center font-semibold">{item.title}</h3>
              <div className="flex items-center justify-center text-sm">
                <span>MEHR ERFAHREN</span>
                <span className="ml-2">&rarr;</span>
              </div>
            </div>
            <p className="text-center text-sm text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
