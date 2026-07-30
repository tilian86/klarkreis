// Central data store for all KlarKreis themes.
//
// Each theme has:
//   id, title, category, lead, image, philosophy1, philosophy2, featured?
//   formats: { group?: {...}, pair?: {...} }
//
// Each format has:
//   label, duration, people, stations[]
//
// Each station has:
//   name, title, duration (seconds)
//   hostNote?, description?, question?
//   items?  [{label, accent, text}]  — rendered as cards (typology, scenarios, lists)
//   quote?  {text, author}  — rendered as styled blockquote (usually in Einstieg-Station)
//   type?   'feedback'  — renders a feedback form instead of normal content

window.KLARKREIS_FEEDBACK_EMAIL = 'kontakt@klarkreis.de';

const FEEDBACK_STATION = {
  name: 'Feedback',
  title: 'Danke — wie war’s?',
  duration: 5 * 60,
  type: 'feedback',
  description: 'Dein Feedback hilft dabei, die nächsten Abende besser zu machen. Braucht 1 Minute, bleibt zwischen uns.',
};

function withFeedback(stations) {
  return [...stations, FEEDBACK_STATION];
}

window.THEMES = {

  // =====================================================================
  // BINDUNG  — Flaggschiff
  // =====================================================================
  bindung: {
    title: 'Welches Bindungsmuster prägt mich?',
    category: 'Beziehungen',
    lead: 'Ein Abend über das, was in uns mitläuft, wenn wir lieben: die unsichtbare Software unserer Bindung. Keine Couch, keine Diagnose — ein ehrliches Gespräch.',
    image: 'images/bindung.jpg',
    philosophy1: 'Wir kommen mit einer Art Beziehungs-Software auf die Welt. Die ersten Bezugspersonen prägen, wie wir Nähe später erleben: ob sie sich sicher anfühlt oder bedrohlich, ob wir auf uns allein gestellt sind oder getragen.',
    philosophy2: 'Die klassische Bindungsforschung unterscheidet vier Muster. Die meisten erkennen sich in Mischungen wieder. Heute schaut ihr, wo eure Muster liegen — ohne Diagnose, ohne Therapie, einfach ehrlich.',
    featured: true,
    audio: true,
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std. 20 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor wir anfangen', duration: 3*60,
            hostNote: 'Kerze anzünden. Alle Handys stumm auf einen Tisch am Rand. Drei gemeinsame Atemzüge — einfach so, ohne Kommentar. Dann erst weiter.',
            description: 'Was heute Abend kommt, geht tiefer als die Oberfläche — und das geht nur, wenn ihr kurz nicht mehr „draußen" seid. Das Ritual ist unspektakulär, aber es markiert: Hier ist jetzt ein anderer Raum.' },
          { name: 'Ankommen', title: 'Was bringt dich heute hierher?', duration: 10*60,
            hostNote: 'Reihum, 1–2 Sätze. Keine Rückfragen, kein Nicken, kein „Oh ja, ich auch." Einfach nacheinander da sein.',
            question: 'Was bringt dich heute hierher — und wo steht dein Kopf gerade?' },
          { name: 'Einstieg', title: 'Warum wir so lieben, wie wir lieben', duration: 7*60,
            hostNote: 'Audio abspielen oder selbst vorlesen. Danach 1 Minute Stille, bevor ihr weitermacht.',
            quote: { text: 'Bindung begleitet den Menschen von der Wiege bis zum Grab.', author: 'John Bowlby (sinngemäß)' },
            description: 'Ein Kind, das schreit, wird getröstet — oder nicht. Ein Kind, das Nähe sucht, wird aufgenommen — oder weggeschoben. Aus diesen tausend kleinen Momenten lernt jeder: Ist Nähe sicher? Darf ich abhängig sein? Werde ich gesehen, wenn ich es brauche?\n\nJohn Bowlby hat das in den 50ern „Bindung" genannt — die unsichtbare Software, mit der wir Beziehung lernen. Heute wissen wir: Diese Software lässt sich updaten. Aber nur, wenn man erst mal sieht, welche Version gerade läuft.' },
          { name: 'Die vier Muster', title: 'Die Landkarte in einer Minute', duration: 4*60,
            hostNote: 'Der Host stellt die vier Muster kurz vor, als Überblick. Details kommen gleich.',
            items: [
              { label: 'Sicher', accent: '~50 %', text: 'Nähe und Unabhängigkeit beides möglich. Vertrauen darf einfach da sein.' },
              { label: 'Ängstlich', accent: '~20 %', text: 'Sehnsucht nach viel Nähe. Antennen für jedes Zeichen der Distanz.' },
              { label: 'Vermeidend', accent: '~25 %', text: 'Unabhängigkeit zuerst. Nähe fühlt sich schnell eng an.' },
              { label: 'Desorganisiert', accent: '~5 %', text: 'Wunsch nach Nähe und Angst davor zugleich.' }
            ] },
          { name: 'Sicher', title: 'Muster 1: Sicher', duration: 4*60,
            hostNote: 'Audio abspielen oder vorlesen. Danach kurz in die Runde schauen: Wer nickt?',
            description: 'Nähe ist möglich, Unabhängigkeit auch. Konflikte schrecken nicht. Vertrauen darf einfach da sein.\n\nInnere Grundannahme: „Ich bin okay, andere sind okay. Wenn ich bitte, bekomme ich meistens eine Antwort. Wenn jemand geht, kommt er meistens wieder."\n\nSicher gebundene Menschen haben nicht weniger Angst — sie halten Angst nur anders aus. Sie wissen, dass Nähe nicht weg ist, nur weil jemand gerade nicht antwortet.' },
          { name: 'Ängstlich', title: 'Muster 2: Ängstlich', duration: 4*60,
            hostNote: 'Audio abspielen oder vorlesen. Wer nickt leise?',
            description: 'Sehnsucht nach viel Nähe, feine Antennen für jedes Zeichen der Distanz. Schreibt eine Nachricht, wartet auf Antwort, wartet länger, fängt an zu zweifeln — hat er/sie was gegen mich?\n\nInnere Grundannahme: „Ich brauche dich, und ich habe Angst, dich zu verlieren. Wenn ich nicht aufpasse, gehst du."\n\nÄngstliche Bindung ist keine Schwäche — sie ist eine geübte Achtsamkeit für Beziehung. Oft sind das die Menschen, die als Erste merken, wenn etwas kippt.' },
          { name: 'Vermeidend', title: 'Muster 3: Vermeidend', duration: 4*60,
            hostNote: 'Audio abspielen oder vorlesen. Kurze Reaktion.',
            description: 'Unabhängigkeit ist oberste Priorität. Emotionale Nähe fühlt sich schnell eng an. Rückzug ist der erste Reflex, wenn\'s zu dicht wird.\n\nInnere Grundannahme: „Ich komme allein klar. Zu brauchen ist gefährlich. Gefühle sind Arbeit, die ich lieber später erledige."\n\nVermeidend gebundene Menschen haben meistens früh gelernt, dass es effizienter war, sich selbst zu trösten. Das war damals klug. Heute ist es ein Mantel, der manchmal zu warm sitzt.' },
          { name: 'Desorganisiert', title: 'Muster 4: Desorganisiert', duration: 4*60,
            hostNote: 'Audio abspielen oder vorlesen. Mit Feingefühl — dieses Muster berührt oft.',
            description: 'Gleichzeitig Sehnsucht nach Nähe und Angst davor. Beziehungen fühlen sich widersprüchlich an, oft nach frühen, schmerzhaften Erfahrungen, in denen die Bezugsperson zugleich Schutz und Bedrohung war.\n\nInnere Grundannahme: „Ich will dich — bleib weg. Komm näher — nicht so nah."\n\nDesorganisierte Bindung entsteht nicht aus Schwäche, sondern aus einer frühen, unlösbaren Situation. Das Gute: Das Muster lässt sich lösen — oft braucht es dafür einen sicheren, geduldigen Gegenüber. Manchmal eine Therapie.' },
          { name: 'Körper', title: 'Wo dein Körper es zuerst weiß', duration: 6*60,
            hostNote: 'Reihum, je ein Wort oder kurzer Satz. Nicht denken — spüren.',
            description: 'Das Nervensystem weiß es lange vor dem Kopf. Wenn jemand dir emotional wichtig ist und sich nicht meldet, passiert etwas im Körper — Bauch, Brust, Nacken, Schultern. Frag dich jetzt nicht „warum" — frag dich „wo".',
            question: 'Wenn eine wichtige Person plötzlich auf Distanz geht — wo in deinem Körper spürst du es zuerst?' },
          { name: 'Selbstverortung', title: 'Wo verortest du dich?', duration: 10*60,
            hostNote: 'Reihum, je max. 2 Min. Keine Diagnose — ein Bauchgefühl reicht. Mischungen sind normal (die meisten sind zweierlei, je nach Gegenüber oder Lebensphase).',
            question: 'In welchem Muster — oder welcher Mischung — erkennst du dich am ehesten? Und woran machst du das fest?' },
          { name: 'Drei Sekunden', title: 'Die drei Sekunden nach dem Reiz', duration: 8*60,
            hostNote: 'Reihum, kurz. Keine Analyse — einfach beschreiben.',
            quote: { text: 'Zwischen Reiz und Reaktion liegt ein Raum. In diesem Raum liegt unsere Macht, unsere Antwort zu wählen.', author: 'Viktor Frankl' },
            description: 'Die Bindungsforscher Amir Levine und Rachel Heller nennen es „Protestverhalten": die halb-automatischen Dinge, die wir tun, wenn unser Bindungssystem Alarm schlägt. Mehrmals anrufen. Stundenlang nicht antworten, obwohl wir könnten. Eifersüchtig werden aus dem Nichts. Plötzlich kalt.\n\nWer sein Muster kennen will, braucht nicht viel Psychologie. Er muss nur ehrlich die ersten drei Sekunden beobachten.',
            question: 'Was machst du in den ersten drei Sekunden, wenn eine wichtige Nachricht nicht kommt, die kommen sollte?' },
          { name: 'Alltag', title: 'Vier Szenen, ehrlich beantwortet', duration: 15*60,
            hostNote: 'Der Host liest eine Szene nach der anderen. Reihum: erster Impuls — nicht was du tun solltest, sondern was tatsächlich passiert.',
            items: [
              { accent: '1.', label: 'Stille', text: 'Dein:e Partner:in meldet sich drei Stunden nicht. Was denkst du zuerst?' },
              { accent: '2.', label: 'Streit', text: 'Ein Konflikt eskaliert. Bleiben und klären — Rückzug — oder verbal zuschlagen?' },
              { accent: '3.', label: 'Hilfe', text: 'Du brauchst Hilfe mit etwas Konkretem. Wie leicht oder schwer fällt es dir, zu fragen?' },
              { accent: '4.', label: 'Nähe', text: 'Jemand kommt emotional plötzlich sehr nah. Was macht dein Körper in dem Moment?' }
            ] },
          { name: 'Der Raum', title: 'Wie groß ist dein Raum?', duration: 8*60,
            hostNote: 'Reihum, ein Satz. Nicht verklären — ehrlich messen.',
            description: 'Sicher gebundene Menschen haben nicht keine Auslöser — sie haben nur einen größeren Raum zwischen Reiz und Reaktion. Zwei Sekunden mehr Atemluft, bevor sie schreiben oder schweigen.\n\nDein Raum ist übungsbar. Aber erst mal: wie groß ist er heute, ehrlich?',
            question: 'Wenn du getriggert bist — wie viel Raum hast du zwischen dem Reiz und deiner Reaktion? Sekunden? Gar keiner?' },
          { name: 'Wurzeln', title: 'Eine Szene, die dich geformt hat', duration: 15*60,
            hostNote: 'Reihum, je 2 Min. Keine Tiefenanalyse — ein Bild, eine Szene. „Pass" ist völlig okay. Zwischen den Erzählungen kurz Stille lassen.',
            quote: { text: 'Die Kinderstube der Seele ist die Liebe.', author: 'Erich Fromm' },
            description: 'Egal ob warm oder kühl, nah oder fern — welche Erinnerung taucht auf, wenn du nicht lange nachdenkst? Eine Szene zum Thema Geborgenheit, Alleinsein oder Gesehenwerden.',
            question: 'Welche Szene kommt — und was verrät sie dir über dein heutiges Muster?' },
          { name: 'Protest', title: 'Dein Muster in Bewegung', duration: 7*60,
            hostNote: 'Reihum, ein Satz. Präzise. Nicht „ich werde unsicher" — sondern das konkrete Verhalten.',
            description: 'Jedes Muster hat seinen Reflex — das, was du tatsächlich machst, nicht das, was du wolltest. Ängstlich: mehr anrufen, mehr schreiben, testen. Vermeidend: schweigen, sich entziehen, cool werden. Desorganisiert: beides in Wellen.\n\nWir schauen jetzt nicht, was ihr besser machen wollt. Wir schauen, was passiert.',
            question: 'Wenn es eng wird in einer wichtigen Beziehung — was ist dein realer Reflex, nicht dein Wunschverhalten?' },
          { name: 'Earned Secure', title: 'Das Gute: Muster sind kein Schicksal', duration: 5*60,
            hostNote: 'Der Host liest vor. Keine Diskussion nötig — einfach landen lassen.',
            quote: { text: 'Sicher gebunden ist nicht, wer nie Angst hat. Sondern wer mit der Angst bleiben kann, ohne zu fliehen oder zu klammern.', author: 'Sue Johnson (paraphrasiert)' },
            description: 'Die Forschung (Hazan & Shaver, Main, Mikulincer) zeigt: Etwa 30–50 % aller Menschen ändern ihr Bindungsmuster im Laufe des Lebens — manchmal zum Schlechteren, oft aber auch zum Besseren. Der Fachbegriff heißt „earned secure": sicher gebunden geworden.\n\nMan wird nicht sicher gebunden, indem man sich vornimmt, sicher gebunden zu sein. Man wird es durch: eine sichere Beziehung (Partner, Therapeut, Freund), bewusstes Beobachten der eigenen Reaktionen, und durch Geduld mit sich selbst, wenn man wieder ins alte Muster fällt.\n\nHeißt: Was du heute Abend bist, musst du nicht morgen noch sein.' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Alle schließen die Augen oder schauen zur Kerze. Zwei Minuten. Nichts sagen, nichts erklären. Der Host sagt „Stille" — und am Ende „Willkommen zurück".',
            description: 'Nach dem, was ihr gerade erzählt habt, braucht der Kopf Luft. Nicht weiterdenken — einfach atmen.' },
          { name: 'Reparatur', title: 'Die kleine Reparatur', duration: 8*60,
            hostNote: 'Reihum, kurz. Ein realer Moment aus den letzten Wochen genügt.',
            description: 'John Gottman hat 40 Jahre Paare gefilmt und einen der wichtigsten Befunde formuliert: Nicht die Menge der Streite trennt Paare, sondern die Qualität der Reparatur. Wer in Beziehung lange bleibt, repariert früh — mit kleinen Gesten, einem Witz, einem „Entschuldige, ich war gemein".\n\nDas Muster zeigt sich im Reparieren: Ängstlich Gebundene reparieren oft zu schnell (aus Angst vor Verlust). Vermeidend Gebundene manchmal gar nicht („war doch nicht so schlimm"). Sicher Gebundene reparieren in normalem Tempo und wissen: Ein Bruch heilt nicht schneller, wenn man ihn wegdrückt.',
            question: 'Welcher Bruch aus der letzten Woche ist noch nicht repariert — und was wäre die kleinste Geste, die ihn heilen könnte?' },
          { name: 'Schritt', title: 'Ein kleiner, konkreter Schritt', duration: 10*60,
            hostNote: 'Reihum, ein Satz. Nicht vage — konkret. Schreibt ihn auf einen Zettel.',
            description: 'Nicht: „Ich will sicher gebunden sein." Sondern: „Wenn Lisa am Samstag 3 Stunden nicht antwortet, frage ich einmal freundlich nach, statt mich innerlich zurückzuziehen." Oder: „Wenn ich das nächste Mal spüre, dass ich kalt werde, sage ich laut: Mir wird gerade eng. Ich brauche kurz Luft, dann komme ich zurück."',
            question: 'Welchen kleinen, konkreten Schritt probierst du diese Woche?' },
          { name: 'Wort', title: 'Ein Wort zum Abschied', duration: 4*60,
            hostNote: 'Reihum, wirklich nur ein Wort. Der Host beginnt, geht weiter. Keine Begründung nötig.',
            description: 'Ein Wort ist oft genauer als drei Sätze. Was nimmst du mit aus diesem Abend?',
            question: 'Ein Wort — mit dem du heute nach Hause gehst.' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 50 Min.',
        people: '2 Personen (Paar oder Freundschaft)',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor wir anfangen', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys weg. Drei gemeinsame Atemzüge — einfach so, ohne Kommentar. Dann erst weiter.',
            description: 'Was danach kommt, wird ehrlicher, wenn ihr jetzt kurz nicht mehr draußen seid. Das ist der einzige Moment, an dem dieses Ritual zählt: am Anfang.' },
          { name: 'Ankommen', title: 'Erst mal: Wie geht es dir?', duration: 10*60,
            hostNote: 'Beide nacheinander, je 3 Minuten. Der andere hört zu, ohne zu reagieren, ohne zu nicken wie eine Bestätigung. Einfach da sein.',
            question: 'Wie geht es dir wirklich, heute — und was hast du mit hierher gebracht?' },
          { name: 'Einstieg', title: 'Warum wir so lieben, wie wir lieben', duration: 6*60,
            hostNote: 'Audio anhören — oder eine:r liest laut vor. Danach kurz schweigen, bevor ihr weitermacht.',
            quote: { text: 'Unter fast jedem Streit in einer Paarbeziehung liegt dieselbe Frage: Bist du da für mich?', author: 'Sue Johnson (sinngemäß)' },
            description: 'Wir kommen mit einer Art Beziehungs-Software auf die Welt. Diese frühe Lektion trägt jeder in jede Beziehung mit.\n\nHeute schauen wir gemeinsam: Welches Muster bringt jede:r von euch mit — und wie begegnen die sich in eurer Beziehung?' },
          { name: 'Die Muster', title: 'Die vier Grundmuster', duration: 6*60,
            hostNote: 'Gemeinsam durchlesen. Stoppt, wo jemand nickt oder wo sich etwas meldet. Keine Diagnose — Bauchgefühl reicht.',
            items: [
              { label: 'Sicher', accent: '~50 %', text: 'Nähe und Unabhängigkeit sind beides möglich. Vertrauen kommt leicht.' },
              { label: 'Ängstlich', accent: '~20 %', text: 'Sehnsucht nach viel Nähe. Sensibel für kleinste Zeichen der Distanz.' },
              { label: 'Vermeidend', accent: '~25 %', text: 'Unabhängigkeit zuerst. Nähe fühlt sich schnell eng an.' },
              { label: 'Desorganisiert', accent: '~5 %', text: 'Wunsch nach Nähe und Angst davor zugleich.' }
            ] },
          { name: 'Wo stehst du?', title: 'Gegenseitige Verortung', duration: 14*60,
            hostNote: 'Jede:r sagt erst für sich, dann für die andere Person. Zuhören, dann tauschen. Wenn ihr euch anders einschätzt, als der andere euch sieht — lasst das erst mal so stehen. Keine Verteidigung.',
            question: 'Wo verortest du dich — und wo verortest du die andere Person? Woran machst du das fest?' },
          { name: 'Alltag', title: 'Wie begegnen sich eure Muster?', duration: 16*60,
            hostNote: 'Gemeinsam durch die Szenen. Ehrlich reagieren, nicht strategisch. Bei jeder Szene: Was würde euer Muster tun — nicht, was der gesunde Mensch tun sollte.',
            items: [
              { accent: '1.', label: 'Stille', text: 'Der/die andere meldet sich drei Stunden nicht. Was denkst du?' },
              { accent: '2.', label: 'Rückzug', text: 'Einer zieht sich nach einem Konflikt zurück. Wie reagiert der andere?' },
              { accent: '3.', label: 'Nähe', text: 'Einer kommt plötzlich emotional sehr nah. Was passiert?' },
              { accent: '4.', label: 'Bruch', text: 'Ihr habt euch gerade gestritten. Wer macht den ersten Schritt — und wie sieht der aus?' }
            ] },
          { name: 'Wurzeln', title: 'Eine Szene aus der Kindheit', duration: 16*60,
            hostNote: 'Jede:r 6 Minuten erzählen, der andere nur zuhören — keine Zwischenfragen, keine Interpretation. Dann tauschen. Am Ende 2 Minuten gemeinsame Stille.',
            description: 'Keine Tiefenanalyse. Eine Szene, ein Bild aus eurer Kindheit, die mit Nähe, Alleinsein oder Geborgenheit zu tun hat.',
            question: 'Welche Szene taucht auf — und was verrät sie dir über dein heutiges Muster?' },
          { name: 'Stille', title: 'Drei Minuten ohne Worte', duration: 3*60,
            hostNote: 'Haltet Augenkontakt oder schaut auf die Kerze. Nichts sagen. Einfach das spüren, was gerade zwischen euch ist. Atmen.',
            description: 'Nach dem, was ihr gerade erzählt habt, ist Sprechen manchmal das falsche Werkzeug. Drei Minuten Pause. Das wirkt länger, als du denkst — bleibt trotzdem.' },
          { name: 'Kein Schicksal', title: 'Muster sind kein Schicksal', duration: 8*60,
            hostNote: 'Eine:r liest vor. Danach beide, je 2-3 Min. Hier dreht sich der Abend — vom Erkennen zum Hoffen.',
            description: 'Die Forschung nennt es „earned secure" — verdiente Sicherheit: Menschen mit ängstlichem oder vermeidendem Muster entwickeln in guten Beziehungen nachweislich sichere Bindung. Nicht durch Willenskraft, sondern durch wiederholte Gegen-Erfahrung: Da bleibt jemand, obwohl ich klammere. Da kommt jemand zurück, obwohl ich mich verschanzt habe.\n\nIhr seid füreinander genau diese Gegen-Erfahrung — nicht in großen Gesten, sondern in hundert kleinen Momenten. Das ist keine Selbsthilfe-Floskel, sondern der am besten belegte Weg, auf dem Bindungsmuster sich wirklich verändern.',
            question: 'Wo hat unsere Beziehung dein Muster schon ein Stück umgeschrieben — und in welchem kleinen Moment hast du das zuletzt gemerkt?' },
          { name: 'Geschenk', title: 'Was ich an dir sehe, wenn ich ehrlich bin', duration: 10*60,
            hostNote: 'Jede:r sagt dem anderen in einem Satz, was ihr an ihm/ihr liebt, das ihr sonst selten laut sagt. Der andere antwortet nur mit „Danke." Nichts weiter.',
            question: 'Wenn du heute die Wahrheit sagen müsstest — was liebst du an der anderen Person, das du sonst nicht aussprichst?' },
          { name: 'Schritt', title: 'Was wir einander diese Woche versprechen', duration: 10*60,
            hostNote: 'Konkret, klein, machbar. Ein Satz pro Person. Aufschreiben auf einen Zettel, den ihr an den Kühlschrank hängt.',
            question: 'Was probiere ich diese Woche anders — und was wünsche ich mir von dir?' }
        ])
      },
      solo: {
        label: 'Allein',
        duration: '~55 Min.',
        people: 'Nur du',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor du anfängst', duration: 3*60,
            hostNote: 'Kerze anzünden, wenn du eine hast. Handy weg. Drei tiefe Atemzüge. Vielleicht einen Tee oder ein Glas Wein.',
            description: 'Was jetzt kommt, ist ein Gespräch mit dir selbst. Dafür braucht es einen Rahmen, sonst läuft es nebenher — und nebenher ist nichts wirklich.' },
          { name: 'Ankommen', title: 'Wie geht es dir gerade wirklich?', duration: 4*60,
            hostNote: 'Kein Handy, keine Ablenkung. Schreibe kurz, wenn du magst — oder sprich laut für dich.',
            question: 'Wie geht es dir gerade, ehrlich — und was hast du mit hierher gebracht?' },
          { name: 'Einstieg', title: 'Warum wir so lieben, wie wir lieben', duration: 6*60,
            hostNote: 'Audio anhören — gerne mit geschlossenen Augen. Oder still lesen.',
            quote: { text: 'Bindung begleitet den Menschen von der Wiege bis zum Grab.', author: 'John Bowlby (sinngemäß)' },
            description: 'Ein Kind, das schreit, wird getröstet — oder nicht. Aus tausend kleinen Momenten lernt jeder: Ist Nähe sicher? Darf ich abhängig sein? Werde ich gesehen, wenn ich es brauche?\n\nJohn Bowlby hat das in den 50ern „Bindung" genannt — die unsichtbare Software, mit der wir Beziehung lernen. Heute wissen wir: Diese Software lässt sich updaten. Aber nur, wenn man erst mal sieht, welche Version gerade läuft.' },
          { name: 'Sicher', title: 'Muster 1: Sicher (ca. 50 %)', duration: 4*60,
            hostNote: 'Audio anhören oder selbst lesen. Spür nach — wieviel davon erkennst du?',
            description: 'Nähe ist möglich, Unabhängigkeit auch. Konflikte schrecken nicht. Vertrauen darf einfach da sein.\n\nInnere Grundannahme: Ich bin okay, andere sind okay.' },
          { name: 'Ängstlich', title: 'Muster 2: Ängstlich (ca. 20 %)', duration: 4*60,
            hostNote: 'Audio anhören oder selbst lesen. Spür nach.',
            description: 'Sehnsucht nach viel Nähe, sensible Antennen für jedes Zeichen der Distanz. Schreibt eine Nachricht, wartet auf Antwort, fängt an zu zweifeln.\n\nInnere Grundannahme: Ich brauche dich, und ich habe Angst, dich zu verlieren.' },
          { name: 'Vermeidend', title: 'Muster 3: Vermeidend (ca. 25 %)', duration: 4*60,
            hostNote: 'Audio anhören oder selbst lesen. Spür nach.',
            description: 'Unabhängigkeit ist oberste Priorität. Emotionale Nähe fühlt sich schnell eng an. Rückzug ist der erste Reflex, wenn\'s zu dicht wird.\n\nInnere Grundannahme: Ich komme allein klar. Zu brauchen ist gefährlich.' },
          { name: 'Desorganisiert', title: 'Muster 4: Desorganisiert (ca. 5 %)', duration: 4*60,
            hostNote: 'Audio anhören oder selbst lesen. Mit Feingefühl — dieses Muster berührt oft.',
            description: 'Gleichzeitig Sehnsucht nach Nähe und Angst davor. Beziehungen fühlen sich widersprüchlich an, oft nach frühen, schmerzhaften Erfahrungen.\n\nInnere Grundannahme: Ich will dich — bleib weg. Komm näher — nicht so nah.' },
          { name: 'Körper', title: 'Wo dein Körper es zuerst weiß', duration: 4*60,
            hostNote: 'Augen zu — spüren, nicht denken. Dann schreibe ein Wort oder einen Satz.',
            description: 'Das Nervensystem weiß es lange vor dem Kopf. Wenn jemand dir emotional wichtig ist und sich nicht meldet, passiert etwas im Körper — Bauch, Brust, Nacken, Schultern. Frag dich jetzt nicht „warum" — frag dich „wo".',
            question: 'Wenn eine wichtige Person plötzlich auf Distanz geht — wo in deinem Körper spürst du es zuerst?' },
          { name: 'Verortung', title: 'Wo erkennst du dich wieder?', duration: 8*60,
            hostNote: 'Schreibe für dich. Keine Diagnose — ein ehrliches Bauchgefühl reicht. Mischungen sind normal.',
            description: 'Schreibe einen kleinen Text an dich selbst — welches Muster trägst du? Wo zeigt es sich im Alltag: in Freundschaften, in Liebe, am Arbeitsplatz?',
            question: 'Welches Muster erkennst du am ehesten in dir — und wo im Alltag merkst du es?' },
          { name: 'Drei Sekunden', title: 'Die drei Sekunden nach dem Reiz', duration: 5*60,
            hostNote: 'Schreibe präzise. Kein Wunschverhalten — das reale.',
            quote: { text: 'Zwischen Reiz und Reaktion liegt ein Raum. In diesem Raum liegt unsere Macht, unsere Antwort zu wählen.', author: 'Viktor Frankl' },
            description: 'Amir Levine und Rachel Heller nennen es „Protestverhalten": die halb-automatischen Dinge, die wir tun, wenn unser Bindungssystem Alarm schlägt. Mehrmals schreiben. Stundenlang nicht antworten, obwohl wir könnten. Plötzlich kalt. Wer sein Muster kennen will, braucht nicht viel Psychologie — nur ehrliche Beobachtung der ersten drei Sekunden.',
            question: 'Was machst du in den ersten drei Sekunden, wenn eine wichtige Nachricht nicht kommt, die kommen sollte?' },
          { name: 'Wurzeln', title: 'Eine Szene, die dich geformt hat', duration: 10*60,
            hostNote: 'Keine Tiefenanalyse. Ein Bild, eine Szene. Schreibe oder lass sie in dir wirken.',
            quote: { text: 'Die Kinderstube der Seele ist die Liebe.', author: 'Erich Fromm' },
            description: 'Welche Erinnerung taucht auf, wenn du nicht lange nachdenkst — zum Thema Geborgenheit, Nähe, Alleinsein?',
            question: 'Eine Szene aus deiner Kindheit. Was kommt?' },
          { name: 'Earned Secure', title: 'Muster sind kein Schicksal', duration: 5*60,
            hostNote: 'Lies langsam. Keine Antwort nötig — einfach landen lassen.',
            quote: { text: 'Sicher gebunden ist nicht, wer nie Angst hat. Sondern wer mit der Angst bleiben kann, ohne zu fliehen oder zu klammern.', author: 'Sue Johnson (paraphrasiert)' },
            description: 'Die Forschung (Hazan & Shaver, Main, Mikulincer) zeigt: 30-50 % aller Menschen ändern ihr Bindungsmuster im Laufe des Lebens — der Fachbegriff heißt „earned secure": sicher gebunden geworden.\n\nMan wird nicht sicher, indem man sich vornimmt, sicher zu sein. Man wird es durch: eine sichere Beziehung, bewusstes Beobachten der eigenen Reaktionen, und Geduld mit sich selbst, wenn man wieder ins alte Muster fällt.\n\nHeißt: Was du heute bist, musst du morgen nicht mehr sein.' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Augen zu. Nichts schreiben. Atmen.',
            description: 'Nach dem, was eben in dir war — Luft.' },
          { name: 'Schritt', title: 'Ein kleiner konkreter Schritt', duration: 4*60,
            hostNote: 'Schreibe einen Satz auf einen Zettel — und nimm ihn mit.',
            description: 'Nicht „ich will sicher gebunden sein". Sondern: „Wenn Lisa am Samstag 3 h nicht antwortet, frage ich einmal nach statt mich innerlich zurückzuziehen."',
            question: 'Was ist dein nächster kleiner Schritt diese Woche? Und was nimmst du in einem Wort mit?' },
          { name: 'Brief', title: 'Ein Brief an dich in drei Monaten', duration: 7*60,
            hostNote: 'Schreibe einen kurzen Brief an dich selbst — 3 Monate in die Zukunft. Leg ihn in den Kalender oder per Email an dich selbst in 90 Tagen.',
            description: 'Der Schritt, den du dir eben gesetzt hast — wie willst du dich selbst in 3 Monaten ansprechen? Ehrlich. Nicht streng, nicht weichspülend. Wie ein Freund, der dich kennt.',
            question: 'Was möchtest du deinem zukünftigen Ich über heute sagen?' }
        ])
      }
    }
  },

  // =====================================================================
  // WERTE
  // =====================================================================
  werte: {
    title: 'Was sind meine Werte?',
    category: 'Werte',
    lead: 'Werte zeigen sich nicht in dem, was wir sagen, sondern in dem, wofür wir Zeit opfern, worüber wir uns ärgern und was uns spät in der Nacht beschäftigt.',
    image: 'images/werte.jpg',
    philosophy1: 'Jeder kennt das: Auf dem Poster stehen „Familie, Ehrlichkeit, Gesundheit“ — und im Alltag treffen wir Entscheidungen, die genau dem widersprechen. Werte sind nicht das, was wir sagen. Sie sind das, was sich in unseren kleinen täglichen Entscheidungen durchsetzt.',
    philosophy2: 'An diesem Abend sucht ihr nicht nach den „richtigen“ Werten — ihr sucht nach den euren. So, wie sie sich wirklich im Alltag zeigen, nicht wie sie klingen sollten.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std. 20 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor wir anfangen', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys stumm auf einen Tisch am Rand. Drei gemeinsame Atemzüge. Dann erst weiter.',
            description: 'Werte werden sichtbar, wenn es leise wird. Das wird es gleich. Der Moment ist unspektakulär, aber er markiert den Unterschied zwischen „wir quatschen mal über Werte" und „wir schauen heute, welche uns wirklich tragen".' },
          { name: 'Ankommen', title: 'Wie kommst du hier an?', duration: 10*60,
            hostNote: 'Reihum, 1–2 Sätze. Kein Smalltalk, kein „gut dir?" — was bewegt dich heute?',
            question: 'Wie kommst du hier an — und was hat dich diese Woche wirklich beschäftigt?' },
          { name: 'Einstieg', title: 'Werte sind nicht, was wir sagen', duration: 7*60,
            hostNote: 'Der Host liest langsam vor. Danach eine Minute Stille.',
            quote: { text: 'Erzähl mir nicht, was dir wichtig ist. Zeig mir deinen Kalender und deinen Kontoauszug — und ich sage es dir.', author: 'James W. Frick (sinngemäß)' },
            description: 'Werte sind nicht die schönen Worte auf einem Poster. Werte sind das, was sich durchsetzt, wenn es eng wird.\n\nWenn du „Gesundheit" als Wert angibst, aber in stressigen Wochen als Erstes den Sport streichst — dann ist nicht Gesundheit dein Wert in dieser Woche, sondern Effizienz oder Karriere. Das ist nicht schlimm. Das ist nur ehrlich. Und Ehrlichkeit ist der erste Schritt, es zu ändern.\n\nViktor Frankl hat es so gesagt: Der Sinn ist nicht etwas, das man findet. Er ist etwas, das man in der Art, wie man lebt, beantwortet.' },
          { name: 'Drei Tests', title: 'Woran du deine echten Werte erkennst', duration: 6*60,
            hostNote: 'Der Host liest die drei Tests vor. Jede:r behält sie im Hinterkopf für den ganzen Abend.',
            items: [
              { label: 'Kalender-Test', accent: '1.', text: 'Wofür hast du letzte Woche wirklich Zeit aufgewendet? Nicht wofür du wolltest — wofür tatsächlich.' },
              { label: 'Kontoauszug-Test', accent: '2.', text: 'Wofür hast du letzten Monat Geld ausgegeben, das nicht zwingend war? Das ist dein Wert — auch wenn du es ungern sagst.' },
              { label: 'Ärger-Test', accent: '3.', text: 'Worüber hast du dich zuletzt richtig geärgert? Wo Ärger entsteht, wurde ein Wert verletzt. Meistens deiner.' }
            ] },
          { name: 'Landkarte', title: 'Zehn Werte-Familien — damit wir nicht aneinander vorbeireden', duration: 6*60,
            hostNote: 'Host liest die Liste langsam vor. Keine Diskussion — nur einwirken lassen. Der Sozialpsychologe Shalom Schwartz hat kulturübergreifend diese zehn Werte-Familien identifiziert. Ihr braucht sie nicht auswendig — es geht darum, dass ihr heute Abend Vokabular habt, wenn ihr eure eigenen Werte benennt.',
            description: 'Werte haben Namen. Wenn wir nur „was mir wichtig ist" sagen, reden wir oft aneinander vorbei. Eine kleine Landkarte hilft:',
            items: [
              { accent: '1.', label: 'Selbstbestimmung', text: 'Eigene Entscheidungen treffen, eigenständig denken und handeln.' },
              { accent: '2.', label: 'Stimulation', text: 'Abwechslung, neue Erfahrungen, Herausforderung.' },
              { accent: '3.', label: 'Hedonismus', text: 'Freude, Genuss, Sinnlichkeit, Lebenslust.' },
              { accent: '4.', label: 'Leistung', text: 'Erfolg, Kompetenz, Anerkennung für gute Arbeit.' },
              { accent: '5.', label: 'Macht', text: 'Einfluss, Status, über Ressourcen verfügen.' },
              { accent: '6.', label: 'Sicherheit', text: 'Stabilität, Schutz, Ordnung, Verlässlichkeit.' },
              { accent: '7.', label: 'Konformität', text: 'Regeln und Erwartungen erfüllen, nicht anstoßen.' },
              { accent: '8.', label: 'Tradition', text: 'Herkunft, Bräuche, Religion, Demut, das Gewachsene.' },
              { accent: '9.', label: 'Benevolenz', text: 'Für Nahestehende da sein, Freundschaft, Loyalität, Fürsorge.' },
              { accent: '10.', label: 'Universalismus', text: 'Gerechtigkeit, Frieden, Schutz aller Menschen und der Natur.' }
            ] },
          { name: 'Paar 1', title: 'Sicherheit ↔ Freiheit', duration: 5*60,
            hostNote: 'Kurz vorlesen. Wer tendiert wohin? Nicht entweder/oder — wo bist du heute, und wo bist du, wenn du müde bist?',
            items: [
              { label: 'Sicherheit', text: 'Struktur, Vorhersehbarkeit, Absicherung, Traditionen, das Bekannte bewahren.' },
              { label: 'Freiheit', text: 'Offenheit, Abenteuer, Wandel, Eigenständigkeit, das Neue wagen.' }
            ] },
          { name: 'Paar 2', title: 'Leistung ↔ Verbundenheit', duration: 5*60,
            hostNote: 'Kurz vorlesen. Wo steht ihr — und wo stehen eure Partner:innen/Eltern?',
            items: [
              { label: 'Leistung', text: 'Wachstum, Exzellenz, etwas erreichen, Einfluss, sichtbare Ergebnisse.' },
              { label: 'Verbundenheit', text: 'Beziehungen, Zugehörigkeit, füreinander da sein, Zeit mit Menschen.' }
            ] },
          { name: 'Paar 3', title: 'Sinn ↔ Genuss', duration: 5*60,
            hostNote: 'Letztes Paar. Nicht eins davon ist „höher".',
            items: [
              { label: 'Sinn', text: 'Ein größerer Zweck, Beitrag zu etwas, dienen, verändern.' },
              { label: 'Genuss', text: 'Das Hier und Jetzt, Schönheit, Leichtigkeit, sinnlich leben.' }
            ] },
          { name: 'Deine 3', title: 'Drei Werte, die dich diese Woche geleitet haben', duration: 12*60,
            hostNote: 'Jede:r schreibt 3 Min für sich. Nicht Wunsch, sondern was sich in dieser Woche tatsächlich durchgesetzt hat. Dann reihum teilen, je 1-2 Min. Keine Kommentare.',
            question: 'Welche 3 Werte haben dich diese Woche wirklich geleitet — und an welcher konkreten Entscheidung sieht man das?' },
          { name: 'Der Kalender', title: 'Was dein Kalender wirklich sagt', duration: 8*60,
            hostNote: 'Jede:r schaut kurz auf den eigenen Kalender der letzten 7 Tage. Reihum ein ehrlicher Satz.',
            description: 'Annie Dillard hat es kompromisslos formuliert: „Wie wir unsere Tage verbringen, so verbringen wir unser Leben." Der Kalender der letzten Woche ist kein Wunschzettel, sondern eine Diagnose.',
            quote: { text: 'How we spend our days is, of course, how we spend our lives.', author: 'Annie Dillard' },
            question: 'Wenn ein Fremder deinen Kalender der letzten Woche lesen würde — welche Werte würde er dir zuschreiben?' },
          { name: 'Alltagsszenen', title: 'Vier Szenen, ehrlich beantwortet', duration: 15*60,
            hostNote: 'Eine Szene nach der anderen. Reihum: Was hättest du wirklich entschieden — und welcher Wert zeigt sich darin?',
            items: [
              { accent: '1.', label: 'Das Jobangebot', text: 'Dein Traumjob ruft — bezahlt besser, weniger Zeit für Familie. Was ist dein erster Gedanke?' },
              { accent: '2.', label: 'Die Absage', text: 'Freund:innen fragen dich spontan fürs Wochenende. Du bist müde. Was sagst du — und was würdest du eigentlich sagen wollen?' },
              { accent: '3.', label: 'Der freie Abend', text: 'Ein Abend frei. Niemand fragt nach dir. Wie verbringst du ihn ehrlich — nicht wie du es solltest?' },
              { accent: '4.', label: 'Der Kompromiss', text: 'Jemand bittet dich um einen Gefallen, der deiner Haltung widerspricht. Wie oft machst du es trotzdem?' }
            ] },
          { name: 'Konflikt', title: 'Wenn zwei Werte kollidieren', duration: 8*60,
            hostNote: 'Reihum, ein echtes Beispiel aus den letzten Wochen. Kein Theater — konkret.',
            description: 'Kein Mensch hat nur einen Wert. Die interessante Frage ist nicht: „Was ist dir wichtig?" Sondern: „Was lässt du für was fallen, wenn es drauf ankommt?" Ruth Chang, die Philosophin, nennt das die eigentlichen „harten Entscheidungen" — nicht falsch gegen richtig, sondern wertvoll gegen wertvoll.',
            question: 'Wann haben sich bei dir zuletzt zwei Werte widersprochen — und welcher hat sich durchgesetzt?' },
          { name: 'Wurzeln', title: 'Wer hat das in dich hineingelegt?', duration: 14*60,
            hostNote: 'Reihum, je 2 Min. Eine Person, eine Szene reicht. Keine Interpretation von anderen.',
            description: 'Werte kommen nicht aus dem Nichts. Sie wurden dir vorgelebt, aufgetragen, manchmal auch entgegengesetzt. Jemand hat eine Saat in dich gelegt — mit Wärme oder mit Härte. Manches davon trägst du dankbar. Manches schleppst du.',
            question: 'Welcher deiner heutigen Werte ist geliehen — und von wem? Und welcher ist wirklich deiner geworden?' },
          { name: 'Schatten', title: 'Was du ablehnst, verrät auch dich', duration: 7*60,
            hostNote: 'Reihum, kurz und ehrlich. Nicht bewerten bei anderen — einfach aussprechen.',
            quote: { text: 'Das Gold liegt da, wo wir es nicht sehen wollen.', author: 'C. G. Jung (sinngemäß)' },
            description: 'C. G. Jung hat beobachtet: Das, was uns am anderen besonders nervt, sagt oft mehr über uns als über ihn. Wer genau aufpasst, erkennt im eigenen Ärger manchmal einen Wert, den er selbst unterdrückt hat — weil ihn dafür jemand bestraft hat, oder weil er nicht passte.',
            question: 'Welche Eigenschaft bei anderen regt dich besonders auf — und welcher eigene Wert könnte darin versteckt liegen?' },
          { name: 'Was fehlt', title: 'Der Wert, den du dich noch nicht traust', duration: 10*60,
            hostNote: 'Reihum, ein Satz. Nicht verklären.',
            description: 'Neben den 3 gelebten Werten gibt es meistens einen, der kommen will — aber du traust dich nicht, weil das Konsequenzen hätte. Beziehungen, Einkommen, Sicherheit. Wer ihn aber dauerhaft unterdrückt, zahlt dafür mit einem schleichenden Gefühl, am eigenen Leben vorbeizuleben.',
            question: 'Welcher Wert käme als Nächstes dran — und wovor hast du Angst, wenn du ihn wirklich lebst?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Alle schließen die Augen oder schauen auf die Kerze. Zwei Minuten. Nichts sagen.',
            description: 'Nach dem, was gerade im Raum war, braucht es Luft, bevor es konkret wird.' },
          { name: 'Achtzig', title: 'Was würde dein 80-jähriges Ich sagen?', duration: 8*60,
            hostNote: 'Reihum, ein Satz. Nicht bedacht — spontan.',
            description: 'Bronnie Ware hat als Palliativschwester hunderte Menschen in ihren letzten Tagen begleitet. Ihre fünf häufigsten Bereuen: „Ich wünschte, ich hätte den Mut gehabt, mein eigenes Leben zu leben, nicht das Leben, das andere von mir erwarteten" stand an Nummer eins.',
            question: 'Wenn du in 50 Jahren zurückschauen würdest — welchen Wert hättest du mehr leben sollen?' },
          { name: 'Schritt', title: 'Ein konkreter Schritt diese Woche', duration: 8*60,
            hostNote: 'Reihum, ein Satz. Nicht vage — ein benennbarer Schritt. Auf einen Zettel schreiben.',
            description: 'Nicht: „Ich will authentischer sein." Sondern: „Dienstag sage ich meinem Chef, dass ich den Termin nach 18 Uhr nicht mache, weil ich da mit Paul koche." Wer klein und konkret wird, hat eine Chance.',
            question: 'Welcher Wert bekommt diese Woche einen benennbaren Schritt?' },
          { name: 'Wort', title: 'Ein Wort zum Abschied', duration: 4*60,
            hostNote: 'Reihum, wirklich nur ein Wort. Keine Begründung.',
            question: 'Ein Wort, mit dem du heute nach Hause gehst.' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 35 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor ihr anfangt', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys weg. Drei gemeinsame Atemzüge — ohne Kommentar.',
            description: 'Werte werden sichtbar, wenn es leise wird. Das wird es gleich. Gebt euch diesen Moment — er ist der eigentliche Startschuss.' },
          { name: 'Ankommen', title: 'Wie kommst du an?', duration: 10*60,
            hostNote: 'Beide nacheinander, je 3-4 Minuten. Der andere hört nur zu. Nicht bewerten, nicht fragen, nicht nicken wie zur Bestätigung.',
            question: 'Wie geht es dir — und was hat dich diese Woche wirklich bewegt, wenn du ehrlich bist?' },
          { name: 'Einstieg', title: 'Werte sind, was sich durchsetzt', duration: 6*60,
            hostNote: 'Eine:r liest vor. Danach kurz schweigen.',
            quote: { text: 'Erzähl mir nicht, was dir wichtig ist. Zeig mir deinen Kalender und deinen Kontoauszug — und ich sage es dir.', author: 'James W. Frick (sinngemäß)' },
            description: 'Werte sind nicht die schönen Worte, die wir über uns sagen. Sie sind das, was sich in den kleinen Entscheidungen durchsetzt, wenn keiner hinschaut. Heute schauen wir gemeinsam — ohne Bewertung — was sich bei euch beiden gerade durchsetzt.' },
          { name: 'Landkarte', title: 'Die Werte-Landkarte: zwei Achsen', duration: 8*60,
            hostNote: 'Gemeinsam durchlesen. Bei jeder Achse kurz sagen: Wo stehst du heute — und wohin rutschst du, wenn du müde bist?',
            description: 'Shalom Schwartz hat in über 80 Ländern dieselbe Werte-Landkarte gefunden. Sie hat zwei Achsen — und auf keiner kann man gleichzeitig an beiden Enden stehen:',
            items: [
              { label: 'Bewahren ↔ Öffnen', text: 'Sicherheit, Tradition, Verlässlichkeit — oder Neugier, Wandel, eigener Weg. Diese Achse zeigt, wie du mit Veränderung umgehst.' },
              { label: 'Ich stärken ↔ Über mich hinaus', text: 'Leistung, Erfolg, Einfluss — oder Fürsorge, Verbundenheit, etwas Größeres als du. Diese Achse zeigt, für wen du eigentlich antrittst.' },
              { label: 'Der Preis', text: 'Jeder starke Wert kostet seinen Gegenüber-Wert: Wer viel bewahrt, öffnet weniger. Wer stark leistet, verbindet sich schwerer. Das ist keine Schwäche — das ist die Geometrie der Landkarte.' }
            ] },
          { name: 'Deine 3', title: 'Deine drei echten Werte', duration: 14*60,
            hostNote: 'Jede:r schreibt erst allein auf — 3 Minuten, keine Diskussion. Dann erzählt einer 5 Min, der andere hört nur zu. Wechsel. Keine Kommentare zwischendurch.',
            question: 'Welche 3 Werte haben dich diese Woche wirklich geleitet — und woran machst du das fest?' },
          { name: 'Blick', title: 'Was ich bei dir sehe', duration: 12*60,
            hostNote: 'Beide abwechselnd: „Bei dir sehe ich folgenden Wert besonders stark leben…" Der andere antwortet nur mit „Danke" — keine Einordnung, keine Erwiderung.',
            question: 'Welchen Wert lebt die andere Person für mich besonders sichtbar?' },
          { name: 'Wurzeln', title: 'Woher kommen deine Werte?', duration: 14*60,
            hostNote: 'Je 6 Min erzählen, der andere nur zuhören. Danach 1 Minute gemeinsame Stille.',
            description: 'Werte kommen nicht aus dem Nichts. Jemand hat sie in dich gelegt — mit Wärme oder mit Härte. Welcher Mensch, welche Szene?',
            question: 'Welcher Wert ist geliehen — von wem? Und welcher ist wirklich deiner?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Schaut auf die Kerze oder aus dem Fenster. Atmet. Nichts mehr sagen.',
            description: 'Was ihr gerade gehört habt, wirkt weiter — wenn ihr es jetzt nicht zerredet.' },
          { name: 'Was fehlt', title: 'Was traust du dich noch nicht?', duration: 12*60,
            hostNote: 'Je 5 Min. Der andere hört. Am Ende ein ehrliches „Ich sehe dich."',
            question: 'Welcher Wert käme als Nächstes dran — und wovor hast du Angst, wenn du ihn wirklich lebst?' },
          { name: 'Schritt', title: 'Ein Versprechen diese Woche', duration: 10*60,
            hostNote: 'Ein konkreter Schritt. Aufschreiben auf einen Zettel, austauschen, mitnehmen.',
            question: 'Welcher Wert bekommt diese Woche einen Minuten-Schritt — und was wünsche ich mir dabei von dir?' }
        ])
      },
      solo: {
        label: 'Allein',
        duration: '~50 Min.',
        people: 'Nur du',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor du anfängst', duration: 3*60,
            hostNote: 'Kerze anzünden. Handy weg. Drei tiefe Atemzüge.',
            description: 'Werte anschauen ist Arbeit am stillsten Teil deiner selbst. Dafür braucht es Ruhe — sonst bleibt alles schöner Vorsatz.' },
          { name: 'Ankommen', title: 'Wie kommst du an?', duration: 5*60,
            hostNote: 'Schreibe in Stichpunkten — oder sprich laut für dich. 3 Minuten nicht absetzen.',
            question: 'Was hat dich diese Woche wirklich bewegt, wenn du ehrlich bist?' },
          { name: 'Einstieg', title: 'Werte sind, was sich durchsetzt', duration: 5*60,
            hostNote: 'Lies langsam. Zwei Mal. Dann wirken lassen.',
            quote: { text: 'Erzähl mir nicht, was dir wichtig ist. Zeig mir deinen Kalender und deinen Kontoauszug — und ich sage es dir.', author: 'James W. Frick (sinngemäß)' },
            description: 'Werte sind nicht, was du über dich sagst. Sie sind das, was sich in den kleinen Entscheidungen durchsetzt, wenn keiner hinschaut.\n\nViktor Frankl hat es so gesagt: Der Sinn ist nicht etwas, das man findet. Er ist etwas, das man in der Art, wie man lebt, beantwortet. Heute schaust du — ohne Bewertung — was du gerade antwortest.' },
          { name: 'Drei Tests', title: 'Woran du deine echten Werte erkennst', duration: 5*60,
            hostNote: 'Lies die drei Tests. Behalte sie für den ganzen Abend im Kopf.',
            items: [
              { label: 'Kalender-Test', accent: '1.', text: 'Wofür hast du letzte Woche wirklich Zeit aufgewendet? Nicht wofür du wolltest — wofür tatsächlich.' },
              { label: 'Kontoauszug-Test', accent: '2.', text: 'Wofür hast du letzten Monat Geld ausgegeben, das nicht zwingend war? Das ist dein Wert — auch wenn du es ungern sagst.' },
              { label: 'Ärger-Test', accent: '3.', text: 'Worüber hast du dich zuletzt richtig geärgert? Wo Ärger entsteht, wurde ein Wert verletzt. Meistens deiner.' }
            ] },
          { name: 'Landkarte', title: 'Die drei Werte-Paare', duration: 6*60,
            hostNote: 'Bei jedem Paar: wo stehst du heute — und wo stehst du, wenn du müde bist? Die zweite Antwort ist meist die ehrlichere.',
            items: [
              { label: 'Sicherheit ↔ Freiheit', text: 'Das Bekannte bewahren oder das Neue wagen.' },
              { label: 'Leistung ↔ Verbundenheit', text: 'Etwas erreichen oder füreinander da sein.' },
              { label: 'Sinn ↔ Genuss', text: 'Für etwas Größeres leben oder im Jetzt präsent sein.' }
            ] },
          { name: 'Deine 3', title: 'Deine drei echten Werte', duration: 8*60,
            hostNote: 'Schreibe 6-7 Minuten am Stück. Nicht redigieren — erst mal alles raus.',
            description: 'Nicht die Werte, die gut klingen. Die, die sich in dieser Woche wirklich durchgesetzt haben — auch die unbequemen.',
            question: 'Welche 3 Werte haben dich diese Woche wirklich geleitet — und woran machst du das fest?' },
          { name: 'Kalender', title: 'Was dein Kalender wirklich sagt', duration: 5*60,
            hostNote: 'Handy raus, scrolle durch die letzten 7 Tage. Schreibe auf, was du siehst.',
            quote: { text: 'How we spend our days is, of course, how we spend our lives.', author: 'Annie Dillard' },
            description: 'Annie Dillard formuliert es kompromisslos: Wie du deine Tage verbringst, so verbringst du dein Leben. Der Kalender ist kein Wunschzettel — er ist eine Diagnose.',
            question: 'Wenn ein Fremder deinen Kalender der letzten Woche läse — welche Werte würde er dir zuschreiben?' },
          { name: 'Konflikt', title: 'Wenn zwei Werte kollidieren', duration: 5*60,
            hostNote: 'Schreibe ein konkretes Beispiel — keine Theorie.',
            description: 'Kein Mensch hat nur einen Wert. Ruth Chang, die Philosophin, nennt die eigentlichen „harten Entscheidungen" nicht falsch gegen richtig, sondern wertvoll gegen wertvoll. Welcher deiner Werte lässt für welchen anderen los, wenn es eng wird?',
            question: 'Wann haben sich bei dir zuletzt zwei Werte widersprochen — und welcher hat sich durchgesetzt?' },
          { name: 'Wurzeln', title: 'Wer hat die in dich hineingelegt?', duration: 8*60,
            hostNote: 'Eine Person, eine Szene — die erste, die auftaucht.',
            description: 'Werte kommen nicht aus dem Nichts. Jemand hat sie dir vorgelebt, aufgetragen, manchmal entgegengesetzt. Manches davon trägst du dankbar. Manches schleppst du.',
            question: 'Welcher Wert ist geliehen — von wem? Und welcher ist wirklich deiner geworden?' },
          { name: 'Schatten', title: 'Was du ablehnst, verrät auch dich', duration: 4*60,
            hostNote: 'Schreibe kurz und ehrlich.',
            quote: { text: 'Das Gold liegt da, wo wir es nicht sehen wollen.', author: 'C. G. Jung (sinngemäß)' },
            description: 'C. G. Jung hat beobachtet: Das, was uns am anderen besonders nervt, sagt oft mehr über uns als über ihn. Wer genau hinschaut, erkennt im eigenen Ärger manchmal einen Wert, den er selbst unterdrückt hat.',
            question: 'Welche Eigenschaft bei anderen regt dich besonders auf — und welcher eigene Wert könnte darin versteckt liegen?' },
          { name: 'Was fehlt', title: 'Was traust du dich noch nicht?', duration: 6*60,
            hostNote: 'Schreibe ehrlich — niemand liest das. Was du dich nicht zu leben traust, ist oft das Wichtigste.',
            question: 'Welcher Wert käme als Nächstes dran — und wovor hast du Angst, wenn du ihn wirklich lebst?' },
          { name: 'Schritt', title: 'Ein kleiner Schritt, ein Wort', duration: 5*60,
            hostNote: 'Einen konkreten Schritt, nicht größer als 15 Minuten. Auf einen Zettel schreiben, an den Spiegel kleben.',
            question: 'Welcher Wert bekommt diese Woche einen Minuten-Schritt? Und was nimmst du in einem Wort mit?' },
          { name: 'Brief', title: 'Ein Brief an dich in drei Monaten', duration: 5*60,
            hostNote: 'Schreibe 5 Minuten an dein Ich in 90 Tagen. Leg den Brief in den Kalender oder sende ihn dir per Email an dein zukünftiges Ich.',
            question: 'Was möchtest du deinem zukünftigen Ich über heute sagen?' }
        ])
      }
    }
  },

  // =====================================================================
  // PRIORITÄTEN — das Vier-Öfen-Modell
  // =====================================================================
  prioritaeten: {
    title: 'Was ist mir wirklich wichtig?',
    category: 'Werte',
    lead: 'Ein Fokus-Abend über das stille Ja zum Wesentlichen — und das Nein zum Möglichen. Mit dem Vier-Öfen-Modell: welche Öfen brennen heiß bei dir, welche sind aus?',
    image: 'images/prioritaeten.jpg',
    philosophy1: 'Vieles schreit nach Aufmerksamkeit. Wenig verdient sie wirklich. Prioritäten werden erst sichtbar, wenn wir aufhören, alles gleichzeitig zu wollen.',
    philosophy2: 'Das Vier-Öfen-Modell (bekannt geworden durch einen Essay von David Sedaris) ist simpel und unbequem: vor dir stehen vier Öfen — Arbeit, Familie, Freunde, Gesundheit. Um wirklich erfolgreich zu sein, musst du mindestens einen komplett ausmachen. Um außergewöhnlich zu sein, zwei. Heute schaut ihr, welche eure gerade brennen.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std. 20 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor wir anfangen', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys stumm auf einen Tisch am Rand. Drei gemeinsame Atemzüge.',
            description: 'Prioritäten werden sichtbar, wenn der Lärm nachlässt. Gleich geht es darum, ehrlich hinzuschauen — das braucht einen Rahmen.' },
          { name: 'Ankommen', title: 'Was ist diese Woche laut in deinem Kopf?', duration: 10*60,
            hostNote: 'Reihum. Kein Smalltalk — was beschäftigt dich wirklich?',
            question: 'Was schreit diese Woche am lautesten in dir — und will deine Zeit?' },
          { name: 'Einstieg', title: 'Das Vier-Öfen-Modell', duration: 7*60,
            hostNote: 'Der Host liest langsam vor. Danach einen Moment Stille.',
            quote: { text: 'If you don\'t prioritize your life, someone else will.', author: 'Greg McKeown' },
            description: 'Stell dir vor, vor dir stehen vier Öfen. Auf jedem brennt ein Feuer, das deine Lebensenergie braucht: Arbeit, Familie, Freundschaft, Gesundheit.\n\nDavid Sedaris hat die Geschichte in einem viel zitierten Essay festgehalten — eine Freundin hatte sie aus einem Management-Seminar mitgebracht: Um wirklich gut in etwas zu sein, musst du mindestens einen Ofen ausmachen. Um außergewöhnlich zu sein, zwei.\n\nDas ist hart. Aber es erklärt, warum „alles gleichzeitig" nie funktioniert. Heute schauen wir ehrlich: Welche Öfen brennen heiß bei dir? Welche köcheln nur? Welche sind aus — und merkst du\'s überhaupt?' },
          { name: 'Ofen Arbeit', title: 'Ofen 1: Arbeit & Berufung', duration: 4*60,
            hostNote: 'Kurz in die Runde: Wie heiß, auf einer Skala von 1–10?',
            description: 'Alles, was mit bezahlter Arbeit, Karriere, Wirken in der Welt zu tun hat. Nicht nur der Job — auch Nebenprojekte, Ambitionen, das „was ich eigentlich schaffen will".',
            question: 'Wie heiß brennt dieser Ofen bei dir gerade — und wie heiß willst du ihn eigentlich?' },
          { name: 'Ofen Partner', title: 'Ofen 2: Partnerschaft & Familie', duration: 4*60,
            hostNote: 'Reihum, eine Zahl. Der Ofen, den wir am häufigsten beschwören und am seltensten wirklich warten.',
            description: 'Die nähesten Beziehungen — Partner:in, Kinder, Eltern, Geschwister. Der Kreis, in dem man sich nicht erklären muss. Und gerade deshalb leicht übersehen: Weil er nicht kündigt.',
            question: 'Wie heiß brennt dieser Ofen gerade — und merkst du, wenn er kleiner wird?' },
          { name: 'Ofen Freunde', title: 'Ofen 3: Freundschaft & Community', duration: 4*60,
            hostNote: 'Eine Zahl genügt.',
            description: 'Freund:innen, Bekannte, Vereine, Nachbarschaft. Die Menschen, die einen nicht aus der Familie kennen, aber trotzdem tragen. Der Ofen, der am ehesten „irgendwann mal" rutscht.',
            question: 'Wie heiß brennt dieser Ofen — und wann hast du zuletzt jemanden angerufen, nur um Hallo zu sagen?' },
          { name: 'Ofen Gesundheit', title: 'Ofen 4: Gesundheit & Körper', duration: 4*60,
            hostNote: 'Ehrlich bleiben.',
            description: 'Bewegung, Schlaf, Essen, mentale Gesundheit, Ruhepausen. Der Ofen, der sich am leichtesten auslöschen lässt — weil er nicht so laut schreit wie die anderen drei. Und der einzige, der, wenn er wirklich aus ist, alle anderen mit nach unten zieht.',
            question: 'Wie heiß brennt dieser Ofen — und welcher andere Ofen frisst gerade seine Glut?' },
          { name: 'Deine Öfen', title: 'Deine Landkarte — ehrlich', duration: 12*60,
            hostNote: 'Jede:r nennt reihum: Welche zwei Öfen brennen am heißesten? Welcher ist de facto aus? Keine Rechtfertigung, keine Erklärung.',
            question: 'Welche zwei Öfen brennen gerade am heißesten — und welcher ist de facto aus?' },
          { name: 'Kalender', title: 'Der ehrlichste Spiegel', duration: 12*60,
            hostNote: 'Holt eure Handys raus, scrollt durch die letzten 7 Tage. Reihum, was ihr seht. Keine Beschönigung.',
            quote: { text: 'Es ist nicht, dass wir wenig Zeit haben, sondern dass wir viel verlieren.', author: 'Seneca' },
            items: [
              { accent: '1.', label: 'Zeit-Realität', text: 'Welcher Ofen hat die meiste Zeit bekommen? Deckt sich das mit deiner Antwort eben?' },
              { accent: '2.', label: 'Unsichtbare Zeit', text: 'Welche Stunden liegen nirgends im Kalender — wo sind die hin (Scrollen, Serien, Doom-Scrolling)?' },
              { accent: '3.', label: 'Überraschung', text: 'Was erstaunt dich, wenn du die Woche so anschaust?' }
            ] },
          { name: '4000 Wochen', title: 'Wie viele Wochen hast du noch?', duration: 7*60,
            hostNote: 'Der Host liest vor. Danach Stille, nicht diskutieren.',
            quote: { text: 'Die durchschnittliche Lebenserwartung beträgt ungefähr viertausend Wochen. Wer 30 ist, hat noch dreitausend. Wer 50 ist, noch zweitausend.', author: 'Oliver Burkeman' },
            description: 'Oliver Burkemans Buch „4000 Wochen" beginnt mit dieser einen Rechnung. Nicht als Motivationsspruch — sondern als Konfrontation mit dem Problem, dass wir unsere Zeit meistens so behandeln, als hätten wir unendlich davon.\n\nDie Zahl ist nicht morbide. Sie ist klärend. Alles, was wir „irgendwann" machen wollen — die Woche Kreta, der Brief an den Vater, das Buch schreiben — passt in eine endliche Zahl Wochen.',
            question: 'Wenn du nur noch 1000 Wochen hättest — welcher Ofen würde dann automatisch kleiner werden?' },
          { name: 'Big Rocks', title: 'Das Glas und die Steine', duration: 7*60,
            hostNote: 'Der Host liest die Parabel vor.',
            description: 'Stephen Covey erzählt gern die Geschichte vom Professor, der vor seinen Studierenden ein leeres Glas aufbaut. Zuerst füllt er es mit großen Steinen — voll? Die Studenten nicken. Dann schüttet er Kiesel dazu. Sand. Zuletzt Wasser. Alles passt rein.\n\nDie Pointe ist nicht „man kann immer noch mehr rein quetschen". Sondern: Wer mit Sand anfängt, bekommt die großen Steine nie hinein. Die großen Steine — das sind deine 1-2 wichtigsten Öfen. Sie müssen zuerst rein in die Woche. Sand kommt von selbst.',
            question: 'Was ist diese Woche dein großer Stein — und wo hast du stattdessen mit Sand angefangen?' },
          { name: 'Das Nein', title: 'Jedes Ja ist ein Nein', duration: 8*60,
            hostNote: 'Reihum, ein Satz: „Mein lautestes Ja der letzten Woche war… — und damit habe ich Nein gesagt zu…"',
            description: 'Greg McKeown schreibt in „Essentialism": Die meisten Menschen haben kein Problem mit dem Ja. Sie haben ein Problem mit dem Nein. Jedes Ja zu einer Sache ist automatisch ein Nein zu tausend anderen — meistens ein stilles, unbemerktes Nein.\n\nWer seine Prioritäten sehen will, guckt nicht auf seine Jas. Er guckt auf seine verlorenen Neins.',
            question: 'Was war diese Woche dein versehentlichstes Nein — das, das du gar nicht ausgesprochen hast?' },
          { name: 'Wurzeln', title: 'Wer hat dir beigebracht, was wichtig ist?', duration: 12*60,
            hostNote: 'Reihum, je 2 Min. Eine Person, eine Botschaft.',
            description: 'Unsere Prioritäten sind selten unsere eigenen. Irgendwo in der Kindheit hat uns jemand gezeigt: „Dies ist wichtig. Dies nicht." Oft unausgesprochen — durch das, wofür Zeit da war und wofür nie. Der Vater, der sonntags immer gearbeitet hat. Die Mutter, die nie rausging. Die Großmutter, für die Freunde alles waren.',
            question: 'Welche Priorität hat dir jemand vorgelebt — und trägst du sie heute weiter, obwohl sie vielleicht nicht deine ist?' },
          { name: 'Verloren', title: 'Der Ofen, den du vermisst', duration: 7*60,
            hostNote: 'Reihum, kurz. Kein Selbstvorwurf, einfach Benennen.',
            description: 'Viele tragen einen stillen Ofen in sich, der einmal gebrannt hat und jetzt aus ist. Ein Hobby, eine Freundschaft, ein Stück Lebendigkeit. Er meldet sich nicht laut — nur als leises Ziehen abends, als Wehmut beim Anblick eines Fotos.',
            question: 'Welcher Ofen hat früher mal bei dir gebrannt — und ist jetzt aus?' },
          { name: 'Stille', title: 'Zwei Minuten, nur die Kerze', duration: 2*60,
            hostNote: 'Alle schauen zur Kerze. Zwei Minuten. Atmen.',
            description: 'Spürt, welcher Ofen gerade am lautesten nach Holz ruft.' },
          { name: 'Achtzig', title: 'Dein 80-jähriges Ich', duration: 6*60,
            hostNote: 'Reihum, ein Satz — nicht bedacht, spontan.',
            description: 'Bronnie Ware hat als Sterbebegleiterin die häufigsten Bereuen der Sterbenden gesammelt. Nummer zwei: „Ich wünschte, ich hätte nicht so viel gearbeitet." Nummer drei: „Ich wünschte, ich hätte mit meinen Freunden mehr Kontakt gehalten." Beides Öfen, die stumm ausgingen, ohne Alarm.',
            question: 'Welcher Ofen würde dich in 50 Jahren am meisten beschämen, wenn du zurückschaust?' },
          { name: 'Drossel', title: 'Einen drosseln, einen anheizen', duration: 10*60,
            hostNote: 'Reihum, konkret. Nicht „Gesundheit stärken" — sondern: „Dienstagabends gehe ich schwimmen, Mittwochs nicht ins Büro."',
            description: 'Prioritäten lebt man nicht durch Absicht. Man lebt sie durch Tauschen: Etwas Konkretes bekommt weniger, damit etwas anderes mehr bekommt. Kein Hinzufügen ohne Weglassen — sonst kippt das System.',
            question: 'Welchen Ofen drosselst du diese Woche — und welchen drehst du dafür auf?' },
          { name: 'Was ausgeht', title: 'Was bewusst ausbleibt', duration: 7*60,
            hostNote: 'Der eigentliche Test. Jede:r benennt EINE konkrete Sache, die diese Woche bewusst ausbleibt.',
            description: 'Ohne Nein kein Ja. Jede:r nennt laut einen Termin, eine Verabredung, ein Abendritual, einen Reflex, der diese Woche bewusst ausfällt. Nicht weil er schlecht ist — sondern damit Raum entsteht.',
            question: 'Was lasse ich diese Woche bewusst weg — damit etwas anderes wirklich brennen kann?' },
          { name: 'Wort', title: 'Ein Wort zum Abschied', duration: 4*60,
            hostNote: 'Reihum, ein Wort. Keine Begründung.',
            question: 'Ein Wort, mit dem du heute Abend gehst.' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 50 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor ihr anfangt', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys weg. Drei gemeinsame Atemzüge — ohne Kommentar.',
            description: 'Prioritäten sichtbar machen braucht Ruhe — sonst redet einfach der lauteste Termin weiter.' },
          { name: 'Ankommen', title: 'Wie laut ist dein Kopf?', duration: 10*60,
            hostNote: 'Beide nacheinander. 4 Minuten pro Person. Der andere hört zu — keine Ratschläge, keine Lösungen.',
            question: 'Was will gerade am meisten deine Zeit — und fühlt sich das richtig an?' },
          { name: 'Einstieg', title: 'Das Vier-Öfen-Modell', duration: 6*60,
            hostNote: 'Eine:r liest vor. Danach kurz schweigen, bevor ihr weitermacht.',
            quote: { text: 'Man findet nicht leicht etwas Schwereres als die Liebe zum Leichten.', author: 'Seneca' },
            description: 'Vier Öfen vor euch: Arbeit, Familie, Freundschaft, Gesundheit. Die These: um wirklich gut in etwas zu sein, muss mindestens einer runtergefahren werden. Das ist unbequem — und erklärt, warum „alles gleichzeitig" nie funktioniert.\n\nOptional, wenn ihr tiefer gehen wollt: Welcher Ofen ist bei euch grad der unbequeme? Der, über den ihr lieber nicht sprecht?' },
          { name: 'Die vier Öfen', title: 'Die vier Öfen im Überblick', duration: 6*60,
            hostNote: 'Gemeinsam durchgehen. Wer denkt bei welchem Ofen zuerst an sich?',
            items: [
              { label: 'Arbeit', text: 'Beruf, Karriere, Ambition, Wirken in der Welt.' },
              { label: 'Partner / Familie', text: 'Die engsten Menschen. Der Kreis ohne Erklärungen.' },
              { label: 'Freunde', text: 'Community, Bekannte, Nachbarn. Wer trägt außer der Familie?' },
              { label: 'Gesundheit', text: 'Körper, Schlaf, Bewegung, Ruhe. Der leiseste Ofen.' }
            ] },
          { name: 'Eure Landkarte', title: 'Meine Öfen — deine Öfen', duration: 15*60,
            hostNote: 'Jede:r zeichnet für sich 4 Öfen mit Flamme groß/klein/aus (egal womit — Bierdeckel reicht). Dann zeigt ihr euch die Zeichnungen. 2 Minuten anschauen, bevor ihr redet.',
            question: 'Welche Öfen brennen bei mir gerade — und wo siehst du das bei mir anders?' },
          { name: 'Kalender-Check', title: 'Ein ehrlicher Blick in die Wochen', duration: 15*60,
            hostNote: 'Scrollt zusammen durch eure letzten 7 Tage. Was seht ihr? Wo lügt eure Gefühls-Version über eure tatsächliche Zeit?',
            description: 'Der Kalender ist der ehrlichste Spiegel. Was er zeigt, das lebt ihr — unabhängig von dem, was ihr sagt.\n\nOptional, wenn Zeit: sucht den einen Eintrag, der euch wütend macht beim Anschauen. Warum?',
            question: 'Was zeigt unser Kalender über unsere Prioritäten — und wo gibt es Lücken?' },
          { name: 'Viertausend', title: 'Ungefähr 4000 Wochen', duration: 8*60,
            hostNote: 'Eine:r liest vor. Danach je 2 Min — ohne Trost und ohne Hektik.',
            description: 'Oliver Burkeman hat nachgerechnet: Ein durchschnittliches Leben hat etwa 4000 Wochen. Wer 40 ist, hat gut 2000 davon hinter sich.\n\nDas ist keine Drohung, sondern eine Entlastung: Wenn die Zeit sowieso nie für alles reicht, ist „alles schaffen" keine Option, die man verpassen könnte. Übrig bleibt die ehrlichere Frage: Was davon soll es wirklich sein?\n\nRechnet kurz eure eigene Zahl aus. Sie fühlt sich anders an als der Satz „das Leben ist kurz".',
            question: 'Wie viele Wochen hast du ungefähr noch — und wenn du die Zahl ansiehst: Welcher deiner vier Öfen bekommt gerade zu viele davon?' },
          { name: 'Wurzeln', title: 'Was habt ihr mitgebracht?', duration: 12*60,
            hostNote: 'Je 5 Minuten erzählen, der andere nur zuhören. Keine Rückfrage in der Erzählzeit.',
            description: 'Unsere Prioritäten sind selten unsere eigenen. Irgendwo hat dir jemand gezeigt: „Dies ist wichtig. Dies nicht." Oft durch das, wofür Zeit da war und wofür nie.',
            question: 'Welche Priorität ist bei dir geliehen — von deinen Eltern, deiner Herkunft? Und welche ist wirklich deine?' },
          { name: 'Stille', title: 'Drei Minuten, nur der Ofen', duration: 3*60,
            hostNote: 'Schaut in die Kerze. Nichts sagen. Spürt, welcher eurer Öfen gerade am dringendsten nach Holz ruft.',
            description: 'Zwischen Erkennen und Entscheiden passt ein Atemzug. Oder drei Minuten Stille.' },
          { name: 'Tausch', title: 'Was ich dir nicht sagen müsste — aber will', duration: 8*60,
            hostNote: 'Je ein Satz: „An dir bewundere ich folgende Priorität…". Der andere antwortet nur mit „Danke". Keine Erwiderung, keine Relativierung.',
            question: 'Welche Priorität lebt die andere Person auf eine Weise, die dich bewegt oder beschämt?' },
          { name: 'Schritt', title: 'Was drosseln wir, was heizen wir an?', duration: 10*60,
            hostNote: 'Pro Person: Ein Ofen bekommt weniger, ein anderer mehr — konkret, diese Woche. Aufschreiben auf Zettel, austauschen, an den Kühlschrank.',
            question: 'Welchen Ofen drossele ich diese Woche — und welchen gebe ich mehr Luft? Woran erkennst du am Sonntag, dass ich es wirklich getan habe?' },
          { name: 'Was ausgeht', title: 'Was bewusst ausgeht', duration: 7*60,
            hostNote: 'Der schwerste Teil. Jeder benennt EINE Sache, die diese Woche bewusst ausbleibt — eine Verabredung, ein Netflix-Abend, ein Check-In. Nicht weil sie schlecht ist, sondern damit Raum entsteht.',
            description: 'Prioritäten leben sich nicht durch Hinzufügen. Sie leben sich durch Weglassen. Der Mut, etwas ausgehen zu lassen, ist der eigentliche Test.',
            question: 'Welche Sache, die diese Woche anstand, lasse ich bewusst ausfallen — damit etwas anderes wirklich brennt?' }
        ])
      }
    }
  },

  // =====================================================================
  // WOFÜR STEHE ICH — Drei Ebenen des Einstehens
  // =====================================================================
  stehe: {
    title: 'Wofür stehe ich?',
    category: 'Werte',
    lead: 'Eine Standortbestimmung. Nicht die laute Version — die stille. Wo ziehe ich Linien, wo ducke ich mich, wo wachse ich?',
    image: 'images/stehe.jpg',
    philosophy1: 'Nicht jede Überzeugung muss laut sein. Aber sie muss deine sein. Heute geht es um die Grundsätze, an denen du dich wiedererkennst — und um die Momente, in denen du dich verleugnest.',
    philosophy2: 'Wir schauen auf drei Ebenen: bei dir selbst, für andere, für eine Sache. Joan Didion hat Selbstachtung als die Bereitschaft beschrieben, Verantwortung für das eigene Leben zu übernehmen — dort beginnt Ebene 1. Und Václav Havel hat gezeigt, was auf dem Spiel steht: Wer sich dauerhaft verbiegt, lebt „in der Lüge" und merkt es irgendwann selbst nicht mehr. Der Abend macht sichtbar, auf welcher Ebene du stark bist — und auf welcher du leise geworden bist.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std. 20 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor wir anfangen', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys stumm auf einen Tisch. Drei gemeinsame Atemzüge.',
            description: 'Einstehen ist selten spektakulär. Meistens leise. Und fast immer unbequem. Das gleich ehrlich zu beleuchten geht nur in einem ruhigen Raum.' },
          { name: 'Ankommen', title: 'Wie ehrlich warst du diese Woche mit dir?', duration: 10*60,
            hostNote: 'Reihum, ein Satz. Nicht die Version fürs Foto — die echte.',
            question: 'Wo warst du diese Woche am ehrlichsten mit dir — und wo am wenigsten?' },
          { name: 'Einstieg', title: 'Drei Ebenen des Einstehens', duration: 8*60,
            hostNote: 'Der Host liest langsam vor. Danach Stille.',
            quote: { text: 'Es ist kein Zeichen geistiger Gesundheit, gut angepasst an eine kranke Gesellschaft zu sein.', author: 'Jiddu Krishnamurti' },
            description: 'Wofür man steht, zeigt sich auf drei Ebenen.\n\nEbene 1: Für dich selbst. Hältst du dich an deine Vorsätze, deine Grenzen, deine Entscheidungen — auch wenn niemand hinschaut?\n\nEbene 2: Für andere. Wen verteidigst du, wenn er nicht im Raum ist? Für wen ziehst du deinen Hals raus?\n\nEbene 3: Für eine Sache. Gibt es etwas, für das du auch öffentlich einstehst, obwohl es dich etwas kostet?\n\nDie meisten sind auf einer Ebene stark, auf einer leise. Václav Havel nannte das Gegenteil davon „in der Lüge leben" — nicht als moralisches Urteil, sondern als Beobachtung: Wer sich dauerhaft verbiegt, merkt selbst nach Jahren kaum noch, wo er steht.' },
          { name: 'Ebene 1', title: 'Ebene 1: Für dich selbst', duration: 5*60,
            hostNote: 'Ein Beispiel reicht pro Person.',
            description: 'Sich an die eigenen Regeln halten, wenn niemand hinschaut. Die Bitte, die man nicht ablehnt, obwohl man es tun sollte. Der Sport, den man nicht macht. Das Nein, das ein Ja wurde.',
            question: 'Wo bist du diese Woche nicht für dich selbst eingestanden?' },
          { name: 'Ebene 2', title: 'Ebene 2: Für andere', duration: 5*60,
            hostNote: 'Eine Person, eine Szene.',
            description: 'Wenn jemand über eine:n abwesende:n Freund:in lästert — sagst du was? Wenn jemand unfair behandelt wird und du es siehst — mischt du dich ein? Nicht heroisch, sondern alltäglich.',
            question: 'Für wen stehst du zuverlässig ein — und für wen nicht, wenn er nicht im Raum ist?' },
          { name: 'Ebene 3', title: 'Ebene 3: Für eine Sache', duration: 5*60,
            hostNote: 'Auch „ich stehe für nichts Größeres öffentlich ein" ist eine ehrliche Antwort.',
            description: 'Politisch, moralisch, beruflich, religiös — gibt es etwas, wofür du öffentlich einstehst, auch wenn es unbequem wird? Und: Bist du dir sicher, dass dein Schweigen nicht auch eine Aussage ist?',
            question: 'Wofür, das größer ist als du, bist du bereit, unbequem zu werden?' },
          { name: 'Deine Ebenen', title: 'Wo bist du stark — wo leise?', duration: 10*60,
            hostNote: 'Reihum, 1-2 Min. Keine Wertung — einfach Selbstbild.',
            question: 'Auf welcher Ebene stehst du stark, auf welcher leise — und überrascht dich das?' },
          { name: 'Kleine Verleugnung', title: 'Die kleine Verleugnung', duration: 7*60,
            hostNote: 'Reihum, kurz. Nicht das große Drama — der alltägliche Moment.',
            description: 'Adorno hat es scharf formuliert: „Es gibt kein richtiges Leben im falschen." Gemeint waren große gesellschaftliche Lügen — aber die Mikroversion davon kennen wir alle: Der Moment, in dem du ja sagst, obwohl nein richtig wäre. Das Lachen über den Witz, den du nicht lustig findest. Das Nicken in ein Meeting, das du schlecht findest.',
            question: 'Wo hast du diese Woche eine kleine Verleugnung mitgemacht — und wann fällt dir das jetzt wieder ein?' },
          { name: 'Szenen', title: 'Vier Alltagssituationen', duration: 15*60,
            hostNote: 'Szene für Szene vorlesen. Reihum: Was würdest du tun — und was tust du wirklich?',
            items: [
              { accent: '1.', label: 'Das Meeting', text: 'Im Meeting sagt die Chefin etwas, was du für falsch hältst. Alle nicken. Sagst du etwas?' },
              { accent: '2.', label: 'Der Witz', text: 'Ein Freund macht einen Witz, der eine Gruppe abwertet. Alle lachen. Du auch?' },
              { accent: '3.', label: 'Der Fremde', text: 'Ein:e Fremde:r wird vor dir angepöbelt. Wegschauen, ansprechen, stehen bleiben?' },
              { accent: '4.', label: 'Die Bitte', text: 'Jemand bittet dich um einen Gefallen, der deiner Linie widerspricht. Wie oft machst du es trotzdem?' }
            ] },
          { name: 'Die Grauzone', title: 'Die Grauzone', duration: 7*60,
            hostNote: 'Reihum, ein Satz. Nicht streng mit sich — ehrlich.',
            description: 'Die großen Tests sind selten. Das meiste Leben spielt in der Grauzone — wo du weder klar einstehst noch klar wegduckst, sondern irgendwas dazwischen machst. Ein bisschen widersprechen, aber nicht so, dass es weh tut. Ein bisschen helfen, aber nicht so, dass du schief angeschaut wirst. Die Grauzone ist bequem. Sie ist auch der Ort, an dem Rückgrat langsam weich wird.',
            question: 'Wo ist deine typischste Grauzone — die Situation, in der du weder klar stehst noch klar wegduckst?' },
          { name: 'Kosten', title: 'Was dich dein letztes Ja-Nein-Ding gekostet hat', duration: 8*60,
            hostNote: 'Reihum, kurz. Nicht öffentlich prangern — einfach benennen. „Pass" ist ausdrücklich okay.',
            description: 'Jedes Nicht-Einstehen hat einen Preis. Meistens keine laute Rechnung, sondern ein schleichender Verlust an Selbstachtung. Joan Didion nannte es „self-respect": Das Gefühl, dich selbst abends im Spiegel sehen zu können. Das kostet.',
            quote: { text: 'Die Bereitschaft, Verantwortung für das eigene Leben zu übernehmen, ist die Quelle, aus der Selbstachtung entspringt.', author: 'Joan Didion' },
            question: 'Was hat dich dein letztes Nicht-Einstehen wirklich gekostet — nicht nach außen, innen?' },
          { name: 'Der Moment', title: 'Der letzte Moment, in dem du standst', duration: 10*60,
            hostNote: 'Reihum, je 2 Min. Nicht groß machen — ein echter Moment reicht.',
            description: 'Erinnere dich an den letzten Moment, in dem du wirklich eingestanden bist — klein oder groß. Vielleicht nur ein Satz in einem Gespräch. Vielleicht ein deutliches Nein. Was hat er dich gekostet — und was hat er dir gegeben?',
            question: 'Wann bist du zuletzt wirklich eingestanden — und wie war es hinterher?' },
          { name: 'Vorbilder', title: 'Wer hat dir Rückgrat gezeigt?', duration: 12*60,
            hostNote: 'Reihum, je 2 Min. Keine Berühmtheit — jemand aus deinem Leben. Wer passen will, passt.',
            description: 'Rückgrat lernt man selten von Helden. Meistens von unspektakulären Menschen, die in einem kleinen Moment nicht geschwiegen haben: ein Lehrer, eine Tante, ein Fremder im Zugabteil. Oft merken wir erst Jahre später, wie sehr uns so ein Moment geprägt hat.',
            question: 'Wer hat dir im echten Leben gezeigt, was einstehen heißt? Und was hat diese Person konkret getan?' },
          { name: 'Preis', title: 'Was würdest du bezahlen?', duration: 6*60,
            hostNote: 'Reihum, kurz. Spontan, nicht ausgefeilt.',
            description: 'Simone Weil hat in den 30ern eine unbequeme Frage gestellt: Wofür wärst du bereit, etwas zu verlieren — nicht symbolisch, sondern konkret? Arbeit? Freundschaften? Bequemlichkeit? Wer keine Antwort hat, hat auch kein wirkliches Einstehen — nur Meinungen.',
            question: 'Wofür wärst du bereit, einen echten Preis zu zahlen — Arbeit, Freundschaft, Bequemlichkeit?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Alle schauen zur Kerze. Zwei Minuten. Atmen.',
            description: 'Nach dem, was gerade im Raum war, braucht es Luft.' },
          { name: 'Havel', title: 'Leben in Wahrheit', duration: 5*60,
            hostNote: 'Der Host liest vor. Keine Diskussion.',
            quote: { text: 'Die Hoffnung ist nicht die Überzeugung, dass etwas gut ausgeht, sondern die Gewissheit, dass etwas Sinn hat — egal wie es ausgeht.', author: 'Václav Havel' },
            description: 'Václav Havel, der tschechische Schriftsteller und spätere Präsident, hat den Begriff „Leben in Wahrheit" geprägt — nicht als großes Heldentum, sondern als Entscheidung, nicht mitzumachen bei den kleinen Lügen, die einen selbst betreffen. Der Gemüsehändler, der das Regime-Plakat ins Schaufenster stellt. Das Plakat wegzulassen ist keine Revolution. Aber es ist der Anfang von Wahrhaftigkeit.' },
          { name: 'Schritt', title: 'Wo wirst du diese Woche einstehen?', duration: 10*60,
            hostNote: 'Reihum, konkret, klein, machbar. Auf Zettel schreiben.',
            description: 'Nicht „ich will mutiger werden". Sondern: „Ich sage Mittwoch im Team-Meeting, dass ich den Termin Freitagabend nicht mache." Oder: „Ich rufe am Wochenende bei X an, den ich seit Wochen hängen lasse."',
            question: 'In welcher konkreten Situation diese Woche wirst du einmal nicht wegducken?' },
          { name: 'Wort', title: 'Ein Wort zum Abschied', duration: 4*60,
            hostNote: 'Reihum, ein Wort. Keine Begründung.',
            question: 'Ein Wort, mit dem du heute nach Hause gehst.' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 10 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor ihr anfangt', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys weg. Drei gemeinsame Atemzüge — ohne Kommentar.',
            description: 'Gebt euch diesen Moment, bevor es richtig losgeht — er ist der eigentliche Startschuss.' },
          { name: 'Ankommen', title: 'Wo warst du diese Woche am wenigsten ehrlich mit dir?', duration: 8*60,
            hostNote: 'Beide nacheinander. Nicht dramatisieren, nur benennen.',
            question: 'Wo warst du diese Woche leise, obwohl etwas in dir reden wollte?' },
          { name: 'Einstieg', title: 'Drei Ebenen des Einstehens', duration: 6*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Es ist kein Zeichen geistiger Gesundheit, gut angepasst an eine kranke Gesellschaft zu sein.', author: 'Jiddu Krishnamurti' },
            description: 'Einstehen passiert auf drei Ebenen — für sich selbst, für andere, für eine Sache. Die meisten Menschen sind auf einer stark, auf einer leise. Heute schauen wir gegenseitig hin — ohne Urteil.' },
          { name: 'Die drei Ebenen', title: 'Die drei Ebenen', duration: 6*60,
            items: [
              { label: 'Für dich selbst', text: 'Hältst du dich an deine Grenzen, deine Vorsätze?' },
              { label: 'Für andere', text: 'Wen verteidigst du — auch in deren Abwesenheit?' },
              { label: 'Für eine Sache', text: 'Wofür bist du öffentlich unbequem bereit zu sein?' }
            ] },
          { name: 'Spiegel', title: 'Ich sehe dich — du siehst mich', duration: 15*60,
            hostNote: '„Auf Ebene X sehe ich dich stark, weil… Auf Ebene Y leise, weil…“ Beide abwechselnd. Keine Verteidigung, nur hinhören.',
            question: 'Was siehst du bei mir auf welcher Ebene?' },
          { name: 'Unbequeme Szenen', title: 'Zwei Alltags-Szenen', duration: 15*60,
            hostNote: 'Vorlesen, dann gemeinsam: Was hättest du gemacht? Was hätte ich gemacht?',
            items: [
              { accent: '1.', label: 'Freundeskreis', text: 'Jemand, den ihr beide mögt, wird abwesend lächerlich gemacht. Wer von euch sagt etwas?' },
              { accent: '2.', label: 'Öffentlich', text: 'In einem Café wird jemand diskriminiert. Erwartet ihr einander zu handeln — oder seid ihr unsicher?' }
            ] },
          { name: 'Wurzeln', title: 'Wer hat euch Rückgrat vorgelebt?', duration: 12*60,
            hostNote: 'Je 5 Minuten erzählen, der andere nur zuhören — keine Rückfrage in der Erzählzeit.',
            description: 'Rückgrat lernt man selten von Helden. Meistens von unspektakulären Menschen, die in einem kleinen Moment nicht geschwiegen haben.',
            question: 'Wer hat dir im echten Leben gezeigt, wie „einstehen" aussieht? Und was genau hat diese Person gemacht?' },
          { name: 'Anerkennung', title: 'Wofür ich dich bewundere', duration: 10*60,
            hostNote: 'Je ein Satz: „Ich bewundere, wie du auf Ebene X einstehst — auch wenn es dich was kostet." Der andere antwortet nur mit „Danke". Keine Relativierung.',
            question: 'Welche Haltung der anderen Person bewunderst du — und hast es ihr so konkret noch nie gesagt?' },
          { name: 'Stille', title: 'Zwei Minuten, ohne Worte', duration: 2*60,
            hostNote: 'Schaut in die Kerze. Spürt, was gerade nachklingt.',
            description: 'Manche Sätze brauchen Zeit, um anzukommen. Diese zwei Minuten sind der Ort, an dem das passiert.' },
          { name: 'Satz', title: 'Der Satz, den ich diese Woche sage', duration: 10*60,
            hostNote: 'Jede:r formuliert einen konkreten Satz — aufgeschrieben, dann laut ausgesprochen. Der andere hört nur zu. Kein Kommentar.',
            description: 'Statt „ich will einstehen" — welcher konkrete Satz wird diese Woche gesagt, wo du ihn sonst geschluckt hättest?',
            question: 'Welchen einen Satz sage ich diese Woche laut, den ich sonst geschluckt hätte — und zu wem?' }
        ])
      }
    }
  },

  // =====================================================================
  // MEIN IDEALER TAG — Drei Säulen (Flow / Connection / Stille)
  // =====================================================================
  tag: {
    title: 'Mein idealer Tag',
    category: 'Zukunft',
    lead: 'Keine Traumreise, kein Fünf-Jahres-Plan. Ein ehrlicher Tag zwischen Aufstehen und Einschlafen — und was er über dich verrät.',
    image: 'images/tag.jpg',
    philosophy1: 'Die Frage nach dem idealen Tag klingt harmlos. In Wirklichkeit legt sie offen, was wir wirklich brauchen: Ruhe, Begegnung, Bewegung, Tiefe, Leichtigkeit — in welcher Mischung?',
    philosophy2: 'Drei Säulen tragen die meisten guten Tage: Flow (etwas schaffen, in dem man aufgeht), Connection (jemanden wirklich sehen), Stille (Zeit mit sich selbst). Kein Tag ist perfekt, aber die Mischung entscheidet. Heute sucht ihr eure eigene.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std. 20 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor wir anfangen', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys stumm auf einen Tisch. Drei gemeinsame Atemzüge.',
            description: 'Der ideale Tag zeigt sich nicht in Planung. Er zeigt sich in Aufmerksamkeit. Gleich beginnen wir mit einer — dieser hier, jetzt.' },
          { name: 'Ankommen', title: 'Wann war ein Tag zuletzt wirklich deiner?', duration: 10*60,
            hostNote: 'Reihum, ein Beispiel. Nicht Urlaub — Alltag.',
            question: 'Wann hast du zuletzt einen Tag gehabt, der sich wie deiner angefühlt hat — und was war besonders?' },
          { name: 'Einstieg', title: 'Wie wir unsere Tage verbringen', duration: 7*60,
            hostNote: 'Host liest langsam vor. Dann eine Minute Stille.',
            quote: { text: 'How we spend our days is, of course, how we spend our lives.', author: 'Annie Dillard' },
            description: 'Annie Dillard schreibt das in „The Writing Life" und schiebt zwei Sätze später nach: „Ein Zeitplan schützt vor Chaos und Laune. Er ist ein Netz, das Ordnung in die Tage webt."\n\nWir denken beim „guten Leben" oft an große Entscheidungen — Partnerwahl, Beruf, Wohnort. Die wichtigste Entscheidung passiert aber in den ungezählten Dienstagen dazwischen. Jeder Tag ist eine Stimme dafür, wer du wirst.\n\nGute Tage haben selten perfekte Stunden. Aber sie haben oft drei Zutaten in der richtigen Mischung: Flow, Verbindung, Stille.' },
          { name: 'Säule Flow', title: 'Säule 1: Flow', duration: 5*60,
            hostNote: 'Kurz in die Runde. Je ein Beispiel.',
            description: 'Mihaly Csikszentmihalyi, der ungarisch-amerikanische Psychologe, hat es ein Leben lang untersucht: Der Zustand, in dem du ganz in etwas aufgehst. Du vergisst Uhr, Hunger, Umgebung. Deine Fähigkeit passt exakt zur Herausforderung — nicht zu wenig (Langeweile), nicht zu viel (Stress).\n\nFlow ist nicht nur Arbeit. Es kann kochen sein, klettern, malen, schreiben, Gärtnern, ein langes Gespräch. Menschen, die regelmäßig im Flow sind, berichten unabhängig von Einkommen oder Status ein höheres Lebensglück.',
            question: 'Wann bist du zuletzt wirklich im Flow gewesen — was hast du gemacht?' },
          { name: 'Säule Connection', title: 'Säule 2: Connection', duration: 5*60,
            hostNote: 'Reihum, ein Moment.',
            description: 'Verbindung ist nicht „Menschen gesehen". Es ist die ein, zwei Minuten, in denen du wirklich gesehen wirst — oder jemanden wirklich siehst. Ein Satz kann reichen.\n\nDie Harvard Study of Adult Development — 85 Jahre Längsstudie, die längste jemals durchgeführte — hat einen klaren Hauptbefund: Nicht Erfolg, nicht Gesundheit, sondern Qualität der Beziehungen ist der stärkste Prädiktor für ein zufriedenes Leben. Und zwar nicht Quantität — Qualität.',
            question: 'Wann hattest du zuletzt einen echten Moment der Verbindung — und mit wem?' },
          { name: 'Säule Stille', title: 'Säule 3: Stille', duration: 5*60,
            hostNote: 'Ehrlich bleiben — viele sind darin unterversorgt.',
            description: 'Stille heißt nicht Nichtstun. Es heißt: Zeit, in der niemand etwas von dir will. Auch keine Algorithmen, kein Podcast, keine Playlist. Raum, in dem dein eigenes Denken sich ausbreiten kann.\n\nBlaise Pascal hat im 17. Jh. geschrieben: „All das Unglück der Menschen rührt von einem her: dass sie nicht in einem Zimmer allein ruhig sitzen können." 400 Jahre später haben wir Netflix, Instagram, TikTok — und das Problem ist dasselbe.',
            question: 'Wann hattest du zuletzt 30 Minuten echte Stille? Und wie oft pro Woche?' },
          { name: 'Dein Mix', title: 'Dein idealer Dienstag — konkret', duration: 15*60,
            hostNote: 'Jede:r nimmt sich 3 Min Nachdenken. Dann reihum: von Aufstehen bis Einschlafen, grob in 4-5 Blöcke.',
            description: 'Nicht der Dienstag, wie er ist. Der Dienstag, wie er sein könnte, wenn du den Mix wählen dürftest. Realistisch, nicht Urlaub. Konkret, nicht poetisch — mit Uhrzeiten.',
            question: 'Wie sieht dein idealer Dienstag aus, von morgens bis abends?' },
          { name: 'Aufmerksamkeit', title: 'Womit du die Tage füllst', duration: 8*60,
            hostNote: 'Reihum, ein ehrlicher Satz.',
            quote: { text: 'Aufmerksamkeit ist die seltenste und reinste Form der Großzügigkeit.', author: 'Simone Weil' },
            description: 'Mary Oliver hat es poetisch formuliert: „Attention is the beginning of devotion." Wem du deine Aufmerksamkeit gibst, dem gibst du dein Leben — denn aus Minuten werden Stunden, Tagen, Jahre.\n\nDie schmerzhaftere Version: Wem du deine Aufmerksamkeit NICHT gibst — Partner, Kind, Körper, eigenem Denken — den lässt du langsam verhungern. Ohne bösen Willen, einfach durch Abwesenheit.',
            question: 'Wem oder was gibst du im Alltag ehrlich zu viel Aufmerksamkeit — und wem zu wenig?' },
          { name: 'Resonanz', title: 'Der Unterschied zwischen voll und reich', duration: 8*60,
            hostNote: 'Der Host liest vor. Danach: reihum, je ein Beispiel — wann hat dich zuletzt etwas wirklich erreicht?',
            quote: { text: 'Wir haben nicht zu wenig Zeit — wir haben zu wenig Resonanz.', author: 'Hartmut Rosa' },
            description: 'Der Soziologe Hartmut Rosa hat den Kern moderner Erschöpfung auf einen Begriff gebracht: Resonanz. Ein Tag kann voll sein und trotzdem leer. Voll ist, wenn viel passiert. Reich ist, wenn etwas zurückspricht.\n\nResonanz passiert, wenn die Welt dich berührt und du antworten kannst: ein Gespräch, das dich verwandelt. Eine Landschaft, die dich anblickt. Ein Stück Musik, das dich im Körper trifft. Ein Werkstück, das gelingt, weil du bei der Sache warst. Das Gegenteil nennt Rosa „Entfremdung": alles passiert, nichts berührt.\n\nDas Entscheidende: Resonanz lässt sich nicht erzwingen. Man kann nur Räume schaffen — langsamer werden, hinhören, sich treffen lassen. Unverfügbarkeit ist Teil der Sache.',
            question: 'Wann hat dich in der letzten Woche etwas wirklich erreicht — ein Mensch, ein Ort, ein Moment?' },
          { name: 'Was fehlt', title: 'Der Vergleich mit deinem letzten Dienstag', duration: 10*60,
            hostNote: 'Reihum, ein klarer Satz. Nicht selbstkritisch — diagnostisch.',
            description: 'Jetzt wird\'s unbequem: Vergleich den gerade beschriebenen idealen Tag mit deinem letzten echten Dienstag.',
            question: 'Was fehlt in deinem heutigen Alltag — das in deinem idealen Tag ganz selbstverständlich ist?' },
          { name: 'Hindernisse', title: 'Warum lebst du ihn nicht?', duration: 8*60,
            hostNote: 'Reihum, eine zweite Schicht freilegen. Die erste Antwort ist selten die ehrlichste.',
            description: '„Keine Zeit" ist fast nie die eigentliche Antwort. Die Frage „Warum lebst du nicht deinen idealen Dienstag?" bringt meistens tiefere Schichten hoch: Angst vor Enttäuschung, Gewohnheit, Rollen, in denen andere dich erwarten, manchmal auch die stille Befürchtung, dass es dann „zu gut" wäre — und etwas weh tun müsste.',
            question: 'Was hindert dich wirklich daran, deinem idealen Tag näher zu kommen — ist es wirklich Zeit oder Geld, oder etwas anderes?' },
          { name: 'Der Morgen', title: 'Der erste Blick, der erste Satz', duration: 6*60,
            hostNote: 'Reihum, kurz.',
            description: 'Marcus Aurelius, der römische Kaiser-Philosoph, hat seine „Selbstbetrachtungen" fast immer mit einem Morgen-Check begonnen: „Heute werde ich Menschen treffen, die undankbar, eingebildet, gierig sind. Mich trifft das nicht, wenn ich weiß, wer ich selbst bin."\n\nDer erste Gedanke am Morgen prägt die nächsten 16 Stunden mehr, als wir denken. Viele Menschen beginnen ihn mit einem Blick aufs Handy — und lassen damit zu, dass andere die Tagesstimmung setzen.',
            question: 'Was ist dein aktueller erster Gedanke am Morgen — und was wäre ein besserer?' },
          { name: 'Kind-Ich', title: 'Was dein 8-jähriges Ich dir raten würde', duration: 6*60,
            hostNote: 'Reihum, einen Satz — nicht lang ausfeilen.',
            description: 'Frag dein 8-jähriges Ich: Womit würdest DU deinen freien Tag verbringen? Erwachsene haben oft vergessen, was ihnen ursprünglich Freude machte — weil sie es früh gegen Effizienz eingetauscht haben.\n\nDas Kind-Ich weiß oft mehr über deinen Flow und deine Stille als das 38-jährige Ich. Es hat sich nur weniger Sorgen gemacht.',
            question: 'Was würde dein 8-jähriges Ich in deinem idealen Dienstag unbedingt drin haben wollen?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Alle schauen zur Kerze. Zwei Minuten. Atmen.',
            description: 'Ein Mini-Abbild dessen, was dein idealer Tag öfter braucht.' },
          { name: 'Ikigai', title: 'Die vier überlappenden Kreise', duration: 7*60,
            hostNote: 'Der Host liest vor. Keine Pflicht zur Antwort — spür nach.',
            description: 'Vier Fragen, an denen ein Tag Gewicht bekommt: Was liebst du? Worin bist du gut? Was braucht die Welt von dir? Wofür wirst du bezahlt — oder könntest es werden?\n\nBekannt ist das als „Ikigai"-Diagramm mit vier Kreisen. Ehrlicherweise: Diese Kreise sind eine westliche Erfindung. Das japanische Ikigai, erforscht von der Psychiaterin Mieko Kamiya, ist bescheidener und schöner — das, was deinem Alltag Gewicht und Richtung gibt. Es muss kein Beruf sein: Ein Garten kann es sein, ein Enkelkind, ein Chor.\n\nFür heute reicht die kleinere Frage: Wo in deinem idealen Tag berühren sich wenigstens zwei der vier?',
            question: 'Welcher der vier Kreise kommt in deinem aktuellen Alltag am kürzesten — und wo im idealen Dienstag wäre Raum für alle vier?' },
          { name: 'Drei Worte', title: 'Wie soll sich dein Abend anfühlen?', duration: 6*60,
            hostNote: 'Reihum, wirklich nur drei Worte. Nicht ausführen.',
            description: 'Ein guter Tag erkennt man am Abend. Nicht an der Liste erledigter Dinge, sondern an drei Worten, die ehrlich beschreiben, wie sich die letzte Stunde anfühlt.',
            question: 'Welche drei Worte sollen deinen Abend beschreiben, wenn der Tag gut war?' },
          { name: 'Schritt', title: 'Ein Element, diesen Dienstag', duration: 8*60,
            hostNote: 'Reihum, konkret: EIN Element + Uhrzeit + Dauer. Auf Zettel.',
            description: 'Nicht die ganze Woche umkrempeln. Ein Element. „Dienstag 18:30-19:00 Spaziergang allein ohne Handy." Oder: „Dienstag 7:00-7:15 kein Handy, nur Kaffee am Fenster." Klein, benennbar, diese Woche.',
            question: 'Welches EINE Element deines idealen Tages baust du diesen Dienstag ein — zu welcher Uhrzeit, wie lange?' },
          { name: 'Wort', title: 'Ein Wort zum Abschied', duration: 4*60,
            hostNote: 'Reihum, ein Wort.',
            question: 'Ein Wort, mit dem du heute nach Hause gehst.' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 30 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor ihr anfangt', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys weg. Drei gemeinsame Atemzüge — ohne Kommentar.',
            description: 'Gebt euch diesen Moment, bevor es richtig losgeht — er ist der eigentliche Startschuss.' },
          { name: 'Ankommen', title: 'Dein letzter richtig guter Tag', duration: 8*60,
            hostNote: 'Beide nacheinander. 3 Minuten pro Person.',
            question: 'Wann hattest du zuletzt einen Tag, der sich wie deiner angefühlt hat? Was war da?' },
          { name: 'Einstieg', title: 'Die drei Säulen', duration: 6*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Zeit ist Leben. Und das Leben wohnt im Herzen.', author: 'Michael Ende, Momo' },
            description: 'Gute Tage haben drei Zutaten — in unterschiedlichen Mischungen: Flow (aufgehen in etwas), Connection (einander sehen), Stille (Zeit mit sich selbst). Wir brauchen alle drei, aber jeder in anderer Dosierung.' },
          { name: 'Säulen', title: 'Die drei Säulen im Überblick', duration: 6*60,
            items: [
              { label: 'Flow', text: 'Zeit, in der du in etwas aufgehst und die Uhr vergisst.' },
              { label: 'Connection', text: 'Echte Begegnung — jemanden wirklich sehen oder gesehen werden.' },
              { label: 'Stille', text: 'Zeit, in der niemand etwas von dir will. Auch kein Handy.' }
            ] },
          { name: 'Dein Samstag', title: 'Erzähl mir deinen idealen Samstag', duration: 15*60,
            hostNote: 'Eine:r erzählt 6 Minuten — konkret, von morgens bis abends. Andere:r hört nur zu. Dann tauschen.',
            description: 'Nicht, was du glaubst, was gut wäre. Was sich wirklich nach Zuhause anfühlt.',
            question: 'Wie sieht dein idealer Samstag aus — realistisch, nicht Urlaub?' },
          { name: 'Gemeinsamer Mix', title: 'Gemeinsam oder getrennt?', duration: 12*60,
            hostNote: 'Beide Bilder nebeneinander legen. Kein Verhandeln — erst mal nur sehen.',
            description: 'Der überraschende Teil: Viele Paare leben zusammen und tragen doch verschiedene ideale Tage in sich — einer braucht mehr Stille, die andere mehr Menschen; einer blüht morgens, die andere nachts. Das ist kein Problem, solange es ausgesprochen ist. Zum Problem wird es nur, wenn beide stillschweigend annehmen, der ideale Tag des anderen sähe aus wie der eigene.\n\nDie ehrliche Frage ist nicht „Wie kriegen wir denselben Tag hin?", sondern: Welche Teile wollen wir teilen — und welche dürfen jedem allein gehören?',
            question: 'Welche Teile unseres idealen Tages sind gemeinsam — welche dürfen getrennt sein?' },
          { name: 'Was fehlt', title: 'Der Vergleich mit heute', duration: 12*60,
            hostNote: 'Beide nacheinander, je 4 Minuten. Was merkt ihr jetzt, wo ihr eure idealen Tage neben die aktuellen Wochen legt?',
            description: 'Nicht Schuld, nicht Scham — nur Beobachtung. Was fehlt oft? Was ist zu viel?',
            question: 'Welches Element fehlt euch gerade am meisten — und merkt ihr das aneinander?' },
          { name: 'Geschenk', title: 'Was du heute schon gut machst', duration: 8*60,
            hostNote: 'Je ein Satz: „An deinem idealen Tag erkenne ich Folgendes schon heute — du lebst das…" Der andere antwortet nur mit „Danke".',
            description: 'Bevor wir planen, was fehlt — benennen wir, was schon da ist. Das verändert den Ton.',
            question: 'Was von deinem idealen Tag lebst du heute schon — und weißt es vielleicht gar nicht?' },
          { name: 'Stille', title: 'Zwei Minuten, inneres Bild', duration: 2*60,
            hostNote: 'Augen zu, wenn ihr mögt. Denkt an einen Moment aus eurem idealen Tag — versucht, ihn zu riechen, zu hören, zu spüren.',
            description: 'Aus Bildern wird Leben, nicht aus Listen.' },
          { name: 'Drehbuch', title: 'Der Dienstag, konkret', duration: 12*60,
            hostNote: 'Jede:r schreibt einen konkreten Tagesablauf für kommenden Dienstag — Stunde für Stunde, in Gegenwartsform. Danach zeigt ihr euch die Drehbücher.',
            description: 'Kein Traumtag ohne Verpflichtungen. Ein echter Dienstag, innerhalb dessen, was ihr habt — aber mit einem Flow-, einem Connection- und einem Stille-Moment eingebaut.',
            question: 'Wie sieht mein idealer Dienstag diese Woche aus — Stunde für Stunde? Und an welcher Stelle brauche ich deine Rückendeckung?' }
        ])
      }
    }
  },

  // =====================================================================
  // IN 10 JAHREN — Vier Säulen der Zukunft (Ort / Menschen / Arbeit / Selbst)
  // =====================================================================
  zehnjahre: {
    title: 'In 10 Jahren',
    category: 'Zukunft',
    lead: 'Eine Zeitreise nach vorn. Nicht: was willst du erreicht haben. Sondern: wer willst du geworden sein — und was fängt heute damit an?',
    image: 'images/zehnjahre.jpg',
    philosophy1: 'Der Psychologe Hal Hershfield hat gezeigt: Unser Gehirn behandelt das eigene zukünftige Ich wie einen Fremden — deshalb entscheiden wir so oft gegen es. Das Gegenmittel ist Konkretheit: Je lebendiger das Bild von dir in zehn Jahren, desto besser entscheidest du heute.',
    philosophy2: 'Wir schauen auf vier Säulen einer Zukunft: Ort (wo), Menschen (mit wem), Arbeit (woran) und Selbst (wer bist du geworden). Die Übung lebt von Konkretheit — keine Poesie, sondern ein Mittwoch im April 2036.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std. 20 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor wir anfangen', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys stumm auf einen Tisch. Drei gemeinsame Atemzüge.',
            description: 'Zukunft entsteht nicht im Drang, sondern in Ruhe. Gleich baust du ein konkretes Bild von dir in 10 Jahren. Dafür braucht es erst mal Stille.' },
          { name: 'Ankommen', title: 'Was würdest du heute deinem 18-jährigen Ich sagen?', duration: 10*60,
            hostNote: 'Reihum, ein warmer Satz. Nicht belehrend, nicht ironisch.',
            question: 'Was würdest du deinem jüngeren Ich heute sagen — als kurzer Satz?' },
          { name: 'Einstieg', title: 'Zehn Jahre sind lang. Und kurz.', duration: 7*60,
            hostNote: 'Host liest langsam vor. Dann Stille.',
            quote: { text: 'Wir behandeln unser zukünftiges Ich wie einen Fremden — und lassen es genau deshalb so oft im Stich.', author: 'Hal Hershfield (sinngemäß)' },
            description: 'Vor zehn Jahren warst du jemand anderes. Andere Stadt, andere Menschen, andere Fragen. In zehn Jahren wirst du wieder jemand anderes sein — egal, ob du es aktiv gestaltest oder nicht.\n\nDer Psychologe Hal Hershfield (UCLA) hat in einer viel zitierten Studie gezeigt: Wer sein zukünftiges Ich als „Fremde:n" empfindet, spart weniger, trifft impulsivere Entscheidungen, kümmert sich schlechter um die eigene Gesundheit. Wer es konkret sieht — Gesicht, Tag, Raum — verändert heute anders.\n\nHeute bauen wir ein konkretes Bild. Nicht perfekt, aber greifbar.' },
          { name: 'Säule Ort', title: 'Säule 1: Ort', duration: 5*60,
            hostNote: 'Reihum. Konkret, nicht „irgendwo wo es warm ist".',
            description: 'Wo wachst du auf in 10 Jahren? Nicht die Stadt — das Zimmer. Was siehst du aus dem Fenster? Wie kommst du ins Bad? Ist das Haus dein Haus, eine Wohnung, ein Zimmer auf Zeit?',
            question: 'Beschreib deinen Morgen — Aufwachen bis erster Kaffee. Wo bist du?' },
          { name: 'Säule Menschen', title: 'Säule 2: Menschen', duration: 5*60,
            hostNote: 'Einen Menschen pro Person benennen.',
            description: 'Wer ist morgens in deiner Nähe? Mit wem frühstückst du — oder frühstückst du allein? Wer ruft dich abends an? Wer weiß, wie es dir wirklich geht?',
            question: 'Welcher Mensch ist in 10 Jahren nah in deinem Alltag — und ist es jemand, den du heute schon kennst?' },
          { name: 'Säule Arbeit', title: 'Säule 3: Arbeit', duration: 5*60,
            hostNote: 'Nicht Jobtitel — Tätigkeit.',
            description: 'Woran arbeitest du? Was gibt dem Tag Struktur? Ist es angestellt, selbstständig, eine Mischung, etwas, das es heute noch nicht gibt? Fühlt es sich nach Beruf oder Berufung an?',
            question: 'Wenn jemand dich fragt, was du machst — was antwortest du in 10 Jahren?' },
          { name: 'Säule Selbst', title: 'Säule 4: Selbst', duration: 5*60,
            hostNote: 'Die schwierigste Säule. Ehrlich sein.',
            description: 'Wer bist du geworden als Person? Was hast du gelassen, was dazugewonnen? Welche heutige Sorge ist in 10 Jahren lächerlich? Welche Stärke hast du, die du heute noch nicht hast?',
            question: 'Wer bist du in 10 Jahren — und was unterscheidet dich vom heutigen Dich?' },
          { name: 'Dein Mittwoch', title: 'Ein Mittwoch in 10 Jahren', duration: 15*60,
            hostNote: 'Jede:r hat 3 Min zum Sammeln, dann reihum 2-3 Min pro Person. Konkret.',
            description: 'Nicht der große Zukunfts-Roman. Ein normaler Mittwoch, 16. April 2036. Du wachst auf. Wie sieht der Tag aus, von morgens bis abends? Wer ist da? Was tust du? Welche Kleidung? Welches Essen?',
            question: 'Beschreib deinen Mittwoch in 10 Jahren — so konkret wie möglich.' },
          { name: 'Das Dorf', title: 'Mit welchen Menschen bist du alt?', duration: 8*60,
            hostNote: 'Reihum, je 1 Min. Namen nennen, wo möglich.',
            description: 'Eine der härteren Fragen. Ein Leben wird gefärbt durch 10-15 Menschen, die einem nahe bleiben — Freund:innen, Familie, wichtige Kolleg:innen. Wer ist in deinem Dorf in 10 Jahren? Und: wer ist DRIN, obwohl du heute nicht dafür investierst? Beziehungen, die du jetzt nicht pflegst, sind in 10 Jahren meistens nicht mehr da.',
            question: 'Wer sind die 3-5 Menschen, die du in 10 Jahren unbedingt noch in deinem Leben haben willst — und wen von ihnen hast du zuletzt angerufen?' },
          { name: 'Rückwärts', title: 'Rückwärts planen', duration: 12*60,
            hostNote: 'Reihum, konkret.',
            description: 'Damit das Bild in 10 Jahren steht, muss irgendwann etwas anfangen. Rückwärts gedacht: Welche Weichen müssen in den nächsten 5 Jahren gestellt sein? Welche im nächsten Jahr? Welche in den nächsten 3 Monaten?',
            question: 'Was muss in den nächsten 12 Monaten passieren, damit dein 10-Jahres-Bild realistisch wird?' },
          { name: 'Wurzeln', title: 'Von wem ist dein Zukunftsbild geliehen?', duration: 10*60,
            hostNote: 'Reihum, je 1-2 Min. Nicht Schuld — Klarheit.',
            description: 'Unsere Zukunftsbilder kommen selten aus dem Nichts. Eltern, Milieu, Freundeskreis, Social Media, Bücher — irgendwo haben wir gesehen: „So soll ein gelungenes Leben aussehen." Manchmal trägt uns das. Manchmal zieht es uns vom Weg — in Richtungen, die uns fremd sind, wenn wir genau hinschauen.',
            question: 'Welcher Teil deines Zukunftsbildes ist wirklich deiner — und welcher ist geborgt?' },
          { name: 'Fear-Setting', title: 'Was wirst du in 10 Jahren bereuen?', duration: 7*60,
            hostNote: 'Reihum, ein Satz. Ehrlich, nicht performativ.',
            description: 'Tim Ferriss nennt diese Übung „Fear-Setting" — die Umkehr des Goal-Setting. Oft ist klarer, was wir nicht wollen, als was wir wollen. Die Antwort auf „Was würde ich in 10 Jahren bereuen, heute NICHT angefangen zu haben?" ist meistens präziser als jede Zielvision.',
            quote: { text: 'Wir leiden öfter in der Vorstellung als in der Wirklichkeit.', author: 'Seneca' },
            question: 'Was würdest du in 10 Jahren bereuen, wenn du es jetzt nicht beginnst?' },
          { name: 'Verzichten', title: 'Was wirst du dafür lassen?', duration: 7*60,
            hostNote: 'Reihum, kurz. Kein großes Opfer-Theater — einfach Benennen.',
            description: 'Jedes 10-Jahres-Bild verlangt ein Opfer. Mehr Zeit mit Kindern heißt weniger Karriere-Gas. Selbstständigkeit heißt weniger Sicherheit. Umzug heißt weniger Nähe zu heutigen Freunden. Wer die Schattenseite des Wunsches nicht mitdenkt, scheitert leise.',
            question: 'Was willst du heute noch — das in deinem 10-Jahres-Bild keinen Platz mehr hat?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Alle schließen die Augen. Vorstellung: ein konkreter Moment aus dem Mittwoch 2036 — Geruch, Licht, Temperatur.',
            description: 'Der Unterschied zwischen Plan und Wirklichkeit: Wirklichkeit hat Geruch.' },
          { name: 'Foto', title: 'Ein Foto aus 2036', duration: 8*60,
            hostNote: 'Jede:r beschreibt in 2 Min ein einziges Foto — wie aus einem Album. Reihum vortragen.',
            description: 'Keine Vision, kein Plan. Ein Foto aus deinem Mittwoch 2036: Wer ist drauf? Wo wurde es gemacht? Was ist gerade eben passiert? Je konkreter, desto echter wird die Zukunft.',
            question: 'Beschreibe in 5 Sätzen ein Foto aus deinem Mittwoch 2036.' },
          { name: 'Brief', title: 'Der Brief vom 2036er an das Heute', duration: 8*60,
            hostNote: 'Jede:r schreibt 4 Min still für sich. Nicht laut vorlesen.',
            description: 'Dreh die Perspektive: Was würde dein 2036er-Ich dir heute schreiben? Was würde er/sie dich nicht mehr lassen? Wofür würde er/sie sich bedanken, dass du heute angefangen hast?',
            question: 'Was schreibt dein 10-Jahres-Ich dir in 5 Sätzen?' },
          { name: 'Schritt', title: 'Der erste Move diese Woche', duration: 8*60,
            hostNote: 'Reihum, konkret. Auf Zettel — mitnehmen.',
            description: 'Hal Hershfield: „Das zukünftige Selbst wird Realität durch Handlungen der Gegenwart." Nicht eine neue Richtung — ein erster Schritt.',
            question: 'Welchen ersten, kleinen Schritt machst du diese Woche in Richtung deines 10-Jahres-Ich?' },
          { name: 'Wort', title: 'Ein Wort zum Abschied', duration: 4*60,
            hostNote: 'Reihum, ein Wort.',
            question: 'Ein Wort, mit dem du heute nach Hause gehst.' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 45 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor ihr anfangt', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys weg. Drei gemeinsame Atemzüge — ohne Kommentar.',
            description: 'Gebt euch diesen Moment, bevor es richtig losgeht — er ist der eigentliche Startschuss.' },
          { name: 'Ankommen', title: 'Dein 18-jähriges Ich', duration: 8*60,
            hostNote: 'Beide nacheinander.',
            question: 'Was würdest du deinem 18-jährigen Ich heute erzählen — in einem Satz?' },
          { name: 'Einstieg', title: 'Zehn Jahre — nah und weit', duration: 6*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Wir behandeln unser zukünftiges Ich wie einen Fremden — und lassen es genau deshalb so oft im Stich.', author: 'Hal Hershfield (sinngemäß)' },
            description: 'Zehn Jahre reichen, um fast alles zu ändern. Und sind nah genug, dass das, was wir heute tun, Spuren hinterlässt. Heute bauen wir gemeinsam konkrete Bilder von eurer Zukunft — und schauen, wo sich eure Wege kreuzen, wo nicht.' },
          { name: 'Vier Säulen', title: 'Die vier Säulen einer Zukunft', duration: 6*60,
            items: [
              { label: 'Ort', text: 'Wo wachst du auf? Was siehst du aus dem Fenster?' },
              { label: 'Menschen', text: 'Mit wem frühstückst du? Wer ist morgens nah?' },
              { label: 'Arbeit', text: 'Woran arbeitest du? Was gibt Struktur?' },
              { label: 'Selbst', text: 'Wer bist du geworden? Was hast du gelassen, was dazugewonnen?' }
            ] },
          { name: 'Dein Mittwoch', title: 'Erzähl mir deinen Mittwoch in 10 Jahren', duration: 18*60,
            hostNote: 'Eine:r erzählt 8 Minuten — konkret, von morgens bis abends. Andere:r hört nur zu. Dann tauschen.',
            description: 'Nicht das perfekte Leben. Ein normaler Mittwoch im April 2036. Was siehst du, wenn du morgens die Augen aufmachst?',
            question: 'Wie sieht dein Mittwoch in 10 Jahren aus — von 7 bis 22 Uhr?' },
          { name: 'Schnittmengen', title: 'Wo kreuzen sich eure Wege?', duration: 12*60,
            hostNote: 'Der ehrliche Teil. Beide abwechselnd.',
            description: 'Wenn ihr beide Bilder nebeneinander legt: wo ist die Überschneidung, und wo geht’s in verschiedene Richtungen? Kein Richtig oder Falsch — nur Klarheit.',
            question: 'Welcher Teil unserer 10-Jahres-Bilder ist gemeinsam — und welcher darf getrennt bleiben?' },
          { name: 'Rückwärts', title: 'Was muss nächstes Jahr passieren?', duration: 10*60,
            hostNote: 'Je eine Antwort pro Person.',
            description: 'Ein 10-Jahres-Bild ist schön. Aber wahr wird es in 12-Monats-Schritten.',
            question: 'Welche Weiche muss in den nächsten 12 Monaten umgelegt sein, damit dein Bild realistisch wird?' },
          { name: 'Fear-Setting', title: 'Was, wenn es schiefgeht?', duration: 10*60,
            hostNote: 'Je 4 Min pro Person. Der andere hört zu — und fragt am Ende nur: „Und was würdest du dann tun?"',
            quote: { text: 'Wir leiden öfter in der Vorstellung als in der Wirklichkeit.', author: 'Seneca' },
            description: 'Zwischen euch und euren Bildern steht selten ein echtes Hindernis — meistens eine unausgesprochene Angst. Tim Ferriss hat daraus eine Übung gemacht: die Angst nicht wegatmen, sondern durchbuchstabieren. Was genau wäre der schlimmste Fall? Wie wahrscheinlich ist er? Und was würdest du tun, wenn er wirklich einträte?\n\nAusgesprochene Ängste schrumpfen fast immer. Unausgesprochene wachsen.',
            question: 'Welche Angst hält dich am stärksten von deinem Bild ab — und was wäre, ehrlich, dein Plan B, wenn sie eintritt?' },
          { name: 'Stille', title: 'Zwei Minuten, die Zukunft spüren', duration: 2*60,
            hostNote: 'Augen zu. Stellt euch einen konkreten Moment aus eurem Mittwoch in 10 Jahren vor. Den Geruch, das Licht, die Temperatur.',
            description: 'Der Unterschied zwischen Plan und Wirklichkeit: Wirklichkeit hat Geruch.' },
          { name: 'Foto', title: 'Ein Foto aus der Zukunft', duration: 12*60,
            hostNote: 'Jede:r beschreibt ein einziges Foto aus der Zukunft — wie aus einem Album. 3 Minuten schreiben, 2 Minuten einander vorlesen. Der andere hört nur zu.',
            description: 'Keine Vision, kein Plan. Ein konkretes Foto: wer ist drauf, wo wurde es aufgenommen, was ist gerade eben passiert? Je konkreter, desto echter.',
            question: 'Beschreibe ein Foto aus deinem Mittwoch in 10 Jahren — in 5 Sätzen. Wer? Wo? Was passiert gerade?' },
          { name: 'Schritt', title: 'Der erste Move diese Woche', duration: 8*60,
            hostNote: 'Konkret, sichtbar. Aufschreiben auf Zettel, austauschen.',
            question: 'Was ist dein erster kleiner Schritt diese Woche — und wie kann ich dich dabei unterstützen?' },
          { name: 'Wort', title: 'Ein Wort zum Abschied', duration: 3*60,
            hostNote: 'Beide je ein Wort. Keine Begründung. Danach die Kerze zusammen auspusten.',
            question: 'Ein Wort, mit dem du aus diesem Abend gehst.' }
        ])
      }
    }
  }

,

  // =====================================================================
  // FRAGEABEND — Karten-Flow, Fragen nach Kategorien statt Stations-Reflexion
  // Anders als die Reflexions-Abende: leichter, spielerischer, kennenlernend.
  // =====================================================================
  frageabend: {
    title: 'Ein Abend mit guten Fragen',
    category: 'Frageabend',
    lead: 'Kein Thema, keine Landkarte — nur Fragen, die sich nicht jeden Tag stellen lassen. Ideal für neue Gruppen, Dates oder Freund:innen, die sich nochmal neu kennenlernen wollen.',
    image: 'images/frageabend.jpg',
    philosophy1: 'Gute Fragen tun etwas, was Aussagen nicht können: sie öffnen. Sie laden eine Person ein, von sich zu erzählen — ohne dass es sich wie Verhör anfühlt.',
    philosophy2: 'Dieser Abend hat keine Landkarte, kein Modell, keinen therapeutischen Bogen. Nur eine kuratierte Auswahl an Fragen, sortiert von leicht zu tief. Ihr entscheidet spontan, wer antwortet, wie lange, ob eine Frage übersprungen wird.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std. 25 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor wir anfangen', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys stumm auf einen Tisch am Rand. Drei gemeinsame Atemzüge.',
            description: 'Gute Fragen brauchen einen stillen Raum. Den markiert ihr jetzt — ohne Pathos, aber bewusst.' },
          { name: 'Ankommen', title: 'Wie kommst du heute an?', duration: 10*60,
            hostNote: 'Reihum, ein Wort oder ein kurzer Satz. Nicht mehr.',
            question: 'Welches Wort beschreibt am besten, wie du heute hier ankommst?' },
          { name: 'Einstieg', title: 'Wie dieser Abend funktioniert', duration: 6*60,
            hostNote: 'Host liest kurz vor, dann legt ihr los.',
            quote: { text: 'Viele Dinge zu wissen bedeutet noch nicht, sie zu verstehen.', author: 'Heraklit' },
            description: 'Wir haben heute kein Thema — nur Fragen. Der Host liest pro Runde eine Frage vor. Wer Lust hat, antwortet. Wenn du passen willst, sag „pass" — kein Problem. Keine Rückfragen, kein „aber bei dir…", einfach zuhören. Bei jeder Station gibt es 3–5 Fragen, du musst nicht auf alle antworten. Wichtig: Ehrlich sein ist besser als klug klingen.' },
          { name: 'Leichtes', title: 'Zum Einsteigen', duration: 15*60,
            hostNote: 'Eine Frage nach der anderen. Reihum oder wer zuerst Lust hat.',
            items: [
              { accent: 'Frage 1', text: 'Was ist eine kleine Sache im Alltag, die dich unverhältnismäßig glücklich macht?' },
              { accent: 'Frage 2', text: 'Was hast du zuletzt zum allerersten Mal in deinem Leben gemacht?' },
              { accent: 'Frage 3', text: 'Welche kleine Sache lässt dich sofort nostalgisch werden?' },
              { accent: 'Frage 4', text: 'Gibt es etwas, das andere Leute oft an dir falsch einschätzen?' },
              { accent: 'Frage 5', text: 'Was hat dich zuletzt zum Staunen gebracht?' }
            ] },
          { name: 'Über dich', title: 'Ein bisschen näher', duration: 18*60,
            hostNote: 'Jetzt etwas persönlicher. Wer passen will, passt.',
            items: [
              { accent: 'Frage 6', text: 'Wenn dein Leben gerade ein Buch wäre — welchen Titel hätte es?' },
              { accent: 'Frage 7', text: 'Welches „unsichtbare Tattoo“ trägst du — also welche Erfahrung prägt dich, obwohl man es dir nicht ansieht?' },
              { accent: 'Frage 8', text: 'Angenommen, du könntest einen Tag mit deinem 15-jährigen Ich verbringen — was würdet ihr besprechen?' },
              { accent: 'Frage 9', text: 'In welcher Version deiner selbst fühlst du dich am wohlsten — und wann warst du zuletzt dort?' },
              { accent: 'Frage 10', text: 'Welche Eigenschaft an dir möchtest du unbedingt behalten, selbst wenn du mal 100 Jahre alt bist?' }
            ] },
          { name: 'Menschen um dich', title: 'Die Menschen um dich', duration: 18*60,
            hostNote: 'Wird persönlich. Namen können anonym bleiben — was zählt, ist das Bild.',
            items: [
              { accent: 'Frage 11', text: 'Wen in deinem Leben würdest du gerne wieder anrufen, hast es aber zu lange nicht getan?' },
              { accent: 'Frage 12', text: 'Welche Eigenschaft deiner Eltern siehst du heute mit mehr Verständnis als früher?' },
              { accent: 'Frage 13', text: 'Was hast du jemandem zuletzt gesagt, was du schon länger hättest sagen sollen?' },
              { accent: 'Frage 14', text: 'Wem würdest du gerne noch einmal danken können — und wofür?' }
            ] },
          { name: 'Werte & Haltung', title: 'Wofür du stehst', duration: 18*60,
            hostNote: 'Tiefer. Zeit lassen zwischen den Antworten.',
            items: [
              { accent: 'Frage 15', text: 'Wenn du eine Sache an der Gesellschaft sofort ändern könntest — welche wäre das und warum?' },
              { accent: 'Frage 16', text: 'Welche Frage würdest du gerne mit „Ja" beantworten können, kannst es aber (noch) nicht?' },
              { accent: 'Frage 17', text: 'Gibt es eine Erfahrung, die sich erst wie ein Misserfolg angefühlt hat, sich aber als wertvolle Lektion entpuppte?' },
              { accent: 'Frage 18', text: 'Welche kleine Entscheidung in deinem Leben hat überraschend große Auswirkungen gehabt?' },
              { accent: 'Frage 19', text: 'Welche Rolle spielst du unbewusst in Gruppen — und passt sie noch zu dir?' }
            ] },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Alle schauen zur Kerze oder schließen die Augen. Nichts sagen — atmen.',
            description: 'Nach den letzten Fragen braucht es Luft. Was gerade im Raum war, wirkt länger, wenn ihr es nicht überdeckt.' },
          { name: 'Zeit & Spur', title: 'Zeit und was bleibt', duration: 15*60,
            hostNote: 'Ruhiger Abschnitt. Nicht antworten müssen — auch schweigen ist okay.',
            items: [
              { accent: 'Frage 20', text: 'Was nimmst du dir jedes Jahr vor, machst es aber nicht — und warum wahrscheinlich?' },
              { accent: 'Frage 21', text: 'Welcher Tag aus den letzten 12 Monaten war für dich besonders — und woran hast du das gemerkt?' },
              { accent: 'Frage 22', text: 'Wenn du wüsstest, dass dir genau ein Jahr bleibt — was würde sich sofort ändern, und was nicht?' },
              { accent: 'Frage 23', text: 'Was ist eine kleine tägliche Handlung, die dich stabil hält?' }
            ] },
          { name: 'Träume', title: 'Abenteuer & Träume', duration: 12*60,
            hostNote: 'Hier darf es groß werden.',
            items: [
              { accent: 'Frage 24', text: 'Was würdest du gerne ausprobieren, hast dich aber bisher nie getraut?' },
              { accent: 'Frage 25', text: 'Angenommen, du hättest ab morgen ein Jahr frei von allen Verpflichtungen und genug Geld — wie würdest du es verbringen?' },
              { accent: 'Frage 26', text: 'Was ist deine „andere Karriere“ — das Leben, das du auch hättest führen können?' }
            ] },
          { name: 'Zum Ausklingen', title: 'Leichte Abschluss-Runde', duration: 10*60,
            hostNote: 'Auflockerung vor dem Schluss.',
            items: [
              { accent: 'Frage 27', text: 'Welchen Moment deines Lebens würdest du gern noch einmal in Zeitlupe erleben?' },
              { accent: 'Frage 28', text: 'Welcher Satz, den jemand mal zu dir gesagt hat, ist geblieben?' },
              { accent: 'Frage 29', text: 'Welche kleine Geste von jemand anderem kann dich sofort für diese Person einnehmen?' }
            ] },
          { name: 'Abschluss', title: 'Deine Frage des Abends', duration: 10*60,
            hostNote: 'Reihum, ein Satz.',
            question: 'Welche Frage hat dich heute am meisten beschäftigt — und wem außerhalb dieser Runde stellst du sie diese Woche weiter?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 30 Min.',
        people: '2 Personen (Date, Paar, Freundschaft)',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor ihr anfangt', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys weg. Drei gemeinsame Atemzüge — ohne Kommentar.',
            description: 'Gebt euch diesen Moment, bevor es richtig losgeht — er ist der eigentliche Startschuss.' },
          { name: 'Ankommen', title: 'Wie ist der Tag gelaufen?', duration: 8*60,
            hostNote: 'Beide nacheinander. 3 Minuten. Andere:r hört zu, ohne zu reagieren.',
            question: 'Wie geht es dir gerade — ehrlich, nicht höflich?' },
          { name: 'Einstieg', title: 'Wie das heute läuft', duration: 5*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Viele Dinge zu wissen bedeutet noch nicht, sie zu verstehen.', author: 'Heraklit' },
            description: 'Heute keine großen Themen. Nur Fragen. Abwechselnd: eine:r stellt, andere:r antwortet so lange wie es sich richtig anfühlt. Dann tauschen. „Pass“ geht immer — kein Druck, kein Drängen. Gut zuhören ist die eigentliche Kunst.' },
          { name: 'Kennenlernen', title: 'Ein bisschen näher', duration: 18*60,
            hostNote: 'Je 5 Minuten pro Frage. Wer mag, fragt nach.',
            items: [
              { accent: 'Frage 1', text: 'Wenn dein Leben gerade ein Buch wäre — welchen Titel hätte es?' },
              { accent: 'Frage 2', text: 'Welches „unsichtbare Tattoo“ trägst du — was prägt dich, obwohl man es dir nicht ansieht?' },
              { accent: 'Frage 3', text: 'Was hast du zuletzt zum allerersten Mal in deinem Leben gemacht?' },
              { accent: 'Frage 4', text: 'In welcher Version deiner selbst fühlst du dich am wohlsten — und wann warst du zuletzt dort?' }
            ] },
          { name: 'Werte', title: 'Tiefer rein', duration: 15*60,
            hostNote: 'Etwas länger Zeit lassen. Nachfragen ist erwünscht.',
            items: [
              { accent: 'Frage 5', text: 'Welche Erfahrung hat sich erst wie ein Misserfolg angefühlt — und war später eine wertvolle Lektion?' },
              { accent: 'Frage 6', text: 'Welche Frage würdest du gerne mit „Ja“ beantworten können, kannst es aber (noch) nicht?' },
              { accent: 'Frage 7', text: 'Welche kleine Entscheidung in deinem Leben hat überraschend große Auswirkungen gehabt?' }
            ] },
          { name: 'Menschen um dich', title: 'Die Menschen um dich', duration: 15*60,
            hostNote: 'Wird persönlich. Keine Namen nötig — das Bild zählt.',
            items: [
              { accent: 'Frage 8', text: 'Welche Person aus deinem Leben hat dich mehr geprägt, als sie selbst weiß?' },
              { accent: 'Frage 9', text: 'Was hast du jemandem zuletzt gesagt, was du schon länger hättest sagen sollen?' },
              { accent: 'Frage 10', text: 'In welcher Beziehung spürst du gerade, dass Aufmerksamkeit fehlt?' }
            ] },
          { name: 'Zeit & Spur', title: 'Zeit und was bleibt', duration: 12*60,
            hostNote: 'Ruhig. Zwischen den Fragen dürfen Pausen sein.',
            items: [
              { accent: 'Frage 11', text: 'Was nimmst du dir jedes Jahr vor, machst es aber nicht — und warum wahrscheinlich?' },
              { accent: 'Frage 12', text: 'Wenn du wüsstest, dass dir genau ein Jahr bleibt — was würde sich sofort ändern, was nicht?' },
              { accent: 'Frage 13', text: 'Was ist eine kleine tägliche Handlung, die dich stabil hält?' }
            ] },
          { name: 'Träume', title: 'Und wenn alles möglich wäre?', duration: 12*60,
            hostNote: 'Lass die Antwort ungeformt stehen — nicht gleich erklären.',
            items: [
              { accent: 'Frage 14', text: 'Was würdest du gerne ausprobieren, hast dich aber nie getraut?' },
              { accent: 'Frage 15', text: 'Wenn du ein Jahr frei hättest und genug Geld — wie würdest du es verbringen?' },
              { accent: 'Frage 16', text: 'Angenommen, dein zukünftiges Ich schreibt dir einen Brief — was würde darin stehen?' }
            ] },
          { name: 'Abschluss', title: 'Was heute bei dir hängen bleibt', duration: 8*60,
            hostNote: 'Ein Satz pro Person.',
            question: 'Welche Antwort von mir hat dich heute überrascht — und welche Frage möchtest du nochmal im Kopf haben?' }
        ])
      }
    }
  },

  // =====================================================================
  // FRAGEABEND: ARBEIT & BERUFUNG
  // =====================================================================
  frageabend_arbeit: {
    title: 'Frageabend: Arbeit & Berufung',
    category: 'Frageabend',
    lead: 'Ein Abend über das, was wir 40 Stunden pro Woche tun — und ob es uns noch gehört. Für Menschen, die sich fragen, ob ihr Job sie noch beheimatet.',
    image: 'images/frageabend-arbeit.jpg',
    philosophy1: 'Arbeit ist nicht nur Lohnerwerb. Sie strukturiert unsere Wochen, prägt unsere Identität, beantwortet die Frage „Was machst du eigentlich?“. Und doch sprechen wir selten ehrlich darüber.',
    philosophy2: 'An diesem Abend geht es nicht um Karriere-Coaching. Es geht um Reibung und Resonanz: wo gehört dir deine Arbeit noch, wo nicht? Wo hast du sie mal geliebt, wo nicht mehr?',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 30 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie geht es dir mit deiner Arbeit?', duration: 10*60,
            hostNote: 'Reihum, ein ehrlicher Satz. Nicht „läuft“ — was ist wirklich los?',
            question: 'Wie geht es dir mit deiner Arbeit gerade — in einem Satz?' },
          { name: 'Einstieg', title: 'Arbeit als Spiegel', duration: 6*60,
            hostNote: 'Host liest vor.',
            quote: { text: 'Arbeit ist die Suche nach täglichem Sinn ebenso wie nach täglichem Brot.', author: 'Studs Terkel' },
            description: 'Wir verbringen ein Drittel unserer wachen Zeit mit Arbeit. Sie ist Identität, Geld, Sinn, Frust, Berufung — manchmal alles gleichzeitig. Heute schauen wir ehrlich drauf: wie viel von dir steckt da drin? Wo gibt sie dir was zurück, wo nimmt sie nur?' },
          { name: 'Flow & Stillstand', title: 'Wann fließt deine Zeit?', duration: 18*60,
            hostNote: 'Eine Frage nach der anderen. Reihum.',
            items: [
              { accent: 'Frage 1', text: 'Wann warst du zuletzt in deiner Arbeit so vertieft, dass du die Zeit vergessen hast — was hast du da gemacht?' },
              { accent: 'Frage 2', text: 'Welche Tätigkeit würdest du machen, auch wenn niemand dich dafür bezahlen würde?' },
              { accent: 'Frage 3', text: 'Wann hast du in deinem Job zuletzt einen echten Moment von Sinn gespürt — und wann das letzte Mal von Leere?' },
              { accent: 'Frage 4', text: 'Was frisst Energie in deiner Woche, ohne dass es einen klaren Output hat?' }
            ] },
          { name: 'Andere Karriere', title: 'Das parallele Leben', duration: 18*60,
            hostNote: 'Hier darf es spielerisch werden — aber bitte konkret.',
            items: [
              { accent: 'Frage 5', text: 'Was ist deine „andere Karriere“ — das Leben, das du auch hättest führen können?' },
              { accent: 'Frage 6', text: 'Wenn dein heutiges Ich mit 22 wäre — würde es deinen jetzigen Job wählen?' },
              { accent: 'Frage 7', text: 'Was würdest du tun, wenn Geld keine Rolle spielte — und was, wenn Status keine Rolle spielte? (Nicht dasselbe.)' },
              { accent: 'Frage 8', text: 'Welcher Beruf von Freund:innen oder Bekannten fasziniert dich heimlich?' }
            ] },
          { name: 'Sinn & Wert', title: 'Wofür arbeitest du eigentlich?', duration: 18*60,
            hostNote: 'Tieferer Abschnitt. Zeit lassen.',
            items: [
              { accent: 'Frage 9', text: 'Was ist die ehrlichste Antwort auf die Frage „Warum machst du diesen Job?“ — jenseits von Geld?' },
              { accent: 'Frage 10', text: 'Wenn du in 20 Jahren auf dein Berufsleben zurückblickst — woran wirst du es messen?' },
              { accent: 'Frage 11', text: 'Was machst du heute, was dich in 10 Jahren wahrscheinlich nicht mehr ausfüllt?' },
              { accent: 'Frage 12', text: 'Wenn du eine Person ein Jahr lang in deinen Job einarbeiten müsstest — was würdest du sagen, was wirklich wichtig ist? Nicht im Lehrplan.' }
            ] },
          { name: 'Schritt', title: 'Eine kleine Veränderung', duration: 10*60,
            hostNote: 'Reihum. Konkret, nicht groß.',
            question: 'Welche eine Sache an deiner Arbeit könntest du diese Woche anders machen — und was würde das verändern?' },
          { name: 'Abschluss', title: 'Was du mitnimmst', duration: 10*60,
            hostNote: 'Ein Wort oder ein Satz.',
            question: 'Welche Frage hat dich heute am meisten beschäftigt — und was tust du damit?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie ist deine Arbeitswoche?', duration: 7*60,
            hostNote: 'Beide nacheinander, 3 Min. Andere:r hört zu.',
            question: 'Wie geht es dir gerade mit deiner Arbeit?' },
          { name: 'Einstieg', title: 'Arbeit als Spiegel', duration: 5*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Arbeit ist die Suche nach täglichem Sinn ebenso wie nach täglichem Brot.', author: 'Studs Terkel' },
            description: 'Ein Drittel unserer wachen Zeit. Identität, Geld, Sinn, Frust. Heute schauen wir gemeinsam, was dir Arbeit gerade gibt — und nimmt.' },
          { name: 'Flow', title: 'Wann fließt die Zeit?', duration: 15*60,
            hostNote: 'Je 7 Minuten pro Frage.',
            items: [
              { accent: 'Frage 1', text: 'Wann warst du zuletzt in deiner Arbeit so vertieft, dass du die Zeit vergessen hast?' },
              { accent: 'Frage 2', text: 'Welche Tätigkeit würdest du machen, auch wenn niemand dich dafür bezahlen würde?' }
            ] },
          { name: 'Andere Karriere', title: 'Das parallele Leben', duration: 15*60,
            hostNote: 'Hier darf es spielerisch werden.',
            items: [
              { accent: 'Frage 3', text: 'Was ist deine „andere Karriere“ — das Leben, das du auch hättest führen können?' },
              { accent: 'Frage 4', text: 'Was würdest du tun, wenn Geld keine Rolle spielte — und was, wenn Status keine Rolle spielte?' }
            ] },
          { name: 'Sinn', title: 'Wofür arbeitest du eigentlich?', duration: 15*60,
            hostNote: 'Tiefer. Nachfragen ist erlaubt.',
            items: [
              { accent: 'Frage 5', text: 'Was ist die ehrlichste Antwort auf die Frage „Warum machst du diesen Job?“?' },
              { accent: 'Frage 6', text: 'Wenn du in 20 Jahren zurückblickst — woran wirst du dein Berufsleben messen?' }
            ] },
          { name: 'Abschluss', title: 'Eine Veränderung', duration: 8*60,
            hostNote: 'Konkret, sichtbar.',
            question: 'Welche eine Sache wirst du diese Woche anders machen — und wie kann ich dich dabei unterstützen?' }
        ])
      }
    }
  },

  // =====================================================================
  // FRAGEABEND: STILLE BEREICHE
  // Achtung: nur für vertraute Gruppen!
  // =====================================================================
  frageabend_tief: {
    title: 'Frageabend: Stille Bereiche',
    category: 'Frageabend',
    lead: 'Für Gruppen, die sich kennen. Fragen, die im normalen Gespräch nie gestellt werden — und manchmal das Wichtigste sind. Bitte nur, wenn ihr einander vertraut.',
    image: 'images/kerze.jpg',
    philosophy1: 'Es gibt einen Bereich in jedem Menschen, der selten Worte bekommt: die leise Sorge, das ungesagte „eigentlich“, die Frage, die wir uns nicht selbst stellen wollen.',
    philosophy2: 'Dieser Abend ist nicht für jede Gruppe. Er funktioniert nur, wenn ihr einander vertraut — keine erste Begegnung, keine Networking-Runde. Was hier gesagt wird, bleibt im Raum. „Pass“ ist immer okay, oft sogar das Richtige.',
    formats: {
      group: {
        label: 'Kleine Gruppe (Vertraut)',
        duration: '~1 Std. 40 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Womit kommst du heute hier an?', duration: 12*60,
            hostNote: 'Reihum, ein ehrlicher Satz. Auch Schwere darf da sein.',
            question: 'Was hast du diese Woche mit dir herumgetragen, was du noch niemandem erzählt hast?' },
          { name: 'Einstieg', title: 'Was wir uns nicht erzählen', duration: 8*60,
            hostNote: 'Host liest langsam vor. Danach 1 Minute Stille.',
            quote: { text: 'Die Menschen sind wie bunte Glasfenster: Sie funkeln und leuchten, wenn die Sonne scheint; doch nach Anbruch der Dunkelheit wird ihre wahre Schönheit nur offenbar, wenn sie ein inneres Licht haben.', author: 'Elisabeth Kübler-Ross' },
            description: 'In jedem Menschen gibt es einen Bereich, der selten Worte bekommt. Eine Sorge, eine Sehnsucht, ein „eigentlich“, das nie ausgesprochen wird. Heute schaffen wir Raum für genau das. Nicht alles muss geteilt werden. Aber das Ungesagte darf hier landen, wenn es will.\n\nWichtig: keine Bewertung. Kein Ratschlag. Nur zuhören. Was hier gesagt wird, bleibt im Raum.' },
          { name: 'Was du nicht aussprichst', title: 'Was du selten sagst', duration: 18*60,
            hostNote: 'Eine Frage nach der anderen. Pause vor dem Antworten erlaubt — und „pass“ jederzeit.',
            items: [
              { accent: 'Frage 1', text: 'Worüber denkst du abends manchmal nach, was du tagsüber verdrängst?' },
              { accent: 'Frage 2', text: 'Was würdest du sagen, wenn niemand zuhörte — und du wüsstest, dass es keine Folgen hat?' },
              { accent: 'Frage 3', text: 'Welche Frage hast du Angst, dir selbst zu stellen?' }
            ] },
          { name: 'Ängste', title: 'Was dich klein macht', duration: 18*60,
            hostNote: 'Tiefer. Achte auf den Energie-Level der Gruppe.',
            items: [
              { accent: 'Frage 4', text: 'Was ist eine Sorge, die du mit anderen nicht teilst — und warum nicht?' },
              { accent: 'Frage 5', text: 'Wovor hast du heimlich Angst, was die meisten Menschen wahrscheinlich nicht ahnen?' },
              { accent: 'Frage 6', text: 'Was wäre, wenn deine größte Angst tatsächlich einträte — wie würde dein Leben aussehen?' }
            ] },
          { name: 'Was bleibt unausgesprochen', title: 'Worüber du nie redest', duration: 18*60,
            hostNote: 'Achtsam. Wer pause braucht, bekommt sie.',
            items: [
              { accent: 'Frage 7', text: 'Was hast du noch nie jemandem erzählt, was eigentlich Erzählens wert wäre?' },
              { accent: 'Frage 8', text: 'Welches Gefühl trägst du oft mit dir, ohne es zu benennen?' },
              { accent: 'Frage 9', text: 'Welche Beziehung in deinem Leben fühlt sich gerade nicht gut an, und du sprichst nicht darüber?' }
            ] },
          { name: 'Was hält dich', title: 'Und was trägt dich trotzdem', duration: 12*60,
            hostNote: 'Wechsel der Energie — von schwer zu hell. Das ist wichtig nach den vorigen Fragen.',
            items: [
              { accent: 'Frage 10', text: 'Welcher Satz, den jemand mal zu dir gesagt hat, trägt dich noch heute?' },
              { accent: 'Frage 11', text: 'Was ist eine kleine tägliche Handlung, die dich stabil hält?' },
              { accent: 'Frage 12', text: 'Welche Person würde es merken, wenn du plötzlich nicht mehr da wärst — und merkst du es bei ihr?' }
            ] },
          { name: 'Abschluss', title: 'Was bleibt', duration: 10*60,
            hostNote: 'Reihum, ein Satz oder ein Wort. Was hier gesagt wurde, bleibt hier.',
            question: 'Was nimmst du aus diesem Abend mit — und was lässt du hier?' }
        ])
      },
      pair: {
        label: 'Zu zweit (Vertraut)',
        duration: '~1 Std. 15 Min.',
        people: '2 Personen, die einander vertrauen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie ehrlich bist du heute?', duration: 8*60,
            hostNote: 'Beide nacheinander.',
            question: 'Was hast du diese Woche mit dir herumgetragen, was du noch niemandem erzählt hast?' },
          { name: 'Einstieg', title: 'Raum für das Ungesagte', duration: 5*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Die Schönheit und Heiligkeit des Lebens erschließt sich in der Tiefe, nicht in der Vielzahl der Beschäftigungen.', author: 'Johannes Hartl' },
            description: 'Heute keine kleinen Fragen. Wir öffnen einen Raum für das, was selten gesagt wird. Beide haben gleich viel Platz, beide hören gleich gut zu. „Pass“ ist okay. Was hier gesagt wird, bleibt zwischen uns.' },
          { name: 'Was du nicht aussprichst', title: 'Was du selten sagst', duration: 18*60,
            hostNote: 'Je 8 Minuten erzählen, der andere nur zuhören.',
            items: [
              { accent: 'Frage 1', text: 'Worüber denkst du abends nach, was du tagsüber verdrängst?' },
              { accent: 'Frage 2', text: 'Welche Frage hast du Angst, dir selbst zu stellen?' }
            ] },
          { name: 'Ängste', title: 'Was dich klein macht', duration: 15*60,
            hostNote: 'Achtsam.',
            items: [
              { accent: 'Frage 3', text: 'Was ist eine Sorge, die du mit anderen nicht teilst — und warum nicht?' },
              { accent: 'Frage 4', text: 'Wovor hast du heimlich Angst, was die meisten Menschen wahrscheinlich nicht ahnen?' }
            ] },
          { name: 'Was hält dich', title: 'Und was trägt dich', duration: 12*60,
            hostNote: 'Aufhellen, nicht abrupt.',
            items: [
              { accent: 'Frage 5', text: 'Welcher Satz, den jemand mal zu dir gesagt hat, trägt dich noch heute?' },
              { accent: 'Frage 6', text: 'Welche kleine tägliche Handlung hält dich stabil?' }
            ] },
          { name: 'Abschluss', title: 'Was zwischen uns bleibt', duration: 8*60,
            hostNote: 'Ein Satz pro Person.',
            question: 'Was hat sich heute zwischen uns verändert — und was nehme ich mit?' }
        ])
      }
    }
  },

  // =====================================================================
  // FRAGEABEND: HUMOR & ABSURDES
  // =====================================================================
  frageabend_humor: {
    title: 'Frageabend: Humor & Absurdes',
    category: 'Frageabend',
    lead: 'Wenn der ernste Abend einfach nicht passt. Fragen, die Quatsch erlauben — und durch Quatsch oft mehr verraten als ehrliche Antworten.',
    image: 'images/wein.jpg',
    philosophy1: 'Manchmal ist der gerade Weg in einen Menschen die völlig schräge Frage. „Welches Tier wird komplett überschätzt?“ verrät oft mehr als „Was machst du beruflich?“.',
    philosophy2: 'Heute kein psychologisches Tiefbohren — sondern hypothetische Szenarien, paradoxe Wahlen und Alltagsphilosophie. Lacht viel. Aber hört auch auf das, was hinter dem Lachen liegt.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 20 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie albern bist du heute?', duration: 8*60,
            hostNote: 'Reihum, eine Geste oder ein Geräusch reicht.',
            question: 'Auf einer Skala von „bügelfeucht“ bis „Karneval“ — wo bist du heute?' },
          { name: 'Einstieg', title: 'Quatsch ist auch Erkenntnis', duration: 4*60,
            hostNote: 'Eine:r liest schnell vor.',
            quote: { text: 'Der einzige Mensch, der sich vernünftig benimmt, ist mein Schneider. Er nimmt jedesmal neu Maß, wenn er mich trifft.', author: 'George Bernard Shaw' },
            description: 'Heute keine Tiefseetauchgänge. Hypothetische Szenarien, absurde Präferenzen, Pop-Kultur-Dechiffrierung. Wer am schnellsten antwortet, gewinnt nichts. Wer kreativ scheitert, gewinnt alle.' },
          { name: 'Hypothetisch', title: 'Wenn das wahr wäre…', duration: 18*60,
            hostNote: 'Schnelle Runden. Nicht groß überlegen.',
            items: [
              { accent: 'Frage 1', text: 'Welche historische Figur würde im Gruppenchat ständig auf „Nachricht gelesen“ machen — und warum gerade die?' },
              { accent: 'Frage 2', text: 'Bei einer Zombie-Apokalypse: Welches völlig unnütze Hobby würde dich überleben lassen?' },
              { accent: 'Frage 3', text: 'Du erbst ein Schloss — verlost es als Instagram-Gewinnspiel oder gründest eine Sekte? Erkläre den Plan.' },
              { accent: 'Frage 4', text: 'Welche zwei Promis würdest du zu einer Dinner-Party einladen, damit sie sich streiten?' }
            ] },
          { name: 'Absurde Wahlen', title: 'Paradoxe Präferenzen', duration: 15*60,
            hostNote: 'Eine Wahl treffen, kurz begründen.',
            items: [
              { accent: 'Frage 5', text: 'Würdest du lieber ein Jahr lang nur durch GIFs kommunizieren — oder jeden Satz mit einer Lüge beginnen?' },
              { accent: 'Frage 6', text: 'Alle deine Fotos sehen ab heute aus wie Stockbilder — oder jedes Gespräch beginnt mit „Schon mal im Gefängnis gewesen?“' },
              { accent: 'Frage 7', text: 'Dein Kühlschrank reproduziert mysteriös eine Zutat unbegrenzt — welche soll es sein und warum?' },
              { accent: 'Frage 8', text: 'Würdest du lieber wissen, wann du stirbst — oder wie?' }
            ] },
          { name: 'Pop & Kultur', title: 'Medien, neu sortiert', duration: 15*60,
            hostNote: 'Frech sein erlaubt.',
            items: [
              { accent: 'Frage 9', text: 'Welcher Film müsste neu verfilmt werden — aber als TikTok-Tanzchallenge?' },
              { accent: 'Frage 10', text: 'Welche Sportart sollte mit völlig falschen Regeln olympisch werden?' },
              { accent: 'Frage 11', text: 'Womit kann man dich sofort glücklich machen, das keine fünf Euro kostet?' },
              { accent: 'Frage 12', text: 'Welche App sollte dringend eine „Das war Sarkasmus!“-Autokorrektur einführen?' }
            ] },
          { name: 'Alltag absurd', title: 'Banales neu gedacht', duration: 12*60,
            hostNote: 'Beobachtungsgabe vor Witz.',
            items: [
              { accent: 'Frage 13', text: 'Welche völlig normale Handlung wirkt auf dich wie ein Verbrechen? (z.B. Jemand sortiert Äpfel im Supermarkt um.)' },
              { accent: 'Frage 14', text: 'Welche völlig sinnlose Fähigkeit hast du in den letzten Jahren perfektioniert?' },
              { accent: 'Frage 15', text: 'Welcher Wikipedia-Artikel sollte gelöscht werden, um maximales Chaos zu verursachen?' }
            ] },
          { name: 'Abschluss', title: 'Und was war wirklich?', duration: 8*60,
            hostNote: 'Kurzer Tonwechsel: Welche Frage hat unter dem Quatsch etwas Echtes gezeigt?',
            question: 'Welche absurde Antwort heute hat dir am meisten über jemanden verraten?' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~50 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie albern bist du heute?', duration: 5*60,
            hostNote: 'Eine Geste oder ein Geräusch reicht.',
            question: 'Auf einer Skala von „bügelfeucht“ bis „Karneval“ — wo bist du?' },
          { name: 'Einstieg', title: 'Quatsch ist auch Erkenntnis', duration: 4*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Der einzige Mensch, der sich vernünftig benimmt, ist mein Schneider.', author: 'George Bernard Shaw' },
            description: 'Heute keine Tiefseetauchgänge. Schräge Fragen, alberne Antworten, ehrliches Lachen. Beide gleich viel Platz, beide gleich frei zu spinnen.' },
          { name: 'Hypothetisch', title: 'Wenn das wahr wäre…', duration: 12*60,
            hostNote: 'Wer schneller antwortet, gewinnt nichts.',
            items: [
              { accent: 'Frage 1', text: 'Welche historische Figur würde im Gruppenchat ständig auf „Nachricht gelesen“ machen?' },
              { accent: 'Frage 2', text: 'Du erbst ein Schloss — was machst du damit?' },
              { accent: 'Frage 3', text: 'Welche zwei Promis würdest du zu einer Dinner-Party einladen, damit sie sich streiten?' }
            ] },
          { name: 'Paradoxe Wahlen', title: 'Entweder — oder', duration: 12*60,
            hostNote: 'Schnell wählen, kurz begründen.',
            items: [
              { accent: 'Frage 4', text: 'Würdest du lieber ein Jahr lang nur durch GIFs kommunizieren — oder jeden Satz mit einer Lüge beginnen?' },
              { accent: 'Frage 5', text: 'Würdest du lieber wissen, wann du stirbst — oder wie?' },
              { accent: 'Frage 6', text: 'Dein Kühlschrank reproduziert eine Zutat unbegrenzt — welche?' }
            ] },
          { name: 'Pop', title: 'Medien neu sortiert', duration: 10*60,
            hostNote: 'Frech sein erlaubt.',
            items: [
              { accent: 'Frage 7', text: 'Welche kleine Eigenart von dir fällt erst auf, wenn man mit dir wohnt?' },
              { accent: 'Frage 8', text: 'Welcher Film müsste als TikTok-Tanzchallenge neu verfilmt werden?' },
              { accent: 'Frage 9', text: 'Welche App sollte dringend eine „Das war Sarkasmus!“-Autokorrektur einführen?' }
            ] },
          { name: 'Abschluss', title: 'Und was war wirklich?', duration: 5*60,
            hostNote: 'Tonwechsel: kurz ehrlich.',
            question: 'Welche absurde Antwort von mir heute hat dir am meisten über mich verraten?' }
        ])
      }
    }
  },

  // =====================================================================
  // ACHTZIG  — Was würde mein 80-jähriges Ich sagen?
  // =====================================================================
  frageabend_wurzeln: {
    title: 'Frageabend: Woher ich komme',
    category: 'Frageabend',
    lead: 'Ein Abend über Herkunft — Elternhaus, Kindheit, die Sätze, die man mitbekommt, ohne sie je zu hören. Für Runden, die wissen wollen, aus welchem Holz die anderen geschnitzt sind.',
    image: 'images/heimat.jpg',
    philosophy1: 'Niemand fängt bei null an. Wir tragen Sätze mit uns, die nie ausgesprochen wurden, Gerüche, die uns sofort zurückwerfen, und Regeln, die wir längst abgelegt zu haben glauben — bis wir sie bei uns selbst hören.',
    philosophy2: 'An diesem Abend geht es nicht um Familientherapie. Es geht um Neugier: Woher kommt eigentlich das, was du für selbstverständlich hältst? Und was davon willst du behalten?',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 45 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wo kommst du her — wirklich?', duration: 10*60,
            hostNote: 'Reihum, ein Satz. Kein Lebenslauf — ein Ort, ein Geräusch, ein Gefühl.',
            question: 'Wenn du an das Zuhause deiner Kindheit denkst: Was ist das Erste, was auftaucht?',
            teaser: 'Ein Satz zum Ankommen.'
          },
          { name: 'Einstieg', title: 'Das Gepäck, das niemand gepackt hat', duration: 6*60,
            hostNote: 'Host liest vor.',
            quote: { text: 'Was wir nicht in Worte fassen, geben wir in Gesten weiter.', author: 'Anne Ancelin Schützenberger' },
            description: 'Herkunft ist nicht nur, wo man geboren wurde. Es sind die Tischsitten, die Lautstärke beim Streiten, die Frage, ob über Geld gesprochen wurde. Vieles davon merkt man erst, wenn man zum ersten Mal bei einer anderen Familie am Tisch sitzt.',
            teaser: 'Warum Herkunft mehr ist als ein Ort.'
          },
          { name: 'Das Haus', title: 'Was drinnen normal war', duration: 18*60,
            hostNote: 'Eine Frage nach der anderen, reihum. Bei den stillen Antworten nicht drängen.',
            items: [
              { accent: 'Frage 1', text: 'Was galt in deiner Familie als völlig normal — und erst viel später hast du gemerkt, dass es das gar nicht ist?' },
              { accent: 'Frage 2', text: 'Welcher Satz wurde in deinem Elternhaus nie gesagt — und wie hat diese Stille dich geprägt?' },
              { accent: 'Frage 3', text: 'Welches Geräusch aus deinem Elternhaus würdest du unter tausend anderen wiedererkennen?' },
              { accent: 'Frage 4', text: 'Wurde bei euch über Geld gesprochen — und wie?' }
            ],
            teaser: 'Was hinter eurer Haustür normal war.'
          },
          { name: 'Die Erwachsenen', title: 'Wer sie waren, bevor du kamst', duration: 18*60,
            hostNote: 'Ruhiger Abschnitt. Zeit lassen, nicht kommentieren.',
            items: [
              { accent: 'Frage 5', text: 'Was hat deine Eltern geprägt, das sich bei dir fortgesetzt hat — ob du willst oder nicht?' },
              { accent: 'Frage 6', text: 'Welche Regel deiner Eltern hast du gehasst — und ertappst dich heute dabei, sie selbst zu verteidigen?' },
              { accent: 'Frage 7', text: 'Wer in deiner Familie versteht dich am wenigsten — und wer am meisten?' },
              { accent: 'Frage 8', text: 'Was hättest du als Kind gebraucht, das du nicht bekommen hast?' }
            ],
            teaser: 'Die Menschen, die da waren.'
          },
          { name: 'Stille', title: 'Ein Moment für das, was hochkam', duration: 5*60,
            hostNote: 'Wirklich schweigen. Zwei Minuten fühlen sich lang an — das ist der Punkt. Danach darf, wer mag, einen Satz sagen. Muss aber nicht.',
            description: 'Bei Herkunftsfragen kommt manchmal mehr hoch als erwartet. Diese Minuten gehören dem, was sich gerade gemeldet hat.',
            teaser: 'Kurz nichts sagen.'
          },
          { name: 'Das Kind', title: 'Wer du warst', duration: 15*60,
            hostNote: 'Hier darf gelacht werden. Die leichteren Fragen nach dem schweren Teil.',
            items: [
              { accent: 'Frage 9', text: 'Welchen Beruf wolltest du werden, bevor du überhaupt wusstest, was ein Beruf ist?' },
              { accent: 'Frage 10', text: 'Worauf warst du als Kind so richtig stolz?' },
              { accent: 'Frage 11', text: 'Welche Geschichte wird in deiner Familie bis heute immer wieder erzählt?' },
              { accent: 'Frage 12', text: 'Was war der größte Mist, den du als Jugendlicher gebaut hast?' }
            ],
            teaser: 'Das Kind, das du mal warst.'
          },
          { name: 'Weitergeben', title: 'Was mitkommt, was bleibt', duration: 15*60,
            hostNote: 'Reihum. Auch für Menschen ohne Kinder — es geht um alles, was man weitergibt.',
            items: [
              { accent: 'Frage 13', text: 'Was aus deiner Herkunft willst du unbedingt weitergeben?' },
              { accent: 'Frage 14', text: 'Und was soll bei dir enden?' }
            ],
            teaser: 'Was weiterwandert — und was aufhört.'
          },
          { name: 'Schritt', title: 'Ein Anruf, ein Satz, eine Frage', duration: 10*60,
            hostNote: 'Konkret und klein. Diese Woche, nicht irgendwann.',
            question: 'Wen aus deiner Familie könntest du diese Woche etwas fragen, das du noch nie gefragt hast?',
            teaser: 'Etwas, das diese Woche passt.'
          },
          { name: 'Abschluss', title: 'Was du mitnimmst', duration: 8*60,
            hostNote: 'Ein Wort oder ein Satz. Reihum.',
            question: 'Welche Frage von heute wirst du morgen noch mit dir herumtragen?',
            teaser: 'Ein Wort zum Schluss.'
          },
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 10 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wo kommst du her?', duration: 8*60,
            hostNote: 'Beide nacheinander, je 3-4 Min.',
            question: 'Wenn du an das Zuhause deiner Kindheit denkst — was taucht als Erstes auf?'
          },
          { name: 'Einstieg', title: 'Das Gepäck, das niemand gepackt hat', duration: 5*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Was wir nicht in Worte fassen, geben wir in Gesten weiter.', author: 'Anne Ancelin Schützenberger' },
            description: 'Herkunft ist mehr als ein Ort: Tischsitten, Streitlautstärke, ob über Geld gesprochen wurde. Vieles merkt man erst, wenn man woanders am Tisch sitzt.'
          },
          { name: 'Das Haus', title: 'Was drinnen normal war', duration: 15*60,
            hostNote: 'Je 7 Minuten pro Frage.',
            items: [
              { accent: 'Frage 1', text: 'Was galt in deiner Familie als völlig normal — und du hast erst später gemerkt, dass es das nicht ist?' },
              { accent: 'Frage 2', text: 'Welcher Satz wurde bei euch nie gesagt — und was hat diese Stille mit dir gemacht?' }
            ]
          },
          { name: 'Die Erwachsenen', title: 'Wer sie waren, bevor du kamst', duration: 15*60,
            hostNote: 'Ruhig. Nachfragen erlaubt.',
            items: [
              { accent: 'Frage 3', text: 'Was hat deine Eltern geprägt, das sich bei dir fortgesetzt hat?' },
              { accent: 'Frage 4', text: 'Was hättest du als Kind gebraucht, das du nicht bekommen hast?' }
            ]
          },
          { name: 'Das Kind', title: 'Wer du warst', duration: 12*60,
            hostNote: 'Leichter jetzt. Ruhig lachen.',
            items: [
              { accent: 'Frage 5', text: 'Worauf warst du als Kind so richtig stolz?' },
              { accent: 'Frage 6', text: 'Welche Geschichte wird in deiner Familie bis heute erzählt?' }
            ]
          },
          { name: 'Weitergeben', title: 'Was bleibt, was endet', duration: 10*60,
            hostNote: 'Beide, nacheinander.',
            question: 'Was aus deiner Herkunft willst du weitergeben — und was soll bei dir enden?'
          },
          { name: 'Abschluss', title: 'Was du mitnimmst', duration: 8*60,
            hostNote: 'Ein Satz.',
            question: 'Was hast du heute über den anderen erfahren, das dich überrascht hat?'
          },
        ])
      },
      solo: {
        label: 'Allein',
        duration: '~30 Min.',
        people: 'Nur du',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Ein Moment für dich', duration: 3*60,
            hostNote: 'Stift und Papier. Kein Handy.',
            description: 'Herkunft anzuschauen geht auch allein — manchmal sogar ehrlicher, weil niemand zuhört.'
          },
          { name: 'Einstieg', title: 'Das Gepäck', duration: 4*60,
            quote: { text: 'Was wir nicht in Worte fassen, geben wir in Gesten weiter.', author: 'Anne Ancelin Schützenberger' },
            description: 'Die Sätze, die nie gesagt wurden, wirken oft länger als die, die gesagt wurden.'
          },
          { name: 'Das Haus', title: 'Was normal war', duration: 6*60,
            hostNote: 'Schreib auf, was kommt. Nicht sortieren.',
            question: 'Was galt in deiner Familie als völlig normal — und war es das gar nicht?'
          },
          { name: 'Die Stille', title: 'Was nie gesagt wurde', duration: 6*60,
            hostNote: 'Diese Frage braucht Zeit. Lass sie wirken, bevor du schreibst.',
            question: 'Welcher Satz wurde in deinem Elternhaus nie gesagt — und wie hat diese Stille dich geprägt?'
          },
          { name: 'Das Kind', title: 'Was du gebraucht hättest', duration: 6*60,
            hostNote: 'Freundlich mit dir bleiben.',
            question: 'Was hättest du als Kind gebraucht, das du nicht bekommen hast — und wer könnte es dir heute geben?'
          },
          { name: 'Mitnahme', title: 'Was bleibt, was endet', duration: 5*60,
            hostNote: 'Ein Satz, aufgeschrieben.',
            question: 'Was aus deiner Herkunft willst du weitergeben — und was soll bei dir enden?'
          },
        ])
      }
    }
  },
  frageabend_menschen: {
    title: 'Frageabend: Die Menschen in meinem Leben',
    category: 'Frageabend',
    lead: 'Ein Abend über die, die uns geprägt haben — Freundschaften, die blieben, und die, die still verschwanden. Für Runden, in denen es um mehr gehen darf als um Namen.',
    image: 'images/kaffee.jpg',
    philosophy1: 'Wir reden ständig über Menschen — aber selten über das, was sie mit uns machen. Wessen Urteil wiegt schwer? Wem gegenüber verstellen wir uns? Und welche Freundschaft ist eigentlich gerade dabei, leise zu enden?',
    philosophy2: 'Dieser Abend ist kein Beziehungsinventar. Er stellt die Fragen, die man sich sonst nur nachts stellt — und beantwortet sie einmal laut, unter Menschen, die zuhören.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 45 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wer ist gerade wichtig?', duration: 10*60,
            hostNote: 'Reihum, ein Name oder eine Beschreibung — ohne Erklärung. Die kommt später.',
            question: 'An welchen Menschen hast du in dieser Woche am häufigsten gedacht?',
            teaser: 'Ein Name zum Ankommen.'
          },
          { name: 'Einstieg', title: 'Wir werden aneinander', duration: 6*60,
            hostNote: 'Host liest vor.',
            quote: { text: 'Alles wirkliche Leben ist Begegnung.', author: 'Martin Buber' },
            description: 'Wir entstehen nicht allein. Wer wir sind, hat viel damit zu tun, wer uns angeschaut hat — und wie. Heute geht es um diese Menschen: die nahen, die verlorenen, die, an die wir denken, ohne es zu sagen.',
            teaser: 'Worum es heute geht.'
          },
          { name: 'Die Nahen', title: 'Wer dich kennt', duration: 18*60,
            hostNote: 'Eine Frage nach der anderen, reihum. Nicht bewerten, was andere sagen.',
            items: [
              { accent: 'Frage 1', text: 'Bei wem bist du die beste Version von dir — und was genau macht diese Person mit dir?' },
              { accent: 'Frage 2', text: 'Mit welchem Menschen fühlst du dich ohne Worte verstanden?' },
              { accent: 'Frage 3', text: 'Wer in deinem Leben weiß etwas über dich, das sonst niemand weiß?' },
              { accent: 'Frage 4', text: 'Wessen Lachen würdest du unter tausend anderen erkennen?' }
            ],
            teaser: 'Die, die dich wirklich kennen.'
          },
          { name: 'Die Macht', title: 'Wessen Blick zählt', duration: 18*60,
            hostNote: 'Der ehrlichste Abschnitt. Wer passen will, sagt „pass“.',
            items: [
              { accent: 'Frage 5', text: 'Wessen Urteil über dich hat mehr Macht, als dir lieb ist?' },
              { accent: 'Frage 6', text: 'Wem gegenüber hast du dich am meisten verstellt — und warum?' },
              { accent: 'Frage 7', text: 'Mit wem führst du im Kopf Gespräche, die ihr in Wirklichkeit nie führt — und worüber?' },
              { accent: 'Frage 8', text: 'Wen hast du in deinem Leben unterschätzt?' }
            ],
            teaser: 'Wessen Meinung schwerer wiegt, als sie sollte.'
          },
          { name: 'Stille', title: 'Ein Moment für die Abwesenden', duration: 5*60,
            hostNote: 'Zwei Minuten schweigen. Wer mag, sagt danach einen Namen — nur den Namen, ohne Geschichte.',
            description: 'Bei diesen Fragen sind immer Menschen mit im Raum, die nicht da sind. Diese Minuten gehören ihnen.',
            teaser: 'Kurz an die denken, die fehlen.'
          },
          { name: 'Die Verlorenen', title: 'Was still zu Ende ging', duration: 18*60,
            hostNote: 'Ruhig. Hier braucht niemand eine Lösung — nur Zuhören.',
            items: [
              { accent: 'Frage 9', text: 'Welche Freundschaft hat sich still verabschiedet, ganz ohne Streit — und vermisst du sie?' },
              { accent: 'Frage 10', text: 'Wem schuldest du eine Entschuldigung, die du nie ausgesprochen hast?' },
              { accent: 'Frage 11', text: 'Wen vermisst du, ohne es je zu sagen?' },
              { accent: 'Frage 12', text: 'Welche Person hat dich am meisten liebgehabt — und weiß sie das eigentlich?' }
            ],
            teaser: 'Was leise aufgehört hat.'
          },
          { name: 'Schritt', title: 'Eine Nachricht, die rausgeht', duration: 10*60,
            hostNote: 'Konkret. Wer mag, schreibt die Nachricht direkt hier — Handys sind für diese fünf Minuten ausdrücklich erlaubt.',
            question: 'Wem schreibst du heute Abend noch eine Nachricht — und was steht drin?',
            teaser: 'Eine Nachricht, jetzt.'
          },
          { name: 'Abschluss', title: 'Was du mitnimmst', duration: 8*60,
            hostNote: 'Ein Wort oder Satz, reihum.',
            question: 'Welcher Mensch hat dich heute Abend am häufigsten begleitet, ohne hier zu sein?',
            teaser: 'Ein Wort zum Schluss.'
          },
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 10 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wer ist gerade wichtig?', duration: 8*60,
            hostNote: 'Beide nacheinander.',
            question: 'An welchen Menschen hast du diese Woche am häufigsten gedacht?'
          },
          { name: 'Einstieg', title: 'Wir werden aneinander', duration: 5*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Alles wirkliche Leben ist Begegnung.', author: 'Martin Buber' },
            description: 'Wer wir sind, hat viel damit zu tun, wer uns angeschaut hat — und wie.'
          },
          { name: 'Die Nahen', title: 'Wer dich kennt', duration: 15*60,
            hostNote: 'Je 7 Minuten pro Frage.',
            items: [
              { accent: 'Frage 1', text: 'Bei wem bist du die beste Version von dir — und was macht diese Person mit dir?' },
              { accent: 'Frage 2', text: 'Wer in deinem Leben weiß etwas über dich, das sonst niemand weiß?' }
            ]
          },
          { name: 'Die Macht', title: 'Wessen Blick zählt', duration: 15*60,
            hostNote: 'Ehrlich werden. „Pass“ ist erlaubt.',
            items: [
              { accent: 'Frage 3', text: 'Wessen Urteil über dich hat mehr Macht, als dir lieb ist?' },
              { accent: 'Frage 4', text: 'Wem gegenüber hast du dich am meisten verstellt — und warum?' }
            ]
          },
          { name: 'Die Verlorenen', title: 'Was still zu Ende ging', duration: 15*60,
            hostNote: 'Ruhig. Zuhören reicht.',
            items: [
              { accent: 'Frage 5', text: 'Welche Freundschaft hat sich still verabschiedet, ganz ohne Streit?' },
              { accent: 'Frage 6', text: 'Wem schuldest du eine Entschuldigung, die du nie ausgesprochen hast?' }
            ]
          },
          { name: 'Schritt', title: 'Eine Nachricht', duration: 8*60,
            hostNote: 'Handys für fünf Minuten erlaubt.',
            question: 'Wem schreibst du heute Abend noch — und was steht drin?'
          },
          { name: 'Abschluss', title: 'Was du mitnimmst', duration: 6*60,
            hostNote: 'Ein Satz.',
            question: 'Was hast du heute über den anderen erfahren, das du noch nicht wusstest?'
          },
        ])
      },
      solo: {
        label: 'Allein',
        duration: '~30 Min.',
        people: 'Nur du',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Ein Moment für dich', duration: 3*60,
            hostNote: 'Stift und Papier.',
            description: 'Über Menschen nachzudenken geht allein oft ehrlicher — weil niemand mithört, wen du nennst.'
          },
          { name: 'Einstieg', title: 'Wir werden aneinander', duration: 4*60,
            quote: { text: 'Alles wirkliche Leben ist Begegnung.', author: 'Martin Buber' },
            description: 'Wer dich angeschaut hat, hat mitgebaut an dem, was du heute bist.'
          },
          { name: 'Die Nahen', title: 'Wer dich kennt', duration: 6*60,
            hostNote: 'Schreib die Namen auf. Auch die, die dich überraschen.',
            question: 'Bei wem bist du die beste Version von dir — und was macht diese Person mit dir?'
          },
          { name: 'Die Macht', title: 'Wessen Blick zählt', duration: 6*60,
            hostNote: 'Ehrlich. Das liest niemand.',
            question: 'Wessen Urteil über dich hat mehr Macht, als dir lieb ist?'
          },
          { name: 'Die Abwesenden', title: 'Wer fehlt', duration: 6*60,
            hostNote: 'Zeit lassen.',
            question: 'Wen vermisst du, ohne es je zu sagen — und was hält dich davon ab?'
          },
          { name: 'Mitnahme', title: 'Eine Nachricht', duration: 5*60,
            hostNote: 'Wenn du magst: schreib sie jetzt wirklich.',
            question: 'Wem schreibst du heute noch eine Nachricht — und was steht drin?'
          },
        ])
      }
    }
  },
  frageabend_zukunft: {
    title: 'Frageabend: Was noch kommt',
    category: 'Frageabend',
    lead: 'Ein Abend über Träume, Pläne und das, was man sich nicht zu sagen traut. Für Runden, die nach vorne schauen wollen — ohne Fünfjahresplan-Ernst.',
    image: 'images/nachthimmel.jpg',
    philosophy1: 'Über die Zukunft reden wir meistens in Terminen: nächster Urlaub, nächstes Projekt. Selten darüber, was wir eigentlich wollen — und noch seltener über das, was wir uns nicht mehr zu wollen trauen.',
    philosophy2: 'Dieser Abend ist kein Zielsetzungs-Workshop. Er macht Platz für die Sätze, die mit „Eigentlich würde ich gern…“ anfangen — und schaut, was sie mit euch machen, wenn sie einmal laut im Raum stehen.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 40 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Worauf freust du dich?', duration: 10*60,
            hostNote: 'Reihum, ein Satz. Etwas Kleines reicht völlig.',
            question: 'Worauf freust du dich in den nächsten Wochen — auch wenn es winzig ist?',
            teaser: 'Ein Satz zum Ankommen.'
          },
          { name: 'Einstieg', title: 'Die Zukunft als Möglichkeit', duration: 6*60,
            hostNote: 'Host liest vor.',
            quote: { text: 'Man muss das Mögliche tun, damit das Unmögliche sichtbar wird.', author: null },
            description: 'Zukunft ist kein Ort, an dem wir irgendwann ankommen — sie ist das, was wir uns heute überhaupt zutrauen zu denken. Heute Abend denken wir größer als sonst. Und ehrlicher.',
            teaser: 'Warum es heute größer werden darf.'
          },
          { name: 'Das Ungesagte', title: 'Träume, die noch nie laut waren', duration: 18*60,
            hostNote: 'Reihum. Nach jeder Antwort kurz Stille lassen, bevor der nächste dran ist.',
            items: [
              { accent: 'Frage 1', text: 'Gibt es einen Traum, den du noch nie laut ausgesprochen hast?' },
              { accent: 'Frage 2', text: 'Was würdest du sofort anfangen, wenn du sicher wüsstest, dass niemand es bewertet?' },
              { accent: 'Frage 3', text: 'Welchen Traum hast du so lange aufgeschoben, dass er sich inzwischen fast fremd anfühlt?' },
              { accent: 'Frage 4', text: 'Welchen kleinen Luxus wünschst du dir im Alltag — und erlaubst ihn dir trotzdem nicht?' }
            ],
            teaser: 'Was noch nie laut war.'
          },
          { name: 'Die Angst', title: 'Was dich hält', duration: 18*60,
            hostNote: 'Ruhiger Abschnitt. Nicht trösten, nicht lösen — zuhören.',
            items: [
              { accent: 'Frage 5', text: 'Welche Version deiner Zukunft macht dir mehr Angst: dass alles so bleibt, wie es ist — oder dass sich alles ändert?' },
              { accent: 'Frage 6', text: 'Was hält dich davon ab, das zu machen, wovon du träumst? Die ehrliche Antwort, nicht die vernünftige.' },
              { accent: 'Frage 7', text: 'Wovon glaubst du, dass es zu spät dafür ist — und stimmt das wirklich?' }
            ],
            teaser: 'Was dazwischen steht.'
          },
          { name: 'Der Ort', title: 'Wo du landen willst', duration: 15*60,
            hostNote: 'Hier darf es wieder leichter werden.',
            items: [
              { accent: 'Frage 8', text: 'An welchem Ort würdest du gern alt werden — und an welchem auf keinen Fall?' },
              { accent: 'Frage 9', text: 'Welche Reise willst du unbedingt noch machen — und was würde sie an dir verändern?' },
              { accent: 'Frage 10', text: 'Wenn du ein Buch schreiben würdest: wovon würde es handeln?' }
            ],
            teaser: 'Wo es hingehen soll.'
          },
          { name: 'Der Stuhl', title: 'In fünf Jahren, hier', duration: 12*60,
            hostNote: 'Reihum, jede:r beantwortet für sich. Das ist die Kernfrage des Abends — Zeit lassen.',
            question: 'In fünf Jahren sitzt du wieder hier, in genau dieser Runde. Was muss bis dahin passiert sein, damit du zufrieden bist?',
            teaser: 'Die Kernfrage des Abends.'
          },
          { name: 'Schritt', title: 'Der erste kleine Zug', duration: 10*60,
            hostNote: 'Klein und konkret. Diese Woche, nicht dieses Jahr.',
            question: 'Was ist der allerkleinste Schritt in Richtung deines Traums, den du diese Woche gehen könntest?',
            teaser: 'Etwas, das diese Woche geht.'
          },
          { name: 'Abschluss', title: 'Was du mitnimmst', duration: 8*60,
            hostNote: 'Ein Wort. Reihum.',
            question: 'Mit welchem Satz gehst du heute nach Hause?',
            teaser: 'Ein Wort zum Schluss.'
          },
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 5 Min.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Worauf freust du dich?', duration: 8*60,
            hostNote: 'Beide nacheinander.',
            question: 'Worauf freust du dich in den nächsten Wochen — auch wenn es klein ist?'
          },
          { name: 'Einstieg', title: 'Die Zukunft als Möglichkeit', duration: 5*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Man muss das Mögliche tun, damit das Unmögliche sichtbar wird.', author: null },
            description: 'Zukunft ist das, was wir uns heute zutrauen zu denken. Heute denken wir größer — und ehrlicher.'
          },
          { name: 'Das Ungesagte', title: 'Träume, die noch nie laut waren', duration: 15*60,
            hostNote: 'Je 7 Minuten. Nach der Antwort kurz Stille.',
            items: [
              { accent: 'Frage 1', text: 'Gibt es einen Traum, den du noch nie laut ausgesprochen hast?' },
              { accent: 'Frage 2', text: 'Was würdest du sofort anfangen, wenn du wüsstest, dass niemand es bewertet?' }
            ]
          },
          { name: 'Die Angst', title: 'Was dich hält', duration: 15*60,
            hostNote: 'Nicht lösen. Zuhören.',
            items: [
              { accent: 'Frage 3', text: 'Was macht dir mehr Angst: dass alles so bleibt — oder dass sich alles ändert?' },
              { accent: 'Frage 4', text: 'Was hält dich wirklich davon ab? Die ehrliche Antwort, nicht die vernünftige.' }
            ]
          },
          { name: 'Der Stuhl', title: 'In fünf Jahren, hier', duration: 12*60,
            hostNote: 'Beide, je 5-6 Min. Die Kernfrage.',
            question: 'In fünf Jahren sitzt ihr wieder hier. Was muss bis dahin passiert sein, damit du zufrieden bist?'
          },
          { name: 'Schritt', title: 'Der erste kleine Zug', duration: 8*60,
            hostNote: 'Konkret. Und: fragt euch in einem Monat nach.',
            question: 'Was ist der kleinste Schritt, den du diese Woche gehen könntest?'
          },
          { name: 'Abschluss', title: 'Was du mitnimmst', duration: 6*60,
            hostNote: 'Ein Satz.',
            question: 'Mit welchem Satz gehst du heute nach Hause?'
          },
        ])
      },
      solo: {
        label: 'Allein',
        duration: '~30 Min.',
        people: 'Nur du',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Ein Moment für dich', duration: 3*60,
            hostNote: 'Stift und Papier, kein Handy.',
            description: 'Über die eigene Zukunft nachzudenken funktioniert allein oft am ehrlichsten — keiner hört mit, keiner bewertet.'
          },
          { name: 'Einstieg', title: 'Die Zukunft als Möglichkeit', duration: 4*60,
            quote: { text: 'Man muss das Mögliche tun, damit das Unmögliche sichtbar wird.', author: null },
            description: 'Was du dir heute zutraust zu denken, ist die Grenze dessen, was möglich wird.'
          },
          { name: 'Das Ungesagte', title: 'Der Traum ohne Publikum', duration: 6*60,
            hostNote: 'Schreib ihn wirklich auf. Papier vergisst nicht.',
            question: 'Gibt es einen Traum, den du noch nie laut ausgesprochen hast — und was hält dich davon ab?'
          },
          { name: 'Die Angst', title: 'Was dich hält', duration: 6*60,
            hostNote: 'Die ehrliche Antwort, nicht die vernünftige.',
            question: 'Was macht dir mehr Angst: dass alles so bleibt, oder dass sich alles ändert?'
          },
          { name: 'Der Stuhl', title: 'In fünf Jahren', duration: 6*60,
            hostNote: 'Nimm dir die vollen Minuten.',
            question: 'In fünf Jahren schaust du auf heute zurück. Was muss passiert sein, damit du zufrieden bist?'
          },
          { name: 'Mitnahme', title: 'Der erste Zug', duration: 5*60,
            hostNote: 'Ein Schritt, aufgeschrieben, mit Datum.',
            question: 'Was ist der allerkleinste Schritt, den du diese Woche gehen könntest?'
          },
        ])
      }
    }
  },
  frageabend_ehrlich: {
    title: 'Frageabend: Kleine Wahrheiten',
    category: 'Frageabend',
    lead: 'Ein Abend über die unspektakulären Ehrlichkeiten — die ungelesene Nachricht, die Trostmahlzeit, das Ding, das du absichtlich nicht reparierst. Leicht im Ton, überraschend tief im Ergebnis.',
    image: 'images/stilleben.jpg',
    philosophy1: 'Die großen Fragen sind nicht immer die ergiebigsten. Manchmal erfährt man mehr über einen Menschen, wenn man ihn fragt, was er kocht, wenn es ihm schlecht geht — als wenn man nach seinen Werten fragt.',
    philosophy2: 'Dieser Abend sammelt die kleinen, schrägen, banalen Ehrlichkeiten. Er startet zum Lachen und endet oft erstaunlich nah. Genau deshalb funktioniert er auch in Runden, die sich noch nicht gut kennen.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~1 Std. 35 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie geht\'s dir — wirklich?', duration: 8*60,
            hostNote: 'Reihum. Beide Antworten laut sagen: erst die höfliche, dann die ehrliche.',
            question: 'Was sagst du, wenn jemand fragt, wie es dir geht — und was wäre die ehrliche Antwort?',
            teaser: 'Zwei Antworten auf eine Frage.'
          },
          { name: 'Einstieg', title: 'Die kleinen Wahrheiten', duration: 6*60,
            hostNote: 'Host liest vor.',
            quote: { text: 'Man sieht nur mit dem Herzen gut. Das Wesentliche ist für die Augen unsichtbar.', author: 'Antoine de Saint-Exupéry' },
            description: 'Heute geht es nicht um die großen Themen. Es geht um das, was zwischen den großen Themen passiert: die Nachricht, die du seit Tagen nicht beantwortest. Das Essen, das du kochst, wenn es dir schlecht geht. Die Uhrzeit, die sich anders anfühlt als alle anderen.',
            teaser: 'Warum die kleinen Fragen die besten sind.'
          },
          { name: 'Was du nicht zugibst', title: 'Die schrägen Ehrlichkeiten', duration: 18*60,
            hostNote: 'Schnell und leicht. Wer lacht, lacht — das gehört dazu.',
            items: [
              { accent: 'Frage 1', text: 'Welche Nachricht markierst du seit Tagen als ungelesen, weil die Antwort zu anstrengend wäre?' },
              { accent: 'Frage 2', text: 'Was googelst du regelmäßig, obwohl du die Antwort längst kennst?' },
              { accent: 'Frage 3', text: 'Wann hast du zuletzt begeistert genickt, obwohl du kein einziges Wort verstanden hast?' },
              { accent: 'Frage 4', text: 'Was war die letzte Lüge, die du erzählt hast — auch eine ganz kleine?' }
            ],
            teaser: 'Die Sachen, die man nicht zugibt.'
          },
          { name: 'Was dich tröstet', title: 'Die kleinen Rettungen', duration: 18*60,
            hostNote: 'Der Ton wird wärmer. Zeit lassen, nachfragen erlaubt.',
            items: [
              { accent: 'Frage 5', text: 'Welches Essen kochst du dir, wenn du Trost brauchst — und wer hat es dir zum ersten Mal gemacht?' },
              { accent: 'Frage 6', text: 'Welche kleine Routine hält dich stabil, wenn gerade wenig stabil ist?' },
              { accent: 'Frage 7', text: 'Welcher Gegenstand in deiner Wohnung hat dich am längsten begleitet — und warum ist er noch da?' },
              { accent: 'Frage 8', text: 'Welchen kaputten Gegenstand reparierst du absichtlich nicht — und was hängt daran?' }
            ],
            teaser: 'Was hilft, wenn es nicht läuft.'
          },
          { name: 'Was dich verrät', title: 'Die Spuren der anderen', duration: 18*60,
            hostNote: 'Hier wird es unerwartet nah. Nicht drängen.',
            items: [
              { accent: 'Frage 9', text: 'Welche Geste deiner Eltern machst du nach, ohne dass du es merkst?' },
              { accent: 'Frage 10', text: 'Welcher Geruch reißt dich sofort in eine ganz konkrete Erinnerung — und in welche?' },
              { accent: 'Frage 11', text: 'Welcher Satz, den jemand mal zu dir gesagt hat, läuft seitdem wie eine Hintergrundmusik mit?' },
              { accent: 'Frage 12', text: 'Welche Uhrzeit hat für dich eine ganz eigene Stimmung — und woher kommt das?' }
            ],
            teaser: 'Woran man sieht, wer dich geprägt hat.'
          },
          { name: 'Was du nicht erzählst', title: 'Das Schöne, das keiner weiß', duration: 10*60,
            hostNote: 'Ruhige Schlussrunde vor dem Abschluss. Reihum, ohne Kommentar.',
            question: 'Wann hast du zuletzt etwas Schönes gesehen und es niemandem erzählt — was war es?',
            teaser: 'Etwas Schönes, das keiner weiß.'
          },
          { name: 'Abschluss', title: 'Was du mitnimmst', duration: 8*60,
            hostNote: 'Ein Wort oder ein Satz.',
            question: 'Welche kleine Wahrheit von heute Abend bleibt dir im Kopf?',
            teaser: 'Ein Wort zum Schluss.'
          },
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std.',
        people: '2 Personen',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Wie geht\'s dir — wirklich?', duration: 8*60,
            hostNote: 'Beide: erst die höfliche Antwort, dann die ehrliche.',
            question: 'Was sagst du, wenn jemand fragt wie\'s geht — und was wäre die ehrliche Antwort?'
          },
          { name: 'Einstieg', title: 'Die kleinen Wahrheiten', duration: 5*60,
            hostNote: 'Eine:r liest vor.',
            quote: { text: 'Man sieht nur mit dem Herzen gut. Das Wesentliche ist für die Augen unsichtbar.', author: 'Antoine de Saint-Exupéry' },
            description: 'Heute geht es um das, was zwischen den großen Themen passiert — und dabei oft mehr verrät.'
          },
          { name: 'Was du nicht zugibst', title: 'Die schrägen Ehrlichkeiten', duration: 15*60,
            hostNote: 'Schnell, leicht, im Wechsel.',
            items: [
              { accent: 'Frage 1', text: 'Welche Nachricht markierst du seit Tagen als ungelesen — und warum?' },
              { accent: 'Frage 2', text: 'Was war die letzte kleine Lüge, die du erzählt hast?' }
            ]
          },
          { name: 'Was dich tröstet', title: 'Die kleinen Rettungen', duration: 15*60,
            hostNote: 'Wärmer jetzt. Nachfragen erlaubt.',
            items: [
              { accent: 'Frage 3', text: 'Welches Essen kochst du dir, wenn du Trost brauchst — und wer hat es dir zuerst gemacht?' },
              { accent: 'Frage 4', text: 'Welche kleine Routine hält dich stabil, wenn wenig stabil ist?' }
            ]
          },
          { name: 'Was dich verrät', title: 'Die Spuren der anderen', duration: 12*60,
            hostNote: 'Unerwartet nah. Zeit lassen.',
            items: [
              { accent: 'Frage 5', text: 'Welche Geste deiner Eltern machst du nach, ohne es zu merken?' },
              { accent: 'Frage 6', text: 'Welcher Satz von früher läuft bei dir bis heute wie Hintergrundmusik mit?' }
            ]
          },
          { name: 'Abschluss', title: 'Das Schöne, das keiner weiß', duration: 8*60,
            hostNote: 'Zum Schluss, beide.',
            question: 'Wann hast du zuletzt etwas Schönes gesehen und niemandem davon erzählt?'
          },
        ])
      },
      solo: {
        label: 'Allein',
        duration: '~25 Min.',
        people: 'Nur du',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Ein Moment für dich', duration: 3*60,
            hostNote: 'Stift und Papier.',
            description: 'Die kleinen Fragen sind allein oft die ehrlichsten — weil man sich vor sich selbst schlechter rausreden kann.'
          },
          { name: 'Einstieg', title: 'Die kleinen Wahrheiten', duration: 4*60,
            quote: { text: 'Man sieht nur mit dem Herzen gut. Das Wesentliche ist für die Augen unsichtbar.', author: 'Antoine de Saint-Exupéry' },
            description: 'Was zwischen den großen Themen passiert, verrät oft mehr als die großen Themen selbst.'
          },
          { name: 'Die höfliche Antwort', title: 'Was du sagst, was du meinst', duration: 5*60,
            hostNote: 'Beide Antworten aufschreiben. Der Unterschied ist der Punkt.',
            question: 'Was sagst du, wenn jemand fragt wie\'s geht — und was wäre die ehrliche Antwort?'
          },
          { name: 'Der Trost', title: 'Was hilft', duration: 5*60,
            hostNote: 'Schreib auch auf, wer es dir beigebracht hat.',
            question: 'Welches Essen kochst du dir, wenn du Trost brauchst — und wer hat es dir zum ersten Mal gemacht?'
          },
          { name: 'Die Spur', title: 'Wer in dir mitläuft', duration: 5*60,
            hostNote: 'Zeit lassen. Da kommt oft mehr als erwartet.',
            question: 'Welcher Satz, den jemand mal zu dir gesagt hat, läuft seitdem wie Hintergrundmusik mit?'
          },
          { name: 'Mitnahme', title: 'Das Schöne, das keiner weiß', duration: 4*60,
            hostNote: 'Und: erzähl es heute noch jemandem.',
            question: 'Wann hast du zuletzt etwas Schönes gesehen und niemandem davon erzählt?'
          },
        ])
      }
    }
  },
  achtzig: {
    title: 'Was würde mein 80-jähriges Ich sagen?',
    category: 'Lebensperspektive',
    lead: 'Eine einzige Perspektive lässt vieles klein wirken, was sonst groß tut: die der eigenen Zukunft. Heute borgt ihr euch die Augen einer 80-jährigen Version von euch selbst — nicht morbide, sondern wachrüttelnd.',
    image: 'images/achtzig.jpg',
    audio: true,
    philosophy1: 'Wir treffen unsere wichtigsten Entscheidungen aus einer extrem schmalen Perspektive: aus dem Moment heraus, mit dem Druck der nächsten zwei Wochen im Nacken. Was uns fast immer fehlt, ist die zweite Stimme: die Person, die wir in 40 oder 50 Jahren sein werden.',
    philosophy2: 'Diese Person ist nicht weiser als ihr. Sie hat nur weiter gesehen. Sie weiß, welche Sorgen sich aufgelöst haben, welche Beziehungen gehalten haben, welcher Mut sich ausgezahlt hat. Heute lasst ihr sie sprechen — und schaut, was sie heute zu euch sagen würde.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std. 25 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor wir anfangen', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys stumm auf einen Tisch. Drei gemeinsame Atemzüge.',
            description: 'Die Stimme, die wir heute zu Wort kommen lassen, ist leise. Sie kommt nur, wenn der Raum ruhig genug ist.' },
          { name: 'Ankommen', title: 'Wie geht es dir, hier und jetzt?', duration: 8*60,
            hostNote: 'Reihum, 1–2 Sätze. Keine Rückfragen.',
            question: 'Wie geht es dir gerade — und was beschäftigt dich diese Woche am meisten?' },
          { name: 'Einstieg', title: 'Die Stimme, die fehlt', duration: 6*60,
            hostNote: 'Audio abspielen oder eine Person liest vor. Danach 1 Minute Stille.',
            quote: { text: 'Lebe nicht so, als hättest du noch zehntausend Jahre Zeit.', author: 'Marc Aurel' },
            description: 'Wir treffen unsere wichtigsten Entscheidungen meistens aus einer ungeduldigen Mitte heraus: dringend, eng, getrieben von dem, was diese Woche zählt.\n\nWas dabei fehlt, ist eine Stimme, die wir alle in uns tragen, aber selten zu Wort kommen lassen: die der Person, die wir in 40 oder 50 Jahren sein werden. Heute borgen wir uns ihre Augen.' },
          { name: 'Die Fünf', title: 'Die fünf häufigsten Bereuen', duration: 7*60,
            hostNote: 'Host liest vor. Keine Diskussion — einfach landen lassen.',
            description: 'Die australische Palliativschwester Bronnie Ware hat hunderte Menschen in den letzten Wochen ihres Lebens begleitet. Auf die Frage, was sie bereuen, hörte sie fünf Dinge am häufigsten:',
            items: [
              { label: '1.', text: 'Ich wünschte, ich hätte den Mut gehabt, mein eigenes Leben zu leben — nicht das Leben, das andere von mir erwarteten.' },
              { label: '2.', text: 'Ich wünschte, ich hätte nicht so viel gearbeitet.' },
              { label: '3.', text: 'Ich wünschte, ich hätte den Mut gehabt, meine Gefühle auszudrücken.' },
              { label: '4.', text: 'Ich wünschte, ich hätte mit meinen Freund:innen mehr Kontakt gehalten.' },
              { label: '5.', text: 'Ich wünschte, ich hätte mir erlaubt, glücklicher zu sein.' }
            ] },
          { name: 'Ankunft', title: 'Stell dir dein 80-jähriges Ich vor', duration: 10*60,
            hostNote: 'Audio anhören (gerne mit geschlossenen Augen) oder selbst vorlesen — langsam. Danach 2 Minuten Stille.',
            description: 'Stell dir vor: Es ist Morgen. Du bist 80 Jahre alt. Du sitzt irgendwo, wo du dich wohlfühlst — am Fenster, auf einer Bank, in deiner Küche. Was siehst du? Wie sitzt du? Was riechst du? Was hast du vor dir auf dem Tisch?\n\nNimm dir einen Moment, dieses Bild wirklich zu sehen. Nicht das ideale Bild — sondern das, das auftaucht, wenn du nicht steuerst.\n\nDieses ältere Ich weiß, was aus dir geworden ist. Es hat alles erlebt, was zwischen heute und damals lag. Es hat keine Eile mehr. Es schaut dich, dein heutiges Du, freundlich an.\n\nUnd jetzt fängt es an zu sprechen.' },
          { name: 'Stolz', title: 'Wofür würde es dich beneiden?', duration: 10*60,
            hostNote: 'Reihum, je 1-2 Min. Nicht: „Was läuft gut." Sondern: Was wird mit 80 nicht mehr selbstverständlich sein?',
            description: 'Manches, was wir heute selbstverständlich finden — dass wir laufen können, dass wir uns spontan verlieben können, dass es noch Jahrzehnte zu gestalten gibt — wird mit 80 nicht mehr selbstverständlich sein. Was davon sieht dein älteres Ich besonders deutlich?',
            question: 'Wofür würde dich dein 80-jähriges Ich heute beneiden — um etwas, das dir selbst kaum noch auffällt?' },
          { name: 'Sorge', title: 'Worüber würde es weinen?', duration: 10*60,
            hostNote: 'Reihum. Nicht der dramatische Lebensfehler — der leise, der sich gerade einschleicht.',
            description: 'Manchmal sieht das ältere Ich etwas, das das heutige Ich noch ignorieren kann: eine Beziehung, die langsam einschläft. Eine Gewohnheit, die mehr nimmt als gibt. Eine Sehnsucht, die jedes Jahr kleiner wird, weil sie nie gelebt wird.',
            question: 'Was tut deinem 80-jährigen Ich weh, wenn es auf dein heutiges Leben schaut — auch wenn dein heutiges Du es noch wegerklären kann?' },
          { name: 'Mut', title: 'Wozu würde es dich drängen?', duration: 10*60,
            hostNote: 'Reihum. Nicht „mehr Sport treiben" — eine konkrete Sache, die du seit Jahren aufschiebst.',
            description: 'Mit 80 sieht man klarer, welcher Mut sich gelohnt hat — und welcher Aufschub sich gerächt hat. Welche Mutprobe würde dein älteres Ich dir heute aufdrücken, wenn es dich am Ärmel ziehen könnte?',
            quote: { text: 'Das Leben wird rückwärts verstanden, aber vorwärts gelebt.', author: 'Søren Kierkegaard' },
            question: 'Wozu würde dich dein 80-jähriges Ich drängen, in den nächsten zwölf Monaten anzufangen — auch wenn du Gründe findest, warum es dieses Jahr nicht passt?' },
          { name: 'Versöhnung', title: 'Mit wem hat es Frieden gemacht?', duration: 8*60,
            hostNote: 'Reihum. „Pass" ist hier besonders explizit okay.',
            description: 'Mit 80 sind viele Wunden, die wir heute noch pflegen, leiser geworden. Manche, weil sie geheilt sind. Manche, weil die Person nicht mehr da ist. Welche heutige Verletzung schaut dein älteres Ich anders an?',
            question: 'Mit wem oder was hat dein 80-jähriges Ich Frieden gemacht — was du heute noch nicht kannst?' },
          { name: 'Oliver Sacks', title: 'Wie war dein Leben — ein Satz', duration: 6*60,
            hostNote: 'Reihum, ein Satz. Nicht ausgefeilt — spontan.',
            description: 'Der Neurologe Oliver Sacks schrieb mit 82, im Angesicht seines nahen Todes, einen kurzen Essay: „My Own Life". Darin ein Satz, der bleibt: „Above all, I have been a sentient being, a thinking animal, on this beautiful planet, and that in itself has been an enormous privilege and adventure."\n\nWenn du später einen Satz über dein Leben schreiben dürftest — was würdest du wollen, dass drin steht?',
            quote: { text: 'Vor allem war ich ein empfindendes Wesen, ein denkendes Tier, auf diesem schönen Planeten — und das allein war ein ungeheures Privileg und Abenteuer.', author: 'Oliver Sacks' },
            question: 'Welcher eine Satz soll über dein Leben wahr gewesen sein?' },
          { name: 'Dank', title: 'Wofür würde es am meisten danken?', duration: 8*60,
            hostNote: 'Reihum, kurz. Nicht die offensichtlichen Dinge — das Überraschende.',
            description: 'Mit 80 dankt man nicht mehr für die spektakulären Dinge. Man dankt für: einen Nachmittag mit der Großmutter, ein Gespräch am Küchentisch, den kleinen Moment, in dem man aufgewacht ist und gespürt hat, dass alles genug ist.',
            question: 'Wofür würde dein 80-jähriges Ich dir am meisten danken — welche Entscheidung, welche Gewohnheit, welcher Mut wäre es?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Alle schauen zur Kerze. Zwei Minuten. Atmen.',
            description: 'Das Ältere und das Heutige treffen sich jetzt auf halbem Weg.' },
          { name: 'Brief', title: 'Ein Brief von 80 an heute', duration: 12*60,
            hostNote: 'Stille Phase. Stift und Zettel. Jede Person schreibt für sich, leise.',
            description: 'Schreibt jetzt einen kurzen Brief — von eurem 80-jährigen Ich an euer heutiges Ich. Eine halbe Seite reicht. Was würde diese ältere Version sagen, jetzt, wo sie gehört wurde?\n\nKein Ratgeber-Ton. Kein Lebenskonzept. Nur das, was sie wirklich loswerden möchte. Vielleicht ein einziger Satz. Vielleicht ein paar konkrete Dinge.' },
          { name: 'Vorlesen', title: 'Was möchtest du teilen?', duration: 12*60,
            hostNote: 'Reihum. Wer mag, liest den Brief vor — oder einen Satz daraus, oder fasst kurz zusammen. „Pass" ist okay.',
            question: 'Wenn du magst: Lies einen Satz oder Auszug aus deinem Brief vor — oder erzähle, was beim Schreiben in dir hochkam.' },
          { name: 'Mitnahme', title: 'Eine konkrete Sache für die nächste Woche', duration: 6*60,
            hostNote: 'Reihum, ein Satz. Konkret, klein, machbar — nicht „mehr leben", sondern „diese Woche meine Schwester anrufen".',
            description: 'Nicht das große Lebensprojekt. Eine kleine, konkrete Geste in den nächsten sieben Tagen, die dein 80-jähriges Ich dir nicken würde.',
            question: 'Was machst du in den nächsten sieben Tagen anders?' },
          { name: 'Wort', title: 'Ein Wort als Kompass', duration: 4*60,
            hostNote: 'Reihum, ein Wort — als Anker für die nächste Woche.',
            description: 'Kein Vorsatz, kein Plan. Ein Wort als Anker, wenn die Woche wieder eng wird.',
            question: 'Ein Wort, das du diese Woche mit dir trägst.' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 20 Min.',
        people: '2 Personen (Paar oder enge Freundschaft)',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor ihr anfangt', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys weg. Drei gemeinsame Atemzüge — ohne Kommentar.',
            description: 'Gebt euch diesen Moment, bevor es richtig losgeht — er ist der eigentliche Startschuss.' },
          { name: 'Ankommen', title: 'Wie geht es dir, ehrlich?', duration: 8*60,
            hostNote: 'Beide nacheinander, je 2 Minuten. Andere:r hört zu, ohne zu reagieren.',
            question: 'Wie geht es dir gerade wirklich — was läuft, was zerrt?' },
          { name: 'Einstieg', title: 'Die Stimme, die fehlt', duration: 6*60,
            hostNote: 'Audio anhören — oder eine:r liest laut vor.',
            quote: { text: 'Lebe nicht so, als hättest du noch zehntausend Jahre Zeit.', author: 'Marc Aurel' },
            description: 'Wir treffen unsere wichtigsten Entscheidungen aus einer engen Mitte heraus: getrieben vom Druck dieser Wochen.\n\nHeute borgen wir uns die Augen einer 80-jährigen Version von uns selbst — und schauen, was sie zu uns sagen würde.' },
          { name: 'Ankunft', title: 'Stell dir dein 80-jähriges Ich vor', duration: 8*60,
            hostNote: 'Audio anhören — Augen schließen ist okay. Oder eine:r liest vor.',
            description: 'Es ist Morgen. Du bist 80. Du sitzt irgendwo, wo du dich wohlfühlst. Was siehst du? Wie sitzt du? Was hast du vor dir?\n\nDieses ältere Ich weiß, was aus euch beiden geworden ist. Es hat keine Ratschläge mitgebracht, nur einen freundlichen Blick. Und jetzt beginnt es zu erzählen.' },
          { name: 'Stolz & Sorge', title: 'Was sieht es bei dir?', duration: 14*60,
            hostNote: 'Eine:r erzählt 5 min, die andere Person hört zu (keine Rückfragen). Dann tauschen.',
            description: 'Zwei Fragen, die du dir abwechselnd stellst — eine direkt nach der anderen.',
            items: [
              { accent: '1.', label: 'Stolz', text: 'Wofür würde dein 80-jähriges Ich dich heute beneiden?' },
              { accent: '2.', label: 'Sorge', text: 'Worüber würde es weinen, wenn es auf dein heutiges Leben schaut?' }
            ] },
          { name: 'Mut', title: 'Wozu würde es dich drängen?', duration: 14*60,
            hostNote: 'Eine:r erzählt 5 min, andere Person hört zu. Dann tauschen. Keine Rückfragen in der Erzählzeit.',
            description: 'Konkrete Sache, die du seit Jahren aufschiebst. Nicht „mehr leben" — eine echte Schwelle.',
            question: 'Was würde dein älteres Ich dich drängen, in den nächsten zwölf Monaten anzufangen?' },
          { name: 'Stille', title: 'Drei Minuten, in der Zeit', duration: 3*60,
            hostNote: 'Nichts sagen. Schaut in die Kerze. Spürt, wie sich gerade anfühlt, was zwischen euch besprochen wurde.',
            description: 'Das älteste Ich und das heutige treffen sich jetzt auf halbem Weg. Gebt ihnen Raum.' },
          { name: 'Brief', title: 'Ein Brief von 80 an heute', duration: 12*60,
            hostNote: 'Stille. Stift und Zettel. Jeder schreibt leise für sich.',
            description: 'Eine halbe Seite. Brief von eurem 80-jährigen Ich an euer heutiges Du. Keine Ratschläge — was möchte es loswerden, jetzt, wo es gehört wurde?' },
          { name: 'Vorlesen', title: 'Lies vor — wenn du magst', duration: 10*60,
            hostNote: 'Eine:r liest, andere hört. Dann tauschen. Keine Kommentare. Nur danke.',
            question: 'Lies deinen Brief vor — oder einen Satz daraus, oder fasse in zwei Sätzen zusammen.' },
          { name: 'Ein Wort', title: 'Ein Wort als Kompass', duration: 8*60,
            hostNote: 'Jede:r wählt ein einziges Wort, das die nächsten sieben Tage tragen soll. Auf einen Zettel, austauschen, mit nach Hause nehmen.',
            description: 'Kein Vorsatz, kein Plan. Ein Wort — als Anker, wenn die Woche wieder eng wird. Wenn du zwischen Tür und Angel an dieses Wort denkst, kehrt etwas zurück, das du heute Abend gespürt hast.',
            question: 'Welches Wort nimmst du mit — und warum gerade dieses?' }
        ])
      },
      solo: {
        label: 'Allein',
        duration: '~60 Min.',
        people: 'Nur du',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor du anfängst', duration: 3*60,
            hostNote: 'Kerze anzünden. Handy weg. Drei tiefe Atemzüge. Tee oder Wein — je nach Uhrzeit.',
            description: 'Die Stimme, zu der du heute gehst, ist leise. Sie kommt nur, wenn du wirklich da bist — nicht zwischen Mails.' },
          { name: 'Ankommen', title: 'Wie geht es dir, hier und jetzt?', duration: 3*60,
            hostNote: 'Drei tiefe Atemzüge. Dann schreibe kurz.',
            question: 'Wie geht es dir gerade — und was beschäftigt dich diese Woche?' },
          { name: 'Einstieg', title: 'Die Stimme, die fehlt', duration: 5*60,
            hostNote: 'Audio anhören — gerne mit geschlossenen Augen. Oder still lesen.',
            quote: { text: 'Lebe nicht so, als hättest du noch zehntausend Jahre Zeit.', author: 'Marc Aurel' },
            description: 'Wir treffen unsere wichtigsten Entscheidungen aus einer ungeduldigen Mitte heraus: dringend, eng, getrieben von dem, was diese Woche zählt.\n\nWas dabei fehlt, ist eine Stimme, die du in dir trägst, aber selten zu Wort kommen lässt: die der Person, die du in 40 oder 50 Jahren sein wirst. Heute borgst du dir ihre Augen.' },
          { name: 'Die Fünf', title: 'Die fünf häufigsten Bereuen', duration: 5*60,
            hostNote: 'Lies langsam. Welche trifft dich beim Lesen am stärksten?',
            description: 'Die Palliativschwester Bronnie Ware hat hunderte Menschen in ihren letzten Wochen begleitet. Ihre Sammlung der häufigsten Bereuen ist knapp und bitter:',
            items: [
              { label: '1.', text: 'Ich wünschte, ich hätte den Mut gehabt, mein eigenes Leben zu leben — nicht das Leben, das andere von mir erwarteten.' },
              { label: '2.', text: 'Ich wünschte, ich hätte nicht so viel gearbeitet.' },
              { label: '3.', text: 'Ich wünschte, ich hätte den Mut gehabt, meine Gefühle auszudrücken.' },
              { label: '4.', text: 'Ich wünschte, ich hätte mit meinen Freund:innen mehr Kontakt gehalten.' },
              { label: '5.', text: 'Ich wünschte, ich hätte mir erlaubt, glücklicher zu sein.' }
            ] },
          { name: 'Ankunft', title: 'Stell dir dein 80-jähriges Ich vor', duration: 8*60,
            hostNote: 'Audio anhören (gerne mit geschlossenen Augen). Danach 2 Minuten Stille, bevor es weitergeht.',
            description: 'Stell dir vor: Es ist Morgen. Du bist 80. Du sitzt irgendwo, wo du dich wohlfühlst. Was siehst du? Wie sitzt du? Was riechst du? Was hast du vor dir auf dem Tisch?\n\nDieses ältere Ich kennt jede deiner Abzweigungen — und trägt dir keine einzige nach. Jetzt beginnt es zu sprechen.' },
          { name: 'Stolz', title: 'Wofür würde es dich beneiden?', duration: 5*60,
            hostNote: 'Schreibe 4-5 Min am Stück. Nicht „was läuft gut" — was wird mit 80 nicht mehr selbstverständlich sein?',
            description: 'Dass du laufen kannst, dich spontan verlieben kannst, noch Jahrzehnte zu gestalten hast — das ist mit 80 nicht mehr selbstverständlich. Was davon sieht dein älteres Ich besonders deutlich?',
            question: 'Wofür würde dich dein 80-jähriges Ich heute beneiden? Schreib es auf, bevor du es kleinredest.' },
          { name: 'Sorge', title: 'Worüber würde es weinen?', duration: 5*60,
            hostNote: 'Schreibe. Nicht der dramatische Lebensfehler — der leise, der sich gerade einschleicht.',
            description: 'Manchmal sieht das ältere Ich etwas, das das heutige noch ignorieren kann: eine Beziehung, die einschläft. Eine Gewohnheit, die mehr nimmt als gibt. Eine Sehnsucht, die kleiner wird, weil sie nie gelebt wird.',
            question: 'Was tut deinem 80-jährigen Ich weh, wenn es auf dein heutiges Leben schaut — auch wenn du es noch wegerklären kannst?' },
          { name: 'Mut', title: 'Wozu würde es dich drängen?', duration: 5*60,
            hostNote: 'Schreibe. Keine Floskeln — eine konkrete Sache, die du seit Jahren aufschiebst.',
            quote: { text: 'Das Leben wird rückwärts verstanden, aber vorwärts gelebt.', author: 'Søren Kierkegaard' },
            description: 'Mit 80 sieht man klarer, welcher Mut sich gelohnt hat — und welcher Aufschub sich gerächt hat.',
            question: 'Wozu würde dich dein 80-jähriges Ich drängen, in den nächsten zwölf Monaten anzufangen — auch wenn du Gründe findest, warum es dieses Jahr nicht passt?' },
          { name: 'Versöhnung', title: 'Mit wem hat es Frieden gemacht?', duration: 5*60,
            hostNote: 'Schreibe oder lass die Frage in dir wirken. „Pass" ist auch eine Antwort.',
            description: 'Mit 80 sind viele Wunden, die wir heute noch pflegen, leiser geworden. Manche, weil sie geheilt sind. Manche, weil die Person nicht mehr da ist. Welche heutige Verletzung schaut dein älteres Ich anders an?',
            question: 'Mit wem oder was hat dein 80-jähriges Ich Frieden gemacht — was du heute noch nicht kannst?' },
          { name: 'Sacks', title: 'Wie war dein Leben — ein Satz', duration: 4*60,
            hostNote: 'Schreibe einen Satz. Nicht ausgefeilt — ehrlich.',
            quote: { text: 'Vor allem war ich ein empfindendes Wesen, ein denkendes Tier, auf diesem schönen Planeten — und das allein war ein ungeheures Privileg und Abenteuer.', author: 'Oliver Sacks' },
            description: 'Der Neurologe Oliver Sacks schrieb mit 82, im Angesicht seines nahen Todes, einen kurzen Essay: „My Own Life". Darin ein Satz, der bleibt. Wenn du später einen Satz über dein Leben schreiben dürftest — was würdest du wollen, dass drinsteht?',
            question: 'Welcher eine Satz soll über dein Leben wahr gewesen sein?' },
          { name: 'Dank', title: 'Wofür würde es am meisten danken?', duration: 4*60,
            hostNote: 'Schreibe. Die unoffensichtlichen Dinge.',
            description: 'Mit 80 dankt man nicht für die spektakulären Dinge. Man dankt für: einen Nachmittag mit der Großmutter, ein Gespräch am Küchentisch, den kleinen Moment, in dem man aufwacht und spürt: alles ist genug.',
            question: 'Wofür würde dein 80-jähriges Ich dir danken — und was davon liegt heute schon in deiner Hand?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Augen zu oder Blick zur Kerze. Nichts schreiben.',
            description: 'Das Ältere und das Heutige treffen sich jetzt auf halbem Weg.' },
          { name: 'Brief', title: 'Ein Brief von 80 an heute', duration: 8*60,
            hostNote: 'Schreibe still. Eine halbe Seite reicht — kein Ratgeber-Ton, nur was wirklich bleiben will.',
            description: 'Schreibe einen Brief von deinem 80-jährigen Ich an dein heutiges Du. Was möchte diese ältere Version loswerden, jetzt, wo sie gehört wurde? Vielleicht ein einziger Satz. Vielleicht drei konkrete Dinge.\n\nLeg den Brief in den Kalender — in 90 Tagen oder 6 Monaten — und lies ihn dann wieder.' },
          { name: 'Mitnahme', title: 'Eine konkrete Sache für die nächste Woche', duration: 4*60,
            hostNote: 'Schreibe einen Satz auf einen Zettel — und nimm ihn mit.',
            description: 'Nicht das große Lebensprojekt. Eine kleine, konkrete Geste in den nächsten sieben Tagen, die dein 80-jähriges Ich dir nicken würde.',
            question: 'Was machst du in den nächsten sieben Tagen anders?' },
          { name: 'Wort', title: 'Ein Wort als Kompass', duration: 2*60,
            hostNote: 'Ein Wort. Auf einen Zettel — an den Spiegel oder in die Tasche.',
            description: 'Kein Vorsatz, kein Plan. Ein Wort als Anker, wenn die Woche wieder eng wird.',
            question: 'Welches Wort nimmst du mit — und warum gerade dieses?' }
        ])
      }
    }
  },

  // =====================================================================
  // HEIMAT  — Was trägt mich?
  // =====================================================================
  heimat: {
    title: 'Heimat — was trägt mich?',
    category: 'Identität',
    lead: 'Heimat ist nicht der Ort, wo der Pass ausgestellt wurde. Heimat ist die Mischung aus Räumen, Menschen, Gerüchen und Tätigkeiten, die uns das Gefühl geben: hier muss ich nicht weiter. Heute sucht jede:r seine eigene.',
    image: 'images/heimat.jpg',
    audio: true,
    philosophy1: 'Heimat ist ein abgenutztes Wort, das von einer politischen Seite besetzt und von der anderen verschmäht wurde. Beides ist schade. Denn was es bezeichnet, ist eines der wenigen wirklich tragenden Gefühle, die wir haben: die Empfindung, irgendwo nicht weitermüssen.',
    philosophy2: 'Heimat ist selten ein Ort. Meistens ist sie eine Komposition: ein bestimmtes Licht in der Küche, der Klang einer Stimme, die Tätigkeit, in der man sich vergisst, der Geruch eines bestimmten Brotes. Heute sucht jede:r seine eigene Heimat-Komposition zusammen — und schaut, wo sie heute schon trägt und wo nicht mehr.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std. 25 Min.',
        people: '3-10 Personen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor wir anfangen', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys stumm auf einen Tisch. Drei gemeinsame Atemzüge.',
            description: 'Heimat findet man nicht im Rennen. Man findet sie, indem man kurz nicht mehr unterwegs ist.' },
          { name: 'Ankommen', title: 'Wo bist du heute aufgewacht?', duration: 8*60,
            hostNote: 'Reihum, 1–2 Sätze. „Innerlich" ist genauso valide wie „äußerlich".',
            question: 'Wo bist du heute Morgen aufgewacht — innerlich und äußerlich?' },
          { name: 'Einstieg', title: 'Heimat ist mehr als ein Ort', duration: 7*60,
            hostNote: 'Audio abspielen oder selbst vorlesen — langsam. Danach 1 Minute Stille.',
            quote: { text: 'Heimat ist etwas, das allen in die Kindheit scheint und worin noch niemand war.', author: 'Ernst Bloch' },
            description: 'Wir sind eine Generation, die mehr umzieht, mehr reist, mehr wechselt als jede davor. Das Wort „Heimat" klingt für viele zu groß, zu pathetisch, zu politisch besetzt.\n\nUnd doch: Jede:r kennt das Gefühl. Diesen einen Ort, diesen einen Menschen, diese eine Tätigkeit, in der man nicht weitermuss. Der Philosoph Ernst Bloch hat es einmal so gesagt: Heimat ist ein Ort, an dem noch nie jemand gewesen ist — und nach dem sich trotzdem alle sehnen. Gemeint war: Heimat ist nicht hinter uns, in der Kindheit. Sie ist etwas, das wir uns lebenslang komponieren.' },
          { name: 'Drei Türen', title: 'Heimat hat drei Türen', duration: 6*60,
            hostNote: 'Audio abspielen oder vorlesen. Drei Definitionen — alle gleichzeitig wahr.',
            description: 'Heimat ist selten nur eine Sache — meistens eine Komposition. Wir unterscheiden drei Türen. Sie sind die Alltagssprache für das, was der Soziologe Hartmut Rosa „Resonanzachsen" nennt: Verbindungen, in denen die Welt antwortet, statt stumm zu bleiben.',
            items: [
              { accent: 'Ort', label: 'Heimat als Raum', text: 'Eine Wohnung, eine Stadt, ein Land, eine Landschaft. Der physische Ort, an dem dein Körper zur Ruhe kommt.' },
              { accent: 'Mensch', label: 'Heimat als Beziehung', text: 'Eine Person, in deren Anwesenheit du nicht mehr darstellen musst. Heimat als „bei dir bin ich angekommen".' },
              { accent: 'Tun', label: 'Heimat als Tätigkeit', text: 'Eine Sache, in der du dich vergisst — Kochen, Klettern, Schreiben, Singen. Heimat als „hier bin ich ich".' }
            ] },
          { name: 'Ort', title: 'Welcher Raum trägt dich?', duration: 10*60,
            hostNote: 'Reihum, je 1-2 Min. Konkret werden — nicht „Berlin", sondern „die Bank am Maybachufer".',
            description: 'Welcher physische Ort fühlt sich für dich heute am ehesten wie Heimat an? Vielleicht nicht da, wo du gerade lebst. Vielleicht ein Ort aus der Kindheit. Vielleicht einer, den du dir gerade erst aufbaust.',
            question: 'Welcher Ort in deinem Leben trägt dich gerade — und was genau macht ihn aus?' },
          { name: 'Mensch', title: 'Welcher Mensch ist dir Heimat?', duration: 10*60,
            hostNote: 'Reihum. „Pass" ist explizit okay — diese Frage berührt manchmal.',
            description: 'Bei welcher Person musst du nicht mehr darstellen, nicht erklären, nicht den richtigen Eindruck machen? Muss nicht romantisch sein. Kann auch jemand sein, den du selten siehst. Oft ist es nicht der Mensch, der am nähesten wohnt.',
            question: 'Welcher Mensch ist dir Heimat — und woran merkst du es?' },
          { name: 'Tun', title: 'Welche Tätigkeit ist dir Heimat?', duration: 8*60,
            hostNote: 'Reihum, kurz. Konkret — Bewegung, Essen, Handwerk, Sprache.',
            description: 'Simone Weil, die französische Philosophin, hat es „enracinement" genannt — Verwurzelung durch Tun. In einer Tätigkeit, die du seit Jahren machst, lebt ein Teil deiner Heimat. Oft unterschätzt, weil es so selbstverständlich ist. Für manche ist es Kochen, für andere Klavierspielen, Laufen, Gärtnern, Schreiben.',
            quote: { text: 'Verwurzelung ist vielleicht das wichtigste und am meisten verkannte Bedürfnis der menschlichen Seele.', author: 'Simone Weil' },
            question: 'Welche Tätigkeit ist dir Heimat — und wann hast du sie zuletzt richtig gemacht?' },
          { name: 'Sinne', title: 'Heimat durch Geruch und Klang', duration: 8*60,
            hostNote: 'Reihum, ein konkretes Sinneserlebnis — Geruch, Klang, Geschmack, Berührung.',
            description: 'Heimat sitzt oft tiefer als Worte. Neurologisch ist das erklärbar: Geruchserinnerungen gehen direkt ins limbische System, ohne Umweg über das rationale Gehirn. Ein einziger Geruch — frisches Brot, Buchenwald nach Regen, bestimmte Seife — kann uns in Sekunden zurück versetzen.',
            question: 'Welcher Geruch, Klang oder Geschmack zieht dich sofort dorthin, wo du dich zuhause fühlst?' },
          { name: 'Körper', title: 'Wo im Körper spürst du Heimat?', duration: 6*60,
            hostNote: 'Reihum, kurz. Nicht denken — spüren.',
            description: 'Heimat hat einen körperlichen Ort. Für manche sitzt sie in der Brust (Weite, Wärme). Für andere im Bauch (Schwere, Ruhe). Für manche im Nacken (Loslassen). Das Nervensystem weiß, wo du zu Hause bist, oft besser als dein Kopf.',
            question: 'Wo genau in deinem Körper spürst du das Gefühl von Heimat?' },
          { name: 'Resonanzachsen', title: 'Drei Resonanzachsen', duration: 7*60,
            hostNote: 'Der Host liest die drei Achsen vor. Reihum: welche ist bei dir gerade am stärksten — welche verkümmert?',
            quote: { text: 'Heimat heißt: Da sein, wo die Welt mir antwortet.', author: 'Hartmut Rosa (paraphrasiert)' },
            description: 'Der Soziologe Hartmut Rosa unterscheidet in seinem Buch „Resonanz" drei Achsen, auf denen wir uns von der Welt berühren lassen können — und die zusammen Heimat ausmachen:',
            items: [
              { accent: 'Horizontal', label: 'Zu Menschen', text: 'Beziehungen, in denen du antwortest und geantwortet wirst. Nicht kommuniziert wird — resoniert.' },
              { accent: 'Diagonal', label: 'Zu Dingen & Tun', text: 'Arbeit, Instrument, Werkstoff, Sprache. Etwas, in dem du dich verlierst, weil es dir entgegenkommt.' },
              { accent: 'Vertikal', label: 'Zum Größeren', text: 'Natur, Kunst, Religion, Geschichte. Ein Über-Mich, das dich meint.' }
            ],
            question: 'Welche deiner drei Resonanzachsen ist gerade am lebendigsten — und welche verkümmert?' },
          { name: 'Verlust', title: 'Wo hast du Heimat verloren?', duration: 10*60,
            hostNote: 'Reihum, je 1-2 Min. Mit Feingefühl — manche Heimat-Verluste sind frisch.',
            description: 'Manche Heimaten verlieren wir, weil wir umziehen. Manche, weil Menschen sterben oder gehen. Manche, weil wir uns selbst verändert haben und der alte Ort nicht mehr passt. Theodor Adorno schrieb aus dem Exil: „Für den, der keine Heimat mehr hat, wird das Schreiben zum Wohnen." Andere finden diesen Ersatz in einer Tätigkeit, einer Sprache, einem Menschen.',
            question: 'Welche Heimat hast du verloren — und was hat ihren Platz eingenommen (oder was fehlt stattdessen)?' },
          { name: 'Neu', title: 'Wo entsteht gerade neue Heimat?', duration: 8*60,
            hostNote: 'Reihum, klein anfangen — neue Heimaten beginnen oft kaum sichtbar.',
            description: 'Neue Heimat entsteht meistens nicht durch große Pläne, sondern durch kleine Wiederholungen: derselbe Bäcker am Samstag, dasselbe Café am Mittwoch, derselbe Mensch am Freitagabend. Psychologisch ist das „attachment through repetition": Durch wiederholte Anwesenheit wird aus Fremdem Vertrautes — und irgendwann Heimat.',
            question: 'Wo siehst du gerade neue Heimat entstehen — vielleicht so klein, dass du fast drüber hinwegschaust?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Alle schauen zur Kerze. Zwei Minuten.',
            description: 'Spürt: Wo in dir ist gerade Heimat — während ihr hier sitzt?' },
          { name: 'Karte', title: 'Deine Heimat-Karte', duration: 8*60,
            hostNote: 'Stille. Stift und Zettel. Jede:r für sich.',
            description: 'Zeichne kurz eine „Heimat-Karte". Keine Geographie. 3-5 Punkte: Orte, Menschen, Tätigkeiten, Gerüche, Klänge. Verbinde sie, wenn du magst. Niemand sieht das außer dir.' },
          { name: 'Teilen', title: 'Ein Punkt deiner Karte', duration: 10*60,
            hostNote: 'Reihum, ein Punkt. Nicht alle — einer, der dich gerade am meisten angeht.',
            description: 'Heimat wird durch Sprechen realer. Wenn du einen Punkt deiner Karte jetzt laut aussprichst, bekommt er Gewicht — und die anderen im Raum halten ihn mit.',
            question: 'Welchen Punkt deiner Heimat-Karte teilst du mit der Runde — und warum gerade diesen?' },
          { name: 'Gemeinsam', title: 'Wo seid ihr euch gegenseitig Heimat?', duration: 8*60,
            hostNote: 'Reihum, ein Satz an eine:n andere:n in der Runde: „Du bist mir Heimat, wenn…" Der/die Angesprochene antwortet nur mit „Danke".',
            description: 'In einem Kreis wie diesem entsteht oft selbst Heimat — wenn man sie sich gegenseitig bestätigt. Nicht jeden müsst ihr ansprechen. Aber ein ehrlicher Satz an eine:n reicht, um etwas in diesem Raum zu verankern.',
            question: 'Wem in dieser Runde (oder aus deinem Leben, der gerade abwesend ist) würdest du gerne sagen: du bist mir Heimat?' },
          { name: 'Mitnahme', title: 'Was möchtest du pflegen?', duration: 8*60,
            hostNote: 'Reihum, ein Satz — konkret.',
            description: 'Heimat passiert nicht von selbst. Sie wächst dort, wo wir sie pflegen — durch Wiederholung, Anwesenheit, kleine Gesten. Ein Anruf, ein Samstag-Ritual, ein Weg, den du jeden Tag gehst statt irgendeinen.',
            question: 'Was möchtest du in den nächsten Wochen pflegen, damit es Heimat wird oder bleibt?' },
          { name: 'Wort', title: 'Ein Wort zum Abschied', duration: 4*60,
            hostNote: 'Reihum, ein Wort.',
            question: 'Ein Wort, mit dem du heute nach Hause gehst.' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 40 Min.',
        people: '2 Personen (Paar, Familie, enge Freundschaft)',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor ihr anfangt', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys weg. Drei gemeinsame Atemzüge.',
            description: 'Heimat zu finden beginnt damit, dass ihr beide kurz nicht mehr unterwegs seid — sondern einfach da. Dieser Moment ist der erste Schritt heim.' },
          { name: 'Ankommen', title: 'Wo bist du heute aufgewacht?', duration: 10*60,
            hostNote: 'Beide nacheinander, je 4 Minuten. Der andere hört zu — ohne zu reagieren, ohne zu nicken wie zur Bestätigung. Einfach da sein.',
            question: 'Wo bist du heute Morgen aufgewacht — innerlich und äußerlich?' },
          { name: 'Einstieg', title: 'Heimat ist mehr als ein Ort', duration: 5*60,
            hostNote: 'Audio anhören — oder eine:r liest laut vor. Danach kurz schweigen.',
            quote: { text: 'Nicht da ist man daheim, wo man seinen Wohnsitz hat, sondern wo man verstanden wird.', author: 'Christian Morgenstern' },
            description: 'Heimat ist selten ein Ort allein. Meistens ist sie eine Komposition: ein bestimmtes Licht, ein Mensch, eine Tätigkeit, ein Geruch.\n\nHeute sucht ihr eure jeweilige Heimat-Komposition zusammen — und ihr werdet überrascht sein, wie unterschiedlich sie selbst bei nahen Menschen ist.' },
          { name: 'Drei Türen', title: 'Heimat hat drei Türen', duration: 5*60,
            hostNote: 'Vorlesen. Diese drei Definitionen begleiten den Abend.',
            items: [
              { accent: 'Ort', label: 'als Raum', text: 'Wo dein Körper zur Ruhe kommt.' },
              { accent: 'Mensch', label: 'als Beziehung', text: 'Wo du nicht mehr darstellen musst.' },
              { accent: 'Tun', label: 'als Tätigkeit', text: 'Wo du dich vergisst.' }
            ] },
          { name: 'Erzählen', title: 'Drei Erzählungen', duration: 20*60,
            hostNote: 'Eine:r erzählt 9 Minuten — alle drei Türen. Andere Person hört zu, keine Rückfragen. Dann tauschen. Konkret werden: nicht „zu Hause", sondern „die Bank am Fluss hinterm Haus".',
            description: 'Erzähle deinem Gegenüber von deiner Heimat — durch alle drei Türen. Welcher Ort, welcher Mensch, welche Tätigkeit?',
            question: 'Erzähle: dein Heimat-Ort. Dein Heimat-Mensch. Deine Heimat-Tätigkeit.' },
          { name: 'Sinne', title: 'Heimat durch Geruch und Klang', duration: 8*60,
            hostNote: 'Beide abwechselnd — ein Sinneserlebnis pro Person, dann das nächste. Auch verrückte Dinge („nasse Wollpullis") sind erlaubt.',
            question: 'Welcher Geruch, Klang oder Geschmack zieht dich sofort an deinen Heimat-Ort?' },
          { name: 'Verlust', title: 'Welche Heimat hast du verloren?', duration: 14*60,
            hostNote: 'Eine:r erzählt 5 Minuten, andere hört — ohne zu trösten, ohne zu lösen. Dann tauschen. Am Ende 2 Minuten gemeinsame Stille.',
            description: 'Manche Heimaten verlieren wir, weil wir umziehen. Manche, weil Menschen sterben oder gehen. Manche, weil wir uns selbst verändert haben.',
            question: 'Welche Heimat hast du verloren — und wie gehst du heute damit um?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Schaut in die Kerze oder aufeinander. Nichts sagen. Atmen.',
            description: 'Was ihr gerade erzählt habt, wirkt länger, wenn ihr es jetzt nicht überdeckt.' },
          { name: 'Schnittmenge', title: 'Was ist eure gemeinsame Heimat?', duration: 12*60,
            hostNote: 'Gemeinsames Gespräch, aber langsam. Keine Checkliste — schaut, was sich zeigt.',
            description: 'Bei nahen Menschen gibt es oft eine Schnittmenge — Orte, Menschen, Rituale, die für euch beide Heimat sind. Manchmal ist die kleiner als gedacht. Manchmal größer.',
            question: 'Was teilt ihr beide als Heimat — und was ist euch ganz allein?' },
          { name: 'Geschenk', title: 'Wo bist du mir Heimat?', duration: 8*60,
            hostNote: 'Je ein Satz: „Du bist mir Heimat, wenn …". Der andere antwortet nur mit „Danke".',
            question: 'In welchem Moment, in welcher Geste bist du mir ein Ort, wo ich nicht erklären muss?' },
          { name: 'Mitnahme', title: 'Was möchten wir pflegen?', duration: 7*60,
            hostNote: 'Beide nacheinander — gerne auch eine gemeinsame Sache. Aufschreiben auf einen Zettel, den ihr sichtbar hinlegt.',
            question: 'Was möchtest du (oder ihr beide) in den nächsten Wochen pflegen, damit es Heimat bleibt oder wird?' }
        ])
      },
      solo: {
        label: 'Allein',
        duration: '~60 Min.',
        people: 'Nur du',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor du anfängst', duration: 3*60,
            hostNote: 'Kerze anzünden. Handy weg. Drei tiefe Atemzüge. Vielleicht einen Tee.',
            description: 'Heimat suchen ist keine Check-Liste. Es braucht Ruhe — sonst bleibst du im Außen. Dieser Moment ist der erste Schritt heim.' },
          { name: 'Ankommen', title: 'Wo bist du heute aufgewacht?', duration: 3*60,
            hostNote: 'Schreibe kurz. „Innerlich" ist genauso valide wie „äußerlich".',
            question: 'Wo bist du heute Morgen aufgewacht — innerlich und äußerlich?' },
          { name: 'Einstieg', title: 'Heimat ist mehr als ein Ort', duration: 6*60,
            hostNote: 'Audio anhören — gerne mit geschlossenen Augen. Oder still lesen.',
            quote: { text: 'Heimat ist etwas, das allen in die Kindheit scheint und worin noch niemand war.', author: 'Ernst Bloch' },
            description: 'Du gehörst zu einer Generation, die mehr umzieht, mehr reist, mehr wechselt als jede davor. Das Wort „Heimat" klingt für viele zu groß, zu pathetisch, zu politisch besetzt.\n\nUnd doch: du kennst das Gefühl. Diesen einen Ort, diesen einen Menschen, diese eine Tätigkeit, in der du nicht weitermusst. Ernst Bloch hat es einmal so gesagt: Heimat ist ein Ort, an dem noch nie jemand gewesen ist — und nach dem sich trotzdem alle sehnen. Gemeint war: Heimat liegt nicht hinter uns in der Kindheit. Sie ist etwas, das wir uns lebenslang komponieren.' },
          { name: 'Drei Türen', title: 'Heimat hat drei Türen', duration: 4*60,
            hostNote: 'Audio anhören oder still lesen. Diese drei Definitionen begleiten dich durch den Abend.',
            items: [
              { accent: 'Ort', label: 'Heimat als Raum', text: 'Eine Wohnung, eine Stadt, eine Landschaft. Der physische Ort, an dem dein Körper zur Ruhe kommt.' },
              { accent: 'Mensch', label: 'Heimat als Beziehung', text: 'Eine Person, in deren Anwesenheit du nicht mehr darstellen musst.' },
              { accent: 'Tun', label: 'Heimat als Tätigkeit', text: 'Eine Sache, in der du dich vergisst — Kochen, Klettern, Schreiben, Singen.' }
            ] },
          { name: 'Ort', title: 'Welcher Raum trägt dich?', duration: 5*60,
            hostNote: 'Schreibe 4 Min am Stück. Konkret werden: nicht „Berlin", sondern „die Bank am Maybachufer".',
            description: 'Welcher physische Ort fühlt sich für dich heute am ehesten wie Heimat an? Vielleicht nicht, wo du lebst. Vielleicht ein Ort aus der Kindheit. Vielleicht einer, den du dir gerade erst aufbaust.',
            question: 'Welcher Ort trägt dich gerade — und was genau macht ihn aus?' },
          { name: 'Mensch', title: 'Welcher Mensch ist dir Heimat?', duration: 5*60,
            hostNote: 'Schreibe. Muss nicht romantisch sein. Oft ist es nicht der Mensch, der am nähesten wohnt.',
            description: 'Bei welcher Person musst du nicht mehr darstellen, nicht erklären, nicht den richtigen Eindruck machen?',
            question: 'Welcher Mensch ist dir Heimat — und woran merkst du es?' },
          { name: 'Tun', title: 'Welche Tätigkeit ist dir Heimat?', duration: 4*60,
            hostNote: 'Schreibe konkret — Bewegung, Essen, Handwerk, Sprache.',
            quote: { text: 'Verwurzelung ist vielleicht das wichtigste und am meisten verkannte Bedürfnis der menschlichen Seele.', author: 'Simone Weil' },
            description: 'Simone Weil hat es „enracinement" genannt — Verwurzelung durch Tun. In einer Tätigkeit, die du seit Jahren machst, lebt ein Teil deiner Heimat. Oft unterschätzt, weil selbstverständlich.',
            question: 'Welche Tätigkeit ist dir Heimat — und wann hast du sie zuletzt richtig gemacht?' },
          { name: 'Sinne', title: 'Heimat durch Geruch und Klang', duration: 4*60,
            hostNote: 'Schreibe 3-5 Sinneserlebnisse auf. Auch verrückte („nasse Wollpullis") sind erlaubt.',
            description: 'Heimat sitzt tiefer als Worte. Geruchserinnerungen gehen direkt ins limbische System, ohne Umweg über das rationale Gehirn. Ein einziger Geruch — frisches Brot, Buchenwald nach Regen, bestimmte Seife — kann dich in Sekunden zurück versetzen.',
            question: 'Welche Gerüche, Klänge, Geschmäcke ziehen dich sofort dorthin, wo du dich zuhause fühlst?' },
          { name: 'Körper', title: 'Wo im Körper spürst du Heimat?', duration: 3*60,
            hostNote: 'Augen zu — spüren, nicht denken. Dann schreibe kurz auf, wo.',
            description: 'Heimat hat einen körperlichen Ort. Für manche sitzt sie in der Brust (Weite, Wärme). Für andere im Bauch (Ruhe). Für manche im Nacken (Loslassen). Das Nervensystem weiß, wo du zu Hause bist, oft besser als dein Kopf.',
            question: 'Wo genau in deinem Körper spürst du das Gefühl von Heimat?' },
          { name: 'Resonanz', title: 'Drei Resonanzachsen', duration: 5*60,
            hostNote: 'Schreibe für jede Achse 1-2 Sätze.',
            quote: { text: 'Heimat heißt: Da sein, wo die Welt mir antwortet.', author: 'Hartmut Rosa (paraphrasiert)' },
            description: 'Der Soziologe Hartmut Rosa unterscheidet drei Achsen, auf denen wir uns von der Welt berühren lassen — und die zusammen Heimat ausmachen:',
            items: [
              { accent: 'Horizontal', label: 'Zu Menschen', text: 'Beziehungen, in denen du antwortest und geantwortet wirst.' },
              { accent: 'Diagonal', label: 'Zu Dingen & Tun', text: 'Arbeit, Instrument, Werkstoff, Sprache — etwas, das dir entgegenkommt.' },
              { accent: 'Vertikal', label: 'Zum Größeren', text: 'Natur, Kunst, Religion, Geschichte — ein Über-Mich, das dich meint.' }
            ],
            question: 'Welche deiner drei Achsen ist gerade am lebendigsten — und welche verkümmert?' },
          { name: 'Verlust', title: 'Welche Heimat hast du verloren?', duration: 6*60,
            hostNote: 'Schreibe still. Mit Feingefühl — manche Verluste sind frisch.',
            description: 'Manche Heimaten verlieren wir, weil wir umziehen. Manche, weil Menschen sterben oder gehen. Manche, weil wir uns selbst verändert haben. Theodor Adorno schrieb aus dem Exil: „Für den, der keine Heimat mehr hat, wird das Schreiben zum Wohnen." Andere finden diesen Ersatz in einer Tätigkeit, einer Sprache, einem Menschen.',
            question: 'Welche Heimat hast du verloren — und was hat ihren Platz eingenommen (oder was fehlt stattdessen)?' },
          { name: 'Neu', title: 'Wo entsteht gerade neue Heimat?', duration: 4*60,
            hostNote: 'Schreibe. Klein anfangen — neue Heimaten beginnen oft kaum sichtbar.',
            description: 'Neue Heimat entsteht meistens nicht durch große Pläne, sondern durch kleine Wiederholungen: derselbe Bäcker am Samstag, dasselbe Café am Mittwoch, derselbe Mensch am Freitagabend. Psychologisch „attachment through repetition".',
            question: 'Wo siehst du gerade neue Heimat entstehen — vielleicht so klein, dass du fast drüber hinwegschaust?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Augen zu oder Blick zur Kerze.',
            description: 'Spür: Wo in dir ist gerade Heimat — während du hier sitzt?' },
          { name: 'Karte', title: 'Deine Heimat-Karte', duration: 5*60,
            hostNote: 'Stift und Zettel. Zeichne oder schreibe.',
            description: 'Skizziere eine „Heimat-Karte". Keine Geographie. 3-5 Punkte: Orte, Menschen, Tätigkeiten, Gerüche, Klänge. Verbinde sie, wenn du magst. Nimm sie mit — oder heft sie an den Kühlschrank.' },
          { name: 'Mitnahme', title: 'Was möchtest du Heimat werden lassen?', duration: 4*60,
            hostNote: 'Schreibe einen konkreten Satz auf einen Zettel.',
            description: 'Heimat passiert nicht von selbst. Sie wächst, wo du sie pflegst — durch Wiederholung, Anwesenheit, kleine Gesten.',
            question: 'Was möchtest du in den nächsten Wochen pflegen, damit es Heimat wird oder bleibt?' },
          { name: 'Wort', title: 'Ein Wort als Kompass', duration: 2*60,
            hostNote: 'Ein Wort. Auf einen Zettel.',
            question: 'Welches Wort trägst du als stillen Anker durch die nächsten Wochen?' }
        ])
      }
    }
  },

  // =====================================================================
  // ADHS — wie ich wirklich ticke
  // =====================================================================
  adhs: {
    title: 'ADHS — wie ich wirklich ticke',
    category: 'Identität',
    lead: 'Ein Abend für Menschen mit ADHS, Verdacht, oder Neugier. Nicht klinisch, nicht entschuldigend — neugierig auf das eigene Betriebssystem. Kein Selbsthilfegruppen-Ton, keine Therapie. Ein strukturierter Raum, um ehrlich hinzuschauen.',
    image: 'images/adhs.jpg',
    philosophy1: 'ADHS ist keine Störung im Sinne von „kaputt". Es ist eine andere Verdrahtung — Aufmerksamkeit funktioniert anders, nicht weniger. Russell Barkley beschreibt es präziser: nicht Aufmerksamkeitsdefizit, sondern Selbstregulations-Unterschied. Edward Hallowell nennt es „ein Ferrari-Motor mit Fahrradbremsen" — nicht defekt, sondern falsch gebremst.',
    philosophy2: 'Dieser Abend ist kein Ratgeber und keine Diagnose. Er ist eine ehrliche Selbstbegegnung: Wo bin ich chaotisch — und wo ist das Chaos eigentlich Kreativität? Was habe ich jahrelang an mir verflucht, was in Wirklichkeit mein bestes Werkzeug ist? Und wo brauche ich endlich eine andere Umgebung, statt mich weiter zu zerreißen?',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std. 25 Min.',
        people: '3-10 Personen (idealerweise mit eigener ADHS-Erfahrung oder nahe am Thema)',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor wir anfangen', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys stumm auf einen Tisch am Rand (ja, wirklich — auch wenn\'s schwerfällt). Drei gemeinsame Atemzüge.',
            description: 'Dieser Abend wird leicht anstrengend — nicht, weil er schwer ist, sondern weil Stillsitzen für viele hier zu den schwierigen Übungen gehört. Trotzdem: drei Atemzüge zum Start. Fidget-Spielzeug ist erlaubt.' },
          { name: 'Ankommen', title: 'Wie kommst du hier an?', duration: 10*60,
            hostNote: 'Reihum, 1-2 Sätze. Kein „gut dir?"-Smalltalk — eine echte Antwort. Und: Anerkennung, dass ihr zu DIESEM Abend gekommen seid — das ist selten einfach.',
            question: 'Was bringt dich heute hierher — und womit kamst du durch die Tür?' },
          { name: 'Einstieg', title: 'Vom Defizit zur Gestaltung', duration: 7*60,
            hostNote: 'Host liest langsam vor. Danach Stille.',
            quote: { text: 'Menschen mit ADHS haben kein Problem mit Aufmerksamkeit. Sie haben ein Problem, ihre Aufmerksamkeit zu regulieren.', author: 'Russell Barkley' },
            description: 'ADHS wurde jahrzehntelang als Defekt beschrieben. Die moderne Forschung zeichnet ein anderes Bild: Nicht zu wenig Aufmerksamkeit — eine andere Regulation. Nicht Disziplinlosigkeit — eine andere Form, mit Dopamin zu haushalten. Nicht Faulheit — Executive Dysfunction.\n\nEdward Hallowell, selbst ADHS-Diagnostiker und Betroffener, beschreibt es als „Ferrari-Motor mit Fahrrad-Bremsen": enorme Kapazität, aber die Steuerung ist anders. Niemand repariert einen Ferrari, indem er ihm sagt, er soll mehr wie ein Fahrrad sein.\n\nHeute schauen wir darauf, wie dein Motor läuft — und welche Bremsen du vielleicht nie verstanden hast.' },
          { name: 'Was es ist', title: 'Und was es nicht ist', duration: 6*60,
            hostNote: 'Host liest die Punkte vor. Keine Diskussion — einfach landen lassen.',
            description: 'Ein paar saubere Unterscheidungen, weil die Öffentlichkeit viel durcheinanderbringt:',
            items: [
              { label: 'IST', accent: '✓', text: 'Eine neurobiologische Besonderheit der Selbstregulation (Aufmerksamkeit, Impulse, Zeitgefühl, Arbeitsgedächtnis, Emotion). Zu etwa 70-80 % erblich.' },
              { label: 'IST', accent: '✓', text: 'Oft mit Kreativität, divergentem Denken, Hyperfokus, Empathie verbunden — nicht als „Bonus", sondern als Teil derselben Verdrahtung.' },
              { label: 'IST NICHT', accent: '✗', text: 'Charakterschwäche, Faulheit, Erziehungsfehler, „kann sich halt nicht zusammenreißen". Nicht durch Willen behebbar.' },
              { label: 'IST NICHT', accent: '✗', text: 'Eine Mode-Diagnose. Die Zahlen sind überwiegend stabil — was steigt, ist das Erkennen (besonders bei Frauen, spät).' }
            ] },
          { name: 'Executive', title: 'Die sechs exekutiven Funktionen', duration: 7*60,
            hostNote: 'Host liest die sechs kurz vor. Wer sich wo wiedererkennt, innerlich nicken.',
            description: 'Russell Barkley und Thomas Brown unterscheiden sechs Funktionen, die bei ADHS anders arbeiten. Keine ist „kaputt" — alle funktionieren, nur nicht nach Lehrbuch:',
            items: [
              { label: '1. Aktivierung', text: 'Anfangen. Der Moment zwischen „ich sollte" und „ich tue" — oft eine Lücke von Stunden oder Tagen.' },
              { label: '2. Fokus', text: 'Aufmerksamkeit dort halten, wo sie soll. Und: wechseln, wenn nötig (oft schwerer als starten).' },
              { label: '3. Anstrengung', text: 'Energie über längere Zeit aufrechterhalten — besonders für Dinge, die nicht dopaminwirksam sind.' },
              { label: '4. Emotion', text: 'Große Gefühle, schnell eskalierend, schnell wieder weg. Das Nervensystem schwingt stärker aus.' },
              { label: '5. Gedächtnis', text: 'Arbeitsgedächtnis — nicht Fakten, sondern „was wollte ich gerade holen". Und: Zeitgefühl (jetzt/nicht-jetzt).' },
              { label: '6. Handlung', text: 'Selbstbeobachtung und Impulskontrolle. Zwischen Reiz und Reaktion ist oft weniger Raum als bei anderen.' }
            ] },
          { name: 'Selbstverortung', title: 'Wo erkennst du dich?', duration: 12*60,
            hostNote: 'Reihum, je 1-2 Min. Keine Diagnose — Bauchgefühl reicht. Mehrfachnennungen sind normal.',
            question: 'In welchen der sechs Funktionen zeigt sich bei dir am deutlichsten, dass dein System anders tickt — und wie sieht das im Alltag aus?' },
          { name: 'Ferrari', title: 'Der Ferrari mit Fahrradbremsen', duration: 8*60,
            hostNote: 'Reihum, ein konkretes Beispiel.',
            description: 'Hallowells Bild sagt zwei Dinge gleichzeitig: Ihr habt einen starken Motor — UND keine passenden Bremsen. Hyperfokus ist Ferrari. Dopamin-Hunger, der euch in 3-Stunden-Projekte stürzt, ist Ferrari. Plötzliche geniale Querverbindungen, die niemand sonst sieht — Ferrari.\n\nDie Fahrradbremsen: Beim Aufhören, Aufschieben, Kontextwechsel, beim „diesen langweiligen Brief beantworten". Ihr wart nicht faul — ihr habt versucht, mit Fahrrad-Mitteln Ferrari zu fahren, jahrelang.',
            question: 'Was ist dein Ferrari — wo läuft dein Motor, wenn er läuft? Und wo merkst du die Fahrrad-Bremsen am deutlichsten?' },
          { name: 'Hyperfokus', title: 'Superkraft und Falle', duration: 7*60,
            hostNote: 'Reihum. Ein konkretes Beispiel aus den letzten Wochen.',
            description: 'Hyperfokus ist das am meisten missverstandene ADHS-Phänomen. Er ist nicht „Konzentration nach Wunsch". Er ist: wenn das Gehirn sich etwas ausgesucht hat und dich darin gefangen nimmt. 6 Stunden ein Video-Game. Ein ganzes Wochenende in einer neuen Leidenschaft. Ein Projekt, bei dem du vergisst zu essen.\n\nDie Superkraft: In 4 Stunden Hyperfokus machst du manchmal, wofür andere zwei Wochen brauchen. Die Falle: Es ist nicht willentlich. Du kannst ihn nicht bestellen. Und er kommt oft für die falschen Dinge.',
            question: 'Wann warst du zuletzt im Hyperfokus — und hat er dir geholfen oder dich in den Schlaf verfolgt?' },
          { name: 'RSD', title: 'Rejection Sensitive Dysphoria', duration: 7*60,
            hostNote: 'Host liest vor. Wer nickt, nickt.',
            quote: { text: 'Es ist nicht, dass ADHS-Menschen zu empfindlich sind. Es ist, dass ihre Nervenzellen schneller und intensiver feuern — auch bei sozialem Schmerz.', author: 'William Dodson' },
            description: 'RSD — Rejection Sensitive Dysphoria — ist ein Begriff des ADHS-Forschers William Dodson. Er beschreibt die extreme Reaktion vieler ADHS-Menschen auf Kritik, Zurückweisung oder auch nur den Eindruck davon.\n\nEin unbeantwortetes „Hallo" — und du bist am Ende. Ein kritischer Blick — und du bist drei Tage am Grübeln. Ein Kommentar, den andere locker nehmen — und du bist zwei Wochen innerlich damit beschäftigt.\n\nDas ist kein „zu empfindlich sein". Das ist eine real gemessene neurobiologische Reaktion. Wer das nicht weiß, hält sich selbst für verrückt.',
            question: 'Kennst du das — und wie zeigt es sich bei dir konkret?' },
          { name: 'Scham', title: 'Die heimliche Begleiterin', duration: 8*60,
            hostNote: 'Reihum, je 1-2 Min. Vorsichtig — das hier ist oft die schwerste Station. „Pass" ist explizit willkommen.',
            quote: { text: 'Scham entsteht nicht aus dem, was wir getan haben. Scham entsteht aus dem, wofür wir uns halten.', author: 'Brené Brown' },
            description: 'Viele ADHS-Menschen haben 20, 30, 40 Jahre Feedback bekommen: zu laut, zu langsam, zu chaotisch, nicht fokussiert, unzuverlässig, faul, „du könntest, wenn du nur wolltest". Das hinterlässt Spuren.\n\nDie Scham ist oft das eigentliche Problem — nicht das ADHS selbst. Sie macht aus einer Besonderheit eine Identität des Versagens: „Ich bin so", nicht „mein System tickt so".\n\nBrené Brown unterscheidet Schuld (ich habe was Falsches getan) von Scham (ich bin falsch). ADHS-Scham ist meistens die zweite. Sie löst sich nicht durch mehr Leistung — nur durch Gesehen-werden.',
            question: 'Welche Scham hast du dir selbst geglaubt — und woher kam die Stimme, die sie dir eingeimpft hat?' },
          { name: 'Körper', title: 'Wo dein Nervensystem es zuerst zeigt', duration: 6*60,
            hostNote: 'Reihum, ein Wort oder kurzer Satz. Spüren, nicht denken.',
            description: 'ADHS ist nicht nur im Kopf. Der Körper zeigt es oft zuerst: Unruhe in den Beinen. Kiefer-Spannung. Tausend Gedanken gleichzeitig als körperliches Rauschen. Oder — andersrum — die plötzliche bleierne Erschöpfung nach einem Meeting, in dem du „nur" da sein musstest.\n\nDas Nervensystem arbeitet mehr. Auch wenn man es von außen nicht sieht.',
            question: 'Wo in deinem Körper zeigt sich ADHS-Überreizung zuerst — und wann merkst du sie im Alltag?' },
          { name: 'Wurzeln', title: 'Wo bist du rausgefallen?', duration: 10*60,
            hostNote: 'Reihum, je 1-2 Min. Eine Szene aus Schule, Familie, früher Arbeit. Nicht Tiefenanalyse — ein Bild.',
            description: 'Viele von euch haben eine Schicht von Erinnerungen: das Mathe-Heft, in dem ihr nicht fertig wurdet. Die Elternsprechstunde. Die WG-Putzpläne. Die ersten Jobs, die anders liefen als geplant.\n\nDas sind nicht nur Anekdoten. Das sind die Orte, an denen euer System zum ersten Mal gegen eine Welt gelaufen ist, die für anders verdrahtete Menschen gebaut war. Manche von euch haben jahrzehntelang versucht, Normalität zu performen — was enorme Energie kostet.',
            question: 'Welche Szene aus deiner Schul-/Jugendzeit steht für „hier bin ich rausgefallen" — und was hat sie dir über dich gelehrt, das vielleicht nicht stimmt?' },
          { name: 'Schaffen', title: 'Was du trotzdem geschafft hast', duration: 7*60,
            hostNote: 'Reihum, ohne zu relativieren. Wirklich Anerkennung aussprechen.',
            description: 'Wer mit ADHS bis hierher gekommen ist, hat ungezählte Dinge geleistet, die Menschen ohne nie leisten mussten. Morgens aufstehen, wenn das System nicht will. Verpflichtungen einhalten, obwohl die Zeit nichts bedeutet. Beziehungen pflegen, trotz RSD. Das ist keine „Normalität" — das ist tägliche, unsichtbare Arbeit.',
            question: 'Was hast du trotzdem geschafft — was dir heute wie selbstverständlich vorkommt, aber für jemanden wie dich eigentlich Hochleistung war?' },
          { name: 'Werkzeuge', title: 'Body Doubling & Externalisierung', duration: 6*60,
            hostNote: 'Host liest kurz vor. Reihum: welches der Werkzeuge kennst du schon?',
            description: 'Die wichtigsten ADHS-Werkzeuge sind weder Apps noch Medikamente. Es sind simple Mechanismen, mit denen das exekutive System entlastet wird:',
            items: [
              { label: 'Body Doubling', text: 'Eine andere Person im Raum, während du arbeitest. Kein Gespräch nötig. Allein das Mitsein macht Unmögliches möglich.' },
              { label: 'Externalisierung', text: 'Alles aus dem Kopf raus — auf Papier, in Kalender, in Reminders. Das Arbeitsgedächtnis hat nicht viel Platz.' },
              { label: 'Dopamin-Struktur', text: 'Langweilige Aufgaben an dopaminwirksame Dinge koppeln: Musik, Kaffee, Bewegung, Belohnung danach.' },
              { label: 'Nicht-Pause-Pausen', text: 'Echte Pausen ohne Screen. Sonst schlürft der Kopf weiter, ohne zu erholen.' }
            ] },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Alle schauen zur Kerze oder schließen die Augen. Zwei Minuten. Fidget ist okay.',
            description: 'Nach dem, was eben im Raum war, braucht es Luft. Auch für ADHS-Nervensysteme — vielleicht besonders.' },
          { name: 'Medikation', title: 'Ein Werkzeug unter anderen', duration: 6*60,
            hostNote: 'Sehr vorsichtig. Reihum — oder einfach reihum „pass". Niemand muss hier seine Position verteidigen.',
            description: 'Medikation ist einer der meist-polarisierten Teile des ADHS-Diskurses. Wir machen hier keine Empfehlung. Wichtig zu wissen:\n\nADHS-Medikation ist unter den bestuntersuchten Psychopharmaka überhaupt — wirkt bei etwa 70-80 % derer, die sie nehmen. Sie ist kein Charakter-Eingriff, sondern ein Werkzeug für das exekutive System. Für manche lebensverändernd. Für andere nicht nötig. Beides ist in Ordnung.',
            question: 'Wie stehst du gerade zum Thema Medikation — und was hat deine Haltung geformt?' },
          { name: 'Mitgefühl', title: 'Selbstmitgefühl statt Selbsttherapie', duration: 5*60,
            hostNote: 'Reihum, ein Satz — an dein jüngeres Ich.',
            quote: { text: 'Du wirst niemanden finden, der härter mit dir ist als du selbst. Und niemand wird dich besser verstehen, wenn du nicht anfängst, mit dir selbst zu sprechen, wie du mit einem guten Freund sprichst.', author: 'Kristin Neff (sinngemäß)' },
            description: 'ADHS-Menschen sind oft ihre eigenen schärfsten Kritiker — als hätten sie die ganze Welt-Kritik internalisiert. Kristin Neffs Forschung zum Selbstmitgefühl zeigt: Wer sich selbst begegnet wie einem Freund, ändert sich schneller als durch weitere Selbstoptimierung.',
            question: 'Was würdest du heute zu deinem 8-jährigen Ich sagen — mit dem, was du jetzt weißt?' },
          { name: 'Setting', title: 'Was braucht mein System wirklich?', duration: 8*60,
            hostNote: 'Reihum, 1-2 Min. Konkret.',
            description: 'Statt zu fragen, was du ändern solltest, frag was dein Setting anders braucht. Welche Umgebung macht dein Motor rund? Welche macht ihn stumpf? Manche brauchen Routinen, andere sterben daran. Manche brauchen Menschen in der Nähe, andere zerbrechen in Großraumbüros. Niemand weiß das besser als du — wenn du dir mal erlaubst, es zu wissen.',
            question: 'Was braucht dein System, um gut zu funktionieren — und was hättest du längst ändern können, tust es aber nicht?' },
          { name: 'Schritt', title: 'Ein konkretes Setting-Experiment', duration: 8*60,
            hostNote: 'Reihum, ein Satz. Konkret, klein, diese Woche. Auf einen Zettel.',
            description: 'Nicht „ich arbeite an meiner Struktur". Sondern: „Mittwoch probiere ich Body Doubling mit Paul — wir sitzen für zwei Stunden zusammen am Tisch und arbeiten parallel." Oder: „Ich lege mein Handy ab 21 Uhr in die Küche, nicht mehr neben das Bett."',
            question: 'Welches eine konkrete Setting-Experiment machst du diese Woche?' },
          { name: 'Wort', title: 'Ein Wort zum Abschied', duration: 4*60,
            hostNote: 'Reihum, ein Wort. Keine Begründung.',
            question: 'Ein Wort, mit dem du heute nach Hause gehst.' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 40 Min.',
        people: '2 Personen (beide ADHS, oder einer ADHS + Partner:in, oder zwei Freund:innen)',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor ihr anfangt', duration: 3*60,
            hostNote: 'Kerze anzünden. Handys stumm weit weg. Drei gemeinsame Atemzüge — ohne Kommentar.',
            description: 'Der Abend geht an einen heiklen Ort. Gebt euch diesen Moment, bevor die Schutzwände automatisch hochgehen.' },
          { name: 'Ankommen', title: 'Wie geht es dir wirklich?', duration: 10*60,
            hostNote: 'Beide nacheinander, je 4 Min. Der/die andere hört zu, ohne zu reagieren — kein Nicken als Trost, kein Lösungsvorschlag.',
            question: 'Wie geht es dir gerade — ehrlich, nicht höflich? Und was hast du mit hierher gebracht?' },
          { name: 'Einstieg', title: 'Was ADHS ist — und was nicht', duration: 7*60,
            hostNote: 'Eine:r liest vor. Danach kurze Stille, bevor ihr weitermacht.',
            quote: { text: 'Der ADHS-Gehirn ist wie ein Sportwagen mit Fahrrad-Bremsen.', author: 'Edward Hallowell' },
            description: 'ADHS ist keine Störung im Sinne von „kaputt". Es ist eine andere Regulation — Aufmerksamkeit, Zeit, Emotionen, Impulse arbeiten anders. Nicht weniger.\n\nDer Abend heute ist eine Chance, gemeinsam zu schauen: Wo geht euer Motor gut? Wo läuft ihr gegen Wände? Und: Wie sieht das System vom anderen aus — nicht von innen, sondern von außen?' },
          { name: 'Meine Landkarte', title: 'Meine Executive-Landkarte', duration: 12*60,
            hostNote: 'Jede:r je 4 Min: „In welchen der sechs exekutiven Funktionen merke ich mein ADHS am meisten?" Der/die andere hört.',
            description: 'Barkley und Brown unterscheiden sechs Funktionen, die bei ADHS anders arbeiten — keine ist kaputt, alle laufen nur nicht nach Lehrbuch. Nutzt die Liste als Landkarte, nicht als Diagnose: Wo erkennst du dich sofort — und wo bist du überrascht, dass es dazugehört?',
            items: [
              { label: '1.', text: 'Aktivierung — Anfangen' },
              { label: '2.', text: 'Fokus — Halten und wechseln' },
              { label: '3.', text: 'Anstrengung — Energie aufrechterhalten' },
              { label: '4.', text: 'Emotion — Große Gefühle' },
              { label: '5.', text: 'Gedächtnis — Arbeitsgedächtnis, Zeitgefühl' },
              { label: '6.', text: 'Handlung — Impulskontrolle' }
            ] },
          { name: 'Was ich sehe', title: 'Was ich bei dir sehe', duration: 10*60,
            hostNote: 'Beide abwechselnd: „Was ich an dir bewundere, das vielleicht mit deinem ADHS zu tun hat — ist…" Der/die andere antwortet nur mit „Danke". Keine Relativierung.',
            question: 'Welche Stärke siehst du beim anderen, die oft als „Schwäche" gilt — die aber eigentlich Motor ist?' },
          { name: 'Reibung', title: 'Wo wir aneinander reiben', duration: 14*60,
            hostNote: 'Jede:r 6 Min: „Wo reibt dein System an meinem — und wo meines an deinem?" Ohne Vorwurf, ohne Verteidigung. Nur Beschreibung.',
            description: 'Bei Paaren, wo einer ADHS hat und der/die andere nicht, entstehen oft dieselben Konflikte: unterschiedliches Zeitgefühl, verschiedenes Tempo, vergessene Abmachungen, emotional intensivere Reaktionen. Wer das als „Charakterfehler" liest, landet in Dauer-Streit. Wer das als Betriebssystem-Unterschied liest, kann Lösungen suchen.',
            question: 'Wo reibt sich dein System mit meinem am meisten — und gab es Momente, wo du gedacht hast, ich tue das absichtlich?' },
          { name: 'Scham', title: 'Die Scham, die niemand sieht', duration: 10*60,
            hostNote: 'Jede:r je 4 Min. Der/die andere hört. Kein Trösten, kein „so schlimm ist das doch nicht".',
            description: 'Viele ADHS-Menschen tragen eine Schicht Scham, die Partner:innen nie vollständig sehen. Die kleinen Momente der Selbstverurteilung. Die Sätze, die sie sich innerlich sagen, wenn sie wieder etwas vergessen. Heute dürft ihr das mal laut werden lassen.',
            question: 'Welche Scham trägst du im Alltag, die ich nicht sehe — und welchen Satz sagst du dir oft im Stillen?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Schaut zur Kerze oder aufeinander. Nichts sagen.',
            description: 'Was gerade im Raum war, wirkt länger, wenn ihr es nicht überdeckt.' },
          { name: 'Bitte', title: 'Eine konkrete Bitte', duration: 8*60,
            hostNote: 'Jede:r eine. Klein und konkret — nicht „unterstütz mich mehr", sondern „Wenn ich vergesse X, erinner mich einmal freundlich — dann lass es".',
            question: 'Was wäre eine kleine konkrete Bitte an mich, die dir in dieser Woche helfen würde?' },
          { name: 'Experiment', title: 'Ein gemeinsames Experiment', duration: 8*60,
            hostNote: 'Ein Ritual oder Setup, das ihr eine Woche ausprobiert. Auf einen Zettel.',
            description: 'Body Doubling, gemeinsame Zeit-Boxen, Handy-Parkplatz ab einer Uhrzeit, ein Sonntagabend-Wochencheck zu zweit — sucht eine Sache aus, die euch beiden hilft.',
            question: 'Welches eine Experiment startet ihr diese Woche zusammen?' },
          { name: 'Wort', title: 'Ein Wort fürs Nach-Hause-Gehen', duration: 4*60,
            hostNote: 'Beide ein Wort. Ohne Begründung.',
            question: 'Ein Wort, mit dem du von heute mitgehst.' }
        ])
      },
      solo: {
        label: 'Allein',
        duration: '~55 Min.',
        people: 'Nur du',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor du anfängst', duration: 3*60,
            hostNote: 'Kerze anzünden. Handy weit weg (ja, wirklich). Drei tiefe Atemzüge. Fidget ist okay, Screen nicht.',
            description: 'Dieser Abend geht an einen Ort, den du oft alleine zu vermeiden gelernt hast: still zu sitzen, hinzuschauen, nicht zu optimieren. Das ist hart für ein ADHS-Nervensystem. Fang trotzdem an.' },
          { name: 'Ankommen', title: 'Wie geht es dir gerade wirklich?', duration: 3*60,
            hostNote: 'Schreibe oder sprich laut für dich. Nicht die Kurzfassung.',
            question: 'Wie geht es dir gerade — und was hast du mit hierher gebracht?' },
          { name: 'Einstieg', title: 'Vom Defizit zur Gestaltung', duration: 5*60,
            hostNote: 'Lies langsam. Zweimal.',
            quote: { text: 'Menschen mit ADHS haben kein Problem mit Aufmerksamkeit. Sie haben ein Problem, ihre Aufmerksamkeit zu regulieren.', author: 'Russell Barkley' },
            description: 'ADHS wurde jahrzehntelang als Defekt beschrieben. Die moderne Forschung zeichnet ein anderes Bild: Nicht zu wenig Aufmerksamkeit — eine andere Regulation. Hallowell: „Ferrari-Motor mit Fahrrad-Bremsen."\n\nHeute schaust du darauf, wie dein Motor läuft — und welche Bremsen du vielleicht nie verstanden hast.' },
          { name: 'Executive', title: 'Die sechs Funktionen — wo du dich erkennst', duration: 6*60,
            hostNote: 'Lies die sechs. Bei jeder: passt das? Schreibe kurz, wenn ja.',
            items: [
              { label: '1. Aktivierung', text: 'Anfangen. Der Sumpf zwischen „ich sollte" und „ich tue".' },
              { label: '2. Fokus', text: 'Halten, wo er soll. Und: wechseln, wenn nötig.' },
              { label: '3. Anstrengung', text: 'Energie aufrechterhalten — besonders bei Dopamin-armem Zeug.' },
              { label: '4. Emotion', text: 'Große, schnell schwingende Gefühle.' },
              { label: '5. Gedächtnis', text: 'Arbeitsgedächtnis und Zeitgefühl.' },
              { label: '6. Handlung', text: 'Impulskontrolle — weniger Raum zwischen Reiz und Reaktion.' }
            ] },
          { name: 'Ferrari', title: 'Dein Motor — wo läuft er?', duration: 5*60,
            hostNote: 'Schreibe 4 Min am Stück. Konkrete Beispiele.',
            description: 'Hallowells Ferrari-Bild sagt: Du hast einen starken Motor. Hyperfokus ist Ferrari. Querverbindungen, die andere nicht sehen, sind Ferrari. Tiefe Leidenschaft für Themen ist Ferrari. Welche deiner Fähigkeiten siehst du erst als Stärke, wenn du sie als ADHS-Spielart verstehst?',
            question: 'Was läuft bei dir, wenn dein Motor läuft — und merkst du manchmal, dass andere das für normal halten, es aber eigentlich nicht ist?' },
          { name: 'Hyperfokus', title: 'Superkraft oder Falle?', duration: 5*60,
            hostNote: 'Schreibe. Ein konkretes Beispiel aus den letzten Wochen.',
            description: 'Hyperfokus ist nicht „Konzentration nach Wunsch". Er ist: wenn dein Gehirn sich etwas ausgesucht hat und dich gefangen nimmt. Superkraft (4 Stunden = 2 Wochen Normalarbeit) und Falle (für die falschen Dinge, zum falschen Zeitpunkt).',
            question: 'Wann warst du zuletzt im Hyperfokus — und hat er dir geholfen oder dich in die Nacht verfolgt?' },
          { name: 'RSD', title: 'Rejection Sensitive Dysphoria', duration: 5*60,
            hostNote: 'Lies vor. Wenn du nickst, schreib einen Satz.',
            quote: { text: 'Es ist nicht, dass ADHS-Menschen zu empfindlich sind. Ihre Nervenzellen feuern schneller und intensiver — auch bei sozialem Schmerz.', author: 'William Dodson' },
            description: 'RSD — der extreme Schmerz bei Zurückweisung, Kritik, oder dem Eindruck davon. Nicht „zu empfindlich sein" — neurobiologisch gemessen. Wer das nicht weiß, hält sich selbst für verrückt.',
            question: 'Wie zeigt sich RSD bei dir konkret — und welche Szene hat dich zuletzt unverhältnismäßig lange beschäftigt?' },
          { name: 'Scham', title: 'Die heimliche Begleiterin', duration: 6*60,
            hostNote: 'Schreibe ausführlich — niemand liest das. 5 Minuten am Stück.',
            quote: { text: 'Scham entsteht nicht aus dem, was wir getan haben. Scham entsteht aus dem, wofür wir uns halten.', author: 'Brené Brown' },
            description: 'Viele ADHS-Menschen tragen eine Schicht Scham — aus 20, 30, 40 Jahren Feedback: zu chaotisch, unzuverlässig, „du könntest ja, wenn du wolltest". Die Scham ist oft das eigentliche Problem, nicht das ADHS.',
            question: 'Welche Scham hast du dir selbst geglaubt — und welchen Satz sagst du dir innerlich, den du einem Freund nie sagen würdest?' },
          { name: 'Körper', title: 'Wo dein Nervensystem es zeigt', duration: 4*60,
            hostNote: 'Augen zu — spüren. Dann schreibe ein Wort.',
            description: 'ADHS ist nicht nur im Kopf. Unruhe in den Beinen. Kieferspannung. Plötzliche Erschöpfung nach Meetings. Das Nervensystem arbeitet mehr.',
            question: 'Wo zeigt sich ADHS-Überreizung zuerst in deinem Körper?' },
          { name: 'Schule', title: 'Wo bist du rausgefallen?', duration: 6*60,
            hostNote: 'Schreibe eine konkrete Szene. Nicht analysieren — beschreiben.',
            description: 'Viele von euch haben eine Schicht Erinnerungen: das Mathe-Heft nicht fertig. Die Elternsprechstunde. Die ersten Jobs. Das sind Orte, wo euer System gegen eine Welt gelaufen ist, die für anders Verdrahtete gebaut war.',
            question: 'Welche Schul-/Jugendszene steht für „hier bin ich rausgefallen" — und was hat sie dir über dich gelehrt, das vielleicht nicht stimmt?' },
          { name: 'Schaffen', title: 'Was du trotzdem geschafft hast', duration: 4*60,
            hostNote: 'Schreibe — ohne zu relativieren. „Kleinigkeiten" zählen.',
            description: 'Wer mit ADHS bis hier gekommen ist, hat ungezählte Dinge geleistet, die andere nie leisten mussten. Aufstehen, wenn das System nicht will. Verpflichtungen einhalten, obwohl Zeit nichts bedeutet. Das ist tägliche, unsichtbare Arbeit.',
            question: 'Was hast du trotzdem geschafft — was dir heute selbstverständlich vorkommt, aber eigentlich Hochleistung war?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            hostNote: 'Augen zu. Nichts schreiben. Fidget ist okay.',
            description: 'Auch ADHS-Nervensysteme brauchen Stille. Vielleicht besonders.' },
          { name: 'Mitgefühl', title: 'Ein Brief an dein 8-jähriges Ich', duration: 5*60,
            hostNote: 'Schreibe 4 Min. Nicht erklären — einfach dem Kind sagen, was es damals hätte hören sollen.',
            quote: { text: 'Du wirst niemanden finden, der härter mit dir ist als du selbst.', author: 'Kristin Neff (sinngemäß)' },
            description: 'Kristin Neffs Forschung zum Selbstmitgefühl zeigt: Wer sich selbst begegnet wie einem Freund, ändert sich schneller als durch weitere Selbstoptimierung.',
            question: 'Was würdest du heute deinem 8-jährigen Ich sagen — mit dem, was du jetzt weißt?' },
          { name: 'Setting', title: 'Was braucht dein System wirklich?', duration: 4*60,
            hostNote: 'Schreibe — konkret.',
            description: 'Statt zu fragen, was du ändern solltest, frag: was braucht dein Setting anders? Welche Umgebung macht deinen Motor rund? Welche stumpft ihn?',
            question: 'Was braucht dein System, um gut zu funktionieren — und was hättest du längst ändern können, tust es aber nicht?' },
          { name: 'Experiment', title: 'Ein konkretes Setting-Experiment', duration: 4*60,
            hostNote: 'Schreibe auf einen Zettel — konkret, diese Woche.',
            description: 'Nicht „ich arbeite an meiner Struktur". Sondern: „Mittwoch teste ich Body Doubling mit X für 2 Stunden" oder „Handy ab 21 Uhr in die Küche, nicht neben das Bett".',
            question: 'Welches eine konkrete Experiment probierst du diese Woche?' },
          { name: 'Wort', title: 'Ein Wort als Kompass', duration: 2*60,
            hostNote: 'Ein Wort. Auf einen Zettel.',
            question: 'Welches Wort begleitet dich durch diese Woche?' }
        ])
      }
    }
  },

  // =====================================================================
  // INNERES KIND — Was früh gelernt wurde, regiert bis heute mit
  // Frei nach der Tradition der Inneres-Kind-Arbeit: Eric Berne
  // (Transaktionsanalyse), John Bradshaw, Alice Miller, Donald Winnicott,
  // Jeffrey Young (Schematherapie) — im deutschsprachigen Raum populär
  // geworden durch Stefanie Stahls „Das Kind in dir muss Heimat finden".
  // Eigenständige Bearbeitung, keine Wiedergabe geschützter Übungen.
  // Sensibles Thema: „Pass" gilt an jeder Station. Kein Therapie-Ersatz.
  // =====================================================================
  inneres_kind: {
    title: 'Das Kind in mir',
    subtitle: 'Was früh gelernt wurde — und bis heute mitredet',
    category: 'Identität',
    lead: 'Ein Abend über die Prägungen aus den ersten Jahren: die Sätze, die wir als Kinder über uns gelernt haben, die Schutzstrategien, die daraus wurden — und das freie, neugierige Kind, das unter beidem oft verschüttet liegt. Kein Therapie-Ersatz, keine Familien-Anklage: ein ehrlicher, gut gehaltener Blick. An jeder Station gilt „Pass" — niemand muss irgendwo hin, wo er nicht will.',
    image: 'images/inneres-kind.jpg',
    philosophy1: 'Die Idee ist älter als jeder Ratgeber: In jedem Erwachsenen leben die Erfahrungen des Kindes weiter, das er war. Eric Berne nannte diese Instanz das „Kind-Ich", John Bradshaw sprach vom inneren Kind, die Schematherapie von früh gelernten Grundüberzeugungen — und Stefanie Stahl hat mit „Das Kind in dir muss Heimat finden" Millionen Menschen dafür die Sprache gegeben. Der Kern ist immer derselbe: Was wir in den ersten Jahren über uns und die Welt gelernt haben, läuft heute als leises Programm im Hintergrund — besonders dann, wenn es eng wird.',
    philosophy2: 'Dieser Abend diagnostiziert nichts und heilt nichts — das wäre zu viel versprochen. Er macht etwas Bescheideneres und vielleicht Wichtigeres: Er macht das Programm sichtbar. Wer den Satz kennt, der in ihm wohnt („Ich genüge nicht", „Ich darf niemandem zur Last fallen"), reagiert nicht mehr blind aus ihm heraus. Und wer sich erinnert, was er als Kind geliebt hat, weiß plötzlich wieder, wohin die Freude verschwunden ist. Wenn an diesem Abend alte Wunden aufgehen, die zu groß für einen Wohnzimmertisch sind: Das ist kein Scheitern — das ist ein Hinweis, sich professionelle Begleitung zu holen. Auch das darf hier laut gesagt werden.',
    formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std. 15 Min.',
        people: '3-8 Personen, die einander wohlwollen (eher kleiner Kreis — das Thema trägt weit)',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor wir anfangen', duration: 3*60,
            teaser: 'Kerze an, Handys weg — und eine Verabredung, die den ganzen Abend gilt.',
            hostNote: 'Kerze anzünden. Handys stumm und aus dem Raum. Drei gemeinsame Atemzüge. Dann die Verabredung laut aussprechen — sie ist an diesem Abend wichtiger als an anderen.',
            description: 'Heute geht es dorthin, wo wir alle herkommen — in die Kindheit. Dafür braucht es eine Verabredung: Alles, was hier erzählt wird, bleibt hier. Niemand muss irgendetwas erzählen — „Pass" ist an jeder Station ein vollständiger Satz. Und: Dieser Abend ist keine Therapie. Er ist ein ehrliches Gespräch unter Menschen, die einander wohlwollen. Wenn etwas zu groß wird, darf es zu groß sein — dann tragen wir es nicht alleine weiter.' },
          { name: 'Ankommen', title: 'Wie alt fühlst du dich gerade?', duration: 12*60,
            teaser: 'Eine ungewohnte Ankommens-Frage — und eine erste Spur zum Thema.',
            hostNote: 'Reihum, je 1-2 Min. Die Frage klingt seltsam — genau deshalb funktioniert sie. Keine Erklärung nötig, Bauchantwort reicht.',
            question: 'Wie kommst du heute hier an — und wie alt fühlst du dich gerade? Nicht auf dem Papier: innen.' },
          { name: 'Einstieg', title: 'Das Kind, das mitgekommen ist', duration: 7*60,
            teaser: 'Die Grundidee des Abends — in drei Minuten, ohne Esoterik.',
            hostNote: 'Host liest langsam vor. Danach kurze Stille.',
            quote: { text: 'Im Erwachsenen ist ein Kind verborgen — ein ewiges Kind, das beständiger Pflege, Aufmerksamkeit und Erziehung bedarf.', author: 'C.G. Jung (sinngemäß)' },
            description: 'Das „innere Kind" ist keine Esoterik, sondern ein Bild für etwas sehr Nüchternes: Die ersten Lebensjahre bauen das emotionale Fundament. Was ein Kind über sich lernt — ob es willkommen ist, ob es genügt, ob Gefühle gefährlich sind —, das lernt es nicht als Meinung, sondern als Betriebssystem. Es wird nicht erinnert, es wird gelebt.\n\nDie gute Nachricht des Abends: Ein Programm, das sichtbar wird, verliert seine heimliche Macht. Genau das machen wir heute — hinschauen, benennen, und am Ende dem Kind etwas zurückgeben, das ihm gefehlt hat.' },
          { name: 'Modell', title: 'Drei, die in dir wohnen', duration: 7*60,
            teaser: 'Ein einfaches Modell mit drei inneren Instanzen — Werkzeug für den ganzen Abend.',
            hostNote: 'Host liest die drei kurz vor. Kein Diskutieren — nur innerlich prüfen: kenne ich alle drei?',
            description: 'Ein einfaches Werkzeug für heute Abend, in der Tradition von Transaktionsanalyse und Schematherapie — drei Instanzen, die in jedem von uns wohnen:',
            items: [
              { label: 'Das verletzte Kind', text: 'Der Teil, der die alten Sätze glaubt („Ich genüge nicht", „Ich darf nicht zur Last fallen"). Er meldet sich nicht mit Worten, sondern mit Gefühl: plötzliche Scham, alte Angst, unverhältnismäßige Wut — immer dann, wenn eine heutige Situation an eine alte erinnert.' },
              { label: 'Das freie Kind', text: 'Neugier, Spiel, Quatsch, Staunen, Hingabe. Der Teil, der früher stundenlang versunken bauen, malen, träumen konnte. Bei vielen Erwachsenen der am gründlichsten verschüttete Teil — nicht verschwunden, nur verlernt.' },
              { label: 'Der innere Erwachsene', text: 'Die Instanz, die heute prüfen kann, was damals stimmte und was nicht. Sie kann das verletzte Kind ernst nehmen, ohne ihm das Steuer zu geben — und dem freien Kind wieder Raum verschaffen. Sie ist der Gastgeber dieses Abends.' }
            ] },
          { name: 'Glaubenssätze', title: 'Die Sätze, die wir mitbekommen haben', duration: 10*60,
            teaser: 'Acht Sätze — mindestens einer liest sich, als hätte ihn jemand bei dir abgeschrieben.',
            hostNote: 'Host liest alle acht langsam vor. Danach reihum: Welcher ist deiner? Nur benennen, noch nicht erzählen — das kommt in der nächsten Station.',
            description: 'Glaubenssätze sind das Kondensat der Kindheit: kurze Sätze über uns selbst, die sich anfühlen wie Tatsachen. Niemand hat sie uns wörtlich beigebracht — wir haben sie aus tausend kleinen Momenten destilliert. Ein paar der häufigsten:',
            items: [
              { label: '1.', text: '„Ich genüge nicht."' },
              { label: '2.', text: '„Ich muss es allen recht machen."' },
              { label: '3.', text: '„Ich darf keine Fehler machen."' },
              { label: '4.', text: '„Ich muss stark sein — Gefühle zeigen ist gefährlich."' },
              { label: '5.', text: '„Ich bin nur wertvoll, wenn ich etwas leiste."' },
              { label: '6.', text: '„Ich darf niemandem zur Last fallen."' },
              { label: '7.', text: '„Wenn ich zu viel bin, werde ich verlassen."' },
              { label: '8.', text: '„Ich bin verantwortlich dafür, dass es den anderen gut geht."' }
            ],
            question: 'Welcher dieser Sätze liest sich, als hätte ihn jemand bei dir abgeschrieben — und wo taucht er in deinem heutigen Alltag auf?' },
          { name: 'Herkunft', title: 'Woher der Satz kommt', duration: 15*60,
            teaser: 'Eine Szene von früher — kein Verhör, keine Anklage. „Pass" ist jederzeit okay.',
            hostNote: 'Reihum, je 2-3 Min. Sehr behutsam. „Pass" ist ausdrücklich willkommen — auch mitten im Satz. Kein Nachfragen, kein Deuten durch andere. Wichtig: Es geht nicht um Schuldzuweisung an Eltern — die meisten haben gegeben, was sie hatten.',
            description: 'Glaubenssätze haben eine Adresse: eine Zeit, ein Haus, eine wiederkehrende Szene. Oft ist es nichts Dramatisches — es reicht, dass etwas oft genug passiert ist. Der Vater, der nur beim Zeugnis aufgeschaut hat. Die Mutter, die selbst zu erschöpft war. Das Geschwisterkind, das lauter war.\n\nEs geht heute nicht darum, jemanden anzuklagen. Eltern sind fast immer selbst Kinder ihrer Kindheit. Es geht darum zu verstehen, wo der Satz herkommt — damit er ein Datum bekommt statt ewig gültig zu sein.',
            question: 'Gibt es eine Szene oder ein wiederkehrendes Muster von früher, das zu deinem Satz passt — und magst du es erzählen?' },
          { name: 'Schutz', title: 'Was das Kind sich ausgedacht hat', duration: 10*60,
            teaser: 'Sechs Strategien, mit denen Kinder sich schützen — und Erwachsene sich verpassen.',
            hostNote: 'Host liest die sechs vor. Reihum: welche fährst du — und in welchen Situationen springt sie an?',
            description: 'Kinder sind nicht passiv: Gegen jeden schmerzhaften Satz entwickeln sie eine Strategie. Das war damals klug — es hat funktioniert. Die Frage ist nur, ob die Strategie heute noch dient oder längst selbst das Problem ist:',
            items: [
              { label: 'Perfektionismus', text: 'Wenn alles fehlerfrei ist, kann niemand etwas an mir aussetzen.' },
              { label: 'Harmoniestreben', text: 'Wenn alle zufrieden sind, bin ich sicher. Konflikt = Gefahr.' },
              { label: 'Leistung', text: 'Solange ich liefere, gehöre ich dazu. Ruhe fühlt sich wie Risiko an.' },
              { label: 'Rückzug', text: 'Wer sich nicht zeigt, kann nicht verletzt werden. Lieber allein als abgelehnt.' },
              { label: 'Kontrolle', text: 'Wenn ich alles im Griff habe, kann mich nichts mehr überraschen wie damals.' },
              { label: 'Helfen', text: 'Wer gebraucht wird, wird nicht weggeschickt. Eigene Bedürfnisse? Später.' }
            ],
            question: 'Welche dieser Strategien ist deine — und was kostet sie dich heute?' },
          { name: 'Trigger', title: 'Wenn das Kind das Steuer übernimmt', duration: 10*60,
            teaser: 'Der 40-Jährige, der sich plötzlich wie 7 fühlt — woran du merkst, wer gerade fährt.',
            hostNote: 'Reihum, ein konkretes Beispiel aus den letzten Wochen. Gern auch ein kleines, alltägliches.',
            quote: { text: 'Solange das verletzte Kind unbeachtet bleibt, führt es aus dem Verborgenen Regie.', author: 'John Bradshaw (sinngemäß)' },
            description: 'Woran merkt man, dass das verletzte Kind gerade fährt? An der Unverhältnismäßigkeit. Die Kollegin übergeht dich im Meeting — und du bist nicht 20 % verärgert, sondern 200 % getroffen. Jemand sagt kurzfristig ab — und in dir sagt jemand: „Siehst du. Zu viel." Der Partner schaut aufs Handy, während du erzählst — und du bist plötzlich fünf.\n\nDer Erwachsene reagiert auf die Situation. Das Kind reagiert auf die Geschichte.',
            question: 'Wann bist du zuletzt größer angesprungen, als die Situation es verdient hätte — und welcher alte Satz hatte da vermutlich das Mikrofon?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            teaser: 'Luft holen — das bisher Gesagte darf sich setzen.',
            hostNote: 'Alle schauen zur Kerze oder schließen die Augen. Zwei Minuten. Der Host beendet die Stille sanft.',
            description: 'Es war viel. Bevor wir die Richtung wechseln — von dem, was wehgetan hat, zu dem, was gefehlt hat und wiederkommen darf — zwei Minuten Luft.' },
          { name: 'Das freie Kind', title: 'Was du geliebt hast', duration: 9*60,
            teaser: 'Vor den Wunden war die Freude. Wohin ist sie verschwunden?',
            hostNote: 'Reihum, je 1-2 Min. Der Ton darf hier hörbar leichter werden. Lachen ausdrücklich erlaubt.',
            quote: { text: 'Nur wer erwachsen wird und ein Kind bleibt, ist ein Mensch.', author: 'Erich Kästner' },
            description: 'Das innere Kind ist nicht nur Wunde — es ist zuerst Quelle. Bevor irgendjemand etwas von dir wollte, hast du Dinge einfach geliebt: bauen, matschen, verkleiden, Kassetten hören, auf Bäume klettern, Welten erfinden. Stundenlang, versunken, ohne Zweck.\n\nDie meisten Erwachsenen können auf den Tag genau sagen, was sie leisten müssen — aber nicht mehr, was sie eigentlich gern tun. Das ist kein Charakterzug. Das ist Verschüttung.',
            question: 'Was hast du als Kind stundenlang und mit Hingabe getan — und wann hast du zuletzt etwas gemacht, das sich genauso angefühlt hat?' },
          { name: 'Körper', title: 'Wo es wohnt', duration: 6*60,
            teaser: 'Alte Prägungen sind körperlich — ein kurzer Besuch bei dir selbst.',
            hostNote: 'Reihum, ein Wort oder ein kurzer Satz. Spüren, nicht denken. „Pass" gilt.',
            quote: { text: 'Der Körper vergisst nichts.', author: 'Alice Miller (sinngemäß)' },
            description: 'Prägungen sind nicht nur Gedanken — sie wohnen im Körper. Der eingezogene Nacken, wenn jemand laut wird. Die Enge in der Brust beim Bitten um Hilfe. Das Lächeln, das sich automatisch einschaltet, wenn es innen gerade gar nicht lächelt.\n\nEinmal kurz nachspüren: Wenn dein Glaubenssatz von vorhin sich meldet — wo im Körper merkst du ihn zuerst?',
            question: 'Wo in deinem Körper sitzt dein alter Satz — und was macht dein Körper, um ihn zu übertönen?' },
          { name: 'Erwachsener', title: 'Die Instanz, die heute da ist', duration: 7*60,
            teaser: 'Du bist nicht mehr fünf — und genau das ist die beste Nachricht des Abends.',
            hostNote: 'Host liest vor. Danach reihum ein kurzer Gedanke dazu.',
            quote: { text: 'Kinder brauchen keine perfekten Eltern — hinreichend gute genügen.', author: 'Donald Winnicott (sinngemäß)' },
            description: 'Hier dreht sich der Abend. Denn eines unterscheidet dich fundamental von dem Kind, das die Sätze gelernt hat: Du bist nicht mehr ausgeliefert. Das Kind konnte sich seine Menschen nicht aussuchen, seine Situation nicht verlassen, das Gehörte nicht überprüfen. Du kannst all das.\n\nDer innere Erwachsene ist kein Über-Ich mit Klemmbrett. Er ist eher wie hinreichend gute Eltern für das eigene Innenleben: Er nimmt das verletzte Kind ernst, ohne ihm das Steuer zu geben. Er sagt nicht „stell dich nicht so an" — er sagt „ich sehe dich, und ich regle das".',
            question: 'In welchen Momenten gelingt dir das schon — dass du die alte Reaktion spürst, aber nicht aus ihr handelst?' },
          { name: 'Der Satz', title: 'Was das Kind gebraucht hätte', duration: 10*60,
            teaser: 'Ein einziger Satz, rückwärts geschickt. Die vielleicht stillste Station des Abends.',
            hostNote: 'Reihum, ein Satz. Langsam. Keine Kommentare der anderen — nur aufnehmen. „Pass" gilt, und auch stilles Mitschreiben statt Aussprechen ist okay.',
            description: 'Wenn du an das Kind denkst, das du warst — in genau der Szene von vorhin: Es gibt einen Satz, den damals niemand gesagt hat und der alles ein Stück leichter gemacht hätte. „Du genügst — genau so." „Das war nicht deine Schuld." „Du darfst laut sein." „Ich sehe, wie sehr du dich anstrengst."\n\nDieser Satz ist nicht verloren. Er ist nur nie ausgesprochen worden. Bis heute.',
            question: 'Welchen Satz hätte das Kind, das du warst, damals gebraucht — sag ihn heute laut.' },
          { name: 'Mitgefühl', title: 'Der Ton macht die Heilung', duration: 5*60,
            teaser: 'Warum Selbstoptimierung hier nicht hilft — und was stattdessen.',
            hostNote: 'Host liest vor. Kurze Runde: ein Gedanke, kein Referat.',
            quote: { text: 'Behandle dich selbst mit derselben Freundlichkeit, die du einem guten Freund entgegenbringen würdest.', author: 'Kristin Neff (sinngemäß)' },
            description: 'Der Reflex nach so einem Abend ist oft: „Okay, ich arbeite jetzt an meinem Glaubenssatz." Aber ein verletztes Kind braucht keinen Projektplan — es braucht einen anderen Ton. Kristin Neffs Forschung zeigt: Selbstmitgefühl verändert nachhaltiger als Selbstkritik, weil es genau das nachliefert, was gefehlt hat — Wohlwollen ohne Bedingung.\n\nDer Satz aus der letzten Station ist dafür der Anfang: Er ist der Ton, in dem du künftig mit dir sprechen übst.',
            question: 'Wie sprichst du innerlich mit dir, wenn dir etwas misslingt — und wie würdest du mit einem Kind sprechen, dem dasselbe passiert ist?' },
          { name: 'Schritt', title: 'Ein kleines Experiment', duration: 9*60,
            teaser: 'Kein Vorsatz, ein Termin: eine konkrete Sache für diese Woche.',
            hostNote: 'Reihum, ein Satz. Konkret, klein, mit Tag. Gern auf einen Zettel — der wandert in die Hosentasche.',
            description: 'Zwei Richtungen, such dir eine aus:\n\nFür das verletzte Kind: Einmal diese Woche, wenn der alte Satz anspringt, innerlich benennen: „Das ist der alte Satz — nicht die Situation." Mehr nicht. Nur erwischen.\n\nFür das freie Kind: Eine Stunde diese Woche für etwas, das du als Kind geliebt hast. Nicht als Optimierung („Malen ist ja achtsam") — als Spiel. Mit Termin im Kalender, sonst gewinnt der Alltag.',
            question: 'Welches der beiden Experimente machst du — und wann genau?' },
          { name: 'Wort', title: 'Ein Wort zum Abschied', duration: 4*60,
            teaser: 'Der Abend, destilliert auf ein einziges Wort.',
            hostNote: 'Reihum, ein Wort. Keine Begründung. Danach die Kerze gemeinsam auspusten — oder sie brennen lassen, bis alle gegangen sind.',
            question: 'Ein Wort, mit dem du heute nach Hause gehst.' }
        ])
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 30 Min.',
        people: '2 Personen — Paar oder enge Freund:innen, die einander vertrauen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor ihr beginnt', duration: 3*60,
            teaser: 'Kerze an — und eine Verabredung, die heute besonders zählt.',
            hostNote: 'Kerze anzünden. Handys stumm und weg. Drei gemeinsame Atemzüge. Die Verabredung laut aussprechen.',
            description: 'Heute schaut ihr dorthin, wo ihr herkommt — beide. Die Verabredung: Was heute erzählt wird, wird nie im Streit verwendet. Kein „siehst du, das ist wieder dein Kindheitsding". Was ihr einander zeigt, ist geliehen, nicht geschenkt zum Verwerten. Und: „Pass" ist ein vollständiger Satz, für beide, an jeder Station.' },
          { name: 'Ankommen', title: 'Wie alt fühlst du dich gerade?', duration: 8*60,
            teaser: 'Eine ungewohnte Frage zum Ankommen.',
            hostNote: 'Beide nacheinander, je 3 Min. Wer zuhört, hört nur zu — kein Kommentieren, kein Trösten.',
            question: 'Wie kommst du heute an — und wie alt fühlst du dich gerade, innen?' },
          { name: 'Einstieg', title: 'Zwei Kindheiten an einem Tisch', duration: 6*60,
            teaser: 'Warum in jeder Beziehung vier am Tisch sitzen — mindestens.',
            hostNote: 'Eine:r liest vor. Danach kurze Stille.',
            quote: { text: 'Im Erwachsenen ist ein Kind verborgen — ein ewiges Kind, das beständiger Pflege und Aufmerksamkeit bedarf.', author: 'C.G. Jung (sinngemäß)' },
            description: 'Wenn zwei Menschen sich nahekommen, sitzen nie nur zwei am Tisch. Mit am Tisch sitzen: das Kind, das du warst, und das Kind, das der/die andere war — mit allem, was sie früh über Nähe, Streit, Trost und Verlassen-werden gelernt haben.\n\nDie meisten wiederkehrenden Konflikte zwischen zwei Menschen sind keine Konflikte zwischen den Erwachsenen. Es sind zwei alte Programme, die sich gegenseitig auslösen. Heute lernt ihr die Programme kennen — eures und das des anderen.' },
          { name: 'Modell', title: 'Drei, die in jedem wohnen', duration: 6*60,
            teaser: 'Das Werkzeug für den Abend: drei innere Instanzen.',
            hostNote: 'Gemeinsam lesen. Kurz austauschen: Welche der drei Instanzen kennt ihr voneinander am besten?',
            description: 'Ein einfaches Modell für heute — drei Instanzen, die in jedem von euch wohnen:',
            items: [
              { label: 'Das verletzte Kind', text: 'Glaubt die alten Sätze („Ich genüge nicht", „Ich werde verlassen, wenn ich zu viel bin"). Meldet sich als plötzliche, unverhältnismäßige Reaktion.' },
              { label: 'Das freie Kind', text: 'Neugier, Spiel, Quatsch, Staunen. Der Teil, in den ihr euch vermutlich verliebt habt — und der im Alltag als Erstes verloren geht.' },
              { label: 'Der innere Erwachsene', text: 'Kann heute prüfen, was damals stimmte. Nimmt das verletzte Kind ernst, ohne ihm das Steuer zu geben. Heute Abend: euer Gastgeber.' }
            ] },
          { name: 'Glaubenssätze', title: 'Mein Satz', duration: 10*60,
            teaser: 'Acht Sätze — jede:r findet seinen. Und erzählt, woher er kommt.',
            hostNote: 'Beide lesen die Liste still. Dann je 4 Min: Welcher Satz ist deiner, und woher kommt er vermutlich? Wer zuhört: nur zuhören. Kein Einordnen, kein „aber deine Mutter hat doch…".',
            description: 'Glaubenssätze sind das Kondensat der Kindheit — kurze Sätze über uns selbst, die sich wie Tatsachen anfühlen. Die häufigsten:',
            items: [
              { label: '1.', text: '„Ich genüge nicht."' },
              { label: '2.', text: '„Ich muss es allen recht machen."' },
              { label: '3.', text: '„Ich darf keine Fehler machen."' },
              { label: '4.', text: '„Ich muss stark sein — Gefühle zeigen ist gefährlich."' },
              { label: '5.', text: '„Ich bin nur wertvoll, wenn ich etwas leiste."' },
              { label: '6.', text: '„Ich darf niemandem zur Last fallen."' },
              { label: '7.', text: '„Wenn ich zu viel bin, werde ich verlassen."' },
              { label: '8.', text: '„Ich bin verantwortlich dafür, dass es den anderen gut geht."' }
            ],
            question: 'Welcher Satz ist deiner — und aus welcher Szene oder welchem Muster von früher stammt er vermutlich?' },
          { name: 'Was ich sehe', title: 'Wann ich das Kind in dir sehe', duration: 10*60,
            teaser: 'Die zärtlichste Station des Abends: der Blick von außen.',
            hostNote: 'Beide abwechselnd, je 4 Min. Ton: zärtlich, nicht analytisch. Es geht um Momente, in denen der andere liebenswert-kindlich war — UND um Momente, in denen das verletzte Kind sichtbar wurde. Wer zuhört, antwortet nur mit „Danke".',
            description: 'Von außen sieht man manchmal mehr als von innen. Du kennst Momente, in denen das freie Kind des anderen aufblitzt — beim Albernsein, beim Versinken in etwas, bei einer bestimmten Art zu lachen. Und du kennst vermutlich auch Momente, in denen sein verletztes Kind kurz sichtbar wird — ein Blick, ein Verstummen, ein zu schnelles „ist nicht schlimm".',
            question: 'Wann sehe ich das freie Kind in dir — und wann, glaube ich, sehe ich das verletzte? Erzähl es dem anderen.' },
          { name: 'Trigger', title: 'Wo unsere Kinder sich gegenseitig auslösen', duration: 12*60,
            teaser: 'Der immergleiche Streit — und die zwei alten Programme dahinter.',
            hostNote: 'Je 5 Min. Nehmt einen konkreten, wiederkehrenden Konflikt — keinen frischen, der noch brennt, sondern einen bekannten. Beschreiben, nicht verhandeln. Es geht um Verstehen, nicht um Recht.',
            description: 'Fast jedes Paar, fast jede enge Freundschaft hat ihn: den einen Streit, der immer wieder kommt, nur in wechselnden Kostümen. Einer zieht sich zurück, der andere rückt nach. Eine wird laut, der andere wird Stein.\n\nMit dem Modell von heute wird daraus oft ein anderes Bild: Dein Rückzug ist vielleicht die Schutzstrategie deines Kindes („bloß nicht zur Last fallen") — und genau der triggert beim anderen den ältesten Satz überhaupt („ich werde verlassen"). Zwei Kinder, die sich gegenseitig erschrecken. Keine Bösewichte.',
            question: 'Was löst unser wiederkehrender Konflikt vermutlich in deinem Kind aus — und was, glaubst du, in meinem?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            teaser: 'Luft holen.',
            hostNote: 'Schaut zur Kerze oder haltet euch an den Händen — was passt. Nichts sagen.',
            description: 'Was gerade im Raum war, wirkt tiefer, wenn ihr es nicht sofort überdeckt.' },
          { name: 'Freies Kind', title: 'Was unsere Kinder zusammen tun würden', duration: 8*60,
            teaser: 'Wenn die beiden 8-Jährigen einen Nachmittag frei hätten…',
            hostNote: 'Gemeinsam spinnen, je 3-4 Min. Der Ton darf albern werden — das ist keine Nebenwirkung, das ist der Punkt.',
            quote: { text: 'Nur wer erwachsen wird und ein Kind bleibt, ist ein Mensch.', author: 'Erich Kästner' },
            description: 'Stellt euch vor: Ihr beide, acht Jahre alt, ein freier Samstagnachmittag, keine Erwachsenen weit und breit. Was würdet ihr tun?\n\nDie Frage ist verspielter, als sie aussieht: Was den beiden Kindern einfällt, ist oft ein ziemlich guter Kompass dafür, was der Beziehung heute fehlt.',
            question: 'Was würden eure beiden Kinder-Ichs zusammen anstellen — und was davon könntet ihr in echt wieder tun, demnächst?' },
          { name: 'Der Satz', title: 'Was dein Kind gebraucht hätte', duration: 8*60,
            teaser: 'Ein Satz, den der andere ausspricht — an das Kind von damals.',
            hostNote: 'Sehr behutsam, das ist die intensivste Station. Erst sagt jede:r, welchen Satz das eigene Kind damals gebraucht hätte. Dann — nur wenn beide wollen — spricht der/die andere genau diesen Satz laut aus, mit Blickkontakt. „Pass" gilt vollständig.',
            description: 'Es gibt einen Satz, den das Kind, das du warst, damals gebraucht hätte. „Du genügst." „Das war nicht deine Schuld." „Du darfst laut sein." Ihn heute aus dem Mund eines Menschen zu hören, der dich liebt oder dir nah ist, ersetzt nichts — aber es legt etwas Neues neben das Alte.',
            question: 'Welchen Satz hätte dein Kind gebraucht — und magst du ihn dir vom anderen sagen lassen?' },
          { name: 'Fürsorge', title: 'Eine konkrete Bitte', duration: 8*60,
            teaser: 'Was der andere tun kann, wenn dein altes Programm anspringt.',
            hostNote: 'Je eine Bitte, klein und konkret. Nicht „sei achtsamer mit mir", sondern handhabbar: „Wenn ich verstumme, frag einmal nach — und lass mich dann, wenn ich nicht kann."',
            description: 'Ihr wisst jetzt mehr übereinander als die meisten Menschen, die euch kennen. Daraus lässt sich etwas Praktisches bauen: eine Verabredung für die Momente, in denen das alte Programm anspringt.',
            question: 'Was kann ich konkret tun, wenn dein verletztes Kind das Steuer übernimmt — und was hilft dir dann garantiert nicht?' },
          { name: 'Wort', title: 'Ein Wort zum Abschied', duration: 3*60,
            teaser: 'Der Abend in einem Wort.',
            hostNote: 'Beide je ein Wort. Keine Begründung. Kerze zusammen auspusten.',
            question: 'Ein Wort, mit dem du aus diesem Abend gehst.' }
        ])
      },
      solo: {
        label: 'Allein',
        duration: '~1 Std.',
        people: 'Nur du — mit Stift, Papier und wenn möglich einem Kinderfoto von dir',
        stations: withFeedback([
          { name: 'Ankommen', title: 'Ein Raum nur für dich', duration: 3*60,
            teaser: 'Kerze, Stift, Papier — und ein Kinderfoto, falls du eines findest.',
            hostNote: 'Kerze anzünden, Handy in einen anderen Raum. Stift und Papier bereitlegen. Falls greifbar: ein Foto von dir als Kind — gedruckt oder am Rechner gesucht, bevor das Handy verschwindet.',
            description: 'Dieser Abend gehört dir und dem Kind, das du warst. Niemand hört zu — das ist die Stärke des Solo-Formats: Du kannst ehrlicher sein als in jedem Gespräch. Schreib mit der Hand, wenn du kannst. Die Hand ist langsamer als der Kopf, und genau das braucht es heute.\n\nEin Hinweis vorweg: Wenn heute etwas hochkommt, das zu schwer ist, um es allein zu tragen — dann ist das kein Scheitern dieses Abends, sondern seine wichtigste Erkenntnis. Professionelle Begleitung zu suchen ist ein Erwachsenen-Schritt, kein Eingeständnis.' },
          { name: 'Einstieg', title: 'Das Kind, das mitgekommen ist', duration: 4*60,
            teaser: 'Die Grundidee — nüchtern, ohne Esoterik.',
            quote: { text: 'Im Erwachsenen ist ein Kind verborgen — ein ewiges Kind, das beständiger Pflege und Aufmerksamkeit bedarf.', author: 'C.G. Jung (sinngemäß)' },
            description: 'Was du in den ersten Jahren über dich gelernt hast — ob du willkommen bist, ob du genügst, ob Gefühle sicher sind — hast du nicht als Meinung gelernt, sondern als Betriebssystem. Es wird nicht erinnert, es wird gelebt: in Beziehungen, im Job, in der Art, wie du mit dir selbst sprichst.\n\nHeute machst du das Programm sichtbar. Sichtbare Programme verlieren ihre heimliche Macht.' },
          { name: 'Foto', title: 'Schau dir das Kind an', duration: 6*60,
            teaser: 'Ein Foto, zwei Minuten Anschauen — und drei Fragen.',
            hostNote: 'Wenn du kein Foto hast: Stell dir dich selbst mit etwa 6-8 Jahren vor, so konkret wie möglich — Frisur, Lieblingspulli, Blick.',
            description: 'Schau das Kind auf dem Foto zwei Minuten lang wirklich an — nicht als „ich damals", sondern wie ein Kind, das dir gegenübersteht. Dann schreib auf:\n\nWas strahlt dieses Kind aus? Was braucht es gerade, in dem Moment der Aufnahme? Und: Was weißt du über sein Leben, das es selbst noch nicht weiß?',
            question: 'Was fühlst du, wenn du dieses Kind ansiehst — und was würdest du ihm am liebsten sagen?' },
          { name: 'Glaubenssätze', title: 'Dein Satz', duration: 6*60,
            teaser: 'Acht Sätze — einer davon ist deiner. Vermutlich weißt du sofort, welcher.',
            description: 'Lies die Liste langsam. Markiere nicht den Satz, der plausibel klingt — markiere den, der körperlich trifft:',
            items: [
              { label: '1.', text: '„Ich genüge nicht."' },
              { label: '2.', text: '„Ich muss es allen recht machen."' },
              { label: '3.', text: '„Ich darf keine Fehler machen."' },
              { label: '4.', text: '„Ich muss stark sein — Gefühle zeigen ist gefährlich."' },
              { label: '5.', text: '„Ich bin nur wertvoll, wenn ich etwas leiste."' },
              { label: '6.', text: '„Ich darf niemandem zur Last fallen."' },
              { label: '7.', text: '„Wenn ich zu viel bin, werde ich verlassen."' },
              { label: '8.', text: '„Ich bin verantwortlich dafür, dass es den anderen gut geht."' }
            ],
            question: 'Welcher Satz ist deiner? Schreib ihn oben auf ein Blatt — er ist heute dein Arbeitsmaterial.' },
          { name: 'Herkunft', title: 'Die Adresse des Satzes', duration: 6*60,
            teaser: 'Eine Szene, ein Muster, ein Haus — wo der Satz herkommt.',
            hostNote: 'Schreiben, nicht nur denken. Wenn es zu nah kommt: Stift weglegen, atmen, gegebenenfalls die Station überspringen. Du bestimmst das Tempo.',
            description: 'Dein Satz hat eine Adresse: eine Zeit, ein Haus, wiederkehrende Szenen. Oft nichts Dramatisches — es reicht, dass etwas oft genug passiert ist.\n\nSchreib 5 Minuten frei drauflos: Wo kommt dein Satz her? Wer hat ihn — ohne ihn je auszusprechen — vorgelebt, nahegelegt, belohnt? Wichtig: Es geht nicht um Anklage. Deine Eltern waren fast sicher selbst Kinder ihrer Kindheit. Es geht darum, dass der Satz ein Datum bekommt — damit er aufhört, ewig gültig zu sein.',
            question: 'Aus welcher Szene oder welchem Muster stammt dein Satz?' },
          { name: 'Schutz', title: 'Deine Strategie', duration: 5*60,
            teaser: 'Perfektionismus, Harmonie, Leistung, Rückzug, Kontrolle, Helfen — welche fährst du?',
            description: 'Gegen jeden schmerzhaften Satz entwickeln Kinder eine Schutzstrategie. Damals klug — heute oft selbst das Problem:',
            items: [
              { label: 'Perfektionismus', text: 'Wenn alles fehlerfrei ist, kann niemand etwas an mir aussetzen.' },
              { label: 'Harmoniestreben', text: 'Wenn alle zufrieden sind, bin ich sicher.' },
              { label: 'Leistung', text: 'Solange ich liefere, gehöre ich dazu.' },
              { label: 'Rückzug', text: 'Wer sich nicht zeigt, kann nicht verletzt werden.' },
              { label: 'Kontrolle', text: 'Wenn ich alles im Griff habe, überrascht mich nichts mehr.' },
              { label: 'Helfen', text: 'Wer gebraucht wird, wird nicht weggeschickt.' }
            ],
            question: 'Welche Strategie ist deine — und schreib dazu: Was hat sie dich in den letzten fünf Jahren gekostet?' },
          { name: 'Trigger', title: 'Wann das Kind fährt', duration: 5*60,
            teaser: 'Unverhältnismäßige Momente der letzten Wochen — und was sie verraten.',
            quote: { text: 'Solange das verletzte Kind unbeachtet bleibt, führt es aus dem Verborgenen Regie.', author: 'John Bradshaw (sinngemäß)' },
            description: 'Woran du merkst, dass das Kind gerade das Steuer hat: an der Unverhältnismäßigkeit. Du reagierst nicht auf die Situation, sondern auf die Geschichte.\n\nSammle schriftlich zwei, drei Momente der letzten Wochen, in denen deine Reaktion größer war als der Anlass. Schau dann auf deinen Satz vom Anfang: Wie oft hatte er das Mikrofon?',
            question: 'In welchen Situationen übernimmt dein Kind regelmäßig — und woran könntest du es künftig im Moment selbst erkennen?' },
          { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
            teaser: 'Stift weg, Augen zu, atmen.',
            description: 'Leg den Stift weg. Schau zur Kerze oder schließ die Augen. Zwei Minuten nichts — das Geschriebene arbeitet von allein weiter.' },
          { name: 'Freies Kind', title: 'Was du geliebt hast', duration: 5*60,
            teaser: 'Vor den Wunden war die Freude — eine Inventur.',
            quote: { text: 'Nur wer erwachsen wird und ein Kind bleibt, ist ein Mensch.', author: 'Erich Kästner' },
            description: 'Das innere Kind ist nicht nur Wunde — es ist zuerst Quelle. Schreib eine Liste: Was hast du als Kind stundenlang, versunken, mit Hingabe getan? Bauen, malen, Kassetten, Bäume, Welten erfinden — alles zählt.\n\nDann markiere: Was davon hast du in den letzten zwölf Monaten auch nur einmal getan?',
            question: 'Was stand früher auf deiner Liste — und was davon fehlt dir heute am meisten?' },
          { name: 'Brief', title: 'Ein Brief an das Kind', duration: 8*60,
            teaser: 'Die Kernübung des Abends: schreiben, was nie gesagt wurde.',
            hostNote: 'Handschriftlich, wenn irgend möglich. Nicht auf Stil achten. Wenn Tränen kommen: kommen lassen, weiterschreiben oder pausieren — beides ist richtig.',
            description: 'Schreib dem Kind auf dem Foto einen kurzen Brief — fünf bis zehn Sätze reichen. Du bist heute der Erwachsene, den es damals gebraucht hätte. Sag ihm, was damals niemand gesagt hat. Sag ihm, was aus euch geworden ist. Und sag ihm, welchen seiner Sätze du ihm heute abnimmst — weil du inzwischen prüfen kannst, was damals stimmte und was nicht.\n\nDen Brief musst du niemandem zeigen. Aber wirf ihn nicht weg — leg ihn zum Foto.',
            question: 'Was steht in deinem Brief — und welcher Satz darin hat dich beim Schreiben selbst überrascht?' },
          { name: 'Erwachsener', title: 'Wer heute für das Kind sorgt', duration: 4*60,
            teaser: 'Du bist nicht mehr ausgeliefert — was das praktisch bedeutet.',
            quote: { text: 'Kinder brauchen keine perfekten Eltern — hinreichend gute genügen.', author: 'Donald Winnicott (sinngemäß)' },
            description: 'Das Kind konnte sich seine Menschen nicht aussuchen und das Gehörte nicht überprüfen. Du kannst beides. Das ist der Unterschied, auf dem alles Weitere aufbaut.\n\nDer innere Erwachsene ist kein strenger Optimierer — er ist wie hinreichend gute Eltern für dein Innenleben: Er nimmt die alte Angst ernst, ohne ihr das Steuer zu geben. Und er muss dabei nicht perfekt sein. Hinreichend gut genügt — auch dir selbst gegenüber.',
            question: 'In welchem Bereich deines Lebens bist du heute schon ein guter Erwachsener für dich — und wo lässt du das Kind noch zu oft allein?' },
          { name: 'Schritt', title: 'Ein kleines Experiment', duration: 4*60,
            teaser: 'Eine konkrete Sache für diese Woche — mit Termin.',
            description: 'Zwei Richtungen, wähl eine:\n\nFür das verletzte Kind: Einmal diese Woche, wenn dein Satz anspringt, innerlich benennen: „Das ist der alte Satz — nicht die Situation." Nur erwischen, mehr nicht.\n\nFür das freie Kind: Eine Stunde für etwas von deiner Liste — als Spiel, nicht als Selbstoptimierung. Mit Termin im Kalender.',
            question: 'Welches Experiment machst du — und wann genau? Schreib es unter den Brief.' },
          { name: 'Wort', title: 'Ein Wort zum Abschluss', duration: 2*60,
            teaser: 'Der Abend in einem Wort.',
            description: 'Bevor du die Kerze auspustest: Schreib ein einzelnes Wort auf — das Wort, das diesen Abend für dich zusammenfasst. Dazu Datum. Wenn du das Blatt in ein paar Monaten wiederfindest, wirst du wissen, was es bedeutet hat.',
            question: 'Dein Wort für heute?' }
        ])
      }
    }
  },

  // =====================================================================
  // FAMILIENZEIT — Ein Abend mit jemandem aus deiner Familie
  // Vier Konstellationen wählbar: Elternteil, Großelternteil, Geschwister,
  // erwachsenes Kind. Intim, paar-basiert, mit Aufnahme-Option.
  // =====================================================================
  familienzeit: {
    title: 'Familienzeit',
    subtitle: 'Ein Abend mit einem Menschen aus deiner Familie',
    lead: 'Ein Abend mit Mutter, Vater, Oma, Opa, Bruder, Schwester oder einem erwachsenen Kind. Am Anfang wählt ihr, welche Konstellation zu euch passt — der Abend stellt Fragen, die im Alltag nie gestellt werden, und macht sichtbar, was sonst ungesagt bleibt. Mit Aufnahme-Optionen für das, was bleiben soll.',
    category: 'Familienzeit',
    image: 'images/familienzeit.jpg',
    philosophy1: 'Zwischen Menschen, die sich seit Jahrzehnten kennen, bleibt oft am meisten ungesagt. Nicht aus Unwillen — aus Gewohnheit. Man sieht sich, redet über Wetter, Kinder, Termine, Gesundheit. Und geht wieder auseinander, ohne die eine Frage gestellt zu haben, die seit Jahren unter allem liegt.',
    philosophy2: 'Dieser Abend ist der Versuch, das einmal anders zu machen. Ihr wählt am Anfang, mit wem ihr da seid — mit einem Elternteil, einem Großelternteil, einem Geschwister oder einem erwachsenen Kind. Die Fragen passen sich an. Wenn ihr wollt, zeichnet ihr das Gespräch auf — mit Video, mit Sprachmemo, oder ihr schreibt ein paar Sätze danach auf. So bleibt etwas, das sonst verloren geht.',
    formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 30 Min.',
        people: '2 Personen aus einer Familie',
        stations: withFeedback([
          { name: 'Konstellation', title: 'Wer ist heute mit dir hier?', duration: 4*60,
            hostNote: 'Das ist die allererste Entscheidung — noch bevor ihr Kerze oder Tee aufstellt. Lest die vier Varianten zusammen durch. Einigt euch, welche zu eurer Konstellation passt — die meisten Fragen später haben für jede Variante einen eigenen Ton. Wenn mehrere passen (z.B. Mutter, die gleichzeitig Oma anderer Kinder ist), wählt die, die euch heute als Paar definiert.',
            description: 'Jede Familien-Konstellation hat ihre eigene Tonart. Der Abend ist für alle vier geschrieben — ihr wählt jetzt gemeinsam, welcher Ton heute euch gehört.',
            items: [
              { accent: 'A.', label: 'Mit einem Elternteil', text: 'Du als erwachsenes Kind mit Mutter oder Vater. Hier liegt oft am meisten Ungesagtes — weil die Rolle „Kind sein" im Gespräch automatisch mitläuft.' },
              { accent: 'B.', label: 'Mit einem Großelternteil', text: 'Du mit Oma oder Opa. Hier liegt am meisten Zeitgeschichte und am wenigsten verbleibende Zeit. Der Abend hat Zeitzeugnis-Charakter.' },
              { accent: 'C.', label: 'Mit Geschwistern', text: 'Bruder oder Schwester. Ihr habt dieselbe Kindheit geteilt — und oft völlig unterschiedlich erlebt. Der Abend macht zwei Wahrheiten nebeneinander möglich.' },
              { accent: 'D.', label: 'Mit deinem erwachsenen Kind', text: 'Du als Mutter oder Vater mit deinem längst erwachsenen Kind. Eine Begegnung auf Augenhöhe — nicht mehr Erziehung, noch nicht Abschied. Eine seltene Lage.' }
            ] },
          { name: 'Öffnen', title: 'Zwei Menschen, ein Raum, Zeit', duration: 3*60,
            hostNote: 'Jetzt Kerze anzünden. Handys auf einen Tisch am Rand — es sei denn, ihr nehmt gleich auf (dann das aufnehmende Handy nah heranholen). Drei gemeinsame Atemzüge. Dann erst weiter.',
            description: 'Ihr kennt euch lange. Vielleicht euer ganzes Leben. Heute geht ihr miteinander an einen Ort, an dem ihr so wahrscheinlich noch nie wart — nicht weil es geheim ist, sondern weil der Alltag keinen Platz dafür lässt. Das Einzige, was dafür nötig ist: ein bisschen Stille am Anfang und die Bereitschaft beider, wirklich zuzuhören.' },
          { name: 'Aufnahme', title: 'Wollen wir das festhalten?', duration: 5*60,
            hostNote: 'Lest gemeinsam durch. Entscheidet beide — wirklich beide. Wenn einer von euch zögert, gewinnt das Zögern. Kein Video/Audio ohne Zustimmung beider. Wenn ihr aufnehmt: Handy vor dem Ankommen starten, dann bewusst nicht mehr anschauen. Wer die Aufnahme später bekommt, wird beim „Artefakt" am Ende geklärt.',
            description: 'Was heute gesprochen wird, ist selten wiederholbar. Manche Dinge sagt man nur einmal so — weil der Moment zusammenfällt. Ihr habt vier Möglichkeiten, damit umzugehen:',
            items: [
              { accent: '1.', label: 'Nichts aufzeichnen', text: 'Das Gespräch bleibt zwischen euch und der Erinnerung. Keine Technik stört — manche Gespräche brauchen das. Völlig legitim, oft die bessere Wahl.' },
              { accent: '2.', label: 'Sprachmemo (iPhone / Android)', text: 'Öffnet die Sprachmemos-App (iPhone) oder Recorder-App (Android), drückt Aufnahme, legt das Handy mit dem Display nach unten zwischen euch. Unsichtbar, präsent. Ein einziges langes Audio — kein Schnitt nötig.' },
              { accent: '3.', label: 'Video mit dem Handy', text: 'iPhone im Querformat auf einen Bücherstapel lehnen, sodass ihr beide halb im Bild seid. Aufnahme starten, vergessen. Tipp: Licht im Rücken der Kamera, nicht davor. Ein Take, keine Perfektion — die Augen, die Pausen, das Lachen sind das Eigentliche.' },
              { accent: '4.', label: 'Schreiben danach', text: 'Ihr macht nichts während des Gesprächs — und setzt euch direkt danach je 10 Min hin, um die drei Sätze aufzuschreiben, die haften geblieben sind. Oft das Präziseste, weil nur das Wesentliche übrig bleibt.' }
            ] },
          { name: 'Ankommen', title: 'Wie kommst du hier an?', duration: 6*60,
            hostNote: 'Beide nacheinander, je 2-3 Min. Der/die andere hört nur zu. Kein Nicken als Trost, kein „geht mir auch so", kein Lösungsvorschlag. Einfach da sein.',
            question: 'Wie kommst du heute hier an — und was bewegt dich gerade, wenn du ehrlich hinschaust?' },
          { name: 'Einstieg', title: 'Das, was selten gesagt wird', duration: 5*60,
            hostNote: 'Eine:r liest langsam vor. Nach dem Zitat eine halbe Minute Stille.',
            quote: { text: 'Wir sind verwandt — das ist Schicksal. Ob wir Freunde werden, ist unsere Wahl.', author: 'Max Frisch (sinngemäß)' },
            description: 'Wo man sich seit Jahrzehnten kennt, sammelt sich oft mehr Ungesagtes als Gesagtes. Geschichten, die man nie erzählt hat, weil sich der richtige Moment nie ergab. Dank, der zu selbstverständlich schien. Verletzungen, über die man längst hinweg ist — und die doch nie ausgesprochen wurden.\n\nDie Gedächtnisforschung hat dafür einen schönen Befund: Erinnerungen, die gemeinsam erzählt werden, werden reicher — jede:r hält andere Details, und erst im Gespräch setzt sich das ganze Bild zusammen. Genau das passiert heute Abend: Ihr legt eure Versionen nebeneinander. Nicht alles muss gesagt werden. Aber es darf.' },
          { name: 'Name', title: 'Wer hat dir deinen Namen gegeben?', duration: 8*60,
            hostNote: 'Beide je 3-4 Min. Der/die Ältere darf anfangen, wenn unklar.\n→ Mit Eltern/Großeltern: Sie erzählen zuerst, woher dein Name kommt — du hörst zu. Dann du, was du mit deinem Namen verbindest.\n→ Mit Geschwistern: Jede:r erzählt, wer euch erzählt hat, wo euer Name herkommt — die Versionen können voneinander abweichen. Interessant.\n→ Mit erwachsenem Kind: Du (Elternteil) erzählst zuerst, wie der Name entstand. Dann dein Kind, was es heute damit verbindet.',
            description: 'Namen sind nicht neutral. Sie tragen Erwartungen, Erinnerungen an Verstorbene, Moden einer Zeit, Kompromisse zwischen zwei Familien. Der eigene Name ist oft das erste und letzte, was man von seiner Familie bekommt.',
            question: 'Woher kommt dein Name — und was weißt du, was du heute zum ersten Mal wirklich aussprichst?' },
          { name: 'Foto', title: 'Ein Bild, das mehr erzählt, als wir wissen', duration: 10*60,
            hostNote: 'Idealerweise vorher abgesprochen: Der/die Ältere (bzw. bei Geschwistern: derjenige, der zuerst dran ist) hat EIN Foto mitgebracht — analog oder auf dem Handy. Keine Foto-Galerie, nicht durchscrollen. Ein Bild. 4-5 Min erzählen, der/die andere hört und fragt eine (!) offene Frage. Dann Wechsel.',
            description: 'Ein Foto hält einen Moment fest — aber es erzählt ihn nicht. Alles, was vor und nach dem Auslöser passiert ist, wer warum gelacht hat, warum der Blick nach links geht, was eine Stunde später passierte — das lebt nur in den Menschen, die dabei waren.\n\nWer heute das Foto bringt, macht einen Teil dieser verschwundenen Welt sichtbar. Der/die andere hört zu, als wäre es das erste Mal. Es ist auch das erste Mal — denn so wurde es vielleicht noch nie erzählt.',
            question: 'Was siehst du auf diesem Foto, das niemand sonst sehen kann — weil nur du dabei warst?' },
          { name: 'Schwer', title: 'Das Jahr, das schwer war', duration: 12*60,
            hostNote: 'Vorsichtig. Beide je 5-6 Min. Wer nicht kann oder will, sagt „pass" und benennt stattdessen ein Jahr, das überraschend leicht war. Der/die Zuhörende unterbricht nicht, relativiert nicht, vergleicht nicht mit dem eigenen Schwer.',
            description: 'Jedes lange Leben hat mindestens ein Jahr, das anders war als alle anderen — ein Verlust, eine Krankheit, ein Bruch, eine stille Krise, die niemand bemerkte. Oft wissen die Menschen, die einem am nächsten stehen, erstaunlich wenig darüber. Weil man sie schonen wollte, oder weil man selbst keine Worte hatte, oder weil die Zeit, in der man darüber hätte reden können, vorüber ist.\n\nHeute darf es ausgesprochen sein. Ohne Happy End. Ohne Lehre. Einfach nur: so war es.',
            question: 'Welches Jahr deines Lebens war schwer — und was trug dich durch, was niemand wusste?' },
          { name: 'Stille', title: 'Drei Minuten ohne Worte', duration: 3*60,
            hostNote: 'Kerze anschauen, Tee trinken, aus dem Fenster schauen. Nichts auflösen wollen. Wer weinen mag, weint. Wer eine Hand auf die des anderen legen will, tut es. Wer Distanz braucht, nimmt sie.',
            description: 'Nach dem, was gerade im Raum war, braucht es einen Moment, bevor neue Worte kommen. Drei Minuten, in denen nichts erklärt und nichts eingeordnet wird — das Gesagte darf einfach dastehen.' },
          { name: 'Unsichtbar', title: 'Das, was ich nie von dir wusste', duration: 10*60,
            hostNote: 'Beide je 4-5 Min. Nicht vorbereiten — spontan antworten, was auftaucht.\n→ Mit Eltern/Großeltern: Frag zuerst, dann erzählst du. Manche Antworten hörst du zum ersten Mal.\n→ Mit Geschwistern: Ein Ereignis aus eurer gemeinsamen Kindheit, von dem du glaubst, der/die andere hat es anders erlebt.\n→ Mit erwachsenem Kind: Als Elternteil erzähl etwas aus deinem Leben VOR deinem Kind — was es nie gekannt hat.',
            description: 'Wir halten uns mit den Menschen, die wir lieben, für gut eingelesen. In Wahrheit kennen wir oft nur die Version, die uns in unseren eigenen Jahren begegnet ist. Alles davor ist für uns nicht existent — obwohl es den Menschen zu dem gemacht hat, der er ist.',
            question: 'Was weißt du über mein Leben überraschend wenig — und was möchtest du heute wissen?' },
          { name: 'Dank', title: 'Etwas, das ich dir nie gesagt habe', duration: 10*60,
            hostNote: 'Beide je 3-4 Min. Dank ohne Einschränkung („aber manchmal..." ist hier verboten). Wenn beide mit echtem Dank schwer tun — dann lieber ein Moment beschreiben, in dem der/die andere etwas getan hat, was geblieben ist. Der/die Empfangende sagt nur „Danke" — keine Gegenrede, keine Bagatellisierung.',
            description: 'In Familien läuft Dank oft stillschweigend mit. Dass jemand da war, als es nötig war. Dass ein Satz, den du beiläufig gesagt hast, ein halbes Leben getragen hat. Dass ein Abend, an den du dich kaum erinnerst, für den anderen der wichtigste seiner Jugend war.\n\nHeute darf es laut ausgesprochen werden. Das Gegenüber muss nichts damit anfangen. Es reicht, dass es einmal gesagt wurde.',
            question: 'Wofür danke ich dir — etwas, das ich dir so noch nie gesagt habe?' },
          { name: 'Offen', title: 'Die Frage, die ich mich nie getraut habe', duration: 10*60,
            hostNote: 'Sehr vorsichtig. Optional — wer hier nicht hingehen möchte, überspringt die Station. Wenn ihr hingeht: Beide je 4-5 Min. Eine Frage, nicht zehn. Der/die Gefragte darf antworten, muss aber nicht — „ich brauche Zeit" oder „nicht heute" sind vollgültige Antworten und werden respektiert.',
            description: 'In fast jeder Familie gibt es eine Frage, die nie gestellt wurde. Weil der Moment nicht stimmte, weil man den anderen schonen wollte, weil man selbst Angst vor der Antwort hatte. Heute ist dafür ein Raum da — nicht um zu pressen, sondern um zu öffnen, was geöffnet werden möchte.\n\nWichtig: Manche Fragen sollten nie gestellt werden. Höre auf dein Gefühl — wenn sich die Frage im Körper schwer anfühlt, ist sie vielleicht nicht für heute.',
            question: 'Was habe ich dich immer schon fragen wollen — und mich nie getraut?' },
          { name: 'Zusage', title: 'Etwas, das ich dir für die Zukunft zusage', duration: 6*60,
            hostNote: 'Beide je 2-3 Min. Klein und konkret — nicht „ich werde ein besserer Mensch". Eine benennbare Zusage, die sich in den nächsten Wochen einlösen lässt: ein Besuch, ein Anruf pro Woche, ein Brief an deinem Geburtstag, ein gemeinsamer Ausflug, das Foto-Album zusammen sortieren.',
            description: 'Was heute gesagt wurde, braucht ein Nachwort, das nicht nur in Worten bleibt. Eine kleine, haltbare Zusage ist oft wertvoller als ein großes Versprechen, das man nicht einhält. Die Zusage ist dein Geschenk an den/die andere — und an die Zeit, die euch noch bleibt.',
            question: 'Was sage ich dir für die nächste Zeit zu — klein, konkret, einlösbar?' },
          { name: 'Artefakt', title: 'Was nehmen wir mit?', duration: 4*60,
            hostNote: 'Jetzt kurz aus dem Innern heraustreten, falls ihr aufgenommen habt: Aufnahme stoppen, beide zustimmen, wer die Datei bekommt (AirDrop, Signal, WhatsApp, USB-Stick — was euch gehört, bleibt euer). Wer schreiben wollte, notiert drei Sätze. Wer nichts aufgezeichnet hat, wählt einen gemeinsamen Satz, den beide sich in die Notizen-App tippen.',
            description: 'Nehmt etwas Konkretes mit aus diesem Abend: eine Datei, einen Zettel, einen Satz, ein Foto, das ihr jetzt zusammen macht. Nicht fürs Regal — als Wiedereinstieg. Wer das Artefakt später in der Hand hält, ist sofort wieder in diesem Gespräch.' },
          { name: 'Wort', title: 'Ein Wort, mit dem wir gehen', duration: 3*60,
            hostNote: 'Beide je ein Wort. Keine Begründung. Der/die Ältere fängt an — oder bei Geschwistern: wer zuerst sprechen will.',
            description: 'Nicht drei Sätze. Ein Wort. Oft ist es präziser.',
            question: 'Ein Wort, mit dem du aus diesem Abend gehst.' }
        ])
      },
      solo: {
        label: 'Vorbereitung allein',
        duration: '~30 Min.',
        people: 'Nur du — bevor du mit deinem Menschen an den Tisch gehst',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor du planst', duration: 2*60,
            hostNote: 'Kerze oder Tee. Handy weg. Stift und ein leeres Blatt Papier.',
            description: 'Dieser Solo-Abend ist keine Übung für den eigentlichen Abend — er ist eine Vorbereitung. Damit du nicht erst im Gespräch merkst, was du eigentlich hättest fragen wollen.' },
          { name: 'Konstellation', title: 'Mit wem gehst du in den Abend?', duration: 3*60,
            hostNote: 'Schreibe einen Absatz über diesen Menschen — aber aus deiner Perspektive heute, nicht aus der Rolle.',
            description: 'Nicht „meine Mutter" — sondern der konkrete Mensch. Wie alt ist sie/er jetzt? Wann habt ihr euch das letzte Mal wirklich länger gesehen? Wann das letzte Mal wirklich geredet? Was ist der aktuelle Stand zwischen euch — nicht der Rolle nach, sondern in Wahrheit?',
            question: 'Wer ist dieser Mensch heute — für dich, jenseits der Familienrolle?' },
          { name: 'Geschichte', title: 'Was weißt du — und was nicht?', duration: 5*60,
            hostNote: 'Schreibe zwei Spalten. Links: Was ich über diesen Menschen weiß (Kindheit, Jugend, Arbeitsleben, Beziehungen, Träume). Rechts: Was ich NICHT weiß — Lücken, blinde Flecken, Geschichten, die nie erzählt wurden.',
            description: 'Die rechte Spalte ist die wichtigere. Sie zeigt dir, wo deine Neugier hinläuft — und wo der Abend Material hat, das sonst nie auftaucht.',
            question: 'Welche zwei Lücken aus der rechten Spalte willst du am Abend am liebsten füllen?' },
          { name: 'Dank', title: 'Wofür bist du dankbar?', duration: 5*60,
            hostNote: 'Schreibe drei konkrete Momente, für die du diesem Menschen dankst. Nicht pauschal — sondern Szenen. Die Küche, der Satz, die Hand, der Kassettenrekorder, die Zugfahrt.',
            description: 'Dank ist oft diffus, solange er im Kopf bleibt. Sobald du drei konkrete Szenen aufschreibst, wird er tragfähig. Eine davon wirst du am Abend aussprechen.',
            question: 'Welche drei Szenen tragen deinen Dank konkret?' },
          { name: 'Unsaid', title: 'Das, was ungesagt ist', duration: 6*60,
            hostNote: 'Das ist die schwerste Station. Schreibe ehrlich — niemand außer dir sieht das. Dann entscheide: Was davon will ich am Abend ansprechen? Was will ich für mich behalten? Beides ist in Ordnung.',
            description: 'Zwischen euch gibt es wahrscheinlich mindestens eine Sache, die nie ausgesprochen wurde. Ein Missverständnis, eine Verletzung, eine Frage, eine Bitte. Manche davon gehören in diesen Abend. Manche gehören nicht dorthin — weil sie zu gewichtig sind, weil der Moment nicht stimmt, weil der/die andere sie nicht mehr tragen kann.\n\nDie Vorbereitung jetzt hilft dir, unterscheiden zu können: was heute, was ein anderes Mal, was nie.',
            question: 'Was ist ungesagt zwischen euch — und was davon gehört in diesen Abend?' },
          { name: 'Foto', title: 'Das Bild, das du mitnimmst', duration: 3*60,
            hostNote: 'Geh jetzt ein Foto suchen — ein einziges. Analog oder auf dem Handy. Leg es bereit oder lege dir einen Zettel mit dem Fundort neben den Wein.',
            description: 'Für die Foto-Station am Abend bringst DU ein Bild mit (oder der/die andere, wenn ihr es vorher abgesprochen habt). Ein einzelnes Foto, über das du 4 Minuten erzählen kannst. Nicht ein besonders gutes Foto — eins, das eine Geschichte trägt.',
            question: 'Welches eine Foto willst du mitbringen — und warum dieses?' },
          { name: 'Aufnahme', title: 'Willst du aufzeichnen?', duration: 3*60,
            hostNote: 'Entscheide vorab für dich — das nimmt Druck aus dem Moment. Aber: den anderen am Abend trotzdem explizit fragen. Ein Nein vom Gegenüber zählt, egal was du dir vorgenommen hast.',
            description: 'Denke vorab durch: Willst du dieses Gespräch aufnehmen? Für dich selbst, fürs spätere Wiederhören, für Kinder oder Enkelkinder, die den Menschen irgendwann nicht mehr werden fragen können? Sprachmemo, Video, nichts, oder nur handschriftliche Notizen danach?\n\nDenke auch: Was würde der/die andere wahrscheinlich okay finden? Ein geliebter Mensch aufgezeichnet zu werden, kann Geschenk sein — oder Übergriff. Das hängt vom Menschen und vom Ton ab.',
            question: 'Welche Aufnahme-Form willst du vorschlagen — und wo ist dein Plan B, falls der/die andere ablehnt?' },
          { name: 'Raum', title: 'Wo und wann?', duration: 2*60,
            hostNote: 'Kurz überlegen. Keine Perfektion — aber nicht am Küchentisch zwischen Geschirr und Tagesschau.',
            description: 'Der Raum macht viel aus. Ein Wohnzimmer mit zwei Sesseln, ein Garten im Sommer, ein Café ohne Hintergrundmusik, ein Spaziergang (schwieriger, aber für manche leichter), eine lange Zugfahrt. Wichtig: Zeit, die niemand unterbricht. Mindestens 90 Minuten ohne Verpflichtung danach.',
            question: 'Wo und wann passiert dieser Abend — und was verhindert, dass dazwischen etwas grätscht?' },
          { name: 'Haltung', title: 'Mit welcher inneren Haltung gehst du rein?', duration: 3*60,
            hostNote: 'Lies, schließe die Augen, spüre nach.',
            quote: { text: 'Das tiefste Hören ist nicht Warten, bis der andere fertig ist. Es ist Bereitschaft, überrascht zu werden.', author: 'sinngemäß nach David Whyte' },
            description: 'Der häufigste Fehler in Familien-Gesprächen: wir hören das, was wir seit Jahren zu hören gewohnt sind, und nicht das, was gerade gesagt wird. Die Mutter wird zur „Mutter, die schon immer…", der Bruder zum „Bruder, der nie…". Damit etwas Neues möglich wird, braucht es die Bereitschaft, überrascht zu werden.',
            question: 'Mit welcher einen inneren Haltung gehst du heute Abend rein — in einem Satz?' },
          { name: 'Wort', title: 'Ein Wort als Anker', duration: 2*60,
            hostNote: 'Ein Wort aufschreiben. Zettel in die Hosentasche. Wenn der Abend schwer wird, kurz berühren.',
            description: 'Ein Wort, das dich durch den Abend trägt. Nicht euer Motto, nicht euer Ziel — dein Anker, für dich.',
            question: 'Welches Wort trägst du heute Abend in der Hosentasche?' }
        ])
      }
    }
  },

  // =====================================================================
  // WERTE-REISE · ABEND 1 — Auftakt und Verortung
  // Erster Abend der 6-teiligen Werte-Reise. Frei zugänglich als Glimpse.
  // =====================================================================
  werte_reise_1: {
    title: "Was zählt wirklich?",
    subtitle: "Auftakt der Werte-Reise · Abend 1 von 6",
    lead: "Werte sind nicht, was wir sagen. Sie zeigen sich in Kalender, Kontoauszug und Ärger. Der erste Abend einer sechsteiligen Reise — und ein vollständiger Abend für sich.",
    category: "Werte-Reise",
    image: "images/werte-reise.jpg",
    reise: { id: "werte", nr: 1, total: 6, titel: "Werte — Eine Reise in 6 Abenden" },
    philosophy1: "Nicht wir fragen das Leben nach dem Sinn. Das Leben fragt uns (Viktor Frankl). Werte sind damit nicht Selbstausdruck, sondern Antworten. Dieser Abend ist der Einstieg in eine Reise über sechs Termine — er steht aber auch für sich allein.",
    philosophy2: "Der Abend arbeitet mit drei einfachen Tests: Kalender, Kontoauszug und Ärger. Drei Spuren, die zeigen, was sich in deinem Leben tatsächlich durchsetzt — jenseits von dem, was auf dem Wunsch-Poster steht.",
    formats: {
      group: {
        label: "Kleine Gruppe",
        duration: "~2 Std. 15 Min.",
        people: "3-10 Personen",
        stations: withFeedback([
          { name: "Öffnen",
            title: "Ein Moment, bevor wir anfangen",
            duration: 180,
            hostNote: "Kerze anzünden. Alle Handys stumm auf einen Tisch am Rand. Drei gemeinsame Atemzüge — ohne Kommentar. Dann erst weiter.",
            description: "Wir fangen leise an. Was heute kommt, funktioniert nur, wenn ihr kurz nicht mehr „draußen“ seid. Der Moment ist unspektakulär — und macht den Unterschied zwischen „wir quatschen mal über Werte“ und „wir schauen heute, welche uns wirklich tragen“." },
          { name: "Ankommen",
            title: "Wie kommst du hier an?",
            duration: 600,
            hostNote: "Reihum, 1-2 Sätze pro Person. Kein „gut und dir“ — eine echte Antwort. Kein Kommentar vom Host oder anderen. Nur zuhören.",
            question: "Wie kommst du heute hier an — und was hast du mit durch die Tür gebracht?" },
          { name: "Einstieg",
            title: "Werte sind nicht, was wir wollen",
            duration: 480,
            hostNote: "Host liest langsam vor. Nach dem Zitat eine halbe Minute Stille, bevor es weitergeht.",
            quote: { text: "Es kommt nie und nimmer darauf an, was wir vom Leben zu erwarten haben, viel mehr darauf: was das Leben von uns erwartet.", author: "Viktor Frankl" },
            description: "Menschen wollen viele Dinge: Schlaf, Anerkennung, Süßes, Freiheit, Sicherheit, Ruhe, Liebe. Werte sind nicht einfach das, was wir wollen. Werte entstehen dort, wo wir die Qualität unserer Wünsche bewerten — wo wir manche Impulse gut und wichtig finden und andere flach oder gegen uns gerichtet.\n\nViktor Frankl hat dieselbe Bewegung schärfer gefasst: Nicht wir fragen das Leben nach dem Sinn. Das Leben fragt uns. Werte sind damit keine Selbstdarstellung. Sie sind Antworten. Heute schauen wir, was du antwortest." },
          { name: "Drei Spuren",
            title: "Woran du deine echten Werte erkennst",
            duration: 300,
            hostNote: "Host liest die drei Tests vor. Die bleiben für den ganzen Abend das Werkzeug.",
            description: "Über Werte reden ist leicht. Werte sehen ist schwerer. Sichtbar werden sie nicht auf Postern, sondern in drei Spuren deines Lebens:",
            items: [
              { accent: "1.", label: "Der Kalender", text: "Wohin geht deine Zeit? Nicht wohin du willst, dass sie geht. Wohin sie tatsächlich fließt." },
              { accent: "2.", label: "Der Kontoauszug", text: "Wofür hast du im letzten Monat Geld ausgegeben, das nicht zwingend war? Das ist ein Wert — auch wenn du ihn ungern so nennst." },
              { accent: "3.", label: "Der Ärger", text: "Worüber hast du dich zuletzt richtig geärgert? Wo Ärger entsteht, wurde ein Wert verletzt. Meistens deiner." }
            ] },
          { name: "Kalender",
            title: "Wo dein Leben wirklich stattfand",
            duration: 720,
            hostNote: "Alle holen ihre Handys kurz zurück (einmal im Abend!). Letzte 14 Tage Kalender öffnen. Wer keinen detaillierten Kalender führt, rekonstruiert die Tage im Kopf. 5 Min still: Wofür ging die Zeit drauf? Keine Bewertung — nur schauen. Dann reihum je 1 Min.",
            quote: { text: "How we spend our days is, of course, how we spend our lives.", author: "Annie Dillard" },
            description: "Der Kalender lügt nicht. Was er zeigt, hast du tatsächlich priorisiert — unabhängig davon, was du gerade zu priorisieren glaubst. Die Zeitforschung ist hier eindeutig: Fast alle überschätzen, wie viel Zeit in das fließt, was ihnen wichtig ist, und unterschätzen, wie viel nebenbei verschwindet — Scrollen, Warten, Verwalten. Besonders aufschlussreich sind darum die Stunden, die nirgends auftauchen.",
            question: "Wenn ein Fremder deine letzten 14 Tage läse — welche Werte würde er dir zuschreiben? — Welche Stunden tauchen nirgends auf, und was ist da passiert? — Was hättest du erwartet zu sehen, das gar nicht da ist?" },
          { name: "Kontoauszug",
            title: "Der zweitehrlichste Spiegel",
            duration: 480,
            hostNote: "Optional — wer nicht laut über Geld reden möchte, bleibt still. Reihum: nicht der Betrag, sondern das Muster.",
            description: "Geld ist nicht alles, aber es ist sichtbar. Was du im letzten Monat für Nicht-Zwingendes ausgegeben hast — auswärts essen, Abos, Anschaffungen, spontane Geschenke — zeigt, was dir tatsächlich etwas wert ist. Ökonomen nennen das offenbarte Präferenzen: nicht was du sagst, sondern wofür du zahlst, verrät, was du vorziehst. Das muss nicht moralisch werden. Es ist ein Datensatz.",
            question: "Welches Ausgabenmuster fällt dir auf, wenn du den Filter der Bewertung weglässt? — Welcher Wert lebt in diesem Muster — auch wenn du ihn ungern so nennst? — Wofür gibst du auffällig wenig aus, obwohl du es wichtig nennst?" },
          { name: "Ärger",
            title: "Wo der Ärger herkommt",
            duration: 600,
            hostNote: "Reihum, je 1-2 Min. Nicht über den Ärger an sich, sondern über den verletzten Wert dahinter.",
            description: "Ärger kommt nicht aus dem Nichts. Er entsteht dort, wo ein Wert verletzt wird — deiner oder der eines anderen. Wer sich wiederholt über dasselbe ärgert (die Kollegin, die nie Danke sagt; der Partner, der Termine vergisst; sich selbst, wenn man wieder zu spät kommt), bekommt den präzisesten Hinweis auf die eigene Werte-Hierarchie.\n\nÄrger ist ein Instrument. Er zeigt nicht, was mit anderen Menschen falsch ist. Er zeigt, worauf du nicht verzichten kannst, ohne dich selbst zu verraten.",
            question: "Worüber hast du dich in den letzten Wochen wiederholt geärgert? — Welcher deiner Werte wurde da verletzt? — Ärgerst du dich manchmal über dich selbst — welcher Wert steckt dann dahinter?" },
          { name: "Differenz",
            title: "Wunschwert und Lebenswert — die Lücke",
            duration: 600,
            hostNote: "Jede:r schreibt 3 Min allein: „Meine Top-3-Wunschwerte sind…“ Dann 3 Min: „Meine Top-3-Lebenswerte — nach Kalender, Konto, Ärger — sind…“ Dann reihum: Wo ist die größte Lücke?",
            description: "Jetzt wird es unbequem. Du hast gesehen, wo dein Leben stattfindet, wohin dein Geld fließt, wo dein Ärger hochkommt. Lege das neben das, was du als wichtig benennen würdest. Die Lücke zwischen beidem ist kein Versagen — sie ist bei fast allen da, weil gelebte Werte träge sind und Wunschwerte schnell ausgesprochen. Sie ist der einzige ehrliche Startpunkt.",
            question: "Wo ist bei dir die größte Lücke zwischen behauptetem und gelebtem Wert? — Seit wann besteht sie, und was hält sie offen? — Ist es eine Lücke, die du schließen willst — oder ein Wunschwert, den du in Wahrheit gar nicht lebst?" },
          { name: "Achse",
            title: "Drei Spannungen — körperlich positioniert",
            duration: 900,
            hostNote: "Host legt drei gedachte Linien quer durch den Raum (oder mit Klebeband). Teilnehmende gehen zu jeder Linie einzeln: Wo stehst du heute? Und wo stehst du, wenn du müde bist? Reihum: was gewinnst du, was bezahlst du?",
            description: "Werte kommen selten einzeln, sondern in Spannungsfeldern. Manche schließen sich gegenseitig aus: Wer Sicherheit maximiert, bekommt weniger Freiheit — nicht aus Charakterschwäche, sondern weil beides zugleich nicht geht. Niemand steht nur an einem Pol. Die Frage ist, wo du dich heute positionierst — und wo du stehst, wenn du müde bist.",
            items: [
              { accent: "1.", label: "Sicherheit ↔ Freiheit", text: "Struktur und Bekanntes bewahren versus das Neue wagen, offene Horizonte." },
              { accent: "2.", label: "Leistung ↔ Verbundenheit", text: "Etwas erreichen, sichtbar werden versus füreinander da sein, Zeit schenken." },
              { accent: "3.", label: "Sinn ↔ Genuss", text: "Für etwas Größeres leben versus im Jetzt präsent sein, sinnlich." }
            ] },
          { name: "Mikroscan",
            title: "Eine Szene in Zeitlupe",
            duration: 720,
            hostNote: "Paare bilden. Person A erinnert eine frische Alltagsszene (Ärger, Scham oder Stolz). Person B fragt strukturiert nach: Auslöser? Körperreaktion? Innerer Satz? Handlung? Vermuteter Wert? Nach 6 Min Wechsel.",
            description: "Werte im Alltag sind keine Gedanken, sondern Reaktionen. Gehst du eine Szene langsam genug durch, findest du den Moment, in dem ein Wert entschied, was du als Nächstes getan oder gelassen hast. Der Körper hilft dabei: Was in Bauch, Brust oder Kiefer passiert, ist oft ein früherer und ehrlicherer Zeuge als der Kopf.",
            question: "Welcher Wert wurde in der Szene aktiviert? — Auf welche Weise hast du geantwortet — Annäherung oder Vermeidung? — Würdest du im Rückblick genauso wieder handeln?" },
          { name: "Pause",
            title: "Stille oder Bewegung — ihr wählt",
            duration: 120,
            hostNote: "Der Host fragt die Gruppe. Option A: 2 Min Stille, Blick auf die Kerze. Option B: 2 Min Schütteln und Bewegen zu einem lockernden Song. Keine Mischung — alle machen dasselbe.",
            description: "Was gerade gesprochen wurde, wirkt noch nach. Manche Gruppen brauchen jetzt Stille, andere Bewegung. Entscheidet gemeinsam — und bleibt dann dabei." },
          { name: "Schritt",
            title: "Eine sichtbare Handlung diese Woche",
            duration: 480,
            hostNote: "Reihum, je 1 Satz: eine konkrete, kleine, benennbare Handlung diese Woche, die einem heute-sichtbaren Wert folgt. Auf einen Zettel schreiben, mitnehmen.",
            description: "Nicht „ich will bewusster leben“. Sondern: „Dienstag sage ich Kollegin X, dass ich den 19-Uhr-Termin nicht mache, weil Verbundenheit mir gerade mehr wert ist als Anerkennung.“ Klein, beobachtbar, diese Woche — sonst verpufft der Abend bis Sonntag.",
            question: "Welche eine sichtbare Handlung setzt du diese Woche um, die einem Wert folgt, der heute Abend klarer wurde?" },
          { name: "Sichtbar",
            title: "Was hat der Abend gezeigt?",
            duration: 600,
            hostNote: "Reihum, 1 Satz pro Person. Keine Rückfragen, kein Kommentar.",
            question: "Was ist dir heute Abend klarer geworden, was du vor zwei Stunden noch nicht gesehen hast?" },
          { name: "Einladung",
            title: "Wohin der Weg führt — wenn ihr wollt",
            duration: 300,
            hostNote: "Host liest langsam vor. Nicht verkaufen — einladen. Beim Abend-2-Teaser eine kurze Stille machen.",
            description: "Heute habt ihr drei Werte benannt, die euch gerade tragen. Vielleicht ist euch aufgefallen, wie unterschiedlich ihr denselben Wert versteht. Eine:r sagt „Freiheit“ und meint Eigenständigkeit, der andere hört „Abenteuer“, die dritte „keine Verpflichtungen“. Genau hier fängt Abend 2 an:\n\n→ Abend 2 — Die Landkarte der Werte. Ihr bekommt das Vokabular, um präziser zu unterscheiden, was ihr meint, wenn ihr „wichtig“ sagt: zehn Werte-Familien (Schwartz), die Trennung zwischen Zielwerten und Stilwerten (Rokeach). Am Ende wisst ihr, welchen Wert ihr heute zu pauschal benannt habt.\n\nDie weiteren Abende, kurz skizziert:\n• Abend 3 — Wurzeln und Herkunft. Was von deinen Werten ist wirklich deins, was geliehen?\n• Abend 4 — Der Schatten. Was du am anderen ablehnst, verrät dich.\n• Abend 5 — Konflikte und harte Entscheidungen. Wenn zwei Werte kollidieren.\n• Abend 6 — Integration und Commitment. Ein Kreis-Vertrag, der trägt.\n\nNicht als Kurs. Als Weg." },
          { name: "Kreis",
            title: "Wohin gehen wir als Kreis?",
            duration: 300,
            hostNote: "Kein Druck, kein Commitment — nur Stimmungsbild. Reihum, ein Wort oder ein Satz. Nach der Runde: die Entscheidung kann heute oder in einer Woche fallen.",
            question: "Wie geht es dir mit dem Gedanken, diese Reise als Kreis weiterzugehen — kein Versprechen, nur ein erster Impuls?" },
          { name: "Wort",
            title: "Ein Wort, mit dem du gehst",
            duration: 240,
            hostNote: "Reihum, wirklich nur ein Wort. Keine Begründung. Der Host fängt an.",
            description: "Ein Wort ist oft präziser als drei Sätze. Was nimmst du mit?",
            question: "Ein Wort, mit dem du heute Abend nach Hause gehst." }
        ])
      },
      pair: {
        label: "Zu zweit",
        duration: "~1 Std. 50 Min.",
        people: "2 Personen (Paar, Freundschaft, Familie)",
        stations: withFeedback([
          { name: "Öffnen",
            title: "Ein Moment, bevor ihr anfangt",
            duration: 180,
            hostNote: "Kerze anzünden. Handys stumm weit weg. Drei gemeinsame Atemzüge — ohne Kommentar.",
            description: "Was heute kommt, geht tiefer, wenn ihr beide kurz nicht mehr unterwegs seid. Der Moment ist unspektakulär und markiert doch den Unterschied zwischen Tisch-Gespräch und Kreis." },
          { name: "Ankommen",
            title: "Wie kommst du hier an?",
            duration: 480,
            hostNote: "Beide nacheinander, je 3 Min. Der/die andere hört nur zu — kein Nicken als Trost, kein Lösungsvorschlag, kein „geht mir auch so“. Einfach da sein.",
            question: "Wie kommst du heute hier an — und was hast du mit durch die Tür gebracht?" },
          { name: "Einstieg",
            title: "Werte sind nicht, was wir wollen",
            duration: 420,
            hostNote: "Eine:r liest langsam vor. Nach dem Zitat eine halbe Minute Stille.",
            quote: { text: "Es kommt nie und nimmer darauf an, was wir vom Leben zu erwarten haben, viel mehr darauf: was das Leben von uns erwartet.", author: "Viktor Frankl" },
            description: "Menschen wollen viele Dinge. Werte sind nicht einfach das, was wir wollen. Werte entstehen dort, wo wir die Qualität unserer Wünsche bewerten — wo wir manche Impulse gut und wichtig finden und andere flach.\n\nViktor Frankl hat es schärfer gesagt: Nicht wir fragen das Leben nach Sinn. Das Leben fragt uns. Werte sind Antworten. Heute schaut ihr gegenseitig, was jede:r von euch antwortet." },
          { name: "Drei Spuren",
            title: "Drei Tests, die alle Masken abziehen",
            duration: 240,
            hostNote: "Gemeinsam lesen. Diese drei Tests werden gleich euer Werkzeug.",
            description: "Über Werte reden ist leicht. Werte sehen ist schwerer. Sichtbar werden sie nicht auf Postern, sondern in drei Spuren eures Lebens — in Kalender, Kontoauszug und Ärger.",
            items: [
              { accent: "1.", label: "Der Kalender", text: "Wohin geht deine Zeit? Nicht wohin du willst, dass sie geht — wohin sie tatsächlich fließt." },
              { accent: "2.", label: "Der Kontoauszug", text: "Wofür hast du Geld ausgegeben, das nicht zwingend war? Das ist ein Wert." },
              { accent: "3.", label: "Der Ärger", text: "Worüber hast du dich geärgert? Wo Ärger entsteht, wurde ein Wert verletzt — meistens deiner." }
            ] },
          { name: "Kalender",
            title: "Was euer Kalender wirklich sagt",
            duration: 600,
            hostNote: "Beide nehmen Handy, öffnen Kalender der letzten 14 Tage. Wer keinen detaillierten Kalender führt, rekonstruiert die Tage im Kopf. 4 Min still für sich. Dann 6 Min: Jede:r teilt, was er/sie sieht — die/der andere hört ohne zu bewerten.",
            quote: { text: "How we spend our days is, of course, how we spend our lives.", author: "Annie Dillard" },
            description: "Der Kalender lügt nicht. Was er zeigt, habt ihr tatsächlich priorisiert — egal, was ihr zu priorisieren glaubt. Am meisten verraten die Stunden, die nirgends auftauchen: Sie zeigen, was ihr euch nicht bewusst vornehmt, aber trotzdem tut.",
            question: "Wenn ein Fremder deinen letzten 14 Tagen folgte — welche Werte würde er dir zuschreiben? — Welche Stunden tauchen nirgends auf? — Was fehlt, das du erwartet hättest?" },
          { name: "Kontoauszug",
            title: "Was euer Geld verrät",
            duration: 360,
            hostNote: "Geld zwischen Paaren ist heikel. Hier geht es nicht um Beträge, sondern um Muster. Wer still bleiben will, bleibt still. Sonst: je 3 Min, die/der andere hört.",
            description: "Die nicht-zwingenden Ausgaben der letzten Wochen zeigen, was dir wirklich wertvoll ist. Ökonomen nennen das offenbarte Präferenzen: nicht was du sagst, sondern wofür du zahlst, verrät, was du vorziehst. Das muss nicht moralisch werden. Es ist ein Datensatz.",
            question: "Welches Ausgabenmuster fällt dir auf, wenn du den Filter der Bewertung weglässt? — Welcher Wert lebt darin? — Wofür gebt ihr als Paar auffällig wenig aus, obwohl ihr es wichtig nennt?" },
          { name: "Ärger",
            title: "Wo der Ärger herkommt",
            duration: 480,
            hostNote: "Je 4 Min. Wichtige Regel: Wenn der Ärger die/den andere:n betrifft, wird hier NICHT diskutiert. Nur benannt, welcher Wert verletzt wurde.",
            description: "Ärger ist ein Instrument. Er zeigt nicht, was mit anderen falsch ist — er zeigt, was dir heilig ist. Für Paare besonders wichtig: Dieses Erkennen ist kein Freifahrtschein für Vorwürfe, sondern ein Türöffner für ein echtes Gespräch.",
            question: "Worüber hast du dich in den letzten Wochen wiederholt geärgert — und welcher deiner Werte wurde da verletzt? — Wo ärgert dich am anderen etwas, das in Wahrheit auf deinen eigenen Wert zeigt?" },
          { name: "Differenz",
            title: "Wunsch und Realität — die Lücke",
            duration: 480,
            hostNote: "Beide schreiben 3 Min allein: Top-3-Wunschwerte und Top-3-Lebenswerte (aus den drei Spuren). Dann 5 Min: Jede:r zeigt/erzählt, wo die größte Lücke ist.",
            description: "Jetzt wird es unbequem. Lege nebeneinander: was du als wichtig benennst — und was sich tatsächlich durchsetzt. Die Lücke ist kein Versagen; sie ist bei fast allen da. Sie ist der ehrliche Startpunkt.",
            question: "Wo ist bei dir die größte Lücke zwischen behauptetem und gelebtem Wert? — Ist es eine Lücke, die du schließen willst — oder ein Wunschwert, den du in Wahrheit gar nicht lebst? — Wo kann der/die andere dir helfen, sie kleiner zu machen?" },
          { name: "Achse",
            title: "Drei Spannungen — wo steht ihr?",
            duration: 720,
            hostNote: "Markiert drei Linien im Raum (oder mit Klebeband). Beide positionieren sich bei jeder Achse körperlich. Wichtig: Auch schauen, wo der/die andere steht. Gespräch: Was gewinnst du, was bezahlst du? Wo berührt es uns, dass wir unterschiedlich stehen?",
            description: "Werte kommen in Spannungsfeldern, und manche schließen sich aus: Mehr Sicherheit heißt oft weniger Freiheit, nicht weil jemand zu schwach wäre, sondern weil beides zugleich nicht geht. Ihr lebt zusammen oder nahe — und steht auf denselben Achsen oft unterschiedlich. Das ist normal. Interessant wird, was ihr mit den Unterschieden macht.",
            items: [
              { accent: "1.", label: "Sicherheit ↔ Freiheit", text: "Struktur und Bekanntes versus das Neue wagen." },
              { accent: "2.", label: "Leistung ↔ Verbundenheit", text: "Etwas erreichen versus füreinander da sein." },
              { accent: "3.", label: "Sinn ↔ Genuss", text: "Für etwas Größeres leben versus im Jetzt sein." }
            ] },
          { name: "Mikroscan",
            title: "Eine Szene in Zeitlupe — gegenseitig",
            duration: 600,
            hostNote: "Je 5 Min. Person A erzählt eine frische Alltagsszene (Ärger, Scham oder Stolz). Person B fragt strukturiert nach: Auslöser? Körperreaktion? Innerer Satz? Handlung? Vermuteter Wert? Dann Wechsel. Keine Therapie-Rolle — nur Struktur geben.",
            description: "Werte im Alltag sind Reaktionen, keine Gedanken. Indem die/der andere strukturiert fragt, hörst du dich selbst genauer, als wenn du allein reflektierst.",
            question: "Welcher Wert wurde in der Szene aktiviert? — Auf welche Weise hast du geantwortet — Annäherung oder Vermeidung? — Würdest du im Rückblick genauso wieder handeln?" },
          { name: "Pause",
            title: "Stille oder Bewegung — ihr wählt gemeinsam",
            duration: 120,
            hostNote: "Einer fragt: „Stille oder kurz tanzen?“ Gemeinsam entscheiden. Beide machen dasselbe.",
            description: "Was gerade gesprochen wurde, wirkt noch nach. Manchmal will der Körper Ruhe, manchmal Bewegung. Gemeinsam entscheiden — und dabei bleiben." },
          { name: "Schritt",
            title: "Je eine Handlung diese Woche",
            duration: 360,
            hostNote: "Je 2 Min: Was ist dein konkreter, kleiner Schritt diese Woche? Aufschreiben, austauschen. Keine Bewertung der Wahl des anderen — nur Anerkennung.",
            description: "Nicht „ich will bewusster leben“. Sondern: „Freitag rufe ich X an, weil Verbundenheit mir gerade mehr wert ist als meine Scheu.“ Klein, beobachtbar, diese Woche.",
            question: "Welche eine sichtbare Handlung setzt du diese Woche um, die einem Wert folgt, der heute klarer wurde?" },
          { name: "Sichtbar",
            title: "Was hat der Abend gezeigt?",
            duration: 480,
            hostNote: "Beide je 4 Min: Was ist heute klarer geworden — über mich, über uns. Die/der andere hört ohne zu kommentieren.",
            question: "Was ist dir heute Abend klarer geworden — über dich oder über uns?" },
          { name: "Einladung",
            title: "Wohin die Reise führt — wenn ihr wollt",
            duration: 300,
            hostNote: "Eine:r liest vor. Nicht verkaufen — einladen. Nach dem Abend-2-Teaser kurz Stille.",
            description: "Ihr habt heute bemerkt, wo eure Werte unterschiedlich stehen. Wahrscheinlich habt ihr dabei manchmal dasselbe Wort für verschiedene Dinge benutzt. Genau da setzt Abend 2 an:\n\n→ Abend 2 — Die Landkarte der Werte. Ihr bekommt ein präzises Vokabular, damit „Freiheit“ bei dir nicht etwas anderes heißt als bei ihr: zehn Werte-Familien (Schwartz) und die Unterscheidung zwischen Zielwerten (wohin) und Stilwerten (wie). Am Ende wisst ihr, welchen Wert ihr heute zu pauschal benannt habt.\n\nDie weiteren Abende:\n• Abend 3 — Wurzeln und Herkunft. Was ist wirklich deins, was geliehen aus Familie oder Milieu?\n• Abend 4 — Der Schatten. Was ihr aneinander nicht ausstehen könnt, verrät euch.\n• Abend 5 — Konflikte. Wenn zwei Werte kollidieren, hilft keine Rechnung.\n• Abend 6 — Integration. Ein Paar-Vertrag, der trägt.\n\nNicht als Kurs. Als Weg zu zweit." },
          { name: "Paar",
            title: "Wohin gehen wir — als Paar?",
            duration: 180,
            hostNote: "Kein Druck. Nur erster Impuls. Beide je ein Wort oder Satz.",
            question: "Wie geht es dir mit dem Gedanken, diese Reise gemeinsam zu gehen — kein Versprechen, nur ein erster Impuls?" },
          { name: "Wort",
            title: "Ein Wort, mit dem ihr geht",
            duration: 180,
            hostNote: "Beide ein Wort. Keine Begründung.",
            question: "Ein Wort, mit dem du heute Abend nach Hause gehst." }
        ])
      },
      solo: {
        label: "Allein",
        duration: "~65 Min.",
        people: "Nur du",
        stations: withFeedback([
          { name: "Öffnen",
            title: "Ein Moment, bevor du anfängst",
            duration: 120,
            hostNote: "Kerze anzünden, Handy weit weg legen. Drei tiefe Atemzüge. Notizbuch und Stift bereit.",
            description: "Dieser Abend geht an einen Ort, an dem du allein normalerweise nicht ankommst — weil die Ablenkung fehlt, die dich sonst schützt. Fang trotzdem an." },
          { name: "Ankommen",
            title: "Wie kommst du hier an?",
            duration: 180,
            hostNote: "Schreibe zwei Sätze — nicht die Kurzfassung, die echte.",
            question: "Wie kommst du hier an — und was hast du mit durch die Tür gebracht?" },
          { name: "Einstieg",
            title: "Werte sind nicht, was du willst",
            duration: 240,
            hostNote: "Lies langsam, zweimal.",
            quote: { text: "Es kommt nie und nimmer darauf an, was wir vom Leben zu erwarten haben, viel mehr darauf: was das Leben von uns erwartet.", author: "Viktor Frankl" },
            description: "Du willst viele Dinge. Werte sind nicht das, was du willst. Werte entstehen dort, wo du die Qualität deiner Wünsche bewertest — wo du manche Impulse gut und wichtig findest und andere flach. Viktor Frankl hat es schärfer gesagt: Nicht du fragst das Leben nach Sinn. Das Leben fragt dich. Werte sind Antworten. Heute schaust du, was du antwortest." },
          { name: "Drei Spuren",
            title: "Drei Tests, drei Spuren",
            duration: 180,
            hostNote: "Lies. Diese drei Tests werden gleich dein Werkzeug.",
            description: "Über Werte reden ist leicht. Werte sehen ist schwerer. Sichtbar werden sie in drei Spuren deines Lebens:",
            items: [
              { accent: "1.", label: "Der Kalender", text: "Wohin fließt deine Zeit tatsächlich?" },
              { accent: "2.", label: "Der Kontoauszug", text: "Wofür hast du Geld ausgegeben, das nicht zwingend war?" },
              { accent: "3.", label: "Der Ärger", text: "Wo hat sich Ärger festgesetzt? Dort wurde ein Wert verletzt." }
            ] },
          { name: "Kalender",
            title: "Wo dein Leben wirklich stattfand",
            duration: 360,
            hostNote: "Handy einmal raus. Letzte 14 Tage Kalender. Wenn du keinen detaillierten Kalender führst, rekonstruiere die Tage im Kopf. Schreibe auf, was du siehst. Keine Bewertung.",
            quote: { text: "How we spend our days is, of course, how we spend our lives.", author: "Annie Dillard" },
            description: "Der Kalender lügt nicht. Was er zeigt, hast du tatsächlich priorisiert — egal, was du zu priorisieren glaubst. Am meisten verraten die Stunden, die nirgends auftauchen.",
            question: "Wenn ein Fremder deinen letzten 14 Tagen folgte — welche Werte würde er dir zuschreiben? — Welche Stunden tauchen nirgends auf? — Was fehlt, das du erwartet hättest?" },
          { name: "Kontoauszug",
            title: "Der zweitehrlichste Spiegel",
            duration: 240,
            hostNote: "Schreibe. Nicht die Beträge — die Muster. Was hast du dir gegönnt, das nicht zwingend war?",
            description: "Die nicht-zwingenden Ausgaben zeigen, was dir wirklich wertvoll ist. Ökonomen nennen das offenbarte Präferenzen: nicht was du sagst, sondern wofür du zahlst, verrät, was du vorziehst. Das muss nicht moralisch werden — es ist ein Datensatz.",
            question: "Welches Ausgabenmuster lebt in dir — und welcher Wert darin? — Wofür gibst du auffällig wenig aus, obwohl du es wichtig nennst?" },
          { name: "Ärger",
            title: "Wo der Ärger herkommt",
            duration: 360,
            hostNote: "Schreibe 5 Min am Stück. Nicht über den Ärger — über den verletzten Wert dahinter.",
            description: "Ärger ist ein Instrument. Er zeigt nicht, was mit anderen falsch ist. Er zeigt, was du nicht bereit bist aufzugeben.",
            question: "Worüber hast du dich wiederholt geärgert — und welcher deiner Werte wurde da verletzt? — Ärgerst du dich manchmal über dich selbst? Welcher Wert steckt dann dahinter?" },
          { name: "Differenz",
            title: "Wunsch und Realität — die Lücke",
            duration: 300,
            hostNote: "Schreibe zwei Listen. Oben: Top-3-Wunschwerte. Unten: Top-3-Lebenswerte (aus Kalender, Konto, Ärger). Dann: Was fällt dir auf?",
            description: "Jetzt wird es unbequem. Lege nebeneinander: was du als wichtig benennst — und was sich durchsetzt. Die Lücke ist kein Versagen; sie ist bei fast allen da, weil gelebte Werte träge sind. Sie ist der ehrliche Startpunkt.",
            question: "Wo ist bei dir die größte Lücke zwischen behauptetem und gelebtem Wert? — Ist es eine Lücke, die du schließen willst — oder ein Wunschwert, den du in Wahrheit gar nicht lebst?" },
          { name: "Achse",
            title: "Drei Spannungen — wo stehst du?",
            duration: 360,
            hostNote: "Für jede Achse: Wo stehst du heute (auf einer Skala 1-10)? Wo stehst du, wenn du müde bist? Schreibe auf: Was gewinnst du, was bezahlst du?",
            description: "Werte kommen in Spannungsfeldern, und manche schließen sich aus: Mehr Sicherheit heißt meist weniger Freiheit — nicht aus Schwäche, sondern weil beides zugleich nicht geht. Niemand steht nur an einem Pol. Die Frage: Wo positionierst du dich heute?",
            items: [
              { accent: "1.", label: "Sicherheit ↔ Freiheit", text: "Struktur versus das Neue wagen." },
              { accent: "2.", label: "Leistung ↔ Verbundenheit", text: "Etwas erreichen versus füreinander da sein." },
              { accent: "3.", label: "Sinn ↔ Genuss", text: "Für etwas Größeres leben versus im Jetzt sein." }
            ] },
          { name: "Mikroscan",
            title: "Eine Szene in Zeitlupe",
            duration: 360,
            hostNote: "Erinnere eine frische Alltagsszene (Ärger, Scham oder Stolz). Schreibe strukturiert: Auslöser, Körperreaktion, innerer Satz, Handlung, vermuteter Wert. Kein Urteil.",
            description: "Werte im Alltag sind keine Gedanken, sondern Reaktionen. Gehst du eine Szene langsam genug durch, findest du den Moment, in dem ein Wert entschied, was du getan hast. Der Körper ist dabei der ehrlichere Zeuge als der Kopf.",
            question: "Welcher Wert wurde aktiviert — wie hast du geantwortet, Annäherung oder Vermeidung? — Würdest du im Rückblick genauso wieder handeln?" },
          { name: "Pause",
            title: "Zwei Minuten",
            duration: 120,
            hostNote: "Stille oder Bewegung — entscheide für dich. Augen zu und atmen, oder aufstehen und dich schütteln. Was dein Körper jetzt braucht.",
            description: "Nach dem Mikroscan wirkt einiges noch nach. Manchmal will der Körper Ruhe, manchmal Bewegung. Hör kurz hin, was es ist." },
          { name: "Schritt",
            title: "Eine sichtbare Handlung diese Woche",
            duration: 240,
            hostNote: "Schreibe auf einen Zettel. Nicht vage — konkret. Einen Tag, eine Uhrzeit, eine Person nennen wenn möglich.",
            description: "Nicht „ich will bewusster leben“. Sondern: „Dienstag 18 Uhr rufe ich X an, weil Verbundenheit mir gerade mehr wert ist als meine Scheu.“ Klein, beobachtbar, diese Woche — sonst verpufft der Abend bis Sonntag.",
            question: "Welche eine sichtbare Handlung setzt du diese Woche um, die einem Wert folgt, der heute klarer wurde?" },
          { name: "Sichtbar",
            title: "Was hat der Abend gezeigt?",
            duration: 180,
            hostNote: "Schreibe drei Sätze.",
            question: "Was ist dir heute Abend klarer geworden, was du vor einer Stunde noch nicht gesehen hast?" },
          { name: "Ausblick",
            title: "Ein Vorgeschmack auf Abend 2",
            duration: 180,
            hostNote: "Lies langsam. Nimm den Impuls mit in die Woche.",
            description: "Heute hast du drei Werte benannt, die dich gerade tragen. Vielleicht fällt dir schon auf, dass manche dieser Worte zu pauschal sind — dass „Freiheit“ oder „Sicherheit“ zehn Dinge bedeuten können.\n\n→ Abend 2 — Die Landkarte der Werte. Du lernst zehn Werte-Familien (Schwartz) kennen und übst, Zielwerte (wohin) und Stilwerte (wie) zu trennen. Am Ende hast du für jeden deiner heutigen drei Werte präzisere Namen — und siehst, welche Werte du heute gar nicht auf dem Radar hattest.\n\nNimm dir bis dahin mit: eine Woche den Drei-Spuren-Blick weiterlaufen lassen (Kalender, Konto, Ärger). Für Abend 2 brauchst du keine Vorbereitung — nur deine eigenen Beobachtungen." },
          { name: "Wort",
            title: "Ein Wort als Kompass",
            duration: 180,
            hostNote: "Ein Wort. Auf einen Zettel. Ans Bad spiegeln oder in die Tasche stecken.",
            description: "Ein Wort ist oft präziser als drei Sätze. Was nimmst du mit?",
            question: "Ein Wort, mit dem du heute Abend gehst." }
        ])
      }
    }
  },

  werte_reise_2: {
    title: "Die Landkarte der Werte",
    subtitle: "Werte-Reise · Abend 2 von 6",
    lead: "Werte haben Namen — und eine Geometrie. Wer sagt „mir ist Freiheit wichtig“, meint zehn verschiedene Dinge und übersieht, dass jeder starke Wert einen Preis hat: den Wert, der ihm gegenübersteht. Dieser Abend legt zwei Werkzeuge auf den Tisch — Schwartz' Wertekreis, auf dem sich jedes menschliche Wertsystem verorten lässt, und die einfache Frage, was überhaupt ein Wert ist und was bloß eine Vorliebe. Am Ende habt ihr sortiert, nicht nur benannt.",
    category: "Werte-Reise",
    image: "images/werte-reise-2.jpg",
    reise: { id: "werte", nr: 2, total: 6, titel: "Werte — Eine Reise in 6 Abenden" },
    philosophy1: "Shalom Schwartz hat in über 80 Ländern dieselben zehn Werte-Familien gefunden — und, wichtiger, dass sie in einem Kreis liegen. Benachbarte Werte vertragen sich (Selbstbestimmung und Stimulation), gegenüberliegende widersprechen sich strukturell (Sicherheit und Abenteuer, Macht und Fürsorge). Werte-Konflikte sind deshalb kein persönliches Versagen. Sie sind in die Landkarte eingebaut.",
    philosophy2: "Zwei Unterscheidungen halten den Abend zusammen. Milton Rokeach trennt Zielwerte (wohin du willst) von Stilwerten (wie du unterwegs bist). Und Charles Taylor trennt einen Wert von einer bloßen Vorliebe: Eine Vorliebe hast du, einen Wert verteidigst du — auch wenn er dich etwas kostet.",
    paid: 'werte_reise',
        formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std.',
        people: '3-10 Personen',
        stationCount: 13,
        totalMinutes: 124,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 30 Min.',
        people: '2 Personen',
        stationCount: 10,
        totalMinutes: 91,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~45 Min.',
        people: 'Nur du',
        stationCount: 10,
        totalMinutes: 46,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  werte_reise_3: {
    title: "Wurzeln und Herkunft",
    subtitle: "Werte-Reise · Abend 3 von 6",
    lead: "Kein Wert entsteht aus dem Nichts. Bevor du wählen konntest, haben andere für dich gewählt — Mutter, Vater, Großeltern, das Milieu, die Zeit, in der du aufgewachsen bist. Manches davon trägst du bewusst weiter, manches hast du in Abgrenzung gebaut, und manches schleppst du ungeprüft mit, weil es sich anfühlt wie Naturgesetz. Dieser Abend geht an die Wurzeln und trennt das Eigene vom Geliehenen — an konkreten Erinnerungen, nicht an Theorie.",
    category: "Werte-Reise",
    image: "images/werte-reise-3.jpg",
    reise: { id: "werte", nr: 3, total: 6, titel: "Werte — Eine Reise in 6 Abenden" },
    philosophy1: "Simone Weil setzte in ihrem letzten Buch die „Verwurzelung“ an die Spitze der Bedürfnisse der menschlichen Seele — noch vor die Freiheit. Das Gegenteil von Unterdrückung sei nicht Freiheit, sondern Entwurzelung. Ihr Gedanke für diesen Abend: Wer seine Wurzeln nicht kennt, weiß auch nicht, wo sein Eigenes anfängt — und verwechselt Geerbtes leicht mit Gewähltem.",
    philosophy2: "Ronald Inglehart hat über vierzig Jahre World Values Survey gezeigt, dass Werte generational einrasten: Die Erfahrungen zwischen dem zehnten und fünfundzwanzigsten Lebensjahr — Krieg, Wohlstand, Digitalisierung — prägen den Wertesockel ein ganzes Leben lang. Pierre Bourdieu ergänzt die soziale Achse: Auch Milieu und Klasse legen einen „Habitus“ an, der sich anfühlt wie Naturgesetz, aber Geschichte ist.",
    paid: 'werte_reise',
        formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std.',
        people: '3-10 Personen',
        stationCount: 15,
        totalMinutes: 124,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 30 Min.',
        people: '2 Personen',
        stationCount: 12,
        totalMinutes: 95,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~45 Min.',
        people: 'Nur du',
        stationCount: 11,
        totalMinutes: 45,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  werte_reise_4: {
    title: "Der Schatten",
    subtitle: "Werte-Reise · Abend 4 von 6",
    lead: "Was dich am anderen maßlos ärgert, sagt oft mehr über dich als über ihn. C.G. Jung nannte Schatten alles, was wir an uns selbst nicht sehen wollen — auch die Werte, die wir uns verbieten, und die Kehrseite der Tugenden, auf die wir stolz sind. Der unbequemste Abend der Reise, und für viele der ehrlichste.",
    category: "Werte-Reise",
    image: "images/werte-reise-4.jpg",
    reise: { id: "werte", nr: 4, total: 6, titel: "Werte — Eine Reise in 6 Abenden" },
    philosophy1: "Carl Gustav Jung nannte Schatten alles, was ein Mensch nicht sein möchte und darum aus dem Blick schiebt — nicht nur Schwächen, sondern auch verdrängte Stärken. Im Keller verschwindet nichts; es wirkt weiter als Reizbarkeit, als hartes Urteil, als plötzliche Kälte gegen Menschen, die genau das tun, was wir uns selbst nicht erlauben. Angewandt auf Werte heißt das zweierlei: Es gibt die Werte, die wir uns verbieten — und die Schlagseite der Werte, die wir hochhalten.",
    philosophy2: "Brené Brown unterscheidet nüchtern zwischen Schuld und Scham: „Ich habe etwas Falsches getan“ gegen „Ich bin falsch“. Das Erste ist korrigierbar, das Zweite lähmt. Für die Werte-Arbeit zählt eine Wendung daraus: Wo Scham auftaucht, wurde fast immer ein Wert verletzt — von uns selbst oder von anderen. Scham ist dann kein Beweis, dass wir kaputt sind, sondern ein Hinweis, was uns wirklich wichtig ist.",
    paid: 'werte_reise',
        formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std.',
        people: '3-10 Personen',
        stationCount: 15,
        totalMinutes: 125,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 30 Min.',
        people: '2 Personen',
        stationCount: 12,
        totalMinutes: 95,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~45 Min.',
        people: 'Nur du',
        stationCount: 10,
        totalMinutes: 46,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  werte_reise_5: {
    title: "Konflikte und harte Entscheidungen",
    subtitle: "Werte-Reise · Abend 5 von 6",
    lead: "Wenn zwei wichtige Werte wirklich kollidieren, hilft kein Abwägen mehr — jede Rechnung geht am Kern vorbei. Dieser Abend übt das, was Ratgeber überspringen: eine Entscheidung treffen, bei der du etwas Wertvolles tatsächlich verlierst, und den Verlust benennen, statt ihn wegzureden.",
    category: "Werte-Reise",
    image: "images/werte-reise-5.jpg",
    reise: { id: "werte", nr: 5, total: 6, titel: "Werte — Eine Reise in 6 Abenden" },
    philosophy1: "Die Philosophin Ruth Chang nennt die wirklich schweren Entscheidungen „gleichrangig“ (on a par): keine Option ist besser, keine schlechter, und keine Rechnung entscheidet es. Ihr überraschender Trost — genau da liegt die Freiheit. Wo die Welt uns keinen Grund vorgibt, setzen wir selbst einen und stehen fortan dahinter. Wer stattdessen driftet, lässt andere den Grund setzen.",
    philosophy2: "Kierkegaard nannte den Moment, in dem kein Argument mehr trägt und man trotzdem wählen muss, den „Sprung“. Sartre zeigte es an einem jungen Mann, der zwischen der kranken Mutter und dem Widerstand zerrissen war: keine Regel nimmt dir die Wahl ab. Und Bernard Williams beschrieb, was danach bleibt — einen „Rest“: das Bedauern über den Wert, den du nicht wählen konntest. Kein Versagen, sondern der Preis dafür, ein Mensch mit mehr als einem Wert zu sein.",
    paid: 'werte_reise',
        formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std.',
        people: '3-10 Personen',
        stationCount: 15,
        totalMinutes: 130,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 30 Min.',
        people: '2 Personen',
        stationCount: 11,
        totalMinutes: 91,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~45 Min.',
        people: 'Nur du',
        stationCount: 9,
        totalMinutes: 47,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  werte_reise_6: {
    title: "Integration und Commitment",
    subtitle: "Werte-Reise · Abend 6 von 6 · Abschluss",
    lead: "Fünf Abende lang habt ihr eure Werte freigelegt. Heute nur noch eine Frage: Was davon steht ab morgen in deinem Kalender? Dieser Abschluss übersetzt Werte in kleine, überprüfbare Schritte — in Zeit, Geld und Aufmerksamkeit —, blickt zurück auf das, was sich in sechs Wochen verschoben hat, und endet mit einem Vertrag, den du mit dir selbst schließt. Der sechste Abend, ohne großes Finale.",
    category: "Werte-Reise",
    image: "images/werte-reise-6.jpg",
    reise: { id: "werte", nr: 6, total: 6, titel: "Werte — Eine Reise in 6 Abenden" },
    philosophy1: "Aristoteles, Nikomachische Ethik: „Wir sind das, was wir wiederholt tun. Tugend ist also keine Tat, sondern eine Gewohnheit.“ Kein Wert entsteht durch Einsicht. Er entsteht durch Wiederholung — durch das, was du an einem gewöhnlichen Dienstag tust, ohne dass es jemand sieht.",
    philosophy2: "Die Verhaltenstherapie (ACT) fügt eine brauchbare Unterscheidung hinzu: Ziele erreichst du und hakst sie ab — Werte sind Richtungen, in die du weitergehst. „Ein guter Freund sein“ ist nie fertig. Deshalb geht es heute nicht um große Vorsätze, sondern um die nächste kleine Bewegung — und um eine Frage, die an jedem Tag funktioniert: Bringt mich das, was ich gerade tue, näher an das, was mir wichtig ist, oder weiter weg?",
    paid: 'werte_reise',
        formats: {
      group: {
        label: 'Kleine Gruppe',
        duration: '~2 Std.',
        people: '3-10 Personen',
        stationCount: 13,
        totalMinutes: 126,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 30 Min.',
        people: '2 Personen',
        stationCount: 12,
        totalMinutes: 93,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~45 Min.',
        people: 'Nur du',
        stationCount: 10,
        totalMinutes: 45,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  // =====================================================================
  // DIE 36 FRAGEN — nach Arthur Aron et al. (1997)
  // Die berühmte Nähe-Studie als geführter Abend. Eigene deutsche
  // Übersetzung der Fragen. Ehrliche Einordnung: Die Studie erzeugte
  // Nähe zwischen Fremden; „zum Verlieben" wurde sie erst durch Mandy
  // Len Catrons NYT-Essay (2015) — inkl. der 4 Minuten Augenkontakt,
  // die NICHT aus der Studie stammen. Frei zugänglich (SEO-Anker),
  // führt organisch zum Date-Abend.
  // =====================================================================
  fragen36: {
    title: 'Die 36 Fragen',
    subtitle: 'Das berühmte Nähe-Experiment — zum Nachmachen',
    category: 'Beziehungen',
    lead: 'Sechsunddreißig Fragen, drei Runden, aufsteigende Tiefe — das ist das Design, mit dem der Psychologe Arthur Aron 1997 im Labor Nähe zwischen Fremden erzeugt hat. Berühmt wurde es als „36 Fragen zum Verlieben". Es funktioniert bei ersten Dates, bei langjährigen Paaren und zwischen Freund:innen — überall da, wo zwei Menschen einander wirklich sehen wollen.',
    image: 'images/fragen36.jpg',
    philosophy1: 'Die Studie dahinter ist echt: Arthur Aron und Kolleg:innen ließen 1997 fremde Menschen 45 Minuten lang eskalierend persönliche Fragen austauschen — und maßen danach eine Nähe, für die Freundschaften sonst Wochen brauchen. Der Mechanismus ist keine Magie, sondern Gegenseitigkeit: Ich zeige etwas Echtes, du zeigst etwas Echtes, und beide erleben, dass nichts Schlimmes passiert. Selbstöffnung in kleinen, wechselseitigen Schritten — das ist das ganze Geheimnis.',
    philosophy2: 'Und die Liebesgeschichte? Die stammt aus einem Essay der Autorin Mandy Len Catron, die die Fragen 2015 mit einem Bekannten durchging, danach vier Minuten Augenkontakt hielt — und ihn später heiratete. Ihr Fazit war ehrlicher als die Schlagzeilen: Die Fragen machen Verlieben nicht unausweichlich, sie machen es möglich. Genau so solltet ihr den Abend nehmen — nicht als Zauberspruch, sondern als Raum, in dem Nähe entstehen darf. Auch die vier Minuten Augenkontakt am Ende sind Catrons Zutat, nicht Arons — und trotzdem vielleicht der intensivste Teil.',
    formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 25 Min.',
        people: '2 Personen — erstes Date, langjähriges Paar oder enge Freund:innen',
        stations: withFeedback([
          { name: 'Öffnen', title: 'Ein Moment, bevor ihr beginnt', duration: 3*60,
            teaser: 'Handys weg, bequem sitzen — mehr Vorbereitung braucht es nicht.',
            hostNote: 'Handys stumm und außer Reichweite. Setzt euch einander zugewandt — Sofa-Ecke oder über Eck am Tisch ist besser als frontal gegenüber. Wer mag: Kerze an.',
            description: 'Ihr braucht nichts außer Zeit und der Bereitschaft, ehrlich zu antworten. Der Abend funktioniert, wenn ihr euch fremd seid — und er funktioniert, wenn ihr seit zwanzig Jahren zusammen seid. Fremde entdecken einen Menschen. Vertraute entdecken, was sie zu kennen glaubten.' },
          { name: 'Einstieg', title: 'Was hier gleich passiert', duration: 5*60,
            teaser: 'Die echte Studie hinter dem Mythos — in zwei Minuten.',
            hostNote: 'Eine:r liest laut vor.',
            description: 'Kurz die ehrliche Version: 1997 ließ der Psychologe Arthur Aron einander fremde Menschen 45 Minuten lang Fragen austauschen, die immer persönlicher wurden. Danach fühlten sich viele Paare einander näher als mancher Freundschaft nach Monaten. Der Trick ist die Gegenseitigkeit — beide öffnen sich, im gleichen Tempo, Schritt für Schritt.\n\n„Zum Verlieben" wurden die Fragen erst 2015, als die Autorin Mandy Len Catron ihren Selbstversuch beschrieb — und den Mann später heiratete. Ihr eigenes Fazit: Die Fragen erzwingen nichts. Sie machen etwas möglich.\n\nMehr müsst ihr nicht wissen. Los.' },
          { name: 'Regeln', title: 'Drei Regeln, mehr nicht', duration: 4*60,
            teaser: 'Abwechselnd, beide antworten, nicht hetzen.',
            items: [
              { label: '1. Abwechselnd', text: 'Lest die Fragen abwechselnd laut vor. Wer vorliest, antwortet zuerst — dann die andere Person. Beide beantworten jede Frage.' },
              { label: '2. Der Reihe nach', text: 'Keine Fragen überspringen, keine vorziehen. Die Reihenfolge ist das Design: Sie baut die Tiefe langsam auf, damit nichts zu früh kommt.' },
              { label: '3. Nicht hetzen', text: 'Es ist kein Quiz. Wenn eine Frage ein Gespräch öffnet — geht hinein. Die Zeiten pro Runde sind Richtwerte, keine Stoppuhr.' }
            ] },
          { name: 'Runde I', title: 'Die Fragen 1 bis 12', duration: 18*60,
            teaser: 'Der Anfang: leicht, neugierig, öffnend.',
            hostNote: 'Abwechselnd vorlesen, beide antworten. Richtwert: 15-20 Minuten.',
            items: [
              { label: '1.', text: 'Wenn du jeden Menschen der Welt einladen könntest: Wen hättest du gern als Gast zum Abendessen?' },
              { label: '2.', text: 'Wärst du gern berühmt? Wofür?' },
              { label: '3.', text: 'Übst du manchmal vorher, was du in einem Telefonat sagen wirst? Warum?' },
              { label: '4.', text: 'Wie sähe für dich ein „perfekter" Tag aus?' },
              { label: '5.', text: 'Wann hast du zuletzt für dich allein gesungen? Und für jemand anderen?' },
              { label: '6.', text: 'Wenn du 90 werden und dabei ab jetzt entweder den Körper oder den Geist eines 30-Jährigen behalten könntest — was würdest du wählen?' },
              { label: '7.', text: 'Hast du eine heimliche Ahnung, wie du einmal sterben wirst?' },
              { label: '8.', text: 'Nennt drei Dinge, die ihr beide gemeinsam zu haben scheint.' },
              { label: '9.', text: 'Wofür in deinem Leben bist du am dankbarsten?' },
              { label: '10.', text: 'Wenn du eine Sache daran ändern könntest, wie du aufgewachsen bist — welche wäre es?' },
              { label: '11.', text: 'Erzähl deinem Gegenüber in vier Minuten deine Lebensgeschichte — so ausführlich, wie es geht.' },
              { label: '12.', text: 'Wenn du morgen mit einer neuen Fähigkeit oder Eigenschaft aufwachen könntest — welche wäre es?' }
            ] },
          { name: 'Zwischenhalt', title: 'Kurz auftauchen', duration: 3*60,
            teaser: 'Wasser holen, durchatmen — und ein kurzer Blick: Wie ist es bis hierher?',
            hostNote: 'Aufstehen erlaubt. Etwas zu trinken holen. Nicht ins Handy schauen.',
            description: 'Ein kurzer Boxenstopp. Sagt einander in einem Satz, wie es sich bis hierher anfühlt — und dann geht es eine Ebene tiefer.' },
          { name: 'Runde II', title: 'Die Fragen 13 bis 24', duration: 18*60,
            teaser: 'Jetzt wird es persönlicher: Erinnerungen, Freundschaft, Familie.',
            hostNote: 'Gleiches Prinzip: abwechselnd vorlesen, beide antworten. 15-20 Minuten.',
            items: [
              { label: '13.', text: 'Wenn eine Kristallkugel dir die Wahrheit über dich, dein Leben oder die Zukunft sagen könnte — was würdest du wissen wollen?' },
              { label: '14.', text: 'Gibt es etwas, das du schon lange tun willst? Warum hast du es noch nicht getan?' },
              { label: '15.', text: 'Was ist die größte Leistung deines bisherigen Lebens?' },
              { label: '16.', text: 'Was schätzt du an einer Freundschaft am meisten?' },
              { label: '17.', text: 'Was ist deine kostbarste Erinnerung?' },
              { label: '18.', text: 'Was ist deine schlimmste Erinnerung?' },
              { label: '19.', text: 'Wenn du wüsstest, dass du in einem Jahr plötzlich sterben wirst — würdest du etwas an deinem Leben ändern? Warum?' },
              { label: '20.', text: 'Was bedeutet Freundschaft für dich?' },
              { label: '21.', text: 'Welche Rolle spielen Liebe und Zuneigung in deinem Leben?' },
              { label: '22.', text: 'Abwechselnd: Nennt einander je fünf Dinge, die ihr am anderen positiv findet.' },
              { label: '23.', text: 'Wie eng ist deine Familie? Glaubst du, deine Kindheit war glücklicher als die der meisten anderen?' },
              { label: '24.', text: 'Wie ist deine Beziehung zu deiner Mutter?' }
            ] },
          { name: 'Zwischenhalt II', title: 'Noch einmal Luft holen', duration: 2*60,
            teaser: 'Die letzte Runde ist die tiefste.',
            description: 'Kurz strecken, nachschenken. Die dritte Runde ist die intensivste — sie fragt nach dem, was man sonst höchstens nachts um zwei erzählt.' },
          { name: 'Runde III', title: 'Die Fragen 25 bis 36', duration: 20*60,
            teaser: 'Die tiefste Runde — hier entsteht die Nähe, für die die Studie berühmt ist.',
            hostNote: 'Langsam lesen. Bei diesen Fragen lohnt es sich, nicht höflich zu antworten, sondern ehrlich.',
            items: [
              { label: '25.', text: 'Macht abwechselnd je drei wahre „Wir"-Aussagen. Zum Beispiel: „Wir sitzen beide in diesem Raum und fühlen gerade …"' },
              { label: '26.', text: 'Vervollständige den Satz: „Ich wünschte, ich hätte jemanden, mit dem ich … teilen könnte."' },
              { label: '27.', text: 'Wenn ihr enge Freund:innen werden solltet: Was müsste dein Gegenüber unbedingt über dich wissen?' },
              { label: '28.', text: 'Sag deinem Gegenüber, was du an ihm oder ihr magst — ehrlicher, als du es normalerweise bei jemandem sagen würdest, den du gerade erst kennenlernst.' },
              { label: '29.', text: 'Erzähl deinem Gegenüber einen peinlichen Moment aus deinem Leben.' },
              { label: '30.', text: 'Wann hast du zuletzt vor einem anderen Menschen geweint? Und wann für dich allein?' },
              { label: '31.', text: 'Sag deinem Gegenüber etwas, das du jetzt schon an ihm oder ihr magst.' },
              { label: '32.', text: 'Worüber sollte man deiner Meinung nach keine Witze machen?' },
              { label: '33.', text: 'Wenn du heute Abend sterben würdest, ohne noch mit jemandem sprechen zu können: Was würdest du am meisten bereuen, nie gesagt zu haben — und warum hast du es bisher nicht gesagt?' },
              { label: '34.', text: 'Dein Zuhause brennt. Alle Menschen und Tiere sind in Sicherheit, und du kannst noch einmal hinein, um eine einzige Sache zu retten. Welche — und warum?' },
              { label: '35.', text: 'Wessen Tod in deiner Familie würde dich am meisten erschüttern? Warum?' },
              { label: '36.', text: 'Erzähl von einem persönlichen Problem und frag dein Gegenüber, wie er oder sie damit umgehen würde. Frag danach, wie du in Bezug auf dieses Problem auf ihn oder sie wirkst.' }
            ] },
          { name: 'Augenkontakt', title: 'Vier Minuten — wenn ihr euch traut', duration: 5*60,
            teaser: 'Die berühmte Zutat aus dem Essay. Optional — und gerade deshalb stark.',
            hostNote: 'Timer auf 4 Minuten stellen, dann das Handy wegdrehen. Blinzeln und Lachen sind erlaubt — wegschauen nicht. Und: Diese Station ist wirklich optional.',
            description: 'Das hier stammt nicht aus Arons Studie, sondern aus Mandy Len Catrons Essay — und ist trotzdem der Teil, über den alle sprechen: vier Minuten stiller, direkter Augenkontakt.\n\nEs klingt nach nichts und ist nach etwa dreißig Sekunden erstaunlich intensiv. Wenn es kribbelig wird: bleiben. Wenn ihr lachen müsst: lachen — und bleiben.' },
          { name: 'Danach', title: 'Was nehmt ihr mit?', duration: 5*60,
            teaser: 'Ein kurzer, ehrlicher Rückblick zu zweit.',
            hostNote: 'Beide nacheinander, ohne den anderen zu korrigieren.',
            description: 'Wenn euch dieses Format gefallen hat: Die 36 Fragen sind bei KlarKreis der Anfang, nicht das Ende. Der geführte Date-Abend führt euch mit derselben Sorgfalt durch ein ganzes erstes Treffen — und die Themenabende gehen dahin, wo einzelne Fragen nicht hinkommen.',
            question: 'Welche Antwort deines Gegenübers hat dich am meisten überrascht — und welche Frage nimmst du für dich mit nach Hause?' },
          { name: 'Wort', title: 'Ein Wort zum Abschied', duration: 2*60,
            teaser: 'Der Abend in einem Wort.',
            hostNote: 'Beide je ein Wort. Keine Begründung.',
            question: 'Ein Wort, mit dem du aus diesem Abend gehst.' }
        ])
      }
    }
  },

  // =====================================================================
  // ERSTES DATE — 75 Minuten, auf einer Decke im Park, nach dem Match.
  // Evidenzbasiert nach Aron (36 Fragen), Esther Perel, Helen Fisher,
  // Alain de Botton, Schwartz (Paradox of Choice), Provine (Lachen).
  // Fünf Phasen: Dekompression · Eskalation · Flirt · Stille · Ehrlichkeit.
  // =====================================================================
  date: {
    title: 'Erstes Date',
    subtitle: 'Für zwei, die sich gerade erst richtig treffen',
    lead: 'Ein geführtes Gespräch für zwei Menschen beim ersten Date — egal ob ihr euch auf einer App gematcht habt, im Freundeskreis vermittelt bekommen habt oder beim Bäcker zufällig ins Gespräch gekommen seid. Funktioniert überall: im Park auf einer Decke, in einer Bar mit zwei Gläsern Wein, auf dem Sofa bei einem von euch, am Küchentisch im Winter. Gut 90 Minuten, die die Höflichkeits-Fassade durchbrechen — leicht, flirty, ehrlich, mit echter Stille und einer klaren Entscheidung am Ende.',
    category: 'Date',
    image: 'images/date.jpg',
    philosophy1: 'Das erste Date ist ein seltsamer Moment: zwei Menschen, die sich auf irgendeine Weise vorher schon gesehen haben — in Nachrichten, über Freunde, in kurzen Zufalls-Begegnungen — und jetzt ohne Fluchtweg gegenüber sitzen. Die ersten fünfzehn Minuten entscheiden, ob das ein Bewerbungsgespräch wird oder etwas anderes. Dieses Format gibt euch das Alibi für Verspieltheit — und die Struktur, um von kuratierter Selbstdarstellung zur echten Begegnung zu kommen.',
    philosophy2: 'Der Abend folgt einer kalibrierten Dramaturgie: Erst Dekompression (Nervensystem runterfahren), dann gegenseitige Selbstoffenbarung auf steigender Tiefe (Aron), dann bewusst Humor und spielerische Spannung, zwei Minuten nonverbaler Augenkontakt, und am Schluss eine ehrliche Antwort auf die einzige Frage, die zählt: wollen wir uns nochmal sehen? — Ja oder Nein, beides ist hier okay.',
    paid: 'date',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 35 Min.',
        people: '2 Personen nach dem ersten Match',
        stationCount: 15,
        totalMinutes: 97,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Vorbereitung allein',
        duration: '~20 Min.',
        people: 'Nur du — vor dem Date',
        stationCount: 7,
        totalMinutes: 25,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  // =====================================================================
  // WIR-REISE · ABEND 1 — Auftakt: Die Vier Reiter
  // Nach John Gottman, „Die 7 Geheimnisse der glücklichen Ehe".
  // Free Lead-Magnet für die 7-Abende-Reise. Diagnostik durch die Vier
  // Apokalyptischen Reiter + Sound Relationship House als Übersicht +
  // Liebeslandkarten-Einstieg in Abend 2.
  // =====================================================================
  wir_reise_1: {
    title: "Wir — sehen, was uns trägt",
    subtitle: "Wir-Reise · Abend 1 von 7 (frei)",
    lead: "Die meisten Paare reden über das, was nicht klappt. Wenige verstehen, woran sich das wirklich zeigt. John Gottman hat über Jahrzehnte Paare im Labor beobachtet und kann nach kurzer Zeit mit hoher Treffsicherheit vorhersagen, ob eine Beziehung halten wird. Dieser Abend bringt euch das Frühwarnsystem nahe — die Vier Reiter — und legt die Grundlage für die sechs Abende, die folgen.",
    category: "Wir-Reise",
    image: "images/wir-reise-1.jpg",
    reise: { id: "wir", nr: 1, total: 7, titel: "Wir-Reise — Sieben Abende für Paare" },
    philosophy1: "John Gottman hat das umfangreichste Datenset der Beziehungsforschung gesammelt. Sein Befund ist überraschend nüchtern: was glückliche Paare auszeichnet, ist nicht Glück, Schönheit oder Tiefenanalyse. Es ist ein Set von Mikro-Gewohnheiten, das verhindert, dass Negatives das Positive überwächst. Er nennt das emotionale Intelligenz in der Ehe.",
    philosophy2: "Heute identifiziert ihr die Vier Apokalyptischen Reiter — Kritik, Verachtung, Rechtfertigung, Mauern. Sie sind die präzisesten Frühwarnzeichen, die die Beziehungsforschung kennt. Und ihr lernt die Reparatur-Versuche kennen, die sie entschärfen. Das ist die Diagnose-Werkstatt vor der eigentlichen Reise.",
    formats: {
      pair: {
        label: "Zu zweit",
        duration: "~2 Std.",
        people: "2 Personen",
        stations: withFeedback([
          { name: "Öffnen",
            title: "Ein Moment, bevor ihr beginnt",
            duration: 180,
            hostNote: "Kerze anzünden. Handys stumm und weg. Drei gemeinsame Atemzüge. Dieser Abend ist kein Streit-Anlass — er ist eine ruhige Diagnose. Kommt erst kurz an.",
            description: "Kurz ankommen, bevor's losgeht — nicht esoterisch, sondern praktisch: damit ihr nicht mit dem halben Kopf noch beim Abwasch oder bei den Mails seid, wenn es gleich um euch geht.\n\nUnd eine Vorwarnung: heute fallen ein paar Beobachtungen über eure Beziehung. Nehmt sie als Wetterbericht, nicht als Urteil.",
            teaser: "Drei Atemzüge, bevor ihr genau hinseht." },
          { name: "Ankommen",
            title: "Wie kommst du heute hier an?",
            duration: 480,
            hostNote: "Beide nacheinander, je 3-4 Min. Die andere Person hört nur zu — nicht antworten, nicht korrigieren, nicht beruhigen.",
            question: "Wie kommst du heute hier an — und was hast du vor der Tür liegen lassen, damit du jetzt hier bist? — Und mit welcher stillen Erwartung sitzt du hier: Neugier, Skepsis, ein bisschen Bammel?" },
          { name: "Einstieg",
            title: "Was glückliche Paare wirklich anders machen",
            duration: 480,
            hostNote: "Eine:r liest langsam vor. Nach dem Zitat 30 Sekunden Stille.",
            quote: { text: "Glücklich verheiratete Paare sind nicht klüger, reicher oder psychologisch raffinierter als andere. Aber sie haben eine Dynamik entwickelt, die verhindert, dass die negativen Gefühle die positiven überdecken.", author: "John Gottman" },
            description: "Gottman hat über 16 Jahre Paare im Labor beobachtet und dabei etwas erstaunlich Unspektakuläres gefunden: stabile Paare sind nicht klüger oder bewusster — sie haben kleine Gewohnheiten, die das Negative klein halten und das Positive sichtbar. Heute schaut ihr, welche dieser Gewohnheiten ihr habt und welche fehlen.",
            teaser: "Der überraschende Befund der größten Beziehungsstudie aller Zeiten." },
          { name: "Modell",
            title: "Sieben Bausteine, die tragen",
            duration: 420,
            hostNote: "Eine:r liest vor. Beide visualisieren das Haus im Kopf — die sieben Ebenen sind die Architektur der Reise.",
            description: "Die Beziehungsforschung findet immer wieder dieselben sieben Bausteine. Sie bauen aufeinander auf — die unteren tragen die oberen.\n\nDie Reihenfolge ist kein Zufall — die unteren Stockwerke tragen die oberen. Wer beim Streiten (Stockwerk 5) immer wieder feststeckt, dem fehlt meist etwas weiter unten: Wissen voneinander, Zuwendung, das Gefühl, gemocht zu sein.",
            items: [
              { accent: "7.", label: "Gemeinsamer Sinn", text: "Eure Kultur, Rituale, das Wir-Gefühl jenseits des Alltags." },
              { accent: "6.", label: "Pattsituationen überwinden", text: "Die Träume hinter ewigen Konflikten entdecken." },
              { accent: "5.", label: "Lösbare Probleme lösen", text: "Konflikte präzise managen, statt sie zu vermeiden." },
              { accent: "4.", label: "Einfluss zulassen", text: "Die Meinung des anderen wirklich an sich heranlassen." },
              { accent: "3.", label: "Sich einander zuwenden", text: "Die Mikro-Momente der Verbundenheit im Alltag." },
              { accent: "2.", label: "Zuneigung & Bewunderung", text: "Die positive Innen-Brille füreinander pflegen." },
              { accent: "1.", label: "Liebeslandkarten", text: "Wissen, wie der andere innerlich tickt — aktualisiert." },
              { accent: "I", label: "Tragsäule: Vertrauen", text: "Du weißt, ich bin auf deiner Seite, wenn es schwer wird." },
              { accent: "II", label: "Tragsäule: Verpflichtung", text: "Wir gehen das hier zusammen, auch wenn andere lockten." }
            ],
            teaser: "Das Modell der ganzen Reise — sieben Stockwerke auf zwei Säulen." },
          { name: "Reiter",
            title: "Die Vier Apokalyptischen Reiter",
            duration: 720,
            hostNote: "Eine Person liest langsam vor, die andere hört. Nach dem letzten Reiter eine Minute Stille.",
            description: "Gottman hat vier Verhaltensmuster identifiziert, deren Auftreten in den ersten Minuten eines Streits mit hoher Trefferquote vorhersagt, ob das Gespräch — und die Beziehung — gut endet. Oft reicht ihm dafür der Anfang der Diskussion; danach wird es kaum noch besser.\n\nEr nennt sie die Vier Apokalyptischen Reiter, weil sie selten allein kommen: sie reiten meist in Reihenfolge, und einer öffnet dem nächsten die Tür.",
            items: [
              { accent: "1.", label: "Kritik", text: "Statt einer konkreten Beschwerde („Du hast heute den Müll vergessen“) ein Angriff auf den Charakter („Du bist so unaufmerksam, immer“). Aus einer Tat wird ein Wesensmerkmal." },
              { accent: "2.", label: "Verachtung", text: "Augenrollen, Spott, Sarkasmus, Beleidigungen, „Wirklich? Das war dein Plan?“. Verachtung ist der stärkste Einzel-Vorhersager einer Trennung. Sie sagt: ich stehe über dir." },
              { accent: "3.", label: "Rechtfertigung", text: "Verteidigung statt Verantwortung. „Ich hab's nicht vergessen, du hast mir ja nichts gesagt.“ Das schiebt der Partner:in den schwarzen Peter zu, statt einen Zentimeter zu geben." },
              { accent: "4.", label: "Mauern", text: "Schweigen, Wegschauen, sich emotional rausziehen. Wirkt cool, ist aber das Gegenteil — innerlich ist man überflutet und macht zu, weil man nicht mehr kann." }
            ],
            teaser: "Vier Muster, die in den ersten Minuten eines Streits den Ausgang verraten." },
          { name: "Selbsttest",
            title: "Welcher Reiter ist eurer?",
            duration: 720,
            hostNote: "Jede:r markiert für sich, im Kopf oder auf Papier: welche der vier Reiter erkenne ich in MIR? Bei welchem fühle ich mich sofort ertappt? Dann reihum, je 2-3 Min. Sehr wichtige Regel: ihr benennt nur euch selbst, nicht die andere Person. Wer mit dem Finger auf die andere zeigt, ist bei Reiter Nr. 1 — Kritik — schon angekommen.",
            description: "Jeder Mensch hat seine Reiter-Signatur — die zwei, drei Muster, in die er unter Stress kippt. Wer seine kennt, kann sie früher abfangen. Wer sie nicht kennt, ist ihnen ausgeliefert.\n\nArbeitet euch nacheinander durch die Fragen — nicht nur beantworten, sondern kurz ein Beispiel dazu.",
            question: "Welche zwei der vier Reiter sind bei dir am leichtesten geweckt? — In welchen Momenten reiten sie los: eher wenn du müde bist, wenn du dich ungerecht behandelt fühlst, wenn du in Eile bist? — Woran merkst DU körperlich, dass es losgeht — Kiefer, Stimme, ein bestimmter Satz, der dir rausrutscht? — Und welcher deiner Reiter kommt meistens zuerst — und welchen zieht er dann nach sich?" },
          { name: "Szene",
            title: "Eine echte Szene, langsam durchgehen",
            duration: 840,
            hostNote: "Wählt gemeinsam eine konkrete Streitszene aus den letzten Wochen — eine, die ihr beide noch erinnert. Nicht die schlimmste, eine mittelschwere. Jede:r erzählt 5 Min die eigene Erinnerung der ersten drei Minuten. Die andere Person hört nur zu. Danach geht ihr gemeinsam die Fragen durch — jede:r nennt nur die eigenen Reiter.",
            description: "Theorie ist leicht. Die eigenen Reiter im echten Beispiel zu sehen ist schwer — und der einzige Weg, sie wirklich zu kennen. Diese Station ist die Kern-Diagnostik des Abends.",
            question: "Welche der vier Reiter tauchen in deinen ersten drei Minuten auf? — An welcher Stelle kippt das Gespräch: schon beim Auftakt, oder erst als eine:r sich verteidigt? — Gab es einen Versuch, die Kurve zu kriegen — einen Witz, ein Einlenken — und wurde er gehört oder überrollt? — Wenn ihr die Szene noch mal von vorn starten könntet: welcher eine erste Satz hätte sie anders laufen lassen?",
            teaser: "Theorie wird konkret an einer eigenen Szene." },
          { name: "Stille",
            title: "Drei Minuten Atem",
            duration: 180,
            hostNote: "Kerze anschauen oder Augen zu. Nichts sagen, nichts erklären. Drei Minuten.",
            description: "Nach der Szene-Arbeit braucht der Kopf Luft. Lasst sie. Wer weinen will, weint. Wer sich entschuldigen will, entschuldigt sich nicht jetzt, sondern später — der Drang vergeht meistens, und das ist gut so." },
          { name: "Reparatur",
            title: "Die Gegen-Werkzeuge: Reparatur-Versuche",
            duration: 600,
            hostNote: "Eine:r liest vor. Reihum: welcher dieser fünf Reparatur-Versuche fehlt euch am meisten? Welcher klappt schon?",
            description: "Das, was glückliche Paare wirklich unterscheidet, ist nicht die Abwesenheit der Reiter — auch sie haben sie. Es ist die Fähigkeit, mitten im Streit kleine Reparatur-Versuche zu machen und sie beim anderen anzunehmen.\n\nOb so ein Versuch ankommt, hängt übrigens weniger vom Versuch selbst ab als davon, wie es sonst zwischen euch steht — deshalb kommen die nächsten Abende. Fünf Klassen:",
            items: [
              { accent: "1.", label: "Sanfter Auftakt", text: "Eine Beschwerde mit Ich-Botschaft beginnen statt mit „Du immer“. „Ich war heute traurig, weil…“ statt „Du nimmst dich nie zurück.“" },
              { accent: "2.", label: "Humor", text: "Ein Insider-Witz, ein Augenzwinkern, eine gemeinsame Albernheit — leitet Verachtung sofort ab, weil man schwer gleichzeitig lachen und verachten kann." },
              { accent: "3.", label: "Anerkennen", text: "Ein einzelner Satz: „Du hast recht mit dem, was du gerade sagst.“ Schaltet Rechtfertigung auf der Stelle aus." },
              { accent: "4.", label: "Time-out", text: "Pause vereinbaren, wenn eine:r überflutet ist. Mindestens 20 Minuten — so lange braucht der Körper, um runterzukommen — danach wieder anfangen. „Ich brauche zehn Minuten“ ist kein Rückzug, sondern Regulation." },
              { accent: "5.", label: "Zuneigung", text: "Mitten im Streit eine kurze Berührung, ein „Ich mag dich auch, wenn ich gerade sauer bin“ — schwer, möglich, kraftvoll." }
            ],
            question: "Welcher Reparatur-Versuch fällt euch leicht — und welcher fehlt euch am meisten? — Und woran erkennt ihr beim anderen überhaupt, dass er gerade einen Versuch startet?" },
          { name: "Verhältnis",
            title: "Das magische 5-zu-1-Verhältnis",
            duration: 480,
            hostNote: "Eine:r liest. Reihum: in welchem Bereich eures Alltags ist das Verhältnis aus dem Lot?",
            description: "Gottman hat in seinen Daten ein präzises Muster gefunden: stabile Paare haben im Streit mindestens fünfmal mehr positive als negative Interaktionen. Außerhalb von Streit eher zwanzig zu eins. Das ist kein Wunschwert — es ist die Schwelle, ab der eine Beziehung trägt.\n\nPositive Mikro-Momente sind dabei keine Liebeserklärungen — es ist ein interessiertes „Wie war dein Tag?“, ein Nicken, ein Berühren beim Vorbeigehen, ein Lachen über etwas Albernes. Rutschen die negativen Momente unter das Fünftel der positiven, kippt das Klima — und Verbitterung richtet sich schneller ein, als man denkt.",
            question: "In welchen Stunden oder Situationen eures Alltags ist euer 5:1 eher 1:1 — der Morgen im Stress, der Übergabe-Moment nach der Arbeit, das Zubettgehen? — Woran würdet ihr das konkret messen? — Und wo im Tag habt ihr das Verhältnis schon gut hinbekommen, ohne es zu planen?" },
          { name: "Mini-Liebeskarte",
            title: "Wie gut kenne ich dich noch?",
            duration: 720,
            hostNote: "Vorgeschmack auf Abend 2. Reihum: einer fragt, der andere antwortet, dann Wechsel. Wählt 6-8 Fragen aus, deren Antwort ihr nicht hundertprozentig sicher kennt.",
            description: "Gottman startet seine sieben Geheimnisse mit den Liebeslandkarten — wie aktuell ist dein inneres Bild deiner Partner:in? Diese Karten veralten leise: das Wissen von vor drei Jahren fühlt sich noch richtig an, stimmt aber nicht mehr. Heute ist das nur eine erste Probe — Abend 2 geht in die Tiefe. Schaut heute nur, wo Lücken sind.",
            items: [
              { accent: "1.", label: "Stress-Top-Three", text: "Was sind die drei Dinge, die meine Partner:in gerade am meisten stressen?" },
              { accent: "2.", label: "Was nervt heimlich", text: "Was nervt meine Partner:in gerade an mir, das sie noch nicht ausgesprochen hat?" },
              { accent: "3.", label: "Heimlicher Traum", text: "Was ist ein Traum meiner Partner:in, von dem sie selten spricht?" },
              { accent: "4.", label: "Größte Angst gerade", text: "Welche Angst hält meine Partner:in gerade nachts wach?" },
              { accent: "5.", label: "Wichtiger Mensch", text: "Wer ist der Mensch außerhalb unserer Beziehung, mit dem meine Partner:in gerade am meisten zu tun hat?" },
              { accent: "6.", label: "Lieblingsessen", text: "Was wäre das Essen, das meine Partner:in gerade ohne Zögern wählen würde — wenn es egal wäre, was andere wollen?" },
              { accent: "7.", label: "Hass-Aufgabe", text: "Welche alltägliche Aufgabe hasst meine Partner:in am meisten?" },
              { accent: "8.", label: "Letzte Tränen", text: "Wann hat meine Partner:in zuletzt geweint — und worüber?" }
            ],
            teaser: "Eine Probe für die echte Tiefe in Abend 2." },
          { name: "Einladung",
            title: "Wohin die Wir-Reise führt",
            duration: 300,
            hostNote: "Eine:r liest vor. Nicht verkaufen — einladen.",
            description: "Heute habt ihr die Diagnostik gemacht. Eure Reiter benannt, das Haus gesehen, eine Mini-Probe in Liebeslandkarten gemacht. Die sechs folgenden Abende bauen das Haus konkret aus:\n\n→ Abend 2 — Liebeslandkarten. Die Tiefen-Version dessen, was ihr heute angerissen habt. 60+ Fragen, ein präzises inneres Bild voneinander auf den neuesten Stand.\n→ Abend 3 — Zuneigung und Bewunderung. Die positive innere Brille pflegen, jenseits von Komplimenten.\n→ Abend 4 — Sich zuwenden. Die Mikro-Gesten, in denen eine Beziehung wirklich lebt (oder stirbt).\n→ Abend 5 — Einfluss zulassen. Macht teilen, ohne sich aufzugeben.\n→ Abend 6 — Konflikte. Die zwei Arten Streit und wie ihr beide sie handhabt — inklusive der Träume hinter Pattsituationen.\n→ Abend 7 — Gemeinsamer Sinn. Eure Kultur, Rituale, das Wir jenseits des Alltags.\n\nKeine Therapie. Eine Werkstatt." },
          { name: "Schritt",
            title: "Eine kleine Sache diese Woche",
            duration: 420,
            hostNote: "Beide je 2-3 Min: was ist ein einziger konkreter, kleiner Schritt diese Woche? Klein bedeutet: ihr werdet ihn wirklich tun. Schreibt es auf einen Zettel.",
            description: "Nicht „ich werde besser sein“. Sondern: „Wenn ich merke, dass ich mit ‚Du immer' anfange, hole ich einmal Luft und beginne mit einer Ich-Botschaft.“ Oder: „Ich frage täglich einmal ‚Wie war dein Tag?' — und höre die Antwort wirklich zu Ende.“ Klein, beobachtbar, diese Woche.",
            question: "Welcher eine konkrete, kleine Schritt diese Woche — und woran merkt ihr am Sonntag, dass ihr ihn getan habt?" },
          { name: "Wort",
            title: "Ein Wort, mit dem ihr geht",
            duration: 240,
            hostNote: "Beide je ein Wort. Keine Begründung.",
            question: "Ein Wort für die Woche zwischen heute und Abend 2." }
        ])
      },
      solo: {
        label: "Allein",
        duration: "~1 Std.",
        people: "Nur du",
        stations: withFeedback([
          { name: "Öffnen",
            title: "Ein Moment für dich",
            duration: 120,
            hostNote: "Kerze, Notizbuch, Handy weg. Niemand sonst soll diesen Abend mitlesen — das ist nur für dich.",
            description: "Du machst diese Reise allein, weil du etwas verstehen willst, bevor du es teilst — oder weil deine Partner:in gerade nicht dabei ist. Beides ist legitim. Was du hier findest, gehört dir." },
          { name: "Ankommen",
            title: "Wie kommst du an?",
            duration: 240,
            hostNote: "Schreibe zwei Sätze — nicht die schöne Antwort, die echte.",
            question: "Wie geht es dir gerade in deiner Beziehung — wenn du ehrlich auf eine Skala von 1 bis 10 schaust, welche Zahl? — Und was müsste passieren, damit daraus eine Zahl mehr wird?" },
          { name: "Einstieg",
            title: "Was Glück in Beziehungen ausmacht",
            duration: 240,
            hostNote: "Lies langsam, zweimal.",
            quote: { text: "Was eine Ehe funktionieren lässt, ist erstaunlich einfach. Glücklich verheiratete Paare sind nicht klüger, reicher oder psychologisch raffinierter — sie haben eine Dynamik entwickelt, die verhindert, dass das Negative das Positive überdeckt.", author: "John Gottman" },
            description: "Gottman hat über Jahrzehnte Paare im Labor beobachtet und kann oft schon nach den ersten Minuten eines Streits mit hoher Treffsicherheit sagen, ob eine Beziehung hält. Sein Befund ist nüchtern: es geht nicht um große Liebe, sondern um kleine, wiederholte Gewohnheiten." },
          { name: "Reiter",
            title: "Die vier Apokalyptischen Reiter",
            duration: 360,
            hostNote: "Lies langsam. Markiere für dich: welche kennst du aus dir selbst?",
            description: "Vier Verhaltensmuster, die das Ende vorhersagen — wenn sie unerkannt bleiben. Sie kommen selten allein: einer öffnet dem nächsten die Tür.",
            items: [
              { accent: "1.", label: "Kritik", text: "Aus einer Tat ein Wesensmerkmal machen („du bist immer so“)." },
              { accent: "2.", label: "Verachtung", text: "Augenrollen, Spott, Überlegenheit. Stärkster Einzel-Vorhersager einer Trennung." },
              { accent: "3.", label: "Rechtfertigung", text: "Verteidigung statt Verantwortung — der schwarze Peter wandert zurück." },
              { accent: "4.", label: "Mauern", text: "Sich emotional zurückziehen, wenn man innerlich überflutet ist." }
            ] },
          { name: "Deine Reiter",
            title: "Welche sind deine?",
            duration: 480,
            hostNote: "Schreibe 6 Min am Stück. Ehrlich — niemand liest mit.",
            question: "Welche zwei der vier Reiter sind bei dir am leichtesten geweckt? — Was triggert sie typischerweise: Müdigkeit, Ungerechtigkeit, Zeitdruck? — An welcher konkreten Szene der letzten Monate erkennst du das? — Und welcher deiner Reiter kommt meist zuerst und zieht die anderen nach?" },
          { name: "Reparatur",
            title: "Die Gegen-Werkzeuge",
            duration: 360,
            hostNote: "Lies. Markiere: welcher fällt dir am leichtesten, welcher am schwersten?",
            description: "Was glückliche Paare unterscheidet: sie machen mitten im Streit kleine Reparatur-Versuche — und nehmen sie beim anderen an.",
            items: [
              { accent: "1.", label: "Sanfter Auftakt", text: "„Ich war traurig…“ statt „Du immer…“" },
              { accent: "2.", label: "Humor", text: "Ein Insider-Witz, ein Augenzwinkern." },
              { accent: "3.", label: "Anerkennen", text: "„Du hast recht mit dem, was du gerade sagst.“" },
              { accent: "4.", label: "Time-out", text: "Pause vereinbaren bei innerer Überflutung — mindestens 20 Minuten." },
              { accent: "5.", label: "Zuneigung", text: "Eine Berührung mitten im Streit." }
            ],
            question: "Welcher Reparatur-Versuch fehlt in deiner Beziehung am meisten — und welcher fällt dir leicht?" },
          { name: "Eine Szene",
            title: "Eine eigene Szene durchgehen",
            duration: 480,
            hostNote: "Schreibe 7 Min. Eine konkrete Streitszene der letzten Wochen — mittelschwer, nicht die schlimmste. Erste drei Minuten in Zeitlupe.",
            question: "Welche Reiter sind in den ersten drei Minuten aufgetreten — bei dir? — An welcher Stelle ist das Gespräch gekippt? — Welcher Reparatur-Versuch wäre dort möglich gewesen — und was hat dich davon abgehalten?" },
          { name: "Mini-Karte",
            title: "Wie gut kennst du sie oder ihn noch?",
            duration: 360,
            hostNote: "Schreibe die Antworten für dich. Markiere mit Fragezeichen, wo du dir unsicher bist — das sind die Punkte, die in Abend 2 wichtig werden.",
            description: "Eine erste Probe für die Liebeslandkarten-Arbeit von Abend 2. Solche inneren Karten veralten leise — was vor Jahren stimmte, fühlt sich noch richtig an, ist es aber oft nicht mehr.",
            question: "Beantworte für dich: Was sind die drei größten Stressquellen deiner Partner:in gerade? — Was ist ihr heimlicher Traum? — Was nervt sie an dir, das sie noch nicht ausgesprochen hat? — Wann hat sie zuletzt geweint, und worüber?" },
          { name: "Ausblick",
            title: "Was Abend 2 bringt",
            duration: 180,
            hostNote: "Lies. Nimm den Impuls mit.",
            description: "→ Abend 2 — Liebeslandkarten. Die Tiefen-Version dessen, was du heute angerissen hast. Du arbeitest mit über 60 Fragen aus Gottmans Liebeslandkarten-Spiel und bekommst ein präzises Bild davon, wie aktuell dein Wissen ist. Die Schwächen wirst du sehen — die Lücken sind die spannendste Information." },
          { name: "Schritt",
            title: "Ein konkreter Schritt",
            duration: 180,
            hostNote: "Schreibe einen einzigen Satz auf einen Zettel. Klein, diese Woche.",
            description: "Nicht „ich werde besser“. Sondern: ein einziges konkretes Mikro-Verhalten diese Woche — eines, das du am Sonntag ehrlich abhaken kannst.",
            question: "Welcher eine konkrete Schritt diese Woche?" },
          { name: "Wort",
            title: "Ein Wort als Anker",
            duration: 120,
            hostNote: "Ein Wort, auf einen Zettel, in die Tasche.",
            question: "Ein Wort für die Woche." }
        ])
      }
    }
  },

  wir_reise_2: {
    title: "Wie gut kennt ihr einander?",
    subtitle: "Wir-Reise · Abend 2 von 7",
    lead: "Im biblischen Sinn hieß sexuelle Liebe „erkennen“. Der Gedanke dahinter: Wer die andere Person nicht wirklich kennt, kann sie auch nicht wirklich halten. Heute aktualisiert ihr eure innere Karte voneinander — inspiriert von John Gottmans Liebeslandkarten-Forschung, in einer 20-Aussagen-Diagnose, einem 60-Fragen-Spiel und fünf Selbstbild-Fragen.",
    category: "Wir-Reise",
    image: "images/wir-reise-2.jpg",
    reise: { id: "wir", nr: 2, total: 7, titel: "Wir-Reise — Sieben Abende für Paare" },
    philosophy1: "Gottmans Daten sind nüchtern: Rund zwei Drittel der Paare erleben nach der Geburt des ersten Kindes einen deutlichen Einbruch der Beziehungszufriedenheit. Das Drittel, das ihn nicht erlebt, hat eine auffällige Gemeinsamkeit — detaillierte Liebeslandkarten. Diese Paare wissen, wie die andere Person innerlich tickt, und sie halten dieses Wissen aktuell. Krisen werfen sie seltener aus der Bahn, weil ihre Innenkarte noch zur echten Person passt.",
    philosophy2: "Liebeslandkarten sind nicht Trivia wie „Lieblingsfarbe Blau“. Gottman meint damit den „kognitiven Raum“, den dein Kopf für die Innenwelt der anderen Person freihält — wie viel du gerade wirklich mitbekommst von dem, was sie beschäftigt, ängstigt, antreibt. Der Alltag frisst diesen Raum leise auf: Irgendwann weißt du, wie sie ihren Kaffee trinkt, aber nicht mehr, was sie nachts wachhält. Heute prüft ihr, wie genau eure Karten noch stimmen, und füllt die weißen Flecken. Es wird leichter, als ihr denkt — und ehrlicher, als ihr erwartet.",
    paid: 'wir_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 40 Min.',
        people: '2 Personen',
        stationCount: 12,
        totalMinutes: 103,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~50 Min.',
        people: 'Nur du',
        stationCount: 9,
        totalMinutes: 54,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  wir_reise_3: {
    title: "Wärme, die man zeigt",
    subtitle: "Wir-Reise · Abend 3 von 7",
    lead: "Wissen allein hält keine Beziehung — es ist nur der Rohstoff. Was trägt, ist die positive innere Brille, durch die ihr euch seht. Gottman nennt sie „Zuneigung und Bewunderung“ und hält sie für das stärkste Gegengift gegen Verachtung, den gefährlichsten der vier Reiter. Heute stellt ihr sie wieder scharf — mit drei Werkzeugen aus Gottmans Forschung: dem Erinnern eurer Geschichte, dem Wertschätzungs-Ritual und einem Sieben-Wochen-Plan für den Alltag.",
    category: "Wir-Reise",
    image: "images/wir-reise-3.jpg",
    reise: { id: "wir", nr: 3, total: 7, titel: "Wir-Reise — Sieben Abende für Paare" },
    philosophy1: "In glücklichen Beziehungen läuft ständig ein leiser Doppel-Vorgang: Einer tut etwas Kleines, die andere Person bemerkt es und legt es positiv aus. Gottman nennt diese Grundstimmung — mit dem Forscher Robert Weiss — „positive sentiment override“. Bei Paaren in der Krise kippt sie ins Gegenteil: Selbst gut gemeinte Taten werden misstrauisch gelesen („was will sie jetzt von mir?“). Dieselbe Handlung, entgegengesetzte Deutung. Diese Verschiebung ist messbar — und sie lässt sich zurückdrehen.",
    philosophy2: "Woran man den Zustand einer Beziehung früh erkennt, ist erstaunlich einfach: daran, wie ein Paar seine eigene Geschichte erzählt. Wer die gemeinsame Vergangenheit — auch die schweren Kapitel — noch mit Wärme und einer Spur Stolz erzählen kann, hat ein Polster, das Stürme trägt. Wer sie nur noch als Kette von Enttäuschungen erinnert, ist gefährdet. Heute erinnert ihr eure Geschichte und übt die Wärme wieder ein.",
    paid: 'wir_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 40 Min.',
        people: '2 Personen',
        stationCount: 12,
        totalMinutes: 101,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~50 Min.',
        people: 'Nur du',
        stationCount: 9,
        totalMinutes: 52,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  wir_reise_4: {
    title: "Die kleinen Momente im Alltag",
    subtitle: "Wir-Reise · Abend 4 von 7",
    lead: "Romantik entsteht nicht bei Kerzenschein, sondern in dem, was Gottman „bids for connection\“ nennt — den winzigen Angeboten zur Verbindung im Alltag. In stabilen Paaren werden 86 Prozent davon aufgegriffen, in zerbrechenden nur 33. Heute lernt ihr, diese Angebote zu erkennen, selbst zu senden und nicht zu verpassen — und ihr übt Gottmans wirksamstes Alltagswerkzeug direkt: das Stress-Reduktions-Gespräch.",
    category: "Wir-Reise",
    image: "images/wir-reise-4.jpg",
    reise: { id: "wir", nr: 4, total: 7, titel: "Wir-Reise — Sieben Abende für Paare" },
    philosophy1: "In Gottmans Ehelabor verraten nicht die Streits am meisten, sondern die langweiligsten Szenen: Einer schaut aus dem Fenster und sagt „schau mal, ein Reiher\“, und der andere blickt kurz auf — oder eben nicht. Aus solchen Sekunden ist Verbundenheit gemacht. Sie wirken banal und sind in Wahrheit das Rohmaterial jeder tragenden Beziehung.",
    philosophy2: "Das gemeinsame Konto wächst nicht durch große Abende, sondern durch hunderte kleiner Einzahlungen am Tag. Wer sich gewohnheitsmäßig abwendet — weiterscrollt, statt aufzuschauen —, kündigt keine große Liebe auf. Er zehrt vom täglichen Polster, bis nichts mehr da ist. Heute schaut ihr genau hin: wo wendet ihr euch zu, wo aneinander vorbei.",
    paid: 'wir_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 45 Min.',
        people: '2 Personen',
        stationCount: 13,
        totalMinutes: 106,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~55 Min.',
        people: 'Nur du',
        stationCount: 10,
        totalMinutes: 56,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  wir_reise_5: {
    title: "Wer entscheidet — und wer gibt nach?",
    subtitle: "Wir-Reise · Abend 5 von 7",
    lead: "Gottmans schärfste Statistik betrifft die Männer: Wer den Einfluss seiner Partnerin nicht zulässt, dessen Ehe scheitert zu 81 Prozent. Dahinter steckt ein Prinzip für alle Konstellationen — wer die Stimme der anderen Person nicht wirklich an sich heranlässt, verliert sie irgendwann ganz. Das ist kein „nett sein müssen\“, sondern Beziehungs-Physik. Heute schaut ihr ehrlich hin, wo ihr Einfluss zulasst und wo ihr abblockt — an echten Alltagsszenen, an Gottmans Selbsttest und an einer Entscheidung, die bei euch gerade wirklich ansteht.",
    category: "Wir-Reise",
    image: "images/wir-reise-5.jpg",
    reise: { id: "wir", nr: 5, total: 7, titel: "Wir-Reise — Sieben Abende für Paare" },
    philosophy1: "Einfluss zulassen heißt nicht nachgeben und nicht meinungslos werden. Es heißt: die Position der anderen Person ernsthaft in dein Entscheiden einbauen — als gleichwertige Stimme, nicht als Bittstellerin. Gottman fand in seinen Daten, dass genau diese Paare in den meisten Konflikten bei einer besseren Lösung landen als der scheinbare „Sieger\“ eines Machtkampfs. Beeinflussbarkeit ist keine Schwäche, sondern Beziehungs-Intelligenz.",
    philosophy2: "Es ist das Geheimnis, das am stärksten am Selbstbild kratzt — fast jeder hält sich für flexibel. Heute wird das konkret: Ihr seht dieselbe Alltagsszene zweimal, einmal als Machtkampf, einmal mit dem einen Satz „da hast du einen Punkt\“. Ihr prüft mit Gottmans Selbsttest, wo ihr in Wahrheit blockt. Und ihr spielt eine echte anstehende Entscheidung durch — nicht als Tauziehen, sondern als Suche nach dem gemeinsamen Boden.",
    paid: 'wir_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 45 Min.',
        people: '2 Personen',
        stationCount: 13,
        totalMinutes: 106,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~50 Min.',
        people: 'Nur du',
        stationCount: 9,
        totalMinutes: 54,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  wir_reise_6: {
    title: "Streit, der sich löst — und Streit, der bleibt",
    subtitle: "Wir-Reise · Abend 6 von 7",
    lead: "Gottman hat tausende Paare im Streit gefilmt und ausgezählt: 69 Prozent aller Konflikte werden nie gelöst — dieselbe Reibung nach zwölf Jahren wie nach zwei. Das sind keine kaputten Paare, das sind alle Paare. Die restlichen 31 Prozent sind wirklich lösbar, brauchen aber Handwerk. Der teure Fehler: ein ewiges Problem behandeln, als wäre es lösbar — da zerreibt man sich an einer Wand. Heute lernt ihr, die zwei Sorten auseinanderzuhalten und in beiden zu navigieren.",
    category: "Wir-Reise",
    image: "images/wir-reise-6.jpg",
    reise: { id: "wir", nr: 6, total: 7, titel: "Wir-Reise — Sieben Abende für Paare" },
    philosophy1: "In Gottmans Langzeitstudie tauchten bei denselben Paaren nach Jahren dieselben Konflikte auf — fast Wort für Wort. „Sie wollte mehr Nähe, er mehr Zeit für sich.“ Das verschwindet nicht. Was glückliche von unglücklichen Paaren trennt, ist nicht das Fehlen dieser Themen, sondern der Umgang damit: Die einen finden einen Weg, mit Humor und Respekt immer wieder daran vorbeizukommen. Die anderen fahren sich fest und werfen sich seit Jahren dieselben Sätze an den Kopf.",
    philosophy2: "Hinter fast jedem festgefahrenen Streit steht auf beiden Seiten ein Traum oder eine alte Geschichte — meist unausgesprochen. Sie besteht auf dem gemeinsamen Sonntagsessen, weil der Tisch das Einzige war, was in ihrer Kindheit verlässlich war. Er will den Sonntag frei, weil verplante Tage sich anfühlen wie das enge Elternhaus, aus dem er raus wollte. Solange der Streit an der Oberfläche bleibt — „Essen gehen oder nicht?“ —, ist er unlösbar. Legt man die Träume darunter frei, muss man ihn nicht mehr lösen. Man versteht ihn. Und ein verstandener Patt verliert seine Schärfe.",
    paid: 'wir_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~2 Std.',
        people: '2 Personen',
        stationCount: 14,
        totalMinutes: 120,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~55 Min.',
        people: 'Nur du',
        stationCount: 9,
        totalMinutes: 60,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  wir_reise_7: {
    title: "Wofür ihr zusammen seid",
    subtitle: "Wir-Reise · Abend 7 von 7 · Abschluss",
    lead: "Die ersten sechs Geheimnisse machen eine Beziehung stabil und freundlich. Trotzdem berichten Gottman viele Paare nach Jahren dasselbe: „Wir funktionieren gut nebeneinander — aber es fehlt etwas.“ Was fehlt, ist gemeinsamer Sinn: die eigene Kultur aus Ritualen, Rollen, Zielen und Symbolen, die aus zwei Leben ein „wir“ macht. Daran arbeitet ihr heute — und am Ende schaut ihr zurück auf die ganze Reise.",
    category: "Wir-Reise",
    image: "images/wir-reise-7.jpg",
    reise: { id: "wir", nr: 7, total: 7, titel: "Wir-Reise — Sieben Abende für Paare" },
    philosophy1: "Jedes Paar ist eine eigene kleine Kultur. Wie eine gewachsene Kultur hat sie Bräuche — sonntags wird zusammen gekocht. Rituale — vor jedem Abschied eine Umarmung. Symbole — ein Ring, ein Ort, eine Geschichte, die nur euch gehört. Und Erzählungen darüber, wer „wir“ sind und wie wir zusammengekommen sind. Wer diese Kultur bewusst pflegt, hat nicht nur eine stabile Beziehung, sondern eine mit Tiefe.",
    philosophy2: "Gottman ist an diesem Punkt betont nüchtern: Ihr müsst nicht dieselben Werte teilen. Entscheidend ist, dass jede:r offen sagen kann, was ihm oder ihr etwas bedeutet — und dass der andere es ernst nimmt. Je öfter ihr freundlich darüber redet, desto mehr nähern sich eure Vorstellungen von einem sinnvollen Leben an. Identisch werden sie nie. Aber ihr bekommt eine gemeinsame Sprache für sie.",
    paid: 'wir_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 40 Min.',
        people: '2 Personen',
        stationCount: 11,
        totalMinutes: 104,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~50 Min.',
        people: 'Nur du',
        stationCount: 9,
        totalMinutes: 55,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },


  // =====================================================================
  // FREI-REISE — Zehn Abende über Wohlstand, Urteilskraft und Ruhe
  // =====================================================================
  frei_reise_1: {
    title: "Wohlstand, Status — und was nur du kannst",
    subtitle: "Frei-Reise · Abend 1 von 10 (frei)",
    lead: "Die meisten Gespräche über Geld drehen sich um Beträge. Kaum eines um die Frage, was davon eigentlich einem selbst gehört. Dieser Abend trennt drei Dinge, die im Alltag ständig ineinanderlaufen — Geld, Wohlstand und Status —, und stellt danach die unangenehmere Frage: Was kannst du eigentlich, wofür es keine Ausbildung gibt?",
    category: "Frei-Reise",
    image: "images/frei-reise-1.jpg",
    reise: { id: "frei", nr: 1, total: 10, titel: "Frei-Reise — Zehn Abende über Wohlstand, Urteilskraft und Ruhe" },
    philosophy1: "Geld verdienen gilt als Tätigkeit. Wahrscheinlich ist es eher eine Fähigkeit — eine, die man lernen kann, und die mit einer einzigen Unterscheidung anfängt: Geld ist etwas anderes als Wohlstand, und Wohlstand etwas anderes als Status. Wer die drei durcheinanderwirft, arbeitet oft jahrelang auf das falsche Ziel zu und merkt es nicht, weil sich alle drei von innen ähnlich anfühlen.",
    philosophy2: "Heute trennt ihr die drei. Ihr schaut nach, was von eurem Einkommen ohne euch weiterläuft. Und ihr kommt zu dem, was manchmal spezifisches Wissen genannt wird: das, wofür es keine Ausbildung gibt und was ihr euch über Neugier und Eigenart angeeignet habt. Das merkt man an sich selbst zuletzt — deshalb macht ihr diesen Teil zu zweit.\n\nIhr braucht für diesen Abend nichts gelesen zu haben, er steht für sich. Wer parallel lesen möchte: Eric Jorgensons „Der Almanach des Naval Ravikant“ behandelt diese Gedanken im ersten Teil, in den Abschnitten über Wohlstand und spezifisches Wissen. Am besten danach statt davor — eigene Antworten zuerst, fremde hinterher. Sonst redet ihr über seine Sätze statt über euch.",
    paid: 'frei_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 45 Min.',
        people: '2 Personen',
        stationCount: 13,
        totalMinutes: 105,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~1 Std.',
        people: 'Nur du',
        stationCount: 12,
        totalMinutes: 60,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  frei_reise_2: {
    title: "Klar denken — und die Identität ablegen",
    subtitle: "Frei-Reise · Abend 2 von 10",
    lead: "„Klar denkend“ ist ein größeres Lob als „intelligent“. Was uns davon abhält, die Dinge zu sehen, wie sie sind, ist selten fehlende Information — es ist der Wunsch, dass sie anders wären. Dieser Abend geht an die Stelle, an der du gerade die Realität vor dir herschiebst.",
    category: "Frei-Reise",
    image: "images/frei-reise-2.jpg",
    reise: { id: "frei", nr: 2, total: 10, titel: "Frei-Reise — Zehn Abende über Wohlstand, Urteilskraft und Ruhe" },
    philosophy1: "Wer die Grundlagen wirklich versteht, kann ein Konzept bei Bedarf neu herleiten. Wer Fachwörter sammelt, ist verloren, sobald etwas Neues auftaucht. Der Unterschied zeigt sich an einer einfachen Probe: Kannst du es einem Zehnjährigen erklären? Wenn nicht, weißt du es nicht — du erinnerst dich nur daran.",
    philosophy2: "Dazu kommt ein zweiter Punkt, der unbequemer ist. Überzeugungen kommen selten einzeln. Sie kommen im Paket — mit einer Partei, einem Beruf, einer Szene, einer Familie. Wer ehrlich denken will, muss das Paket aufmachen und prüfen, was er selbst durchdacht hat und was er übernommen hat, weil es dazugehörte.\n\nIhr braucht für diesen Abend nichts gelesen zu haben. Wer parallel lesen möchte: Eric Jorgensons „Der Almanach des Naval Ravikant“ behandelt das im zweiten Kapitel des ersten Teils — Urteilsvermögen, klares Denken und die Liebe zum Lesen. Am besten danach statt davor.",
    paid: 'frei_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 45 Min.',
        people: '2 Personen',
        stationCount: 13,
        totalMinutes: 105,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~1 Std.',
        people: 'Nur du',
        stationCount: 12,
        totalMinutes: 60,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  frei_reise_3: {
    title: "Entscheiden — und wann Nein die Antwort ist",
    subtitle: "Frei-Reise · Abend 3 von 10",
    lead: "Die meisten Entscheidungen kosten nicht deshalb Kraft, weil die Lage unklar ist, sondern weil man sich nicht festlegen will. Dieser Abend bringt zwei harte Regeln und drei Werkzeuge — und nimmt sich genau die Entscheidung vor, die ihr gerade vor euch herschiebt.",
    category: "Frei-Reise",
    image: "images/frei-reise-3.jpg",
    reise: { id: "frei", nr: 3, total: 10, titel: "Frei-Reise — Zehn Abende über Wohlstand, Urteilskraft und Ruhe" },
    philosophy1: "Es gibt eine unbequeme Rechnung zum Entscheiden: Wer in achtzig Prozent der Fälle richtig liegt statt in siebzig, wird nicht um ein Siebtel besser bezahlt, sondern um Größenordnungen. Der Grund ist, dass Entscheidungen sich vervielfachen — durch Zeit, durch Geld, durch andere Menschen. Deshalb lohnt es, an der Trefferquote zu arbeiten statt am Arbeitstempo.",
    philosophy2: "Zwei Regeln helfen dabei mehr als jede Pro-und-Contra-Tabelle. Erstens: Wenn du dich nicht entscheiden kannst, ist die Antwort Nein — weil die Welt voller Optionen ist und große Entscheidungen dich für Jahre binden. Zweitens: Wenn zwei Wege gleichwertig aussehen, nimm den, der kurzfristig wehtut. Dein Gehirn unterschätzt langfristigen Gewinn systematisch.\n\nIhr braucht für diesen Abend nichts gelesen zu haben. Wer parallel lesen möchte: „Der Almanach des Naval Ravikant“ behandelt das in den Abschnitten über Entscheidungen und mentale Modelle. Am besten danach statt davor.",
    paid: 'frei_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 45 Min.',
        people: '2 Personen',
        stationCount: 13,
        totalMinutes: 105,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~1 Std.',
        people: 'Nur du',
        stationCount: 12,
        totalMinutes: 60,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  frei_reise_4: {
    title: "Der eigene Name — Verantwortung und Beteiligung",
    subtitle: "Frei-Reise · Abend 4 von 10",
    lead: "Vertrauen ist der einzige Zins, den man nicht kaufen kann. Er entsteht, wenn jemand über Jahre unter seinem eigenen Namen für Ergebnisse einsteht — sichtbar, mit der Möglichkeit zu scheitern. Dieser Abend rechnet aus, was das bei euch tatsächlich kosten würde.",
    category: "Frei-Reise",
    image: "images/frei-reise-4.jpg",
    reise: { id: "frei", nr: 4, total: 10, titel: "Frei-Reise — Zehn Abende über Wohlstand, Urteilskraft und Ruhe" },
    philosophy1: "Drei Dinge hängen zusammen, die man einzeln kaum versteht. Verantwortung heißt, unter dem eigenen Namen für ein Ergebnis einzustehen. Langfristige Spiele heißen, das über Jahre mit denselben Menschen zu tun, bis Vertrauen sich verzinst. Und Beteiligung heißt, einen Anteil an dem zu haben, was dabei entsteht — sonst tauscht man weiterhin Zeit gegen Geld, egal wie gut es bezahlt ist.",
    philosophy2: "Der unangenehme Teil ist der erste. Verantwortung ist zweischneidig: Läuft es gut, bekommt man das Lob; läuft es schlecht, trägt man das Scheitern öffentlich. Genau dafür gibt es dann aber Vertrauen, Kapital und Einfluss — und ohne diesen Preis gibt es sie nicht.\n\nIhr braucht für diesen Abend nichts gelesen zu haben. Wer parallel lesen möchte: „Der Almanach des Naval Ravikant“ behandelt das in den Abschnitten über Verantwortung, langfristige Spiele und Beteiligungen. Am besten danach statt davor.",
    paid: 'frei_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 45 Min.',
        people: '2 Personen',
        stationCount: 13,
        totalMinutes: 105,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~1 Std.',
        people: 'Nur du',
        stationCount: 12,
        totalMinutes: 60,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  frei_reise_5: {
    title: "Hebel — und wofür du bezahlt wirst",
    subtitle: "Frei-Reise · Abend 5 von 10",
    lead: "Es gibt einen Punkt, an dem Aufwand und Ertrag sich voneinander lösen: Zehn Menschen können ein Jahr verschwenden, einer kann in einer Woche etwas schaffen, das jahrelang trägt. Dieser Abend geht der Frage nach, warum das so ist — und wo bei euch der Ertrag noch eins zu eins an den Stunden hängt.",
    category: "Frei-Reise",
    image: "images/frei-reise-5.jpg",
    reise: { id: "frei", nr: 5, total: 10, titel: "Frei-Reise — Zehn Abende über Wohlstand, Urteilskraft und Ruhe" },
    philosophy1: "Die Menschheit hat lange ohne Hebel gearbeitet. Wer Holz hackte, lieferte acht Stunden Ergebnis für acht Stunden Einsatz. Dann kamen Werkzeuge, Kapital, Zusammenarbeit, Maschinen, Code — und mit ihnen die Entkopplung. Heute entscheidet bei gehebelter Arbeit nicht mehr, wie lange jemand arbeitet, sondern wie gut er entscheidet.",
    philosophy2: "Daraus folgt der praktische Kern des Abends: Wer Hebel hat, wird nicht mehr für Anwesenheit bezahlt, sondern für Ergebnisse. Und wer für Ergebnisse bezahlt wird, gewinnt seine Zeit zurück — weil niemand mehr fragt, wann er aufsteht.\n\nIhr braucht für diesen Abend nichts gelesen zu haben. Wer parallel lesen möchte: „Der Almanach des Naval Ravikant“ behandelt das in den Abschnitten über Hebelwirkung und Urteilsvermögen. Am besten danach statt davor.",
    paid: 'frei_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 45 Min.',
        people: '2 Personen',
        stationCount: 13,
        totalMinutes: 105,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~1 Std.',
        people: 'Nur du',
        stationCount: 12,
        totalMinutes: 60,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  frei_reise_6: {
    title: "Spielen — und Glück, das man baut",
    subtitle: "Frei-Reise · Abend 6 von 10",
    lead: "Die Menschen, die in ihrem Feld nicht zu schlagen sind, haben meistens nicht das Gefühl zu arbeiten. Das ist kein Zufall und keine Begabungsfrage — es ist der Grund, warum niemand mithält, der dafür arbeiten muss. Dieser Abend sucht bei euch die Stelle, an der Arbeit sich nicht wie Arbeit anfühlt.",
    category: "Frei-Reise",
    image: "images/frei-reise-6.jpg",
    reise: { id: "frei", nr: 6, total: 10, titel: "Frei-Reise — Zehn Abende über Wohlstand, Urteilskraft und Ruhe" },
    philosophy1: "Wer etwas um seiner selbst willen tut, wird darin fast unweigerlich gut — und zwar besser als jemand, der es sich abringen muss. Der Grund ist unspektakulär: Er hört nicht auf. Nicht aus Disziplin, sondern weil es ihm nichts abverlangt. Über zehn Jahre schlägt das jede Anstrengung.",
    philosophy2: "Der zweite Teil des Abends nimmt das Wort Glück auseinander. Nur eine von vier Arten ist wirklich Zufall — die anderen drei kann man herstellen: durch Bewegung, durch geschultes Erkennen und durch einen Ruf, der einen findbar macht. Das ist die vielleicht praktischste Unterscheidung der ganzen Reise.\n\nIhr braucht für diesen Abend nichts gelesen zu haben. Wer parallel lesen möchte: „Der Almanach des Naval Ravikant“ behandelt das in den Abschnitten über Arbeit, die sich wie Spielen anfühlt, und die vier Arten von Glück. Am besten danach statt davor.",
    paid: 'frei_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 45 Min.',
        people: '2 Personen',
        stationCount: 13,
        totalMinutes: 105,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~1 Std.',
        people: 'Nur du',
        stationCount: 12,
        totalMinutes: 60,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  frei_reise_7: {
    title: "Der eine Wunsch — Ruhe statt Freude",
    subtitle: "Frei-Reise · Abend 7 von 10",
    lead: "Jeder Wunsch ist ein Vertrag mit sich selbst: unglücklich zu sein, bis er erfüllt ist. Das klingt hart und ist erstaunlich brauchbar — nicht als Aufforderung, nichts mehr zu wollen, sondern als Anlass, sehr genau auszuwählen, wofür man bereit ist, unzufrieden zu sein.",
    category: "Frei-Reise",
    image: "images/frei-reise-7.jpg",
    reise: { id: "frei", nr: 7, total: 10, titel: "Frei-Reise — Zehn Abende über Wohlstand, Urteilskraft und Ruhe" },
    philosophy1: "Der zweite Teil dieser Reise beginnt mit einer Begriffsklärung, die mehr verändert, als sie zunächst verspricht. Wenn hier von Glück die Rede ist, ist nicht Freude gemeint und nicht Hochstimmung, sondern Ruhe: der Zustand, in dem nichts fehlt. Freude kommt und geht. Ruhe ist ein Grundpegel, und der lässt sich verschieben.",
    philosophy2: "Daraus folgt eine unbequeme Beobachtung: Erfolg entsteht aus Unzufriedenheit, Ruhe aus Zufriedenheit. Beides zugleich zu maximieren geht nicht. Man kann zwischen beidem wechseln, man kann sich für Phasen entscheiden — aber die Vorstellung, irgendwann sei genug erreicht und dann komme die Ruhe von selbst, hält der Erfahrung selten stand.\n\nIhr braucht für diesen Abend nichts gelesen zu haben. Wer parallel lesen möchte: „Der Almanach des Naval Ravikant“ behandelt das im zweiten Teil, in den Abschnitten über Glück, Ruhe und Wünsche. Am besten danach statt davor.",
    paid: 'frei_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 45 Min.',
        people: '2 Personen',
        stationCount: 13,
        totalMinutes: 105,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~1 Std.',
        people: 'Nur du',
        stationCount: 12,
        totalMinutes: 60,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  frei_reise_8: {
    title: "Neid, die fünf Menschen, Akzeptanz",
    subtitle: "Frei-Reise · Abend 8 von 10",
    lead: "Ein großer Teil des selbstgemachten Unglücks lässt sich auf drei Quellen zurückführen: Vergleiche mit anderen, die Menschen, mit denen man seine Zeit verbringt, und das Ausweichen vor Entscheidungen, die längst fällig sind. Dieser Abend nimmt alle drei ernst — und schließt mit der Frage, die alles sortiert.",
    category: "Frei-Reise",
    image: "images/frei-reise-8.jpg",
    reise: { id: "frei", nr: 8, total: 10, titel: "Frei-Reise — Zehn Abende über Wohlstand, Urteilskraft und Ruhe" },
    philosophy1: "Neid hat eine Eigenschaft, die ihn angreifbar macht: Er ist immer selektiv. Man beneidet jemanden um sein Einkommen, nicht um seine Ehe; um seinen Körper, nicht um seine Kindheit. Nur ist das Leben kein Katalog. Man kann nicht einzelne Posten bestellen — man müsste komplett tauschen, mit allem.",
    philosophy2: "Die zweite Beobachtung ist unbequemer: Menschen werden ihren Gewohnheiten und ihrer Umgebung ähnlich, ob sie wollen oder nicht. Wer die fünf Menschen aufschreibt, mit denen er die meiste Zeit verbringt, hat eine ziemlich gute Vorhersage über sich selbst in fünf Jahren.\n\nIhr braucht für diesen Abend nichts gelesen zu haben. Wer parallel lesen möchte: „Der Almanach des Naval Ravikant“ behandelt das im zweiten Teil, in den Abschnitten über Neid, Gewohnheiten und Akzeptanz. Am besten danach statt davor.",
    paid: 'frei_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 45 Min.',
        people: '2 Personen',
        stationCount: 13,
        totalMinutes: 105,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~1 Std.',
        people: 'Nur du',
        stationCount: 12,
        totalMinutes: 60,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  frei_reise_9: {
    title: "Körper zuerst — und Gewohnheiten, die halten",
    subtitle: "Frei-Reise · Abend 9 von 10",
    lead: "Es gibt eine Reihenfolge, die viele erst nach einer Diagnose ernst nehmen: zuerst der Körper, dann der Kopf, dann alles andere. Nicht aus Egoismus — sondern weil Arbeit, Beziehungen und Gelassenheit auf etwas aufsitzen, das täglich gepflegt werden will oder eben nicht.",
    category: "Frei-Reise",
    image: "images/frei-reise-9.jpg",
    reise: { id: "frei", nr: 9, total: 10, titel: "Frei-Reise — Zehn Abende über Wohlstand, Urteilskraft und Ruhe" },
    philosophy1: "Fast alle sagen „ich habe keine Zeit“, wenn ihnen eine gute Gewohnheit vorgeschlagen wird. Das ist fast immer die höfliche Übersetzung von „es ist mir nicht wichtig genug“. Wer eine Sache tatsächlich an die erste Stelle setzt, hat plötzlich Zeit dafür — nicht weil der Tag länger wird, sondern weil etwas anderes weicht.",
    philosophy2: "Der zweite Teil ist der ehrlichste Satz dieser Reise über Veränderung: Wenn du etwas wirklich willst, tust du es. „Ich versuche“ heißt, du willst noch nicht. Das ist kein Vorwurf, sondern eine Einladung, aufzuhören, sich für etwas zu geißeln, das man gar nicht vorhat — und stattdessen etwas Kleineres zu wählen, das man tatsächlich durchhält.\n\nIhr braucht für diesen Abend nichts gelesen zu haben. Wer parallel lesen möchte: „Der Almanach des Naval Ravikant“ behandelt das im zweiten Teil, in den Abschnitten über Gesundheit, Meditation und Veränderung. Am besten danach statt davor.",
    paid: 'frei_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 45 Min.',
        people: '2 Personen',
        stationCount: 13,
        totalMinutes: 105,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~1 Std.',
        people: 'Nur du',
        stationCount: 12,
        totalMinutes: 60,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

  frei_reise_10: {
    title: "Freiheit, Werte — und die Bilanz",
    subtitle: "Frei-Reise · Abend 10 von 10",
    lead: "Am Anfang bedeutet Freiheit meistens „Freiheit, um“ — alles tun zu können. Später verschiebt sie sich zu „Freiheit von“: von Reaktionen, von Wut, von fremden Erwartungen, vom eigenen unkontrollierten Denken. Der letzte Abend zieht Bilanz und fragt, was von zehn Abenden tatsächlich geblieben ist.",
    category: "Frei-Reise",
    image: "images/frei-reise-10.jpg",
    reise: { id: "frei", nr: 10, total: 10, titel: "Frei-Reise — Zehn Abende über Wohlstand, Urteilskraft und Ruhe" },
    philosophy1: "Werte sind nicht die Wörter, die man auf eine Liste schreibt. Werte sind die Punkte, an denen jemand nicht verhandelt — und man erkennt sie nicht an Bekenntnissen, sondern daran, was sie ihren Träger schon gekostet haben. Ein Wert, für den noch nie etwas bezahlt wurde, ist eine Vorliebe.",
    philosophy2: "Zum Sinn gibt es keine Auskunft, die von außen trägt. Wer eine bekommt, wird sie prüfen und die nächste Frage stellen, und so weiter. Was bleibt, ist unbequem und befreiend zugleich: Es gibt keinen vorgegebenen Sinn. Ihr müsst euren eigenen machen — und das ist keine Notlösung, sondern die einzige Fassung, die überhaupt tragen kann.\n\nIhr braucht für diesen Abend nichts gelesen zu haben. Wer parallel lesen möchte: „Der Almanach des Naval Ravikant“ behandelt das in den Abschnitten über Freiheit, Werte und Philosophie am Ende. Am besten danach statt davor.",
    paid: 'frei_reise',
        formats: {
      pair: {
        label: 'Zu zweit',
        duration: '~1 Std. 45 Min.',
        people: '2 Personen',
        stationCount: 13,
        totalMinutes: 105,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
      solo: {
        label: 'Allein',
        duration: '~1 Std.',
        people: 'Nur du',
        stationCount: 12,
        totalMinutes: 62,
        stations: null,   // Inhalt serverseitig (paid_content)
      },
    }
  },

};

// =====================================================================
// SOLO-MODUS für alle Themen, die noch keinen haben
// Für Menschen, die ein Thema allein reflektieren wollen — schreibend,
// atmend, hörend. Kein „Reihum", kein Gegenüber — ein innerer Raum.
// =====================================================================
const SOLO_FORMATS = {

  werte: {
    label: 'Allein', duration: '~30 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Was steht gerade zwischen dir und deinem Leben?', duration: 3*60,
        hostNote: 'Drei tiefe Atemzüge. Stift und Zettel bereitlegen.',
        question: 'Wenn du ehrlich bist: was steht diese Woche zwischen dir und dem Leben, das du eigentlich führen willst?' },
      { name: 'Einstieg', title: 'Werte zeigen sich, wo es weh tut', duration: 4*60,
        hostNote: 'Still lesen. Einmal.',
        description: 'Auf Postern stehen Werte wie „Ehrlichkeit, Familie, Gesundheit". Im Alltag leben wir oft andere: Effizienz, Bequemlichkeit, Anerkennung. Das ist nicht schlimm — aber es lohnt sich, den Unterschied zu sehen. Werte zeigen sich nicht in Aussagen. Sie zeigen sich in dem, worüber du dich ärgerst, wofür du Zeit opferst, was dich nachts wach hält.' },
      { name: 'Ärger', title: 'Der letzte Ärger als Spiegel', duration: 6*60,
        hostNote: 'Schreiben. Nicht zensieren — erst ausschütten, dann nachdenken.',
        question: 'Worüber hast du dich in den letzten Tagen wirklich geärgert? Welcher Wert wurde da verletzt, dass es so weh tat?' },
      { name: 'Stolz', title: 'Der letzte stille Stolz', duration: 5*60,
        hostNote: 'Schreiben. Kein Lebenslauf-Stolz — ein kleiner Moment.',
        question: 'Welcher Moment der letzten Wochen hat dich still stolz gemacht? Und welchen Wert hast du da ausgelebt?' },
      { name: 'Drei Sätze', title: 'Mir ist wirklich wichtig …', duration: 7*60,
        hostNote: 'Schreibe drei Sätze. Die zweite Fassung ist oft ehrlicher als die erste.',
        description: 'Kein Lebenskonzept. Drei ehrliche Sätze, die gerade stimmen — auch wenn sie sich morgen ändern. Lass dir Zeit für die Formulierung. Was nicht durch die Zähne will, ist oft noch nicht wahr.',
        question: '„Mir ist wirklich wichtig …" — dreimal vollenden.' },
      { name: 'Schritt', title: 'Ein kleiner Schritt', duration: 5*60,
        hostNote: 'Schreibe auf einen Zettel — und nimm ihn mit.',
        question: 'An welcher konkreten Stelle diese Woche wirst du einen dieser Werte leben — auch wenn es unbequem ist?' }
    ])
  },

  prioritaeten: {
    label: 'Allein', duration: '~55 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Öffnen', title: 'Ein Moment, bevor du anfängst', duration: 3*60,
        hostNote: 'Kerze anzünden. Handy weg. Drei tiefe Atemzüge. Tee oder Wein, wenn du magst.',
        description: 'Gib dir diesen Moment. Der Abend, der gleich beginnt, funktioniert nur, wenn du wirklich da bist — nicht nur im Browser.' },
      { name: 'Ankommen', title: 'Was ist diese Woche laut?', duration: 3*60,
        hostNote: 'Schreibe stichpunktartig. Nicht bewerten.',
        question: 'Was ist diese Woche am lautesten in deinem Kopf — und wird dadurch leiser, was dir eigentlich wichtig ist?' },
      { name: 'Einstieg', title: 'Das Vier-Öfen-Modell', duration: 5*60,
        hostNote: 'Still lesen. Lass den Gedanken landen.',
        quote: { text: 'If you don\'t prioritize your life, someone else will.', author: 'Greg McKeown' },
        description: 'Stell dir vier Öfen vor, jeder braucht Holz zum Brennen: Arbeit, Familie, Freundschaft, Gesundheit.\n\nDavid Sedaris hat die Geschichte bekannt gemacht — sie stammt aus einem Management-Seminar: Um wirklich gut in etwas zu sein, muss mindestens einer dieser Öfen ausgehen. Um außergewöhnlich zu sein, zwei.\n\nDas ist hart. Aber ehrlich. „Alles gleichzeitig" funktioniert nie — man verteilt nur die Glut dünn. Heute schaust du, welche Öfen du gerade fütterst und welche nicht.' },
      { name: 'Check', title: 'Vier Öfen — wie brennt es gerade?', duration: 8*60,
        hostNote: 'Für jeden Ofen: voll / mittel / niedrig / aus. Einen ehrlichen Satz dazu.',
        description: 'Keine Bewertung, nur Beobachtung. Manche Öfen sind absichtlich klein — das ist okay. Es geht um Klarheit.',
        items: [
          { accent: 'Ofen 1', label: 'Arbeit & Berufung', text: 'Was du tust, um Wirkung in der Welt zu haben.' },
          { accent: 'Ofen 2', label: 'Beziehungen', text: 'Partner, Familie, Freund:innen — die Menschen, die dich tragen.' },
          { accent: 'Ofen 3', label: 'Selbstsorge', text: 'Schlaf, Bewegung, Ernährung, stille Zeit — dein Körper und Geist.' },
          { accent: 'Ofen 4', label: 'Seele / Projekt', text: 'Das eine Vorhaben, das nur du machen kannst — und das dich nährt.' }
        ] },
      { name: 'Kalender', title: 'Der ehrlichste Spiegel', duration: 5*60,
        hostNote: 'Handy raus, scrolle durch die letzten 7 Tage. Schreibe auf, was du siehst.',
        quote: { text: 'Es ist nicht, dass wir wenig Zeit haben, sondern dass wir viel verlieren.', author: 'Seneca' },
        description: 'Dein Kalender lügt nicht. Was er zeigt, das hast du tatsächlich priorisiert — unabhängig von dem, was du gerade eben gefühlt hast. Besonders interessant: die Stunden, die nirgends auftauchen. Wo sind die hin?',
        question: 'Wenn ein Fremder deinen Kalender der letzten Woche lesen würde — welche Öfen hätte er für „heiß" gehalten?' },
      { name: '4000 Wochen', title: 'Wie viele Wochen hast du noch?', duration: 5*60,
        hostNote: 'Lies langsam. Keine Antwort nötig — spür nach.',
        quote: { text: 'Die durchschnittliche Lebenserwartung beträgt ungefähr viertausend Wochen. Wer 30 ist, hat noch dreitausend. Wer 50 ist, noch zweitausend.', author: 'Oliver Burkeman' },
        description: 'Oliver Burkemans Buch „4000 Wochen" beginnt mit dieser Rechnung. Nicht als Motivationsspruch — als Konfrontation. Alles, was wir „irgendwann" machen wollen, passt in eine endliche Zahl Wochen.',
        question: 'Wenn du nur noch 1000 Wochen hättest — welcher Ofen würde automatisch kleiner werden?' },
      { name: 'Big Rocks', title: 'Das Glas und die Steine', duration: 4*60,
        hostNote: 'Lies die Parabel. Dann schreibe.',
        description: 'Stephen Covey erzählt gern die Geschichte vom Professor, der vor Studierenden ein leeres Glas füllt: Erst große Steine, dann Kiesel, dann Sand, am Ende Wasser. Pointe: Wer mit Sand anfängt, bekommt die großen Steine nie mehr hinein.\n\nDeine großen Steine — das sind deine 1-2 wichtigsten Öfen diese Woche. Sie müssen zuerst rein. Sand kommt von selbst.',
        question: 'Was ist diese Woche dein großer Stein — und wo hast du stattdessen mit Sand angefangen?' },
      { name: 'Das Nein', title: 'Jedes Ja ist ein Nein', duration: 5*60,
        hostNote: 'Schreibe. Das versehentlichste Nein ist das, das nie ausgesprochen wird.',
        description: 'Greg McKeown schreibt in „Essentialism": Die meisten haben kein Problem mit dem Ja. Sie haben ein Problem mit dem Nein. Jedes Ja zu einer Sache ist ein Nein zu tausend anderen — meistens ein stilles.',
        question: 'Was war diese Woche dein lautestes Ja — und zu welchem Nein hast du damit automatisch Ja gesagt?' },
      { name: 'Preis', title: 'Was dich deine aktuelle Setzung kostet', duration: 5*60,
        hostNote: 'Schreibe ehrlich. Niemand sieht das.',
        question: 'Wen oder was zahlt gerade den Preis für das, was bei dir heiß brennt — und was ist dafür ausgegangen?' },
      { name: 'Verloren', title: 'Der Ofen, den du vermisst', duration: 4*60,
        hostNote: 'Schreibe kurz. Kein Selbstvorwurf — einfach Benennen.',
        description: 'Viele tragen einen stillen Ofen in sich, der einmal gebrannt hat und jetzt aus ist. Ein Hobby, eine Freundschaft, ein Stück Lebendigkeit. Er meldet sich nicht laut — nur als leises Ziehen abends.',
        question: 'Welcher Ofen hat früher mal bei dir gebrannt — und ist jetzt aus?' },
      { name: 'Stille', title: 'Zwei Minuten, nur die Kerze', duration: 2*60,
        hostNote: 'Augen zu oder Blick auf die Kerze. Nichts schreiben. Atmen.',
        description: 'Spür, welcher Ofen gerade am lautesten nach Holz ruft.' },
      { name: 'Drossel', title: 'Einen drosseln, einen anheizen', duration: 5*60,
        hostNote: 'Schreibe konkret. Nicht „Gesundheit stärken" — sondern „Dienstags schwimmen, 18:30, ohne Ausnahme".',
        question: 'Welchen Ofen drosselst du diese Woche — und welchen drehst du dafür auf? Konkret, mit Uhrzeit.' },
      { name: 'Was ausgeht', title: 'Was bewusst ausbleibt', duration: 4*60,
        hostNote: 'Der schwerste Teil. Schreibe auf einen Zettel, den du sichtbar hinlegst.',
        description: 'Prioritäten lebt man durch Weglassen, nicht durch Hinzufügen. Der Mut, etwas ausgehen zu lassen, ist der eigentliche Test.',
        question: 'Welche Sache, die diese Woche anstand, lässt du bewusst ausfallen — damit etwas anderes wirklich brennt?' },
      { name: 'Wort', title: 'Ein Wort als Kompass', duration: 2*60,
        hostNote: 'Ein Wort. Auf einen Zettel — mitnehmen.',
        question: 'Welches eine Wort trägst du als inneren Kompass durch diese Woche?' }
    ])
  },

  stehe: {
    label: 'Allein', duration: '~55 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Öffnen', title: 'Ein Moment, bevor du anfängst', duration: 3*60,
        hostNote: 'Kerze anzünden. Handy weg. Drei tiefe Atemzüge. Tee oder Wein.',
        description: 'Einstehen ist leise Arbeit. Dafür braucht es einen stillen Raum — nicht einen Termin zwischen Mails.' },
      { name: 'Ankommen', title: 'Wie ehrlich warst du diese Woche?', duration: 3*60,
        hostNote: 'Schreibe. Nicht die Version fürs Foto — die echte.',
        question: 'Wann hast du diese Woche etwas nicht gesagt, obwohl du es gewusst hast?' },
      { name: 'Einstieg', title: 'Drei Ebenen des Einstehens', duration: 5*60,
        hostNote: 'Still lesen. Dann einen Moment sacken lassen.',
        quote: { text: 'Es ist kein Zeichen geistiger Gesundheit, gut angepasst an eine kranke Gesellschaft zu sein.', author: 'Jiddu Krishnamurti' },
        description: 'Wofür du stehst, zeigt sich auf drei Ebenen.\n\nEbene 1: Für dich selbst. Hältst du dich an deine Vorsätze, deine Grenzen?\n\nEbene 2: Für andere. Für wen ziehst du deinen Hals raus, wenn sie nicht im Raum sind?\n\nEbene 3: Für eine Sache. Gibt es etwas, für das du öffentlich einstehst, obwohl es unbequem wird?\n\nVáclav Havel nannte das Gegenteil „in der Lüge leben" — nicht als Moralurteil, sondern als Beobachtung: Wer sich dauerhaft verbiegt, merkt selbst nicht mehr, wo er steht.' },
      { name: 'Bei dir', title: 'Ebene 1: Für dich selbst', duration: 5*60,
        hostNote: 'Schreibe. Sei nicht nett mit dir — sei ehrlich.',
        question: 'Wo hörst du dich gerade am wenigsten? Welchen inneren Satz drückst du weg?' },
      { name: 'Nahbereich', title: 'Ebene 2: Für die, die du kennst', duration: 5*60,
        hostNote: 'Konkret werden — keine Abstraktionen. Einen Namen, einen Anlass.',
        question: 'Welchem Menschen müsstest du diese Woche etwas Unbequemes sagen — und was genau?' },
      { name: 'Außen', title: 'Ebene 3: Für das Größere', duration: 5*60,
        hostNote: 'Schreibe. „Ich stehe für nichts Größeres öffentlich ein" ist auch eine ehrliche Antwort.',
        question: 'Wofür würdest du in einem fremden Raum den Mund aufmachen — auch wenn es dich etwas kostet?' },
      { name: 'Kleine Verleugnung', title: 'Die kleine Verleugnung', duration: 5*60,
        hostNote: 'Nicht das große Drama — der alltägliche Moment.',
        description: 'Adorno hat es scharf formuliert: „Es gibt kein richtiges Leben im falschen." Die Mikroversion: das Lachen über den Witz, den du nicht lustig findest. Das Nicken in ein Meeting, das du schlecht findest. Die Verabredung, zu der du zugesagt hast, weil „es schwer war, nein zu sagen".',
        question: 'Wo hast du diese Woche eine kleine Verleugnung mitgemacht — und warum?' },
      { name: 'Kosten', title: 'Was dich dein Nicht-Einstehen kostet', duration: 5*60,
        hostNote: 'Schreibe nach innen, nicht nach außen.',
        quote: { text: 'Die Bereitschaft, Verantwortung für das eigene Leben zu übernehmen, ist die Quelle, aus der Selbstachtung entspringt.', author: 'Joan Didion' },
        description: 'Jedes Nicht-Einstehen hat einen Preis — selten laut, meist ein schleichender Verlust an Selbstachtung. Didion: „self-respect" ist der Preis, den du abends im Spiegel bezahlst.',
        question: 'Was hat dich dein letztes Nicht-Einstehen wirklich gekostet — innen, nicht außen?' },
      { name: 'Moment', title: 'Der letzte Moment, in dem du standst', duration: 5*60,
        hostNote: 'Schreibe ausführlich. Zwei Minuten nicht absetzen.',
        description: 'Erinnere dich an den letzten Moment, in dem du wirklich eingestanden bist — klein oder groß. Vielleicht nur ein Satz in einem Gespräch. Was hat er gekostet, und was hat er dir gegeben?',
        question: 'Wann bist du zuletzt wirklich eingestanden — und wie hat es sich hinterher angefühlt?' },
      { name: 'Vorbild', title: 'Wer hat dir Rückgrat gezeigt?', duration: 5*60,
        hostNote: 'Keine Berühmtheit. Jemand aus deinem Leben.',
        description: 'Rückgrat lernt man selten von Helden. Meistens von unspektakulären Menschen, die in einem kleinen Moment nicht geschwiegen haben — ein Lehrer, eine Tante, ein Fremder im Zug.',
        question: 'Wer hat dir im echten Leben gezeigt, was einstehen heißt — und was genau hat diese Person getan?' },
      { name: 'Havel', title: 'Leben in Wahrheit', duration: 4*60,
        hostNote: 'Lies langsam.',
        quote: { text: 'Die Hoffnung ist nicht die Überzeugung, dass etwas gut ausgeht, sondern die Gewissheit, dass etwas Sinn hat — egal wie es ausgeht.', author: 'Václav Havel' },
        description: 'Václav Havel hat den Begriff „Leben in Wahrheit" geprägt — nicht als großes Heldentum, sondern als Entscheidung, nicht mitzumachen bei den kleinen Lügen. Der Gemüsehändler, der das Regime-Plakat nicht mehr ins Schaufenster stellt — das ist keine Revolution, sondern der Anfang von Wahrhaftigkeit.' },
      { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
        hostNote: 'Augen zu oder Blick zur Kerze. Nichts schreiben.',
        description: 'Spür, was bleibt von dem, was gerade in dir war.' },
      { name: 'Grenze', title: 'Eine Grenze, ein Satz', duration: 4*60,
        hostNote: 'Schreibe auf einen Zettel — und nimm ihn mit.',
        description: 'Nicht „ich will mutiger werden". Sondern: „Mittwoch sage ich X zu Y — klar, ohne Weichspüler." Oder: „Freitag rufe ich Z an, den ich seit Wochen hängen lasse."',
        question: 'Welche Grenze ziehst du diese Woche — oder welchen Satz sagst du laut? Ein konkreter Akt, mit Name und Tag.' },
      { name: 'Wort', title: 'Ein Wort als Kompass', duration: 2*60,
        hostNote: 'Ein Wort. Auf einen Zettel.',
        question: 'Welches Wort trägst du als stillen Anker durch die Woche?' }
    ])
  },

  tag: {
    label: 'Allein', duration: '~55 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Öffnen', title: 'Ein Moment, bevor du anfängst', duration: 3*60,
        hostNote: 'Kerze anzünden. Handy weg. Drei tiefe Atemzüge. Tee oder Wein.',
        description: 'Der ideale Tag zeigt sich nicht im Planen. Er zeigt sich in Aufmerksamkeit. Gleich beginnst du mit einer — dieser hier, jetzt.' },
      { name: 'Ankommen', title: 'Wann war ein Tag zuletzt wirklich deiner?', duration: 3*60,
        hostNote: 'Schreibe kurz. Ein Alltagsbeispiel — kein Urlaub.',
        question: 'Wann hast du das letzte Mal einen Tag gehabt, nach dem du gesagt hast: „Der war richtig"?' },
      { name: 'Einstieg', title: 'Wie wir unsere Tage verbringen', duration: 5*60,
        hostNote: 'Lies langsam — zwei Mal.',
        quote: { text: 'How we spend our days is, of course, how we spend our lives.', author: 'Annie Dillard' },
        description: 'Annie Dillard formuliert es kompromisslos. Wir denken beim „guten Leben" an große Entscheidungen — Partner, Beruf, Wohnort. Die wichtigste Entscheidung passiert aber in den ungezählten Dienstagen dazwischen.\n\nGute Tage haben selten perfekte Stunden. Aber sie haben oft drei Zutaten in der richtigen Mischung: Flow, Verbindung, Stille.' },
      { name: 'Flow', title: 'Säule 1: Flow', duration: 4*60,
        hostNote: 'Schreibe ein konkretes Beispiel — nicht abstrakt.',
        description: 'Csikszentmihalyi hat es ein Leben lang untersucht: der Zustand, in dem du ganz in einer Tätigkeit aufgehst. Fähigkeit passt exakt zur Herausforderung — nicht zu wenig (Langeweile), nicht zu viel (Stress). Nicht nur Arbeit — kochen, klettern, malen, schreiben, Gespräch.',
        question: 'Wann warst du zuletzt wirklich im Flow — was hast du gemacht, wie lange?' },
      { name: 'Verbindung', title: 'Säule 2: Verbindung', duration: 4*60,
        hostNote: 'Schreibe: einen Moment, eine Person.',
        description: 'Nicht „Menschen gesehen". Die ein, zwei Minuten, in denen du wirklich gesehen wirst — oder jemanden wirklich siehst.\n\nDie Harvard Study of Adult Development (85 Jahre Längsstudie) hat einen klaren Hauptbefund: Qualität der Beziehungen, nicht Erfolg oder Gesundheit, ist der stärkste Prädiktor für ein zufriedenes Leben.',
        question: 'Wann hattest du zuletzt einen echten Moment der Verbindung — und mit wem?' },
      { name: 'Stille', title: 'Säule 3: Stille', duration: 4*60,
        hostNote: 'Ehrlich bleiben — die meisten sind darin unterversorgt.',
        description: 'Stille heißt nicht Nichtstun. Zeit, in der niemand etwas von dir will — auch keine Algorithmen, kein Podcast, keine Playlist. Raum, in dem dein eigenes Denken sich ausbreiten kann.\n\nBlaise Pascal, 17. Jh.: „All das Unglück der Menschen rührt von einem her: dass sie nicht in einem Zimmer allein ruhig sitzen können."',
        question: 'Wann hattest du zuletzt 30 Minuten echte Stille — und wie oft pro Woche?' },
      { name: 'Aufmerksamkeit', title: 'Womit du die Tage füllst', duration: 4*60,
        hostNote: 'Schreibe zwei Listen: „zu viel" und „zu wenig".',
        quote: { text: 'Aufmerksamkeit ist die seltenste und reinste Form der Großzügigkeit.', author: 'Simone Weil' },
        description: 'Mary Oliver: „Attention is the beginning of devotion." Wem du deine Aufmerksamkeit gibst, dem gibst du dein Leben. Die schmerzhaftere Version: Wem du sie NICHT gibst, den lässt du langsam verhungern — oft ohne bösen Willen, einfach durch Abwesenheit.',
        question: 'Wem oder was gibst du im Alltag ehrlich zu viel Aufmerksamkeit — und wem zu wenig?' },
      { name: 'Resonanz', title: 'Der Unterschied zwischen voll und reich', duration: 5*60,
        hostNote: 'Schreibe ein konkretes Beispiel — wann hat dich zuletzt etwas erreicht?',
        quote: { text: 'Wir haben nicht zu wenig Zeit — wir haben zu wenig Resonanz.', author: 'Hartmut Rosa' },
        description: 'Der Soziologe Hartmut Rosa hat den Kern moderner Erschöpfung auf einen Begriff gebracht: Resonanz.\n\nEin Tag kann voll sein und trotzdem leer. Voll ist, wenn viel passiert. Reich ist, wenn etwas zurückspricht — ein Gespräch, das dich verwandelt. Eine Landschaft, die dich anblickt. Ein Stück Musik, das dich trifft. Das Gegenteil nennt Rosa „Entfremdung": alles passiert, nichts berührt.\n\nResonanz lässt sich nicht erzwingen — nur Räume schaffen.',
        question: 'Wann hat dich in der letzten Woche etwas wirklich erreicht — ein Mensch, ein Ort, ein Moment?' },
      { name: 'Rückblick', title: 'Dein letzter wirklich guter Tag', duration: 6*60,
        hostNote: 'Schreibe konkret — die Reihenfolge der Stunden.',
        question: 'Beschreibe einen Tag aus den letzten Wochen, der sich stimmig anfühlte: Was hast du wann getan? Wer war dabei? Welche der drei Säulen war drin?' },
      { name: 'Vorwärts', title: 'Dein idealer Dienstag nächste Woche', duration: 7*60,
        hostNote: 'Schreibe als wär\'s ein Drehbuch — Gegenwartsform, mit Uhrzeiten.',
        description: 'Kein Traumtag ohne Verpflichtungen. Ein realistischer Tag nächste Woche — innerhalb dessen, was du hast — aber so gestaltet, dass Flow, Verbindung und Stille vorkommen.',
        question: 'Wie sieht dein idealer Dienstag (oder Tag deiner Wahl) aus — Stunde für Stunde?' },
      { name: 'Hindernisse', title: 'Warum lebst du ihn nicht?', duration: 4*60,
        hostNote: 'Schreibe. Die zweite Antwort ist meist die ehrlichere.',
        description: '„Keine Zeit" ist fast nie die echte Antwort. Die Frage bringt tiefere Schichten hoch: Angst vor Enttäuschung, Rollen, manchmal die stille Befürchtung, dass es dann „zu gut" wäre — und etwas weh tun müsste.',
        question: 'Was hindert dich wirklich daran? Ist es Zeit/Geld — oder etwas anderes?' },
      { name: 'Stille Pause', title: 'Zwei Minuten ohne Worte', duration: 2*60,
        hostNote: 'Augen zu oder Blick zur Kerze.',
        description: 'Ein Mini-Abbild dessen, was dein idealer Tag öfter braucht.' },
      { name: 'Änderung', title: 'Ein Element, diesen Dienstag', duration: 4*60,
        hostNote: 'Schreibe auf einen Zettel. Ein Element. Mit Uhrzeit.',
        description: 'Nicht die ganze Woche umkrempeln. EIN Element: „Dienstag 18:30-19:00 Spaziergang allein ohne Handy." Oder: „Dienstag 7:00-7:15 kein Handy, nur Kaffee am Fenster."',
        question: 'Welches EINE Element deines idealen Tages baust du diesen Dienstag ein — Uhrzeit, Dauer?' },
      { name: 'Wort', title: 'Ein Wort als Kompass', duration: 2*60,
        hostNote: 'Ein Wort. Auf einen Zettel.',
        question: 'Welches Wort begleitet dich durch diese Woche?' }
    ])
  },

  zehnjahre: {
    label: 'Allein', duration: '~55 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Öffnen', title: 'Ein Moment, bevor du anfängst', duration: 3*60,
        hostNote: 'Kerze anzünden. Handy weg. Drei tiefe Atemzüge. Tee oder Wein.',
        description: 'Zukunft entsteht nicht im Drang. In Ruhe.' },
      { name: 'Ankommen', title: 'Was würdest du deinem 18-jährigen Ich sagen?', duration: 3*60,
        hostNote: 'Schreibe einen Satz. Warm, nicht belehrend.',
        question: 'Wenn du deinem Ich von vor zehn Jahren in einem Satz etwas zuflüstern könntest — was wäre es?' },
      { name: 'Einstieg', title: 'Zehn Jahre sind lang. Und kurz.', duration: 5*60,
        hostNote: 'Lies langsam.',
        quote: { text: 'Wir behandeln unser zukünftiges Ich wie einen Fremden — und lassen es genau deshalb so oft im Stich.', author: 'Hal Hershfield (sinngemäß)' },
        description: 'Vor zehn Jahren warst du jemand anderes. In zehn Jahren wieder — egal, ob du es aktiv gestaltest oder nicht.\n\nDer Psychologe Hal Hershfield (UCLA) hat in einer viel zitierten Studie gezeigt: Wer sein zukünftiges Ich als „Fremde:n" empfindet, spart weniger, trifft impulsivere Entscheidungen, kümmert sich schlechter um die eigene Gesundheit. Wer es konkret sieht — Gesicht, Tag, Raum — verändert heute anders.\n\nHeute baust du dieses Bild. Nicht perfekt, aber greifbar.' },
      { name: 'Rückwärts', title: 'Wer warst du vor zehn Jahren?', duration: 5*60,
        hostNote: 'Schreibe — ohne zu urteilen.',
        question: 'Was war deiner Version von vor zehn Jahren wichtig, das heute nicht mehr zählt? Und was hast du damals vermisst, das du heute hast?' },
      { name: 'Ort', title: 'Säule 1: Ort in 10 Jahren', duration: 3*60,
        hostNote: 'Konkret — nicht „irgendwo warmes".',
        description: 'Wo wachst du auf in 10 Jahren? Nicht die Stadt — das Zimmer. Was siehst du aus dem Fenster? Wie kommst du ins Bad?',
        question: 'Beschreibe deinen Morgen — Aufwachen bis erster Kaffee. Wo bist du?' },
      { name: 'Menschen', title: 'Säule 2: Menschen', duration: 3*60,
        hostNote: 'Einen Menschen nennen — Name, wenn möglich.',
        description: 'Wer ist morgens in deiner Nähe? Mit wem frühstückst du — oder allein? Wer ruft dich abends an?',
        question: 'Welcher Mensch ist in 10 Jahren nah in deinem Alltag — und ist es jemand, den du heute schon kennst?' },
      { name: 'Arbeit', title: 'Säule 3: Arbeit', duration: 3*60,
        hostNote: 'Nicht Jobtitel — Tätigkeit.',
        description: 'Woran arbeitest du? Was gibt dem Tag Struktur? Angestellt, selbstständig, hybrid, etwas was es heute noch nicht gibt?',
        question: 'Wenn jemand dich fragt, was du machst — was antwortest du in 10 Jahren?' },
      { name: 'Selbst', title: 'Säule 4: Selbst', duration: 3*60,
        hostNote: 'Die schwierigste Säule. Ehrlich sein.',
        description: 'Wer bist du geworden als Person? Was hast du gelassen, was dazugewonnen? Welche heutige Sorge ist in 10 Jahren lächerlich?',
        question: 'Wer bist du in 10 Jahren — und was unterscheidet dich vom heutigen Dich?' },
      { name: 'Mittwoch', title: 'Ein Mittwoch in 10 Jahren', duration: 7*60,
        hostNote: 'Schreibe in Gegenwartsform — als wär\'s schon so. Konkrete Uhrzeiten, Kleidung, Essen.',
        description: 'Keine Checkliste. Ein normaler Mittwoch 2036. Du wachst auf — wie sieht der Tag aus, von morgens bis abends?',
        question: 'Dein Mittwoch in 10 Jahren — so konkret wie möglich.' },
      { name: 'Fear-Setting', title: 'Was wirst du in 10 Jahren bereuen?', duration: 4*60,
        hostNote: 'Schreibe. Ehrlich, nicht performativ.',
        quote: { text: 'Wir leiden öfter in der Vorstellung als in der Wirklichkeit.', author: 'Seneca' },
        description: 'Tim Ferriss nennt diese Übung „Fear-Setting" — die Umkehr des Goal-Setting. Oft ist klarer, was wir nicht wollen, als was wir wollen. Die Antwort auf „Was würde ich in 10 Jahren bereuen, heute NICHT angefangen zu haben?" ist meistens präziser als jede Zielvision.',
        question: 'Was würdest du in 10 Jahren bereuen, wenn du es jetzt nicht beginnst?' },
      { name: 'Verzichten', title: 'Was wirst du dafür lassen?', duration: 4*60,
        hostNote: 'Kein Opfer-Theater — einfach Benennen.',
        description: 'Jedes 10-Jahres-Bild verlangt ein Opfer. Mehr Zeit mit Kindern heißt weniger Karriere-Gas. Selbstständigkeit heißt weniger Sicherheit. Wer die Schattenseite des Wunsches nicht mitdenkt, scheitert leise.',
        question: 'Was willst du heute noch — das in deinem 10-Jahres-Bild keinen Platz mehr hat?' },
      { name: 'Rückwärts planen', title: 'Was muss diese 12 Monate passieren?', duration: 4*60,
        hostNote: 'Konkret.',
        description: 'Damit das Bild steht, muss irgendwann etwas anfangen. Nicht 2036 — 2026.',
        question: 'Welche Weichen müssen in den nächsten 12 Monaten umgelegt sein, damit dein Bild realistisch wird?' },
      { name: 'Stille', title: 'Zwei Minuten ohne Worte', duration: 2*60,
        hostNote: 'Augen zu. Stell dir den Mittwoch 2036 vor — Geruch, Licht, Temperatur.',
        description: 'Der Unterschied zwischen Plan und Wirklichkeit: Wirklichkeit hat Geruch.' },
      { name: 'Brief', title: 'Der Brief vom 2036-Ich', duration: 4*60,
        hostNote: 'Schreibe 4 Min als dein zukünftiges Ich, an das heutige.',
        description: 'Was würde dein 2036er dir heute schreiben? Was würde er/sie dich nicht mehr lassen? Wofür würde er/sie sich bedanken, dass du heute angefangen hast?',
        question: 'Was schreibt dein 10-Jahres-Ich dir in 5 Sätzen?' },
      { name: 'Schritt', title: 'Der erste Move diese Woche', duration: 3*60,
        hostNote: 'Auf einen Zettel — mitnehmen.',
        description: 'Hal Hershfield: „Das zukünftige Selbst wird Realität durch Handlungen der Gegenwart." Nicht eine neue Richtung — ein erster Schritt.',
        question: 'Was tust du diese Woche, das in zehn Jahren noch eine Rolle spielen könnte?' },
      { name: 'Wort', title: 'Ein Wort als Kompass', duration: 2*60,
        hostNote: 'Ein Wort. Auf einen Zettel.',
        question: 'Welches Wort begleitet dich durch die nächsten Monate?' }
    ])
  },

  frageabend: {
    label: 'Allein', duration: '~25 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Wie kommst du heute bei dir an?', duration: 3*60,
        hostNote: 'Drei Atemzüge. Stift bereit.',
        question: 'Was war das Letzte, das dich wirklich zum Nachdenken gebracht hat — und wann war das?' },
      { name: 'Einstieg', title: 'Fragen, die sich nicht jeden Tag stellen', duration: 2*60,
        hostNote: 'Still lesen.',
        description: 'Gute Fragen öffnen etwas. Allein sind sie besonders stark: Niemand wartet auf eine Antwort, niemand beobachtet. Du darfst dauern. Du darfst zurückschrecken. Du darfst die Frage ein zweites Mal lesen. Heute drei Fragen — leicht, mittel, tief.' },
      { name: 'Leicht', title: 'Zum Einsteigen', duration: 5*60,
        hostNote: 'Schreibe locker. Zwei, drei Sätze reichen.',
        question: 'Was fühlt sich in deinem Leben gerade am falschen Platz an — und was am richtigen?' },
      { name: 'Mittel', title: 'Eine Schicht tiefer', duration: 6*60,
        hostNote: 'Schreibe. Lass die erste Antwort aus — nimm die zweite.',
        question: 'Welchen Satz hörst du dich immer wieder sagen — und stimmt er eigentlich noch?' },
      { name: 'Tief', title: 'Die Frage, die du aufschiebst', duration: 7*60,
        hostNote: 'Schreibe. „Pass" ist okay — lies die Frage dann nochmal in einer Woche.',
        question: 'Was wüsstest du eigentlich über dich, wenn du ehrlich wärst, es aber lieber nicht wissen willst?' },
      { name: 'Mitnahme', title: 'Eine Frage für die Woche', duration: 2*60,
        hostNote: 'Schreibe auf einen Zettel.',
        question: 'Welche dieser Fragen trägst du diese Woche mit — und wann stellst du sie dir noch einmal?' }
    ])
  },

  frageabend_arbeit: {
    label: 'Allein', duration: '~20 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Wie geht es dir mit deiner Arbeit?', duration: 3*60,
        hostNote: 'Drei Atemzüge. Nicht die Kurzfassung — die echte.',
        question: 'Wenn du heute deine Arbeit in einem einzigen Wort beschreiben müsstest — welches wäre es?' },
      { name: 'Einstieg', title: 'Arbeit als Spiegel', duration: 2*60,
        hostNote: 'Still lesen.',
        description: 'Arbeit beantwortet die Frage „Was machst du eigentlich?" — aber auch leisere: Wo fließt deine Zeit? Wer bist du, wenn du sie tust? Was wäre gewesen, wenn du abgebogen wärst? Heute drei Fragen ohne Urteil.' },
      { name: 'Flow', title: 'Wann fließt deine Zeit?', duration: 4*60,
        hostNote: 'Schreibe.',
        question: 'Wann warst du zuletzt so in deiner Arbeit, dass du die Uhr vergessen hast? Und was sagt dir das?' },
      { name: 'Spiegel', title: 'Wer bist du, wenn du arbeitest?', duration: 4*60,
        hostNote: 'Schreibe.',
        question: 'Welche Version von dir zeigt sich im Job — und welche bleibt draußen?' },
      { name: 'Abzweig', title: 'Der Weg, den du nicht genommen hast', duration: 4*60,
        hostNote: 'Schreibe ohne Reue. Nur neugierig.',
        question: 'Welche Entscheidung vor Jahren hätte dich heute woanders hingestellt? Und blickst du mit Reue, Erleichterung oder Ruhe zurück?' },
      { name: 'Schritt', title: 'Eine Reibung, ein Versuch', duration: 3*60,
        hostNote: 'Schreibe auf einen Zettel.',
        question: 'Was probierst du in deiner Arbeit diese Woche anders — klein, konkret?' }
    ])
  },

  frageabend_tief: {
    label: 'Allein', duration: '~25 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Bist du wirklich da?', duration: 3*60,
        hostNote: 'Drei tiefe Atemzüge. Kein Handy, keine Tabs.',
        question: 'Wo ist dein Kopf gerade — und was musst du ablegen, um wirklich hier zu sein?' },
      { name: 'Einstieg', title: 'Was wir uns nicht erzählen', duration: 3*60,
        hostNote: 'Still lesen.',
        description: 'Es gibt drei Bereiche in uns: was wir offen sagen, was wir manchmal sagen, und was wir niemandem sagen — nicht einmal uns selbst. Die dritte Ebene ist das Herz dieses Abends. Du bist allein — also darfst du heute hineinsehen.' },
      { name: 'Leise', title: 'Was sagst du selten?', duration: 5*60,
        hostNote: 'Schreibe — kein Publikum, kein Urteil.',
        question: 'Welchen Satz über dich selbst drückst du meistens weg, wenn er aufsteigt?' },
      { name: 'Nie', title: 'Was sagst du niemandem?', duration: 6*60,
        hostNote: 'Schreibe. „Pass" ist okay — aber versuch es einmal.',
        question: 'Welche Wahrheit über dich kennt niemand — und wie würde sich dein Leben ändern, wenn einer sie wüsste?' },
      { name: 'Sich selbst', title: 'Was sagst du dir selbst nicht?', duration: 6*60,
        hostNote: 'Die leiseste Stimme — und oft die richtigste.',
        question: 'Welchen Satz über dich traust du dich selbst nicht zu denken — und was wäre, wenn du ihn einmal zuließest?' },
      { name: 'Schritt', title: 'Eine Zärtlichkeit mit dir', duration: 2*60,
        hostNote: 'Schreibe auf einen Zettel — nicht als Aufgabe, als Geschenk.',
        question: 'Wie wärst du diese Woche freundlicher mit dem, was gerade in dir lebt — ohne etwas ändern zu müssen?' }
    ])
  },

  frageabend_humor: {
    label: 'Allein', duration: '~20 Min.', people: 'Nur du',
    stations: withFeedback([
      { name: 'Ankommen', title: 'Wann hast du zuletzt wirklich gelacht?', duration: 3*60,
        hostNote: 'Drei Atemzüge.',
        question: 'Wann war das letzte Mal, dass du allein laut gelacht hast — und worüber?' },
      { name: 'Einstieg', title: 'Quatsch ist auch Erkenntnis', duration: 2*60,
        hostNote: 'Still lesen.',
        description: 'Manchmal erzählt eine absurde Antwort mehr als eine ehrliche. Der Blick von der Seite zeigt Seiten, die der ernste Blick übersieht. Heute drei Fragen, die Quatsch erlauben — und durch Quatsch manchmal zur Mitte gehen.' },
      { name: 'Was wäre', title: 'Hypothetische Biografie', duration: 5*60,
        hostNote: 'Schreibe, ohne zu zensieren. Die ersten zwei Ideen sind oft zu brav.',
        question: 'Wenn dein Leben ein Musical wäre: welches Genre, welche Szene spielt gerade, und wer singt?' },
      { name: 'An dir', title: 'Das Absurde an dir', duration: 5*60,
        hostNote: 'Schreibe — freundlich, aber ehrlich.',
        question: 'Was ist an dir selbst, ehrlich betrachtet, einfach komisch — und findest du das liebenswert oder nervig?' },
      { name: 'Unwichtiges', title: 'Ein Ranking ohne Sinn', duration: 4*60,
        hostNote: 'Schreibe. Drei Punkte.',
        question: 'Drei Dinge, die du wirklich ernst nimmst, obwohl sie völlig unwichtig sind — und drei Dinge, die wichtig wären, aber dir nicht gelingen.' },
      { name: 'Mitnahme', title: 'Ein Schmunzeln für die Woche', duration: 1*60,
        hostNote: 'Schreibe auf einen Zettel.',
        question: 'Was nimmst du mit — ein Wort, ein Bild, ein innerer Witz?' }
    ])
  }

};

Object.keys(SOLO_FORMATS).forEach(id => {
  if (window.THEMES[id] && !window.THEMES[id].formats.solo) {
    window.THEMES[id].formats.solo = SOLO_FORMATS[id];
  }
});

// Post-process: set theme.id, derive totalMinutes per format
Object.keys(window.THEMES).forEach(id => {
  const theme = window.THEMES[id];
  theme.id = id;
  Object.values(theme.formats || {}).forEach(f => {
    f.totalMinutes = (f.stations || []).reduce((s, st) => s + st.duration, 0) / 60;
  });
});
