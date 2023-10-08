/**
 *
 *  This is the Index Contact
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import emailjs from "@emailjs/browser";

import { COMBO_2 } from "@/assets/cdns/CDNImgs";

import CheckValidEmail from "@/assets/functions/data/email/CheckValidEmail";
import CheckValidZip from "@/assets/functions/data/email/CheckZipCode";
import CheckValidPhoneNumber from "@/assets/functions/data/email/CheckValidPhoneNumber";
import CheckForSpaceInFirstCharacter from "@/assets/functions/data/email/CheckForSpaceInFirstCharacter";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexContact = () => {
  const FINISHERS = [
    "-- NOT SELECTED --",
    "Flat",
    "Matte",
    "Eggshell Enamel",
    "Satin Enamel",
    "Semi-Gloss Enamel",
    "Hi-Gloss Enamel",
  ];

  const router = useRouter();

  const resetForm = () => {
    const FORM_ELEMENTS = [
      document.getElementById("formFirstName"),
      document.getElementById("formLastName"),
      document.getElementById("formEmail"),
      document.getElementById("formPhone"),
      document.getElementById("formCity"),
      document.getElementById("formStreet"),
      document.getElementById("formZip"),
      document.getElementById("formService"),
      document.getElementById("interiorCheckbox"),
      document.getElementById("exteriorCheckbox"),
      document.getElementById("formSpecifications"),
      document.getElementById("formTypeOfColors"),
      document.getElementById("formTypeOfFinishers"),
      document.getElementById("formCommentsDetails"),
    ];

    // Changing color of labels
    document.getElementById("interiorCheckboxLabel").style.color = "white";
    document.getElementById("exteriorCheckboxLabel").style.color = "white";

    // Clearing the content of each element
    FORM_ELEMENTS.forEach((element) => {
      element.style.borderColor = "#635985";

      if (
        element.type === "text" ||
        element.type === "email" ||
        element.type === "tel" ||
        element.tagName === "TEXTAREA"
      ) {
        element.value = "";
      }

      if (element.type === "checkbox") {
        element.checked = false;
      }

      if (element.tagName === "SELECT") {
        element.selectedIndex = 0;
      }

      if (element.classList.contains("shake-element")) {
        element.classList.remove("shake-element");
      }
    });

    // Hiding painting-rows
    document.querySelectorAll(".painting-row").forEach((row) => {
      row.style.display = "none";
    });
  };

  const PUBLIC_KEY = "ENRk6ty7gZFAmYSCk";
  emailjs.init(PUBLIC_KEY);

  let nonEmptyInputs = false;
  let nonSpaceAsFirstCharacter = false;
  let validEmail = false;
  let validPhoneNumber = false;
  let validZip = false;

  function setBorderColor(type, element) {
    if (type == "input") {
      if (element.value == "") {
        element.style.borderColor = "red";

        // Adding shake animation
        element.classList.add("shake-element");
        setTimeout(() => {
          element.classList.remove("shake-element");
        }, 500);
      }
    }

    if (type == "select") {
      if (element.selectedIndex == 0) {
        element.style.borderColor = "red";

        // Adding shake animation
        element.classList.add("shake-element");
        setTimeout(() => {
          element.classList.remove("shake-element");
        }, 500);
      }
    }
  }

  function resetBorderColor(type, element) {
    if (type == "input") {
      if (element.value !== "") {
        element.style.borderColor = "#635985";
      }
    }

    if (type == "select") {
      if (element.selectedIndex !== 0) {
        element.style.borderColor = "#635985";
      }
    }
  }

  const EmailSend = () => {
    // Array of form elements
    const FORM_ELEMENTS = [
      document.getElementById("formFirstName"),
      document.getElementById("formLastName"),
      document.getElementById("formEmail"),
      document.getElementById("formPhone"),
      document.getElementById("formCity"),
      document.getElementById("formStreet"),
      document.getElementById("formZip"),
      document.getElementById("formService"),
      document.getElementById("formSpecifications"),
      document.getElementById("formCommentsDetails"),
    ];

    // Array of painting form elements
    const PAINTING_FORM_ELEMENTS = [
      document.getElementById("interiorCheckbox"),
      document.getElementById("exteriorCheckbox"),
      document.getElementById("formTypeOfColors"),
      document.getElementById("formTypeOfFinishers"),
    ];

    const COMPANY_NAME = "Elty's Premium Painting & Restoration LLC";

    // Variables to track validation
    let checkBoxesType = ""; // This is what the message for the checkboxes will be on the email
    let commentsAdditionalDetailsText = undefined;
    let sentSuccess = false;

    // Form type
    const FORM_TYPE = document
      .getElementById("contactForm")
      .getAttribute("data-form-type");

    //! Painting form
    if (FORM_TYPE == "painting-form") {
      // Email JS variables
      const SERVICE_ID = "service_48gpr39";
      const TEMPLATE_ID = "template_pgy02on";

      // Validation flags for non-empty values in different rows
      let rowOnePassed = false;
      let rowTwoPassed = false;
      let rowThreePassed = false;
      let rowFourPassed = false;
      let rowFivePassed = false;
      let rowSixPassed = false;
      let rowSevenPassed = false;

      // Validation for Row One
      if (FORM_ELEMENTS[0].value !== "" && FORM_ELEMENTS[1].value !== "") {
        rowOnePassed = true;

        resetBorderColor("input", FORM_ELEMENTS[0]);
        resetBorderColor("input", FORM_ELEMENTS[1]);
      } else {
        rowOnePassed = false;
        console.log("Row One failed");

        setBorderColor("input", FORM_ELEMENTS[0]);
        setBorderColor("input", FORM_ELEMENTS[1]);
      }

      // Validation for Row Two
      if (FORM_ELEMENTS[2].value !== "" && FORM_ELEMENTS[3].value !== "") {
        rowTwoPassed = true;

        resetBorderColor("input", FORM_ELEMENTS[2]);
        resetBorderColor("input", FORM_ELEMENTS[3]);
      } else {
        rowTwoPassed = false;
        console.log("Row Two failed");

        setBorderColor("input", FORM_ELEMENTS[2]);
        setBorderColor("input", FORM_ELEMENTS[3]);
      }

      // Validation for Row Three
      if (
        FORM_ELEMENTS[4].value !== "" &&
        FORM_ELEMENTS[5].value !== "" &&
        FORM_ELEMENTS[6].value !== ""
      ) {
        rowThreePassed = true;

        resetBorderColor("input", FORM_ELEMENTS[4]);
        resetBorderColor("input", FORM_ELEMENTS[5]);
        resetBorderColor("input", FORM_ELEMENTS[6]);
      } else {
        rowThreePassed = false;
        console.log("Row Three failed");

        setBorderColor("input", FORM_ELEMENTS[4]);
        setBorderColor("input", FORM_ELEMENTS[5]);
        setBorderColor("input", FORM_ELEMENTS[6]);
      }

      // Validation for Row Four
      if (FORM_ELEMENTS[7].selectedIndex !== 0) {
        rowFourPassed = true;

        resetBorderColor("select", FORM_ELEMENTS[7]);
      } else {
        rowFourPassed = false;
        console.log("Row Four failed");

        setBorderColor("select", FORM_ELEMENTS[7]);
      }

      // Validation for Row Five
      if (
        PAINTING_FORM_ELEMENTS[0].checked ||
        PAINTING_FORM_ELEMENTS[1].checked
      ) {
        rowFivePassed = true;
        document.getElementById("interiorCheckboxLabel").style.color = "white";
        document.getElementById("exteriorCheckboxLabel").style.color = "white";

        if (
          PAINTING_FORM_ELEMENTS[0].checked &&
          !PAINTING_FORM_ELEMENTS[1].checked
        ) {
          checkBoxesType = "Interior";
        }

        if (
          !PAINTING_FORM_ELEMENTS[0].checked &&
          PAINTING_FORM_ELEMENTS[1].checked
        ) {
          checkBoxesType = "Exterior";
        }

        if (
          PAINTING_FORM_ELEMENTS[0].checked &&
          PAINTING_FORM_ELEMENTS[1].checked
        ) {
          checkBoxesType = "Interior and Exterior";
        }
      } else {
        rowFivePassed = false;
        console.log("Row Five failed");

        document.getElementById("interiorCheckboxLabel").style.color = "red";
        document.getElementById("exteriorCheckboxLabel").style.color = "red";

        // Adding shake animation
        document
          .getElementById("interiorCheckboxLabel")
          .classList.add("shake-element");
        document
          .getElementById("exteriorCheckboxLabel")
          .classList.add("shake-element");
        setTimeout(() => {
          document
            .getElementById("interiorCheckboxLabel")
            .classList.remove("shake-element");
          document
            .getElementById("exteriorCheckboxLabel")
            .classList.remove("shake-element");
        }, 500);

        // setBorderColor("checkbox", PAINTING_FORM_ELEMENTS[0]);
        // setBorderColor("checkbox", PAINTING_FORM_ELEMENTS[1]);
      }

      // Validation for Row Six
      if (FORM_ELEMENTS[8].value !== "") {
        rowSixPassed = true;

        resetBorderColor("input", FORM_ELEMENTS[8]);
      } else {
        rowSixPassed = false;
        console.log("Row Six failed");

        setBorderColor("input", FORM_ELEMENTS[8]);
      }

      // Validation for Row Seven
      if (PAINTING_FORM_ELEMENTS[2].value !== "") {
        PAINTING_FORM_ELEMENTS[2].style.borderColor = "#635985";
      }
      if (PAINTING_FORM_ELEMENTS[3].selectedIndex !== 0) {
        PAINTING_FORM_ELEMENTS[3].style.borderColor = "#635985";
      }

      if (
        PAINTING_FORM_ELEMENTS[2].value !== "" &&
        PAINTING_FORM_ELEMENTS[3].selectedIndex !== 0
      ) {
        rowSevenPassed = true;

        // resetBorderColor("input", PAINTING_FORM_ELEMENTS[2]);
        // resetBorderColor("select", PAINTING_FORM_ELEMENTS[3]);
      } else {
        rowSevenPassed = false;
        console.log("Row Seven failed");

        setBorderColor("input", PAINTING_FORM_ELEMENTS[2]);
        setBorderColor("select", PAINTING_FORM_ELEMENTS[3]);
      }

      // Setting message for empty Comments/Additional Details
      if (FORM_ELEMENTS[9].value !== "") {
        commentsAdditionalDetailsText = FORM_ELEMENTS[9].value;
      } else {
        commentsAdditionalDetailsText =
          "The user did not add any comments or additional details.";
      }

      // Validation for all rows
      if (
        rowOnePassed &&
        rowTwoPassed &&
        rowThreePassed &&
        rowFourPassed &&
        rowFivePassed &&
        rowSixPassed &&
        rowSevenPassed
      ) {
        nonEmptyInputs = true;

        // Checking if some inputs are valid
        const CHECK_PHONE_NUMBER = CheckValidPhoneNumber(FORM_ELEMENTS[3]);
        const CHECK_EMAIL = CheckValidEmail(FORM_ELEMENTS[2]);
        const CHECK_ZIP = CheckValidZip(FORM_ELEMENTS[6]);

        if (CHECK_PHONE_NUMBER) {
          validPhoneNumber = true;

          if (CHECK_EMAIL) {
            validEmail = true;

            if (CHECK_ZIP) {
              validZip = true;

              // Checking if there are no spaces as first character
              const SPACE_FIRST_NAME = CheckForSpaceInFirstCharacter(
                FORM_ELEMENTS[0]
              );
              const SPACE_LAST_NAME = CheckForSpaceInFirstCharacter(
                FORM_ELEMENTS[1]
              );
              const SPACE_EMAIL = CheckForSpaceInFirstCharacter(
                FORM_ELEMENTS[2]
              );
              const SPACE_PHONE_NUMBER = CheckForSpaceInFirstCharacter(
                FORM_ELEMENTS[3]
              );
              const SPACE_CITY = CheckForSpaceInFirstCharacter(
                FORM_ELEMENTS[4]
              );
              const SPACE_STREET = CheckForSpaceInFirstCharacter(
                FORM_ELEMENTS[5]
              );
              const SPACE_ZIP = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[6]);
              const SPACE_SPECIFICATIONS = CheckForSpaceInFirstCharacter(
                FORM_ELEMENTS[8]
              );
              const SPACE_COLOR_TYPES = CheckForSpaceInFirstCharacter(
                PAINTING_FORM_ELEMENTS[2]
              );

              if (
                !SPACE_FIRST_NAME &&
                !SPACE_LAST_NAME &&
                !SPACE_EMAIL &&
                !SPACE_PHONE_NUMBER &&
                !SPACE_CITY &&
                !SPACE_STREET &&
                !SPACE_ZIP &&
                !SPACE_SPECIFICATIONS &&
                !SPACE_COLOR_TYPES
              ) {
                nonSpaceAsFirstCharacter = true;

                const EMAIL_JS_TEMPLATE_PARAMS = {
                  email_company_name: COMPANY_NAME,
                  email_subject:
                    FORM_ELEMENTS[7].options[FORM_ELEMENTS[7].selectedIndex]
                      .text,
                  email_first_name: FORM_ELEMENTS[0].value,
                  email_last_name: FORM_ELEMENTS[1].value,
                  email_client_email: FORM_ELEMENTS[2].value,
                  email_phone_number: FORM_ELEMENTS[3].value,
                  email_city: FORM_ELEMENTS[4].value,
                  email_street: FORM_ELEMENTS[5].value,
                  email_zip_code: FORM_ELEMENTS[6].value,
                  email_service:
                    FORM_ELEMENTS[7].options[FORM_ELEMENTS[7].selectedIndex]
                      .text,
                  email_painting_type: checkBoxesType,
                  email_specifications: FORM_ELEMENTS[8].value,
                  email_type_of_colors: PAINTING_FORM_ELEMENTS[2].value,
                  email_type_of_sheen_finisher:
                    PAINTING_FORM_ELEMENTS[3].options[
                      PAINTING_FORM_ELEMENTS[3].selectedIndex
                    ].text,
                  email_comments_additional_details:
                    commentsAdditionalDetailsText,
                };
                console.table(EMAIL_JS_TEMPLATE_PARAMS);

                emailjs
                  .send(SERVICE_ID, TEMPLATE_ID, EMAIL_JS_TEMPLATE_PARAMS)
                  .then((res) => {
                    console.log("Email sent successfully: " + res);

                    sentSuccess = true;

                    DeclareStorageVariable("session", "Submission Sent", true);

                    setTimeout(() => {
                      if (sentSuccess) {
                        router.reload();
                      }
                    }, 300);
                  })
                  .catch((error) => {
                    console.error("Error sending email: " + error);
                  });
              } else {
                nonSpaceAsFirstCharacter = false;

                if (SPACE_FIRST_NAME) {
                  console.log("Space as first character: First Name");
                }
                if (SPACE_LAST_NAME) {
                  console.log("Space as first character: Last Name");
                }
                if (SPACE_EMAIL) {
                  console.log("Space as first character: Email");
                }
                if (SPACE_PHONE_NUMBER) {
                  console.log("Space as first character: Phone Number");
                }
                if (SPACE_CITY) {
                  console.log("Space as first character: City");
                }
                if (SPACE_STREET) {
                  console.log("Space as first character: Street");
                }
                if (SPACE_ZIP) {
                  console.log("Space as first character: ZIP Code");
                }
                if (SPACE_SPECIFICATIONS) {
                  console.log("Space as first character: Specifications");
                }
                if (SPACE_COLOR_TYPES) {
                  console.log("Space as first character: Type of colors");
                }
              }
            }
          }
        }
      }
    }

    //! Other forms
    if (FORM_TYPE == "other-form") {
      const SERVICE_ID = "service_48gpr39";
      const TEMPLATE_ID = "template_wncm26z";

      // Validation flags for non-empty values in different rows
      let rowOnePassed = false;
      let rowTwoPassed = false;
      let rowThreePassed = false;
      let rowFourPassed = false;
      let rowFivePassed = false;

      // Validation for Row One
      if (FORM_ELEMENTS[0].value !== "" && FORM_ELEMENTS[1].value !== "") {
        rowOnePassed = true;

        resetBorderColor("input", FORM_ELEMENTS[0]);
        resetBorderColor("input", FORM_ELEMENTS[1]);
      } else {
        rowOnePassed = false;
        console.log("Row One failed");

        setBorderColor("input", FORM_ELEMENTS[0]);
        setBorderColor("input", FORM_ELEMENTS[1]);
      }

      // Validation for Row Two
      if (FORM_ELEMENTS[2].value !== "" && FORM_ELEMENTS[3].value !== "") {
        rowTwoPassed = true;

        resetBorderColor("input", FORM_ELEMENTS[2]);
        resetBorderColor("input", FORM_ELEMENTS[3]);
      } else {
        rowTwoPassed = false;
        console.log("Row Two failed");

        setBorderColor("input", FORM_ELEMENTS[2]);
        setBorderColor("input", FORM_ELEMENTS[3]);
      }

      // Validation for Row Three
      if (
        FORM_ELEMENTS[4].value !== "" &&
        FORM_ELEMENTS[5].value !== "" &&
        FORM_ELEMENTS[6].value !== ""
      ) {
        rowThreePassed = true;

        resetBorderColor("input", FORM_ELEMENTS[4]);
        resetBorderColor("input", FORM_ELEMENTS[5]);
        resetBorderColor("input", FORM_ELEMENTS[6]);
      } else {
        rowThreePassed = false;
        console.log("Row Three failed");

        setBorderColor("input", FORM_ELEMENTS[4]);
        setBorderColor("input", FORM_ELEMENTS[5]);
        setBorderColor("input", FORM_ELEMENTS[6]);
      }

      // Validation for Row Four
      if (FORM_ELEMENTS[7].selectedIndex !== 0) {
        rowFourPassed = true;

        resetBorderColor("select", FORM_ELEMENTS[7]);
      } else {
        rowFourPassed = false;
        console.log("Row Four failed");

        setBorderColor("select", FORM_ELEMENTS[7]);
      }

      // Validation for Row Five
      if (FORM_ELEMENTS[8].value !== "") {
        rowFivePassed = true;
        resetBorderColor("input", FORM_ELEMENTS[8]);
      } else {
        rowFivePassed = false;
        console.log("Row Five failed");

        setBorderColor("input", FORM_ELEMENTS[8]);
      }

      // Setting message for empty Comments/Additional Details
      if (FORM_ELEMENTS[9].value !== "") {
        commentsAdditionalDetailsText = FORM_ELEMENTS[9].value;
      } else {
        commentsAdditionalDetailsText =
          "The user did not add any comments or additional details.";
      }

      // If all validation checks pass
      if (
        rowOnePassed &&
        rowTwoPassed &&
        rowThreePassed &&
        rowFourPassed &&
        rowFivePassed
      ) {
        nonEmptyInputs = true;

        // Checking if some inputs are valid
        const CHECK_PHONE_NUMBER = CheckValidPhoneNumber(FORM_ELEMENTS[3]);
        const CHECK_EMAIL = CheckValidEmail(FORM_ELEMENTS[2]);
        const CHECK_ZIP = CheckValidZip(FORM_ELEMENTS[6]);

        if (CHECK_PHONE_NUMBER && CHECK_EMAIL && CHECK_ZIP) {
          validPhoneNumber = true;
          validEmail = true;
          validZip = true;

          // Checking if there are no spaces as the first character
          // (Assuming CheckForSpaceInFirstCharacter is a function that returns true if there is a space as the first character)
          const SPACE_FIRST_NAME = CheckForSpaceInFirstCharacter(
            FORM_ELEMENTS[0]
          );
          const SPACE_LAST_NAME = CheckForSpaceInFirstCharacter(
            FORM_ELEMENTS[1]
          );
          const SPACE_EMAIL = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[2]);
          const SPACE_PHONE_NUMBER = CheckForSpaceInFirstCharacter(
            FORM_ELEMENTS[3]
          );
          const SPACE_CITY = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[4]);
          const SPACE_STREET = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[5]);
          const SPACE_ZIP = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[6]);
          const SPACE_SPECIFICATIONS = CheckForSpaceInFirstCharacter(
            FORM_ELEMENTS[8]
          );

          if (
            !SPACE_FIRST_NAME &&
            !SPACE_LAST_NAME &&
            !SPACE_EMAIL &&
            !SPACE_PHONE_NUMBER &&
            !SPACE_CITY &&
            !SPACE_STREET &&
            !SPACE_ZIP &&
            !SPACE_SPECIFICATIONS
          ) {
            nonSpaceAsFirstCharacter = true;

            // Creating an object with the form data
            const EMAIL_JS_TEMPLATE_PARAMS = {
              email_company_name: COMPANY_NAME,
              email_subject:
                FORM_ELEMENTS[7].options[FORM_ELEMENTS[7].selectedIndex].text,
              email_first_name: FORM_ELEMENTS[0].value,
              email_last_name: FORM_ELEMENTS[1].value,
              email_client_email: FORM_ELEMENTS[2].value,
              email_phone_number: FORM_ELEMENTS[3].value,
              email_city: FORM_ELEMENTS[4].value,
              email_street: FORM_ELEMENTS[5].value,
              email_zip_code: FORM_ELEMENTS[6].value,
              email_service:
                FORM_ELEMENTS[7].options[FORM_ELEMENTS[7].selectedIndex].text,
              email_specifications: FORM_ELEMENTS[8].value,
              email_comments_additional_details: commentsAdditionalDetailsText,
            };

            console.table(EMAIL_JS_TEMPLATE_PARAMS);

            emailjs
              .send(SERVICE_ID, TEMPLATE_ID, EMAIL_JS_TEMPLATE_PARAMS)
              .then((res) => {
                console.log("Email sent successfully: " + res);

                sentSuccess = true;

                DeclareStorageVariable("session", "Submission Sent", true);

                setTimeout(() => {
                  if (sentSuccess) {
                    router.reload();
                  }
                }, 300);
              })
              .catch((error) => {
                console.error("Error sending email: " + error);
              });
          } else {
            nonSpaceAsFirstCharacter = false;

            // Logging which input has a space as the first character
            if (SPACE_FIRST_NAME) {
              console.log("Space as first character: First Name");
            }
            if (SPACE_LAST_NAME) {
              console.log("Space as first character: Last Name");
            }
            if (SPACE_EMAIL) {
              console.log("Space as first character: Email");
            }
            if (SPACE_PHONE_NUMBER) {
              console.log("Space as first character: Phone Number");
            }
            if (SPACE_CITY) {
              console.log("Space as first character: City");
            }
            if (SPACE_STREET) {
              console.log("Space as first character: Street");
            }
            if (SPACE_ZIP) {
              console.log("Space as first character: ZIP Code");
            }
            if (SPACE_SPECIFICATIONS) {
              console.log("Space as first character: Specifications");
            }
          }
        }
      }
    }
  };

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
            data-form-type={"other-form"}
            id="contactForm"
            onSubmit={(e) => {
              e.preventDefault();
              EmailSend();
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
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} ${styles.form_set_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formFirstName"
                      >
                        First Name: <span>*</span>
                      </label>

                      <input
                        type={"text"}
                        name="email_first_name"
                        id="formFirstName"
                        className="orientation-change-element half-second"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} ${styles.form_set_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formLastName"
                      >
                        Last Name: <span>*</span>
                      </label>

                      <input
                        type={"text"}
                        name="email_last_name"
                        id="formLastName"
                        className="orientation-change-element half-second"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.double_row} row`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} ${styles.form_set_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formEmail"
                      >
                        Email: <span>*</span>
                      </label>

                      <input
                        type={"email"}
                        name="email_client_email"
                        id="formEmail"
                        className="orientation-change-element half-second"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} ${styles.form_set_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formPhone"
                      >
                        Phone Number: <span>*</span> <br />
                        <span className={`${styles.small_text}`}>
                          (Ex: +1336....)
                        </span>{" "}
                      </label>

                      <input
                        type={"tel"}
                        name="email_phone_number"
                        id="formPhone"
                        className="orientation-change-element half-second"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.triple_row} row`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} ${styles.form_set_L} col-lg-4 col-md-4 col-sm-4 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formCity"
                      >
                        City: <span>*</span>
                      </label>

                      <input
                        type={"text"}
                        name="email_city"
                        id="formCity"
                        className="orientation-change-element half-second"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} ${styles.form_set_M} col-lg-4 col-md-4 col-sm-4 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formStreet"
                      >
                        Street: <span>*</span>
                      </label>

                      <input
                        type={"text"}
                        name="email_street"
                        id="formStreet"
                        className="orientation-change-element half-second"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} ${styles.form_set_R} col-lg-4 col-md-4 col-sm-4 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formZip"
                      >
                        ZIP Code: <span>*</span>
                      </label>

                      <input
                        type={"text"}
                        name="email_zip_code"
                        id="formZip"
                        className="orientation-change-element half-second"
                      />
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
                        Type of Service: <span>*</span>
                      </label>

                      <select
                        name="email_service"
                        className="orientation-change-element half-second"
                        id="formService"
                        de
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
                        {/** {SERVICES.map((service) => (
                        <option>{service}</option>
                      ))} */}
                        <option selected>-- NOT SELECTED --</option>
                        <option>House Painting</option>{" "}
                        <option>Popcorn Ceiling Removal</option>
                        <option>Skim Coating</option> <option>Staining</option>{" "}
                        <option>Sheetrock Repair</option>{" "}
                        <option>Pressure Washing</option>
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
                      <label className="orientation-change-element half-second">
                        Painting Type:
                        <span>*</span>
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
                            className="orientation-change-element half-second"
                          />
                          <label
                            id="interiorCheckboxLabel"
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
                            className="orientation-change-element half-second"
                          />
                          <label
                            id="exteriorCheckboxLabel"
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
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.single_row}`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        for="formSpecifications"
                        className="orientation-change-element half-second"
                      >
                        Specifications: <span>*</span>
                        <br />
                        <span className={`${styles.small_text}`}>
                          (Number of rooms, what rooms/sections)
                        </span>{" "}
                      </label>

                      <textarea
                        id="formSpecifications"
                        name="email_specifications"
                        className="orientation-change-element half-second"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.index_contact_inner_form_inner_row} ${styles.double_row} ${styles.painting_row} painting-row row`}
                >
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} ${styles.form_set_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formTypeOfColors"
                      >
                        Type of Colors: <span>*</span>
                      </label>

                      <textarea
                        name="email_type_of_colors"
                        id="formTypeOfColors"
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.index_contact_inner_form_inner_side} ${styles.form_set} ${styles.form_set_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                  >
                    <div className={`${styles.form_set_cnt}`}>
                      <label
                        className="orientation-change-element half-second"
                        for="formTypeOfFinishers"
                      >
                        Type of Sheen/Finisher: <span>*</span>
                      </label>

                      <select id="formTypeOfFinishers">
                        {FINISHERS.map((finisher) => (
                          <option>{finisher}</option>
                        ))}
                      </select>
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
                        for="formCommentsDetails"
                      >
                        Comments/Additional Details:
                      </label>

                      <textarea
                        id="formCommentsDetails"
                        name="email_comments_additional_details"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.form_btns}`}>
                <button
                  onClick={(e) => {
                    e.preventDefault();

                    resetForm();
                  }}
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
