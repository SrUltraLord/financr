import { TailwindIndicator } from '@/components/tailwind-indicator'

import '@/styles/global.css'

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body className="min-h-screen bg-slate-100">
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
