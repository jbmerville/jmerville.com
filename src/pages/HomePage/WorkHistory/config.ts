export const CONTENT: Experience[] = [
  {
    company: 'York University',
    title: 'Teaching Assistant',
    location: 'Toronto, Canada',
    startDate: 'Sept 2020',
    endDate: 'Present',
    description:
      'Lead weekly classes for undergraduate Computer Science students, teaching object-oriented programming for mobile application development.',
    link: 'https://www.yorku.ca/',
    logoPath: 'images/york_university.jpeg',
  },
  {
    company: 'Amazon',
    title: 'Software Engineer Intern',
    location: 'London, UK',
    startDate: 'May 2020',
    endDate: 'Sept 2020',
    description:
      'Architected and build ElasticSearch powered search engine capable of searching through subscription product entities. Developed a pipeline supporting AWS infastructure, a frontend table and backend API that filters out results.',
    link: 'https://www.primevideo.com/',
    logoPath: 'images/amazon_logo.png',
  },
  {
    company: 'York University',
    title: 'Teaching Assistant',
    location: 'Toronto, Canada',
    startDate: 'Jan 2020',
    endDate: 'Apr 2020',
    description:
      'Lead weekly classes for undergraduate Computer Science students, teaching object-oriented programming for mobile application development.',
    link: 'https://www.yorku.ca/',
    logoPath: 'images/york_university.jpeg',
  },
  {
    company: 'Srvice Inc.',
    title: 'Full-Stack engineer',
    location: 'Toronto, Canada',
    startDate: 'Oct 2020',
    endDate: 'Apr 2020',
    description: 'Contributed to the development of a mobile and web application giving customers an interface to book local services.',
    link: 'https://scena360.com/',
    logoPath: 'images/srvice_inc.jpeg',
  },
];

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
