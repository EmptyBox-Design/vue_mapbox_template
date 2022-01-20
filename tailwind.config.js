module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        RobotoMono: ['Roboto Mono', 'monospace']
      },
      fontSize: {
        title: [
          '30px',
          {
            letterSpacing: 'normal',
            lineHeight: 1.14
          }
        ],
        subtitle: [
          '18px',
          {
            letterSpacing: 'normal',
            lineHeight: 1.2
          }
        ],
        header: [
          '20px',
          {
            letterSpacing: 'normal',
            lineHeight: 1.2
          }
        ],
        paragraph: [
          '18px',
          {
            letterSpacing: 'normal',
            lineHeight: 1.5
          }
        ],
        formTitle: [
          '16px',
          {
            letterSpacing: 'normal',
            lineHeight: 1.2
          }
        ],
        label: [
          '13px',
          {
            letterSpacing: -0.5,
            lineHeight: 1.69
          }
        ],
        detail: [
          '12px',
          {
            letterSpacing: 1,
            lineHeight: 1.2
          }
        ],
        tick: [
          '9px',
          {
            letterSpacing: 1,
            lineHeight: 1.2
          }
        ],
        unit: [
          '12px',
          {
            letterSpacing: 1.5,
            lineHeight: 1.5
          }
        ]
      },
      textColor: {
        'theme-body': '#333333'
      },
      width: {
        'sidebar-width': 'var(--sidebar-width)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
