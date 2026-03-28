'use client';

import { useSectionTimeTracking } from '../../_hooks/useSectionTimeTracking';
import { CONTENT } from './config';
import WorkHistoryCard from './WorkHistoryCard';

const WorkHistory = () => {
  const ref = useSectionTimeTracking('work_experience');
  return (
    <section ref={ref} className="w-full py-24">
      <div className="section-content flex flex-col items-center">
        <h2 className="mb-6 sm:mb-20 text-2xl font-bold uppercase tracking-wide text-gray-800 dark:text-gray-100">
          Work Experience
        </h2>
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
