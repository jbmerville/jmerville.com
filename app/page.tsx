'use client';

import { useRef } from 'react';
import Footer from './_components/Footer';
import Header from './_components/Header';
import AboutMe from './_components/AboutMe';
import Hero from './_components/Hero';
import WorkHistory from './_components/WorkHistory';
import Projects from './_components/Projects';

const HomePage = () => {
  const aboutMeRef = useRef<HTMLElement>(null);
  const contactMeRef = useRef<HTMLElement>(null);

  return (
    <div className="relative h-full w-full">
      {/* <Cookie /> */}
      <Header />
      <Hero aboutMeRef={aboutMeRef} contactMeRef={contactMeRef} />
      <AboutMe ref={aboutMeRef} />
      <WorkHistory />
      {/* <Blog /> */}
      <Projects />
      {/* <Statistics ref={statisticsRef} /> */}
      <Footer contactMeRef={contactMeRef} />
    </div>
  );
};

export default HomePage;
