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

  // let nonEmptyInputs = false;
  // let nonSpaceAsFirstCharacter = false;
  // let validEmail = false;
  // let validPhoneNumber = false;
  // let validZip = false;

  // function setBorderColor(type, element) {
  //   if (type == "input") {
  //     if (element.value == "") {
  //       element.style.borderColor = "red";

  //       // Adding shake animation
  //       element.classList.add("shake-element");
  //       setTimeout(() => {
  //         element.classList.remove("shake-element");
  //       }, 500);
  //     }
  //   }

  //   if (type == "select") {
  //     if (element.selectedIndex == 0) {
  //       element.style.borderColor = "red";

  //       // Adding shake animation
  //       element.classList.add("shake-element");
  //       setTimeout(() => {
  //         element.classList.remove("shake-element");
  //       }, 500);
  //     }
  //   }
  // }

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

  function checkEmptyOrSpaceValue(element, spaceChecker) {
    if (element.value == "" || spaceChecker) {
      return false;
    }

    if (element.value !== "" && !spaceChecker) {
      return true;
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

      // Checking if there are no spaces as the first character
      // (Assuming CheckForSpaceInFirstCharacter is a function that returns true if there is a space as the first character)
      const SPACE_FIRST_NAME = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[0]);
      const SPACE_LAST_NAME = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[1]);
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
      const SPACE_TYPE_OF_COLORS = CheckForSpaceInFirstCharacter(
        PAINTING_FORM_ELEMENTS[2]
      );

      //! Row 1
      const FN_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[0],
        SPACE_FIRST_NAME
      );
      const LN_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[1],
        SPACE_LAST_NAME
      );

      if (!FN_EMPTY_OR_SPACE_VALUE_CHECKER) {
        FORM_ELEMENTS[0].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[0].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[0].classList.remove("shake-element");
        }, 500);
      }
      if (FN_EMPTY_OR_SPACE_VALUE_CHECKER) {
        resetBorderColor("input", FORM_ELEMENTS[0]);
      }

      if (!LN_EMPTY_OR_SPACE_VALUE_CHECKER) {
        FORM_ELEMENTS[1].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[1].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[1].classList.remove("shake-element");
        }, 500);
      }
      if (LN_EMPTY_OR_SPACE_VALUE_CHECKER) {
        resetBorderColor("input", FORM_ELEMENTS[1]);
      }

      if (FN_EMPTY_OR_SPACE_VALUE_CHECKER && LN_EMPTY_OR_SPACE_VALUE_CHECKER) {
        rowOnePassed = true;
      }

      //! Row 2
      const CHECK_PHONE_NUMBER = CheckValidPhoneNumber(FORM_ELEMENTS[3]);
      const CHECK_EMAIL = CheckValidEmail(FORM_ELEMENTS[2]);
      const EMAIL_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[2],
        SPACE_EMAIL
      );
      const PHONE_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[3],
        SPACE_PHONE_NUMBER
      );

      if (!EMAIL_EMPTY_OR_SPACE_VALUE_CHECKER || !CHECK_EMAIL) {
        FORM_ELEMENTS[2].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[2].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[2].classList.remove("shake-element");
        }, 500);
      }

      if (EMAIL_EMPTY_OR_SPACE_VALUE_CHECKER && CHECK_EMAIL) {
        resetBorderColor("input", FORM_ELEMENTS[2]);
      }

      if (!PHONE_EMPTY_OR_SPACE_VALUE_CHECKER || !CHECK_PHONE_NUMBER) {
        FORM_ELEMENTS[3].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[3].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[3].classList.remove("shake-element");
        }, 500);
      }

      if (PHONE_EMPTY_OR_SPACE_VALUE_CHECKER && CHECK_PHONE_NUMBER) {
        resetBorderColor("input", FORM_ELEMENTS[3]);
      }

      if (
        EMAIL_EMPTY_OR_SPACE_VALUE_CHECKER &&
        CHECK_EMAIL &&
        PHONE_EMPTY_OR_SPACE_VALUE_CHECKER &&
        CHECK_PHONE_NUMBER
      ) {
        rowTwoPassed = true;
      }

      //! Row 3
      const CHECK_ZIP = CheckValidZip(FORM_ELEMENTS[6]);
      const CITY_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[4],
        SPACE_CITY
      );
      const STREET_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[5],
        SPACE_STREET
      );
      const ZIP_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[6],
        SPACE_ZIP
      );
      if (!CITY_EMPTY_OR_SPACE_VALUE_CHECKER) {
        FORM_ELEMENTS[4].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[4].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[4].classList.remove("shake-element");
        }, 500);
      }

      if (CITY_EMPTY_OR_SPACE_VALUE_CHECKER) {
        resetBorderColor("input", FORM_ELEMENTS[4]);
      }

      if (!STREET_EMPTY_OR_SPACE_VALUE_CHECKER) {
        FORM_ELEMENTS[5].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[5].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[5].classList.remove("shake-element");
        }, 500);
      }

      if (STREET_EMPTY_OR_SPACE_VALUE_CHECKER) {
        resetBorderColor("input", FORM_ELEMENTS[5]);
      }

      if (!ZIP_EMPTY_OR_SPACE_VALUE_CHECKER || !CHECK_ZIP) {
        FORM_ELEMENTS[6].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[6].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[6].classList.remove("shake-element");
        }, 500);
      }

      if (ZIP_EMPTY_OR_SPACE_VALUE_CHECKER && CHECK_ZIP) {
        resetBorderColor("input", FORM_ELEMENTS[6]);
      }

      if (
        CITY_EMPTY_OR_SPACE_VALUE_CHECKER &&
        STREET_EMPTY_OR_SPACE_VALUE_CHECKER &&
        ZIP_EMPTY_OR_SPACE_VALUE_CHECKER &&
        CHECK_ZIP
      ) {
        rowThreePassed = true;
      }

      //! Row 4
      if (FORM_ELEMENTS[7].selectedIndex == 0) {
        FORM_ELEMENTS[7].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[7].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[7].classList.remove("shake-element");
        }, 500);
      } else {
        resetBorderColor("select", FORM_ELEMENTS[7]);
        rowFourPassed = true;
      }

      //! Row 5
      if (
        !PAINTING_FORM_ELEMENTS[0].checked &&
        !PAINTING_FORM_ELEMENTS[1].checked
      ) {
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
      }

      if (
        PAINTING_FORM_ELEMENTS[0].checked ||
        PAINTING_FORM_ELEMENTS[1].checked
      ) {
        document.getElementById("interiorCheckboxLabel").style.color = "white";
        document.getElementById("exteriorCheckboxLabel").style.color = "white";
        document
          .getElementById("interiorCheckboxLabel")
          .classList.remove("shake-element");
        document
          .getElementById("exteriorCheckboxLabel")
          .classList.remove("shake-element");
        rowFivePassed = true;
      }

      //! Row 6
      const SPECIFICATIONS_EMPTY_OR_SPACE_VALUE_CHECKER =
        checkEmptyOrSpaceValue(FORM_ELEMENTS[8], SPACE_SPECIFICATIONS);

      if (!SPECIFICATIONS_EMPTY_OR_SPACE_VALUE_CHECKER) {
        FORM_ELEMENTS[8].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[8].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[8].classList.remove("shake-element");
        }, 500);
      }

      if (SPECIFICATIONS_EMPTY_OR_SPACE_VALUE_CHECKER) {
        resetBorderColor("input", FORM_ELEMENTS[8]);

        rowSixPassed = true;
      }

      //! Row 7
      const TYPES_OF_COLORS_EMPTY_OR_SPACE_VALUE_CHECKER =
        checkEmptyOrSpaceValue(PAINTING_FORM_ELEMENTS[2], SPACE_TYPE_OF_COLORS);

      if (!TYPES_OF_COLORS_EMPTY_OR_SPACE_VALUE_CHECKER) {
        PAINTING_FORM_ELEMENTS[2].style.borderColor = "red";

        // Adding shake animation
        PAINTING_FORM_ELEMENTS[2].classList.add("shake-element");
        setTimeout(() => {
          PAINTING_FORM_ELEMENTS[2].classList.remove("shake-element");
        }, 500);
      }

      if (TYPES_OF_COLORS_EMPTY_OR_SPACE_VALUE_CHECKER) {
        resetBorderColor("input", PAINTING_FORM_ELEMENTS[2]);
      }

      if (PAINTING_FORM_ELEMENTS[3].selectedIndex == 0) {
        PAINTING_FORM_ELEMENTS[3].style.borderColor = "red";

        // Adding shake animation
        PAINTING_FORM_ELEMENTS[3].classList.add("shake-element");
        setTimeout(() => {
          PAINTING_FORM_ELEMENTS[3].classList.remove("shake-element");
        }, 500);
      }

      if (PAINTING_FORM_ELEMENTS[3].selectedIndex !== 0) {
        resetBorderColor("select", PAINTING_FORM_ELEMENTS[3]);
      }

      if (
        TYPES_OF_COLORS_EMPTY_OR_SPACE_VALUE_CHECKER &&
        PAINTING_FORM_ELEMENTS[3].selectedIndex !== 0
      ) {
        rowSevenPassed = true;
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
          email_painting_type: checkBoxesType,
          email_specifications: FORM_ELEMENTS[8].value,
          email_type_of_colors: PAINTING_FORM_ELEMENTS[2].value,
          email_type_of_sheen_finisher:
            PAINTING_FORM_ELEMENTS[3].options[
              PAINTING_FORM_ELEMENTS[3].selectedIndex
            ].text,
          email_comments_additional_details: commentsAdditionalDetailsText,
        };
        console.table(EMAIL_JS_TEMPLATE_PARAMS);

        // setTimeout(() => {
        //   router.reload();
        // }, 300);

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

      // Checking if there are no spaces as the first character
      // (Assuming CheckForSpaceInFirstCharacter is a function that returns true if there is a space as the first character)
      const SPACE_FIRST_NAME = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[0]);
      const SPACE_LAST_NAME = CheckForSpaceInFirstCharacter(FORM_ELEMENTS[1]);
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

      //! Row 1
      const FN_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[0],
        SPACE_FIRST_NAME
      );
      const LN_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[1],
        SPACE_LAST_NAME
      );

      if (!FN_EMPTY_OR_SPACE_VALUE_CHECKER) {
        FORM_ELEMENTS[0].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[0].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[0].classList.remove("shake-element");
        }, 500);
      }
      if (FN_EMPTY_OR_SPACE_VALUE_CHECKER) {
        resetBorderColor("input", FORM_ELEMENTS[0]);
      }

      if (!LN_EMPTY_OR_SPACE_VALUE_CHECKER) {
        FORM_ELEMENTS[1].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[1].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[1].classList.remove("shake-element");
        }, 500);
      }
      if (LN_EMPTY_OR_SPACE_VALUE_CHECKER) {
        resetBorderColor("input", FORM_ELEMENTS[1]);
      }

      if (FN_EMPTY_OR_SPACE_VALUE_CHECKER && LN_EMPTY_OR_SPACE_VALUE_CHECKER) {
        rowOnePassed = true;
      }

      //! Row 2
      const CHECK_PHONE_NUMBER = CheckValidPhoneNumber(FORM_ELEMENTS[3]);
      const CHECK_EMAIL = CheckValidEmail(FORM_ELEMENTS[2]);
      const EMAIL_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[2],
        SPACE_EMAIL
      );
      const PHONE_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[3],
        SPACE_PHONE_NUMBER
      );

      if (!EMAIL_EMPTY_OR_SPACE_VALUE_CHECKER || !CHECK_EMAIL) {
        FORM_ELEMENTS[2].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[2].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[2].classList.remove("shake-element");
        }, 500);
      }

      if (EMAIL_EMPTY_OR_SPACE_VALUE_CHECKER && CHECK_EMAIL) {
        resetBorderColor("input", FORM_ELEMENTS[2]);
      }

      if (!PHONE_EMPTY_OR_SPACE_VALUE_CHECKER || !CHECK_PHONE_NUMBER) {
        FORM_ELEMENTS[3].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[3].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[3].classList.remove("shake-element");
        }, 500);
      }

      if (PHONE_EMPTY_OR_SPACE_VALUE_CHECKER && CHECK_PHONE_NUMBER) {
        resetBorderColor("input", FORM_ELEMENTS[3]);
      }

      if (
        EMAIL_EMPTY_OR_SPACE_VALUE_CHECKER &&
        CHECK_EMAIL &&
        PHONE_EMPTY_OR_SPACE_VALUE_CHECKER &&
        CHECK_PHONE_NUMBER
      ) {
        rowTwoPassed = true;
      }

      //! Row 3
      const CHECK_ZIP = CheckValidZip(FORM_ELEMENTS[6]);
      const CITY_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[4],
        SPACE_CITY
      );
      const STREET_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[5],
        SPACE_STREET
      );
      const ZIP_EMPTY_OR_SPACE_VALUE_CHECKER = checkEmptyOrSpaceValue(
        FORM_ELEMENTS[6],
        SPACE_ZIP
      );
      if (!CITY_EMPTY_OR_SPACE_VALUE_CHECKER) {
        FORM_ELEMENTS[4].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[4].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[4].classList.remove("shake-element");
        }, 500);
      }

      if (CITY_EMPTY_OR_SPACE_VALUE_CHECKER) {
        resetBorderColor("input", FORM_ELEMENTS[4]);
      }

      if (!STREET_EMPTY_OR_SPACE_VALUE_CHECKER) {
        FORM_ELEMENTS[5].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[5].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[5].classList.remove("shake-element");
        }, 500);
      }

      if (STREET_EMPTY_OR_SPACE_VALUE_CHECKER) {
        resetBorderColor("input", FORM_ELEMENTS[5]);
      }

      if (!ZIP_EMPTY_OR_SPACE_VALUE_CHECKER || !CHECK_ZIP) {
        FORM_ELEMENTS[6].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[6].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[6].classList.remove("shake-element");
        }, 500);
      }

      if (ZIP_EMPTY_OR_SPACE_VALUE_CHECKER && CHECK_ZIP) {
        resetBorderColor("input", FORM_ELEMENTS[6]);
      }

      if (
        CITY_EMPTY_OR_SPACE_VALUE_CHECKER &&
        STREET_EMPTY_OR_SPACE_VALUE_CHECKER &&
        ZIP_EMPTY_OR_SPACE_VALUE_CHECKER &&
        CHECK_ZIP
      ) {
        rowThreePassed = true;
      }

      //! Row 4
      if (FORM_ELEMENTS[7].selectedIndex == 0) {
        FORM_ELEMENTS[7].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[7].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[7].classList.remove("shake-element");
        }, 500);
      } else {
        resetBorderColor("select", FORM_ELEMENTS[7]);
        rowFourPassed = true;
      }

      //! Row 5
      const SPECIFICATIONS_EMPTY_OR_SPACE_VALUE_CHECKER =
        checkEmptyOrSpaceValue(FORM_ELEMENTS[8], SPACE_SPECIFICATIONS);

      if (!SPECIFICATIONS_EMPTY_OR_SPACE_VALUE_CHECKER) {
        FORM_ELEMENTS[8].style.borderColor = "red";

        // Adding shake animation
        FORM_ELEMENTS[8].classList.add("shake-element");
        setTimeout(() => {
          FORM_ELEMENTS[8].classList.remove("shake-element");
        }, 500);
      }

      if (SPECIFICATIONS_EMPTY_OR_SPACE_VALUE_CHECKER) {
        resetBorderColor("input", FORM_ELEMENTS[8]);

        rowFivePassed = true;
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

        // DeclareStorageVariable("session", "Submission Sent", true);

        // setTimeout(() => {
        //   router.reload();
        // }, 300);

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
            noValidate
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
                          (Ex: (123).......)
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
                        Painting Type: <span>*</span>
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
                          {" "}
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
                        className="orientation-change-element half-second"
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

                      <select
                        id="formTypeOfFinishers"
                        className="orientation-change-element half-second"
                      >
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
