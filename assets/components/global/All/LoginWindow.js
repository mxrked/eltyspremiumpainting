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
      setError("Invalid credentials!");
      console.error("Login error:", error);
    }
  };

  return (
    <div id="loginWindow" className={`${styles.login_window}`}>
      <div id="loginWindowMain" className={`${styles.login_window_main}`}>
        <div className={`${styles.login_window_main_top}`}>
          <span className="orientation-change-element">Login</span>
        </div>

        <div className={`${styles.login_window_main_form_holder}`}>
          <form
            onSubmit={(e) => {
              handleLogin(e);
            }}
            onReset={(e) => {
              setUsername("");
              setPassword("");
              setError("");
            }}
          >
            <div className={`${styles.form_set}`}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="adminUsername"
                name="adminUsername"
                className="orientation-change-element"
                placeholder="Username"
              />
            </div>

            <div className={`${styles.form_set}`}>
              <input
                type="password"
                id="adminPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="adminPassword"
                className="orientation-change-element"
                placeholder="Password"
              />
            </div>

            <span
              id="loginError"
              className={`${styles.login_error} orientation-change-element`}
            >
              {error}
            </span>

            <div className={`${styles.form_btns}`}>
              <button
                type={"reset"}
                className={`${styles.clear} orientation-change-element`}
              >
                Clear
              </button>
              <button
                type={"submit"}
                className={`${styles.login} orientation-change-element`}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
