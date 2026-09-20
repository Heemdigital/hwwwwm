import { useRef } from 'react';
import { Waves, Sun, Wind, Droplets, Tv, Coffee, CigaretteOff, Shirt } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { amenities } from '@/data/amenities';
import { useInView } from '@/hooks/useInView';

const iconMap: Record<string, React.ElementType> = {
  waves: Waves,
  sun: Sun,
  wind: Wind,
  droplets: Droplets,
  tv: Tv,
  coffee: Coffee,
  'cigarette-off': CigaretteOff,
  shirt: Shirt,
};

export default function Amenities() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section className="py-24 md:py-36 bg-ivory">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="label-small text-terracotta text-[0.65rem] mb-4" style={{ letterSpacing: '0.25em' }}>
            {t('DOTAZIONI', 'AMENITIES')}
          </p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-4"
            style={{ letterSpacing: '-0.01em' }}
          >
            {t('Semplicità, comfort, Alghero.', 'Simplicity, comfort, Alghero.')}
          </h2>
          <div className="w-12 h-px bg-sand mb-16 md:mb-20" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-14">
          {amenities.map((item, i) => {
            const Icon = iconMap[item.icon] || Sun;
            return (
              <div
                key={item.icon}
                className={`group transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${100 + i * 60}ms` }}
              >
                <div className="flex flex-col gap-3">
                  <div className="w-8 h-8 flex items-center justify-center text-terracotta/80 group-hover:text-terracotta transition-colors duration-200">
                    <Icon size={22} strokeWidth={1.25} />
                  </div>
                  <div>
                    <p className="font-display text-lg md:text-xl font-light text-charcoal mb-1">
                      {t(item.labelIT, item.labelEN)}
                    </p>
                    {item.descriptionIT && (
                      <p className="font-body text-xs text-charcoal/50 leading-relaxed">
                        {t(item.descriptionIT, item.descriptionEN || '')}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
