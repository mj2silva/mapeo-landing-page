import { FC, useEffect } from 'react';
import useSlider from '../hooks/useSlider';
import { SliderProps } from '../lib/types';
import SliderControls from './SliderControls';
import SliderImages from './SliderImages';

const SliderComponent : FC<SliderProps> = (props : SliderProps) => {
  const { imageList, className } = props;
  const { setTotalPages } = useSlider();

  useEffect(() => {
    setTotalPages(imageList.length);
  }, [imageList, setTotalPages]);
  return (
    <div className={`slider ${className}`}>
      <SliderImages imageList={imageList} />
      <div id="controlContainer" className="slider__control-box">
        <SliderControls />
      </div>
    </div>
  );
};

export default SliderComponent;
