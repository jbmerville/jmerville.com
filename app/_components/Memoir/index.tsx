'use client';

import { useEffect, useRef, useState } from 'react';

import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import { useSectionTimeTracking } from '../../_hooks/useSectionTimeTracking';
import { usePostHog } from '../PostHogProvider';
import SectionTitle from '../SectionTitle';
import { CONTENT } from './config';

const Memoir = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackingRef = useSectionTimeTracking('memoir');
  const posthog = usePostHog();
  const [isVisible, setIsVisible] = useState(false);

  const { title, tagline, logoPath, paragraphs, links } = CONTENT;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delayMs: number) => ({
    className: isVisible ? 'animate-fade-up' : 'opacity-0',
    style: {
      animationDelay: `${delayMs}ms`,
      animationFillMode: 'both' as const,
    },
  });

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;
        trackingRef.current = node;
      }}
      className="w-full py-16 sm:py-24"
    >
      <div className="section-content flex flex-col items-start">
        <SectionTitle isVisible={isVisible}>{title}</SectionTitle>

        <div
          style={fadeUp(150).style}
          className={`${fadeUp(150).className} flex w-full flex-col items-center gap-6 rounded-[15px] bg-white p-6 shadow-sm dark:bg-gray-800 sm:flex-row sm:items-start sm:gap-10 sm:p-10`}
        >
          {/* Logo */}
          <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-3xl sm:h-44 sm:w-44">
            <Image
              src={logoPath}
              alt="Memoir logo"
              fill
              sizes="(max-width: 640px) 144px, 176px"
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex min-w-0 flex-1 flex-col">
            <p className="text-xl text-gray-800 dark:text-gray-200">
              {tagline}
            </p>
            <hr className="my-4 w-24 border-t-2 border-secondary" />
            <div className="text-base leading-7 text-gray-700 dark:text-gray-300 sm:text-justify">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  style={fadeUp((index + 2) * 150).style}
                  className={`mb-3 ${fadeUp((index + 2) * 150).className}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-2 flex flex-row flex-wrap">
              {links.map(({ id, label, url }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    posthog.capture('button_clicked', { button: id })
                  }
                  className="mr-3 mt-3 inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm text-white transition-opacity hover:opacity-80"
                >
                  <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Memoir.displayName = 'Memoir';

export default Memoir;
