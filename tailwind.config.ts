import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#6366f1',
        primary: '#6366f1',
        secondary: '#f6f7eb',
        destructive: '#ef4444',
        'primary-foreground': '#FFF',
        'destructive-foreground': '#FFF',
        'secondary-foreground': '',
      },
    },
  },
  plugins: [],
} satisfies Config
