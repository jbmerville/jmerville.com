'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CONTENT } from './config';

interface FooterProps {
  contactMeRef: React.RefObject<HTMLElement | null>;
}

const Footer: React.FC<FooterProps> = ({ contactMeRef }) => (
  <section ref={contactMeRef} className="w-full py-24">
    <div className="section-content flex flex-col items-start">
      <h2 className="mb-4 text-2xl font-bold uppercase tracking-wide text-gray-800 dark:text-gray-100">
        {CONTENT.title}
      </h2>
      <p className="mb-8 text-base leading-7 text-gray-700 dark:text-gray-300">
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
    </div>
  </section>
);

export default Footer;
