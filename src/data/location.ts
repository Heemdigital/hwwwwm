export interface NearbyPlace {
  id: string;
  nameIT: string;
  nameEN: string;
  distance: string;
  descriptionIT: string;
  descriptionEN: string;
  icon: string;
}

export const nearbyPlaces: NearbyPlace[] = [
  {
    id: 'chiesa-san-michele',
    nameIT: 'Chiesa di San Michele',
    nameEN: 'Church of St Michael',
    distance: '200 m',
    descriptionIT: 'Gioiello barocco del centro storico',
    descriptionEN: 'Baroque gem of the historic centre',
    icon: 'landmark',
  },
  {
    id: 'torre-porta-terra',
    nameIT: 'Torre di Porta Terra',
    nameEN: 'Torre di Porta Terra',
    distance: '200 m',
    descriptionIT: 'La porta storica di accesso alla città',
    descriptionEN: 'The historic city gateway tower',
    icon: 'castle',
  },
  {
    id: 'marina',
    nameIT: 'Marina di Alghero',
    nameEN: 'Alghero Marina',
    distance: '~10 min a piedi',
    descriptionIT: 'Il porto turistico e le barche',
    descriptionEN: 'The marina and sailing boats',
    icon: 'anchor',
  },
  {
    id: 'spiaggia-las-tronas',
    nameIT: 'Spiaggia di Las Tronas',
    nameEN: 'Las Tronas Beach',
    distance: '850 m',
    descriptionIT: 'La spiaggia urbana più vicina',
    descriptionEN: 'The nearest urban beach',
    icon: 'waves',
  },
  {
    id: 'lido-alghero',
    nameIT: 'Lido di Alghero',
    nameEN: 'Lido di Alghero Beach',
    distance: '1.1 km',
    descriptionIT: 'Spiaggia attrezzata con sabbia fine',
    descriptionEN: 'Well-equipped beach with fine sand',
    icon: 'sun',
  },
  {
    id: 'maria-pia',
    nameIT: 'Spiaggia Maria Pia',
    nameEN: 'Maria Pia Beach',
    distance: '3.1 km',
    descriptionIT: 'Ampia spiaggia nella pineta',
    descriptionEN: 'Broad beach set in a pine forest',
    icon: 'trees',
  },
  {
    id: 'aeroporto',
    nameIT: 'Aeroporto di Alghero',
    nameEN: 'Alghero Airport',
    distance: '10 km',
    descriptionIT: 'Fertilia – Riviera del Corallo',
    descriptionEN: 'Fertilia – Riviera del Corallo',
    icon: 'plane',
  },
];
