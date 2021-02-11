import { FC } from 'react';
import { SliderProps } from '../lib/types';
import SliderImage from './SliderImage';

const SliderImages : FC<SliderProps> = (props : SliderProps) => {
  const { imageList } = props;

  return (
    <ul className="slider__container" id="pictureContainer">
      { imageList.map((image) => (
        <SliderImage
          key={`slider-image-${image.id}`}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          id={image.id}
        />
      ))}
    </ul>
  );
};

export default SliderImages;
