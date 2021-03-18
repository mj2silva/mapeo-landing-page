import { FC } from 'react';
import Section, { GridType } from './common/Section';
import MapeoCircle from './MapeoCircle';

const AboutUs : FC = () => (
  <Section
    gridType={GridType.reversable}
    className="about-us"
    targetId="nosotros"
    firstColumn={
      <MapeoCircle />
    }
    secondColumn={(
      <div className="about-us__content">
        <div className="appear_right about-us__title">
          <h2>Mapeo existe...</h2>
        </div>
        <div className="appear_right about-us__parragraph">
          <p>
            ... para que más personas puedan vivir emprendiendo sus pasiones.
          </p>
          <p>
            Diseñamos soluciones de marketing y gestión de personas a medida de tu empresa para
            que logres mejorar la forma en que conquistas tus clientes y colaboradores.
          </p>
          <p>
            En otras palabras, trabajamos por
            {' '}
            <strong>marcas más humanas</strong>
            {' '}
            y con
            {' '}
            <strong>resultados.</strong>
          </p>
        </div>
      </div>
    )}
  />
);

export default AboutUs;
