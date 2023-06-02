import * as React from 'react'
import { clsx } from 'clsx'
import { type VariantProps, cva } from 'class-variance-authority'

const buttonStyles = cva('rounded-md font-bold text-center transition-all', {
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
      ghost: clsx([
        'border-brand border-2 text-brand',
        'hover:bg-gray-50 hover:shadow-md hover:shadow-indigo-500/50',
        'active:bg-gray-100',
      ]),
    },
    size: {
      default: 'px-4 py-2',
      sm: '',
      lg: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

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
