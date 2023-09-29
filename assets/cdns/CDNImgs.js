/**
 *
 *  This holds the urls/srcs for the imgs
 *
 */

import { CDNImgReturn } from "./CDNReturns";

const LOGO = CDNImgReturn("logo", "logo-without-bottom", "webp");

const SPLASH_CORNER_IMG = CDNImgReturn(
  "index",
  "paint-splash-2-recolored",
  "webp"
);
const SPLASH_MAIN_IMG = CDNImgReturn("index", "paint-splash-recolored", "webp");
const COMBO_1 = CDNImgReturn("index", "combo-1", "webp");

export { LOGO };
export { SPLASH_CORNER_IMG, SPLASH_MAIN_IMG };
export { COMBO_1 };
