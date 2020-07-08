import React from 'react';

import Blog from 'components/Blog';
import Card from 'components/Card';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Section from 'components/Section';
import Separator from 'components/Separator';
import { ICard } from 'types';

import {
  SECTION_CATEGORIES,
  SECTION_CONTENT
} from './card-configs';

const HomePage = (props: {}) => {
  const sections: any[] = SECTION_CATEGORIES.map((section) => {
    const sectionContent = SECTION_CONTENT.filter((item) => item.category === section.id).map((item) => (
      <Card item={item as ICard.Card} />
    ));
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
      <Hero />
      <Blog />
      {sections}
      <Footer />
    </>
  );
};

export default HomePage;
