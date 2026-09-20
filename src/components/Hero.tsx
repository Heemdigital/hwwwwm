import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { images } from '@/data/images';

export default function Hero() {
  const { t } = useLanguage();
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `scale(1.04) translateY(${y * 0.25}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden" aria-label="Hero – Casa del Sole">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={imgRef}
          className="absolute inset-0 scale-[1.04] transition-transform duration-75 ease-linear will-change-transform"
          style={{
            backgroundImage: `url(${images.hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
          role="img"
          aria-label={images.heroAlt}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <div className="max-w-3xl">
          {/* Label */}
          <p
            className="label-small text-white/70 text-xs mb-6 animate-fade-up"
            style={{ letterSpacing: '0.25em', animationDelay: '0.2s' }}
          >
            ALGHERO · SARDEGNA
          </p>

          {/* Headline */}
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-[1.0] mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            {t('IL TUO', 'YOUR STAY')}
            <br />
            {t('SOGGIORNO', '')}
            <br />
            {t('AD ALGHERO.', 'IN ALGHERO.')}
          </h1>

          {/* Subline */}
          <p className="font-body text-white/80 text-base md:text-lg font-light mb-10 max-w-md leading-relaxed">
            {t(
              'Comfort, mare e il fascino autentico della Sardegna.',
              'Comfort, sea and the authentic spirit of Sardinia.'
            )}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('#prenota')}
              className="label-small text-xs px-8 py-4 bg-terracotta text-white hover:bg-terracotta/90 transition-colors duration-300 w-fit"
            >
              {t('PRENOTA IL TUO SOGGIORNO', 'BOOK YOUR STAY')}
            </button>
            <button
              onClick={() => scrollTo('#camere')}
              className="label-small text-xs px-8 py-4 border border-white/60 text-white hover:border-white hover:bg-white/10 transition-all duration-300 w-fit"
            >
              {t('SCOPRI LE CAMERE', 'EXPLORE ROOMS')}
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-16 hidden md:flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-white/80 animate-scroll-line" style={{ height: '40%' }} />
          </div>
          <span className="label-small text-white/50" style={{ fontSize: '0.55rem', writingMode: 'vertical-lr', letterSpacing: '0.2em' }}>
            SCROLL
          </span>
        </div>
      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        .animate-fade-up {
          animation: fade-up 1s ease forwards;
          opacity: 0;
        }
        .animate-scroll-line {
          animation: scroll-line 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
