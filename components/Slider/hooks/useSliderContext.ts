import {
  useCallback, useEffect, useState,
} from 'react';
import SliderHook from '../interfaces/SliderHook';

const useSliderContext : SliderHook = (props) => {
  const {
    transitionAuto,
    delay,
  } = props;

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [currentInterval, setCurrentInterval] = useState(null);
  const [isIntervalActive, setIsIntervalActive] = useState<boolean>(false);

  const goToPage = (page:number) : void => {
    if (page >= 0 && page < totalPages) setCurrentPage(page);
    else throw Error('Page debe ser mayor que 0 y menor que el número total de páginas del slider');
  };

  const goToNextPage = useCallback(() : void => {
    if (currentPage + 1 >= totalPages) setCurrentPage(0);
    else setCurrentPage(currentPage + 1);
  }, [currentPage, totalPages]);

  const goToPrevPage = useCallback(() : void => {
    if (currentPage - 1 < 0) setCurrentPage(totalPages - 1);
    else setCurrentPage(currentPage - 1);
  }, [currentPage, totalPages]);

  const startInterval = useCallback(() : void => {
    if (transitionAuto && !isIntervalActive) {
      if (delay > 0) {
        const interval = setTimeout(() => {
          goToNextPage();
          setIsIntervalActive(false);
        }, delay);
        setCurrentInterval(interval);
        setIsIntervalActive(true);
      } else {
        throw Error('El delay debe ser mayor de 0');
      }
    }
  }, [transitionAuto, goToNextPage, delay, isIntervalActive]);

  useEffect(
    () => {
      if (transitionAuto && !isIntervalActive) {
        if (delay > 0) {
          const interval = setTimeout(() => {
            goToNextPage();
            setIsIntervalActive(false);
          }, delay);
          setCurrentInterval(interval);
          setIsIntervalActive(true);
        } else {
          throw Error('El delay debe ser mayor de 0');
        }
      }
    },
    [transitionAuto, currentPage, goToNextPage, delay, isIntervalActive],
  );

  const cancelInterval = useCallback(() : void => {
    setIsIntervalActive(false);
    clearInterval(currentInterval);
  }, [currentInterval]);

  return {
    goToPrevPage,
    goToNextPage,
    goToPage,
    currentPage,
    totalPages,
    setTotalPages,
    cancelInterval,
    startInterval,
  };
};

export default useSliderContext;
