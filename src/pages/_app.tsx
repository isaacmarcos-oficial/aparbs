import { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  )
}

export default MyApp