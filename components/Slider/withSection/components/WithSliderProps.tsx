import {
  Component,
  ReactElement, useEffect, useState,
} from 'react';
import useSlider from '../../hooks/useSlider';

const withSliderProps = (
  XComponent : Component,
  id : number,
  className : string,
  onExitClassName : string,
) => () => {
  const [currentClassName, setCurrrenclassName] = useState<string>('');
  const { currentPage } = useSlider();

  useEffect(() => {
    if (currentPage === id) setCurrrenclassName(className || 'slider__picture--active');
    else setCurrrenclassName(onExitClassName || 'slider__picture--exiting');
  }, [currentPage]);
  return (<XComponent className={currentClassName} />);
};

export default withSliderProps;
