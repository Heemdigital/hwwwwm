import { Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import type { Room } from '@/data/rooms';

interface Props {
  room: Room;
  onSelect: () => void;
}

export default function RoomCard({ room, onSelect }: Props) {
  const { t } = useLanguage();

  return (
    <article className="group cursor-pointer" onClick={onSelect}>
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] mb-6">
        <img
          src={room.image}
          alt={room.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
            <span className="label-small text-white text-xs px-5 py-3 border border-white/80 backdrop-blur-sm">
              {t('SCOPRI LA CAMERA', 'VIEW ROOM')}
            </span>
          </div>
        </div>
        {/* Room number badge */}
        <div className="absolute top-4 left-4 bg-ivory/90 backdrop-blur px-3 py-1.5">
          <span className="label-small text-terracotta text-[0.55rem]" style={{ letterSpacing: '0.2em' }}>
            {room.id === 'camera-01' ? '01' : '02'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Highlights pills */}
        <div className="flex flex-wrap gap-2">
          {room.highlights.map((h, i) => (
            <span
              key={i}
              className="label-small text-[0.55rem] text-stone border border-stone/40 px-2.5 py-1"
              style={{ letterSpacing: '0.15em' }}
            >
              {t(h.labelIT, h.labelEN)}
            </span>
          ))}
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-light text-charcoal leading-snug">
          {t(room.nameIT, room.nameEN)}
        </h3>

        <p className="font-body text-sm text-charcoal/60 leading-relaxed">
          {t(room.descriptionIT, room.descriptionEN)}
        </p>

        {/* Capacity */}
        <div className="flex items-center gap-1.5 text-stone">
          <Users size={13} />
          <span className="label-small text-[0.6rem]" style={{ letterSpacing: '0.15em' }}>
            {t(`FINO A ${room.capacity} OSPITI`, `UP TO ${room.capacity} GUESTS`)}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-6 pt-2">
          <button
            onClick={(e) => { e.stopPropagation(); onSelect(); }}
            className="flex items-center gap-2 label-small text-[0.65rem] text-charcoal hover:text-terracotta transition-colors duration-200 group/btn"
          >
            {t('SCOPRI LA CAMERA', 'VIEW ROOM')}
            <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const el = document.querySelector('#prenota');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="label-small text-[0.65rem] px-5 py-2.5 bg-charcoal text-white hover:bg-terracotta transition-colors duration-300"
          >
            {t('PRENOTA', 'BOOK NOW')}
          </button>
        </div>
      </div>
    </article>
  );
}
