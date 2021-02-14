import { ReactNode } from 'react';

export type ListItemProps = {
  children: ReactNode,
}

export type ListOfItemProps = {
  className: string,
  items: ReactNode[],
}
