import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';
import {
  CustomerStorie, MapeoService, MeetingInfo, PortfolioElement, PortfolioTag, StaffMember,
} from './types';

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
export const analitycs = firebase.analytics;

/**
 * Obtiene los items del portafolio almacenados en el firestore de firebase
 * @param itemsCount numero de items de portafolio a retornar (0 = todos)
 * @returns Un arreglo con los datos de cada item de portafolio
 */
const getPortfolioItems = async (
  itemsCount : number = 0,
) : Promise<PortfolioElement[]> => {
  const firebasePortafolioItems : PortfolioElement[] = [];
  const portafolioRef = firestore.collection('portafolio').orderBy('orden', 'asc');
  const data = (itemsCount)
    ? await portafolioRef.limit(itemsCount).get()
    : await portafolioRef.get();

  data.forEach((item) => {
    const itemData = item.data();
    firebasePortafolioItems.push({
      name: itemData.nombre,
      description: itemData.descripcion || '',
      imageUrl: itemData.imagenUrl,
      tags: itemData.tags || [],
      thumbUrl: itemData.miniaturaUrl,
    });
  });

  return firebasePortafolioItems;
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

const getCustomerStories = async () : Promise<CustomerStorie[]> => {
  const customerStoriesRef = firestore.collection('historiasClientes');
  const customerStories : CustomerStorie[] = [];
  const data = await customerStoriesRef.get();

  data.forEach((item) => {
    const itemData = item.data();
    customerStories.push({
      id: item.id,
      names: itemData.nombres,
      position: itemData.cargo,
      companyName: itemData.empresa,
      message: itemData.mensaje,
      photoUrl: itemData.fotoClienteUrl || '',
    });
  });

  return customerStories;
};

const getMapeoServices = async (type: 'marketing' | 'colaboradores') : Promise<MapeoService[]> => {
  const mapeoServicesRef = firestore.collection('servicios');
  const mapeoServices : MapeoService[] = [];
  const data = await mapeoServicesRef.where('tipo', '==', type).get();
  data.forEach((item) => {
    const itemData = item.data();
    mapeoServices.push({
      id: item.id,
      name: itemData.nombre,
      description: itemData.descripcion,
      imageUrl: itemData.imagenUrl,
      type: itemData.tipo,
    });
  });
  return mapeoServices;
};

const getStaff = async () : Promise<StaffMember[]> => {
  const staffRef = firestore.collection('colaboradores');
  const staff : StaffMember[] = [];
  const data = await staffRef.get();
  data.forEach((item) => {
    const itemData = item.data();
    staff.push({
      id: item.id,
      name: itemData.nombre,
      photoUrl: itemData.fotoUrl,
    });
  });
  return staff;
};

const createNewMeeting = async (meetingInfo : MeetingInfo) : Promise<void> => {
  const meetingsRef = firestore.collection('reunionesProgramadas');
  const meeting = {
    nombres: meetingInfo.names.toUpperCase(),
    email: meetingInfo.email.toUpperCase(),
    empresa: meetingInfo.company.toUpperCase(),
    telefono: meetingInfo.phoneNumber.toUpperCase(),
    asunto: meetingInfo.subject.toUpperCase(),
    fechaDeSolicitud: meetingInfo.date,
  };
  const meetingDoc = meetingsRef.doc();
  const companyDoc = firestore.doc(`empresas/${meeting.empresa}`);
  const batch = firestore.batch();
  batch.set(meetingDoc, meeting);
  batch.set(companyDoc, { meetingId: meetingDoc.id });
  await batch.commit();
};

const checkCompanyValid = async (company : string) : Promise<boolean> => {
  const ref = firestore.doc(`empresas/${company}`);
  const { exists } = await ref.get();
  return !exists;
};

export {
  getPortfolioItems,
  getMapeoServices,
  getTagsForPortfolio,
  getCustomerStories,
  createNewMeeting,
  checkCompanyValid,
  getStaff,
};
