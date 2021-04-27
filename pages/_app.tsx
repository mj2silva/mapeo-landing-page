/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { ReactElement, useEffect } from 'react';
import Layout from '../components/Layout';

import { analitycs } from '../lib/firebase';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps } : AppProps) : ReactElement<AppProps> {
  useEffect(() => {
    analitycs();
  }, []);
  return (Component.displayName !== 'Error 404') ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : <Component {...pageProps} />;
}

export default MyApp;
