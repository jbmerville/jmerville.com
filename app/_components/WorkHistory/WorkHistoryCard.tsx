'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { type Experience } from './config';

interface WorkHistoryCardProps {
  experience: Experience;
  floatLeft: boolean;
  isFirstCard: boolean;
  isLastCard: boolean;
}

const WorkHistoryCard = ({
  experience,
  floatLeft,
  isFirstCard,
  isLastCard,
}: WorkHistoryCardProps) => {
  const {
    company,
    title,
    location,
    startDate,
    endDate,
    description,
    link,
    logoPath,
  } = experience;
  const rowRef = useRef<HTMLDivElement>(null);
  const [cardTransform, setCardTransform] = useState<string | undefined>(
    undefined,
  );
  const [dateTransform, setDateTransform] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    const clamp = (min: number, max: number, val: number) =>
      Math.min(Math.max(min, val), max);

    // Returns a progress value in [0, 1]:
    // 1 = fully offset (entering from side or exiting to side)
    // 0 = fully in view
    const getProgress = (rowTop: number, vh: number): number => {
      const entranceZoneStart = vh; // row fully below viewport
      const entranceZoneEnd = vh * 0.7; // row enters the bottom 30% of viewport
      const exitZoneStart = vh * -0.1; // row just past the top of viewport
      const exitZoneEnd = vh * -0.4; // row well past the top

      if (rowTop > entranceZoneEnd) {
        return clamp(
          0,
          1,
          (rowTop - entranceZoneEnd) / (entranceZoneStart - entranceZoneEnd),
        );
      }

      if (rowTop < exitZoneStart) {
        return clamp(
          0,
          1,
          (exitZoneStart - rowTop) / (exitZoneStart - exitZoneEnd),
        );
      }

      return 0;
    };

    const updateTransform = () => {
      if (!rowRef.current) return;
      const rowTop = rowRef.current.getBoundingClientRect().top;
      const vh = window.innerHeight;
      const isMobile = window.innerWidth < 640;
      const progress = getProgress(rowTop, vh);

      // On mobile all cards are on the left side, so always slide from left
      const direction = isMobile ? -1 : floatLeft ? 1 : -1;
      const offset = direction * progress * 150;
      setCardTransform(`translateX(${offset}px)`);
      setDateTransform(`translateX(${-offset}px)`);
    };

    window.addEventListener('scroll', updateTransform);
    updateTransform();
    return () => window.removeEventListener('scroll', updateTransform);
  }, [floatLeft]);

  return (
    <div
      ref={rowRef}
      className={`flex w-full justify-evenly ${floatLeft ? 'flex-row' : 'flex-row-reverse'} max-sm:flex-row-reverse`}
    >
      {/* Date + location — desktop only */}
      <div
        style={{ transform: dateTransform }}
        className={`hidden w-[450px] flex-col justify-center pt-[5px] sm:flex ${floatLeft ? 'items-end text-right' : 'items-start text-left'}`}
      >
        <p className="text-m leading-7 text-gray-700 dark:text-gray-300">
          {startDate} - {endDate}
        </p>
        <p className="text-sm leading-7 text-gray-700 dark:text-gray-300">
          {location}
        </p>
      </div>

      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div
          className={`w-[3px] flex-1 ${isFirstCard ? 'bg-transparent' : 'bg-secondary'}`}
        />
        <div className="relative mx-5 my-2 flex h-14 w-14 items-center justify-center rounded-full bg-white p-2 dark:bg-gray-800 sm:h-20 sm:w-20">
          <Image
            src={logoPath}
            alt={`${company} logo`}
            fill
            sizes="40px"
            className="rounded-full object-contain p-1"
          />
        </div>
        <div
          className={`w-[3px] flex-1 ${isLastCard ? 'bg-transparent' : 'bg-secondary'}`}
        />
      </div>

      {/* Card — transform applied directly so layout (timeline) is unaffected */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ transform: cardTransform }}
        className={`mb-12 w-[450px] rounded-[10px] bg-white px-5 py-5 no-underline transition-shadow duration-150 hover:-translate-y-px hover:shadow-lg dark:bg-gray-800 dark:hover:shadow-[0_7px_14px_rgb(18_18_18/55%),0_3px_6px_rgba(0,0,0,0.08)] ${isFirstCard ? 'mt-0' : 'mt-12'} ${floatLeft ? 'text-left' : 'text-right'} max-sm:text-left`}
      >
        <p className="text-base font-bold leading-6 text-gray-800 dark:text-gray-200">
          {company}
        </p>
        <p className="text-base font-bold leading-6 text-gray-800 dark:text-gray-200">
          {title}
        </p>
        <div className="sm:hidden mt-1 mb-4 border-b border-gray-200 pb-4 dark:border-gray-700">
          <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
            {startDate} - {endDate}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">{location}</p>
        </div>
        <p className="text-sm leading-7 text-gray-700 dark:text-gray-300">
          {description}
        </p>
      </a>
    </div>
  );
};

export default WorkHistoryCard;
