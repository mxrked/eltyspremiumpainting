/**
 *
 *  This is used to send an contact form to an email
 *  @param {Object} input - The input element
 *  @param {Object} rooter - The router variable
 *  @param {Object} formTarget - The form variable
 *
 */

import emailjs from "@emailjs/browser";

import CheckValidEmail from "./CheckValidEmail";
import CheckValidPhoneNumber from "./CheckValidPhoneNumber";
import CheckValidZip from "./CheckZipCode";
import DeclareStorageVariable from "../storage/DeclareStorageVariable";

emailjs.init(PUBLIC_KEY);

function CheckForSpaceInFirstCharacter(input) {
  const CHECK_FOR_SPACE = /^\s/.test(input.value);

  if (CHECK_FOR_SPACE) {
    return true;
  } else {
    return false;
  }
}

function ManipFormNotice(formNotice, color, text) {
  formNotice.style.color = color;
  formNotice.innerText = text;
}

function ManipFormItem(formItem, borderColor) {
  formItem.style.borderColor = borderColor;
}

export default function EmailSend(rooter, formTarget) {}
