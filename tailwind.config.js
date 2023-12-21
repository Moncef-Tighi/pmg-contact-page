module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      custom1: ["BebasNeue"],
    },
    extend: {
      fontFamily: {
        'sans': ['"BebasNeue"', 'Helvetica', 'Arial', 'sans-serif']
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
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