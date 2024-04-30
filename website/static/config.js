import { appendSearchParams } from "./deps.js";

export const isProduction = window.location.hostname !== "localhost";
const protocol = isProduction ? "https:" : "http:";
const membersUrl = `https://members.zaubrik.de`;
const sendEmailUrlWithoutParams = membersUrl +
  "/email/receive/zaubrik.de-01HVP25QMDDEBK9ST28WQF8S5F";
export const sendEmailUrl = appendSearchParams(sendEmailUrlWithoutParams)({
  subject: `${window.location.host}: ${window.location.pathname}`,
});
export const defaultFormSuccessMessage = "Vielen Dank für Ihre Nachricht!";
export const defaultFormErrorMessage =
  "Etwas ist schief gelaufen! Bitte melden Sie das Problem bei support@zaubrik.de.";
