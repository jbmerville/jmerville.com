import { type Ref } from 'react';

import { CONTENT } from './config';
import ProjectCard from './ProjectCard';

const Projects = ({ ref }: { ref?: Ref<HTMLElement> }) => (
  <section ref={ref} className="w-full bg-white py-24 dark:bg-gray-900">
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

Projects.displayName = 'Projects';

export default Projects;
