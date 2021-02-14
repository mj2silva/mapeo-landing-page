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
  } = useContext(SliderContext);

  return {
    goToNextPage,
    goToPage,
    goToPrevPage,
    currentPage,
    totalPages,
    setTotalPages,
    cancelInterval,
  };
};

export default useSlider;
