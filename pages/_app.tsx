/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import Layout from '../components/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps } : AppProps) : ReactElement<AppProps> {
  return (Component.displayName !== 'Error 404') ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : <Component {...pageProps} />;
}

export default MyApp;
