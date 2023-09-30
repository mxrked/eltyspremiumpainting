/**
 *
 *  This is the Mobile Nav
 *
 */

import { LOGO } from "@/assets/cdns/CDNImgs";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  const closeMobileNav = () => {
    document.getElementById("mobileNavCloser").style.opacity = 0.5;
    document.getElementById("mobileNavCloser").style.pointerEvents = "none";
    document.getElementById("mobileNavLinks").style.height = 0;
    document.getElementById("mobileNavCloser").style.display = "none";
    document.getElementById("mobileNavToggler").style.display = "block";
    document.getElementById("mobileNavToggler").style.pointerEvents = "auto";
    document.getElementById("mobileNavToggler").style.opacity = 1;
  };

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav}`}>
      <div className={`${styles.mobile_nav_inner}`}>
        <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
          <div className={`${styles.mobile_nav_inner_row} row`}>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-5 col-md-5 col-sm-5 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
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
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-7 col-md-7 col-sm-7 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                <button
                  name="mobileNavToggler"
                  id="mobileNavToggler"
                  onClick={(e) => {
                    e.currentTarget.style.opacity = 0.5;
                    e.currentTarget.style.pointerEvents = "none";

                    document.getElementById("mobileNavLinks").style.height =
                      "100%";

                    document.getElementById("mobileNavToggler").style.display =
                      "none";
                    document.getElementById(
                      "mobileNavCloser"
                    ).style.pointerEvents = "auto";
                    document.getElementById(
                      "mobileNavCloser"
                    ).style.opacity = 1;
                    document.getElementById("mobileNavCloser").style.display =
                      "flex";
                  }}
                >
                  <span className="orientation-change-element half-second"></span>
                  <span className="orientation-change-element half-second"></span>
                  <span className="orientation-change-element half-second"></span>
                </button>
                <button
                  name="mobileNavCloser"
                  id="mobileNavCloser"
                  className={`${styles.closer}`}
                  onClick={(e) => {
                    e.currentTarget.style.opacity = 0.5;
                    e.currentTarget.style.pointerEvents = "none";

                    document.getElementById("mobileNavLinks").style.height = 0;
                    document.getElementById("mobileNavCloser").style.display =
                      "none";
                    document.getElementById("mobileNavToggler").style.display =
                      "block";
                    document.getElementById(
                      "mobileNavToggler"
                    ).style.pointerEvents = "auto";
                    document.getElementById(
                      "mobileNavToggler"
                    ).style.opacity = 1;
                  }}
                >
                  <span className="orientation-change-element half-second"></span>
                  <span className="orientation-change-element half-second"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul id="mobileNavLinks">
        <li
          className="orientation-change-element half-second"
          onClick={() => {
            closeMobileNav();

            if (document.getElementById("indexTop")) {
              console.log("Scrolling to Index Top");
              document.getElementById("indexTop").scrollIntoView();
            }
          }}
        >
          <span>Top</span>
        </li>
        <li
          className="orientation-change-element half-second"
          onClick={() => {
            closeMobileNav();

            if (document.getElementById("indexAbout")) {
              console.log("Scrolling to Index About");
              document.getElementById("indexAbout").scrollIntoView();
            }
          }}
        >
          <span>About</span>
        </li>
        <li
          className="orientation-change-element half-second"
          onClick={() => {
            closeMobileNav();

            if (document.getElementById("indexYelpReviews")) {
              console.log("Scrolling to Index Yelp Reviews");
              document.getElementById("indexYelpReviews").scrollIntoView();
            }
          }}
        >
          <span>Reviews</span>
        </li>
        <li
          className="orientation-change-element half-second"
          onClick={() => {
            closeMobileNav();

            if (document.getElementById("indexGallery")) {
              console.log("Scrolling to Index Gallery");
              document.getElementById("indexGallery").scrollIntoView();
            }
          }}
        >
          <span>Gallery</span>
        </li>
        <li
          className="orientation-change-element half-second"
          onClick={() => {
            closeMobileNav();

            if (document.getElementById("indexContact")) {
              console.log("Scrolling to Index Contact");
              document.getElementById("indexContact").scrollIntoView();
            }
          }}
        >
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
};
