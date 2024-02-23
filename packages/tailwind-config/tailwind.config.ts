import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
    screens: {
      '3xsm': '320px',
      '2xsm': '400px',
      xsm: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      backgroundImage: {
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
      colors: {
        primary: '#3b82f6',
        secondary: '#0EA5E9',
        tertiary: '#6366F1',
        success: '#84CC16',
        warning: '#EAB308',
        error: '#D41976',
        surface: '#6B7280',
        highlight: '#e92a67',
      },
    },
  },
  plugins: [forms, typography],
}
export default config
