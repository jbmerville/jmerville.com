'use client';

import { type Ref } from 'react';

import { useSectionTimeTracking } from '../../_hooks/useSectionTimeTracking';
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
      className="w-full bg-white py-24 dark:bg-gray-900"
    >
      <div className="section-content flex flex-col items-center">
        <h2 className="mb-6 sm:mb-20 text-2xl font-bold uppercase tracking-wide text-gray-800 dark:text-gray-100">
          Side Projects
        </h2>
        <div className="flex flex-col">
          {CONTENT.map((item) => {
            return (
              <div key={item.id} className="mb-24">
                <ProjectCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Projects.displayName = 'Projects';

export default Projects;
