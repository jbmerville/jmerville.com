import {
  Padding,
  Paddings,
  ScreenSize
} from 'values';

import getScreenSizeFromWidth from './getScreenSizeFromWidth';

function getPaddingsFromWidth(width: number): Padding {
  switch (getScreenSizeFromWidth(width)) {
    case ScreenSize.PHONE:
      return Paddings.PHONE;
    case ScreenSize.TABLET:
      return Paddings.TABLET;
    case ScreenSize.TV:
      return Paddings.TV;
    default:
      return Paddings.COMPUTER;
  }
}

export default getPaddingsFromWidth;
