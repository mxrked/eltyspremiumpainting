/**
 *
 *  This is the Fade Down Transition
 *
 */

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// import { FADE_DOWN } from "../objects/FADES";

export const FadeDown = ({ threshold = 0.5, children }) => {
  const [HAS_ANIMATED, SET_HAS_ANIMATED] = useState(false);
  const CONTROLS = useAnimation();
  const REF = useRef();

  useEffect(() => {
    const ELEMENT = REF.current;

    const handleScroll = () => {
      // Making it only display once
      if (!HAS_ANIMATED) {
        // Getting if the user has scrolled close to the element
        const { TOP, BOTTOM } = ELEMENT.getBoundingClientRect();
        const IS_VISIBLE = TOP < window.innerHeight * threshold && BOTTOM >= 0;

        // Displaying element
        if (IS_VISIBLE) {
          CONTROLS.start({ opacity: 1, y: 0 });
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
      initial={{ opacity: 0, y: -50 }}
      animate={CONTROLS}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
