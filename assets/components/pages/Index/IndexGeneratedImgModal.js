/**
 *
 *  This is the Index Generated Img Modal
 *
 */

import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaTimes } from "react-icons/fa";

import styles from "../../../styles/modules/All/All.module.css";

export const IndexGeneratedImgModal = ({
  images,
  texts,
  currentIndex,
  closeModal,
  goToNext,
  goToPrev,
}) => {
  return (
    <div className={`${styles.img_modal} img-modal`}>
      <div className={`${styles.img_modal_inner}`}>
        <div className={`${styles.img_modal_inner_top}`}>
          <button className={`${styles.closer}`} onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
        {/***/} <LazyLoadImage src={images[currentIndex]} alt="Modal" />
        {/* Navigation buttons */}
        <div className={`${styles.img_modal_inner_text}`}>
          <p>{texts[currentIndex]}</p>
        </div>
        <div className={`${styles.img_modal_btns}`}>
          <button onClick={goToPrev}>&lt; Prev</button>
          <button onClick={goToNext}>Next &gt;</button>
        </div>
      </div>
    </div>
  );
};
