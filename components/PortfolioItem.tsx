import { FC } from 'react';

export type PortfolioItemProps = {
  name: string,
  description: string,
  imageUrl: string,
}

const PortfolioItem : FC<PortfolioItemProps> = (props: PortfolioItemProps) => {
  const { name, description, imageUrl } = props;
  return (
    <div className="portfolio__item">
      <div className="portfolio__item-gradient">
        <img src={imageUrl} alt="portafolio 1" width="250px" />
      </div>
      <div className="portfolio__item-title">{ name }</div>
      <div className="portfolio__item-description">{ description }</div>
    </div>
  );
};

export default PortfolioItem;
