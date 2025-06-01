// src/app/page.tsx

import HeroSlider from '@/components/HeroSlider'
import SectionHighlight from '@/components/SectionHighlight'
import MonitoringFeatures from '@/components/MonitoringFeatures'
import ServiceCards from '@/components/ServiceCards'

export default function HomePage() {
  return (
    <main className="bg-[#14254a] text-white">
      <HeroSlider />
      <div className="mt-12" />
      <SectionHighlight />
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
      </section>
      <ServiceCards />
      <MonitoringFeatures />
    </main>
  )
}
