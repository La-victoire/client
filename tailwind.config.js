
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
          },
          animation: {
            rotate: 'rotate 5s linear infinite',
          },
          keyframes: {
            "slide-in": {
              '0%': { opacity: 0, transform: 'translateX(10px)' },
              '100%': { opacity: 1, transform: 'translateX(0)' },
            },
          },
          animation: {
            "slide-in": "slide-in 0.5s ease-in-out",
          },
          keyframes: {
            fadeInUp: {
              '0%': { opacity: 0, transform: 'translateY(30px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
          },
          animation: {
            fadeInUp: 'fadeInUp 0.7s ease-in-out',
          },
        },
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }
  