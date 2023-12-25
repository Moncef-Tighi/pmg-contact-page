module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      cursive: ["cursive"],
    },
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif']
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 24s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
    },
  },
}