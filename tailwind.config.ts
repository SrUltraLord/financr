import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#6366f1',
        'primary-foreground': '',
        'secondary-foreground': '',
      },
    },
  },
  plugins: [],
} satisfies Config
