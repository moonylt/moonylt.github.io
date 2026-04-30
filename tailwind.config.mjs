/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0d1117',
        'bg-secondary': '#161b22',
        'text-primary': '#c9d1d9',
        'text-muted': '#8b949e',
        'accent': '#58a6ff',
        'success': '#7ee787',
        'highlight': '#f778ba',
        'border': '#30363d',
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
