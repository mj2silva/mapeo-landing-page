import { FC, useEffect, useState } from 'react';
import useSlider from '../hooks/useSlider';

type SliderControlProps = {
  id: number,
  onClick,
}

const SliderControl:FC<SliderControlProps> = ({ id, onClick }:SliderControlProps) => {
  const [className, setClassName] = useState(null);
  const { currentPage, handlePageChange } = useSlider();

  const handleClick = (event) : void => {
    onClick(event);
    handlePageChange(id);
  };
  useEffect(() => {
    if (currentPage === id) setClassName('slider__control--active');
    else setClassName(null);
  }, [currentPage, id]);

  return <button onClick={handleClick} type="button" className={`slider__control ${className}`} />;
};

export default SliderControl;
