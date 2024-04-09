import { logo } from "../logo.js";

const navbar = document.body.querySelector("universal-navbar");

navbar.innerHTML = logo;
navbar.navPrimaryAnchors = [
  [
    "Über mich",
    "/#ueber-mich",
  ],
  [
    "Musik",
    "/#musik",
  ],
  [
    "Auftritte",
    "/#auftritte",
  ],
  ["Feuer und Natur", "/#feuer-und-natur"],
];
navbar.navSecondaryAnchors = null;
navbar.navPrimaryButtons = null;
navbar.navSecondaryStylishAnchors = [[
  "Kontakt",
  "/kontakt/",
  "callToSignIn",
]];
navbar.mobileMenuButtonContent = [
  "Kontakt",
  "/kontakt/",
];
navbar.mobileItems = [
  [
    "Leistungen",
    [
      [
        "Musik",
        "https://dev.zaubrik.com/assets@v0.0.4/icons/outline/musical-note.svg",
        "/#musik",
      ],
      [
        "Auftritte",
        "https://dev.zaubrik.com/assets@v0.0.4/icons/outline/star.svg",
        "/#auftritte",
      ],
    ],
  ],
  [
    "Sonstiges",
    [
      [
        "Über mich",
        "https://dev.zaubrik.com/assets@v0.0.4/icons/outline/user-circle.svg",
        "/#ueber-mich",
      ],
      [
        "Feuer und Natur",
        "https://dev.zaubrik.com/assets@v0.0.4/icons/outline/fire.svg",
        "/#feuer-und-natur",
      ],
    ],
  ],
];
