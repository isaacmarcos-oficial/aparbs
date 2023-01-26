import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>

          <title>APARBS Soluções Automotivas</title>
          
          <meta name="description" content="Há mais de 17 anos no mercado atendendo com qualidade, garantindo eficiência em serviços automotivos." />
          
          <meta name="image" content="/AparbsFront.jpg" />
          <meta name="robots" content="follow" />
          <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1"></meta>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> 
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" />

          <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />

          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
