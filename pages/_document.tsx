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
          <meta property="og:image" content="/img/sharing-mapeo.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1904" />
          <meta property="og:image:height" content="942" />
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
