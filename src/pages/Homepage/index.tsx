import React from 'react';

import {
  PopUp,
  ThemeProvider
} from 'components';
import { Styles } from 'types';

import Blog from './Blog';
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
      <ThemeProvider>
        <PopUp />
        <Header />
        <Hero />
        <Blog />
        <Projects />
        <Statistics />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default HomePage;
