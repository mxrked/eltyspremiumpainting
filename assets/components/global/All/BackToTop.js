/**
 *
 *  This is the Back To Top
 *
 */

import { FaCaretUp } from "react-icons/fa";

import styles from "../../../styles/modules/All/All.module.css";
import { useEffect } from "react";

export const BackToTop = () => {
  const BackToTopStatus = () => {
    if (window.scrollY > 550) {
      document.getElementById("backToTop").style.bottom = "10px";
    } else {
      document.getElementById("backToTop").style.bottom = "-100%";
    }
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      BackToTopStatus();
    });
    window.addEventListener("scroll", () => {
      BackToTopStatus();
    });
  }, []);

  return (
    <div className={`${styles.back_to_top} full-second`} id="backToTop">
      <button
        className={`orientation-change-element half-second`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FaCaretUp className={`${styles.icon}`} />
      </button>
    </div>
  );
};
