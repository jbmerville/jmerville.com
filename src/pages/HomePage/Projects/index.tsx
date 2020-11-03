import React, { forwardRef } from 'react';

import { Margin, Section } from 'components';

import { CONTENT } from './config';
import ProjectCard from './ProjectCard';

const Projects = forwardRef((props: {}, ref: any) => {
  return (
    <Section ref={ref} title="Projects">
      {CONTENT.map((item, index) => {
        const isLastItem = index === CONTENT.length - 1;

        return isLastItem ? (
          <ProjectCard key={item.id} item={item} />
        ) : (
          <Margin key={item.id} bottom={'VLARGE'}>
            <ProjectCard item={item} />
          </Margin>
        );
      })}
    </Section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
