import { getScreenSizeFromWidth } from 'utils';
import { ScreenSize } from 'values';

const WIDTHS = {
  [ScreenSize.PHONE]: '100%',
  [ScreenSize.TABLET]: '500px',
  [ScreenSize.COMPUTER]: '1000px',
  [ScreenSize.TV]: '1400px',
};

const getMaxWidthFromScreenWidth = (width: number): string => {
  const screenSize = getScreenSizeFromWidth(width);
  return WIDTHS[screenSize];
};

export default getMaxWidthFromScreenWidth;
