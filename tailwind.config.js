import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens:{
      'xs': '300px',
      'l': '800px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        sans: ['Judson', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

