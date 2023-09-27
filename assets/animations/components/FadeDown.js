/**
 *
 *  This is the Fade Down Transition
 *
 */

import { motion } from "framer-motion";

import { FADE_DOWN } from "../objects/FADES";

export const FadeDown = ({ children }) => {
  return <motion.div {...FADE_DOWN}>{children}</motion.div>;
};
