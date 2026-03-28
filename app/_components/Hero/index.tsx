'use client';

import { type RefObject, useEffect, useState } from 'react';

import { CONTENT } from './config';
import HeroCard from './HeroCard';
import HeroImage from './HeroImage';

interface HeroProps {
  aboutMeRef: RefObject<HTMLElement | null>;
  contactMeRef: RefObject<HTMLElement | null>;
}

const Hero = ({ aboutMeRef, contactMeRef }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { title, description } = CONTENT;

  useEffect(() => {
    const id = setTimeout(() => setIsVisible(true));
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="w-full min-h-[80vh] flex flex-col py-8">
      <div className="section-content flex flex-1 flex-col-reverse items-center justify-center gap-6 sm:flex-row sm:justify-between">
        <HeroCard
          title={title}
          description={description}
          isVisible={isVisible}
          aboutMeRef={aboutMeRef}
          contactMeRef={contactMeRef}
        />
        <HeroImage />
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';

export default Hero;
