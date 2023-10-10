/**
 *
 *  This is the Index Top
 *
 */
import { useEffect } from "react";

import { FaArrowAltCircleDown } from "react-icons/fa";

import { INDEX_TOP_BG } from "@/assets/cdns/CDNBgs";

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  const preloadImage = (url) => {
    const img = new Image();
    img.src = url;
  };

  useEffect(() => {
    preloadImage(INDEX_TOP_BG);
  }, [INDEX_TOP_BG]);

  return (
    <section id="indexTop" className={`${styles.index_top}`}>
      <LazyLoadBackgroundImage
        image_alt={
          "Elty's Premium Painting & Restoration: Two painters working on a purple house outside."
        }
        image_url={INDEX_TOP_BG}
        style_className={styles.index_top_bg}
      />

      {/** <img data-src={INDEX_TOP_BG} className="lazyload" /> */}

      <div className={`${styles.loading_flash}`} />

      <div className={`${styles.index_top_overlay}`}>
        <div className={`${styles.index_top_overlay_cnt}`}>
          <h1
            id="indexTop_JUMPPOINT"
            className="orientation-change-element half-second"
          >
            Expert House Painting and Restoration in Mt. Airy & Greensboro, NC
          </h1>

          <p className="orientation-change-element half-second">
            Your Mt. Airy & Greensboro, NC Painting and Restoration Experts. We
            specialize in removing popcorn ceilings, skim coating, staining,
            sheetrock repair, and pressure-washing for your home.
          </p>

          <button
            name="bookServiceBtn_1"
            className="orientation-change-element half-second"
            onClick={() => {
              if (document.getElementById("indexContact")) {
                console.log("Scrolling to Index Contact");
                document.getElementById("indexContact").scrollIntoView();
              }
            }}
          >
            <span>Book A Service</span>

            <FaArrowAltCircleDown className={`${styles.icon}`} />
          </button>
        </div>
      </div>
    </section>
  );
};
