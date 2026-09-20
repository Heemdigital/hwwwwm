import { useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { images } from '@/data/images';

export default function SeaStory() {
  const { t } = useLanguage();
  const imgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / rect.height;
      imgRef.current.style.transform = `scale(1.08) translateY(${progress * 30}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] min-h-[500px] overflow-hidden"
      aria-label={t('Vista sul mare di Alghero', 'Sea view Alghero')}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={imgRef}
          className="absolute inset-0 scale-[1.08] will-change-transform"
          style={{
            backgroundImage: `url(${images.seaStory})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          role="img"
          aria-label={images.seaStoryAlt}
        />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          <h2
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-[1.0]"
            style={{ letterSpacing: '-0.02em' }}
          >
            {t('IL MARE.', 'THE SEA.')}
            <br />
            {t('LA LUCE.', 'THE LIGHT.')}
            <br />
            <em className="text-sand/90">ALGHERO.</em>
          </h2>
          <div className="mt-10 w-px h-12 bg-white/30 mx-auto" />
        </div>
      </div>
    </section>
  );
}
