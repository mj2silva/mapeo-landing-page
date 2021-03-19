import { FC, useEffect, useState } from 'react';
import Slider from './Slider';
import Section, { GridType } from './common/Section';
import { SliderImageProps } from './Slider/lib/types';

const getImages = async () : Promise<SliderImageProps[]> => {
  const { storage } = await import('../lib/firebase');
  const filesListRef = storage.ref().child('pagina-principal/slider-principal');
  const listOfFiles = await filesListRef.listAll();
  const srcList = await Promise.all(listOfFiles.items.map((item) => item.getDownloadURL()));
  const imageList = listOfFiles.items.map((item, index) => ({
    src: srcList[index],
    width: 500,
    height: 500,
    alt: item.name,
    id: index,
  }));
  return imageList;
};

const Presentation : FC = () => {
  const [imageList, setImageList] = useState<SliderImageProps[]>([]);

  useEffect(() => {
    const loadImages = async () : Promise<void> => {
      setImageList(await getImages());
    };
    loadImages();
  }, []);
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
