import {
  FC, ReactElement,
} from 'react';
import useSlider from '../hooks/useSlider';
import SliderControl from './SliderControl';

const renderControls = (totalPages: number) : ReactElement[] => {
  const renderedControls = [];
  for (let i = 0; i < totalPages; i += 1) {
    renderedControls.push(
      <SliderControl key={`slider-control-${i}`} id={i} />,
    );
  }
  return renderedControls;
};

const SliderControls : FC = () => {
  const {
    totalPages,
  } = useSlider();

  return (
    <div id="controlContainer" className="slider__control-box">
      {renderControls(totalPages)}
    </div>
  );
};

export default SliderControls;
