import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { PortfolioElement, PortfolioTag } from './types';

// Configuración de la aplicación con firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCIaCBF3zDOpPxWu52AGiXb_1iZYm-_bJY',
  authDomain: 'mapeo-web-a4a14.firebaseapp.com',
  projectId: 'mapeo-web-a4a14',
  storageBucket: 'mapeo-web-a4a14.appspot.com',
  messagingSenderId: '1054491243736',
  appId: '1:1054491243736:web:6ed9f5a3d0bd7de78993ad',
  measurementId: 'G-K142CRY7JD',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
export const storage = firebase.storage();

/**
 * Obtiene los items del portafolio almacenados en el firestore de firebase
 * @param itemsCount numero de items de portafolio a retornar (0 = todos)
 * @returns Un arreglo con los datos de cada item de portafolio
 */
const getPortfolioItemsWithFirebaseUrl = async (
  itemsCount : number = 0,
) : Promise<PortfolioElement[]> => {
  const firebasePortafolioItems : PortfolioElement[] = [];
  const portafolioRef = firestore.collection('portafolio');
  const data = (itemsCount)
    ? await portafolioRef.limit(itemsCount).get()
    : await portafolioRef.get();

  data.forEach((item) => {
    const itemData = item.data();
    firebasePortafolioItems.push({
      name: itemData.nombre,
      description: itemData.descripcion || '',
      imageUrl: itemData.imagenUrl,
      tags: itemData.tags,
    });
  });

  return firebasePortafolioItems;
};

const transformPortfolioItems = async (
  portfolioWithFirebaseUrl : PortfolioElement[],
) : Promise<PortfolioElement[]> => {
  const imageUrls = await Promise.all(portfolioWithFirebaseUrl.map(
    (item) => storage.refFromURL(item.imageUrl).getDownloadURL(),
  ));
  const portafolioItems = portfolioWithFirebaseUrl.map((item, index) => ({
    ...item,
    imageUrl: imageUrls[index],
  }));
  return portafolioItems;
};

const getPortfolioItems = async (itemsCount : number = 0) : Promise<PortfolioElement[]> => {
  const firebasePortafolioItems = await getPortfolioItemsWithFirebaseUrl(itemsCount);
  const portfolioItems = await transformPortfolioItems(firebasePortafolioItems);
  return portfolioItems;
};

const getTagsForPortfolio = async () : Promise<PortfolioTag[]> => {
  const portfolioTagsRef = firestore.collection('tags');
  const portfolioTags = [];
  const data = await portfolioTagsRef.get();

  data.forEach((item) => {
    const itemData = item.data();
    portfolioTags.push({
      id: item.id,
      name: itemData.nombre,
    });
  });

  return portfolioTags;
};

export {
  getPortfolioItems,
  transformPortfolioItems,
  getPortfolioItemsWithFirebaseUrl,
  getTagsForPortfolio,
};
