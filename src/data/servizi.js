// Servizi dell'hotel (concept, sezione 4; schema nella Guida, «Dati: servizi e contatti»).
// orario: { da, a } oppure null se sempre accessibile o su richiesta.
// inHome: compare nella lista compatta della Home.
// inEvidenza: blocco grande con foto nella pagina Servizi (gli altri hanno foto: null).
export const servizi = [
  {
    id: 'colazione',
    icona: 'bakery_dining',
    nome: { it: 'Colazione', de: 'Frühstück', en: 'Breakfast' },
    descrizione: {
      it: 'Buffet con pane delle panetterie della valle, speck, formaggi di malga, yogurt e burro di maso, marmellate fatte in casa. Uova e omelette preparate al momento. Opzioni senza glutine e senza lattosio su richiesta.',
      de: 'Buffet mit Brot von Bäckereien aus dem Tal, Speck, Almkäse, Joghurt und Butter vom Bauernhof sowie hausgemachter Marmelade. Eier und Omeletts werden frisch zubereitet. Glutenfreie und laktosefreie Alternativen auf Anfrage.',
      en: 'A buffet with bread from local bakeries, speck, mountain cheeses, farm yogurt and butter, and homemade jams. Eggs and omelettes cooked to order. Gluten-free and lactose-free options on request.',
    },
    orario: { da: '07:30', a: '10:30' },
    costo: { it: 'Inclusa', de: 'Inklusive', en: 'Included' },
    inHome: true,
    inEvidenza: true,
    foto: {
      src: '/img/servizi/s1-colazione.webp',
      alt: {
        it: 'Tavolo della colazione con speck, formaggi, pane, marmellate, yogurt e caffè',
        de: 'Frühstückstisch mit Speck, Käse, Brot, Marmelade, Joghurt und Kaffee',
        en: 'Breakfast table with speck, cheeses, bread, jams, yogurt and coffee',
      },
    },
  },
  {
    id: 'wellness',
    icona: 'spa',
    nome: { it: 'Area wellness', de: 'Wellnessbereich', en: 'Wellness area' },
    descrizione: {
      it: 'Sauna finlandese, bio-sauna al cirmolo, bagno turco, doccia emozionale e sala relax con vista sul bosco. Accappatoio e telo in camera. Saune accessibili dai 14 anni.',
      de: 'Finnische Sauna, Zirben-Biosauna, Dampfbad, Erlebnisdusche und Ruheraum mit Blick in den Wald. Bademantel und Saunatuch liegen im Zimmer bereit. Saunen ab 14 Jahren.',
      en: 'Finnish sauna, Swiss stone pine bio-sauna, steam bath, experience shower and a relaxation room looking onto the forest. Bathrobe and sauna towel in your room. Saunas from age 14.',
    },
    orario: { da: '15:00', a: '19:30' },
    costo: { it: 'Inclusa', de: 'Inklusive', en: 'Included' },
    inHome: true,
    inEvidenza: true,
    foto: {
      src: '/img/servizi/s2-sauna.webp',
      alt: {
        it: 'Bio-sauna in cirmolo con panche in legno, stufa e asciugamani bianchi',
        de: 'Zirben-Biosauna mit Holzbänken, Saunaofen und weißen Handtüchern',
        en: 'Swiss stone pine bio-sauna with wooden benches, a stove and white towels',
      },
    },
  },
  {
    id: 'ristorante',
    icona: 'restaurant',
    nome: { it: 'Ristorante', de: 'Restaurant', en: 'Restaurant' },
    descrizione: {
      it: 'Per gli ospiti in mezza pensione, menu serale di quattro portate con piatti sudtirolesi e mediterranei, sempre con un\'alternativa vegetariana. Il mercoledì è serata tirolese con canederli e strudel. Aperto anche agli esterni con menù à la carte, su prenotazione.',
      de: 'Für Halbpensionsgäste gibt es abends ein Vier-Gänge-Menü mit Südtiroler und mediterranen Gerichten, immer mit vegetarischer Alternative. Mittwochs ist Tiroler Abend mit Knödeln und Strudel. Auch externe Gäste sind à la carte willkommen, nach Reservierung.',
      en: 'Half-board guests enjoy a four-course dinner of South Tyrolean and Mediterranean dishes, always with a vegetarian option. Wednesday is Tyrolean night, with dumplings and strudel. Non-residents are welcome à la carte, by reservation.',
    },
    orario: { da: '18:30', a: '21:00' },
    costo: {
      it: 'Mezza pensione 35 € a persona',
      de: 'Halbpension 35 € pro Person',
      en: 'Half board €35 per person',
    },
    inHome: false,
    inEvidenza: false,
    foto: null,
  },
  {
    id: 'parcheggio',
    icona: 'local_parking',
    nome: { it: 'Parcheggio', de: 'Parken', en: 'Parking' },
    descrizione: {
      it: 'Parcheggio esterno gratuito per tutti gli ospiti. Garage coperto (8 posti) a 12 € a notte, da prenotare. Due colonnine di ricarica per auto elettriche, a pagamento.',
      de: 'Kostenlose Außenparkplätze für alle Gäste. Tiefgarage (8 Plätze) für 12 € pro Nacht, auf Vorbestellung. Zwei kostenpflichtige Ladestationen für Elektroautos.',
      en: 'Free outdoor parking for all guests. Covered garage (8 spaces) at €12 per night, to be booked in advance. Two paid charging points for electric cars.',
    },
    orario: null,
    costo: {
      it: 'Esterno gratuito, garage 12 € a notte, ricarica 0,45 €/kWh',
      de: 'Außenparkplatz kostenlos, Tiefgarage 12 € pro Nacht, Laden 0,45 €/kWh',
      en: 'Outdoor free, garage €12 per night, charging €0.45/kWh',
    },
    inHome: true,
    inEvidenza: false,
    foto: null,
  },
  {
    id: 'deposito',
    icona: 'downhill_skiing',
    nome: { it: 'Deposito sci e bici', de: 'Ski- und Radraum', en: 'Ski and bike room' },
    descrizione: {
      it: 'Deposito sci con armadietto personale e scaldascarponi. In estate deposito bici chiuso, con prese per ricaricare le e-bike e un piccolo angolo attrezzi.',
      de: 'Skiraum mit eigenem Spind und Skischuhtrockner. Im Sommer ein abschließbarer Radraum mit Lademöglichkeiten für E-Bikes und einer kleinen Werkzeugecke.',
      en: 'Ski room with a personal locker and boot warmers. In summer, a locked bike room with sockets for charging e-bikes and a small tool corner.',
    },
    orario: null, // sempre accessibile con la chiave della camera
    costo: { it: 'Gratuito', de: 'Kostenlos', en: 'Free' },
    inHome: true,
    inEvidenza: false,
    foto: null,
  },
  {
    id: 'noleggi',
    icona: 'electric_bike',
    nome: { it: 'Noleggi', de: 'Verleih', en: 'Rentals' },
    descrizione: {
      it: "L'hotel noleggia 6 e-bike (35 € al giorno) e presta gratis ciaspole e bastoncini. Per sci e snowboard collaboriamo con un noleggio in paese: gli ospiti hanno il 10% di sconto.",
      de: 'Das Hotel verleiht 6 E-Bikes (35 € pro Tag) und stellt Schneeschuhe und Stöcke kostenlos zur Verfügung. Für Ski und Snowboard arbeiten wir mit einem Verleih im Ort zusammen: Hotelgäste erhalten 10 % Rabatt.',
      en: 'The hotel rents out 6 e-bikes (€35 per day) and lends snowshoes and poles for free. For skis and snowboards we work with a rental shop in the village, where guests get a 10% discount.',
    },
    orario: null, // su richiesta alla reception
    costo: {
      it: 'E-bike 35 € al giorno, ciaspole e bastoncini gratuiti',
      de: 'E-Bike 35 € pro Tag, Schneeschuhe und Stöcke kostenlos',
      en: 'E-bike €35 per day, snowshoes and poles free',
    },
    inHome: true,
    inEvidenza: false,
    foto: null,
  },
  {
    id: 'animali',
    icona: 'pets',
    nome: { it: 'Animali', de: 'Haustiere', en: 'Pets' },
    descrizione: {
      it: 'Cani di piccola e media taglia ammessi in due camere Doppia Cirmolo, su richiesta al momento della prenotazione. 15 € a notte, cibo escluso. Non ammessi in ristorante, sala colazione e area wellness.',
      de: 'Kleine und mittelgroße Hunde sind in zwei Doppelzimmern Zirbe auf Anfrage bei der Buchung erlaubt. 15 € pro Nacht, ohne Futter. Im Restaurant, im Frühstückssaal und im Wellnessbereich sind Hunde nicht gestattet.',
      en: 'Small and medium-sized dogs are welcome in two Swiss Pine Double Rooms, on request when booking. €15 per night, food not included. Dogs are not allowed in the restaurant, breakfast room or wellness area.',
    },
    orario: null,
    costo: {
      it: '15 € a notte, in 2 camere',
      de: '15 € pro Nacht, in 2 Zimmern',
      en: '€15 per night, in 2 rooms',
    },
    inHome: false,
    inEvidenza: false,
    foto: null,
  },
  {
    id: 'wifi',
    icona: 'wifi',
    nome: { it: 'Wi-Fi', de: 'WLAN', en: 'Wi-Fi' },
    descrizione: {
      it: "Wi-Fi gratuito in fibra in tutto l'hotel, camere comprese. La password è sul cartoncino che ricevete al check-in.",
      de: 'Kostenloses Glasfaser-WLAN im ganzen Hotel, auch in den Zimmern. Das Passwort steht auf der Karte, die Sie beim Check-in erhalten.',
      en: 'Free fibre Wi-Fi throughout the hotel, rooms included. The password is on the card you receive at check-in.',
    },
    orario: null, // 24 ore
    costo: { it: 'Gratuito', de: 'Kostenlos', en: 'Free' },
    inHome: true,
    inEvidenza: false,
    foto: null,
  },
];
