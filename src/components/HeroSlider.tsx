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
          <div className="w-full h-full bg-gradient-to-r from-blue-100 via-white to-blue-100 flex flex-col md:flex-row items-center justify-center text-black px-4 gap-6">
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
          <div className="w-full h-full bg-gradient-to-r from-blue-100 via-white to-blue-100 flex flex-col md:flex-row items-center justify-center text-black px-4 gap-6">
            <div className="flex gap-4">
              <div className="w-32 h-32 bg-gray-300 rounded-xl" />
              <div className="w-32 h-32 bg-gray-300 rounded-xl" />
            </div>
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow">Sensores de vibraciones</h2>
              <p className="mt-4 text-lg md:text-xl">Optimización y seguridad operacional: descubre cómo nuestra línea de sensores de vibraciones transforma el monitoreo predictivo y el mantenimiento de sus equipos críticos.</p>
              <a
                href="/produkte"
                className="mt-6 inline-block bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded"
              >
                Ver producto
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-gradient-to-r from-blue-100 via-white to-blue-100 flex flex-col justify-center items-center text-center text-black px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow">Descubre la tecnología inalámbrica para el monitoreo de condiciones</h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">El avanzado sensor de vibraciones inalámbrico, enriquecido con la integración de seis variables adicionales, proporciona un análisis más certero y profundo, permitiendo una monitorización precisa y en tiempo real que se traduce en diagnósticos detallados y la capacidad de anticipar necesidades de mantenimiento o ajustes técnicos, optimizando así la operatividad y longevidad de los equipos y sistemas involucrados.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
