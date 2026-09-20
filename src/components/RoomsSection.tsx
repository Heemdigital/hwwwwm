import { useRef, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useInView } from '@/hooks/useInView';
import { rooms } from '@/data/rooms';
import RoomCard from './RoomCard';
import RoomDetailModal from './RoomDetailModal';
import type { Room } from '@/data/rooms';

export default function RoomsSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section id="camere" className="py-24 md:py-36 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-16 md:mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="label-small text-terracotta text-[0.65rem] mb-4" style={{ letterSpacing: '0.25em' }}>
            {t('CAMERE', 'ROOMS')}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal" style={{ letterSpacing: '-0.01em' }}>
              {t('Le nostre camere.', 'Our rooms.')}
            </h2>
            <p className="font-body text-sm text-charcoal/60 max-w-xs leading-relaxed">
              {t(
                'Due camere curate, ognuna con la propria personalità e il suo modo di vivere Alghero.',
                'Two considered rooms, each with its own personality and its own way of experiencing Alghero.'
              )}
            </p>
          </div>
          <div className="w-16 h-px bg-sand mt-6" />
        </div>

        {/* Rooms grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {rooms.map((room, i) => (
            <div
              key={room.id}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <RoomCard room={room} onSelect={() => setSelectedRoom(room)} />
            </div>
          ))}
        </div>
      </div>

      {selectedRoom && (
        <RoomDetailModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </section>
  );
}
