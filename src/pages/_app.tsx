import { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import TagManager from 'react-gtm-module'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'


const tagManagerArgs = {
  gtmId: 'G-WJ87825878'
}

TagManager.initialize(tagManagerArgs)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp