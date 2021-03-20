import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import useSlider from '../../hooks/useSlider';
import { SliderImageProps } from '../../lib/types';

export type SectionImageProps = {
  id: number,
  className?: string,
  image: SliderImageProps,
}

const ImageColumn : FC<SectionImageProps> = ({ className, image, id } : SectionImageProps) => {
  const [currentClassName, setCurrentClassname] = useState<string>('slider__picture--exiting-no-anim');
  const { currentPage } = useSlider();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (currentPage === id) {
      setCurrentClassname('slider__picture--active');
      if (!isLoaded) setIsLoaded(true);
    } else if (isLoaded) {
      setCurrentClassname('slider__picture--exiting slider__picture--exiting-section');
    }
  }, [currentPage, id, isLoaded]);
  return (
    <div className={`soluciones__image ${className} ${currentClassName}`}>
      <Image
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
