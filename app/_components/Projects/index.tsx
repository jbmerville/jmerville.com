'use client';

import { type Ref } from 'react';

import { useSectionTimeTracking } from '../../_hooks/useSectionTimeTracking';
import SectionTitle from '../SectionTitle';
import { CONTENT } from './config';
import ProjectCard from './ProjectCard';

const Projects = ({ ref }: { ref?: Ref<HTMLElement> }) => {
  const trackingRef = useSectionTimeTracking('projects');
  return (
    <section
      ref={(node) => {
        trackingRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref)
          (ref as React.RefObject<HTMLElement | null>).current = node;
      }}
      className="w-full bg-white py-16 dark:bg-gray-900 sm:py-24"
    >
      <div className="section-content flex flex-col items-start">
        <SectionTitle>Side Projects</SectionTitle>
        <div className="flex w-full flex-col gap-10 sm:gap-16">
          {CONTENT.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

Projects.displayName = 'Projects';

export default Projects;
