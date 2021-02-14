import {
  createContext, FC, ReactNode,
} from 'react';
import useSliderContext from '../hooks/useSliderContext';
import { SliderContextReturn } from '../interfaces/SliderHook';

export const SliderContext = createContext<SliderContextReturn>(null);

type Props = {
  children: ReactNode,
  delay?: number,
  transitionAuto?: boolean,
}

const defaultProps : Partial<Props> = {
  delay: null,
  transitionAuto: false,
};

const SliderProvider : FC<Props> = ({ children, delay, transitionAuto } : Props) => {
  const {
    goToPrevPage,
    goToNextPage,
    goToPage,
    currentPage,
    totalPages,
    setTotalPages,
    cancelInterval,
  } = useSliderContext({ delay, transitionAuto });

  return (
    <SliderContext.Provider
      value={{
        goToPrevPage,
        goToNextPage,
        goToPage,
        currentPage,
        totalPages,
        setTotalPages,
        cancelInterval,
      }}
    >
      { children }
    </SliderContext.Provider>
  );
};

SliderProvider.defaultProps = defaultProps;

export default SliderProvider;
