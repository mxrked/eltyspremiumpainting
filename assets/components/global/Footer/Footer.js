/**
 *
 *  This is the Footer
 *
 */

import { useEffect } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdCopyright } from "react-icons/md";
import { FaInstagram, FaFacebook, FaYelp } from "react-icons/fa";

import { LOGO } from "@/assets/cdns/CDNImgs";

import styles from "../../../styles/modules/Footer/Footer.module.css";

export const Footer = () => {
  // Setting the current year to copyright
  useEffect(() => {
    const CURRENT_YEAR = new Date().getFullYear();

    document.getElementById("currentYear").innerText = CURRENT_YEAR;
  }, []);

  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footer_top}`}>
        <div className={`${styles.footer_top_inner}`}>
          <div className={`${styles.footer_top_inner_box} container-fluid`}>
            <div className={`${styles.footer_top_inner_row} row`}>
              <div
                className={`${styles.footer_top_inner_side} ${styles.footer_L} col-lg-5 col-md-5 col-sm-5 col-xs-12`}
              >
                <div className={`${styles.footer_top_inner_side_cnt}`}>
                  <LazyLoadImage
                    // data-src={LOGO}
                    // className="lazyload orientation-change-element half-second"
                    src={LOGO}
                    className="orientation-change-element half-second"
                    alt="Elty's Premium Painting & Restoration: Logo image."
                  />
                  <br />
                  <span
                    className={`${styles.copyright} orientation-change-element half-second`}
                  >
                    <MdCopyright className={`${styles.icon}`} />
                    All rights reserved. &nbsp;<span id="currentYear">N/A</span>
                  </span>
                </div>
              </div>
              <div
                className={`${styles.footer_top_inner_side} ${styles.footer_R} col-lg-7 col-md-7 col-sm-7 col-xs-12`}
              >
                <div className={`${styles.footer_top_inner_side_cnt}`}>
                  <div className={`${styles.working_hours}`}>
                    <span
                      className={`${styles.set_name} orientation-change-element half-second`}
                    >
                      Working Hours
                    </span>

                    <ul>
                      <li>Mon - Sat: 8AM - 5PM</li>
                    </ul>
                  </div>

                  <div className={`${styles.contact}`}>
                    <ul>
                      <li>
                        <a
                          href="tel:+13368657741"
                          className="orientation-change-element half-second"
                        >
                          +1 (336) 865-7741
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailTo:eltypremiumpainting@gmail.com"
                          className="orientation-change-element half-second"
                        >
                          eltypremiumpainting@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className={`${styles.socials}`}>
                    <ul>
                      <li>
                        <a
                          href="https://www.instagram.com/eltyspremiumpainting/"
                          target={"_blank"}
                        >
                          <FaInstagram
                            className={`${styles.icon} orientation-change-element half-second`}
                          />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.facebook.com/eltyspremiumpainting"
                          target={"_blank"}
                        >
                          <FaFacebook
                            className={`${styles.icon} orientation-change-element half-second`}
                          />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.yelp.com/biz/eltys-premium-painting-and-restoration-mount-airy?osq=eltys+premium+painting&override_cta=Request+a+Quote"
                          target={"_blank"}
                        >
                          <FaYelp
                            className={`${styles.icon} orientation-change-element half-second`}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.footer_bottom}`}>
        <div className={`${styles.footer_bottom_inner}`}>
          <span className="orientation-change-element half-second">
            Website created by{" "}
            <a
              href="https://www.codingthefront.com"
              target={"_blank"}
              className="orientation-change-element half-second"
            >
              codingthefront.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
