/**
 *
 *  This is the LoginCloser
 *
 */

import { FaTimes } from "react-icons/fa";

import styles from "../../../styles/modules/All/All.module.css";

export const LoginCloser = () => {
  return (
    <button
      id="loginCloser"
      className={`${styles.login_closer} orientation-change-element half-second`}
      onClick={(e) => {
        if (document.querySelector("#loginWindow")) {
          const LOGIN_WINDOW = document.getElementById("loginWindow");

          LOGIN_WINDOW.style.display = "none";

          document.getElementById("loginToggler").style.display = "flex";

          e.currentTarget.style.display = "none";
        }
      }}
    >
      <FaTimes className={`${styles.icon}`} />
    </button>
  );
};
