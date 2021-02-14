type Props = {
  delay?: number,
  transitionAuto?: boolean,
}

export type SliderContextReturn = {
  goToNextPage : () => void,
  goToPrevPage: () => void,
  goToPage : (page : number) => void,
  setTotalPages: (numberOfPages: number) => void,
  totalPages: number,
  currentPage: number,
  cancelInterval: () => void,
}

interface SliderHook {
  (props: Props) : SliderContextReturn
}

export default SliderHook;
