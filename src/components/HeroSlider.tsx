'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function HeroSlider() {
  return (
    <div className="w-full bg-white">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        speed={700}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[400px] md:h-[500px]"
      >
        <SwiperSlide>
          <div className="w-full h-full bg-gradient-to-r from-blue-100 via-white to-blue-100 flex flex-col md:flex-row items-center justify-center text-blue-900 px-4 gap-6">
            {/* Platzhalter für Bild */}
            <div className="w-40 h-40 bg-gray-300 rounded-xl" />
            {/* Textbereich */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow">Laser-Ausrichtgeräte</h2>
              <p className="mt-4 text-lg md:text-xl max-w-2xl">Entdecken Sie unseren Katalog an Laser-Ausrichtgeräten für Wellen, Riemenscheiben und Geometrie.</p>
              <a
                href="/produkte"
                className="mt-6 inline-block bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded"
              >
                Zum Produkt
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-gradient-to-r from-blue-100 via-white to-blue-100 flex flex-col justify-center items-center text-center text-blue-900 px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow">Unsere Dienstleistungen</h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">Wartung, Monitoring und individuelle Beratung auf höchstem Niveau.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-gradient-to-r from-blue-100 via-white to-blue-100 flex flex-col justify-center items-center text-center text-blue-900 px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow">Kontaktiere uns</h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">Wir helfen dir, die richtige Lösung für dein Unternehmen zu finden.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
