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
      boxShadow:{
        'elevation-m':[
          '0.1px 1px 1.1px hsl(0deg 97% 30% / 0.36)',
          '0.5px 3.3px 3.8px -0.8px hsl(0deg 97% 30% / 0.36)',
          '1.2px 8.2px 9.3px -1.7px hsl(0deg 97% 30% / 0.36)',
          '2.8px 20px 22.7px -2.5px hsl(0deg 97% 30% / 0.36)'
        ]
      }
    },
  },
  plugins: [],
}

