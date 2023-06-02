import * as React from 'react'
import { clsx } from 'clsx'
import { type VariantProps, cva } from 'class-variance-authority'

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-md text-center transition-all cursor-default',
  {
    variants: {
      variant: {
        default: clsx([
          'bg-brand text-white',
          'hover:bg-indigo-600',
          'active:bg-indigo-700',
        ]),
        secondary: clsx([
          'bg-slate-200 text-black',
          'hover:bg-slate-300',
          'active:bg-slate-400',
        ]),
        outline: clsx([
          'border-brand border-2 text-brand',
          'hover:bg-gray-50 hover:shadow hover:shadow-indigo-500/50',
          'active:bg-gray-100',
        ]),
        ghost: clsx(['bg-none', 'hover:bg-gray-50', 'active:bg-gray-100']),
      },
      size: {
        lg: 'h-11 px-6 md:px-8 py-3 text-lg',
        default: 'h-10 px-4 md:px-6 py-2 text-base',
        sm: 'h-9 px-2 md:px-4 py-1 text-sm',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonStyles({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'FcrButton'

export { Button, buttonStyles }
