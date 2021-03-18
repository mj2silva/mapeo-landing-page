import {
  useContext,
} from 'react';
import { SliderContext } from '../components/SliderContext';
import { SliderContextHookType } from '../lib/types';

const useSlider = () : SliderContextHookType => {
  const {
    goToNextPage,
    goToPage,
    goToPrevPage,
    currentPage,
    totalPages,
    setTotalPages,
    cancelInterval,
    startInterval,
  } = useContext(SliderContext);

  return {
    goToNextPage,
    goToPage,
    goToPrevPage,
    currentPage,
    totalPages,
    setTotalPages,
    cancelInterval,
    startInterval,
  };
};

export default useSlider;
