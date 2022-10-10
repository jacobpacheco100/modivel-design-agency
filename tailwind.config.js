module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#5F59F7',
        base2: '#2D25FF',
        accent: '#37B7FF',
        dark: '#030048',
        darker: '#131432',
        gray: '#646284',
        darkGray: '#646284',
        lightGray: '#CACEE0',
        blueGray: '#ADABCE',
        bg: '#E5E9F7',
      },
      fontSize: {
        h1: '5.125rem', // 82px
        h2: '2.5rem', // 40px
        body: '1.25rem', // 18px
        sm: '1rem', // 16px

        h1sm: '4rem', // 64px
        h2sm: '2rem', // 32px
        h3sm: '2rem', // 32px
        bodysm: '1.125rem', // 20px
      },
      borderRadius: {
        xl: '30px',
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
    },
  },
  plugins: [],
}
