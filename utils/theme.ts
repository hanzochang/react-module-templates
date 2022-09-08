import { extendTheme, theme as defaultTheme } from '@chakra-ui/react'

export const templateTheme = extendTheme({
  textStyles: {
    logo: {
      fontSize: { base: '18px', md: '24px' },
      fontWeight: 'bold',
      lineHeight: '100%',
      letterSpacing: '',
    },
  },
  sizes: {
    ...defaultTheme.sizes,
    '9xl': '105rem', // 1680px
    '10xl': '120rem', // 1920px
  },
  space: {
    ...defaultTheme.space,
  },
  breakpoints: {
    sm: '30rem', // 480px
    md: '48rem', // 768px
    lg: '62rem', // 992px
    '2lg': '75rem', // 1152px
    xl: '80rem', // 1280px
    '2xl': '93rem', // 1440px + (24 * 2)px
    '3xl': '96rem', // 1536px
    '4xl': '108rem', // 1680px + (24 * 2)px
  },
})

export const theme = { templateTheme }
