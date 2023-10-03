/**
 *
 *  This is the Index Gallery Img Modal
 *
 */

import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexGalleryImgModal = () => {
  return (
    <div
      id="indexGalleryImgModal"
      className={`${styles.index_gallery_modal} ${styles.index_gallery_img_modal}`}
    >
      <div
        id="indexGalleryImgModalDarken"
        className={`${styles.modal_darken}`}
        onClick={() => {
          document.getElementById("indexGalleryImgModal").style.overflowY =
            "hidden";
          document.getElementById("indexGalleryImgModal").style.pointerEvents =
            "none";

          document.getElementById("indexGalleryVideoModal").style.opacity = 0;
          document.getElementById("indexGalleryVideoModal").style.visibility =
            "hidden";

          document.getElementById("indexGalleryImgModal").style.opacity = 0;
          document.getElementById("indexGalleryImgModal").style.visibility =
            "hidden";

          RemoveStorageVariable("session", "Modal Opened");

          document.getElementById("indexGalleryImg").src = "#";

          document.body.style.pointerEvents = "auto";
          document.body.style.overflowY = "auto";
        }}
      />

      <div
        className={`${styles.modal_img_holder} orientation-change-element half-second`}
      >
        <img id="indexGalleryImg" src="#" alt="#" />
      </div>
    </div>
  );
};
