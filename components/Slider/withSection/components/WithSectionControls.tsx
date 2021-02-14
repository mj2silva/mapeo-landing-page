import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import useSlider from '../../hooks/useSlider';

const SliderWithSectionControls : FC = () => {
  const {
    goToNextPage, goToPrevPage, cancelInterval,
  } = useSlider();

  const handleClick = (fn : () => void) : void => {
    cancelInterval();
    fn();
  };

  return (
    <>
      <button onClick={() => handleClick(goToNextPage)} className="soluciones__arrow soluciones__arrow--left" type="button">
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button onClick={() => handleClick(goToPrevPage)} className="soluciones__arrow soluciones__arrow--right" type="button">
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
    </>
  );
};

export default SliderWithSectionControls;
