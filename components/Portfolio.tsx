import { FC } from 'react';
import PortfolioItem, { PortfolioItemProps } from './PortfolioItem';

export type PortfolioProps = {
  items: PortfolioItemProps[]
}

const Portfolio : FC<PortfolioProps> = (props : PortfolioProps) => {
  const { items } = props;
  return (
    <section className="portfolio" id="portfolio">
      <aside className="target" id="portafolio" />
      <div className="portfolio__title">
        <h1>
          Soluciones aplicadas en
          <span>&#183; nuestros clientes &#183;</span>
        </h1>
      </div>
      <div className="portfolio__list">
        { items.map((item, index) => (
          <PortfolioItem
            key={`pf-item-${item.name}-${index + 1}`}
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        )) }
      </div>
      <div className="portfolio__footer">
        <a href="/portafolio" className="button portfolio__link">Ver más proyectos</a>
      </div>
    </section>
  );
};

export default Portfolio;
