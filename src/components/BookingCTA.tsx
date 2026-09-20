import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useInView } from '@/hooks/useInView';
import { images } from '@/data/images';

export default function BookingCTA() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative py-32 md:py-44 overflow-hidden"
      style={{
        backgroundImage: `url(${images.terrace})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/75" />

      <div
        ref={ref}
        className={`relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 text-center transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="label-small text-sand/50 text-[0.65rem] mb-6" style={{ letterSpacing: '0.3em' }}>
          CASA DEL SOLE · ALGHERO
        </p>
        <h2
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-ivory mb-6 leading-[1.05]"
          style={{ letterSpacing: '-0.02em' }}
        >
          {t('Vivi Alghero', 'Experience Alghero')}
          <br />
          <em className="text-sand/80">{t('a modo tuo.', 'your way.')}</em>
        </h2>
        <p className="font-body text-ivory/60 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
          {t(
            'Scopri Casa del Sole Guest Rooms e prenota il tuo soggiorno direttamente con noi.',
            'Discover Casa del Sole Guest Rooms and book your stay directly with us.'
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('#prenota')}
            className="label-small text-xs px-10 py-4 bg-terracotta text-white hover:bg-terracotta/90 transition-colors duration-300"
          >
            {t('VERIFICA DISPONIBILITÀ', 'CHECK AVAILABILITY')}
          </button>
          <button
            onClick={() => scrollTo('#prenota')}
            className="label-small text-xs px-10 py-4 border border-white/40 text-white hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            {t('PRENOTA', 'BOOK NOW')}
          </button>
        </div>
      </div>
    </section>
  );
}
