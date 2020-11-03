import React, { useRef } from 'react';

import { ThemeProvider } from 'components';
import ReactGA from 'react-ga';
import { Styles } from 'types';

import AboutMe from './AboutMe';
import Blog from './Blog';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Statistics from './Statistics';
import WorkHistory from './WorkHistory';

const HomePage = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);

  const projectsRef = useRef(null);
  const statisticsRef = useRef(null);
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
        {/* <Cookie /> */}
        <Header />
        <Hero projectsRef={projectsRef} statisticsRef={statisticsRef} />
        <AboutMe />
        <WorkHistory />
        <Blog />
        <Projects ref={projectsRef} />
        <Statistics ref={statisticsRef} />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default HomePage;
