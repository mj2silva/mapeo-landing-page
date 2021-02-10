import { FC } from 'react';

const AboutUs : FC = () => (
  <section className="section section--reversable about-us">
    <aside className="target" id="nosotros" />
    <div className="section__column">
      <div className="appear_left about-us__image">
        <div className="mapeo-circle">
          <img id="mapeoCircle1" src="/img/circulo-1.svg" alt="" />
          <img id="mapeoCircle2" src="/img/circulo-2.svg" alt="" />
          <img id="mapeoCircle3" src="/img/circulo-3.svg" alt="" />
        </div>
      </div>
    </div>
    <div className="section__column">
      <div className="about-us__content">
        <div className="appear_right about-us__title">
          <h1>Mapeo existe...</h1>
        </div>
        <div className="appear_right about-us__parragraph">
          <p>
            ... para que más personas puedan vivir emprendiendo sus pasiones.
          </p>
          <p>
            Diseñamos soluciones de marketing y gestión de personas a medida de tu empresa para que
            logres mejorar la forma en que conquistas tus clientes y colaboradores.
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
    </div>
  </section>
);

export default AboutUs;
