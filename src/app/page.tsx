// src/app/page.tsx

import HeroSlider from '@/components/HeroSlider'
import SectionHighlight from '@/components/SectionHighlight'
import MonitoringFeatures from '@/components/MonitoringFeatures'
import ServiceCards from '@/components/ServiceCards'
import LogoSlider from '@/components/LogoSlider'
import BlogGallery from '@/components/BlogGallery'

export default function HomePage() {
  return (
    <main className="">
      <HeroSlider />
      <div className="mt-12" />
      <SectionHighlight />
      <ServiceCards />
      <MonitoringFeatures />
      <LogoSlider />
      <BlogGallery />
    </main>
  )
}
