import { FC, useEffect } from 'react';

type Props = {
  images?: string[]
}

const defaultProps = {
  images: [],
};

const Presentation : FC<Props> = (props : Props) => {
  const { images } = props;
  useEffect(() => {

  }, [images]);
  return (
    <section className="section section--reversable presentation">
      <div className="section__column">
        <div className="presentation__call-to-action">
          <div className="presentation__message">
            <span className="presentation__message--emphasis">
              ¡CONQUISTA
              {' '}
            </span>
            MÁS CLIENTES Y COLABORADORES!
          </div>
          <a href="#conversemos" className="button presentation__button">Conversemos</a>
        </div>
      </div>
      <div className="section__column">
        <div className="slider presentation__slider">
          <ul className="slider__container" id="pictureContainer">
            <li className="slider__picture slider__picture--active">
              <img src="/img/imagen-slider.png" alt="Foto preview" width="500" height="400" />
            </li>
            <li className="slider__picture">
              <img src="/img/imagen-slider.png" alt="Foto preview" width="500" height="500" />
            </li>
            <li className="slider__picture">
              <img src="/img/imagen-slider.png" alt="Foto preview" width="500" height="500" />
            </li>
            <li className="slider__picture">
              <img src="/img/imagen-slider.png" alt="Foto preview" width="500" height="500" />
            </li>
          </ul>
          <div id="controlContainer" className="slider__control-box">
            <div className="slider__control slider__control--active" />
            <div className="slider__control" />
            <div className="slider__control" />
            <div className="slider__control" />
          </div>
        </div>
      </div>
    </section>
  );
};

Presentation.defaultProps = defaultProps;

export default Presentation;
