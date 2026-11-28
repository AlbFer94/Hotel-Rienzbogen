// Periodi di apertura e stagioni tariffarie (concept, sezioni 3 e 5).
// Date come stringhe 'MM-DD': si confrontano come testo e non dipendono dall'anno.
// Un periodo che scavalca il capodanno ha da maggiore di a.
export const stagioni = {
  apertura: [
    { da: '12-05', a: '04-06' }, // inverno, scavalca il capodanno
    { da: '05-23', a: '11-01' }, // estate
  ],
  alta: [
    { da: '12-20', a: '01-06' },
    { da: '02-01', a: '03-10' },
    { da: '07-15', a: '08-31' },
  ],
};
