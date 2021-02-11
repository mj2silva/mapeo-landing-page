import {
  FC, ReactElement, useEffect, useState,
} from 'react';
import useSlider from '../hooks/useSlider';
import SliderControl from './SliderControl';

const renderControls = (totalPages: number, handleClick) : ReactElement[] => {
  const renderedControls = [];
  for (let i = 0; i < totalPages; i += 1) {
    renderedControls.push(
      <SliderControl key={`slider-control-${i}`} id={i} onClick={handleClick} />,
    );
  }
  return renderedControls;
};

type Props = {
  delay: number,
}

const SliderControls : FC<Props> = ({ delay } : Props) => {
  const [controlTimeout, setControlTimeout] = useState(null);
  const [activeTimeout, setActiveTimeout] = useState(false);

  const {
    totalPages, handleNext, currentPage,
  } = useSlider();

  useEffect(() => {
    if (totalPages > 0 && !activeTimeout) {
      setActiveTimeout(true);
      const control = setTimeout(() => {
        handleNext();
        setActiveTimeout(false);
      }, delay);
      setControlTimeout(control);
    }
  }, [currentPage, totalPages, handleNext, activeTimeout, delay]);

  const handleClick = () : void => {
    clearTimeout(controlTimeout);
    setActiveTimeout(false);
  };

  return (
    <div id="controlContainer" className="slider__control-box">
      {renderControls(totalPages, handleClick)}
    </div>
  );
};

export default SliderControls;
