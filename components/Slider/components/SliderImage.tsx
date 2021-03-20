import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { SliderImageProps } from '../lib/types';
import useSlider from '../hooks/useSlider';

const SliderImage : FC<SliderImageProps> = (props : SliderImageProps) => {
  const {
    src, alt, width, height, id,
  } = props;
  const [className, setClassName] = useState('slider__picture--exiting-no-anim');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { currentPage } = useSlider();

  useEffect(() => {
    if (currentPage === id) {
      setClassName('slider__picture--active');
      if (!isLoaded) setIsLoaded(true);
    } else if (isLoaded) {
      setClassName('slider__picture--exiting');
    }
  }, [currentPage, id, isLoaded]);

  return (
    <li key={id || src} className={`slider__picture ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </li>
  );
};

export default SliderImage;
