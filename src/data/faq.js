// Le 15 domande frequenti (concept, sezione 8). Servono alla pagina Contatti,
// al prompt dell'assistente e come casi di prova. Inglese: bozza da rivedere.
export const faq = [
  {
    id: 'prezzi',
    domanda: {
      it: 'Quanto costa una camera per notte?',
      de: 'Was kostet ein Zimmer pro Nacht?',
      en: 'How much is a room per night?',
    },
    risposta: {
      it: 'Le tariffe vanno da 79 € a 165 € a persona a notte, colazione inclusa, in base a camera e stagione. La Doppia Cirmolo costa 79 € in bassa stagione e 119 € in alta. La mezza pensione costa 35 € in più a persona; l\'imposta di soggiorno non è inclusa.',
      de: 'Die Preise liegen je nach Zimmer und Saison zwischen 79 € und 165 € pro Person und Nacht, inklusive Frühstück. Das Doppelzimmer Zirbe kostet in der Nebensaison 79 € und in der Hauptsaison 119 €. Halbpension kostet 35 € pro Person zusätzlich; die Ortstaxe ist nicht inbegriffen.',
      en: 'Rates range from €79 to €165 per person per night, breakfast included, depending on the room and season. The Swiss Pine Double Room costs €79 in low season and €119 in high season. Half board is €35 extra per person; the tourist tax is not included.',
    },
  },
  {
    id: 'colazione',
    domanda: {
      it: 'La colazione è inclusa?',
      de: 'Ist das Frühstück inbegriffen?',
      en: 'Is breakfast included?',
    },
    risposta: {
      it: 'Sì, la colazione è sempre inclusa. È un buffet dalle 7:30 alle 10:30 con prodotti dei masi della valle; uova e omelette si preparano al momento. Opzioni senza glutine e senza lattosio su richiesta.',
      de: 'Ja, das Frühstück ist immer inklusive. Das Buffet gibt es von 7:30 bis 10:30 Uhr, mit Produkten von Höfen aus dem Tal; Eier und Omeletts werden frisch zubereitet. Glutenfreie und laktosefreie Alternativen auf Anfrage.',
      en: 'Yes, breakfast is always included. The buffet is served from 7:30 to 10:30 with produce from the valley\'s farms; eggs and omelettes are cooked to order. Gluten-free and lactose-free options on request.',
    },
  },
  {
    id: 'check-in',
    domanda: {
      it: 'A che ora sono il check-in e il check-out?',
      de: 'Wann ist Check-in und Check-out?',
      en: 'What time are check-in and check-out?',
    },
    risposta: {
      it: 'Il check-in è dalle 14:00 alle 20:00, il check-out entro le 10:30. Se arrivate dopo le 20:00 avvisate la reception: vi lasciamo le chiavi in una cassetta con codice. Il giorno della partenza potete usare wellness e deposito sci fino alle 17:00.',
      de: 'Check-in ist von 14:00 bis 20:00 Uhr, Check-out bis 10:30 Uhr. Wenn Sie nach 20:00 Uhr ankommen, geben Sie bitte der Rezeption Bescheid: Wir hinterlegen Ihren Schlüssel in einer Box mit Code. Am Abreisetag können Sie Wellnessbereich und Skiraum bis 17:00 Uhr nutzen.',
      en: 'Check-in is from 14:00 to 20:00 and check-out is by 10:30. If you arrive after 20:00, please let reception know and we will leave your keys in a code box. On your departure day you can use the wellness area and ski room until 17:00.',
    },
  },
  {
    id: 'cancellazione',
    domanda: {
      it: 'Posso cancellare la prenotazione?',
      de: 'Kann ich meine Buchung stornieren?',
      en: 'Can I cancel my booking?',
    },
    risposta: {
      it: 'Sì. La cancellazione è gratuita fino a 14 giorni prima dell\'arrivo. Da 13 a 4 giorni prima tratteniamo la caparra del 30%; da 3 giorni prima, o se non vi presentate, addebitiamo il 90% del soggiorno.',
      de: 'Ja. Bis 14 Tage vor der Anreise ist die Stornierung kostenlos. Von 13 bis 4 Tage vorher behalten wir die Anzahlung von 30 % ein; ab 3 Tagen vorher oder bei Nichtanreise berechnen wir 90 % des Aufenthalts.',
      en: 'Yes. Cancellation is free up to 14 days before arrival. From 13 to 4 days before, we keep the 30% deposit; from 3 days before, or if you do not arrive, we charge 90% of the stay.',
    },
  },
  {
    id: 'animali',
    domanda: {
      it: 'Posso portare il mio cane?',
      de: 'Darf ich meinen Hund mitbringen?',
      en: 'Can I bring my dog?',
    },
    risposta: {
      it: 'Sì, i cani di piccola e media taglia sono ammessi in due camere Doppia Cirmolo, da richiedere al momento della prenotazione. Il costo è di 15 € a notte, cibo escluso. I cani non possono entrare in ristorante, sala colazione e area wellness; altri animali non sono ammessi.',
      de: 'Ja, kleine und mittelgroße Hunde sind in zwei Doppelzimmern Zirbe erlaubt – bitte bei der Buchung angeben. Der Aufpreis beträgt 15 € pro Nacht, ohne Futter. Ins Restaurant, in den Frühstückssaal und in den Wellnessbereich dürfen Hunde nicht mit; andere Haustiere sind leider nicht erlaubt.',
      en: 'Yes, small and medium-sized dogs are welcome in two Swiss Pine Double Rooms; please ask when booking. The charge is €15 per night, food not included. Dogs are not allowed in the restaurant, breakfast room or wellness area, and other pets are not accepted.',
    },
  },
  {
    id: 'parcheggio',
    domanda: {
      it: 'L\'hotel ha un parcheggio?',
      de: 'Gibt es einen Parkplatz?',
      en: 'Does the hotel have parking?',
    },
    risposta: {
      it: 'Sì, il parcheggio esterno è gratuito per tutti gli ospiti. C\'è anche un garage coperto con 8 posti a 12 € a notte, da prenotare. Per le auto elettriche ci sono due colonnine di ricarica (0,45 €/kWh).',
      de: 'Ja, die Außenparkplätze sind für alle Gäste kostenlos. Außerdem gibt es eine Tiefgarage mit 8 Plätzen für 12 € pro Nacht, auf Vorbestellung. Für Elektroautos stehen zwei Ladestationen zur Verfügung (0,45 €/kWh).',
      en: 'Yes, outdoor parking is free for all guests. There is also a covered garage with 8 spaces at €12 per night, to be booked in advance. Electric cars can use two charging points (€0.45/kWh).',
    },
  },
  {
    id: 'wifi',
    domanda: {
      it: 'C\'è il Wi-Fi gratuito?',
      de: 'Gibt es kostenloses WLAN?',
      en: 'Is there free Wi-Fi?',
    },
    risposta: {
      it: 'Sì, il Wi-Fi in fibra è gratuito in tutto l\'hotel, anche in camera. Trovate la password sul cartoncino che ricevete al check-in.',
      de: 'Ja, das Glasfaser-WLAN ist im ganzen Hotel kostenlos, auch in den Zimmern. Das Passwort steht auf der Karte, die Sie beim Check-in bekommen.',
      en: 'Yes, fibre Wi-Fi is free throughout the hotel, including the rooms. The password is on the card you receive at check-in.',
    },
  },
  {
    id: 'wellness',
    domanda: {
      it: 'Avete una spa o una sauna?',
      de: 'Gibt es einen Wellnessbereich oder eine Sauna?',
      en: 'Do you have a spa or sauna?',
    },
    risposta: {
      it: 'Sì, l\'area wellness è aperta dalle 15:00 alle 19:30 ed è inclusa nel prezzo. Ci sono sauna finlandese, bio-sauna al cirmolo, bagno turco, doccia emozionale e sala relax. Le saune sono accessibili dai 14 anni. Non abbiamo una piscina.',
      de: 'Ja, der Wellnessbereich ist von 15:00 bis 19:30 Uhr geöffnet und im Preis inbegriffen. Es gibt eine finnische Sauna, eine Zirben-Biosauna, ein Dampfbad, eine Erlebnisdusche und einen Ruheraum. Die Saunen sind ab 14 Jahren zugänglich. Ein Schwimmbad haben wir nicht.',
      en: 'Yes, the wellness area is open from 15:00 to 19:30 and is included in the price. There is a Finnish sauna, a Swiss stone pine bio-sauna, a steam bath, an experience shower and a relaxation room. Saunas are open to guests aged 14 and over. We do not have a swimming pool.',
    },
  },
  {
    id: 'bambini',
    domanda: {
      it: 'Ci sono sconti per i bambini?',
      de: 'Gibt es Ermäßigungen für Kinder?',
      en: 'Are there discounts for children?',
    },
    risposta: {
      it: 'Sì. I bambini fino a 2 anni soggiornano gratis, con lettino e seggiolone. Nel letto aggiunto in camera con due adulti: 3–6 anni −50%, 7–12 anni −30%, dai 13 anni −20%. Per le famiglie consigliamo la Suite Famiglia Maso, con cameretta separata.',
      de: 'Ja. Kinder bis 2 Jahre wohnen kostenlos, Kinderbett und Hochstuhl inklusive. Im Zusatzbett im Zimmer mit zwei Erwachsenen gilt: 3–6 Jahre −50 %, 7–12 Jahre −30 %, ab 13 Jahren −20 %. Für Familien empfehlen wir die Familiensuite Hof mit eigenem Kinderzimmer.',
      en: 'Yes. Children up to 2 stay free, with a cot and high chair. In an extra bed in a room with two adults: ages 3–6 −50%, 7–12 −30%, 13 and over −20%. For families we recommend the Farmhouse Family Suite, which has a separate children\'s room.',
    },
  },
  {
    id: 'treno',
    domanda: {
      it: 'Come arrivo in hotel in treno?',
      de: 'Wie komme ich mit dem Zug zum Hotel?',
      en: 'How do I get to the hotel by train?',
    },
    risposta: {
      it: 'La stazione più vicina è Valdaora-Anterselva, sulla linea della Val Pusteria; chi arriva dalla linea del Brennero cambia a Fortezza. L\'hotel è a 2 km: su richiesta vi veniamo a prendere gratis. Prima di partire controllate gli avvisi sulla linea.',
      de: 'Der nächste Bahnhof ist Olang-Antholz an der Pustertalbahn; wer mit der Brennerbahn kommt, steigt in Franzensfeste um. Das Hotel ist 2 km entfernt: Auf Anfrage holen wir Sie kostenlos ab. Bitte prüfen Sie vor der Abreise die aktuellen Hinweise zur Strecke.',
      en: 'The nearest station is Olang-Antholz on the Puster Valley line; if you come on the Brenner line, change at Franzensfeste/Fortezza. The hotel is 2 km away and we can pick you up for free on request. Please check the latest notices for the line before you travel.',
    },
  },
  {
    id: 'piste',
    domanda: {
      it: 'Quanto è lontano l\'hotel dalle piste da sci?',
      de: 'Wie weit ist das Hotel von den Skipisten entfernt?',
      en: 'How far is the hotel from the ski slopes?',
    },
    risposta: {
      it: 'Gli impianti di Valdaora verso Plan de Corones sono a circa 2 km. La fermata dello skibus è a 200 m dall\'hotel. Gli skipass si comprano direttamente alle casse degli impianti.',
      de: 'Die Lifte in Olang zum Kronplatz sind etwa 2 km entfernt. Die Skibushaltestelle liegt 200 m vom Hotel. Skipässe kaufen Sie direkt an den Kassen der Bergbahnen.',
      en: 'The Olang lifts up to Kronplatz are about 2 km away. The ski bus stop is 200 m from the hotel. Ski passes are sold directly at the lift ticket offices.',
    },
  },
  {
    id: 'deposito-noleggio',
    domanda: {
      it: 'Dove lascio sci o bici? Si possono noleggiare?',
      de: 'Wo kann ich Ski oder Fahrräder abstellen? Kann man welche ausleihen?',
      en: 'Where can I leave skis or bikes? Can I rent them?',
    },
    risposta: {
      it: 'Il deposito sci ha armadietti personali e scaldascarponi; d\'estate c\'è un deposito bici chiuso con ricarica per e-bike. Noleggiamo 6 e-bike a 35 € al giorno e prestiamo gratis ciaspole e bastoncini. Per sci e snowboard avete il 10% di sconto presso un noleggio partner in paese.',
      de: 'Im Skiraum gibt es eigene Spinde und Skischuhtrockner; im Sommer steht ein abschließbarer Radraum mit Lademöglichkeit für E-Bikes bereit. Wir verleihen 6 E-Bikes für 35 € pro Tag, Schneeschuhe und Stöcke gibt es kostenlos. Für Ski und Snowboard erhalten Sie 10 % Rabatt bei einem Partnerverleih im Ort.',
      en: 'The ski room has personal lockers and boot warmers; in summer there is a locked bike room with e-bike charging. We rent out 6 e-bikes at €35 per day and lend snowshoes and poles for free. For skis and snowboards you get a 10% discount at a partner rental shop in the village.',
    },
  },
  {
    id: 'ristorante',
    domanda: {
      it: 'Avete un ristorante? Potete cucinare per chi ha intolleranze?',
      de: 'Gibt es ein Restaurant? Können Sie bei Unverträglichkeiten kochen?',
      en: 'Do you have a restaurant? Can you cater for food intolerances?',
    },
    risposta: {
      it: 'Sì, la cena si serve dalle 18:30 alle 21:00. Gli ospiti in mezza pensione (35 € a persona) hanno un menu di quattro portate con un\'alternativa vegetariana ogni sera. Per celiachia, allergie o intolleranze avvisateci al momento della prenotazione. Il ristorante è aperto anche agli esterni su prenotazione.',
      de: 'Ja, das Abendessen wird von 18:30 bis 21:00 Uhr serviert. Halbpensionsgäste (35 € pro Person) erhalten ein Vier-Gänge-Menü mit täglich einer vegetarischen Alternative. Bei Zöliakie, Allergien oder Unverträglichkeiten geben Sie uns bitte bei der Buchung Bescheid. Auch externe Gäste sind nach Reservierung willkommen.',
      en: 'Yes, dinner is served from 18:30 to 21:00. Half-board guests (€35 per person) have a four-course menu with a vegetarian option every evening. For coeliac disease, allergies or intolerances, please let us know when you book. Non-residents are also welcome by reservation.',
    },
  },
  {
    id: 'apertura',
    domanda: {
      it: 'In quali periodi è aperto l\'hotel?',
      de: 'Wann hat das Hotel geöffnet?',
      en: 'When is the hotel open?',
    },
    risposta: {
      it: 'In inverno siamo aperti dal 5 dicembre al 6 aprile, in estate dal 23 maggio al 1° novembre. Chiudiamo dal 7 aprile al 22 maggio e dal 2 novembre al 4 dicembre.',
      de: 'Im Winter haben wir vom 5. Dezember bis 6. April geöffnet, im Sommer vom 23. Mai bis 1. November. Geschlossen ist das Hotel vom 7. April bis 22. Mai und vom 2. November bis 4. Dezember.',
      en: 'In winter we are open from 5 December to 6 April, and in summer from 23 May to 1 November. We are closed from 7 April to 22 May and from 2 November to 4 December.',
    },
  },
  {
    id: 'prenotazione',
    domanda: {
      it: 'Come posso prenotare e pagare?',
      de: 'Wie kann ich buchen und bezahlen?',
      en: 'How can I book and pay?',
    },
    risposta: {
      it: 'Potete prenotare dal sito, per email o per telefono. Alla conferma chiediamo una caparra del 30%; il saldo si paga in hotel con carta di credito, bancomat o contanti. In alta stagione il soggiorno minimo è di 3 notti, negli altri periodi di 2.',
      de: 'Sie können über die Website, per E-Mail oder telefonisch buchen. Bei der Bestätigung bitten wir um eine Anzahlung von 30 %; den Restbetrag zahlen Sie im Hotel mit Kreditkarte, Bankomatkarte oder bar. In der Hauptsaison beträgt der Mindestaufenthalt 3 Nächte, sonst 2.',
      en: 'You can book through the website, by email or by phone. We ask for a 30% deposit on confirmation; the balance is paid at the hotel by credit card, debit card or cash. The minimum stay is 3 nights in high season and 2 nights at other times.',
    },
  },
];
