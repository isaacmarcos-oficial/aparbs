import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import '../styles/globals.css'; // Importe o arquivo CSS global do Tailwind

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>APARBS Soluções Automotivas</title>
      </Head>
      
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp