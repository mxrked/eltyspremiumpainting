/**
 *
 *  This is the Fade Up Transition
 *
 */

import { motion } from "framer-motion";

import { FADE_UP } from "../objects/FADES";

export const FadeUp = ({ children }) => {
  return <motion.div {...FADE_UP}>{children}</motion.div>;
};
