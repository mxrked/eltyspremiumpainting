/**
 *
 *  This is the Fade Down Transition
 *
 */

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// import { FADE_DOWN } from "../objects/FADES";

export const FadeDown = ({ threshold = 0.5, delay = 0, children }) => {
  const [HAS_ANIMATED, SET_HAS_ANIMATED] = useState(false);
  const CONTROLS = useAnimation();
  const REF = useRef(null);

  useEffect(() => {
    const { offsetTop, offsetHeight } = REF.current;

    const ELEMENT = REF.current;

    const handleScroll = () => {
      // Making it only display once
      if (!HAS_ANIMATED && ELEMENT) {
        window.requestAnimationFrame(() => {
          // Getting if the user has scrolled close to the element
          const isMobile = window.innerWidth <= 768; // Adjust the width as needed for your definition of mobile

          const IS_VISIBLE =
            window.scrollY + window.innerHeight >
            offsetTop + offsetHeight * threshold;
          console.log("Is Visible: " + IS_VISIBLE);

          // Displaying element
          if (!isMobile && IS_VISIBLE) {
            CONTROLS.start({ opacity: 1, y: 0 });
            SET_HAS_ANIMATED(true);
          }
        });
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
