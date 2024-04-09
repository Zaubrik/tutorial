import { logo } from "../logo.js";

const footer = document.body.querySelector("universal-footer");

footer.copyright.href = "https://zaubrik.de/";
footer.innerHTML =
  `<a slot="firstMeta" id="footer-logo-anchor" href="/">${logo}</a>
        <p slot="copyright" id="copyright-text">Kreiert von Zaubrik</p>`;

footer.items = [
  [
    "Leistungen",
    [
      [
        "Musik",
        "/#musik",
      ],
      [
        "Auftritte",
        "/#auftritte",
      ],
      ["Feuer und Natur", "/#feuer-und-natur"],
    ],
  ],
  [
    "Sonstiges",
    [
      ["Über mich", "/#ueber-mich"],
      ["Kontakt", "/kontakt/"],
      ["Impressum", "/rechtliches/impressum/"],
      ["Datenschutz", "/rechtliches/datenschutz/"],
    ],
  ],
];
