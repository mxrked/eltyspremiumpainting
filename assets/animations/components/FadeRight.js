/**
 *
 *  This is the Fade Right Transition
 *
 */

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// import { FADE_RIGHT } from "../objects/FADES";

export const FadeRight = ({ threshold = 0.5, children }) => {
  const [HAS_ANIMATED, SET_HAS_ANIMATED] = useState(false);
  const CONTROLS = useAnimation();
  const REF = useRef();

  useEffect(() => {
    const ELEMENT = REF.current;

    const handleScroll = () => {
      if (!HAS_ANIMATED && ELEMENT) {
        const { left, width } = ELEMENT.getBoundingClientRect();
        const IS_VISIBLE =
          window.scrollX + window.innerWidth > left + width * threshold;

        if (IS_VISIBLE) {
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
      initial={{ opacity: 0, x: 50 }}
      animate={CONTROLS}
      transition={{ duration: 0.5 }}
      className="fm-element"
    >
      {children}
    </motion.div>
  );
};
