/**
 *
 *  This is the Fade Left Transition
 *
 */

import { motion } from "framer-motion";

import { FADE_LEFT } from "../objects/FADES";

export const FadeLeft = ({ children }) => {
  return <motion.div {...FADE_LEFT}>{children}</motion.div>;
};
