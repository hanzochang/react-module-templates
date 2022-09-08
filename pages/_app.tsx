import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import GoogleTagManager, {
  GoogleTagManagerId,
} from '../partials/GoogleTagManager'
import { googleTagManagerId } from '../utils/gtm'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
