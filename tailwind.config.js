module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        graycustom: {
          100: '#e1e1e6',
          300: '#a8a8b3',
          730: '#737380',
          700: '#323238',
          800: '#29292e',
          850: '#1f2729',
          870: '#171D1F',
          900: '#121414',
          950: '#0E1010',
          999: '#0C0D0D',
        },
        cyanis: {
          500: '#61dcfb',
        },
        gold: {
          300: '#FFC249',
          500: '#eba417',
        },
        slime: {
          300: '#63FFA9',
          500: '#04d361',
        }
      },
      fontFamily: {
        ubuntu: "'Ubuntu', sans-serif",
        roboto: "'Roboto', sans-serif",
        baloo: "'Baloo Bhai 2', cursive",
      },
      borderRadius: {
        '4xl': '3rem',
        '5xl': '4rem',
        '6xl': '5rem',
        smd: '0.25rem',
      },
      marginBottom: {
        4.5: '1.225rem'
      },
      maxWidth: {
        'x': '12.5rem',
        'xd': '15.938rem',
        '1/2': '37.5rem',
        '2/3': '45rem',
        '5/6': '70rem',
      },
      width: {
        '64/2': '16.5rem',
      },
      left: {
        'neg-5': '3.438rem'
      },
      fontSize: {
        '5/6': '3.5rem'
      },
      lineHeight: {
        '6/7': '1.625rem'
      },
      blur: {
        'xs': '0.313rem'
      },
      screens: {
        '1xl': '1440px',
        '3xl': '1920px',
        'mob': '425px',
      },
    },
  },
  plugins: [],
}
