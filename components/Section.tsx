import { FC, ReactNode } from 'react';

enum SectionClassName {
  section = 'section',
  sectionWithTitle = 'section--with-title',
  sectionReversable = 'section--reversable',
  sectionReversableWithTitle = 'section--reversable-with-title',
}

enum ColumnClassName {
  column = 'section__column',
  columnTitle = 'section__column--title'
}

export enum GridType {
  normal = 'normal',
  withTitle = 'withTitle',
  reversable = 'reversable',
  reversableWithTitle = 'reversable-with-title',
}

type Props = {
  gridType?: GridType,
  title?: ReactNode,
  firstColumn?: ReactNode,
  secondColumn?: ReactNode,
  className?: string,
}

const defaultProps : Partial<Props> = {
  gridType: GridType.normal,
  title: null,
  firstColumn: null,
  secondColumn: null,
  className: null,
};

const getClassName = (gridType : GridType) : SectionClassName => {
  switch (gridType) {
    case GridType.normal:
      return SectionClassName.section;
    case GridType.withTitle:
      return SectionClassName.sectionWithTitle;
    case GridType.reversable:
      return SectionClassName.sectionReversable;
    case GridType.reversableWithTitle:
      return SectionClassName.sectionReversableWithTitle;
    default:
      return SectionClassName.section;
  }
};

const Section : FC<Props> = (props : Props) => {
  const {
    gridType, title, firstColumn, secondColumn, className,
  } = props;
  const sectionClassName = getClassName(gridType);
  return (
    <section className={`${SectionClassName.section} ${sectionClassName} ${className}`}>
      {(gridType === GridType.withTitle) ? (
        <div className={ColumnClassName.columnTitle}>
          { title }
        </div>
      ) : null}
      <div className={ColumnClassName.column}>
        { firstColumn }
      </div>
      <div className={ColumnClassName.column}>
        { secondColumn }
      </div>
    </section>
  );
};

Section.defaultProps = defaultProps;

export default Section;
