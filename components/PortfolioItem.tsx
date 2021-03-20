import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import {
  FC, MouseEvent, useState,
} from 'react';
import Modal from 'react-modal';

export type PortfolioItemProps = {
  name: string,
  description: string,
  imageUrl: string,
  thumbUrl: string,
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

const PortfolioItem : FC<PortfolioItemProps> = (props: PortfolioItemProps) => {
  const {
    name, description, thumbUrl, imageUrl,
  } = props;
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
        <Image src={thumbUrl} alt="portafolio 1" layout="fill" objectFit="cover" />
      </div>
      <div className="portfolio__item-title">{ name }</div>
      <div className="portfolio__item-description">{ description }</div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel={description}
        style={customStyles}
        className="Modal"
        overlayClassName="Modal__Overlay"
        bodyOpenClassName="Modal__Body"
      >
        <button className="Modal__close-button" type="button" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </Modal>
    </button>
  );
};

export default PortfolioItem;
