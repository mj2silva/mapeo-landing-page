import {
  FC, MouseEventHandler, useState,
} from 'react';
import { PortfolioTag } from '../lib/types';

type Props = {
  tag: PortfolioTag,
  onClick: ({ id, name, active }) => void,
}

const PortfolioTagButton : FC<Props> = (props: Props) => {
  const { tag, onClick } = props;
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const handleClick : MouseEventHandler<HTMLButtonElement> = () : void => {
    onClick({ id: tag.id, name: tag.name, active: !isSelected });
    setIsSelected(!isSelected);
  };
  return (
    <li
      className={(isSelected) ? 'head__controls-keywords-tag head__controls-keywords-tag--active' : 'head__controls-keywords-tag'}
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={isSelected}
        name={tag.name}
        value={tag.id}
        onClick={handleClick}
      >
        { tag.name }
      </button>
    </li>
  );
};

export default PortfolioTagButton;
