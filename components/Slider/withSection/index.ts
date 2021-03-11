import SliderWithSection from './SliderWithSection';

export type SliderContentProps = {
  id: number,
  serviceTitle: string,
  list: string[],
  image: {
    src: string,
    alt: string,
    width: number,
    height: number,
  },
}

export { default as SectionWithSlider } from './SectionWithSlider';
export default SliderWithSection;
