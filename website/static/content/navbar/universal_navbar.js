import { logo } from "../logo.js";

const navbar = document.body.querySelector("universal-navbar");

navbar.innerHTML = logo;
navbar.navPrimaryAnchors = [
  [
    "Über mich",
    "/#ueber-mich",
  ],
  [
    "Leistungen",
    "/#leistungen",
  ],
  [
    "Rezensionen",
    "/#rezensionen",
  ],
  ["Schluss", "/#schluss"],
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
        "Erste Leistung",
        "https://dev.zaubrik.com/assets@v0.1.0/icons/heroicons/outline/squares-plus.svg",
        "/#leistungen",
      ],
      [
        "Zweite Leistung",
        "https://dev.zaubrik.com/assets@v0.1.0/icons/heroicons/outline/squares-plus.svg",
        "/#leistungen",
      ],
      [
        "Dritte Leistung",
        "https://dev.zaubrik.com/assets@v0.1.0/icons/heroicons/outline/squares-plus.svg",
        "/#leistungen",
      ],
      [
        "Vierte Leistung",
        "https://dev.zaubrik.com/assets@v0.1.0/icons/heroicons/outline/squares-plus.svg",
        "/#leistungen",
      ],
    ],
  ],
  [
    "Sonstiges",
    [
      [
        "Über mich",
        "https://dev.zaubrik.com/assets@v0.1.0/icons/heroicons/outline/squares-plus.svg",
        "/#ueber-mich",
      ],
      [
        "Rezensionen",
        "https://dev.zaubrik.com/assets@v0.1.0/icons/heroicons/outline/squares-plus.svg",
        "/#rezensionen",
      ],
      [
        "Schluss",
        "https://dev.zaubrik.com/assets@v0.1.0/icons/heroicons/outline/squares-plus.svg",
        "/#schluss",
      ],
    ],
  ],
];
