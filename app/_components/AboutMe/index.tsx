'use client';

import { useEffect, useRef, useState, type Ref } from 'react';

import { useSectionTimeTracking } from '../../_hooks/useSectionTimeTracking';
import SectionTitle from '../SectionTitle';
import { CONTENT } from './config';

const AboutMe = ({ ref }: { ref?: Ref<HTMLElement> }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackingRef = useSectionTimeTracking('about_me');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;
        trackingRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref)
          (ref as React.RefObject<HTMLElement | null>).current = node;
      }}
      className="w-full bg-white py-16 dark:bg-gray-900 sm:py-24"
    >
      <div className="section-content flex flex-col items-start">
        <SectionTitle isVisible={isVisible}>About me</SectionTitle>
        <div className="max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300 sm:text-justify">
          {CONTENT.map((item, index) => (
            <div
              key={item}
              className={isVisible ? 'animate-fade-up' : 'opacity-0'}
              style={{
                animationDelay: `${(index + 1) * 150}ms`,
                animationFillMode: 'both',
              }}
            >
              <p className="mb-4">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

AboutMe.displayName = 'AboutMe';

export default AboutMe;
