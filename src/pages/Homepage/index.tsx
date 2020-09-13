import React from 'react';

import Blog from 'components/Blog';
import Card from 'components/Card';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import PopUp from 'components/PopUp';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import {
  ICard,
  Styles
} from 'types';

import {
  SECTION_CATEGORIES,
  SECTION_CONTENT
} from './card-configs';

const HomePage = () => {
  const styles: Styles = {
    container: {
      height: '100%',
      width: '100%',
      position: 'relative',
    },
  };

  const sections: any[] = SECTION_CATEGORIES.map((section) => {
    const sectionContent = SECTION_CONTENT.filter((item) => item.category === section.id).map((item) => <Card item={item as ICard.Card} />);
    return <Section section={section} content={sectionContent} />;
  });

  return (
    <div style={styles.container}>
      <PopUp />
      <Header />
      <Hero />
      <Blog />
      {sections}
      <Statistics />
      <Footer />
    </div>
  );
};

export default HomePage;
