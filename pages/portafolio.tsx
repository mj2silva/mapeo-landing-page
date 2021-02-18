import { FC, useEffect } from 'react';
import PageProvider from '../components/PageProvider';
import PortfolioItem, { PortfolioItemProps } from '../components/PortfolioItem';
import ScheduleMeeting from '../components/ScheduleMeeting';
import usePage from '../hooks/usePage';

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
];

const Portafolio : FC = () => {
  const { setCurrentVisible } = usePage();

  useEffect(() => {
    setCurrentVisible('portafolio');
  }, [setCurrentVisible]);
  return (
    <PageProvider>
      <section className="head">
        <div className="head__title">
          <h1>Portafolio</h1>
        </div>
        <div className="head__controls">
          <div className="head__controls-keywords">
            <h3>Palabras clave</h3>
            <ul>
              <li>Todo</li>
              <li>Campañas Digitales</li>
              <li>Redes Sociales</li>
              <li>Campañas promocionales</li>
              <li>Activaciones de Marketing</li>
              <li>Branding</li>
              <li>Influenciadores</li>
              <li>Materiales</li>
              <li>Pop & Toolkits</li>
              <li>Embudos de conversión</li>
              <li>Compra de medios</li>
            </ul>
          </div>
          <div className="head__controls-search">
            <form>
              <input type="search" name="search" id="search" placeholder="Buscar..." />
            </form>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="portfolio__list">
          { portfolioItems.map((item, index) => (
            <PortfolioItem
              key={`pf-item-${item.name}-${index + 1}`}
              name={item.name}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </section>
      <ScheduleMeeting />
    </PageProvider>
  );
};
export default Portafolio;
