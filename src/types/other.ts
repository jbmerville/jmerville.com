import CSS from 'csstype';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Styles {
  [name: string]: CSS.Properties;
}

export type Style = CSS.Properties;

export interface ProcessEnv {
  [key: string]: string;
}

export interface Link {
  id: string;
  label: string;
  url: string;
}

export interface Icon {
  fontAwesomeIcon: IconDefinition;
  size?: string;
}
