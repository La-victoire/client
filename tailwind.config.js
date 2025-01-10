
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        fontFamily: {
          display: ["Open Sans", "sans-serif"],
          body: ["Open Sans", "sans-serif"],
        },
        extend: {

          screens: {
            mf: "990px",
          },
          keyframes: {
              rotate: {
                '0%': {
                  transform: '--angle(0deg)',
                },
                '100%': {
                  transform: '--angle(360deg)',
                },
              },
              fadeUp: {
                '0%': { opacity: 0, transform: 'translateY(20px)' }, // Fading in and moving up
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
              fadeSlide: {
                '0%': { opacity: 0, transform: 'translateX(-20px)' }, // Fading in and sliding sideways
                '100%': { opacity: 1, transform: 'translateX(0)' },
              },
            },
            animation: {
              rotate: 'rotate 2s linear infinite',
              fadeUp: 'fadeUp 0.6s ease-out forwards',
              fadeSlide: 'fadeSlide 0.6s ease-out forwards',
            },
        },
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }
    