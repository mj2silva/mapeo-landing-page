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
import { firestore } from '../lib/firebase';

export const getStaticProps : GetStaticProps = async () => {
  const portafolioRef = firestore.collection('portafolio');
  const data = await portafolioRef.get();
  const portafolioItems = [];
  data.forEach((item) => {
    const itemData = item.data();
    portafolioItems.push({
      name: itemData.nombre,
      description: itemData.descripcion || '',
      imageUrl: itemData.imagenUrl,
    });
  });
  return { props: { portafolioItems } };
};

type Props = {
  portafolioItems: PortfolioItemProps[];
};

const onElementInvisibleGenerator = (
  elementName: string, hideFunction: Dispatch<SetStateAction<string>>,
) => (isVisible : boolean) => {
  if (isVisible) hideFunction(elementName);
};

export default function Home(props : Props) : ReactElement {
  const { setCurrentVisible } = usePage();
  const { portafolioItems } = props;

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
        <CustomerStories />
      </VisibilitySensor>
      <VisibilitySensor onChange={onElementInvisibleGenerator('tu-primer-mapeo', setCurrentVisible)}>
        <ScheduleMeeting />
      </VisibilitySensor>
    </>
  );
}
