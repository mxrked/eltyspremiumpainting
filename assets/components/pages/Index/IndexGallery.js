/**
 *
 *  This is the Index Gallery
 *
 */

import { useState } from "react";

import { BsZoomIn } from "react-icons/bs";

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexGallery = (props) => {
  const [VISIBLE_ITEMS, SET_VISIBLE_ITEMS] = useState(4);
  const TOTAL_ITEMS = props.galleryData.length;

  const handleLoadMore = () => {
    const itemsToLoad = Math.min(4, TOTAL_ITEMS - VISIBLE_ITEMS);
    SET_VISIBLE_ITEMS(VISIBLE_ITEMS + itemsToLoad);

    // Fixing issue that prevents clicking when clicking load more
    document.body.style.pointerEvents = "auto";
    document.body.style.overflowY = "auto";
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

        <div className={`${styles.index_gallery_inner}`}>
          <div className={`${styles.index_gallery_inner_box} container-fluid`}>
            <div className={`${styles.index_gallery_inner_row} row`}>
              {props.galleryData.slice(0, VISIBLE_ITEMS).map((item) => (
                <div
                  key={item.galleryItem_ID}
                  className={`${styles.gallery_item} gallery-item col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                >
                  {item.galleryItem_Type === "img" ? (
                    <div className={`${styles.gallery_item_inner}`}>
                      <LazyLoadBackgroundImage
                        image_url={item.galleryItem_Img}
                        image_alt={`Elty's Premium Painting & Restoration: ${item.galleryItem_ID} image.`}
                        style_className={styles.gallery_item_bg}
                      />

                      <button
                        className="orientation-change-element half-second"
                        onClick={(e) => {
                          const GALLERY_ITEM_BG = item.galleryItem_Img;
                          console.log(GALLERY_ITEM_BG);

                          DeclareStorageVariable(
                            "session",
                            "Modal Opened",
                            true
                          );

                          document.body.style.pointerEvents = "none";
                          document.body.style.overflowY = "hidden";

                          document.getElementById("indexGalleryImg").src =
                            item.galleryItem_Img;

                          document.getElementById(
                            "indexGalleryImgModal"
                          ).style.opacity = 1;
                          document.getElementById(
                            "indexGalleryImgModal"
                          ).style.visibility = "visible";

                          document.getElementById(
                            "indexGalleryImg"
                          ).alt = `Elty's Premium Painting & Restoration: ${item.galleryItem_ID} image.`;

                          setTimeout(() => {
                            document.getElementById(
                              "indexGalleryImgModal"
                            ).style.pointerEvents = "auto";
                            document.getElementById(
                              "indexGalleryImgModal"
                            ).style.overflowY = "auto";
                          }, 400);
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
                          const GALLERY_ITEM_VIDEO = item.galleryItem_Video;
                          console.log(GALLERY_ITEM_VIDEO);

                          DeclareStorageVariable(
                            "session",
                            "Modal Opened",
                            true
                          );

                          document.body.style.pointerEvents = "none";
                          document.body.style.overflowY = "hidden";

                          document.getElementById("indexGalleryVideo").src =
                            GALLERY_ITEM_VIDEO;

                          document.getElementById(
                            "indexGalleryVideoModal"
                          ).style.opacity = 1;
                          document.getElementById(
                            "indexGalleryVideoModal"
                          ).style.visibility = "visible";

                          setTimeout(() => {
                            document.getElementById(
                              "indexGalleryVideoModal"
                            ).style.pointerEvents = "auto";
                            document.getElementById(
                              "indexGalleryVideoModal"
                            ).style.overflowY = "auto";
                          }, 400);
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
        </div>
      </div>
    </section>
  );
};
