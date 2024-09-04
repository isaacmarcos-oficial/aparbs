import { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>APARBS Soluções Automotivas</title>
      </Head>
      
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  )
}

export default MyApp