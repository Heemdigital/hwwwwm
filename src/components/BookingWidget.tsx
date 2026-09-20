import { useState } from 'react';
import { Calendar, Users, ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { rooms } from '@/data/rooms';

export default function BookingWidget() {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (checkIn && checkOut) {
      setShowResults(true);
    }
  };

  return (
    <section id="prenota" className="py-24 md:py-36 bg-charcoal">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="label-small text-terracotta text-[0.65rem] mb-4" style={{ letterSpacing: '0.25em' }}>
            {t('PRENOTAZIONE DIRETTA', 'DIRECT BOOKING')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ivory mb-4" style={{ letterSpacing: '-0.01em' }}>
            {t('Prenota il tuo soggiorno.', 'Book your stay.')}
          </h2>
          <p className="font-body text-sm text-ivory/50 max-w-md">
            {t(
              'Prenota direttamente con noi per la migliore tariffa disponibile.',
              'Book directly with us for the best available rate.'
            )}
          </p>
        </div>

        {/* Booking form */}
        <div className="bg-ivory/5 border border-ivory/10 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
            {/* Check-in */}
            <div className="space-y-2">
              <label className="label-small text-ivory/50 text-[0.6rem]" style={{ letterSpacing: '0.2em' }}>
                {t('CHECK-IN', 'CHECK-IN')}
              </label>
              <div className="relative">
                <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-ivory/8 border border-ivory/20 text-ivory pl-10 pr-3 py-3.5 text-sm font-body focus:outline-none focus:border-terracotta transition-colors [color-scheme:dark] placeholder:text-ivory/40"
                  style={{ colorScheme: 'dark' }}
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="space-y-2">
              <label className="label-small text-ivory/50 text-[0.6rem]" style={{ letterSpacing: '0.2em' }}>
                {t('CHECK-OUT', 'CHECK-OUT')}
              </label>
              <div className="relative">
                <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || new Date().toISOString().split('T')[0]}
                  className="w-full bg-ivory/8 border border-ivory/20 text-ivory pl-10 pr-3 py-3.5 text-sm font-body focus:outline-none focus:border-terracotta transition-colors [color-scheme:dark]"
                  style={{ colorScheme: 'dark' }}
                />
              </div>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label className="label-small text-ivory/50 text-[0.6rem]" style={{ letterSpacing: '0.2em' }}>
                {t('OSPITI', 'GUESTS')}
              </label>
              <div className="relative">
                <Users size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-ivory/8 border border-ivory/20 text-ivory pl-10 pr-8 py-3.5 text-sm font-body focus:outline-none focus:border-terracotta transition-colors appearance-none cursor-pointer"
                  style={{ colorScheme: 'dark' }}
                >
                  <option value={1} className="bg-charcoal">1 {t('ospite', 'guest')}</option>
                  <option value={2} className="bg-charcoal">2 {t('ospiti', 'guests')}</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
              </div>
            </div>

            {/* Search button */}
            <div className="space-y-2">
              <label className="label-small text-transparent text-[0.6rem]">–</label>
              <button
                onClick={handleSearch}
                className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-3.5 label-small text-xs transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {t('VERIFICA DISPONIBILITÀ', 'CHECK AVAILABILITY')}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Results */}
          {showResults && (
            <div className="border-t border-ivory/10 pt-8 mt-4">
              <p className="label-small text-ivory/50 text-[0.6rem] mb-6" style={{ letterSpacing: '0.2em' }}>
                {t('CAMERE DISPONIBILI', 'AVAILABLE ROOMS')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className={`border p-5 cursor-pointer transition-all duration-300 ${
                      selectedRoom === room.id
                        ? 'border-terracotta bg-terracotta/5'
                        : 'border-ivory/20 hover:border-ivory/40'
                    }`}
                    onClick={() => setSelectedRoom(room.id)}
                  >
                    <div className="flex gap-4">
                      <img
                        src={room.image}
                        alt={room.imageAlt}
                        className="w-20 h-20 object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-lg font-light text-ivory leading-snug mb-1">
                          {t(room.nameIT, room.nameEN)}
                        </p>
                        <p className="label-small text-stone text-[0.55rem] mb-3">
                          {t(`FINO A ${room.capacity} OSPITI`, `UP TO ${room.capacity} GUESTS`)}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {room.highlights.slice(0, 2).map((h, i) => (
                            <span key={i} className="label-small text-[0.5rem] text-stone/80 border border-stone/30 px-2 py-0.5">
                              {t(h.labelIT, h.labelEN)}
                            </span>
                          ))}
                        </div>
                        <p className="label-small text-ivory/40 text-[0.55rem]">
                          {t('Tariffa su richiesta', 'Rate on request')}
                        </p>
                      </div>
                    </div>
                    {selectedRoom === room.id && (
                      <div className="mt-4 pt-4 border-t border-terracotta/20">
                        <a
                          href="https://www.booking.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="label-small text-xs px-6 py-3 bg-terracotta text-white hover:bg-terracotta/90 transition-colors inline-block"
                        >
                          {t('PRENOTA ORA', 'BOOK NOW')}
                        </a>
                        <p className="label-small text-ivory/30 text-[0.55rem] mt-2">
                          {t('Reindirizzamento al sistema di prenotazione', 'Redirect to booking system')}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Demo notice */}
              <div className="mt-6 p-4 border border-terracotta/20 bg-terracotta/5">
                <p className="label-small text-terracotta/70 text-[0.6rem]">
                  {t(
                    'DEMO — La disponibilità reale sarà integrata con un sistema di prenotazione. Contattaci direttamente per verificare le date.',
                    'DEMO — Real availability will be integrated with a booking engine. Contact us directly to confirm your dates.'
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
