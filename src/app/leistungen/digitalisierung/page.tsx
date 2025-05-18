import DigitalisierungHero from '@/components/DigitalisierungHero'
import VorteileList from '@/components/VorteileList'
import PredictiveMaintenance from '@/components/PredictiveMaintenance'
import Digitalisierung from '@/components/digitalisierung'

export default function Page() {
  return (
    <main>
      <DigitalisierungHero />

      {/* Sección de ventajas */}
      <VorteileList />

      {/* Sección de Predictive Maintenance */}
      <PredictiveMaintenance />

      {/* Sección de pasos para die Zukunftssichere Digitalisierung */}
      <Digitalisierung />
    </main>
  )
}
