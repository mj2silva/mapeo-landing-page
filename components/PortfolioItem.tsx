import {
  CSSProperties, FC, MouseEvent, useState,
} from 'react';
import Modal from 'react-modal';

export type PortfolioItemProps = {
  name: string,
  description: string,
  imageUrl: string,
}

Modal.setAppElement('#__next');

const customStyles : Modal.Styles = {
  overlay: {
    zIndex: 100,
  },
  content: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
  },
};

const buttonStyle : CSSProperties = {
  backgroundColor: '#ffffff',
  border: '1px solid navy',
  margin: '5px',
};

const PortfolioItem : FC<PortfolioItemProps> = (props: PortfolioItemProps) => {
  const { name, description, imageUrl } = props;
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () : void => {
    setModalIsOpen(true);
  };
  const closeModal = (e : MouseEvent<HTMLButtonElement>) : void => {
    e.stopPropagation();
    setModalIsOpen(false);
  };
  return (
    <button onClick={openModal} type="button" className="portfolio__item">
      <div className="portfolio__item-gradient">
        <img src={imageUrl} alt="portafolio 1" width="250px" />
      </div>
      <div className="portfolio__item-title">{ name }</div>
      <div className="portfolio__item-description">{ description }</div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel={description}
        style={customStyles}
      >
        <h2>{name}</h2>
        <button style={buttonStyle} type="button" onClick={closeModal}> X </button>
        <img src={imageUrl} alt="portafolio 1" width="700px" />
      </Modal>
    </button>
  );
};

export default PortfolioItem;
