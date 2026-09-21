# KunterPlan V5 – Familienfreigabe & GitHub-Vorbereitung

## Öffnen
ZIP entpacken und `index.html` öffnen. Produktwelt filtern, bei einem Produkt auf „Bilder ansehen“ oder „Produktbeschreibung & Details“ klicken. Für die Website-Prüfung alle 16 Produktunterseiten unter `produkte/` prüfen. Bilder lassen sich auf Unterseiten per Klick vergrößern.

## Inhalt
16 Produktfamilien · je 3 Musterbilder (Werbeübersicht, Produkt-Ausschnitt, illustrative Tischszene), beim Gebetskalender zusätzlich eine vom Kunden bereitgestellte Frontalvorlage. Der Katalog zeigt keine Preise. Preis- und Gestaltungsanfragen über Instagram @kunterplan.858114 oder WhatsApp. WhatsApp wird erst sichtbar, wenn in `config.js` eine tatsächliche Geschäftsnummer eingetragen ist. Die Nachricht wird dann produktbezogen vorbefüllt und kann vom Kunden vor dem Absenden geändert werden.

**Wichtig:** Die meisten Muster sind KI-generierte Illustrationen, keine druckreifen Endprodukte und keine realen Produktfotos. A4/A3 werden jeweils separat gestaltet. Das tatsächliche Produkt wird erst anhand eines vom Kunden bestätigten Entwurfs erstellt. Lieferumfang inklusive Zubehör und Gesamtpreis wird vor einer verbindlichen Bestellung individuell mitgeteilt.

## KEIN LIVEGANG
Diese ZIP ist ein interner Teststand. Impressum, Datenschutz und Bestellhinweise enthalten noch Platzhalter, die Adresse und die öffentliche E-Mail-Adresse sind nicht bestätigt. Alle HTML-Seiten enthalten daher weiterhin `noindex`. Die SEO-Unterseiten und Sitemap sind vorbereitet, werden aber **erst nach vollständiger rechtlicher und fachlicher Prüfung** freigegeben. Auch die Produktsicherheit, insbesondere bei Kinder-Lernspielen und Kartensets, muss für die konkrete Ausführung geprüft sein.

## Technische Umsetzung
Statisches HTML/CSS/Vanilla JS, lokal geladene Bilder/Schriften; keine Webformulare, Tracker oder externen Widgets. 16 serverseitig lesbare HTML-Produktseiten, Kategorienfilter auf der Startseite. `config.js` enthält nur öffentliche Konfiguration, keine Schlüssel oder privaten Daten. `sitemap.xml` listet alle Produkte.

## Veröffentlichung
1. Alle Texte und Druckprodukte intern freigeben; die gelieferten KI-Muster nie direkt als Druckdateien verwenden.
2. Geschäftsdaten, Datenschutzhinweise, Liefer-/Widerrufsinformationen und Sicherheitsthemen fachlich/rechtlich prüfen.
3. Erreichbarkeit von `kunterplan.de` und Social-/Messenger-Links testen; Domain/DNS ist nicht Bestandteil dieser ZIP.
4. Erst danach die `noindex`-Einträge aus sämtlichen HTML-Seiten entfernen und `sitemap.xml` in der Search Console einreichen.


## GitHub Pages
Die Datei `.nojekyll` ist enthalten. Für GitHub Free muss das Repository für GitHub Pages öffentlich sein. Keine Passwörter, Tokens oder privaten Daten in dieses Repository legen. Solange die rechtlichen Platzhalter noch offen sind, bleibt `noindex` aktiviert und die Domain sollte noch nicht auf die Seite umgestellt werden.
