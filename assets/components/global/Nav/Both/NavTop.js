/**
 *
 *  This is the Nav Top
 *
 */

import { MdSms } from "react-icons/md";
import { FaInstagram, FaFacebook, FaYelp, FaPhoneAlt } from "react-icons/fa";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const NavTop = () => {
  return (
    <section id="navTop" className={`${styles.nav_top}`}>
      <div className={`${styles.nav_top_inner}`}>
        <div className={`${styles.nav_top_inner_box} container-fluid`}>
          <div className={`${styles.nav_top_inner_row} row`}>
            <div
              className={`${styles.nav_top_inner_side} ${styles.nav_top_L} col-lg-7 col-md-7 col-sm-7 col-xs-12`}
            >
              <div className={`${styles.nav_top_inner_side_cnt}`}>
                <div className={`${styles.phone}`}>
                  <FaPhoneAlt
                    className={`${styles.icon} orientation-change-element half-second`}
                  />

                  <a
                    href="tel:+13368657741"
                    className="orientation-change-element half-second"
                  >
                    (336) 865-7741
                  </a>
                </div>

                <div className={`${styles.sms}`}>
                  <span className="orientation-change-element half-second">
                    Send us a text:
                  </span>

                  <a href="sms:+13368657741">
                    <MdSms
                      className={`${styles.icon} orientation-change-element half-second`}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${styles.nav_top_inner_side} ${styles.nav_top_R} col-lg-5 col-md-5 col-sm-5 col-xs-12`}
            >
              <div className={`${styles.nav_top_inner_side_cnt}`}>
                <ul>
                  <li>
                    <FaInstagram
                      className={`${styles.icon} orientation-change-element half-second`}
                      onClick={(e) => {
                        window.open(
                          "https://www.instagram.com/eltyspremiumpainting/",
                          "_self"
                        );
                      }}
                    />
                  </li>

                  <li>
                    <FaFacebook
                      className={`${styles.icon} orientation-change-element half-second`}
                      onClick={(e) => {
                        window.open(
                          "https://www.facebook.com/eltyspremiumpainting",
                          "_self"
                        );
                      }}
                    />
                  </li>

                  <li>
                    <FaYelp
                      className={`${styles.icon} orientation-change-element half-second`}
                      onClick={(e) => {
                        window.open(
                          "https://www.yelp.com/biz/eltys-premium-painting-and-restoration-mount-airy?osq=eltys+premium+painting&override_cta=Request+a+Quote",
                          "_self"
                        );
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
