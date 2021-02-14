import {
  FC, ReactNode, useEffect, useState,
} from 'react';
import Section, { GridType } from '../../../common/Section';
import useSlider from '../../hooks/useSlider';
import { SliderImageProps } from '../../lib/types';
import ImageColumn, { SectionImageProps } from './ImageColumn';
import SliderWithSectionList, { SectionListProps } from './SliderWithSectionList';
import SliderWithSectionControls from './WithSectionControls';

export type SectionOfSliderProps = {
  id?: number,
  list: string[],
  image: SliderImageProps,
  listClassName?: string,
  imageClassName?: string,
  serviceTitle: string,
}

export type SliderWithSectionProps = {
  sliderContent: SectionOfSliderProps[],
  className: string,
  title: ReactNode,
}

const renderList = (
  listProps : SectionListProps[],
) : ReactNode[] => listProps.map((element) => (
  <SliderWithSectionList
    key={`list-col-${element.id}`}
    id={element.id}
    className={element.className}
    serviceTitle={element.serviceTitle}
    list={element.list}
  />
));

const renderImages = (
  imageProps: SectionImageProps[],
) : ReactNode[] => imageProps.map((element) => (
  <ImageColumn
    key={`image-col-${element.id}`}
    id={element.id}
    className={element.className}
    image={element.image}
  />
));

const getImagesFromContent = (
  content : SectionOfSliderProps[],
) : SectionImageProps[] => content.map((element : SectionOfSliderProps) => ({
  id: element.id,
  image: element.image,
  className: element.imageClassName,
}));

const getColumnsFromContent = (
  content: SectionOfSliderProps[],
) : SectionListProps[] => content.map((element) => ({
  id: element.id,
  serviceTitle: element.serviceTitle,
  list: element.list,
  className: element.listClassName,
}));

const SliderWithSectionComponent : FC<SliderWithSectionProps> = (
  {
    className, title, sliderContent,
  }: SliderWithSectionProps,
) => {
  const { currentPage, setTotalPages } = useSlider();
  const [currentSlider, setCurrentSlider] = useState<SectionOfSliderProps>(null);

  useEffect(() => {
    setCurrentSlider(sliderContent[currentPage]);
  }, [currentPage, sliderContent]);

  useEffect(() => {
    setTotalPages(sliderContent.length);
  }, [setTotalPages, sliderContent]);

  return (currentSlider) ? (
    <Section
      className={className}
      gridType={GridType.reversableWithTitle}
      title={title}
      firstColumn={(
        renderList(getColumnsFromContent(sliderContent))
    )}
      secondColumn={(
        renderImages(getImagesFromContent(sliderContent))
    )}
      sliderControls={<SliderWithSectionControls />}
    />
  ) : null;
};

export default SliderWithSectionComponent;
