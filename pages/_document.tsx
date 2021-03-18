import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';
import { ReactElement } from 'react';

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() : ReactElement {
    return (
      <Html lang="es">
        <Head>
          <script defer src="/animations/menuResonsive.js" />
          <meta name="description" content="Marketing & People Management aplicando ejes claves para el desarrollo empresarial como Business Intelligence (BI) y Business Management (BM). El producto de fusionar estos campos fue la formación de la consigna: Por marcas más humanas y con resultados inmediatos de gran impacto" />
          <meta property="og:image" content="/img/mapeo-sharing.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:title" content="MAPEO: Soluciones a medida para tu empresa" />
          <meta property="og:description" content="Creamos soluciones que desafían lo tradicional, humanizando marcas que generen resultados de gran impacto" />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
