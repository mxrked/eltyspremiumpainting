/**
 *
 *  This is the Index Contact
 *
 */

import { COMBO_2 } from "@/assets/cdns/CDNImgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexContact = () => {
  return (
    <section id="indexContact" className={`${styles.index_contact}`}>
      <div className={`${styles.index_contact_inner}`}>
        <div className={`${styles.index_contact_inner_top}`}>
          <div className={`${styles.index_contact_inner_top_img_holder}`}>
            <img
              data-src={COMBO_2}
              className="lazyload"
              alt="Elty's Premium Painting & Restoration: Two workers working on the room of a building."
            />
          </div>

          <div className={`${styles.index_contact_inner_top_text}`}>
            <div className={`${styles.index_contact_inner_top_text_cnt}`}>
              <h3
                id="indexContact_JUMPPOINT"
                className={`${styles.section_heading_h3} orientation-change-element half-second`}
              >
                Contact:
              </h3>

              <h2 className="orientation-change-element half-second">
                Book A Service
              </h2>

              <p className="orientation-change-element half-second">
                Ready to revitalize your home? Whether you have questions, need
                a quote, or are ready to book our top-tier painting and
                restoration services in Mt. Airy and Greensboro, we're here to
                help.
              </p>
              <p className="orientation-change-element half-second">
                Simply fill out the form below, and our expert team will get
                back to you promptly. Let's start turning your vision into
                reality today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
