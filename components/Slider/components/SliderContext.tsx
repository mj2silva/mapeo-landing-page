import {
  createContext, FC, ReactNode, useState,
} from 'react';
import { SliderContextType } from '../lib/types';

export const SliderContext = createContext<SliderContextType>(null);

type Props = {
  children: ReactNode
}

const SliderProvider : FC<Props> = ({ children } : Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  return (
    <SliderContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
      }}
    >
      { children }
    </SliderContext.Provider>
  );
};

export default SliderProvider;
