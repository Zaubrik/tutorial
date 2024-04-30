import {
  appendHtmlResource,
  ensureIdScrolling,
  setFooterColorByPreviousSection,
} from "/deps.js";

window.addEventListener("load", ensureIdScrolling());

const coreResources = [{
  url: "/core/html/navbar.html",
  selector: "universal-navbar",
  parentSelector: "navbar",
}, {
  url: "/core/html/footer.html",
  selector: "universal-footer",
  parentSelector: "body > footer",
}];

appendHtmlResource(coreResources);
setFooterColorByPreviousSection(["#f6f9fc", "#ffffff"]);
