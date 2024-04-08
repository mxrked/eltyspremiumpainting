/**
 *
 *  This is the LoginWindow
 *
 */

import { useState } from "react";
import axios from "axios";

import { FaTimes } from "react-icons/fa";

import styles from "../../../styles/modules/All/All.module.css";

export const LoginWindow = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/loginUser", {
        username,
        password,
      });

      const { token } = response.data;

      // Store the token in localStorage
      localStorage.setItem("Current User", token);

      document.location.reload();
    } catch (error) {
      setError("Invalid username or password!");
      console.error("Login error:", error);
    }
  };

  return (
    <div id="loginWindow" className={`${styles.login_window}`}>
      <div id="loginWindowDarken" className={`${styles.login_window_darken}`} />

      <div id="loginWindowMain" className={`${styles.login_window_main}`}>
        <div className={`${styles.login_window_main_top}`}>
          <span className="orientation-change-element">Admin Login</span>

          <button className="orientation-change-element">
            <FaTimes className={`${styles.icon}`} />
          </button>
        </div>

        <div className={`${styles.login_window_main_form_holder}`}>
          <form
            onSubmit={(e) => {
              handleLogin(e);
            }}
          >
            <div className={`${styles.form_set}`}>
              <span className="orientation-change-element">
                Enter Username:
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="adminUsername"
                name="adminUsername"
                className="orientation-change-element"
              />
            </div>

            <div className={`${styles.form_set}`}>
              <span className="orientation-change-element">
                Enter Password:
              </span>
              <input
                type="password"
                id="adminPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="adminPassword"
                className="orientation-change-element"
              />
            </div>

            <span
              id="loginError"
              className={`${styles.login_error} orientation-change-element`}
            >
              INSERT_ERROR_HERE
            </span>

            <div className={`${styles.form_btns}`}>
              <button type={"reset"} className="orientation-change-element">
                Clear
              </button>
              <button type={"submit"} className="orientation-change-element">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
