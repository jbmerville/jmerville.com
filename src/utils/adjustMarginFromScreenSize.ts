import { getScreenSizeFromWidth } from 'utils';
import { ScreenSize } from 'values';
import { MarginHorVert } from 'values/Margins';

const adjustMarginFromWidth = (width: number, margin: MarginHorVert): MarginHorVert => {
  const screenSize = getScreenSizeFromWidth(width);
  switch (screenSize) {
    case ScreenSize.PHONE:
      return {
        HORIZONTAL: Math.max(margin.HORIZONTAL - 50, 0),
        VERTICAL: Math.max(margin.HORIZONTAL - 50, 0),
      };
    case ScreenSize.TABLET:
      return {
        HORIZONTAL: Math.max(margin.HORIZONTAL - 5, 0),
        VERTICAL: Math.max(margin.HORIZONTAL - 5, 0),
      };
    case ScreenSize.TV:
      return {
        HORIZONTAL: Math.max(margin.HORIZONTAL + 10, 0),
        VERTICAL: Math.max(margin.HORIZONTAL + 10, 0),
      };
    default:
      return {
        HORIZONTAL: margin.HORIZONTAL,
        VERTICAL: margin.HORIZONTAL,
      };
  }
};

export default adjustMarginFromWidth;
