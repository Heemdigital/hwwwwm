import { useRef } from 'react';
import { Landmark, Anchor, Waves, Sun, TreePine, Plane, Castle, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { nearbyPlaces } from '@/data/location';
import { useInView } from '@/hooks/useInView';
import { images } from '@/data/images';

const iconMap: Record<string, React.ElementType> = {
  landmark: Landmark,
  castle: Castle,
  anchor: Anchor,
  waves: Waves,
  sun: Sun,
  trees: TreePine,
  plane: Plane,
};

export default function LocationSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="alghero" className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="label-small text-terracotta text-[0.65rem] mb-4" style={{ letterSpacing: '0.25em' }}>
            {t('POSIZIONE', 'LOCATION')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-4" style={{ letterSpacing: '-0.01em' }}>
            {t('Alghero, da scoprire a piedi.', 'Alghero, best explored on foot.')}
          </h2>
          <div className="w-12 h-px bg-sand" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Distances */}
          <div
            className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-10 max-w-sm">
              {t(
                'In posizione centralissima, Casa del Sole è il punto di partenza ideale per esplorare Alghero e la costa sarda. Tutto ciò che conta è a pochi passi.',
                'Centrally positioned, Casa del Sole is the ideal base for exploring Alghero and the Sardinian coast. Everything that matters is within reach.'
              )}
            </p>

            {/* Distance timeline */}
            <div className="space-y-0">
              {nearbyPlaces.map((place, i) => {
                const Icon = iconMap[place.icon] || MapPin;
                return (
                  <div
                    key={place.id}
                    className={`flex items-start gap-5 py-4 border-b border-stone/20 transition-all duration-500 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${200 + i * 80}ms` }}
                  >
                    {/* Icon */}
                    <div className="w-8 h-8 flex items-center justify-center text-terracotta/60 flex-shrink-0 mt-0.5">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-lg font-light text-charcoal">
                        {t(place.nameIT, place.nameEN)}
                      </p>
                      <p className="font-body text-xs text-charcoal/50 mt-0.5">
                        {t(place.descriptionIT, place.descriptionEN)}
                      </p>
                    </div>

                    {/* Distance */}
                    <div className="flex-shrink-0">
                      <span className="label-small text-terracotta text-[0.6rem]" style={{ letterSpacing: '0.1em' }}>
                        {place.distance}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <a
                href="https://maps.google.com/?q=Via+XX+Settembre+1+Alghero+Sardinia"
                target="_blank"
                rel="noopener noreferrer"
                className="label-small text-xs px-7 py-3.5 border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300 inline-flex items-center gap-2"
              >
                <MapPin size={13} />
                {t('SCOPRI ALGHERO', 'EXPLORE ALGHERO')}
              </a>
            </div>
          </div>

          {/* Images collage */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 overflow-hidden aspect-[16/9]">
                <img
                  src={images.oldtown1}
                  alt={images.oldtown1Alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden aspect-square">
                <img
                  src={images.marina}
                  alt={images.marinaAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden aspect-square">
                <img
                  src={images.beach1}
                  alt={images.beach1Alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Address card */}
            <div className="mt-3 p-5 bg-ivory border border-sand/50 flex items-start gap-3">
              <MapPin size={15} className="text-terracotta flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-display text-base font-light text-charcoal">Casa del Sole Guest Rooms</p>
                <p className="font-body text-xs text-charcoal/60 mt-1">Via XX Settembre, n.1 · 07041 Alghero (SS)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
