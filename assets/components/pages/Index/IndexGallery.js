/**
 *
 *  This is the Index Gallery
 *
 */

import { useState } from "react";

import { BsZoomIn } from "react-icons/bs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexGallery = (props) => {
  const [VISIBLE_ITEMS, SET_VISIBLE_ITEMS] = useState(4);
  const TOTAL_ITEMS = props.galleryData.length;

  const handleLoadMore = () => {
    const itemsToLoad = Math.min(4, TOTAL_ITEMS - VISIBLE_ITEMS);
    SET_VISIBLE_ITEMS(VISIBLE_ITEMS + itemsToLoad);
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
                  <div className={`${styles.gallery_item_inner}`}>
                    <div
                      className={`${styles.gallery_item_bg} gallery-item-bg`}
                      style={{ backgroundImage: item.galleryItem_Img }}
                    />

                    <button
                      className="orientation-change-element half-second"
                      onClick={(e) => {
                        const GALLERY_ITEM_BG = item.galleryItem_Img;
                        const GALLERY_ITEM_MODAL_BG =
                          document.getElementById("");

                        console.log(GALLERY_ITEM_BG);

                        GALLERY_ITEM_MODAL_BG.style.backgroundImage = `url(${GALLERY_ITEM_BG})`;
                      }}
                    >
                      <BsZoomIn className={`${styles.icon}`} />
                    </button>
                  </div>
                </div>
              ))}
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
      </div>
    </section>
  );
};
