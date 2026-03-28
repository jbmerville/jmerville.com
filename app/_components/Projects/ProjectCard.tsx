'use client';

import { useEffect, useRef, useState } from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import { type CardItem } from './config';

const ProjectCard = ({ item }: { item: CardItem }) => {
  const { title, description, image, projectUrl, githubProjectName } = item;
  const { url, backgroundColor, objectFit = 'cover' } = image;
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string | undefined>(undefined);

  useEffect(() => {
    const clamp = (min: number, max: number, val: number) =>
      Math.min(Math.max(min, val), max);

    // Returns how far (in px) the card should be offset from its natural position.
    // Positive = shifted down (entering), negative = shifted up (exiting).
    const getTranslateY = (
      cardTop: number,
      cardHeight: number,
      vh: number,
    ): number => {
      const entranceZoneStart = vh; // card fully below viewport
      const entranceZoneEnd = vh * 0.6; // starts when previous card's bottom reaches viewport midpoint
      const exitZoneStart = -(cardHeight / 4); // card is 1/4 past the top of viewport
      const exitZoneEnd = -(cardHeight * 1.5); // card is well past the top
      if (cardTop > entranceZoneEnd) {
        // Entrance: slide card down-to-up into place as it enters from below
        const progress =
          (cardTop - entranceZoneEnd) / (entranceZoneStart - entranceZoneEnd);
        return clamp(0, 100, progress * 100);
      }

      if (cardTop < exitZoneStart) {
        // Exit: slide card upward until fully off-screen (translateY reaches -cardHeight)
        const progress =
          (exitZoneStart - cardTop) / (exitZoneStart - exitZoneEnd);
        return clamp(-cardHeight, 0, -progress * cardHeight);
      }

      return 0; // card is fully in view — no offset
    };

    const updateTransform = () => {
      if (!ref.current) return;
      const { top: cardTop, height: cardHeight } =
        ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const translateY = getTranslateY(cardTop, cardHeight, vh);

      setTransform(`matrix(1, 0, 0, 1, 0, ${translateY})`);
    };

    window.addEventListener('scroll', updateTransform);
    updateTransform();
    return () => window.removeEventListener('scroll', updateTransform);
  }, []);

  const renderButton = (label: string, href: string, icon: IconDefinition) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-3 mt-3 inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm text-white transition-opacity hover:opacity-80"
    >
      <FontAwesomeIcon icon={icon} />
      {label}
    </a>
  );

  return (
    <div
      ref={ref}
      style={{ transform }}
      className="overflow-hidden rounded-[30px] bg-[var(--background)] sm:grid sm:min-h-[400px] sm:grid-cols-2"
    >
      {/* Image — top on mobile, right on desktop */}
      <div
        className="relative h-[400px] sm:order-last sm:h-auto"
        style={{ backgroundColor: backgroundColor ?? undefined }}
      >
        <Image
          src={url}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className={
            objectFit === 'contain' ? 'object-contain' : 'object-cover'
          }
        />
      </div>

      {/* Text */}
      <div className="px-6 py-8 sm:px-10 sm:py-10">
        <p className="mb-4 text-2xl font-semibold text-secondary">{title}</p>
        {description.map((line) => (
          <p
            key={line}
            className="mt-3 text-base leading-6 text-gray-700 dark:text-gray-300"
          >
            {line}
          </p>
        ))}
        <div className="mt-4">
          {githubProjectName &&
            renderButton(
              'Code',
              `https://github.com/jbmerville/${githubProjectName}`,
              faGithub,
            )}
          {projectUrl &&
            renderButton('Project', projectUrl, faExternalLinkSquareAlt)}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
