import {
  FC, MouseEvent, useEffect, useState,
} from 'react';
import useSlider from '../hooks/useSlider';

type SliderControlProps = {
  id: number,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
}

const defaultProps : Partial<SliderControlProps> = {
  onClick: null,
};

const SliderControl:FC<SliderControlProps> = ({ id, onClick }:SliderControlProps) => {
  const [className, setClassName] = useState(null);
  const { currentPage, goToPage, cancelInterval } = useSlider();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) : void => {
    if (onClick) onClick(event);
    cancelInterval();
    goToPage(id);
  };
  useEffect(() => {
    if (currentPage === id) setClassName('slider__control--active');
    else setClassName(null);
  }, [currentPage, id]);

  return <button onClick={handleClick} type="button" className={`slider__control ${className}`} />;
};

SliderControl.defaultProps = defaultProps;

export default SliderControl;
