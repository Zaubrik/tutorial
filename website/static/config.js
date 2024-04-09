import { appendSearchParams } from "./deps.js";

export const isProduction = window.location.hostname !== "localhost";
const protocol = isProduction ? "https:" : "http:";
const membersHostname = isProduction
  ? "members.zaubrik.de"
  : "members.localhost";
const membersPort = isProduction ? "" : ":8080";
export const membersUrl = `${protocol}//${membersHostname}${membersPort}`;

export const sendEmailUrlWithoutParams = membersUrl +
  "/user/email/receive/kraftcoaching.net-7d4fbef6be75";
export const sendEmailUrl = appendSearchParams(sendEmailUrlWithoutParams)({
  subject: `${window.location.host}: ${window.location.pathname}`,
});
