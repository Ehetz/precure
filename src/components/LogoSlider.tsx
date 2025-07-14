'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

// Logo-Dateien können später einfach in dieses Array eingefügt werden
const logos = ['', '', '', '', '']

export default function LogoSlider() {
  return (
    <section className="bg-white py-12 px-4 text-black">
      <div className="max-w-7xl mx-auto flex items-center gap-8">
        <h2 className="text-xl md:text-2xl font-bold whitespace-nowrap">
          Vertretungen von Weltklasse
        </h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          modules={[Autoplay]}
          className="flex-1"
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <div className="w-28 h-16 bg-gray-200 rounded shadow-inner flex items-center justify-center">
                {/* {logo ? <Image src={logo} alt="Logo" fill className="object-contain" /> : null} */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

