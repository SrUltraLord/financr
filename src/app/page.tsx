import { LandingHero } from '../components/landing/landing-hero'
import { FeaturesSection } from '@/components/landing/features'

export default function Index() {
  return (
    <div className="w-full">
      <nav>This is my navbar</nav>
      <LandingHero />
      <FeaturesSection />
    </div>
  )
}
