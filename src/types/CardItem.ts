import { Colors } from 'values';

export interface Image {
  url: string;
  backgroundColor: Colors;
}

export interface CardItem {
  id: string;
  projectUrl?: string;
  githubProjectName: string;
  description: string[];
  category: string;
  title: string;
  image: Image;
}
