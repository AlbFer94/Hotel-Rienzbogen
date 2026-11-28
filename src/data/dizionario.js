// Testi scritti per l'interfaccia: li legge solo il sito, non l'assistente.
// Regole: le tre lingue hanno esattamente le stesse chiavi; i segnaposto
// tra graffe ({prezzo}) li sostituisce traduci; una voce che dipende da un
// numero è un oggetto { one, other } (vedi la Guida, «Plurali»).
// Inglese: grafia britannica (kilometres, cosy), come nel concept.
export const dizionario = {
  it: {
    nav: {
      home: 'Home',
      camere: 'Camere',
      servizi: 'Servizi',
      contatti: 'Contatti',
      about: 'La nostra storia',
    },
    header: {
      apriMenu: 'Apri menu',
      chiudiMenu: 'Chiudi menu',
      cambiaLingua: 'Cambia lingua',
    },
    home: {
      titolo: 'Hotel Rienzbogen – Valdaora, Val Pusteria',
      sottotitolo: 'Legno di cirmolo, colazione dei masi e Plan de Corones a due chilometri.',
    },
    cta: {
      richiediDisponibilita: 'Richiedi disponibilità',
      scopriCamere: 'Scopri le camere',
      dettagli: 'Dettagli',
      tuttiServizi: 'Tutti i servizi',
    },
    camere: {
      titolo: 'Le nostre camere',
      tipologie: { one: '{numero} tipologia', other: '{numero} tipologie' },
      daPrezzo: 'da {prezzo} a persona', // {prezzo} arriva già formattato, con €
      ospitiMetri: {
        one: '{ospiti} ospite · {mq} m²',
        other: '{ospiti} ospiti · {mq} m²',
      },
      nessunRisultato: 'Nessuna camera per {ospiti} ospiti. Scriveteci: troviamo una soluzione.',
      nonTrovata: 'Camera non trovata',
    },
    regole: {
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      reception: 'Reception',
    },
    footer: {
      orari: 'Stagioni e orari',
      contatti: 'Contatti',
      stagioneInvernale: 'Stagione invernale',
      stagioneEstiva: 'Stagione estiva',
      notaDemo: "Progetto dimostrativo: l'Hotel Rienzbogen, i prezzi e le persone sono inventati. Le immagini sono generate con AI.",
    },
    chat: {
      apri: "Chatta con l'assistente",
      chiudi: 'Chiudi la chat',
      segnaposto: 'Scrivi una domanda…',
      invia: 'Invia',
      benvenuto: "Ciao, sono l'assistente dell'Hotel Rienzbogen. Posso rispondere a domande su camere, prezzi, servizi, orari e su come arrivare. Cosa vorreste sapere?",
      errore: 'Scusate, non ho capito la domanda. Provate a riformularla, per esempio: «Quanto costa una camera?» o «A che ora è il check-in?». Per richieste particolari scrivete alla reception.',
    },
  },

  de: {
    nav: {
      home: 'Startseite',
      camere: 'Zimmer',
      servizi: 'Leistungen',
      contatti: 'Kontakt',
      about: 'Unsere Geschichte',
    },
    header: {
      apriMenu: 'Menü öffnen',
      chiudiMenu: 'Menü schließen',
      cambiaLingua: 'Sprache wechseln',
    },
    home: {
      titolo: 'Hotel Rienzbogen – Olang, Pustertal',
      sottotitolo: 'Zirbenholz, Frühstück vom Bauernhof und der Kronplatz nur zwei Kilometer entfernt.',
    },
    cta: {
      richiediDisponibilita: 'Verfügbarkeit anfragen',
      scopriCamere: 'Zimmer entdecken',
      dettagli: 'Details',
      tuttiServizi: 'Alle Leistungen',
    },
    camere: {
      titolo: 'Unsere Zimmer',
      tipologie: { one: '{numero} Zimmertyp', other: '{numero} Zimmertypen' },
      daPrezzo: 'ab {prezzo} pro Person',
      ospitiMetri: {
        one: '{ospiti} Gast · {mq} m²',
        other: '{ospiti} Gäste · {mq} m²',
      },
      nessunRisultato: 'Kein Zimmer für {ospiti} Gäste. Schreiben Sie uns: Wir finden eine Lösung.',
      nonTrovata: 'Zimmer nicht gefunden',
    },
    regole: {
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      reception: 'Rezeption',
    },
    footer: {
      orari: 'Saisonen und Zeiten',
      contatti: 'Kontakt',
      stagioneInvernale: 'Wintersaison',
      stagioneEstiva: 'Sommersaison',
      notaDemo: 'Demo-Projekt: Das Hotel Rienzbogen, die Preise und die Personen sind frei erfunden. Die Bilder wurden mit KI erstellt.',
    },
    chat: {
      apri: 'Mit dem Assistenten chatten',
      chiudi: 'Chat schließen',
      segnaposto: 'Ihre Frage…',
      invia: 'Senden',
      benvenuto: 'Grüß Gott, ich bin der digitale Assistent des Hotel Rienzbogen. Ich beantworte gerne Ihre Fragen zu Zimmern, Preisen, Leistungen, Zeiten und Anreise. Was möchten Sie wissen?',
      errore: 'Entschuldigung, das habe ich leider nicht verstanden. Formulieren Sie Ihre Frage bitte anders, zum Beispiel: „Was kostet ein Zimmer?“ oder „Wann ist Check-in?“. Für besondere Anliegen schreiben Sie bitte der Rezeption.',
    },
  },

  en: {
    nav: {
      home: 'Home',
      camere: 'Rooms',
      servizi: 'Services',
      contatti: 'Contact',
      about: 'Our story',
    },
    header: {
      apriMenu: 'Open menu',
      chiudiMenu: 'Close menu',
      cambiaLingua: 'Change language',
    },
    home: {
      titolo: 'Hotel Rienzbogen – Olang, Puster Valley',
      sottotitolo: 'Swiss stone pine, farmhouse breakfasts and Kronplatz just two kilometres away.',
    },
    cta: {
      richiediDisponibilita: 'Request availability',
      scopriCamere: 'Discover the rooms',
      dettagli: 'Details',
      tuttiServizi: 'All services',
    },
    camere: {
      titolo: 'Our rooms',
      tipologie: { one: '{numero} room type', other: '{numero} room types' },
      daPrezzo: 'from {prezzo} per person',
      ospitiMetri: {
        one: '{ospiti} guest · {mq} m²',
        other: '{ospiti} guests · {mq} m²',
      },
      nessunRisultato: 'No room for {ospiti} guests. Write to us and we will find a solution.',
      nonTrovata: 'Room not found',
    },
    regole: {
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      reception: 'Reception',
    },
    footer: {
      orari: 'Seasons and times',
      contatti: 'Contact',
      stagioneInvernale: 'Winter season',
      stagioneEstiva: 'Summer season',
      notaDemo: 'Demo project: Hotel Rienzbogen, its prices and the people mentioned are fictional. Images are AI-generated.',
    },
    chat: {
      apri: 'Chat with the assistant',
      chiudi: 'Close the chat',
      segnaposto: 'Type a question…',
      invia: 'Send',
      benvenuto: "Hello, I'm the Hotel Rienzbogen assistant. I can answer questions about rooms, prices, services, opening times and how to get here. What would you like to know?",
      errore: 'Sorry, I didn\'t understand the question. Try rephrasing it, for example: "How much is a room?" or "What time is check-in?". For special requests, please write to reception.',
    },
  },
};
