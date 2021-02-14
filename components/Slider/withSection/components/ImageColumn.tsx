import { FC, useEffect, useState } from 'react';
import useSlider from '../../hooks/useSlider';
import { SliderImageProps } from '../../lib/types';

export type SectionImageProps = {
  id: number,
  className?: string,
  image: SliderImageProps,
}

const ImageColumn : FC<SectionImageProps> = ({ className, image, id } : SectionImageProps) => {
  const [currentClassName, setCurrentClassname] = useState<string>('');
  const { currentPage } = useSlider();
  useEffect(() => {
    if (currentPage === id) setCurrentClassname('slider__picture--active');
    else setCurrentClassname('slider__picture--exiting slider__picture--exiting-section');
  }, [currentPage, id]);
  return (
    <div className={`soluciones__image ${className} ${currentClassName}`}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
      />
    </div>
  );
};

export default ImageColumn;
