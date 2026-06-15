/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Maritime palette — driven by the RGB-channel CSS vars in
        // index.css so the light/dark theme toggle flows through every
        // utility (incl. opacity modifiers like bg-ink/85).
        ink: 'rgb(var(--ink) / <alpha-value>)', // deep navy-black base
        hull: 'rgb(var(--hull) / <alpha-value>)', // raised surface
        steel: 'rgb(var(--steel) / <alpha-value>)', // cool steel-blue mid-tone / the ocean
        'steel-deep': 'rgb(var(--steel-deep) / <alpha-value>)',
        mist: 'rgb(var(--mist) / <alpha-value>)', // secondary text
        foam: 'rgb(var(--foam) / <alpha-value>)', // primary text
        bronze: 'rgb(var(--bronze) / <alpha-value>)', // single warm accent
        'bronze-hi': 'rgb(var(--bronze-hi) / <alpha-value>)', // accent highlight
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        data: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        eyebrow: '0.28em',
      },
      maxWidth: {
        shell: '78rem',
      },
      keyframes: {
        'scroll-cue': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '40%': { opacity: '1' },
          '100%': { transform: 'translateY(10px)', opacity: '0' },
        },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '25%': { transform: 'translate(-2%,1%)' },
          '50%': { transform: 'translate(1%,-1%)' },
          '75%': { transform: 'translate(-1%,2%)' },
        },
      },
      animation: {
        'scroll-cue': 'scroll-cue 1.8s ease-in-out infinite',
        grain: 'grain 8s steps(6) infinite',
      },
    },
  },
  plugins: [],
}
