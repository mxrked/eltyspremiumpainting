/**
 *
 *  This is the Index Ad
 *
 */

import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAd = (props) => {
  const AD_TYPE = "november-2023";

  return (
    <section id="indexAd" className={`${styles.index_ad}`}>
      <div className={`${styles.index_ad_inner}`}>
        {AD_TYPE === "november-2023" ? (
          <div className={`${styles.ad}`} key={props.adData[0].adID}>
            <h3 className="orientation-change-element half-second">
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
  );
};
