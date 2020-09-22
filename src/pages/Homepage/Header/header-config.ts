import { Link } from 'types';

export const LINKS: { link: Link; isButton: boolean }[] = [
  {
    link: {
      id: 'work',
      label: 'Work',
      url: '/work',
    },
    isButton: false,
  },
  {
    link: {
      id: 'projects',
      label: 'Projects',
      url: '/Projects',
    },
    isButton: false,
  },
  {
    link: {
      id: 'resume',
      label: 'Resume',
      url: '/Resume',
    },
    isButton: true,
  },
];
