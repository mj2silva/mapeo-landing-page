import {
  FC, useState,
} from 'react';
import { PortfolioTag } from '../lib/types';
import PortfolioTagButton from './PortfolioTagButton';

type Props = {
  tags: PortfolioTag[],
  onTagsChange: (tags: PortfolioTag[]) => void,
}

const PortfolioTags : FC<Props> = (props: Props) => {
  const { onTagsChange, tags } = props;
  const [currentSelected, setCurrentSelected] = useState<PortfolioTag[]>([]);

  const handleClick = (event: { active: boolean; id: string; name: string; }) : void => {
    if (event.active) {
      const newSelected = [
        ...currentSelected,
        {
          id: event.id,
          name: event.name,
        },
      ];
      setCurrentSelected(newSelected);
      onTagsChange(newSelected);
    } else {
      const newSelected = [
        ...currentSelected.filter((item) => item.id !== event.id),
      ];
      setCurrentSelected(newSelected);
      onTagsChange(newSelected);
    }
  };
  return (
    <div className="head__controls">
      <div className="head__controls-keywords">
        <h3>Palabras clave</h3>
        <ul>
          <li className="head__controls-keywords-tag">Todo</li>
          { tags.map((tag) => (
            <PortfolioTagButton key={tag.id} tag={tag} onClick={handleClick} />
          )) }
        </ul>
      </div>
      <div className="head__controls-search">
        <form>
          <input type="search" name="search" id="search" placeholder="Buscar..." />
        </form>
      </div>
    </div>
  );
};

export default PortfolioTags;
