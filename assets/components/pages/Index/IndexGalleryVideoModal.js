/**
 *
 *  This is the Index Gallery Video Modal
 *
 */

import { FaTimes } from "react-icons/fa";

import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexGalleryVideoModal = () => {
  const closeModal = () => {
    // Hide vertical scrollbar and disable pointer events on the modal container
    document.getElementById("indexGalleryVideoModal").style.overflowY =
      "hidden";
    document.getElementById("indexGalleryVideoModal").style.pointerEvents =
      "none";

    // Disabling scroll animation on close
    // Check if the current scroll position is different from the last scroll position stored in sessionStorage
    if (window.scrollY != sessionStorage.getItem("Last Scroll Pos")) {
      // Disable smooth scroll behavior
      document.documentElement.style.scrollBehavior = "auto";
    }

    // Stopping the video if playing
    if (!document.getElementById("indexGalleryVideo").paused) {
      // Pause the video and reset its playback time to 0
      document.getElementById("indexGalleryVideo").pause();
      document.getElementById("indexGalleryVideo").currentTime = 0; // Resets the video
    }

    // Hide the modal by adjusting opacity and visibility
    document.getElementById("indexGalleryVideoModal").style.opacity = 0;
    document.getElementById("indexGalleryVideoModal").style.visibility =
      "hidden";

    // Remove a specific item from sessionStorage indicating the modal is closed
    RemoveStorageVariable("session", "Modal Opened");

    // Enable pointer events and vertical scrollbar on the body
    document.body.style.pointerEvents = "auto";
    document.body.style.overflowY = "auto";

    // Check if the current scroll position is different from the last scroll position stored in sessionStorage
    if (window.scrollY != sessionStorage.getItem("Last Scroll Pos")) {
      // Scroll back to the last scroll position with smooth scroll behavior
      window.scroll(0, sessionStorage.getItem("Last Scroll Pos"));
      document.documentElement.style.scrollBehavior = "smooth";
    }
  };

  return (
    <div
      id="indexGalleryVideoModal"
      className={`${styles.index_gallery_modal} ${styles.index_gallery_video_modal}`}
    >
      <div
        id="indexGalleryVideoModalDarken"
        className={`${styles.modal_darken}`}
        onClick={() => {
          closeModal();
        }}
      />

      <button
        onClick={() => {
          closeModal();
        }}
      >
        <FaTimes />
      </button>

      <div
        className={`${styles.modal_video_holder} orientation-change-element half-second`}
      >
        <video
          controls={"true"}
          id="indexGalleryVideo"
          src={undefined}
          type="video/mp4"
        ></video>
      </div>
    </div>
  );
};
