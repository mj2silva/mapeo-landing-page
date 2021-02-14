import {
  FC, ReactNode, useEffect, useState,
} from 'react';
import Section, { GridType } from '../../../common/Section';
import ListOfSolutions from '../../components/ListOfSolutions';
import useSlider from '../../hooks/useSlider';
import { SliderImageProps } from '../../lib/types';
import SliderWithSectionControls from './WithSectionControls';

type SliderSectionProps = {
  id: number,
  serviceTitle: ReactNode,
  list: string[],
  image: SliderImageProps,
}

const sliderContent : SliderSectionProps[] = [
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

const SectionOfSlider : FC<SliderSectionProps> = (props: SliderSectionProps) => {
  const {
    id, serviceTitle, list, image,
  } = props;
  const [className, setClassName] = useState('');
  const { currentPage } = useSlider();
  useEffect(() => {
    if (currentPage === id) setClassName('slider__picture--active');
    else setClassName('slider__picture--exiting');
  }, [currentPage, id]);
  return (
    <Section
      className="soluciones soluciones--skyblue"
      gridType={GridType.reversableWithTitle}
      title={(
        <div className="soluciones__title">
          <h1>
            Soluciones para conquistar
            <span>&#183; a tus clientes &#183;</span>
          </h1>
        </div>
      )}
      firstColumn={(
        <div className={`soluciones__list ${className}`}>
          <div className="soluciones__list-title ">
            <h2>{serviceTitle}</h2>
          </div>
          <ListOfSolutions items={list} className="soluciones__list-items" />
          <a href="#agendar" className="button soluciones__button-agendar">Agendar una asesoría gratuita</a>
        </div>
    )}
      secondColumn={(
        <div className={`soluciones__image ${className}`}>
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
          />
        </div>
    )}
      sliderControls={<SliderWithSectionControls />}
    />
  );
};

const SliderWithSectionComponent : FC = () => {
  const { currentPage, setTotalPages } = useSlider();
  const [currentSlider, setCurrentSlider] = useState<SliderSectionProps>(null);

  useEffect(() => {
    setCurrentSlider(sliderContent[currentPage]);
  }, [currentPage]);

  useEffect(() => {
    setTotalPages(sliderContent.length);
  }, [setTotalPages]);

  return (currentSlider) ? (
    <SectionOfSlider
      key={`section-ws-${currentPage}`}
      id={currentSlider.id}
      image={currentSlider.image}
      serviceTitle={currentSlider.serviceTitle}
      list={currentSlider.list}
    />
  ) : null;
};

export default SliderWithSectionComponent;
