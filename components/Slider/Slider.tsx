import { FC } from 'react';
import SliderComponent from './components/SliderComponent';
import SliderProvider from './components/SliderContext';
import { SliderProps } from './lib/types';

const Slider : FC<SliderProps> = (props: SliderProps) => {
  const { className, imageList } = props;
  return (
    <SliderProvider delay={3000} transitionAuto>
      <SliderComponent className={className} imageList={imageList} />
    </SliderProvider>
  );
};

export default Slider;
