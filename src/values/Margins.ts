export type MarginType = 'ZERO' | 'SMALL' | 'REGULAR' | 'LARGE' | 'VLARGE';

export interface MarginHorVert {
  HORIZONTAL: number;
  VERTICAL: number;
}

const MARGIN_VALUE: {
  [key in MarginType]: MarginHorVert;
} = {
  ZERO: {
    HORIZONTAL: 0,
    VERTICAL: 0,
  },
  SMALL: {
    HORIZONTAL: 30,
    VERTICAL: 30,
  },
  REGULAR: {
    HORIZONTAL: 70,
    VERTICAL: 70,
  },
  LARGE: {
    HORIZONTAL: 120,
    VERTICAL: 120,
  },
  VLARGE: {
    HORIZONTAL: 250,
    VERTICAL: 250,
  },
};

export default MARGIN_VALUE;
