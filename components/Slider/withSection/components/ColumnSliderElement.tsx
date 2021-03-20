import {
  FC, ReactNode, useEffect, useState,
} from 'react';
import useSlider from '../../hooks/useSlider';

export type ColumnSliderProps = {
  pageNumber: number,
  sliderInClassName: string,
  sliderOutClassName: string,
  children: ReactNode,
  firstInClassName: string,
}

const ColumnSliderElement : FC<ColumnSliderProps> = ({
  pageNumber, sliderInClassName, sliderOutClassName, children, firstInClassName,
} : ColumnSliderProps) => {
  const [currentClassName, setCurrentClassName] = useState<string>(firstInClassName);
  const { currentPage } = useSlider();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (pageNumber === currentPage) {
      setCurrentClassName(sliderInClassName);
      if (!isLoaded) setIsLoaded(true);
    } else if (isLoaded) {
      setCurrentClassName(sliderOutClassName);
    }
  }, [pageNumber, currentPage, sliderInClassName, sliderOutClassName, isLoaded]);

  return (
    <div className={currentClassName}>
      { children }
    </div>
  );
};

export default ColumnSliderElement;
