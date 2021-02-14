import { FC } from 'react';
import SliderWithSection from './Slider/withSection';
import { SectionOfSliderProps } from './Slider/withSection/components/SliderWithSectionComponent';

const sliderContent : SectionOfSliderProps[] = [
  {
    id: 0,
    serviceTitle: 'Identidad de marca',
    list: [
      'Ideal para comunicar de forma gráfica la propuesta de valor de tu empresa.',
      'Esto permitirá diferenciar a tu marca de la competencia y conectar gráficamente con tu cliente.',
      'Es el primer paso para lograr posicionamiento en el mercado.',
    ],
    image: {
      src: '/img/soluciones.png',
      alt: 'soluciones',
      width: 600,
    },
    listClassName: 'soluciones__list',
  },
  {
    id: 1,
    serviceTitle: 'Identidad de marca 2',
    list: [
      'Ideal para comunicar de forma gráfica la propuesta de valor de tu empresa.',
      'Esto permitirá diferenciar a tu marca de la competencia y conectar gráficamente con tu cliente.',
      'Es el primer paso para lograr posicionamiento en el mercado.',
    ],
    image: {
      src: '/img/soluciones.png',
      alt: 'soluciones2',
      width: 600,
    },
  },
];

const SolutionsMarketing : FC = () => (
  <SliderWithSection
    sliderContentList={sliderContent}
    className="soluciones soluciones--purple"
    titleNode={(
      <div className="soluciones__title appear_left">
        <h1>
          Soluciones para conquistar
          {' '}
          <span>&#183; a tus colaboradores &#183;</span>
        </h1>
      </div>
    )}
    targetId="personas"
  />
);

export default SolutionsMarketing;
