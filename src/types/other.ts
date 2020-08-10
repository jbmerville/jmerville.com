import CSS from 'csstype';

export interface Styles {
  [name: string]: CSS.Properties;
}

export interface ProcessEnv {
  [key: string]: string;
}
