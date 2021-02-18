import Head from 'next/head';
import { ReactElement } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import AboutUs from '../components/AboutUs';
import CallToAction from '../components/CallToAction';
import CustomerStories from '../components/CustomerStories';
import Portfolio from '../components/Portfolio';
import { PortfolioItemProps } from '../components/PortfolioItem';
import Presentation from '../components/Presentation';
import ScheduleMeeting from '../components/ScheduleMeeting';
import SolutionsMarketing from '../components/SolutionsMarketing';
import SolutionsPersons from '../components/SolutionsPersons';
import usePage from '../hooks/usePage';

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
  const { setCurrentVisible } = usePage();
  const onPresentationVisible = (isVisible) => {
    if (isVisible) setCurrentVisible('presentation');
  };
  const onAboutUsVisible = (isVisible) => {
    if (isVisible) setCurrentVisible('nosotros');
  };
  const onCallToActionVisible = (isVisible) => {
    if (isVisible) setCurrentVisible('call-to-action');
  };
  const onSolutionsPersonsVisible = (isVisible) => {
    if (isVisible) setCurrentVisible('personas');
  };
  const onSolutionsMarketingVisible = (isVisible) => {
    if (isVisible) setCurrentVisible('marketing');
  };
  const onPortfolioVisible = (isVisible) => {
    if (isVisible) setCurrentVisible('portafolio');
  };
  const onCustomerStoriesVisible = (isVisible) => {
    if (isVisible) setCurrentVisible('historias');
  };
  const onScheduleMeetingVisbli = (isVisible) => {
    if (isVisible) setCurrentVisible('tu-primer-mapeo');
  };
  return (
    <>
      <Head>
        <title>Mapeo</title>
        <script defer src="/animations/animateInViewport.js" />
        <script defer src="/animations/menuResonsive.js" />
      </Head>
      <VisibilitySensor onChange={onPresentationVisible}>
        <Presentation />
      </VisibilitySensor>
      <VisibilitySensor onChange={onAboutUsVisible}>
        <AboutUs />
      </VisibilitySensor>
      <VisibilitySensor onChange={onCallToActionVisible}>
        <CallToAction />
      </VisibilitySensor>
      <VisibilitySensor onChange={onSolutionsPersonsVisible}>
        <SolutionsPersons />
      </VisibilitySensor>
      <VisibilitySensor onChange={onSolutionsMarketingVisible}>
        <SolutionsMarketing />
      </VisibilitySensor>
      <VisibilitySensor
        onChange={onPortfolioVisible}
        partialVisibility
        offset={{ bottom: 200, top: 500 }}
      >
        <Portfolio items={portfolioItems} />
      </VisibilitySensor>
      <VisibilitySensor onChange={onCustomerStoriesVisible}>
        <CustomerStories />
      </VisibilitySensor>
      <VisibilitySensor onChange={onScheduleMeetingVisbli}>
        <ScheduleMeeting />
      </VisibilitySensor>
    </>
  );
}
