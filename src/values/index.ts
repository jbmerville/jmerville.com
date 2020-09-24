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
  themeDark,
  themeLight
} from './Themes';

// Enums, consts
export { Colors, FontSize, MARGIN_VALUE, MaxWidth, Paddings, repoLinesStats, ScreenSize, themeDark, themeLight };

// Types
export type Padding = P;
export type MarginType = M;
