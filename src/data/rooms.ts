import { images } from './images';

export interface Room {
  id: string;
  nameIT: string;
  nameEN: string;
  descriptionIT: string;
  descriptionEN: string;
  longDescriptionIT: string;
  longDescriptionEN: string;
  capacity: number;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  amenities: string[];
  highlights: { labelIT: string; labelEN: string }[];
  bookingUrl: string;
}

export const rooms: Room[] = [
  {
    id: 'camera-01',
    nameIT: 'Camera Matrimoniale con Balcone e Vista Mare',
    nameEN: 'Double Room with Balcony and Sea View',
    descriptionIT: 'Luce, mare e una terrazza tutta per voi.',
    descriptionEN: 'Light, sea and a private balcony just for you.',
    longDescriptionIT:
      "La nostra camera con vista mare offre un'esperienza autentica di Alghero. Svegliarsi con il profumo del Mediterraneo, la luce che cambia sul mare, il silenzio del primo mattino. Il balcone privato incornicia una vista sulla città e sul mare che non si dimentica facilmente. Arredi essenziali, qualità italiana, tutto ciò che serve per soggiornare con comfort e stile.",
    longDescriptionEN:
      'Our sea-view room offers an authentic Alghero experience. Waking up to the scent of the Mediterranean, light shifting on the water, the quiet of early morning. The private balcony frames a view over the city and sea that stays with you. Simple furnishings, Italian quality, everything you need to stay in comfort and style.',
    capacity: 2,
    image: images.room1,
    imageAlt: images.room1Alt,
    gallery: [
      { src: images.room1, alt: images.room1Alt },
      { src: images.balcony, alt: images.balconyAlt },
      { src: images.intro, alt: images.introAlt },
      { src: images.terrace, alt: images.terraceAlt },
    ],
    amenities: [
      'Letto matrimoniale king size',
      'Balcone privato',
      'Vista mare e città',
      'Aria condizionata',
      'Bagno privato',
      'TV schermo piatto',
      'Bollitore elettrico',
      'Armadio',
      'Asciugacapelli',
      'Biancheria e asciugamani',
      'Camera non fumatori',
    ],
    highlights: [
      { labelIT: 'Vista mare', labelEN: 'Sea view' },
      { labelIT: 'Balcone privato', labelEN: 'Private balcony' },
      { labelIT: 'Fino a 2 ospiti', labelEN: 'Up to 2 guests' },
    ],
    bookingUrl: '#prenota',
  },
  {
    id: 'camera-02',
    nameIT: 'Camera Matrimoniale con Bagno Privato',
    nameEN: 'Double Room with Private Bathroom',
    descriptionIT: 'Comfort elegante nel cuore di Alghero.',
    descriptionEN: 'Elegant comfort in the heart of Alghero.',
    longDescriptionIT:
      'Una camera sobria e confortevole, pensata per chi vuole ritrovarsi in un ambiente ordinato e tranquillo dopo le passeggiate nel centro storico. Affacciata sulla città, con accesso alla terrazza condivisa della struttura. Ogni dettaglio è curato per garantire un soggiorno piacevole, senza elementi superflui.',
    longDescriptionEN:
      'A composed, comfortable room designed for those who want a calm, tidy space after exploring the old town. Overlooking the city, with access to the shared terrace. Every detail is considered to ensure a pleasant stay, without unnecessary fuss.',
    capacity: 2,
    image: images.room2,
    imageAlt: images.room2Alt,
    gallery: [
      { src: images.room2, alt: images.room2Alt },
      { src: images.terrace, alt: images.terraceAlt },
      { src: images.oldtown1, alt: images.oldtown1Alt },
      { src: images.balcony, alt: images.balconyAlt },
    ],
    amenities: [
      'Letto matrimoniale king size',
      'Vista città',
      'Aria condizionata',
      'Bagno privato',
      'TV schermo piatto',
      'Bollitore elettrico',
      'Armadio',
      'Asciugacapelli',
      'Biancheria e asciugamani',
      'Terrazza condivisa',
      'Camera non fumatori',
    ],
    highlights: [
      { labelIT: 'Vista città', labelEN: 'City view' },
      { labelIT: 'Terrazza', labelEN: 'Shared terrace' },
      { labelIT: 'Fino a 2 ospiti', labelEN: 'Up to 2 guests' },
    ],
    bookingUrl: '#prenota',
  },
];
