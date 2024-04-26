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
        "Erste Leistung",
        "/#leistungen",
      ],
      [
        "Zweite Leistung",
        "/#leistungen",
      ],
      [
        "Dritte Leistung",
        "/#leistungen",
      ],
      [
        "Vierte Leistung",
        "/#leistungen",
      ],
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
