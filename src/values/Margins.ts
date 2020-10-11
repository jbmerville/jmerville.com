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
    HORIZONTAL: 20,
    VERTICAL: 20,
  },
  REGULAR: {
    HORIZONTAL: 45,
    VERTICAL: 45,
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
