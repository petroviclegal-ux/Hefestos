import type { Config } from 'tailwindcss';

/**
 * Hefestos Capital design system.
 *
 * Palette: deep ink/charcoal + off-white + the brand maroon/wine accent taken
 * from the Hefestos "chain-knot" mark. No bright colours. Typography pairs a
 * refined serif (Playfair Display) for headlines with a clean geometric sans
 * (Inter) for UI.
 */
const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0F14',
          900: '#0B0F14',
          800: '#10151C',
          700: '#161C25',
          600: '#1E2630',
          500: '#2A333F',
        },
        bone: {
          DEFAULT: '#F7F5F0',
          200: '#EFEBE2',
          300: '#E3DDD0',
        },
        // Brand maroon — sampled from the Hefestos chain-knot logo gradient.
        maroon: {
          DEFAULT: '#7A1F35',
          light: '#A03A50',
          dark: '#5E1626',
          deep: '#45101C',
        },
        // Back-compat alias so copied components that still reference `brass`
        // resolve to the maroon accent. Prefer `maroon-*` in new code.
        brass: {
          DEFAULT: '#7A1F35',
          light: '#A03A50',
          dark: '#5E1626',
        },
        graphite: '#3A3A3A',
        muted: '#6B7280',
      },
      fontFamily: {
        // Headings/wordmark use Jost (matches hefcap.com). `serif` is kept as an
        // alias so existing `font-serif` classes resolve to the display face.
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'Arial', 'sans-serif'],
        serif: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'Arial', 'sans-serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      maxWidth: {
        content: '72rem',
        prose: '46rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      transitionTimingFunction: {
        'ease-luxe': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
