import {
  appendHtmlResource,
  ensureIdScrolling,
  setFooterColorByPreviousSection,
} from "/deps.js";

const coreResources = [{
  url: "/core/html/navbar.html",
  parentSelector: "nav",
}, {
  url: "/core/html/footer.html",
  parentSelector: "body > footer",
}];

appendHtmlResource(coreResources);

window.addEventListener("load", (event) => {
  ensureIdScrolling();
  setFooterColorByPreviousSection(["#f6f9fc", "#ffffff"]);
});
