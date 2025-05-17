// src/app/page.tsx

import HeroSlider from '@/components/HeroSlider'
import SectionHighlight from '@/components/SectionHighlight'
import MonitoringFeatures from '@/components/MonitoringFeatures'
import ServiceCards from '@/components/ServiceCards'

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <SectionHighlight />
      <section className="max-w-4xl mx-auto px-4 py-16 text-center text-blue-900">
        <h2 className="text-3xl font-bold">Über precure</h2>
        <p className="mt-4 text-lg">
          Wir sind ein deutsches Unternehmen spezialisiert auf industrielle Instandhaltung
          und präzise Schwingungssensorik. Unser Ziel ist es, moderne Technologien für die
          Zustandsüberwachung zugänglich und zuverlässig zu machen.
        </p>
      </section>
      <ServiceCards />
      <MonitoringFeatures />
    </main>
  )
}
