import React, { forwardRef } from 'react';

import {
  Margin,
  Section
} from 'components';

import { SECTION_CONTENT } from './card-configs';
import ProjectCard from './ProjectCard';

const Projects = forwardRef((props: {}, ref: any) => {
  return (
    <Section ref={ref} title="Projects" alignItems="baseline">
      {SECTION_CONTENT.map((item) => (
        <Margin key={item.id} bottom={'VLARGE'}>
          <ProjectCard item={item} />
        </Margin>
      ))}
    </Section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
