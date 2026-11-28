// Orari e regole (concept, sezione 5). Solo dati: le frasi per l'ospite
// le costruisce il componente, o le scrive l'assistente nella lingua dell'ospite.
export const regole = {
  checkIn: { da: '14:00', a: '20:00' },
  checkOut: '10:30',
  serviziFinoAlGiornoDiPartenza: '17:00', // wellness e deposito sci il giorno della partenza
  reception: { da: '07:30', a: '21:00' }, // di notte numero di emergenza
  caparraPercentuale: 30,
  soggiornoMinimo: { alta: 3, bassa: 2 }, // notti
  cancellazione: [
    { daGiorni: 14, penale: 0 }, // gratuita
    { daGiorni: 4, penale: 'caparra' }, // da 13 a 4 giorni prima
    { daGiorni: 0, penalePercentuale: 90 }, // da 3 giorni prima o mancato arrivo
  ],
  riduzioniBambini: [ // nel letto aggiunto con 2 adulti
    { etaMax: 2, sconto: 100 },
    { etaMax: 6, sconto: 50 },
    { etaMax: 12, sconto: 30 },
    { etaMax: null, sconto: 20 }, // dai 13 anni
  ],
  mezzaPensione: 35, // € a persona a notte
  supplementoCane: 15, // € a notte
  etaMinimaSauna: 14,
};
