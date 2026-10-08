'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSectionTimeTracking } from '../../_hooks/useSectionTimeTracking';
import SectionTitle from '../SectionTitle';
import { CONTENT } from './config';

interface FooterProps {
  contactMeRef: React.RefObject<HTMLElement | null>;
}

const Footer: React.FC<FooterProps> = ({ contactMeRef }) => {
  const trackingRef = useSectionTimeTracking('footer');
  return (
    <section
      ref={(node) => {
        trackingRef.current = node;
        contactMeRef.current = node;
      }}
      className="w-full py-16 sm:py-24"
    >
      <div className="section-content flex flex-col items-start">
        <SectionTitle>{CONTENT.title}</SectionTitle>
        <p className="mb-8 max-w-2xl text-base leading-7 text-gray-700 dark:text-gray-300">
          {CONTENT.description}
        </p>
        <div className="flex flex-col gap-4">
          {CONTENT.links.map(({ icon, label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 transition-colors hover:text-secondary dark:text-gray-300 dark:hover:text-secondary"
            >
              <FontAwesomeIcon icon={icon} className="w-5 text-xl" />
              <span className="text-sm">{label}</span>
            </a>
          ))}
        </div>
        <p className="mt-16 w-full border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          © {new Date().getFullYear()} Jean Merville
        </p>
      </div>
    </section>
  );
};

export default Footer;
