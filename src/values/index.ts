import Colors from './Colors';
import MARGIN_VALUE, { MarginType as M } from './Margins';
import repoLinesStats from './repo-lines-stats.json';
import ScreenSize from './ScreenSizes';
import {
  FontSize,
  MaxWidth,
  Padding as P,
  Paddings
} from './Style';
import {
  darkTheme,
  lightTheme
} from './Themes';

// Enums, consts
export { Colors, darkTheme, FontSize, lightTheme, MARGIN_VALUE, MaxWidth, Paddings, repoLinesStats, ScreenSize };

// Types
export type Padding = P;
export type MarginType = M;
