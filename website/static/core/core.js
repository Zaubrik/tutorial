import {
  appendHtmlResource,
  ensureIdScrolling,
  setFooterColorByPreviousSection,
} from "/deps.js";

const coreResources = [{
  url: "/core/html/navbar.html",
  selector: "universal-navbar",
  parentSelector: "nav",
}, {
  url: "/core/html/footer.html",
  selector: "#footer",
  parentSelector: "body",
}];

appendHtmlResource(coreResources);

window.addEventListener("load", (event) => {
  ensureIdScrolling();
  setFooterColorByPreviousSection(["#f6f9fc", "#ffffff"]);
});
