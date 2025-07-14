'use client'

import Link from 'next/link'
import Image from 'next/image'

const posts = [
  {
    category: 'Laser-Ausrichtung',
    title: 'Was ist Wiederholgenauigkeit und warum ist sie so wichtig?',
    date: '2. Juni 2024',
    image: '/images/anwendungen2.jpg',
  },
  {
    category: 'Vibrationssensoren',
    title: 'Wie Wilcoxon-Vibrationssensoren Ihr Predictive-Maintenance-Programm verbessern',
    date: '12. März 2024',
    image: '/images/analyse.jpg',
  },
  {
    category: 'Laser-Ausrichtung',
    title: 'Worauf Sie bei der Auswahl eines Wellenlaserausrichters achten sollten',
    date: '3. März 2024',
    image: '/images/anwendungen1.jpg',
  },
  {
    category: 'Nanoprecise Wireless Sensor',
    title: 'Integration von E-SIM und kabellosen Sensoren: Optimierung der Zustandsüberwachung',
    date: '21. Oktober 2023',
    image: '/images/digitalisierung1.jpg',
  },
]

export default function BlogGallery() {
  return (
    <section className="bg-white py-16 px-4 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Entdecken Sie unseren Blog</h2>
          <p className="text-gray-500 mt-2">
            Wir aktualisieren unser Wissen ständig – hier finden Sie die neuesten Beiträge.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, i) => (
            <Link
              key={i}
              href="/blog"
              className="rounded-lg overflow-hidden shadow-lg block group"
            >
              <div className="h-40 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={160}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="bg-white p-4">
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  {post.category}
                </div>
                <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
