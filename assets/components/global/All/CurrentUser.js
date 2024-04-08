/**
 *
 *  This is the Current User
 *
 */

import styles from "../../../styles/modules/All/All.module.css";

export const CurrentUser = () => {
  return (
    <div id="currentUser" className={`${styles.current_user}`}>
      <span>Admin Mode</span>

      <button
        onClick={() => {
          if (localStorage.getItem("Current User")) {
            localStorage.removeItem("Current User");

            document.location.reload();
          }
        }}
      >
        Logout
      </button>
    </div>
  );
};
