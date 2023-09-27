/**
 *
 *  This is the Page Transition
 *
 */

import { motion } from "framer-motion";

import { PAGE_FADE } from "../objects/FADES";

export const PageTransition = ({ children }) => {
  return <motion.div {...PAGE_FADE}>{children}</motion.div>;
};
