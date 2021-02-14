import {
  FC, ReactNode,
} from 'react';
import ColumnSliderElement from './ColumnSliderElement';

export type ColumnSliderProps = {
  elements: ReactNode[],
  className?: string,
  onExitClassName?: string,
}

const ColumnSlider : FC<ColumnSliderProps> = ({
  elements, className, onExitClassName,
} : ColumnSliderProps) => (
  <>
    { elements.map((element, index) => (
      <ColumnSliderElement
        key={`col-sli-${index + 1}`}
        pageNumber={index}
        sliderInClassName={className}
        sliderOutClassName={onExitClassName}
      >
        { element }
      </ColumnSliderElement>
    )) }
  </>
);

export default ColumnSlider;
