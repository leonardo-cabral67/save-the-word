module.exports = {
  content: ['./app/**/*.{jsx,ts,tsx,mdx}', './src/**/*.{jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        red: {
          0: '#770606',
          1: '#A00707',
          2: '#BA0707',
          3: '#D6231F',
        },
        blue: {
          0: '#453A85',
          1: '#417FD4',
          2: '#478FE1',
          3: '#7389E5',
        },
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        bangers: 'var(--font-bangers)',
      },
      dropShadow: {
        'choose-character': '4px 2px 2px #417fd4',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
};
