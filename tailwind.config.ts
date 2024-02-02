import tailwindcssAnimate from 'tailwindcss-animate'
import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        primary1: 'var(--primary1)',
        primary3: 'var(--primary3)',
        primaryForeground: 'var(--primary-foreground)',

        primarySelected: 'var(--primary-selected)',

        siderBackground: 'var(--sider-background)',
        itemHoverBackground: 'var(--item-hover-background)',
        itemSelectedBackground: 'var(--item-selected-background)'
      }
    }
  },
  plugins: [tailwindcssAnimate]
} satisfies Config

export default config
