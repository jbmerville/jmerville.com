export interface Experience {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  link: string;
  logoPath: string;
}

export const CONTENT: Experience[] = [
  {
    company: 'Amazon',
    title: 'Software Development Engineer II',
    location: 'Atlanta, United States',
    startDate: 'June 2025',
    endDate: 'Present',
    description:
      'Relocated to Atlanta to build internal tooling that supports thousands of Prime Video Channels subscriptions offered globally. Developed systems that enable stakeholders to manage channel offer pricing, configure promotions, launch new channels, and power region-specific partner experiences such as GDPR controls and customer data sharing.',
    link: 'https://www.primevideo.com/',
    logoPath: '/images/amazon_logo.png',
  },
  {
    company: 'Amazon',
    title: 'Software Development Engineer II',
    location: 'London, UK',
    startDate: 'April 2023',
    endDate: 'June 2025',
    description:
      'Promotted after leading a team of 6 engineers across multiple countries to deliver a critical NDA Prime Video project on an accelerated timeline, enabling customers to subscribe to an ad-free experience. Designed and shipped scalable subscription management features while coordinating across engineering, product, and partner teams in a high-visibility environment.',
    link: 'https://www.primevideo.com/',
    logoPath: '/images/amazon_logo.png',
  },
  {
    company: 'Amazon',
    title: 'Software Development Engineer',
    location: 'London, UK',
    startDate: 'July 2021',
    endDate: 'April 2023',
    description:
      'Built backend and customer-facing subscription management features for Prime Video Channels, contributing to systems that support complex customer lifecycle actions at scale. Worked across distributed services and product surfaces to improve reliability, user experience, and operational efficiency.',
    link: 'https://www.primevideo.com/',
    logoPath: '/images/amazon_logo.png',
  },
  {
    company: 'York University',
    title: 'Teaching Assistant',
    location: 'Toronto, Canada',
    startDate: 'Sept 2020',
    endDate: 'Apr 2021',
    description:
      'Continued to lead the same  weekly classes for undergraduate Computer Science students, teaching object-oriented programming for mobile application development.',
    link: 'https://www.yorku.ca/',
    logoPath: '/images/york_university.png',
  },
  {
    company: 'Amazon',
    title: 'Software Development Engineer Intern',
    location: 'London, UK',
    startDate: 'May 2020',
    endDate: 'Sept 2020',
    description:
      'Built a centralized tool to help teams search and explore hundreds of Prime Video channels and their associated offers in one place. Developed a frontend table displaying channel metadata (name, logo, offers), powered by an Elasticsearch cluster refreshed every 30 minutes via a data aggregation pipeline. Implemented backend APIs to support dynamic querying and provide filter options such as regions, pricing, and offer types.',
    link: 'https://www.primevideo.com/',
    logoPath: '/images/amazon_logo.png',
  },
  {
    company: 'York University',
    title: 'Teaching Assistant',
    location: 'Toronto, Canada',
    startDate: 'Jan 2020',
    endDate: 'Apr 2020',
    description:
      'Led weekly classes for undergraduate Computer Science students, teaching object-oriented programming for mobile application development.',
    link: 'https://www.yorku.ca/',
    logoPath: '/images/york_university.png',
  },
  {
    company: 'Srvice Inc.',
    title: 'Mobile Engineer Intern',
    location: 'Toronto, Canada',
    startDate: 'Oct 2019',
    endDate: 'Apr 2020',
    description:
      'My first software engineering role. I contributed to the development of mobile and web applications that allowed customers to discover and book local services.',
    link: 'https://scena360.com/',
    logoPath: '/images/srvice_inc.jpeg',
  },
];
