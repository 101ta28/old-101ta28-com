/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const myLightTheme = {
  dark: false,
  colors: {
    primary: '#368ec2',
    secondary: '#26a69a',
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myLightTheme',
    themes: {
      myLightTheme,
      // light: {
      //   colors: {
      //     primary: '#1867C0',
      //     secondary: '#5CBBF6',
      //   },
      // },
    },
  },
})
