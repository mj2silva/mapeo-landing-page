import { ReactNode } from 'react';

export type ListItemProps = {
  children: ReactNode,
}

export type ListOfItemProps = {
  className: string,
  items: ReactNode[],
}

export type PortfolioElement = {
  name: string,
  description: string,
  imageUrl: string,
  thumbUrl: string,
  tags: string[],
}

export type PortfolioTag = {
  id?: string,
  name: string,
}

export type CustomerStorie = {
  id?: string,
  position: string,
  companyName: string,
  photoUrl: string,
  message: string,
  names: string,
}
