import {
  Padding,
  Paddings
} from 'values';
import { ScreenWidth } from 'values/ScreenSizes';

export function getPaddingsFromWidth(currentScreenWidth: number): Padding {
  if (currentScreenWidth < ScreenWidth.PHONE) {
    return Paddings.PHONE;
  }
  if (currentScreenWidth < ScreenWidth.TABLET) {
    return Paddings.TABLET;
  }
  if (currentScreenWidth < ScreenWidth.COMPUTER) {
    return Paddings.COMPUTER;
  }
  return Paddings.TV;
}
