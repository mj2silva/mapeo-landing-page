import { FC, ReactNode, useEffect } from 'react';
import Section, { GridType } from '../../../common/Section';
import useSlider from '../../hooks/useSlider';
import ColumnSlider from './ColumnSlider';

export type SectionWithSliderComponentProps = {
  firstColumnElements: ReactNode[],
  secondColumnElements: ReactNode[],
  gridType?: GridType,
  className?: string,
  titleComponent?: ReactNode,
  controlsComponent?: ReactNode,
  sliderInClassName?: string,
  sliderOutClassName?: string,
  targetId?: string,
  firstInClassName?: string,
}

const SectionWithSliderComponent : FC<SectionWithSliderComponentProps> = (
  props: SectionWithSliderComponentProps,
) => {
  const {
    firstColumnElements,
    secondColumnElements,
    gridType,
    className,
    sliderInClassName,
    sliderOutClassName,
    titleComponent,
    controlsComponent,
    targetId,
    firstInClassName,
  } = props;
  const { setTotalPages } = useSlider();
  useEffect(() => {
    setTotalPages(firstColumnElements.length);
  }, [firstColumnElements, setTotalPages]);
  return (
    <Section
      gridType={gridType}
      className={className}
      title={titleComponent}
      sliderControls={controlsComponent}
      targetId={targetId}
      firstColumn={(
        <ColumnSlider
          elements={firstColumnElements}
          onExitClassName={sliderOutClassName}
          firstInClassName={firstInClassName}
          className={sliderInClassName}
        />
      )}
      secondColumn={(
        <ColumnSlider
          elements={secondColumnElements}
          onExitClassName={sliderOutClassName}
          className={sliderInClassName}
          firstInClassName={firstInClassName}
        />
      )}
    />
  );
};

export default SectionWithSliderComponent;
