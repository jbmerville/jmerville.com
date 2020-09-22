import React from 'react';

import { PopUp } from 'components';
import Blog from 'pages/Homepage/Blog';
import { Styles } from 'types';

import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Statistics from './Statistics';

const HomePage = () => {
  const styles: Styles = {
    container: {
      height: '100%',
      width: '100%',
      position: 'relative',
    },
  };

  return (
    <div style={styles.container}>
      <PopUp />
      <Header />
      <Hero />
      <Blog />
      <Projects />
      <Statistics />
      <Footer />
    </div>
  );
};

export default HomePage;
