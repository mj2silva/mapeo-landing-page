import { FC, ReactNode } from 'react';
import SliderProvider from '../components/SliderContext';
import SliderWithSectionComponent, { SectionOfSliderProps } from './components/SliderWithSectionComponent';

export type SliderWithSectionProps = {
  className: string,
  sliderContentList: SectionOfSliderProps[],
  titleNode: ReactNode
}

const SliderWithSection : FC<SliderWithSectionProps> = (props: SliderWithSectionProps) => {
  const { className, sliderContentList, titleNode } = props;
  return (
    <SliderProvider delay={3000} transitionAuto>
      <SliderWithSectionComponent
        className={className}
        sliderContent={sliderContentList}
        title={titleNode}
      />
    </SliderProvider>
  );
};

export default SliderWithSection;
