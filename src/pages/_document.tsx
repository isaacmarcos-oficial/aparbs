import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <!-- Google tag (gtag.js) -->
           <script async src="https://www.googletagmanager.com/gtag/js?id=G-TM8PG5RFXH"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-TM8PG5RFXH');
          </script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> 
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" />

          <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />

          <meta name="description" content="Há mais de 17 anos no mercado atendendo com qualidade, garantindo eficiência em serviços automotivos." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
