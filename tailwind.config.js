/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors:  {
        description: '#808276',
        primaryText: '#354733',  // lunar green
        span: '#8A9B6E', 
        secondText: '#AFB2AA',
        mainGreen: '#F0F1EE',
        'border-subtitle': '#AFB2AA',
        'form-subtitle': '#1E1E24',
        'register-button': '#FCFCFC',
        'header-green-hover': '#8A9B6E',
      },
      
      fontFamily: {
        title: ['EB Garamond'],
        titleCard: ['Lato'],
        subtitle: ['Raleway'],
        plantRegister: ['Inter'],
      },

      fontSize: {
        '24':'24px',
        '18': '18px',
        '16': '16px',
        '46': '46px'
      },

      borderWidth: {
        '1': '1px',
        '1.5': '1.5px',
     },

     borderRadius: {
      '4': '4px',
     },

      spacing: { 
        '2': '2px',
        '10': '10px',
        '18': '18px',
        '19': '19px',
        '52': '52px',
        '60': '60px',
        '65': '65px',
        '68': '68px',
        '98': '98px',
        '100': '100px',
        '120': '120px',
        '122': '122px',
        '125': '125px',
        '140': '140px',
        '150': '150px',
        '224': '224px',
        '233': '233px',
        '290': '290px',
        '310': '310px',
        '350': '350px',
        '383': '383px',
        '476': '476px',
        '1733': '1733px',
        '100dvh': '100dvh',
        '100vw': '100vw',
      },

      lineHeight: {
        '12': '12px',
        '22': '22px',
        '28': '28px',
      },

      screens: {
        'mm': '375px',
        'ml': '425px',
        'mi': '1520px',
        'ma': '925px'
      },

      width: {
        '922': '922px',
        '550': '550px',
        
      },

      height: {
        '89': '89px',
        '1345': '1345px',
        '1000': '1000px',
      },
    },
  },
  plugins: [],
}
