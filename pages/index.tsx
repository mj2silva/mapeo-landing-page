import Head from 'next/head';
import { ReactElement } from 'react';
import AboutUs from '../components/AboutUs';
import CallToAction from '../components/CallToAction';
import Presentation from '../components/Presentation';
import SolutionsMarketing from '../components/SolutionsMarketing';

export default function Home() : ReactElement {
  return (
    <>
      <Head>
        <title>Mapeo</title>
        <script defer src="/animations/animateInViewport.js" />
        <script defer src="/animations/menuResonsive.js" />
      </Head>
      <Presentation />
      <AboutUs />
      <CallToAction />
      <SolutionsMarketing />
    </>
  );
}
