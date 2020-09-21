import { getScreenSizeFromWidth } from 'utils';
import { ScreenSize } from 'values';
import { MarginHoriVertNumber } from 'values/Margins';

export interface MarginHoriVertString {
  HORIZONTAL: string;
  VERTICAL: string;
}
const adjustMarginFromWidth = (width: number, margin: MarginHoriVertNumber): MarginHoriVertString => {
  const screenSize = getScreenSizeFromWidth(width);
  switch (screenSize) {
    case ScreenSize.PHONE:
      return {
        HORIZONTAL: `${Math.max(margin.HORIZONTAL - 10, 0)}px`,
        VERTICAL: `${Math.max(margin.HORIZONTAL - 10, 0)}px`,
      };
    case ScreenSize.TABLET:
      return {
        HORIZONTAL: `${Math.max(margin.HORIZONTAL - 5, 0)}px`,
        VERTICAL: `${Math.max(margin.HORIZONTAL - 5, 0)}px`,
      };
    case ScreenSize.TV:
      return {
        HORIZONTAL: `${Math.max(margin.HORIZONTAL + 10, 0)}px`,
        VERTICAL: `${Math.max(margin.HORIZONTAL + 10, 0)}px`,
      };
    default:
      return {
        HORIZONTAL: `${margin.HORIZONTAL}px`,
        VERTICAL: `${margin.HORIZONTAL}px`,
      };
  }
};

export default adjustMarginFromWidth;
