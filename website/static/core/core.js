import { appendHtmlResource, ensureIdScrolling } from "/deps.js";

window.addEventListener("load", ensureIdScrolling());

const coreResources = [{
  url: "/core/html/navbar.html",
  selector: "universal-navbar",
  parentSelector: "navbar",
}, {
  url: "/core/html/footer.html",
  selector: "#footer",
  parentSelector: "body",
}];

appendHtmlResource(coreResources);
