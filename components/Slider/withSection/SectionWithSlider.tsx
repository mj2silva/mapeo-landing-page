import { FC, ReactNode } from 'react';
import { GridType } from '../../common/Section';
import SliderProvider from '../components/SliderContext';
import SectionWithSliderComponent from './components/SectionWithSliderComponent';

export type SectionWithSliderProps = {
  className: string,
  firstColumnElements: ReactNode[],
  secondColumnElements: ReactNode[],
  titleNode: ReactNode,
  targetId?: string,
  controlsComponent?: ReactNode,
  gridType?: GridType,
  sliderInClassName?: string,
  sliderOutClassName?: string,
  firstInClassName?: string,
}

const SectionWithSlider : FC<SectionWithSliderProps> = (props: SectionWithSliderProps) => {
  const {
    className,
    firstColumnElements,
    secondColumnElements,
    titleNode,
    targetId,
    controlsComponent,
    gridType,
    sliderInClassName,
    sliderOutClassName,
    firstInClassName,
  } = props;
  return (
    <SliderProvider delay={4000} transitionAuto>
      <SectionWithSliderComponent
        className={className}
        firstColumnElements={firstColumnElements}
        secondColumnElements={secondColumnElements}
        titleComponent={titleNode}
        targetId={targetId}
        controlsComponent={controlsComponent}
        gridType={gridType || GridType.normal}
        sliderInClassName={sliderInClassName}
        sliderOutClassName={sliderOutClassName}
        firstInClassName={firstInClassName}
      />
    </SliderProvider>
  );
};

export default SectionWithSlider;
