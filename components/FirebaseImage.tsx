import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { loadFirebaseImage } from '../lib/firebase';
import Spinner from './common/Spinner';

type Props = {
  firebaseUrl: string,
  alt?: string,
  width?: number,
  height?: number,
  layout?: 'intrinsic' | 'fixed' | 'responsive'
}

const defaultProps : Partial<Props> = {
  alt: '',
  width: null,
  height: null,
  layout: null,
};

const FirebaseImage : FC<Props> = (props : Props) => {
  const {
    firebaseUrl, alt, width, height, layout,
  } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [src, setSrc] = useState<string>(null);

  useEffect(
    () => {
      const loadImages = async () : Promise<void> => {
        setIsLoading(true);
        try {
          const imageUrl = await loadFirebaseImage(firebaseUrl);
          setSrc(imageUrl);
          setIsLoading(false);
        } catch {
          setSrc('/img/cliente.png');
          setIsLoading(false);
        }
      };

      loadImages();
    },
    [firebaseUrl],
  );
  return (isLoading)
    ? <Spinner />
    : (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
      />
    );
};

FirebaseImage.defaultProps = defaultProps;

export default FirebaseImage;
