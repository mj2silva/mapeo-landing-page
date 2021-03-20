import { FC, useEffect, useState } from 'react';
import Slider from './Slider';
import Section, { GridType } from './common/Section';
import { SliderImageProps } from './Slider/lib/types';
import { StaffMember } from '../lib/types';

type Props = {
  staffData: StaffMember[];
}

const Presentation : FC<Props> = (props : Props) => {
  const [imageList, setImageList] = useState<SliderImageProps[]>([]);
  const { staffData } = props;

  useEffect(() => {
    setImageList(staffData.map((member, index) => ({
      id: index,
      src: member.photoUrl,
      alt: member.name,
      width: 500,
      height: 500,
    })));
  }, [staffData]);

  return (
    <Section
      gridType={GridType.normal}
      className="presentation"
      firstColumn={(
        <div className="presentation__call-to-action">
          <h1 className="presentation__message">
            <span className="presentation__message--emphasis">
              ¡CONQUISTA
              {' '}
            </span>
            MÁS CLIENTES Y COLABORADORES!
          </h1>
          <a href="#primer-mapeo" className="button presentation__button">Conversemos</a>
        </div>
      )}
      secondColumn={(
        <Slider imageList={imageList} className="presentation__slider" />
        )}
    />
  );
};

export default Presentation;
