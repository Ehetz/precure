'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function HeroSlider() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        speed={700}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[420px] md:h-[520px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 text-black px-4">
            <div className="relative flex-1 flex justify-center items-center">
              <Image
                src="/images/digitalisierung1.jpg"
                alt="Vibrationssensor"
                width={350}
                height={350}
                className="w-40 sm:w-52 md:w-64 rounded-xl shadow-xl relative z-20"
                priority
              />
              <Image
                src="/images/analyse.jpg"
                alt="Tablet mit Analyse"
                width={350}
                height={350}
                className="w-40 sm:w-52 md:w-64 rounded-xl shadow-lg absolute -right-8 top-8 rotate-[-6deg]"
                priority
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm uppercase tracking-wide text-gray-600 mb-1">Zustandsüberwachung</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Vibrationssensoren</h2>
              <p className="mb-6 text-base md:text-lg max-w-xl">
                Optimierung und Betriebssicherheit: Entdecken Sie, wie unsere Vibrationssensoren die prädiktive Wartung
                und das Condition Monitoring Ihrer kritischen Anlagen transformieren.
              </p>
              <Link
                href="#"
                className="inline-block bg-black text-white py-2 px-5 rounded shadow hover:bg-gradient-to-r hover:from-black hover:to-blue-600 transition"
              >
                Zum Produktkatalog →
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center relative px-4 text-center text-black">
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-t-3xl" />
            <div className="relative max-w-2xl mx-auto">
              <p className="text-sm uppercase tracking-wide text-gray-600 mb-1">Digital Fusion</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Entdecken Sie die drahtlose Technologie zur Zustandsüberwachung
              </h2>
              <p className="mb-6 text-base md:text-lg">
                Der fortschrittliche drahtlose Vibrationssensor mit sechs zusätzlichen Variablen ermöglicht eine präzise
                und tiefgehende Analyse in Echtzeit. So erhalten Sie detaillierte Diagnosen und können Wartungen
                vorausschauend planen – für eine längere Lebensdauer Ihrer Systeme.
              </p>
              <Link
                href="#"
                className="inline-block bg-black text-white py-2 px-5 rounded shadow hover:bg-gradient-to-r hover:from-black hover:to-blue-600 transition"
              >
                Jetzt ansehen →
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 text-black px-4">
            <div className="relative flex-1 flex justify-center items-center">
              <Image
                src="/images/anwendungen1.jpg"
                alt="Laser-Ausrichtgerät"
                width={350}
                height={350}
                className="w-40 sm:w-52 md:w-64 rounded-xl shadow-xl relative z-20"
                priority
              />
              <Image
                src="/images/anwendungen2.jpg"
                alt="Laser-Ausrichter"
                width={350}
                height={350}
                className="w-40 sm:w-52 md:w-64 rounded-xl shadow-lg absolute -right-8 top-8 rotate-[-6deg]"
                priority
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm uppercase tracking-wide text-gray-600 mb-1">Laser-Ausrichtung</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Laser-Ausrichtsysteme</h2>
              <p className="mb-6 text-base md:text-lg max-w-xl">
                Entdecken Sie unseren Katalog an Laser-Ausrichtern für Wellen, Riemen und Geometrie.
              </p>
              <Link
                href="#"
                className="inline-block bg-black text-white py-2 px-5 rounded shadow hover:bg-gradient-to-r hover:from-black hover:to-blue-600 transition"
              >
                Zum Produktkatalog →
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
