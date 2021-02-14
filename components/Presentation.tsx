import { FC } from 'react';
import Slider from './Slider';
import Section, { GridType } from './common/Section';
import { SliderImageProps } from './Slider/lib/types';

type Props = {
  images?: SliderImageProps[]
}

const defaultProps : Partial<Props> = {
  images: [
    {
      src: '/img/imagen-slider.png',
      width: 500,
      height: 400,
      alt: 'slider 1',
      id: 0,
    },
    {
      src: '/img/imagen-slider.png',
      width: 500,
      height: 400,
      alt: 'slider 2',
      id: 1,
    },
    {
      src: '/img/imagen-slider.png',
      width: 500,
      height: 400,
      alt: 'slider 3',
      id: 2,
    },
  ],
};

const Presentation : FC<Props> = (props : Props) => {
  const { images } = props;
  return (
    <Section
      gridType={GridType.reversable}
      className="presentation"
      firstColumn={(
        <div className="presentation__call-to-action">
          <div className="presentation__message">
            <span className="presentation__message--emphasis">
              ¡CONQUISTA
              {' '}
            </span>
            MÁS CLIENTES Y COLABORADORES!
          </div>
          <a href="#conversemos" className="button presentation__button">Conversemos</a>
        </div>
      )}
      secondColumn={(
        <Slider imageList={images} className="presentation__slider" />
        )}
    />
  );
};

Presentation.defaultProps = defaultProps;

export default Presentation;
