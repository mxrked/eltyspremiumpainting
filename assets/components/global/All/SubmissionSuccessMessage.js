/**
 *
 *  This is the Submission Success Message
 *
 */

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import styles from "../../../styles/modules/All/All.module.css";

export const SubmissionSuccessMessage = () => {
  return (
    <div
      id="submissionSuccessMessage"
      className={`${styles.submission_success_message} full-second`}
    >
      <button
        onClick={(e) => {
          e.currentTarget.style.pointerEvents = "none";

          document.getElementById("submissionSuccessMessage").style.opacity = 0;
          document.getElementById("submissionSuccessMessage").style.visibility =
            "hidden";
        }}
      >
        <FaTimesCircle />
      </button>

      <div className={`${styles.submission_success_message_cnt}`}>
        <FaCheckCircle
          className={`${styles.icon} orientation-change-element half-second`}
        />

        <span>
          <span>Your contact form was sent successfully!</span>
          <span>We will reach out to you soon.</span>
        </span>
      </div>
    </div>
  );
};
