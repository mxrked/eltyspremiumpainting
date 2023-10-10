/**
 *
 *  This is the Index Gallery Img Modal
 *
 */

import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaTimes } from "react-icons/fa";

import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexGalleryImgModal = () => {
  const closeModal = () => {
    // Hide vertical scrollbar and disable pointer events on the image modal container
    document.getElementById("indexGalleryImgModal").style.overflowY = "hidden";
    document.getElementById("indexGalleryImgModal").style.pointerEvents =
      "none";

    // Disabling scroll animation on close
    // Check if the current scroll position is different from the last scroll position stored in sessionStorage
    if (window.scrollY != sessionStorage.getItem("Last Scroll Pos")) {
      // Disable smooth scroll behavior
      document.documentElement.style.scrollBehavior = "auto";
    }

    // Hide the video modal by adjusting opacity and visibility
    document.getElementById("indexGalleryVideoModal").style.opacity = 0;
    document.getElementById("indexGalleryVideoModal").style.visibility =
      "hidden";

    // Hide the image modal by adjusting opacity and visibility
    document.getElementById("indexGalleryImgModal").style.opacity = 0;
    document.getElementById("indexGalleryImgModal").style.visibility = "hidden";

    // Remove a specific item from sessionStorage indicating the modal is closed
    RemoveStorageVariable("session", "Modal Opened");

    // Set the source of the image to "#" effectively clearing it
    document.getElementById("indexGalleryImg").src = "#";
    document.getElementById("indexGalleryImg").alt = "#";

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
      id="indexGalleryImgModal"
      className={`${styles.index_gallery_modal} ${styles.index_gallery_img_modal}`}
    >
      <div
        id="indexGalleryImgModalDarken"
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
        className={`${styles.modal_img_holder} orientation-change-element half-second`}
      >
        <LazyLoadImage id="indexGalleryImg" src="#" alt="#" />
      </div>
    </div>
  );
};
