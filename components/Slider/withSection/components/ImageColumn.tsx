import { FC, useEffect, useState } from 'react';
import FirebaseImage from '../../../FirebaseImage';
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
      <FirebaseImage
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        objectFit="contain"
      />
    </div>
  );
};

export default ImageColumn;
