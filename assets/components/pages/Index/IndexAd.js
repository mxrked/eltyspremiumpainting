/**
 *
 *  This is the Index Ad
 *
 */

import { useState, useEffect } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAd = (props) => {
  const [DETECT_ADS, SET_DETECT_ADS] = useState("");

  // Determining if ads should be shown on the page
  useEffect(() => {
    if (props.adData[0]) {
      if (props.adData[0].adShow) {
        SET_DETECT_ADS("true");
      } else {
        SET_DETECT_ADS("");
      }
    } else {
      SET_DETECT_ADS("");
    }
  }, [DETECT_ADS]);

  return (
    <div>
      {DETECT_ADS !== "" ? (
        <section id="indexAds" className={`${styles.index_ad}`}>
          <div className={`${styles.index_ad_inner}`}>
            {DETECT_ADS === "true" ? (
              <div className={`${styles.ad}`} key={props.adData[0].adID}>
                <h3
                  className="orientation-change-element half-second"
                  id="indexAds_JUMPPOINT"
                >
                  {props.adData[0].adText_A}
                  <span> </span>
                  <br />
                  {props.adData[0].adText_B}
                </h3>

                <LazyLoadImage
                  src={props.adData[0].adImg}
                  alt={props.adData[0].adAlt}
                />
              </div>
            ) : null}
          </div>
        </section>
      ) : null}
    </div>
  );
};
