export interface Review {
  id: string;
  authorIT: string;
  authorEN: string;
  countryIT: string;
  countryEN: string;
  score: number;
  textIT: string;
  textEN: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    authorIT: 'Marco',
    authorEN: 'Marco',
    countryIT: 'Italia',
    countryEN: 'Italy',
    score: 9.0,
    textIT: "Posizione perfetta per visitare il centro storico di Alghero. La camera è spaziosa, pulita e il balcone con vista mare è semplicemente meraviglioso. Il tramonto visto da lì vale il soggiorno.",
    textEN: "Perfect location to explore Alghero's old town. The room is spacious, clean, and the balcony with sea view is simply wonderful. The sunset from there is worth the stay.",
    date: '2024',
  },
  {
    id: 'r2',
    authorIT: 'Sophie',
    authorEN: 'Sophie',
    countryIT: 'Francia',
    countryEN: 'France',
    score: 9.2,
    textIT: "Una struttura autentica nel cuore di Alghero. La posizione è imbattibile: in pochi minuti siamo a piedi alla marina, ai ristoranti e alle torri storiche. Camera curata e silenziosa.",
    textEN: "An authentic guesthouse in the heart of Alghero. The location is unbeatable: a few minutes' walk to the marina, restaurants, and historic towers. Room is well-kept and quiet.",
    date: '2024',
  },
  {
    id: 'r3',
    authorIT: 'Thomas',
    authorEN: 'Thomas',
    countryIT: 'Germania',
    countryEN: 'Germany',
    score: 8.8,
    textIT: "Ottima scelta per chi vuole scoprire Alghero in modo autentico. La camera con vista mare è bellissima. L'accesso al centro storico e alla spiaggia è comodissimo.",
    textEN: "Great choice for experiencing Alghero authentically. The sea-view room is beautiful. Access to the old town and beach is very convenient.",
    date: '2024',
  },
  {
    id: 'r4',
    authorIT: 'Elena',
    authorEN: 'Elena',
    countryIT: 'Spagna',
    countryEN: 'Spain',
    score: 9.4,
    textIT: "La terrazza con vista sul porto è uno spazio magico al tramonto. Camera pulitissima, biancheria fresca, aria condizionata perfetta per le notti estive. Torneremo.",
    textEN: "The terrace overlooking the harbour is magical at sunset. Room spotlessly clean, fresh linen, air conditioning perfect for summer nights. We'll be back.",
    date: '2024',
  },
  {
    id: 'r5',
    authorIT: 'Giulia',
    authorEN: 'Giulia',
    countryIT: 'Italia',
    countryEN: 'Italy',
    score: 9.6,
    textIT: "Soggiorno perfetto. Posizione centralissima, due passi dal mare e dal centro storico. Camera confortevole, vista bellissima. Ci siamo sentiti a casa, non in un hotel qualunque.",
    textEN: "Perfect stay. Very central location, a short walk to the sea and old town. Comfortable room, beautiful view. We felt at home, not in just any hotel.",
    date: '2024',
  },
];
