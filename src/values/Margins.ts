export enum MarginType {
  ZERO = 'ZERO',
  SMALL = 'SMALL',
  REGULAR = 'REGULAR',
  LARGE = 'LARGE',
  VLARGE = 'VLARGE',
}
export interface MarginHoriVertNumber {
  HORIZONTAL: number;
  VERTICAL: number;
}

const MARGIN_VALUE: {
  [key in keyof typeof MarginType]: MarginHoriVertNumber;
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
    HORIZONTAL: 70,
    VERTICAL: 70,
  },
  VLARGE: {
    HORIZONTAL: 70,
    VERTICAL: 70,
  },
};

export default MARGIN_VALUE;
