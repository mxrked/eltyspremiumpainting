/**
 *
 *  This is the Desktop Nav
 *
 */

import { LOGO } from "@/assets/cdns/CDNImgs";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  return (
    <nav id="desktopNav" className={`${styles.desktop_nav}`}>
      <div className={`${styles.desktop_nav_inner}`}>
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-5 col-md-5 col-sm-5 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <div className={`${styles.logo}`}>
                  <img
                    data-src={LOGO}
                    className="lazyload orientation-change-element half-second"
                    alt="Elty's Premium Painting & Restoration: Logo image."
                  />
                </div>
              </div>
            </div>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-7 col-md-7 col-sm-7 col-xs-6`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <ul>
                  <li
                    className="orientation-change-element half-second"
                    onClick={() => {
                      if (document.getElementById("indexTop_JUMPPOINT")) {
                        console.log("Scrolling to Index Top");
                        document
                          .getElementById("indexTop_JUMPPOINT")
                          .scrollIntoView();
                      }
                    }}
                  >
                    <span>Top</span>
                  </li>
                  <li
                    className="orientation-change-element half-second"
                    onClick={() => {
                      if (document.getElementById("indexAbout_JUMPPOINT")) {
                        console.log("Scrolling to Index About");
                        document
                          .getElementById("indexAbout_JUMPPOINT")
                          .scrollIntoView();
                      }
                    }}
                  >
                    <span>About</span>
                  </li>
                  <li
                    className="orientation-change-element half-second"
                    onClick={() => {
                      if (document.getElementById("indexReviews_JUMPPOINT")) {
                        console.log("Scrolling to Index Reviews");
                        document
                          .getElementById("indexReviews_JUMPPOINT")
                          .scrollIntoView();
                      }
                    }}
                  >
                    <span>Reviews</span>
                  </li>
                  <li
                    className="orientation-change-element half-second"
                    onClick={() => {
                      if (document.getElementById("indexGallery_JUMPPOINT")) {
                        console.log("Scrolling to Index Gallery");
                        document
                          .getElementById("indexGallery_JUMPPOINT")
                          .scrollIntoView();
                      }
                    }}
                  >
                    <span>Gallery</span>
                  </li>
                  <li
                    className="orientation-change-element half-second"
                    onClick={() => {
                      if (document.getElementById("indexContact_JUMPPOINT")) {
                        console.log("Scrolling to Index Contact");
                        document
                          .getElementById("indexContact_JUMPPOINT")
                          .scrollIntoView();
                      }
                    }}
                  >
                    <span>Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
