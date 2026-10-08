'use client';

import { useSectionTimeTracking } from '../../_hooks/useSectionTimeTracking';
import SectionTitle from '../SectionTitle';
import { CONTENT } from './config';
import WorkHistoryCard from './WorkHistoryCard';

const WorkHistory = () => {
  const ref = useSectionTimeTracking('work_experience');
  return (
    <section ref={ref} className="w-full overflow-x-clip py-16 sm:py-24">
      <div className="section-content flex flex-col items-start">
        <SectionTitle>Work Experience</SectionTitle>
        {CONTENT.map((experience, index) => (
          <WorkHistoryCard
            key={experience.startDate}
            experience={experience}
            floatLeft={index % 2 === 0}
            isFirstCard={index === 0}
            isLastCard={index === CONTENT.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

WorkHistory.displayName = 'WorkHistory';

export default WorkHistory;
