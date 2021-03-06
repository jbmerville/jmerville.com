interface IPaddings {
  TV: Padding;
  COMPUTER: Padding;
  TABLET: Padding;
  PHONE: Padding;
}

export interface Padding {
  TOPBOTTOM: string;
  LEFTRIGHT: string;
  ALL: string;
}

export const Paddings: IPaddings = {
  TV: {
    TOPBOTTOM: 'auto',
    LEFTRIGHT: 'auto',
    ALL: 'auto',
  },
  COMPUTER: {
    TOPBOTTOM: 'auto',
    LEFTRIGHT: 'auto',
    ALL: 'auto',
  },
  TABLET: {
    TOPBOTTOM: '80px',
    LEFTRIGHT: '100px',
    ALL: '80px 100px',
  },
  PHONE: {
    TOPBOTTOM: '15px',
    LEFTRIGHT: '20px',
    ALL: '15px 20px',
  },
};

export enum FontSize {
  XS = '0.8em',
  S = '0.9em',
  M = '1.1em',
  L = '1.4em',
  XL = '2.1em',
  XXL = '3em',
  XXXL = '4em',
}

export const MaxWidth = '1200px';
