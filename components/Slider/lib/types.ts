import { Dispatch, SetStateAction } from 'react';
import { SectionProps } from '../../common/Section';

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

export type SliderWithSectionProps = {
  list: SectionProps[],
  className?: String,
}

export type SliderControlsProps = {

}

export type SliderContextType = {
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  totalPages: number,
  setTotalPages: Dispatch<SetStateAction<number>>,
  delay: number,
  transitionAuto: boolean,
}

export type SliderContextHookType = {
  currentPage: number,
  totalPages: number,
  setTotalPages: Dispatch<SetStateAction<number>>,
  goToPrevPage: () => void,
  goToNextPage: () => void,
  goToPage: (number: number) => void,
  cancelInterval: () => void,
}

export type SliderControlsContextType = {
  interval: ReturnType<typeof setTimeout>;
  startInterval: () => void,
}

export type SliderHookType = {
  handleNext: () => void,
  handlePageChange: (number: number) => void,
  handlePrev: () => void,
  setTotalPages: (number: number) => void,
  totalPages: number,
  currentPage: number,
}
