/**
 *
 *  This is the Index About
 *
 */

import { FaArrowAltCircleDown } from "react-icons/fa";

import { INDEX_ABOUT_BG } from "@/assets/cdns/CDNBgs";
import {
  SPLASH_MAIN_IMG,
  SPLASH_CORNER_IMG,
  COMBO_1,
} from "@/assets/cdns/CDNImgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAbout = () => {
  return (
    <section id="indexAbout" className={`${styles.index_about}`}>
      <div className={`${styles.index_about_inner}`}>
        <div className={`${styles.index_about_inner_top}`}>
          <div className={`${styles.index_about_inner_top_img_holder}`}>
            <img
              data-src={COMBO_1}
              className="lazyload"
              alt="Elty's Premium Painting & Restoration: Paint roller and paint pan with paint splashes on sides."
            />
          </div>
        </div>

        <div className={`${styles.index_about_inner_text}`}>
          <div className={`${styles.index_about_inner_text_cnt}`}>
            <span
              className={`${styles.section_heading_span} orientation-change-element half-second`}
            >
              About:
            </span>

            <h2 className="orientation-change-element half-second">
              Elty's Premium Painting & Restoration
            </h2>

            <p className="orientation-change-element half-second">
              Welcome to Elty's Premium Painting & Restoration - Your Trusted
              Painting and Restoration Experts in Mt. Airy and Greensboro, North
              Carolina.
            </p>
            <p className="orientation-change-element half-second">
              Experience top-tier painting and restoration with Elty's Premium
              Painting & Restoration. With over a decade of industry experience,
              we take pride in delivering the highest quality craftsmanship in
              Mt. Airy and Greensboro. Our specialized services include
              professional painting, sheetrock installation, finishing,
              pressure-washing, popcorn ceiling removal, and wallpaper removal.
            </p>
            <p className="orientation-change-element half-second">
              We're passionate about turning your vision into reality and
              exceeding your expectations. Trust Elty's Premium Painting &
              Restoration to breathe new life into your home. Discover the
              difference today.
            </p>

            <button
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
      </div>
    </section>
  );
};
