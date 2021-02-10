import { FC, ReactNode } from 'react';

type Props = {
  gridType?: 'normal' | 'with-title' | 'reversable' | 'reversable-with-title',
  title?: string,
  children: ReactNode,
}

const defaultProps : Partial<Props> = {
  gridType: 'normal',
  title: '',
};

const getClassName = (gridType : string) : string => {
  switch (gridType) {
    case 'normal':
      return '';
    case 'with-title':
      return 'section__with-title';
    default:
      return '';
  }
};

const Section : FC<Props> = (props : Props) => {
  const { gridType, title, children } = props;
  const sectionClassName = getClassName(gridType);
  return (
    <section className={sectionClassName}>
      {(gridType === 'with-title') ? <div className="section__column--title">{title}</div> : null}
      { children }
    </section>
  );
};

Section.defaultProps = defaultProps;

export default Section;
