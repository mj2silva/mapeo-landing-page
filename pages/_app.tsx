/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { ReactElement } from 'react';

import '../styles/globals.css';

function MyApp({ Component, pageProps } : AppProps) : ReactElement<AppProps> {
  return <Component {...pageProps} />;
}

export default MyApp;
