import Head from 'next/head';
import { ReactElement } from 'react';
import AboutUs from '../components/AboutUs';
import CallToAction from '../components/CallToAction';
import Portfolio from '../components/Portfolio';
import { PortfolioItemProps } from '../components/PortfolioItem';
import Presentation from '../components/Presentation';
import ScheduleMeeting from '../components/ScheduleMeeting';
import SolutionsMarketing from '../components/SolutionsMarketing';
import SolutionsPersons from '../components/SolutionsPersons';

const portfolioItems : PortfolioItemProps[] = [
  {
    name: 'MASSA',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio1.png',
  },
  {
    name: 'BIOGOODS',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio2.png',
  },
  {
    name: 'PAWRI',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio3.png',
  },
  {
    name: 'ESPERÁNDOTE',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio4.png',
  },
  {
    name: 'TANMA',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio5.png',
  },
  {
    name: 'TAKAY',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio6.png',
  },
  {
    name: 'SIARCOS',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio7.png',
  },
  {
    name: 'AMARILLO STUDIO',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio8.png',
  },
];

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
      <SolutionsPersons />
      <SolutionsMarketing />
      <Portfolio items={portfolioItems} />
      <ScheduleMeeting />
    </>
  );
}
