/**
 *
 *  This is the LoginToggler
 *
 */
import { BiSolidLogInCircle } from "react-icons/bi";

import styles from "../../../styles/modules/All/All.module.css";

export const LoginToggler = () => {
  return (
    <button
      id="loginToggler"
      className={`${styles.login_toggler} orientation-change-element half-second`}
      onClick={() => {
        if (document.querySelector("#loginWindow")) {
          const LOGIN_WINDOW = document.getElementById("loginWindow");

          LOGIN_WINDOW.style.display = "block";
        }
      }}
    >
      <span>Admin Login</span>
      <BiSolidLogInCircle className={`${styles.icon}`} />
    </button>
  );
};
