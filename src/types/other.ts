import CSS from 'csstype';

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
  isButton?: boolean;
}
