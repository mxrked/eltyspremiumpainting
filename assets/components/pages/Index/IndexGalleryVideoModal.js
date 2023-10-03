/**
 *
 *  This is the Index Gallery Video Modal
 *
 */

import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexGalleryVideoModal = () => {
  return (
    <div
      id="indexGalleryVideoModal"
      className={`${styles.index_gallery_modal} ${styles.index_gallery_video_modal}`}
    >
      <div
        id="indexGalleryVideoModalDarken"
        className={`${styles.modal_darken}`}
        onClick={() => {
          document.getElementById("indexGalleryVideoModal").style.overflowY =
            "hidden";
          document.getElementById(
            "indexGalleryVideoModal"
          ).style.pointerEvents = "none";

          // Stopping the video if playing
          if (!document.getElementById("indexGalleryVideo").paused) {
            document.getElementById("indexGalleryVideo").pause();
            document.getElementById("indexGalleryVideo").currentTime = 0; // Resets the video
          }

          document.getElementById("indexGalleryImgModal").style.opacity = 0;
          document.getElementById("indexGalleryImgModal").style.visibility =
            "hidden";

          document.getElementById("indexGalleryVideoModal").style.opacity = 0;
          document.getElementById("indexGalleryVideoModal").style.visibility =
            "hidden";

          RemoveStorageVariable("session", "Modal Opened");

          document.body.style.pointerEvents = "auto";
          document.body.style.overflowY = "auto";
        }}
      />

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
