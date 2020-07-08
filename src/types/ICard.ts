import CSS from 'csstype';
import { Colors } from 'values';

export enum CardTypes {
  NORMAL = 'NORMAL',
  EXTENDED = 'EXTENDED',
}

export interface Title {
  primary: string;
  secondary?: string;
}

export interface Image {
  url: string;
  style: CSS.Properties;
  backgroundColor: Colors;
  caption?: {
    text: string;
    color?: Colors;
  };
}

export interface Card {
  id: string;
  type: CardTypes;
  link?: string;
  description: string;
  category: string;
  title: Title;
  image: Image;
}

export interface Extra {
  howWasItMade: string;
  buttons: Button[];
  sections: Section[];
}

export interface Section {
  image: string;
  imageWidth?: string;
  title: string;
  caption?: string;
}

export interface Button {
  link: string;
  text: string;
  icon: {
    fontAwesomeIcon: string;
    size?: string;
  };
}

export interface CardExtra extends Card {
  extra: Extra;
}
