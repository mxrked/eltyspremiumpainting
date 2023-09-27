/**
 *
 *  This is the Fade Right Transition
 *
 */

import { motion } from "framer-motion";

import { FADE_RIGHT } from "../objects/FADES";

export const FadeRight = ({ children }) => {
  return <motion.div {...FADE_RIGHT}>{children}</motion.div>;
};
