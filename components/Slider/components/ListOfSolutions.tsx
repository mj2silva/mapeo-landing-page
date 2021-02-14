import { FC } from 'react';
import { ListOfItemProps } from '../../../lib/types';
import ListItem from '../../common/ListItem';

const ListOfSolutions : FC<ListOfItemProps> = (props : ListOfItemProps) => {
  const { className, items } = props;
  return (
    <div className={className}>
      <ul>
        { items.map((item) => (
          <ListItem key={`list-item${item}`}>
            { item }
          </ListItem>
        )) }
      </ul>

    </div>
  );
};

export default ListOfSolutions;
