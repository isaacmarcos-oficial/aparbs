import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>   
          <meta name="description" content="Há mais de 17 anos no mercado atendendo com qualidade, garantindo eficiência em serviços automotivos." />
          
          <meta name="image" content="/AparbsFront.jpg" />
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
          <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />

          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="APARBS Soluções Automotivas" />
          <meta property="og:description" content="Há mais de 17 anos no mercado atendendo com qualidade, garantindo eficiência em serviços automotivos." />
          <meta property="og:url" content="https://aparbs.com.br" />
          <meta property="og:site_name" content="APARBS Soluções Automotivas" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-WJ87825878">
          </script>

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
