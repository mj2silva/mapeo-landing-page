import Image from 'next/image';
import {
  FC, ReactNode, useEffect, useState,
} from 'react';
import { GridType } from './common/Section';
import useSlider from './Slider/hooks/useSlider';
import { SectionWithSlider } from './Slider/withSection';

export interface CustomerSorie {
  name: string,
  position: string,
  company: string,
  message: string,
  photoUrl: string
}

const customerStoriesData : CustomerSorie[] = [
  {
    name: 'Frank Ponce',
    position: 'GerenteComercial',
    company: 'International Consumables',
    message: 'Muy organizados y puntuales en su trabajo',
    photoUrl: '/img/cliente.png',
  },
  {
    name: 'Frank Ponce',
    position: 'GerenteComercial',
    company: 'International Consumables',
    message: 'Muy organizados y puntuales en su trabajo',
    photoUrl: '/img/circulo.png',
  },
  {
    name: 'Frank Ponce',
    position: 'GerenteComercial',
    company: 'International Consumables',
    message: 'Muy organizados y puntuales en su trabajo',
    photoUrl: '/img/marca-portafolio1.png',
  },
];

const renderFirstColumn = (customerStories : CustomerSorie[]) : ReactNode[] => (
  customerStories.map((storie) => (
    <div className="customer-stories__picture">
      <Image
        src={storie.photoUrl}
        alt={storie.name}
        width="500"
        height="500"
      />
    </div>
  ))
);

const renderSecondColumn = (customerStories : CustomerSorie[]) : ReactNode[] => (
  customerStories.map((storie) => (
    <div className="customer-stories__content">
      <div className="customer-stories__content-title">
        <h2>{ storie.message }</h2>
      </div>
      <div className="customer-stories__content-data">
        <h2>{ storie.name }</h2>
        <h3>{ storie.position }</h3>
        <h3>{ storie.company }</h3>
      </div>
    </div>
  ))
);

const CustomerStoriesControl : FC<{ pageNumber: number}> = (
  { pageNumber } : { pageNumber: number},
) => {
  const { goToPage, currentPage, cancelInterval } = useSlider();
  const [statusClassName, setStatusClassName] = useState('');

  useEffect(() => {
    if (pageNumber === currentPage) setStatusClassName('customer-stories__slider-control-active');
    else setStatusClassName('');
  }, [pageNumber, currentPage]);

  const handleClick = () : void => {
    goToPage(pageNumber);
    cancelInterval();
  };

  return (
    <button type="button" onClick={handleClick} className={`customer-stories__slider-control ${statusClassName}`} />
  );
};

const renderControls = (totalPages : number) : ReactNode[] => {
  const controls : ReactNode[] = [];
  for (let index = 0; index < totalPages; index += 1) {
    controls.push(<CustomerStoriesControl key={`cs-control-${index}`} pageNumber={index} />);
  }
  return controls;
};

export const CustomerStoriesControls : FC = () => {
  const { totalPages } = useSlider();
  return (
    <div className="customer-stories__slider-control-box">
      {renderControls(totalPages)}
    </div>
  );
};

const CustomerStories : FC = () => (
  <SectionWithSlider
    gridType={GridType.withTitle}
    firstColumnElements={renderFirstColumn(customerStoriesData)}
    secondColumnElements={renderSecondColumn(customerStoriesData)}
    className="customer-stories customer-stories--purple"
    sliderInClassName="slider__picture--active"
    sliderOutClassName="slider__picture--exiting slider__picture--exiting-section"
    targetId="historias"
    titleNode={(
      <div className="customer-stories__title">
        <h1>
          Nuestros clientes
          <span>&#183; conquistadores &#183;</span>
        </h1>
      </div>
    )}
    controlsComponent={<CustomerStoriesControls />}
  />
);

export default CustomerStories;
