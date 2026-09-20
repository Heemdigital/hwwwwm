export interface NavItem {
  href: string;
  labelIT: string;
  labelEN: string;
}

export const navItems: NavItem[] = [
  { href: '#camere', labelIT: 'Camere', labelEN: 'Rooms' },
  { href: '#la-casa', labelIT: 'La Casa', labelEN: 'About' },
  { href: '#esperienza', labelIT: 'Esperienza', labelEN: 'Experience' },
  { href: '#alghero', labelIT: 'Alghero', labelEN: 'Alghero' },
  { href: '#galleria', labelIT: 'Galleria', labelEN: 'Gallery' },
  { href: '#recensioni', labelIT: 'Recensioni', labelEN: 'Reviews' },
  { href: '#contatti', labelIT: 'Contatti', labelEN: 'Contact' },
];
