import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        background: '#141617',
        foreground: 'hsl(0 0% 98%)',
        card: '#111314',
        'card-foreground': 'hsl(0 0% 98%)',
        popover: 'hsl(240 10% 3.9%)',
        'popover-foreground': 'hsl(0 0% 98%)',
        primary: 'hsl(263 85% 60%)',
        'primary-foreground': 'hsl(0 0% 98%)',
        secondary: '#2B2D2E',
        'secondary-foreground': 'hsl(0 0% 98%)',
        muted: 'hsl(240 5% 25%)',
        'muted-foreground': 'hsl(240 5% 65%)',
        accent: 'hsl(263 85% 60%)',
        'accent-foreground': 'hsl(0 0% 98%)',
        destructive: 'hsl(0 62.8% 30.6%)',
        'destructive-foreground': 'hsl(0 0% 98%)',
        border: 'hsl(240 5% 25%)',
        input: 'hsl(240 5% 25%)',
        ring: 'hsl(263 85% 60%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-slower': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 3s linear infinite',
        'spin-slower': 'spin-slower 5s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;