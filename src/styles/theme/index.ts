import { font } from './font';
import { color } from './color';
import { shadow } from './shadow';
import { borderRadius } from './borderRadius';

export const theme = {
  color,
  font,
  shadow,
  borderRadius,
};

export type keyOfFont = keyof typeof font;
export type keyOfColor = keyof typeof color;
