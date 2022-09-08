import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import GoogleTagManager, {
  GoogleTagManagerId,
} from '../partials/GoogleTagManager'
import { googleTagManagerId } from '../utils/gtm'
import { theme } from '../utils/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme.templateTheme}>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
