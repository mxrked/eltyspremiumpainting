/**
 *
 *  This is the Fade Left Transition
 *
 */

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// import { FADE_LEFT } from "../objects/FADES";

export const FadeLeft = ({ threshold = 0.5, delay = 0, children }) => {
  const [HAS_ANIMATED, SET_HAS_ANIMATED] = useState(false);
  const CONTROLS = useAnimation();
  const REF = useRef();

  useEffect(() => {
    const ELEMENT = REF.current;

    const handleScroll = () => {
      if (!HAS_ANIMATED && ELEMENT) {
        const { left, width } = ELEMENT.getBoundingClientRect();
        const isMobile = window.innerWidth <= 768; // Adjust the width as needed for your definition of mobile

        const IS_VISIBLE =
          window.scrollX + window.innerWidth > left + width * threshold;

        if (!isMobile && IS_VISIBLE) {
          CONTROLS.start({ opacity: 1, x: 0 });
          SET_HAS_ANIMATED(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [CONTROLS, threshold, HAS_ANIMATED]);

  return (
    <motion.div
      ref={REF}
      initial={{ opacity: 0, x: -50 }}
      animate={CONTROLS}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
