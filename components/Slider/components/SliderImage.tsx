import { FC, useEffect, useState } from 'react';
import { SliderImageProps } from '../lib/types';
import useSlider from '../hooks/useSlider';
import FirebaseImage from '../../FirebaseImage';

const SliderImage : FC<SliderImageProps> = (props : SliderImageProps) => {
  const {
    src, alt, width, height, id,
  } = props;
  const [className, setClassName] = useState('');
  const { currentPage } = useSlider();

  useEffect(() => {
    if (currentPage === id) setClassName('slider__picture--active');
    else setClassName('slider__picture--exiting');
  }, [currentPage, id]);
  return (
    <li key={id || src} className={`slider__picture ${className}`}>
      <FirebaseImage src={src} alt={alt} width={width} height={height} />
    </li>
  );
};

export default SliderImage;
