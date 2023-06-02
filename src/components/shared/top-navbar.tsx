'use client'

import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Wallet, XIcon, MenuIcon } from 'lucide-react'

import { buttonStyles } from '@/components/ui/button'
import Link from 'next/link'

type Props = {
  items: string[]
}

export function TopNavbar({}: Props) {
  const [isOpen, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen((current) => !current)
  }

  return (
    <header className="sticky flex h-20 w-full items-center justify-center bg-white">
      <div className="container flex h-full w-full max-w-[80rem] items-center justify-between px-4 md:px-8">
        <div className="flex flex-row">
          <Wallet className="mr-4 text-gray-500" size={32} />
          <span className="hidden font-mono text-2xl font-bold text-gray-500 md:inline">
            Financr
          </span>
        </div>

        <Link
          className={buttonStyles({
            className: 'hidden md:flex',
            variant: 'secondary',
          })}
          href="/login"
        >
          Login
        </Link>

        {/* Toggle menu button */}
        <button
          className={twMerge(
            buttonStyles({
              variant: 'ghost',
            }),
            'flex p-1 md:hidden',
          )}
          onClick={toggleOpen}
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}
