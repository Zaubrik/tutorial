import { appendHtmlResource, ensureIdScrolling } from "/deps.js";

window.addEventListener("load", ensureIdScrolling());

const coreResources = [{
  url: "/core/html/meta.html",
  selector: 'meta:not([property^="og:"])',
  parentSelector: "head",
}, {
  url: "/core/html/og_image.html",
  selector: 'meta[property^="og:"]',
  parentSelector: "head",
}, {
  url: "/core/html/favicon.html",
  selector: "#favicon",
  parentSelector: "head",
}, {
  url: "/core/html/navbar.html",
  selector: "universal-navbar",
  parentSelector: "navbar",
}, {
  url: "/core/html/umami.html",
  selector: "#umami-script",
  parentSelector: "head",
}, {
  url: "/core/html/footer.html",
  selector: "#footer",
  parentSelector: "body",
}];

appendHtmlResource(coreResources);
