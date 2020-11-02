import React, { useRef } from 'react';

import { Section } from 'components';
import { useTheme } from 'hooks';

import { CONTENT } from './config';
import WorkHistoryCard from './WorkHistoryCard';

const WorkHistory = () => {
  const { theme } = useTheme();
  const ref = useRef(null);

  return (
    <Section ref={ref} title="Experience" background={theme.background}>
      {CONTENT.map((experience, index) => {
        const floatLeft = index % 2 === 0;
        const isFirstCard = index === 0;
        const isLastCard = index === CONTENT.length - 1;

        return (
          <WorkHistoryCard
            key={experience.startDate}
            experience={experience}
            floatLeft={floatLeft}
            isFirstCard={isFirstCard}
            isLastCard={isLastCard}
          />
        );
      })}
    </Section>
  );
};

WorkHistory.displayName = 'WorkHistory';

export default WorkHistory;
