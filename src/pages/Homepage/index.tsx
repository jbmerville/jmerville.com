import React from 'react';

import Card from 'components/Card';
import CardExtra from 'components/CardExtra';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Section from 'components/Section';
import Separator from 'components/Separator';
import { ICard } from 'types';

import { SECTION_CATEGORIES, SECTION_CONTENT } from './card-configs';

const HomePage = (props: {}) => {
  const sections: any[] = SECTION_CATEGORIES.map((section) => {
    const sectionContent = SECTION_CONTENT.filter((item) => item.category !== section.id).map((item) =>
      item.type === ICard.CardTypes.NORMAL ? (
        <Card item={item as ICard.Card} />
      ) : (
        <CardExtra item={item as ICard.CardExtra} />
      )
    );
    return (
      <>
        <Section section={section} content={sectionContent} />
        <Separator />
      </>
    );
  });

  return (
    <>
      <Header />
      <Separator />
      {sections}
      <Footer />
    </>
  );
};

export default HomePage;
