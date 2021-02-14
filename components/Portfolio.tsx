import { FC } from 'react';
import PortfolioItem, { PortfolioItemProps } from './PortfolioItem';

const portfolioItems : PortfolioItemProps[] = [
  {
    name: 'MASSA',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio1.png',
  },
  {
    name: 'BIOGOODS',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio2.png',
  },
  {
    name: 'PAWRI',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio3.png',
  },
  {
    name: 'ESPERÁNDOTE',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio4.png',
  },
  {
    name: 'TANMA',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio5.png',
  },
  {
    name: 'TAKAY',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio6.png',
  },
  {
    name: 'SIARCOS',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio7.png',
  },
  {
    name: 'AMARILLO STUDIO',
    description: 'Redes Sociales',
    imageUrl: '/img/marca-portafolio8.png',
  },
];

export type PortfolioProps = {
  items: PortfolioItemProps[]
}

const Portfolio : FC<PortfolioProps> = (props : PortfolioProps) => {
  const { items } = props;
  return (
    <section className="portfolio">
      <aside className="target" id="portafolio" />
      <div className="portfolio__title">
        <h1>
          Soluciones aplicadas en
          <span>&#183; nuestros clientes &#183;</span>
        </h1>
      </div>
      <div className="portfolio__list">
        { portfolioItems.map((item) => (
          <PortfolioItem
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        )) }
      </div>
      <div className="portfolio__footer">
        <a href="/portfolio" className="button portfolio__link">Ver mas proyectos</a>
      </div>
    </section>
  );
};

export default Portfolio;
