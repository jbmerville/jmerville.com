import { Colors } from 'values';

export interface Image {
  url: string;
  backgroundColor: Colors;
}

export interface Card {
  id: string;
  projectUrl?: string;
  githubUrl?: string;
  description: string | JSX.Element;
  category: string;
  title: string;
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
  extra?: Extra;
}
