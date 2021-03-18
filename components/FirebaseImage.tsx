import Image, { ImageProps } from 'next/image';
import { FC, useEffect, useState } from 'react';
import { loadFirebaseImage } from '../lib/firebase';
import Spinner from './common/Spinner';

type Props = ImageProps

const FirebaseImage : FC<Props> = (props : Props) => {
  const {
    src, width, height,
  } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentSrc, setSrc] = useState<string>(null);
  useEffect(
    () => {
      const loadImages = async () : Promise<void> => {
        setIsLoading(true);
        console.log({ props });

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
        ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: width || '100%',
              height: height || '100%',
            }}
            className="spinner-container"
          >
            <Spinner />
          </div>
        )
        : (
          <Image
              // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            src={currentSrc}
          />
        )}
    </>
  );
};

export default FirebaseImage;
