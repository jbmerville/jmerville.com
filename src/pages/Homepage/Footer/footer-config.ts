import {
  Icon,
  Link
} from 'types';

import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const BUTTONS: { link: Link; icon: Icon }[] = [
  {
    link: {
      id: 'github',
      url: 'https://github.com/jbmerville',
      label: 'GitHub',
    },
    icon: {
      fontAwesomeIcon: faGithub,
    },
  },
  {
    link: {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/jbmerville/',
      label: 'LinkedIn',
    },
    icon: {
      fontAwesomeIcon: faLinkedin,
    },
  },
  {
    link: {
      id: 'email',
      url: 'mailto:jbmer@my.yorku.ca',
      label: 'Email',
    },
    icon: {
      fontAwesomeIcon: faEnvelope,
      size: '20px',
    },
  },
];
