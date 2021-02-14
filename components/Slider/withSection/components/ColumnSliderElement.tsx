import {
  FC, ReactNode, useEffect, useState,
} from 'react';
import useSlider from '../../hooks/useSlider';

export type ColumnSliderProps = {
  pageNumber: number,
  sliderInClassName: string,
  sliderOutClassName: string,
  children: ReactNode
}

const ColumnSliderElement : FC<ColumnSliderProps> = ({
  pageNumber, sliderInClassName, sliderOutClassName, children,
} : ColumnSliderProps) => {
  const [currentClassName, setCurrentClassName] = useState<string>('');
  const { currentPage } = useSlider();
  useEffect(() => {
    if (pageNumber === currentPage) setCurrentClassName(sliderInClassName);
    else setCurrentClassName(sliderOutClassName);
  }, [pageNumber, currentPage, sliderInClassName, sliderOutClassName]);

  return (
    <div className={currentClassName}>
      { children }
    </div>
  );
};

export default ColumnSliderElement;
