import { Dispatch, SetStateAction } from 'react';

export type SliderImageProps = {
  src: string,
  alt?: string,
  width?: number,
  height?: number,
  id?: string | number,
};

export type SliderProps = {
  imageList: SliderImageProps[],
  delay? : number,
  className?: string,
}

export type SliderControlsProps = {

}

export type SliderContextType = {
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  totalPages: number,
  setTotalPages: Dispatch<SetStateAction<number>>,
}

export type SliderContextHookType = {
  currentPage: number,
  totalPages: number,
  setTotalPages: Dispatch<SetStateAction<number>>,
  goToPrevPage: () => void,
  goToNextPage: () => void,
  goToPage: (number: number) => void,
}

export type SliderHookType = {
  handleNext: () => void,
  handlePageChange: (number: number) => void,
  handlePrev: () => void,
  setTotalPages: (number: number) => void,
  totalPages: number,
  currentPage: number,
}
