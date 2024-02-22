import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
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
      },
    },
  },
  plugins: [forms, typography],
}
export default config
