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
  tags: string[],
}

export type PortfolioTag = {
  id?: string,
  name: string,
}
