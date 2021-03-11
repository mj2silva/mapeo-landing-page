import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Dispatch, ReactElement, SetStateAction } from 'react';
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
import { getCustomerStories, getPortfolioItemsWithFirebaseUrl } from '../lib/firebase';
import { CustomerStorie } from '../lib/types';

export const getStaticProps : GetStaticProps = async () => {
  const portafolioItems = await getPortfolioItemsWithFirebaseUrl();
  const customerStories = await getCustomerStories();
  return { props: { portafolioItems, customerStories } };
};

type Props = {
  portafolioItems: PortfolioItemProps[];
  customerStories: CustomerStorie[];
};

const onElementInvisibleGenerator = (
  elementName: string, hideFunction: Dispatch<SetStateAction<string>>,
) => (isVisible : boolean) => {
  if (isVisible) hideFunction(elementName);
};

export default function Home(props : Props) : ReactElement {
  const { setCurrentVisible } = usePage();
  const { portafolioItems, customerStories } = props;

  return (
    <>
      <Head>
        <title>Mapeo</title>
        <script defer src="/animations/animateInViewport.js" />
        <script defer src="/animations/menuResonsive.js" />
      </Head>
      <VisibilitySensor onChange={onElementInvisibleGenerator('presentation', setCurrentVisible)}>
        <Presentation />
      </VisibilitySensor>
      <VisibilitySensor onChange={onElementInvisibleGenerator('nosotros', setCurrentVisible)}>
        <AboutUs />
      </VisibilitySensor>
      <VisibilitySensor onChange={onElementInvisibleGenerator('call-to-action', setCurrentVisible)}>
        <CallToAction />
      </VisibilitySensor>
      <VisibilitySensor onChange={onElementInvisibleGenerator('personas', setCurrentVisible)}>
        <SolutionsPersons />
      </VisibilitySensor>
      <VisibilitySensor onChange={onElementInvisibleGenerator('marketing', setCurrentVisible)}>
        <SolutionsMarketing />
      </VisibilitySensor>
      <VisibilitySensor
        onChange={onElementInvisibleGenerator('portafolio', setCurrentVisible)}
        partialVisibility
        offset={{ bottom: 200, top: 500 }}
      >
        <Portfolio items={portafolioItems} />
      </VisibilitySensor>
      <VisibilitySensor onChange={onElementInvisibleGenerator('historias', setCurrentVisible)}>
        <CustomerStories stories={customerStories} />
      </VisibilitySensor>
      <VisibilitySensor onChange={onElementInvisibleGenerator('tu-primer-mapeo', setCurrentVisible)}>
        <ScheduleMeeting />
      </VisibilitySensor>
    </>
  );
}
