



require("dotenv").config();
const OPTIONS = {
  ROOT_PAGE: "index",
  ANZAHL_FUER_FOOTER_STAEDTE: 24, // ==> Anzahl der Links, für den bereich "Weiter Einsatzgebiete" o.ä.
  STANDARD_ROUTEN: [    "24_notdienst",
  "datenschutz",
  "faq",
  "heizung_kaputt",
  "heizung_notdienst_zahlung",
  "heizung_reparatur",
  "heizungsausfall",
  "heizungsinstallation",
  "impressum",
  "karriere",
  "klempner_service",
  "kontakt",
  "professionelle_heizungswartung",
  "rohrbruch",
  "rohrreinigung_notdienst",
  "service",
  "ueber_uns",
  "warum_falt_heizung_aus",
  "wasserschaden_notdienst"], // ==> Statische Routen, welche immer gleich bleiben. (z.B. Über uns, FAQ, Leistungen usw.)
  KEYWORDS: ["heizung-notdienst-", "heizungsservice-"], // ==> unter welchen KEYWORDS die unterseiten erstellt werden
  UNTERORDNER: "", // ==> Falls im UNTERORDNER View ein weiterer UNTERORDNER existiert
  DOMAIN: process.env.DOMAIN_ENV || "heizung-defekt.de", // ==> Domain für die Sitemap
  UPLOAD_DATE: "2023-03-13", // ==> Datum für die Sitemap
  KEYWORD_REVERSE: false, // ==> https://domain.de/keyword-hauptort/ort oder if true https://domain.de/hauptort/keyword-ort
  DYN_LOGO: true,
  DEV_MODE: process.env.DEV_MODE || false,
};

module.exports = OPTIONS;
