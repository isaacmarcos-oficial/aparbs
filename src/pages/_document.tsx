import Document, { Head, Html, Main, NextScript } from 'next/document'
import GoogleAnalytics from '../components/GoogleAnalytics'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>             
          <meta name="description" content="Há mais de 25 anos no mercado atendendo com qualidade, garantindo eficiência em serviços automotivos em Porteirinha e Riacho dos Machados/MG." />
          <meta name="meta keywords" content="Oficina mecânica, Loja de peças, Autopeças, Serviços automotivos, Reparo de carros, Troca de óleo, Mecânico de automóveis, Suspensão de carro, Freios para carros, Escapamentos, Revisão automotiva, Diagnóstico de problemas mecânicos" />
          
          <meta name="image" content="/AparbsFront.jpg" />
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
          <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />

          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="APARBS Soluções Automotivas" />
          <meta property="og:description" content="Há mais de 17 anos no mercado atendendo com qualidade, garantindo eficiência em serviços automotivos." />
          <meta property="og:url" content="https://aparbs.com.br" />
          <meta property="og:site_name" content="APARBS Soluções Automotivas" />

          <meta name="geo.position" content="-15.753615; -43.031137" />
          <meta name="geo.placename" content="Porteirinha, MG" />
          <meta name="geo.region" content="BR" />


          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-WJ87825878"
          >
          </script>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> 
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" />
          <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Poppins:wght@200;400;700&display=swap" rel="stylesheet"/>
          <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
        </Head>
        <GoogleAnalytics/>
        <body>
          <title>APARBS Soluções Automotivas</title>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
