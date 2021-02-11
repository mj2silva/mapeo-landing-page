import { SliderHookType } from '../lib/types';
import useSliderContext from './useSliderContext';

const useSlider = () : SliderHookType => {
  const {
    goToNextPage,
    goToPage,
    goToPrevPage,
    currentPage,
    totalPages,
    setTotalPages,
  } = useSliderContext();

  const handleNext = () : void => {
    if (currentPage + 1 >= totalPages) goToPage(0);
    else goToNextPage();
  };

  const handlePrev = () : void => {
    if (currentPage <= 0) goToPrevPage();
    else goToPage(totalPages - 1);
  };

  const handlePageChange = (pageNumber: number) : void => {
    if (pageNumber >= 0 && pageNumber < totalPages) goToPage(pageNumber);
  };

  return {
    handleNext,
    handlePageChange,
    handlePrev,
    setTotalPages,
    totalPages,
    currentPage,
  };
};

export default useSlider;
