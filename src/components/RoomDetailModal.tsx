import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Users, Check } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import type { Room } from '@/data/rooms';

interface Props {
  room: Room;
  onClose: () => void;
}

export default function RoomDetailModal({ room, onClose }: Props) {
  const { t } = useLanguage();
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setActiveImg((p) => (p + 1) % room.gallery.length);
      if (e.key === 'ArrowLeft') setActiveImg((p) => (p - 1 + room.gallery.length) % room.gallery.length);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, room.gallery.length]);

  const prev = () => setActiveImg((p) => (p - 1 + room.gallery.length) % room.gallery.length);
  const next = () => setActiveImg((p) => (p + 1) % room.gallery.length);

  const bookAndClose = () => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector('#prenota');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-charcoal/80 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-ivory w-full max-w-5xl mx-4 my-8 md:mx-auto shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-ivory/90 p-2 hover:bg-sand transition-colors"
          aria-label="Chiudi"
        >
          <X size={18} />
        </button>

        {/* Gallery */}
        <div className="relative aspect-[16/9] overflow-hidden bg-stone/20">
          <img
            src={room.gallery[activeImg].src}
            alt={room.gallery[activeImg].alt}
            className="w-full h-full object-cover transition-opacity duration-500"
            key={activeImg}
          />
          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-ivory/80 hover:bg-ivory p-2 transition-all"
            aria-label={t('Immagine precedente', 'Previous image')}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-ivory/80 hover:bg-ivory p-2 transition-all"
            aria-label={t('Immagine successiva', 'Next image')}
          >
            <ChevronRight size={20} />
          </button>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {room.gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeImg ? 'bg-white scale-125' : 'bg-white/50'}`}
                aria-label={`Immagine ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <p className="label-small text-terracotta text-[0.6rem] mb-3" style={{ letterSpacing: '0.25em' }}>
              {room.id === 'camera-01' ? 'CAMERA 01' : 'CAMERA 02'}
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-light text-charcoal mb-4 leading-snug">
              {t(room.nameIT, room.nameEN)}
            </h2>
            <div className="flex items-center gap-2 text-stone mb-6">
              <Users size={14} />
              <span className="label-small text-[0.6rem]">
                {t(`FINO A ${room.capacity} OSPITI`, `UP TO ${room.capacity} GUESTS`)}
              </span>
            </div>
            <p className="font-body text-sm text-charcoal/70 leading-[1.8]">
              {t(room.longDescriptionIT, room.longDescriptionEN)}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={bookAndClose}
                className="label-small text-xs px-8 py-4 bg-terracotta text-white hover:bg-terracotta/90 transition-colors duration-300 w-full md:w-fit"
              >
                {t('PRENOTA QUESTA CAMERA', 'BOOK THIS ROOM')}
              </button>
              <button
                onClick={bookAndClose}
                className="label-small text-xs px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 w-full md:w-fit"
              >
                {t('VERIFICA DISPONIBILITÀ', 'CHECK AVAILABILITY')}
              </button>
            </div>
          </div>

          {/* Right – amenities */}
          <div>
            <p className="label-small text-stone text-[0.6rem] mb-5" style={{ letterSpacing: '0.2em' }}>
              {t('DOTAZIONI', 'AMENITIES')}
            </p>
            <ul className="space-y-3">
              {room.amenities.map((a, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={13} className="text-terracotta flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-charcoal/70">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
