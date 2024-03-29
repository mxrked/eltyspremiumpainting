/**
 *
 *  This is the Index Gallery
 *
 */

import { useState } from "react";

import { BsZoomIn } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { IndexGalleryModal } from "./IndexGalleryModal";
import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexGallery = (props) => {
  const [VISIBLE_ITEMS, SET_VISIBLE_ITEMS] = useState(4);
  const TOTAL_ITEMS = props.galleryData.length;

  const [modalItemIndex, setModalItemIndex] = useState(null); // Store the index of the opened item

  const handleLoadMore = () => {
    const itemsToLoad = Math.min(4, TOTAL_ITEMS - VISIBLE_ITEMS);
    SET_VISIBLE_ITEMS(VISIBLE_ITEMS + itemsToLoad);

    // Fixing issue that prevents clicking when clicking load more
    document.body.style.pointerEvents = "auto";
    document.body.style.overflowY = "auto";
  };

  const openModal = (index) => {
    document.documentElement.style.scrollBehavior = "auto";

    // Hiding bottom content
    document.getElementById("indexContact").style.display = "none";
    document.getElementById("footer").style.display = "none";

    DeclareStorageVariable(
      "session",
      "Last Scroll Pos",
      window.scrollY || window.pageYOffset || document.documentElement.scrollTop
    );

    setModalItemIndex(index);

    console.log(index);

    document.body.style.pointerEvents = "none";
    document.body.style.overflowY = "hidden";

    setTimeout(() => {
      document.getElementById("indexGalleryModal").style.overflowY = "auto";
    }, 500);
  };

  const closeModal = () => {
    const PLAYING_VIDEO = document.querySelector("video[playing='true']");

    if (PLAYING_VIDEO) {
      PLAYING_VIDEO.pause();
      PLAYING_VIDEO.removeAttribute("playing");
    }

    setModalItemIndex(null);
    // document.body.style.pointerEvents = "auto";
    // document.body.style.overflowY = "auto";

    const galleryItem = document.getElementById(
      `galleryItem_${modalItemIndex + 1}`
    );

    if (galleryItem) {
      galleryItem.scrollIntoView({ behavior: "auto" });
    }
  };

  const handleNext = () => {
    if (modalItemIndex !== null) {
      const nextIndex = (modalItemIndex + 1) % TOTAL_ITEMS;
      setModalItemIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    if (modalItemIndex !== null) {
      const prevIndex = (modalItemIndex - 1 + TOTAL_ITEMS) % TOTAL_ITEMS;
      setModalItemIndex(prevIndex);
    }
  };

  return (
    <section id="indexGallery" className={`${styles.index_gallery}`}>
      <div className={`${styles.index_gallery_inner}`}>
        <div className={`${styles.index_gallery_inner_top}`}>
          <h3
            id="indexGallery_JUMPPOINT"
            className="orientation-change-element half-second"
          >
            Gallery:
          </h3>
          <h2 className="orientation-change-element half-second">
            Our Stunning Work
          </h2>

          <p className="orientation-change-element half-second">
            Explore the quality and craftsmanship of Elty's Premium Painting &
            Restoration in our gallery. From painting to sheetrock installation,
            our projects reflect our commitment to excellence. Find inspiration
            for your next project as you browse through our portfolio. At Elty's
            Premium Painting & Restoration, we take pride in our work and are
            excited to share the success stories of satisfied clients in Mt.
            Airy and Greensboro. Dive into our gallery and envision the
            possibilities for your own space.
          </p>
        </div>

        <div className={`${styles.index_gallery_main_inner}`}>
          <div
            className={`${styles.index_gallery_main_inner_box} container-fluid`}
          >
            <div className={`${styles.index_gallery_main_inner_row} row`}>
              {props.galleryData.slice(0, VISIBLE_ITEMS).map((item) => (
                <div
                  key={item.galleryItem_ID}
                  id={item.galleryItem_ID}
                  className={`${styles.gallery_item} gallery-item col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                >
                  {item.galleryItem_Type === "img" ? (
                    <div className={`${styles.gallery_item_inner}`}>
                      {/**
                      <LazyLoadBackgroundImage
                        image_url={item.galleryItem_Img}
                        image_alt={`Elty's Premium Painting & Restoration: ${item.galleryItem_ID} image.`}
                        style_className={styles.gallery_item_bg}
                      />
                      */}

                      <LazyLoadImage
                        src={item.galleryItem_Img}
                        alt={`Elty's Premium Painting & Restoration: ${item.galleryItem_ID} image.`}
                        className={styles.gallery_item_bg}
                      />

                      <button
                        className="orientation-change-element half-second"
                        onClick={(e) => {
                          openModal(props.galleryData.indexOf(item));

                          // const GALLERY_ITEM_BG = item.galleryItem_Img;
                          // console.log(GALLERY_ITEM_BG);

                          // DeclareStorageVariable(
                          //   "session",
                          //   "Modal Opened",
                          //   true
                          // );

                          // DeclareStorageVariable(
                          //   "session",
                          //   "Last Scroll Pos",
                          //   window.scrollY ||
                          //     window.pageYOffset ||
                          //     document.documentElement.scrollTop
                          // );

                          // document.body.style.pointerEvents = "none";
                          // document.body.style.overflowY = "hidden";

                          // document.getElementById("indexGalleryImg").src =
                          //   item.galleryItem_Img;

                          // document.getElementById(
                          //   "indexGalleryImgModal"
                          // ).style.opacity = 1;
                          // document.getElementById(
                          //   "indexGalleryImgModal"
                          // ).style.visibility = "visible";

                          // document.getElementById(
                          //   "indexGalleryImg"
                          // ).alt = `Elty's Premium Painting & Restoration: ${item.galleryItem_ID} image.`;

                          // setTimeout(() => {
                          //   document.getElementById(
                          //     "indexGalleryImgModal"
                          //   ).style.pointerEvents = "auto";
                          //   document.getElementById(
                          //     "indexGalleryImgModal"
                          //   ).style.overflowY = "auto";
                          // }, 400);
                        }}
                      >
                        <BsZoomIn className={`${styles.icon}`} />
                      </button>
                    </div>
                  ) : item.galleryItem_Type === "video" ? (
                    <div className={`${styles.gallery_item_inner}`}>
                      <LazyLoadBackgroundImage
                        image_url={item.galleryItem_Poster}
                        image_alt={`Elty's Premium Painting & Restoration: ${item.galleryItem_ID} poster.`}
                        style_className={styles.gallery_item_bg}
                      />

                      <button
                        className="orientation-change-element half-second"
                        onClick={(e) => {
                          openModal(props.galleryData.indexOf(item));
                          // // Get the video URL from the gallery item
                          // const GALLERY_ITEM_VIDEO = item.galleryItem_Video;
                          // console.log(GALLERY_ITEM_VIDEO);
                          // // Store in session that the modal has been opened
                          // DeclareStorageVariable(
                          //   "session",
                          //   "Modal Opened",
                          //   true
                          // );
                          // // Store the current scroll position in session
                          // DeclareStorageVariable(
                          //   "session",
                          //   "Last Scroll Pos",
                          //   window.scrollY ||
                          //     window.pageYOffset ||
                          //     document.documentElement.scrollTop
                          // );
                          // // Set the video source to the URL obtained from the gallery item
                          // document.getElementById("indexGalleryVideo").src =
                          //   GALLERY_ITEM_VIDEO;
                          // // Setting the videos volume
                          // document.getElementById("indexGalleryVideo").volume =
                          //   item.galleryItem_VideoVolume;
                          // // Delayed execution to gradually reveal the video modal
                          // setTimeout(() => {
                          //   // Make the video modal visible by adjusting opacity and visibility
                          //   document.getElementById(
                          //     "indexGalleryVideoModal"
                          //   ).style.opacity = 1;
                          //   document.getElementById(
                          //     "indexGalleryVideoModal"
                          //   ).style.visibility = "visible";
                          // }, 400);
                          // // Delayed execution to enable pointer events and overflow on the video modal
                          // setTimeout(() => {
                          //   document.getElementById(
                          //     "indexGalleryVideoModal"
                          //   ).style.pointerEvents = "auto";
                          //   document.getElementById(
                          //     "indexGalleryVideoModal"
                          //   ).style.overflowY = "auto";
                          // }, 700);
                        }}
                      >
                        <BsZoomIn className={`${styles.icon}`} />
                      </button>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {VISIBLE_ITEMS < TOTAL_ITEMS && (
            <button
              onClick={handleLoadMore}
              className={`${styles.load_more_btn} orientation-change-element half-second`}
            >
              Load More
            </button>
          )}

          {modalItemIndex !== null && (
            <IndexGalleryModal
              items={props.galleryData}
              currentItemIndex={modalItemIndex}
              onClose={closeModal}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}
        </div>
      </div>
    </section>
  );
};
