import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import ListOfSolutions from '../../components/ListOfSolutions';
import useSlider from '../../hooks/useSlider';

export type SectionListProps = {
  id: number,
  serviceTitle: string,
  list: string[],
  className?: String,
}

const SliderWithSectionList : FC<SectionListProps> = (
  {
    serviceTitle, className, list, id,
  } : SectionListProps,
) => {
  const { currentPage } = useSlider();
  const [currentClassName, setCurrentClassname] = useState<string>('');

  useEffect(() => {
    if (currentPage === id) setCurrentClassname('slider__picture--active');
    else setCurrentClassname('slider__picture--exiting slider__picture--exiting-section');
  }, [currentPage, id]);

  return (
    <div className={`soluciones__list ${className} ${currentClassName}`}>
      <div className="soluciones__list-title ">
        <h2>{serviceTitle}</h2>
      </div>
      <ListOfSolutions items={list} className="soluciones__list-items" />
      <Link href="#agendar">
        <a className="button soluciones__button-agendar">
          Agendar una asesoría gratuita
        </a>
      </Link>
    </div>
  );
};

export default SliderWithSectionList;
