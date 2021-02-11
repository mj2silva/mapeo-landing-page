import { FC } from 'react';
import SliderComponent from './components/SliderComponent';
import SliderProvider from './components/SliderContext';
import { SliderProps } from './lib/types';

const Slider : FC<SliderProps> = (props: SliderProps) => {
  const { className, imageList } = props;
  return (
    <SliderProvider>
      <SliderComponent className={className} imageList={imageList} delay={3000} />
    </SliderProvider>
  );
};

export default Slider;
