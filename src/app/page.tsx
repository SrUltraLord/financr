import { TopNavbar } from '@/components/shared/top-navbar'
import { LandingHero } from '../components/landing/landing-hero'
import { FeaturesSection } from '@/components/landing/features'

export default function Index() {
  return (
    <div className="w-full">
      <TopNavbar items={[]} />
      <LandingHero />
      <FeaturesSection />
    </div>
  )
}
