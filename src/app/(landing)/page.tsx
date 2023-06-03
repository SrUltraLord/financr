import { TopNavbar } from '@/components/shared/top-navbar'
import { LandingHero } from './_components/landing-hero'
import { FeaturesSection } from './_components/features'

export default function Index() {
  return (
    <div className="w-full">
      <TopNavbar items={[]} />
      <LandingHero />
      <FeaturesSection />
    </div>
  )
}
