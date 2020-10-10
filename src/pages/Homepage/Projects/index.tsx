import React from 'react';

import {
  Card,
  Margin,
  Section
} from 'components';

import { SECTION_CONTENT } from './card-configs';

const Projects = () => {
  return (
    <Section title="Project">
      {SECTION_CONTENT.map((item) => (
        <Margin key={item.id} bottom={'VLARGE'}>
          <Card item={item} />
        </Margin>
      ))}
    </Section>
  );
};

export default Projects;
