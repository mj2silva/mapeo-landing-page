import { FC } from 'react';
import Image from 'next/image';

const MapeoCircle : FC = () => (
  <div className="appear_left about-us__image">
    <div className="mapeo-circle">
      <Image id="mapeoCircle1" src="/img/circulo-1.svg" alt="" layout="fill" objectFit="scale-down" />
      <Image id="mapeoCircle2" src="/img/circulo-2.svg" alt="" layout="fill" objectFit="scale-down" />
      <Image id="mapeoCircle3" src="/img/circulo-3.svg" alt="" layout="fill" objectFit="scale-down" />
    </div>
  </div>
);

export default MapeoCircle;
