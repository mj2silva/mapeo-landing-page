import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FC, MouseEvent, useEffect, useState,
} from 'react';
import Modal from 'react-modal';
import { storage } from '../lib/firebase';
import Spinner from './common/Spinner';
import FirebaseImage from './FirebaseImage';

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
  const [currentImage, setCurrentImage] = useState(imageUrl);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () : Promise<void> => {
      const newImageUrl = await storage.refFromURL(thumbUrl).getDownloadURL();
      setCurrentImage(newImageUrl);
      setIsLoading(false);
    };
    loadItems();
  });

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
        { (isLoading)
          ? (
            <div
              style={{
                width: 250, height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center',
              }}
            >
              <Spinner />
            </div>
          ) : <img src={currentImage} alt="portafolio 1" width="250px" /> }
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
        <FirebaseImage
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
