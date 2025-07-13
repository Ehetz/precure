'use client'

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
        className="w-full h-[400px] md:h-[500px]"
      >
        <SwiperSlide>
          <div className="w-full h-full flex flex-col justify-center items-center text-center text-black px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow">Entdecke unsere Produkte</h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">Moderne Schwingungssensoren für maximale Effizienz in der Industrie.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full flex flex-col justify-center items-center text-center text-black px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow">Unsere Dienstleistungen</h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">Wartung, Monitoring und individuelle Beratung auf höchstem Niveau.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full flex flex-col justify-center items-center text-center text-black px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow">Kontaktiere uns</h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">Wir helfen dir, die richtige Lösung für dein Unternehmen zu finden.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
