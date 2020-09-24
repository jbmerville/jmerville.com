import React from 'react';

import {
  Card,
  Margin,
  Section
} from 'components';

import {
  SECTION_CATEGORIES,
  SECTION_CONTENT
} from './card-configs';

const Projects = () => {
  return (
    <>
      {SECTION_CATEGORIES.map((section) => {
        const sectionContent = SECTION_CONTENT.filter((item) => item.category === section.id).map((item, index, array) => {
          if (index < array.length - 1) {
            return (
              <Margin bottom={'VLARGE'}>
                <Card item={item} />
              </Margin>
            );
          }
          return <Card item={item} />;
        });
        return <Section section={section} content={sectionContent} />;
      })}
    </>
  );
};

export default Projects;
