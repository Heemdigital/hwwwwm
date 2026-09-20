import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { images } from '@/data/images';
import { useInView } from '@/hooks/useInView';

export default function Intro() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section id="la-casa" className="py-24 md:py-36 bg-ivory overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Label */}
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="label-small text-terracotta text-[0.65rem] mb-16 md:mb-20" style={{ letterSpacing: '0.25em' }}>
            CASA DEL SOLE · ALGHERO
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text column */}
          <div
            className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08] text-charcoal mb-8"
              style={{ letterSpacing: '-0.01em' }}
            >
              {t(
                'Un luogo da vivere, non solo dove soggiornare.',
                'A place to be lived, not just stayed in.'
              )}
            </h2>

            <div className="w-12 h-px bg-terracotta mb-8" />

            <div className="space-y-5 text-charcoal/70 text-sm md:text-base leading-[1.75] font-light font-body">
              <p>
                {t(
                  'Casa del Sole è una piccola struttura ricettiva nel cuore di Alghero, a pochi passi dalle antiche mura catalane e dal profumo salato del Mediterraneo.',
                  'Casa del Sole is a small guesthouse in the heart of Alghero, steps from the old Catalan walls and the salt air of the Mediterranean.'
                )}
              </p>
              <p>
                {t(
                  'Non una grande catena, non un hotel anonimo. Un rifugio tranquillo, curato nei dettagli, dove la luce del mattino entra dai balconi e il mare è sempre a portata di sguardo.',
                  'Not a large chain, not an anonymous hotel. A quiet, considered retreat where morning light falls through the balconies and the sea is always within sight.'
                )}
              </p>
              <p>
                {t(
                  'Il centro storico, la marina, le spiagge della Riviera del Corallo: tutto è vicino. Ma da qui, è facile fermarsi.',
                  'The historic centre, the marina, the beaches of the Riviera del Corallo — all close. But from here, it\'s easy to simply stay.'
                )}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-stone" />
                <span className="label-small text-stone text-[0.6rem]">VIA XX SETTEMBRE, 1</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-stone" />
                <span className="label-small text-stone text-[0.6rem]">07041 ALGHERO (SS)</span>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div
            className={`relative transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <img
                src={images.intro}
                alt={images.introAlt}
                className="w-full h-full object-cover img-reveal hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Score overlay */}
              <div className="absolute bottom-6 left-6 bg-ivory/95 backdrop-blur px-5 py-4">
                <p className="label-small text-terracotta text-[0.55rem] mb-1" style={{ letterSpacing: '0.2em' }}>
                  {t('VALUTAZIONE OSPITI', 'GUEST SCORE')}
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-light text-charcoal">8.9</span>
                  <span className="label-small text-stone text-[0.6rem]">/ 10</span>
                </div>
                <p className="label-small text-stone text-[0.55rem] mt-0.5">
                  {t('POSIZIONE', 'LOCATION')} 9.7
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-sand/50 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
