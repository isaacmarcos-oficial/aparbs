import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme ({
  colors:{
    primary: '#D90000',
    secundary: '#0D1214',
    terciary: '#EDF6F9',
    
    gray: {
      900: "#0D1214",
    },
  },

  backgroundImage: {
    app: "url(/Aparbs Site.png)"
  },

  fonts:{
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif'
  },

	styles: {
    global: {
      body: {
        bg: 'White',
        color: 'secundary'
      },
      ".swiper-button-next": {
        right: [8, 10],
        _after: {
          color: "#d90000",
        }
      },
      ".swiper-button-prev": {
        left: [8, 10],
        _after: {
          color: "#d90000"
        }
      },
      ".swiper-pagination-bullet": {
        w: [2, 4],
        h: [2, 4],
        bg: "#0D1214",
        opacity: 0.9
      },
      ".swiper-pagination-bullet-active": {
        bg: "#d90000"
      }
      
    }
  }
})