export interface Amenity {
  icon: string;
  labelIT: string;
  labelEN: string;
  descriptionIT?: string;
  descriptionEN?: string;
}

export const amenities: Amenity[] = [
  {
    icon: 'waves',
    labelIT: 'Vista Mare',
    labelEN: 'Sea View',
    descriptionIT: 'Panorama sul Mediterraneo',
    descriptionEN: 'Mediterranean panorama',
  },
  {
    icon: 'sun',
    labelIT: 'Terrazza',
    labelEN: 'Terrace',
    descriptionIT: 'Spazio esterno comune',
    descriptionEN: 'Shared outdoor space',
  },
  {
    icon: 'wind',
    labelIT: 'Aria Condizionata',
    labelEN: 'Air Conditioning',
    descriptionIT: 'Clima in tutte le camere',
    descriptionEN: 'Climate control in all rooms',
  },
  {
    icon: 'droplets',
    labelIT: 'Bagno Privato',
    labelEN: 'Private Bathroom',
    descriptionIT: 'Ogni camera ha il suo bagno',
    descriptionEN: 'Every room has its own bathroom',
  },
  {
    icon: 'tv',
    labelIT: 'TV',
    labelEN: 'Flat-screen TV',
    descriptionIT: 'Televisore a schermo piatto',
    descriptionEN: 'Flat-screen television',
  },
  {
    icon: 'coffee',
    labelIT: 'Bollitore',
    labelEN: 'Electric Kettle',
    descriptionIT: 'Bollitore elettrico in camera',
    descriptionEN: 'In-room electric kettle',
  },
  {
    icon: 'cigarette-off',
    labelIT: 'Non Fumatori',
    labelEN: 'Non-smoking',
    descriptionIT: 'Tutte le camere non fumatori',
    descriptionEN: 'All rooms are non-smoking',
  },
  {
    icon: 'shirt',
    labelIT: 'Biancheria',
    labelEN: 'Linen & Towels',
    descriptionIT: 'Asciugamani e lenzuola inclusi',
    descriptionEN: 'Towels and linen included',
  },
];
