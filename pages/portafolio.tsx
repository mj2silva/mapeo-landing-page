import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import PageProvider from '../components/PageProvider';
import PortfolioItem from '../components/PortfolioItem';
import PortfolioTags from '../components/PortfolioTags';
import ScheduleMeeting from '../components/ScheduleMeeting';
import usePage from '../hooks/usePage';
import { getPortfolioItems, getTagsForPortfolio } from '../lib/firebase';
import { PortfolioElement, PortfolioTag } from '../lib/types';

export const getStaticProps : GetStaticProps = async () => {
  const portafolioItems = await getPortfolioItems();
  const tags = await getTagsForPortfolio();
  return { props: { portafolioItems, tags } };
};

type Props = {
  portafolioItems: PortfolioElement[];
  tags: PortfolioTag[];
};

const Portafolio : FC<Props> = (props: Props) => {
  const { setCurrentVisible } = usePage();
  const { portafolioItems, tags } = props;
  const [currentItems, setCurrentItems] = useState<PortfolioElement[]>(portafolioItems);
  const handleTagsChange = (selectedTags: PortfolioTag[]) : void => {
    const filteredItems = [];
    if (selectedTags.length > 0) {
      selectedTags.forEach((tag) => {
        filteredItems.push(
          ...portafolioItems.filter((
            item,
          ) => item.tags.includes(tag.id) && !filteredItems.some((
            oldItem,
          ) => (oldItem.name === item.name))),
        );
      });
      setCurrentItems(filteredItems);
    }
  };

  useEffect(() => {
    setCurrentVisible('portafolio');
  }, [setCurrentVisible]);
  return (
    <PageProvider>
      <Head>
        <title>Mapeo - Portafolio</title>
        <script defer src="/animations/animateInViewport.js" />
        <script defer src="/animations/menuResonsive.js" />
      </Head>
      <section className="head">
        <div className="head__title">
          <h1>Portafolio</h1>
        </div>
        <PortfolioTags tags={tags} onTagsChange={handleTagsChange} />
      </section>
      <section className="portfolio">
        <div className="portfolio__list">
          { currentItems.map((item, index) => (
            <PortfolioItem
              key={`pf-item-${item.name}-${index + 1}`}
              name={item.name}
              description={item.description}
              imageUrl={item.imageUrl}
              thumbUrl={item.thumbUrl}
            />
          ))}
        </div>
      </section>
      <ScheduleMeeting />
    </PageProvider>
  );
};
export default Portafolio;
