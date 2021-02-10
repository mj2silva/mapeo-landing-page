/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import Layout from '../components/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps } : AppProps) : ReactElement<AppProps> {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
