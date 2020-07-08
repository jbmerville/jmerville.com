import { ICard } from 'types';

export const BUTTONS: ICard.Button[] = [
  {
    link: 'https://github.com/jbmerville',
    icon: {
      fontAwesomeIcon: 'fa fa-github',
    },
    text: 'GitHub',
  },
  {
    link: 'https://www.linkedin.com/in/jbmerville/',
    icon: {
      fontAwesomeIcon: 'fa fa-linkedin',
    },
    text: 'LinkedIn',
  },
  {
    link: 'mailto:jbmer@my.yorku.ca',
    icon: {
      fontAwesomeIcon: 'fa fa-envelope',
      size: '20px',
    },
    text: 'jbmer@my.yorku.ca',
  },
  {
    link: 'images/JeanBaptisteMervilleResume.pdf',
    icon: {
      fontAwesomeIcon: 'fa fa-file',
      size: '20px',
    },
    text: 'Resumé',
  },
];
