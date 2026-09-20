import { images } from './images';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  categoryIT: string;
  categoryEN: string;
  wide?: boolean;
  tall?: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: images.hero,
    alt: images.heroAlt,
    categoryIT: 'VISTA MARE',
    categoryEN: 'SEA VIEW',
    wide: true,
  },
  {
    id: 'g2',
    src: images.room1,
    alt: images.room1Alt,
    categoryIT: 'CAMERE',
    categoryEN: 'ROOMS',
  },
  {
    id: 'g3',
    src: images.terrace,
    alt: images.terraceAlt,
    categoryIT: 'TERRAZZA',
    categoryEN: 'TERRACE',
    tall: true,
  },
  {
    id: 'g4',
    src: images.oldtown1,
    alt: images.oldtown1Alt,
    categoryIT: 'ALGHERO',
    categoryEN: 'ALGHERO',
    wide: true,
  },
  {
    id: 'g5',
    src: images.room2,
    alt: images.room2Alt,
    categoryIT: 'CAMERE',
    categoryEN: 'ROOMS',
  },
  {
    id: 'g6',
    src: images.beach1,
    alt: images.beach1Alt,
    categoryIT: 'NEI DINTORNI',
    categoryEN: 'NEARBY',
  },
  {
    id: 'g7',
    src: images.balcony,
    alt: images.balconyAlt,
    categoryIT: 'TERRAZZA',
    categoryEN: 'TERRACE',
    wide: true,
  },
  {
    id: 'g8',
    src: images.oldtown2,
    alt: images.oldtown2Alt,
    categoryIT: 'ALGHERO',
    categoryEN: 'ALGHERO',
    tall: true,
  },
  {
    id: 'g9',
    src: images.beach2,
    alt: images.beach2Alt,
    categoryIT: 'NEI DINTORNI',
    categoryEN: 'NEARBY',
  },
  {
    id: 'g10',
    src: images.marina,
    alt: images.marinaAlt,
    categoryIT: 'ALGHERO',
    categoryEN: 'ALGHERO',
  },
  {
    id: 'g11',
    src: images.sunset,
    alt: images.sunsetAlt,
    categoryIT: 'VISTA MARE',
    categoryEN: 'SEA VIEW',
    wide: true,
  },
  {
    id: 'g12',
    src: images.oldtown3,
    alt: images.oldtown3Alt,
    categoryIT: 'ALGHERO',
    categoryEN: 'ALGHERO',
    tall: true,
  },
];
