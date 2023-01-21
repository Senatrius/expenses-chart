/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: {
        red: 'hsl(10, 79%, 65%)',
        blue: 'hsl(186, 34%, 60%)'
      },
      hover: {
        red: 'hsl(10, 100%, 76%)',
        blue: 'hsl(186, 49%, 80%)'
      },
      text: 'hsl(25, 47%, 15%)',
      label: 'hsl(28, 10%, 53%)',
      background: 'hsl(27, 66%, 92%)',
      component: 'hsl(33, 100%, 98%)'
    },
    fontSize: {
      'header-label-m': [
        '0.9375rem',
        {
          fontWeight: 400
        }
      ],
      'header-value-m': [
        '1.5rem',
        {
          fontWeight: 700
        }
      ],
      'card-title-m': [
        '1.5rem',
        {
          fontWeight: 700
        }
      ],
      'card-label-m': [
        '1rem',
        {
          fontWeight: 400
        }
      ],
      'card-value-m': [
        '1.875rem',
        {
          fontWeight: 700
        }
      ],
      'card-trend-m': [
        '0.9375rem',
        {
          fontWeight: 700
        }
      ],
      'card-chart-m': [
        '0.75rem',
        {
          fontWeight: 400
        }
      ],
      'header-label-d': [
        '1.125rem',
        {
          fontWeight: 400
        }
      ],
      'header-value-d': [
        '2rem',
        {
          fontWeight: 700
        }
      ],
      'card-title-d': [
        '2rem',
        {
          fontWeight: 700
        }
      ],
      'card-label-d': [
        '1.125rem',
        {
          fontWeight: 400
        }
      ],
      'card-value-d': [
        '3rem',
        {
          fontWeight: 700
        }
      ],
      'card-trend-d': [
        '1.125rem',
        {
          fontWeight: 700
        }
      ],
      'card-chart-d': [
        '1rem',
        {
          fontWeight: 400
        }
      ]
    }
  },
  plugins: []
};
