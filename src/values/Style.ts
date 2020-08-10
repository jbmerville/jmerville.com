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
    TOPBOTTOM: '250px',
    LEFTRIGHT: '350px',
    ALL: '250px 350px',
  },
  COMPUTER: {
    TOPBOTTOM: '160px',
    LEFTRIGHT: '200px',
    ALL: '160px 200px',
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
