import { useContext } from 'react';
import { SliderContext } from '../components/SliderContext';
import { SliderContextHookType, SliderContextType } from '../lib/types';

const useSliderContext = () : SliderContextHookType => {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
  } = useContext<SliderContextType>(SliderContext);

  const goToPage = (page:number) : void => {
    setCurrentPage(page);
  };

  const goToNextPage = () : void => setCurrentPage(currentPage + 1);
  const goToPrevPage = () : void => setCurrentPage(currentPage - 1);

  return {
    goToPrevPage,
    goToNextPage,
    goToPage,
    currentPage,
    totalPages,
    setTotalPages,
  };
};

export default useSliderContext;
