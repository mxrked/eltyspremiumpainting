/**
 *
 *  This is the Index Contact
 *
 */

import { useEffect } from "react";

import { COMBO_2 } from "@/assets/cdns/CDNImgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexContact = () => {
  const SERVICES = [
    "-- NOT SELECTED --",
    "House Painting",
    "Popcorn Ceiling Removal",
    "Skim Coating",
    "Staining",
    "Sheetrock Repair",
    "Pressure Washing",
  ];
  const FINISHERS = [
    "-- NOT SELECTED --",
    "Flat",
    "Matte",
    "Eggshell Enamel",
    "Satin Enamel",
    "Semi-Gloss Enamel",
    "Hi-Gloss Enamel",
  ];

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

        <div className={`${styles.index_contact_inner_form}`}>
          <form
            data-form-type={undefined}
            id="contactForm"
            onSubmit={(e) => {
              e.preventDefault();

              const DATA_FORM_TYPE =
                e.currentTarget.getAttribute("data-form-type");

              if (DATA_FORM_TYPE == "painting-form") {
              }

              if (DATA_FORM_TYPE == "other-form") {
              }
            }}
          >
            <div className={`${styles.index_contact_inner_form_inner}`}>
              <div
                className={`${styles.index_contact_inner_form_inner_box} container-fluid`}
              >
                <div
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.double_row} row`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formFirstName"
                      >
                        <span>
                          First Name: <span>*</span>
                        </span>
                      </label>

                      <input
                        type={"text"}
                        name="email_first_name"
                        id="formFirstName"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formLastName"
                      >
                        <span>
                          Last Name: <span>*</span>
                        </span>
                      </label>

                      <input
                        type={"text"}
                        name="email_last_name"
                        id="formLastName"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.double_row} row`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formEmail"
                      >
                        <span>
                          Email: <span>*</span>
                        </span>
                      </label>

                      <input
                        type={"email"}
                        name="email_client_email"
                        id="formEmail"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formPhone"
                      >
                        <span>
                          Phone Number: <span>*</span>{" "}
                          <span className={`${styles.phone_hint}`}>
                            (Ex: +1336....)
                          </span>
                        </span>
                      </label>

                      <input
                        type={"tel"}
                        name="email_phone_number"
                        id="formPhone"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.triple_row} row`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-4 col-md-4 col-sm-4 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formCity"
                      >
                        <span>
                          City: <span>*</span>
                        </span>
                      </label>

                      <input type={"text"} name="email_city" id="formCity" />
                    </div>
                  </div>
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-4 col-md-4 col-sm-4 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formStreet"
                      >
                        <span>
                          Street: <span>*</span>
                        </span>
                      </label>

                      <input
                        type={"text"}
                        name="email_street"
                        id="formStreet"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-4 col-md-4 col-sm-4 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formZip"
                      >
                        <span>
                          ZIP Code: <span>*</span>
                        </span>
                      </label>

                      <input type={"text"} name="email_zip_code" id="formZip" />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.single_row} row`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formService"
                      >
                        <span>
                          Type of Service: <span>*</span>
                        </span>
                      </label>

                      <select
                        name="email_service"
                        id="formService"
                        onChange={(e) => {
                          const CURRENT_OPTION =
                            e.currentTarget.options[
                              e.currentTarget.selectedIndex
                            ];
                          const CURRENT_OPTION_TEXT = CURRENT_OPTION.text;

                          if (CURRENT_OPTION_TEXT !== "House Painting") {
                            document
                              .getElementById("contactForm")
                              .setAttribute("data-form-type", "other-form");

                            console.log(
                              document
                                .getElementById("contactForm")
                                .getAttribute("data-form-type")
                            );

                            document
                              .querySelectorAll(".painting-row")
                              .forEach((row) => {
                                row.style.display = "none";
                              });
                            document
                              .querySelectorAll(".other-form-row")
                              .forEach((row) => {
                                row.style.display = "flex";
                              });
                          } else {
                            document
                              .getElementById("contactForm")
                              .setAttribute("data-form-type", "painting-form");

                            console.log(
                              document
                                .getElementById("contactForm")
                                .getAttribute("data-form-type")
                            );

                            document
                              .querySelectorAll(".painting-row")
                              .forEach((row) => {
                                row.style.display = "flex";
                              });
                            document
                              .querySelectorAll(".other-form-row")
                              .forEach((row) => {
                                row.style.display = "none";
                              });
                          }
                        }}
                      >
                        {SERVICES.map((service) => (
                          <option>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.single_row} ${styles.painting_row} painting-row row`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formPaintingType"
                      >
                        <span>
                          Painting Type: <span>*</span>
                        </span>
                      </label>

                      <div className={`${styles.painting_checkboxes}`}>
                        <div className={`${styles.checkbox}`}>
                          <input
                            onChange={(e) => {
                              // const INTERIOR_ROW = document.querySelector(
                              //   ".painting-interior-row"
                              // );
                              // const EXTERIOR_ROW = document.querySelector(
                              //   ".painting-exterior-row"
                              // );
                              // INTERIOR_ROW.style.display = "flex";
                              // EXTERIOR_ROW.style.display = "none";
                            }}
                            type={"checkbox"}
                            id="interiorCheckbox"
                            name="email_painting_type"
                            placeholder="Interior"
                          />
                          <label
                            for="interiorCheckbox"
                            className="orientation-change-element half-second"
                          >
                            Interior
                          </label>
                        </div>
                        <div className={`${styles.checkbox}`}>
                          <input
                            onChange={(e) => {
                              // const INTERIOR_ROW = document.querySelector(
                              //   ".painting-interior-row"
                              // );
                              // const EXTERIOR_ROW = document.querySelector(
                              //   ".painting-exterior-row"
                              // );
                              // INTERIOR_ROW.style.display = "none";
                              // EXTERIOR_ROW.style.display = "flex";
                            }}
                            type={"checkbox"}
                            id="exteriorCheckbox"
                            name="email_painting_type"
                            placeholder="Exterior"
                          />
                          <label
                            for="exteriorCheckbox"
                            className="orientation-change-element half-second"
                          >
                            Exterior
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.double_row} ${styles.painting_row} painting-row painting-interior-row row`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formNumberOfRooms"
                      >
                        <span>
                          <span className={`${styles.small_text}`}>
                            (Interior)
                          </span>{" "}
                          Number of rooms: <span>*</span>
                        </span>
                      </label>

                      <input
                        type={"number"}
                        name="email_number_of_rooms"
                        id="formNumberOfRooms"
                        defaultValue={1}
                        max={50}
                        min={1}
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} ${styles.painting_row} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formRoomNames"
                      >
                        <span>
                          <span className={`${styles.small_text}`}>
                            (Interior)
                          </span>{" "}
                          Room names: <span>*</span>
                        </span>
                      </label>

                      <input
                        type={"text"}
                        name="email_room_names"
                        id="formRoomNames"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.double_row} ${styles.painting_row} painting-row painting-exterior-row row`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formOutsideHouseSections"
                      >
                        <span>
                          <span className={`${styles.small_text}`}>
                            (Exterior)
                          </span>{" "}
                          Outside House Sections: <span>*</span>
                        </span>
                      </label>

                      <input
                        type={"text"}
                        name="email_outside_house_sections"
                        id="formOutsideHouseSections"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.double_row} ${styles.painting_row} painting-row row`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formTypeOfColors"
                      >
                        <span>
                          Type of Colors: <span>*</span>
                        </span>
                      </label>

                      <input
                        type={"text"}
                        name="email_type_of_colors"
                        id="formTypeOfColors"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formTypeOfColors"
                      >
                        <span>
                          Type of Sheen/Finisher: <span>*</span>
                        </span>
                      </label>

                      <select>
                        {FINISHERS.map((finisher) => (
                          <option>{finisher}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.single_row} ${styles.painting_row} painting-row row`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formCommentsDetails"
                      >
                        <span>Comments/Additional Details:</span>
                      </label>

                      <textarea
                        id="formCommentsDetails"
                        name="email_comments_additional_details"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.single_row} other-form-row row`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formDescribeServiceArea"
                      >
                        <span>Describe where the service will happen:</span>
                      </label>

                      <textarea
                        id="formDescribeServiceArea"
                        name="email_describe_service_area"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.form_btns}`}>
                <button
                  type={"reset"}
                  className={`${styles.reset} orientation-change-element half-second`}
                >
                  <span>Reset</span>
                </button>

                <button
                  type={"submit"}
                  className={`${styles.submit} orientation-change-element half-second`}
                >
                  <span>Send</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
