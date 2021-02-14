import { FC } from 'react';
import SliderProvider from '../components/SliderContext';
import { SliderProps } from '../lib/types';
import SliderWithSectionComponent from './components/SliderWithSectionComponent';

const SliderWithSection : FC<SliderProps> = (props: SliderProps) => {
  const { className, list } = props;
  return (
    <SliderProvider delay={3000} transitionAuto>
      <SliderWithSectionComponent />
    </SliderProvider>
  );
};

export default SliderWithSection;
