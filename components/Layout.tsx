import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import PageProvider from './PageProvider';

type Props = {
  children: ReactNode,
};

const Layout : FC<Props> = ({ children } : Props) => (
  <PageProvider>
    <Head>
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      <meta name="description" content="Marketing & People Management aplicando ejes claves para el desarrollo empresarial como Business Intelligence (BI) y Business Management (BM). El producto de fusionar estos campos fue la formación de la consigna: Por marcas más humanas y con resultados inmediatos de gran impacto. Trujillo - Perú" />
      <meta property="og:image" content="https://mapeo.pe/img/mapeo-sharing.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:title" content="MAPEO: Soluciones a medida para tu empresa" />
      <meta property="og:description" content="Creamos soluciones que desafían lo tradicional, humanizando marcas que generen resultados de gran impacto" />
      <meta charSet="utf-8" />
    </Head>
    <Header />
    <main id="app">
      { children }
    </main>
    <Footer />
  </PageProvider>
);

export default Layout;
