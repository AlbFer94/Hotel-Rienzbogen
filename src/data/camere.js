// Le 4 tipologie di camera (concept, sezione 3; schema nella Guida, «Dati: camere»).
// Prezzi in € per persona a notte, colazione inclusa: numeri, formattati solo quando si mostrano.
// dotazioni: chiavi del catalogo in dotazioni.js. foto[0] è la copertina della card.
export const camere = [
  {
    id: 'doppia-cirmolo',
    nome: { it: 'Doppia Cirmolo', de: 'Doppelzimmer Zirbe', en: 'Swiss Pine Double Room' },
    etichetta: { it: 'Legno di cirmolo', de: 'Zirbenholz', en: 'Swiss stone pine' },
    descrizioneBreve: {
      it: 'Letto in cirmolo e balcone, per un rientro tranquillo.',
      de: 'Zirbenbett und Balkon für ruhige Abende.',
      en: 'A pine bed and a balcony for quiet evenings.',
    },
    descrizione: {
      it: 'Camera doppia accogliente con letto matrimoniale in cirmolo e balcone. Ideale per chi passa la giornata fuori e cerca un rientro tranquillo.',
      de: 'Gemütliches Doppelzimmer mit Doppelbett aus Zirbenholz und Balkon. Ideal für alle, die den Tag draußen verbringen und abends Ruhe suchen.',
      en: 'A cosy double room with a Swiss stone pine double bed and a balcony. Ideal if you spend the day outdoors and want a quiet place to come back to.',
    },
    quantita: 10,
    ospitiMax: 2,
    metriQuadri: 22,
    prezzi: { bassa: 79, alta: 119 },
    dotazioni: [
      'letto-matrimoniale', 'balcone', 'doccia', 'tv', 'cassaforte', 'bollitore', 'wifi',
    ],
    animaliAmmessi: true, // solo in 2 delle 10 camere, su richiesta (servizi.js, voce «animali»)
    foto: [
      {
        src: '/img/camere/doppia-c1.webp',
        alt: {
          it: 'Doppia Cirmolo con letto matrimoniale in cirmolo, coperta verde e porta-finestra sul balcone',
          de: 'Doppelzimmer Zirbe mit Zirbendoppelbett, grüner Decke und Balkontür',
          en: 'Swiss Pine Double Room with a pine double bed, green throw and a glass door onto the balcony',
        },
      },
      {
        src: '/img/camere/doppia-c2.webp',
        alt: {
          it: 'Balcone in legno con due sedie e due tazze di tè, vista su prato e bosco',
          de: 'Holzbalkon mit zwei Stühlen und zwei Tassen Tee, Blick auf Wiese und Wald',
          en: 'Wooden balcony with two chairs and two cups of tea, looking onto a meadow and forest',
        },
      },
      {
        src: '/img/camere/doppia-c3.webp',
        alt: {
          it: 'Comodino in cirmolo con lampada, bollitore e scatola di tisane',
          de: 'Nachttisch aus Zirbe mit Lampe, Wasserkocher und Teebox',
          en: 'Pine bedside table with a lamp, kettle and a box of herbal teas',
        },
      },
      {
        src: '/img/camere/panorama-c4.webp', // bagno condiviso con la Camera Panorama
        alt: {
          it: 'Bagno con doccia a pioggia, piastrelle in pietra e mobile in cirmolo',
          de: 'Bad mit Regendusche, Steinfliesen und Waschtisch aus Zirbe',
          en: 'Bathroom with a rain shower, stone tiles and a pine vanity',
        },
      },
    ],
  },
  {
    id: 'panorama',
    nome: { it: 'Camera Panorama', de: 'Panoramazimmer', en: 'Panorama Room' },
    etichetta: { it: 'Balcone panoramico', de: 'Panoramabalkon', en: 'Panoramic balcony' },
    descrizioneBreve: {
      it: 'Balcone a sud con vista su Plan de Corones.',
      de: 'Südbalkon mit Blick auf den Kronplatz.',
      en: 'South-facing balcony with a view of Kronplatz.',
    },
    descrizione: {
      it: 'Camera ampia con balcone esposto a sud e vista su Plan de Corones. Ha un angolo salotto con divano letto per un terzo ospite.',
      de: 'Geräumiges Zimmer mit Südbalkon und Blick auf den Kronplatz. Die Sitzecke mit Schlafcouch bietet Platz für eine dritte Person.',
      en: 'A spacious room with a south-facing balcony and a view of Kronplatz. The sitting corner has a sofa bed for a third guest.',
    },
    quantita: 8,
    ospitiMax: 3,
    metriQuadri: 28,
    prezzi: { bassa: 92, alta: 139 },
    dotazioni: [
      'letto-matrimoniale', 'divano-letto', 'balcone-sud', 'doccia-pioggia',
      'tv', 'cassaforte', 'minibar', 'bollitore', 'wifi',
    ],
    animaliAmmessi: false,
    foto: [
      {
        src: '/img/camere/panorama-c1.webp',
        alt: {
          it: 'Camera Panorama con letto matrimoniale, divano verde e porta-finestra sulla valle',
          de: 'Panoramazimmer mit Doppelbett, grünem Sofa und Balkontür zum Tal',
          en: 'Panorama Room with a double bed, green sofa and a balcony door facing the valley',
        },
      },
      {
        src: '/img/camere/panorama-c2.webp',
        alt: {
          it: 'Balcone esposto a sud con due sdraio e vista sulla valle e sulla montagna',
          de: 'Südbalkon mit zwei Liegestühlen und Blick auf Tal und Berg',
          en: 'South-facing balcony with two lounge chairs and a view of the valley and mountain',
        },
      },
      {
        src: '/img/camere/panorama-c3.webp',
        alt: {
          it: 'Angolo salotto con divano verde, tavolino in cirmolo, un libro e una caraffa',
          de: 'Sitzecke mit grünem Sofa, Couchtisch aus Zirbe, einem Buch und einer Karaffe',
          en: 'Sitting corner with a green sofa, pine coffee table, a book and a carafe',
        },
      },
      {
        src: '/img/camere/panorama-c4.webp',
        alt: {
          it: 'Bagno con doccia a pioggia, piastrelle in pietra e mobile in cirmolo',
          de: 'Bad mit Regendusche, Steinfliesen und Waschtisch aus Zirbe',
          en: 'Bathroom with a rain shower, stone tiles and a pine vanity',
        },
      },
    ],
  },
  {
    id: 'famiglia-maso',
    nome: { it: 'Suite Famiglia Maso', de: 'Familiensuite Hof', en: 'Farmhouse Family Suite' },
    etichetta: { it: 'Due ambienti', de: 'Zwei Räume', en: 'Two rooms' },
    descrizioneBreve: {
      it: 'Camera per i genitori e cameretta con letto a castello.',
      de: 'Elternschlafzimmer und Kinderzimmer mit Stockbett.',
      en: "Parents' bedroom and a children's room with a bunk bed.",
    },
    descrizione: {
      it: 'Due ambienti separati da una porta: camera per i genitori e cameretta con letto a castello. Pensata per famiglie che vogliono spazio senza prendere due camere.',
      de: 'Zwei durch eine Tür getrennte Räume: ein Elternschlafzimmer und ein Kinderzimmer mit Stockbett. Für Familien, die Platz brauchen, ohne zwei Zimmer zu buchen.',
      en: "Two rooms separated by a door: a parents' bedroom and a children's room with a bunk bed. Designed for families who want space without booking two rooms.",
    },
    quantita: 4,
    ospitiMax: 4,
    metriQuadri: 42,
    prezzi: { bassa: 85, alta: 129 }, // tariffa per gli adulti; bambini con le riduzioni di regole.js
    dotazioni: [
      'letto-matrimoniale', 'letto-castello', 'balcone', 'vasca-doccia',
      'tv', 'cassaforte', 'lettino', 'wifi',
    ],
    animaliAmmessi: false,
    foto: [
      {
        src: '/img/camere/famiglia-c1.webp',
        alt: {
          it: 'Suite Famiglia Maso: camera dei genitori e, oltre la porta aperta, la cameretta con letto a castello',
          de: 'Familiensuite Hof: Elternschlafzimmer und, hinter der offenen Tür, das Kinderzimmer mit Stockbett',
          en: "Farmhouse Family Suite: the parents' bedroom and, through the open door, the children's room with a bunk bed",
        },
      },
      {
        src: '/img/camere/famiglia-c2.webp',
        alt: {
          it: 'Cameretta con letto a castello in cirmolo, scrivania e lettino in legno',
          de: 'Kinderzimmer mit Stockbett aus Zirbe, Schreibtisch und Holzkinderbett',
          en: "Children's room with a pine bunk bed, a desk and a wooden cot",
        },
      },
      {
        src: '/img/camere/famiglia-c3.webp',
        alt: {
          it: 'Scaletta in legno del letto a castello con coperta di lana piegata',
          de: 'Holzleiter des Stockbetts mit gefalteter Wolldecke',
          en: 'Wooden ladder of the bunk bed with a folded wool blanket',
        },
      },
      {
        src: '/img/camere/famiglia-c4.webp',
        alt: {
          it: 'Bagno con vasca, doccia separata e sgabello in legno per i bambini',
          de: 'Bad mit Badewanne, separater Dusche und Holztritt für Kinder',
          en: "Bathroom with a bathtub, separate shower and a wooden step stool for children",
        },
      },
    ],
  },
  {
    id: 'junior-larice',
    nome: { it: 'Junior Suite Larice', de: 'Juniorsuite Lärche', en: 'Larch Junior Suite' },
    etichetta: { it: 'Stube in legno', de: 'Holzstube', en: 'Wood-panelled stube' },
    descrizioneBreve: {
      it: 'Stube con stufa in maiolica e vasca con vista sul bosco.',
      de: 'Stube mit Kachelofen und Badewanne mit Waldblick.',
      en: 'A stube with a tiled stove and a bathtub with a forest view.',
    },
    descrizione: {
      it: 'La camera più grande per due: stube in legno con stufa in maiolica decorativa e vasca da bagno con vista sul bosco. Per anniversari e soggiorni lunghi.',
      de: 'Das größte Zimmer für zwei: eine holzgetäfelte Stube mit dekorativem Kachelofen und eine Badewanne mit Blick in den Wald. Für Jahrestage und längere Aufenthalte.',
      en: 'Our largest room for two: a wood-panelled stube with a decorative tiled stove and a bathtub looking onto the forest. For anniversaries and longer stays.',
    },
    quantita: 2,
    ospitiMax: 2,
    metriQuadri: 35,
    prezzi: { bassa: 109, alta: 165 },
    dotazioni: [
      'letto-king', 'stube', 'balcone', 'vasca-freestanding', 'accappatoi',
      'macchina-caffe', 'minibar', 'tv', 'wifi',
    ],
    animaliAmmessi: false,
    foto: [
      {
        src: '/img/camere/junior-c1.webp',
        alt: {
          it: 'Junior Suite Larice con letto king size, stube in legno e stufa in maiolica verde',
          de: 'Juniorsuite Lärche mit Kingsize-Bett, Holzstube und grünem Kachelofen',
          en: 'Larch Junior Suite with a king-size bed, wood-panelled stube and green tiled stove',
        },
      },
      {
        src: '/img/camere/junior-c2.webp',
        alt: {
          it: 'Balcone in larice con due sedie e vista sul bosco di abeti',
          de: 'Lärchenbalkon mit zwei Stühlen und Blick in den Fichtenwald',
          en: 'Larch balcony with two chairs looking into the spruce forest',
        },
      },
      {
        src: '/img/camere/junior-c3.webp',
        alt: {
          it: 'Stufa in maiolica verde e panca della stube con cuscino di lana',
          de: 'Grüner Kachelofen und Stubenbank mit Wollkissen',
          en: 'Green tiled stove and the stube bench with a wool cushion',
        },
      },
      {
        src: '/img/camere/junior-c4.webp',
        alt: {
          it: 'Bagno con vasca freestanding davanti alla finestra sul bosco e accappatoi',
          de: 'Bad mit freistehender Badewanne vor dem Fenster zum Wald und Bademänteln',
          en: 'Bathroom with a freestanding bathtub by a window onto the forest, and bathrobes',
        },
      },
    ],
  },
];
