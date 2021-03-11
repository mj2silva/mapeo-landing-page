import Image, { ImageProps } from 'next/image';
import { FC, useEffect, useState } from 'react';
import { loadFirebaseImage } from '../lib/firebase';
import Spinner from './common/Spinner';

type Props = ImageProps

const FirebaseImage : FC<Props> = (props : Props) => {
  const {
    src,
  } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentSrc, setSrc] = useState<string>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);
  useEffect(
    () => {
      const loadImages = async () : Promise<void> => {
        setIsLoading(true);
        try {
          const imageUrl = await loadFirebaseImage(src);
          setSrc(imageUrl);
          setIsLoading(false);
        } catch {
          setSrc('/img/cliente.png');
          setIsLoading(false);
        }
      };

      loadImages();
    },
    [src],
  );
  return (
    <>
      {(isLoading)
        ? <div className="spinner-container"><Spinner /></div>
        : (
          <>
            { (isImageLoading) ? <div className="spinner-container"><Spinner /></div> : null }
            <Image
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...props}
              src={currentSrc}
              hidden={isImageLoading}
              onLoad={() => setIsImageLoading(false)}
            />
          </>
        )}
    </>
  );
};

export default FirebaseImage;
