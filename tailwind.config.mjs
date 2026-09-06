/** @type {import('tailwindcss').Config} */

/*
  Fluid type.

  Every display size interpolates between a 20rem and a 90rem viewport, so a
  headline grows with the page instead of snapping at three breakpoints. The
  clamp keeps both ends fixed — no headline is ever smaller than its min or
  larger than its max, whatever the viewport does.
*/
const fluid = (min, max, minVw = 20, maxVw = 90) => {
  const slope = (max - min) / (maxVw - minVw);
  const intercept = min - slope * minVw;
  return `clamp(${min}rem, ${intercept.toFixed(4)}rem + ${(slope * 100).toFixed(4)}vw, ${max}rem)`;
};

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#FBF8F4',
        sand: '#F4EEE6',
        rule: '#E5DCD0',
        ink: {
          DEFAULT: '#1F1B17',
          80: '#332D26',
          60: '#4A423A',
          /*
            40 and 20 carry the small uppercase meta type — dates, kickers,
            bylines. At the old values that text sat near 3:1 against paper,
            which is under AA for anything this size. Both are darkened just
            enough to clear 4.5:1 without losing the recessive feel.
          */
          40: '#736758',
          20: '#9C907F',
        },
        clay: {
          DEFAULT: '#B05B38',
          deep: '#8F4728',
          soft: '#F1E2DA',
        },
        sage: {
          DEFAULT: '#7C8A72',
          soft: '#E8EBE3',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Playfair Fallback', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        body: ['Inter', 'Inter Fallback', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      /*
        Optical sizing, done by hand.

        Playfair is a high-contrast didone: it wants to be drawn tight at
        poster sizes and left alone at text sizes. A single blanket tracking
        value flatters one end and cramps the other, so each step carries its
        own — negative at the top, neutral by the time it reaches a card title.
      */
      fontSize: {
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.16em' }],
        'display-1': [fluid(2.25, 3.75), { lineHeight: '1.04', letterSpacing: '-0.028em' }],
        'display-2': [fluid(2, 3.25), { lineHeight: '1.08', letterSpacing: '-0.024em' }],
        'display-3': [fluid(1.75, 2.375), { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-4': [fluid(1.5, 1.875), { lineHeight: '1.18', letterSpacing: '-0.015em' }],
        'title-lg': ['1.375rem', { lineHeight: '1.2', letterSpacing: '-0.011em' }],
        title: ['1.1875rem', { lineHeight: '1.28', letterSpacing: '-0.006em' }],
        'title-sm': ['1.0625rem', { lineHeight: '1.35', letterSpacing: '-0.003em' }],
        lead: [fluid(1.0625, 1.1875), { lineHeight: '1.6', letterSpacing: '-0.005em' }],
      },
      maxWidth: {
        reading: '43rem',
      },
      letterSpacing: {
        display: '-0.02em',
      },
      /*
        Elevation in this palette is warm. Tailwind's default shadows are
        mixed from a blue-black, which reads as a grey bruise over paper this
        warm — these are mixed from the ink instead.
      */
      boxShadow: {
        raise: '0 1px 2px rgb(31 27 23 / 0.04), 0 4px 12px -4px rgb(31 27 23 / 0.08)',
        panel: '0 2px 4px rgb(31 27 23 / 0.04), 0 12px 32px -12px rgb(31 27 23 / 0.16)',
        masthead: '0 1px 0 rgb(31 27 23 / 0.06), 0 8px 24px -16px rgb(31 27 23 / 0.24)',
      },
      transitionDuration: {
        250: '250ms',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.2, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
