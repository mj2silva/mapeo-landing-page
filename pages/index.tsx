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
import {
  getCustomerStories, getMapeoServices, getPortfolioItems, getStaff,
} from '../lib/firebase';
import { CustomerStorie, MapeoService, StaffMember } from '../lib/types';

export const getStaticProps : GetStaticProps = async () => {
  const staff = await getStaff();
  const portafolioItems = await getPortfolioItems();
  const customerStories = await getCustomerStories();
  const marketingMapeoServices = await getMapeoServices('marketing');
  const personsMapeoServices = await getMapeoServices('colaboradores');
  return {
    props: {
      portafolioItems,
      customerStories,
      marketingMapeoServices,
      personsMapeoServices,
      staff,
    },
  };
};

type Props = {
  portafolioItems: PortfolioItemProps[];
  customerStories: CustomerStorie[];
  marketingMapeoServices: MapeoService[];
  personsMapeoServices: MapeoService[];
  staff: StaffMember[],
};

const onElementInvisibleGenerator = (
  elementName: string, hideFunction: Dispatch<SetStateAction<string>>,
) => (isVisible : boolean) => {
  if (isVisible) hideFunction(elementName);
};

export default function Home(props : Props) : ReactElement {
  const { setCurrentVisible } = usePage();
  const {
    portafolioItems,
    customerStories,
    marketingMapeoServices,
    personsMapeoServices,
    staff,
  } = props;

  return (
    <>
      <Head>
        <title>Mapeo | Marketing basado en personas</title>
        <script defer src="/animations/animateInViewport.js" />
        <script defer src="/animations/menuResonsive.js" />
      </Head>
      <VisibilitySensor onChange={onElementInvisibleGenerator('presentation', setCurrentVisible)}>
        <Presentation staffData={staff} />
      </VisibilitySensor>
      <VisibilitySensor onChange={onElementInvisibleGenerator('nosotros', setCurrentVisible)}>
        <AboutUs />
      </VisibilitySensor>
      <VisibilitySensor onChange={onElementInvisibleGenerator('call-to-action', setCurrentVisible)}>
        <CallToAction />
      </VisibilitySensor>
      <VisibilitySensor onChange={onElementInvisibleGenerator('marketing', setCurrentVisible)}>
        <SolutionsMarketing services={marketingMapeoServices} />
      </VisibilitySensor>
      <VisibilitySensor onChange={onElementInvisibleGenerator('personas', setCurrentVisible)}>
        <SolutionsPersons services={personsMapeoServices} />
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
