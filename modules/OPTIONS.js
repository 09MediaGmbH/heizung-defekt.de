const OPTIONS = {
  ANZAHL_FUER_FOOTER_STAEDTE: 24, // ==> Anzahl der Links, für den bereich "Weiter Einsatzgebiete" o.ä.
  STANDARD_ROUTEN: [
    "datenschutz",
    "impressum",
    "leistungen/elektroinstallationen",
    "leistungen/lampen-anschliessen",
    "leistungen/stromnotdienst", 
    "leistungen/ueberwachungssysteme",
  ], // ==> Statische Routen, welche immer gleich bleiben. (z.B. Über uns, FAQ, Leistungen usw.)
  KEYWORDS: [""], // ==> unter welchen KEYWORDS die unterseiten erstellt werden
  UNTERORDNER: "", // ==> Falls im UNTERORDNER View ein weiterer UNTERORDNER existiert
  DOMAIN: "elektriker-notdienst24h.de", // ==> Domain für die Sitemap
  UPLOAD_DATE: "2023-01-11", // ==> Datum für die Sitemap
  KEYWORD_REVERSE: true, // ==> https://domain.de/keyword-hauptort/ort oder if true https://domain.de/hauptort/keyword-ort
};

module.exports = OPTIONS;
