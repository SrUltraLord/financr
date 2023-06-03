import Link from 'next/link'
import { Github } from 'lucide-react'

import { buttonStyles } from '@/components/ui/button'

export function LandingHero() {
  return (
    <section className="flex w-full justify-center bg-white py-8 md:py-12 lg:py-32">
      <div className="container max-w-[64rem] flex-col space-y-4 px-4 text-center md:space-y-6 md:px-8">
        <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl">
          Manage your{' '}
          <span className="bg-gradient-to-r from-brand to-indigo-600 bg-clip-text text-transparent">
            personal finances
          </span>{' '}
          like a pro
        </h1>

        <h2 className="text-lg text-gray-600 md:text-xl lg:text-2xl">
          <span className="font-bold text-brand">Financr</span> is an
          open-source side project made with love and with a main objective:
          learn cool new tech.
        </h2>

        {/* Buttons container */}
        <div className="flex justify-center pt-6">
          <div className="flex w-96 space-x-4 md:space-x-6">
            <Link
              href="/login"
              className={buttonStyles({
                className: 'flex-1',
                size: 'lg',
              })}
            >
              Give it a try!
            </Link>
            <Link
              href="https://github.com/SrUltraLord/financr"
              target="_blank"
              className={buttonStyles({
                className: 'flex-1',
                variant: 'outline',
                size: 'lg',
              })}
            >
              <Github className="mr-2" />
              Github
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
