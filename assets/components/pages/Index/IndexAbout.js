/**
 *
 *  This is the Index About
 *
 */

import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaArrowAltCircleDown } from "react-icons/fa";

import { COMBO_1 } from "@/assets/cdns/CDNImgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAbout = () => {
  return (
    <section id="indexAbout" className={`${styles.index_about}`}>
      <div className={`${styles.index_about_inner}`}>
        <div className={`${styles.index_about_inner_top}`}>
          <div className={`${styles.index_about_inner_top_img_holder}`}>
            <LazyLoadImage
              // data-src={COMBO_1}
              // className="lazyload"
              src={COMBO_1}
              alt="Elty's Premium Painting & Restoration: Paint roller and paint pan with paint splashes on sides."
            />
          </div>
        </div>

        <div className={`${styles.index_about_inner_text}`}>
          <div className={`${styles.index_about_inner_text_cnt}`}>
            <h3
              id="indexAbout_JUMPPOINT"
              className={`${styles.section_heading_h3} orientation-change-element half-second`}
            >
              About:
            </h3>

            <h2 className="orientation-change-element half-second">
              Elty's Premium Painting & Restoration
            </h2>

            <p className="orientation-change-element half-second">
              Experience the pinnacle of painting and restoration services with
              Elty's Premium Painting & Restoration, a trusted name with over a
              decade of industry excellence. Serving Mt. Airy and Greensboro,
              including Elty's Greensboro house painters, our team of seasoned
              professionals specializes in residential painting in North
              Carolina, delivering unparalleled craftsmanship. From Elty's
              painting services in NC to North Carolina house restoration by
              Elty's, our comprehensive services, including popcorn ceiling
              removal, are designed to enhance the aesthetic appeal of your
              home.
            </p>
            <p className="orientation-change-element half-second">
              In addition to our painting expertise, we excel in wall
              restoration and repair. Our skilled team offers sheetrock repair
              in Greensboro, NC, and nearby areas, ensuring flawless walls. We
              extend our proficiency to wood surfaces with wood staining in Mt.
              Airy, NC, and Greensboro, NC, providing top-notch deck staining
              services for both exterior and interior wood finishing projects
              across North Carolina.
            </p>
            <p className="orientation-change-element half-second">
              Transform your living spaces with Elty's Premium Painting &
              Restoration - your go-to partner for professional painting, wall
              restoration, and wood finishing, including Elty's Premium Painting
              Greensboro. Our commitment to excellence and attention to detail
              guarantee results that exceed expectations. Elevate the beauty of
              your home with our specialized services in Greensboro, Mt. Airy,
              and throughout North Carolina.
            </p>

            <button
              name="bookServiceBtn_2"
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
