# Bericht: klarkreis.de verkaufsfertig machen (Cloud-Sitzung, 26.10.2026)

## Kurzfassung

1. **Kaufweg repariert:** Das Kauf-Fenster war auf dem Handy oben abgeschnitten, ließ sich nicht schließen, und „Anmelden" öffnete das Login unsichtbar dahinter. Jetzt funktioniert der Weg vom Bezahlabend bis zum Login.
2. **Startseite in 10 Sekunden verständlich:** sagt jetzt, was passiert (Station für Station, ohne Moderation), für wen (Gruppe, zu zweit, allein), was es kostet (über 20 Abende frei, Reisen 29 €), und der Startknopf ist mobil sofort sichtbar.
3. **Weniger Ritual, mehr Substanz:** 81 Gastgeber-Hinweise ohne Kerze, „drei Atemzüge" und „spür nach"; unvertonte Abende mit belegten Befunden statt Vibe-Sätzen. Kein vertonter Text und keine Audio angefasst.
4. **Schneller und barrierefreier:** Bilder mobil bis zu 6× kleiner (Themenübersicht 9,3 MB → 1,6 MB), 17 Icons, die als Wort („bookmark") erschienen, ersetzt, Kontraste auf WCAG AA, Screenreader lesen keine Icon-Namen mehr vor.
5. **Wichtigste offene Punkte für dich:** Bezahlinhalte sind über das öffentliche Repo (Audios, PDFs, Git-Historie) frei abrufbar; alle Seiten stehen noch auf `noindex`; die Über-Seite positioniert KlarKreis wörtlich als „säkularen Hauskreis" (vertont, daher nur Vorschlag).

Alle Änderungen liegen auf dem Branch `claude/nice-hamilton-iml9ab` (Draft-PR gegen `main`, nicht gemergt). Geprüft mit einem automatischen Browser-Durchlauf über alle 28 Seiten, Handy und Desktop: keine JavaScript-Fehler, kein seitliches Verrutschen.

---

## Was geändert wurde (Vorher → Nachher)

### 1. Kaufweg

| Wo | Vorher | Nachher |
|---|---|---|
| Kauf-Fenster auf dem Handy | Oberer Teil (Titel, „Kostenpflichtiger Abend") abgeschnitten und nicht erreichbar | Fenster vollständig sichtbar und scrollbar |
| Kauf-Fenster schließen | Ging nicht; man konnte die Beschreibung des Abends dahinter nicht lesen | ×-Knopf, Escape-Taste, „Erst mal ansehen, worum es geht"; danach wird der Start-Knopf zu „Freischalten · 9 €" und öffnet das Fenster wieder |
| „Anmelden" im Kauf-Fenster | Login-Fenster ging **hinter** dem Kauf-Fenster auf, also unsichtbar. Wer gekauft hatte, kam nicht an seinen Zugang | Kauf-Fenster schließt sich, Login erscheint |
| Server nicht erreichbar | „Du bist als  angemeldet. Für dieses Konto liegt noch kein Zugang vor." (leere Adresse) | „Der Zugang konnte gerade nicht geprüft werden … Lade die Seite neu oder melde dich an." |
| Text zum Mail-Kauf | „… du bekommst Zahlungsinfos und deinen persönlichen Zugangs-Code" (Codes gibt es seit der Kontolösung nicht mehr) | „Nach Zahlungseingang schalten wir den Zugang für deine E-Mail-Adresse frei … Dann meldest du dich mit dieser Adresse an." Die vorbereitete Kauf-Mail bittet ebenfalls um Freischaltung statt um einen Code |
| Kleingedrucktes im Kauf-Fenster | „14 Tage Widerrufsrecht" (stimmt bei digitalen Inhalten nur ohne Zustimmung zum Erlöschen) | Link „Widerrufsbelehrung" |
| Werte-/Wir-Reise unter den Kaufknöpfen | „Nach der Zahlung: alle sechs Abende sofort verfügbar. Klick auf ‚Alle 6 Abende' öffnet das Kauf-Modal …" | „Nach dem Kauf hängt der Zugang an deiner E-Mail-Adresse: anmelden, und die Abende sind auf allen Geräten da. Oder erst Abend 1 ausprobieren und später entscheiden." |
| Frei-Reise | „Der Zugang läuft vorerst über einen Code" / „Zugang über Code" | „Bis zum Start gibt es den Zugang auf Anfrage: kurze E-Mail, wir schalten ihn für deine Adresse frei." / „Mit freigeschaltetem Konto" |
| Login-Fenster | „Ein Faden, der sich durchzieht. Ohne Login funktioniert alles." | „Einmal anmelden, überall weitermachen. Für die kostenlosen Abende brauchst du kein Login." Neuer erster Punkt: „Gekaufte Abende — der Zugang hängt an deiner E-Mail-Adresse und gilt auf allen Geräten." |
| Abend-Kompass | Empfehlung zeigte nicht, ob der Abend etwas kostet | „… · kostenlos" bzw. „… · kostenpflichtig" |

### 2. Startseite

| Stelle | Vorher | Nachher |
|---|---|---|
| Unterzeile | „Strukturierte Themenabende für kleine Gruppen. Keine Moderation nötig — nur ihr und ein gutes Gespräch." | „Strukturierte Themenabende für kleine Gruppen, zu zweit oder allein. Die Seite führt Station für Station durch den Abend — niemand muss moderieren, nichts muss vorbereitet werden." |
| Hauptknopf | „Themenabend starten" | „Kostenlosen Abend aussuchen" |
| Zeile darunter | „Kostenlos starten · ohne Anmeldung · direkt im Browser" (kaum lesbar, 2,5:1 Kontrast) | „Über 20 Abende kostenlos · ohne Anmeldung · direkt im Browser" (lesbar) |
| Handy | Startknopf erst nach dem Scrollen sichtbar | Knopf im ersten Bildschirm (Abstände und Bildhöhe nur mobil gestrafft) |
| „So läuft es ab", Schritt 1 | „… Jedes Set enthält sorgfältig gestaltete Impulse." | „Bindung, Werte, Herkunft, Zukunft oder einfach gute Fragen. Wer unsicher ist, beantwortet im Abend-Kompass fünf Fragen und bekommt einen Vorschlag." |
| Schritt 2 | „Einfach da sein" | „Leute einladen" — zu zweit oder drei bis acht Leute, die meisten Abende auch allein |
| Schritt 3 | „Moderationsstress weg … lässt Raum für echte Begegnung." | „Station für Station. Ein Bildschirm reicht. Jede Station hat eine Zeitvorgabe und sagt, was dran ist: ein kurzer Impuls aus Forschung oder Philosophie, eine Frage für die Runde, am Ende eine Sache für die Woche danach." |
| Link unter den Karten | „Alle 16 Themen ansehen" (falsch: es sind 22 freie Abende) | „Alle kostenlosen Abende ansehen" |
| Werte-/Wir-Reise | Preis nirgends genannt; „als Glimpse"; „Vier Reiter … 5:1-Klima-Check" ohne Erklärung | „Abend 1 frei · alle 6 für 29 €" bzw. „alle 7 für 29 €"; die vier Reiter werden in einem Satz erklärt (Kritik, Verachtung, Rechtfertigung, Mauern) |
| Frei-Reise | „rund 1 Std. 45 Min., allein rund 1 Std."; „Direkt zu Abend 1" (führt aber zur Bezahlschranke) | „rund 1 Std. 40 Min., allein rund 55 Min." (wie in den Daten); Kennzeichnung „in Vorbereitung"; Knopf „Abend 1 ansehen" |
| Zitat | „Wir haben nicht zu wenig Zeit. Wir haben zu wenig Resonanz." — Hartmut Rosa (wörtlich nicht belegbar) | „Wenn Beschleunigung das Problem ist, dann ist Resonanz vielleicht die Lösung." — Hartmut Rosa, „Resonanz" (2016) |
| Kreis-Absatz | „… Ein Kreis, der zusammen wächst, ist eine Lebensform." | Satz gestrichen; Absatz konkret: drei bis acht Menschen, alle paar Wochen, Thema für Thema |
| Schluss | „… einen Abend, über den ihr noch lange sprechen werdet." | „Die meisten Abende sind kostenlos und laufen direkt im Browser. Thema aussuchen, Link an die anderen schicken, anfangen." |

### 3. Texte nach deinen Stilregeln

**Gastgeber-Hinweise (81 Stellen, alle freien Abende).** Laut deinem Bindungs-Entwurf werden Gastgeber-Hinweise nicht vertont; ich habe das zusätzlich automatisch abgesichert (bei keiner vertonten Station wurde ein gesprochenes Feld verändert).

| Typ | Vorher | Nachher |
|---|---|---|
| Öffnen, Gruppe | „Kerze anzünden. Handys stumm auf einen Tisch. Drei gemeinsame Atemzüge." | „Handys stumm auf einen Tisch am Rand. Getränke stehen, alle sitzen. Erst dann weiter." |
| Öffnen, allein | „Kerze anzünden. Handy weg. Drei tiefe Atemzüge. Tee oder Wein." | „Handy weg, Stift und Papier bereit. Tee oder Wein, wenn du magst." |
| Stille | „Alle schauen zur Kerze. Zwei Minuten. Atmen." | „Zwei Minuten niemand redet. Wer mag, schreibt sich etwas auf." |
| Stille, Bindung | „… Der Host sagt ‚Stille' — und am Ende ‚Willkommen zurück'." | „… Der Host sagt an, wann die Pause beginnt und wann es weitergeht." |
| Körper | „Nicht denken — spüren." | „Die erste Antwort reicht, nicht lange überlegen." |
| Ende | „Danach die Kerze zusammen auspusten." | gestrichen |

Ausnahme: Beim ADHS-Abend sagt die Audio selbst „drei Atemzüge zum Start", deshalb steht der Hinweis dort weiter („… wie im Text"), nur ohne Kerze.

**Unvertonte Abende — Texte direkt überarbeitet:**

| Abend | Vorher | Nachher |
|---|---|---|
| Das Kind in mir | Kerze an/aus in jeder Fassung, „Die zärtlichste Station des Abends", „Der Ton macht die Heilung", „Stift weg, Augen zu, atmen", „das Geschriebene arbeitet von allein weiter" | Ohne Kerzen und Atemformeln; „Der Blick von außen: was der andere an dir sieht"; „Der Ton, in dem du mit dir sprichst" — dazu ein belegter Befund: In Experimenten von Breines & Chen (2012) lernten Studierende nach einem verpatzten Test länger, wenn sie vorher freundlich über ihren Fehler schrieben, als die, deren Selbstwert man aufbauen wollte |
| Die 36 Fragen | „Wer mag: Kerze an."; „fühlten sich … näher als mancher Freundschaft nach Monaten" (grammatisch falsch, unpräzise) | Ohne Kerze; „… eine Nähe, die höher lag als die, die etwa 30 Prozent vergleichbarer Studierender ihrer engsten Beziehung überhaupt zuschrieben. Aron selbst schränkte ein: Vertrauen und Verbindlichkeit entstehen so nicht in 45 Minuten." (Aron et al. 1997) |
| Frageabend: Was noch kommt | Anonymes Zitat „Man muss das Mögliche tun, damit das Unmögliche sichtbar wird." (ohne Autor) + „Zukunft ist kein Ort, an dem wir irgendwann ankommen …" | „End of History Illusion" (Quoidbach, Gilbert & Wilson 2013, rund 19.000 Menschen): Wir unterschätzen in jedem Alter, wie sehr wir uns noch verändern — passt direkt zur Frage „Wovon glaubst du, dass es zu spät ist?" |
| Frageabend: Die Menschen in meinem Leben | „Wir entstehen nicht allein. Wer wir sind, hat viel damit zu tun, wer uns angeschaut hat." | Dunbar: meist nur etwa fünf wirklich enge Bezugspersonen; Harvard-Studie zur Erwachsenenentwicklung (seit 1938): Zufriedenheit mit Beziehungen mit 50 sagte die Gesundheit mit 80 besser voraus als der Cholesterinspiegel |
| Frageabende Wurzeln, Menschen | „Diese Minuten gehören dem, was sich gerade gemeldet hat." / „Diese Minuten gehören ihnen." | Sachlich: wozu die Pause da ist und dass niemand etwas sagen muss |

**Weitere Seiten:**

- Themenseite, Solo-Hinweis: „Schreib auf, sprich laut, atme dazwischen." → „… mach Pausen."
- Unterstützen: „Hier läuft nichts Kommerzielles" (stimmt seit den Reisen nicht mehr) → „Der größte Teil von KlarKreis ist kostenlos … Nur die mehrteiligen Reisen und der Date-Abend kosten etwas."
- Gastgeber: „liebevoll gestaltetes PDF" → „PDF zum Lesen und Ausdrucken"; „10 Seiten" → „11 Seiten" (tatsächliche Seitenzahl).
- Anrede überall außerhalb vertonter Abschnitte einheitlich klein („du", vorher gemischt „Du/Dir/Dein").
- Fragerunde: Grammatikfehler „merken sich Fragerunde und Favoriten Dein Fortschritt" → „bleiben dein Fortschritt in der Fragerunde und deine Favoriten auf allen Geräten erhalten."
- Themenübersicht: Einleitung nennt jetzt auch „allein" und dass die Liste kostenlos ist.

### 4. Zeitangaben

- Geprüft mit node gegen `themes.js`: Alle 62 freien Formate zeigen 3–7 Minuten weniger als die Summe der Stationen. Das ist genau die 5-Minuten-Feedbackstation am Ende, also innerhalb deiner Toleranz. Keine Änderung nötig.
- Bezahlabende: Die hinterlegten Minuten weichen ebenfalls nur 3–7 Minuten ab.
- Fehler behoben: `themes.js` hat beim Laden die hinterlegte Dauer aller Bezahlabende mit 0 überschrieben (wurde zwar nirgends angezeigt, aber falsch).
- Startseite Frei-Reise korrigiert (siehe oben); der Kompass zeigt bei den Alternativen jetzt die Dauer des gewählten Formats statt immer der Gruppen-Dauer.

### 5. Barrierefreiheit (WCAG AA)

- **17 Icons fehlten in der Icon-Schrift** und erschienen als Wort: im Login-Fenster „bookmark", „history", oben „person", auf der Frei-Reise „savings", im Kompass „psychology", „fingerprint", „flag" usw., bei „Details ausblenden" „visibility_off". Alle durch vorhandene Symbole ersetzt.
- **Kontrast:** Footer-Links, Mikrozeilen und Gold-Labels („Worum es geht", „Station 3 von 19") lagen bei 2,5–4:1. Jetzt mindestens 4,5:1, zentral in `dark.css`, heller und dunkler Modus.
- **Screenreader:** Die Icon-Schrift arbeitet mit Wörtern; Screenreader lasen „Die Reise ansehen arrow_forward" oder bei den Themenkarten „groups handshake self_improvement". Neues kleines Skript `a11y.js` blendet diese Wörter aus bzw. liest „Kleine Gruppe, Zu zweit, Allein".
- **Abend-Flow:** Schließen-Knopf und Timer-Knopf haben jetzt Namen, das SOS-Fenster ist ein echter Dialog mit Fokusführung und Escape, die Sterne-Bewertung meldet die Auswahl, beim Weiterklicken springt der Fokus auf die neue Station.
- **Kauf-Fenster:** Fokus, Escape, Beschriftung (siehe oben).

### 6. Performance

- **Bilder:** Auch 80-px-Vorschaubilder wurden in voller Größe (~1200×1500 px, je ~450 KB) geladen. Neu: verkleinerte Fassungen in `images/w480` und `images/w960`, eingebunden per `srcset`; große Bildschirme bekommen weiter die Originale. Neue Bilder einfach mit `python3 _scripts/make_thumbs.py` nachziehen.

  | Seite (Handy) | Vorher | Nachher (normales / Retina-Handy) |
  |---|---|---|
  | Startseite | 3,9 MB | 0,6 / 1,5 MB |
  | Themenübersicht | 9,3 MB | 1,6 / 2,8 MB |
  | Themenseite | 2,0 MB | 0,9 / 1,1 MB |

- **Supabase:** Auf Bezahlseiten wurde das Login-Programm (esm.sh, Supabase) schon beim bloßen Ansehen geladen. Jetzt nur noch, wenn eine Sitzung besteht oder jemand sich anmeldet. Spart Ladezeit und passt zur Datenschutzerklärung.

### 7. Rechtliches

- **AGB §§ 3–5:** beschrieben nur Kauf und Zahlung über Stripe und einen „Unlock" per „Zugangscode". Jetzt beide Wege: Kauf per E-Mail (PayPal/Überweisung) und — sobald angeboten — über Stripe; Zugang am Konto per Anmelde-Link.
- **AGB § 6 und Widerruf:** Beim E-Mail-Kauf wurde die Zustimmung zum vorzeitigen Erlöschen des Widerrufsrechts nirgends eingeholt. Text sagt jetzt: Zustimmung im Bestellvorgang (Stripe) bzw. in der Antwort-Mail; ohne Zustimmung bleibt das Widerrufsrecht. Vorlage für die Antwort-Mail siehe unten.
- **Datenschutz:** Neuer Abschnitt „Kauf von Abend-Paketen" (Daten, PayPal/Bank/Stripe, Rechtsgrundlage, Aufbewahrung bis zu zehn Jahre). Korrigiert: „KlarKreis erhebt selbst keine personenbezogenen Daten" und „funktioniert vollständig ohne Account" (beides stimmt mit Bezahlabenden nicht mehr). Einstellungen im Browser-Speicher ergänzt. Stand Oktober 2026.
- Impressum geprüft: vollständig, keine Änderung.

### 8. Technik und Kleinigkeiten

- „Passende Themen" zeigte auf jeder Themenseite dieselben drei ersten Einträge. Jetzt freie Abende derselben Kategorie zuerst, ohne Bezahl- und Folgeabende.
- Ungültiger Abend-Link (`abend.html?thema=…`) startete stillschweigend den Bindungs-Abend; jetzt geht es zur Übersicht.
- Themenseite setzt eine eigene Beschreibung je Abend (für Vorschauen beim Teilen und später für Google).
- Alt-Text „Kreative Chaos" → „Kreatives Chaos auf einem Schreibtisch".
- Asset-Versionen hochgezählt: `themes.js?v=20261026b`, `dark.css?v=20261026b`, `login-ui.js`, `auth.js`, `paid.js`, `a11y.js` jeweils `?v=20261026a`.

---

## Bewusst unverändert (mit Grund)

- **Alle Audios und vertonten Texte** (Abschnitte mit `data-page-audio`, Beschreibungen/Fragen/Listen vertonter Stationen, Einführungstexte vertonter Abende). Harte Regel. Was dort nicht zu den Stilregeln passt, steht unten als Sprechtext-Vorschlag.
- **Stationstitel vertonter Stationen** (z. B. „Zwei Minuten, nur die Kerze" bei Prioritäten), weil nicht sicher ist, ob der Titel mitgesprochen wird.
- **Preise, Gratis-/Bezahl-Zuschnitt, Frei-Reise-Status:** nicht meine Entscheidung (siehe offene Punkte).
- **`noindex` auf allen Seiten:** deine bewusste Entscheidung „Seite im Aufbau".
- **Tailwind über CDN:** Umstellung auf eigenes CSS wäre ein Eingriff in deinen Arbeitsablauf (siehe offene Punkte).
- **Bezahlinhalte in Supabase, Stripe-Platzhalter, Bezahl-PDFs und -Audios im Repo:** kein Zugriff bzw. Bezahlentscheidung.
- **Angezeigte Dauer ohne Feedbackstation:** Feedback gehört nicht zum Abend; Abweichung liegt in der Toleranz.
- **Handout-PDFs** wurden nicht neu erzeugt (dein Skript braucht Chrome auf deinem Mac). Betroffen sind nur die überarbeiteten unvertonten Abende („Das Kind in mir", „Die 36 Fragen", „Was noch kommt", „Die Menschen in meinem Leben", „Woher ich komme"); einmal `make_pdf.py` für diese fünf laufen lassen.
- **Bild-Originale** unverändert; Seiten-Kopfbilder in voller Breite laden auf Retina-Handys weiter das Original (eine Datei pro Seite, bewusst).

---

## Offene Entscheidungen für dich

1. **Bezahlinhalte sind öffentlich:** Das Repo ist öffentlich, und dort liegen die vollständig vertonten Bezahlabende (`audio/werte_reise_2/…`, `audio/date/…`), die Handouts (`pdf/werte_reise_2.pdf` mit Kernfragen) und in der Git-Historie die kompletten Texte. **Empfehlung:** Repo auf privat stellen und Bezahl-Audios/PDFs künftig nur über Supabase mit Berechtigung ausliefern; bis dahin ist der Schutz nur kosmetisch.
2. **`noindex` vor dem Verkaufsstart entfernen** (eine Zeile pro Seite), sonst findet niemand die Seite über Google. **Empfehlung:** sobald Punkt 1 und 3 erledigt sind.
3. **Stripe-Links sind Platzhalter**, gekauft wird per E-Mail. **Empfehlung:** Stripe-Payment-Links eintragen (Checkout mit Zustimmungs-Häkchen zum Widerruf); bis dahin die Mail-Vorlage unten verwenden.
4. **Tailwind-CDN:** Laut Tailwind nicht für den Livebetrieb gedacht; blockiert ein Werbeblocker oder Firmennetz `cdn.tailwindcss.com`, ist die ganze Seite ungestylt (im Test nachgestellt). **Empfehlung:** einmal ein fertiges CSS erzeugen und mit einchecken — schneller, ein externer Dienst weniger.
5. **Frei-Reise:** heißt „in Vorbereitung", ist aber per Mail kaufbar, und anders als bei den anderen Reisen ist schon Abend 1 kostenpflichtig. **Empfehlung:** zum Start Abend 1 freigeben wie bei Werte- und Wir-Reise (der Code-Kommentar in `thema.html` beschreibt den Handgriff).
6. **Über-Seite** positioniert KlarKreis wörtlich als Nachfolger der Hauskreise und zitiert Rosa unbelegt (vertont). **Empfehlung:** Absatz neu schreiben und neu vertonen (Text unten).
7. **Rechtstexte prüfen lassen:** Ich habe AGB, Widerruf und Datenschutz an den tatsächlichen Ablauf angepasst, bin aber kein Anwalt. **Empfehlung:** einmal von einer Fachperson oder einem Generator-Dienst gegenlesen lassen.
8. **Bezahlabende in Supabase** haben vermutlich dieselben Kerzen-/Atem-Hinweise wie die freien. **Empfehlung:** beim nächsten Upload dieselben Ersetzungen anwenden (Liste in Abschnitt 3).
9. **Schutz-Hook fehlt im Repo:** `_scripts/pre-commit-hook.sh` existiert nur bei dir lokal. Ich habe für diese Sitzung einen gleichwertigen lokalen Hook gebaut (blockiert Bezahlinhalte in `themes.js`, Änderungen unter `audio/`, Schlüssel). **Empfehlung:** deine Datei mit `git add -f _scripts/pre-commit-hook.sh` einchecken, damit künftige Cloud-Sitzungen sie haben.
10. **Eine „Stille"-Station pro Abend** gibt es fast überall, oft mit Pathos im gesprochenen Text. **Empfehlung:** bei der nächsten Vertonungsrunde auf eine sachliche Pause pro Abend reduzieren.

### Vorlage: Antwort-Mail beim Kauf per E-Mail

> Danke für deine Bestellung „[Paket]" für [Preis]. Zahlen kannst du per PayPal an [Adresse] oder per Überweisung an [IBAN], Verwendungszweck „[Paket] [deine E-Mail]".
>
> Damit ich gleich nach Zahlungseingang freischalten kann, brauche ich kurz deine Bestätigung. Antworte bitte mit: „Ich stimme zu, dass KlarKreis vor Ablauf der Widerrufsfrist mit der Bereitstellung beginnt. Mir ist bekannt, dass ich dadurch mein Widerrufsrecht verliere."
>
> Ohne diese Bestätigung schalte ich nach Ablauf der 14-tägigen Widerrufsfrist frei.

Nach der Freischaltung eine kurze Bestätigung mit Paket, Preis und der erteilten Zustimmung schicken (gesetzlich gefordert).

---

## Vorschläge für gesprochene Texte (nicht umgesetzt, zur Neuvertonung)

| Wo | Jetzt (gesprochen) | Vorschlag |
|---|---|---|
| Über · Der Kreis | „Säkular, aber mit der Tragkraft dessen, was früher Hauskreise ermöglichten: Verbindlichkeit, Wiederkehr, Wachsen in gemeinsamer Zeit." | „Was eine feste Runde ausmacht, ist schlicht: Man sieht sich wieder. Wer weiß, dass er in drei Wochen wieder am selben Tisch sitzt, erzählt anders." |
| Über · Der Kreis | Zitat „Wir haben nicht zu wenig Zeit. Wir haben zu wenig Resonanz." — Hartmut Rosa | „Wenn Beschleunigung das Problem ist, dann ist Resonanz vielleicht die Lösung." — Hartmut Rosa, „Resonanz" (2016) |
| Über · Der Kreis | „Ein Gespräch, das dich verwandelt. Eine Landschaft, die dich anblickt." / „Ein Kreis, der zusammen wächst, ist eine Lebensform." | „Ein Gespräch, nach dem man anders über etwas denkt." / Satz streichen |
| Über · Die Idee | „Zwei Stunden, in denen echte Begegnung nicht vom Zufall abhängt." | „Zwei Stunden, in denen ein gutes Gespräch nicht vom Zufall abhängt." |
| Werte-Reise · Einleitung | „Der erste Abend ist frei — als Glimpse. Der Rest ist für Kreise, die zusammen wachsen wollen." | „Der erste Abend ist frei, zum Reinschauen. Die anderen fünf sind für Runden, die ein paar Monate dranbleiben wollen." |
| Wir-Reise · Rhythmus | „feste Slot, gleiche Uhrzeit, gleiches Ritual" / „Kerze, Handys weg, niemand reinkommen." | „fester Abend, gleiche Uhrzeit" / „Handys weg, Tür zu." |
| Wir-Reise · Konzept | „Gottman hat 16 Jahre lang Paare im Labor beobachtet … nach 5 Minuten Beobachtung … mit 91-prozentiger Treffsicherheit" | Faktencheck: Die hohen Trefferquoten wurden nachträglich an denselben Paaren berechnet und schwanken je nach Studie. Vorschlag: „John Gottman hat über Jahrzehnte Paare im Labor beobachtet. Schon kurze Ausschnitte eines Streitgesprächs verrieten seinem Team viel darüber, welche Paare zusammenblieben." |
| Gastgeber · Raum | „Zehn Minuten bevor die Leute kommen, setz dich einmal still hin … Nur atmen." | „Zehn Minuten bevor die Leute kommen, setz dich einmal hin. Nicht aufräumen, nicht nachprüfen. Wer gehetzt anfängt, moderiert gehetzt." |
| Gastgeber · Starten | „Du bist jemand, der Raum hält." | „Du bist jemand, der den Rahmen hält: Zeit im Blick, alle kommen dran, und du antwortest selbst ehrlich mit." |
| Bindung · Öffnen | „Das Ritual ist unspektakulär, aber es markiert: Hier ist jetzt ein anderer Raum." | „Handys weg ist unspektakulär, macht aber einen Unterschied: Ab jetzt ist niemand halb woanders." |
| Bindung · Stille | „Nicht weiterdenken — einfach atmen." | „Zwei Minuten redet niemand. Wer mag, schreibt sich einen Satz auf." |
| Prioritäten · Stille | Titel „Zwei Minuten, nur die Kerze" / „Spürt, welcher Ofen gerade am lautesten nach Holz ruft." | Titel „Zwei Minuten, vier Öfen" / „Überlegt still: Welcher der vier Öfen braucht gerade am dringendsten Holz?" |
| In 10 Jahren · Stille | „Der Unterschied zwischen Plan und Wirklichkeit: Wirklichkeit hat Geruch." | „Stellt euch einen ganz normalen Dienstag in zehn Jahren vor: Uhrzeit, Ort, wer dabei ist." |
| 80-jähriges Ich · Stille | „Das Ältere und das Heutige treffen sich jetzt auf halbem Weg." | „Was würde die 80-jährige Version von dir zu dem sagen, was du eben erzählt hast?" |
| Heimat · Stille | „Spürt: Wo in dir ist gerade Heimat — während ihr hier sitzt?" | „Was an diesem Abend fühlt sich gerade vertraut an — und was fremd?" |
| Wofür stehe ich · Stille | „Diese zwei Minuten sind der Ort, an dem das passiert." | „Manche Sätze wirken erst nach. Zwei Minuten, bevor es weitergeht." |
| ADHS · Öffnen | „Trotzdem: drei Atemzüge zum Start." | „Trotzdem: Handys weg, kurz sitzen bleiben. Fidget-Spielzeug ist erlaubt." (danach kann auch der Gastgeber-Hinweis die Atemzüge streichen) |
