'use client';

import { type RefObject } from 'react';

interface HeroCardProps {
  title: { primary: string; secondary: string };
  description: string;
  isVisible: boolean;
  aboutMeRef: RefObject<HTMLElement | null>;
  contactMeRef: RefObject<HTMLElement | null>;
}

const HeroCard = ({
  title,
  description,
  isVisible,
  aboutMeRef,
  contactMeRef,
}: HeroCardProps) => {
  const { primary, secondary } = title;

  return (
    <div className="relative h-fit max-w-[515px] rounded-[15px] bg-white px-5 py-5 dark:bg-gray-800 sm:px-0">
      <div className="px-5 py-5">
        {/* Title */}
        <div
          className={`mt-4 ${isVisible ? 'animate-fade-up-fast' : 'opacity-0'}`}
        >
          <p className="text-3xl font-bold uppercase tracking-wide text-secondary">
            {primary}
          </p>
        </div>

        <div className={`my-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            {secondary}
          </p>
        </div>

        <div className={`mb-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <hr className="border-secondary" />
        </div>

        {/* Description */}
        <div className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
          <p className="text-base leading-6 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div
          className={`mt-4 flex flex-row ${isVisible ? 'animate-fade-up-slow' : 'opacity-0'}`}
        >
          <div className="mr-3 mt-4">
            <button
              onClick={() =>
                aboutMeRef.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }
              className="cursor-pointer rounded-md bg-secondary px-4 py-2 text-white transition-opacity hover:opacity-80"
            >
              About me
            </button>
          </div>
          <div className="mr-3 mt-4">
            <button
              onClick={() =>
                contactMeRef.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }
              className="cursor-pointer rounded-md bg-secondary px-4 py-2 text-white transition-opacity hover:opacity-80"
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
