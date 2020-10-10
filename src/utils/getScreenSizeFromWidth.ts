import { ScreenSize } from 'values';

function getScreenSizeFromWidth(screenSize: number): ScreenSize {
  if (screenSize < ScreenSize.PHONE) {
    return ScreenSize.PHONE;
  }
  if (screenSize < ScreenSize.TABLET) {
    return ScreenSize.TABLET;
  }
  if (screenSize < ScreenSize.COMPUTER) {
    return ScreenSize.COMPUTER;
  }
  return ScreenSize.TV;
}

export default getScreenSizeFromWidth;
