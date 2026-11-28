// Dati generali dell'hotel (concept, sezioni 2 e 6). Li leggono sito e assistente.
// Tutto è inventato: il dominio .example è riservato agli esempi.
export const hotel = {
  nome: 'Hotel Rienzbogen',
  indirizzo: {
    via: 'Via Rienzbogen 1',
    cap: '39030',
    comune: { it: 'Valdaora', de: 'Olang', en: 'Olang' },
    provincia: 'BZ',
  },
  zona: {
    valle: { it: 'Val Pusteria', de: 'Pustertal', en: 'Puster Valley' },
    regione: { it: 'Alto Adige', de: 'Südtirol', en: 'South Tyrol' },
  },
  telefono: '+39 0474 000000',
  email: 'info@rienzbogen.example',
  mappa: { lat: 46.76, lon: 12.03, zoom: 14 }, // centro di Valdaora, da verificare su openstreetmap.org
  camereTotali: 24,
  titolari: ['Martina', 'Lukas'],
  // Distanze inventate, uguali in tutto il sito (concept, sezione 2)
  distanze: {
    stazioneKm: 2,
    impiantiKm: 2,
    skibusMetri: 200,
  },
  // Concept, sezione 6: solo informazioni generali e stabili
  comeArrivare: [
    {
      id: 'auto',
      icona: 'directions_car',
      titolo: { it: 'In auto', de: 'Mit dem Auto', en: 'By car' },
      testo: {
        it: "Dall'autostrada del Brennero (A22) si entra in Val Pusteria all'altezza di Bressanone e si prosegue verso Brunico e Valdaora.",
        de: 'Von der Brennerautobahn (A22) fahren Sie bei Brixen ins Pustertal und weiter Richtung Bruneck und Olang.',
        en: 'From the Brenner motorway (A22), turn into the Puster Valley at Brixen/Bressanone and continue towards Bruneck/Brunico and Olang.',
      },
    },
    {
      id: 'treno',
      icona: 'train',
      titolo: { it: 'In treno', de: 'Mit dem Zug', en: 'By train' },
      testo: {
        it: "La stazione più vicina è Valdaora-Anterselva, sulla linea della Val Pusteria, con cambio a Fortezza per chi arriva dalla linea del Brennero. Dalla stazione all'hotel ci sono 2 km: su richiesta vi veniamo a prendere gratuitamente. Prima di partire controllate gli avvisi sulla linea.",
        de: 'Der nächste Bahnhof ist Olang-Antholz an der Pustertalbahn; wer mit der Brennerbahn kommt, steigt in Franzensfeste um. Vom Bahnhof zum Hotel sind es 2 km – auf Anfrage holen wir Sie kostenlos ab. Bitte prüfen Sie vor der Abreise die aktuellen Hinweise zur Strecke.',
        en: 'The nearest station is Olang-Antholz on the Puster Valley line; if you come on the Brenner line, change at Franzensfeste/Fortezza. The hotel is 2 km from the station and we can pick you up for free on request. Please check the latest notices for the line before you travel.',
      },
    },
    {
      id: 'aereo',
      icona: 'flight',
      titolo: { it: "Dall'aeroporto", de: 'Vom Flughafen', en: 'From the airport' },
      testo: {
        it: 'Gli aeroporti più comodi sono Innsbruck, Bolzano e Venezia. Da lì si prosegue in treno fino a Valdaora oppure con un transfer privato, che possiamo aiutarvi a organizzare.',
        de: 'Am bequemsten reisen Sie über die Flughäfen Innsbruck, Bozen oder Venedig an. Von dort geht es mit dem Zug weiter nach Olang oder mit einem privaten Transfer, bei dessen Organisation wir Ihnen gerne helfen.',
        en: 'The most convenient airports are Innsbruck, Bolzano and Venice. From there you can continue by train to Olang or by private transfer, which we are happy to help you arrange.',
      },
    },
  ],
};
