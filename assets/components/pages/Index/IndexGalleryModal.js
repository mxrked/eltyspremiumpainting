/**
 *
 *  This is the Index Gallery Modal
 *
 */

import { useState, useEffect } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexGalleryModal = ({
  items,
  currentItemIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  //   useEffect(() => {
  //     document.body.style.overflowY = "hidden"; // Prevent scrolling when the modal is open
  //     return () => {
  //       document.body.style.overflowY = "auto"; // Re-enable scrolling when the modal is closed
  //     };
  //   }, []);

  useEffect(() => {
    const handleOrientationChange = (e) => {
      // Only close the modal if shouldClose is true
      e.preventDefault();
      document.body.style.overflowY = "hidden";

      document.getElementById("indexGalleryModal").scrollTo(0, 0);
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  const openModal = (index) => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);

    onClose();
    document.body.style.pointerEvents = "auto";
    document.body.style.overflowY = "auto";

    // Showing bottom content
    document.getElementById("indexContact").style.display = "block";
    document.getElementById("footer").style.display = "block";
  };

  const handleNext = () => {
    // Calculate the index of the next item
    const nextIndex = (currentItemIndex + 1) % items.length;
    onClose();
    onNext();
    openModal(nextIndex);
  };

  const handlePrev = () => {
    // Calculate the index of the previous item
    const prevIndex = (currentItemIndex - 1 + items.length) % items.length;
    onClose();
    onPrev();
    openModal(prevIndex);
  };

  return isVisible ? (
    <div
      className={`${styles.index_gallery_modal} ${styles.index_gallery_img_modal}`}
      id="indexGalleryModal"
    >
      <div className={`${styles.index_gallery_modal_inner}`}>
        <button onClick={closeModal} className={styles.close_btn}>
          Close
        </button>
        <div className={`${styles.index_gallery_modal_inner_main}`}>
          {items[currentItemIndex].galleryItem_Type === "img" ? (
            <img
              src={items[currentItemIndex].galleryItem_Img}
              alt={`Elty's Premium Painting & Restoration: ${items[currentItemIndex].galleryItem_ID} image.`}
            />
          ) : items[currentItemIndex].galleryItem_Type === "video" ? (
            <video
              id="indexGalleryVideo"
              src={items[currentItemIndex].galleryItem_Video}
              controls
              volume={items[currentItemIndex].galleryItem_VideoVolume}
            />
          ) : null}

          <div className={styles.navigation_buttons}>
            {items.length > 1 && (
              <>
                <button onClick={handlePrev} className={styles.prevButton}>
                  <FaArrowLeft className={`${styles.icon}`} />
                </button>
                <button onClick={handleNext} className={styles.nextButton}>
                  <FaArrowRight className={`${styles.icon}`} />
                </button>
              </>
            )}
          </div>
        </div>

        {items[currentItemIndex].galleryItem_Description !== "" &&
        items[currentItemIndex].galleryItem_Description !== null ? (
          <div className={`${styles.modal_description_holder}`}>
            <p
              className="orientation-change-element half-second"
              id="indexGalleryDesc"
            >
              {items[currentItemIndex].galleryItem_Description}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  ) : null;
};
