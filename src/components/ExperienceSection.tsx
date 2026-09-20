import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useInView } from '@/hooks/useInView';
import { images } from '@/data/images';

interface Experience {
  labelIT: string;
  labelEN: string;
  titleIT: string;
  titleEN: string;
  descriptionIT: string;
  descriptionEN: string;
  image: string;
  imageAlt: string;
}

const experiences: Experience[] = [
  {
    labelIT: 'MARE',
    labelEN: 'SEA',
    titleIT: 'Acque cristalline',
    titleEN: 'Crystal waters',
    descriptionIT: 'Le spiagge di Alghero e della Riviera del Corallo, con le loro acque turchesi, sono a pochi minuti a piedi o in bici dalla struttura.',
    descriptionEN: "Alghero's beaches and the Riviera del Corallo, with their turquoise waters, are minutes away on foot or by bike.",
    image: images.beach2,
    imageAlt: images.beach2Alt,
  },
  {
    labelIT: 'CENTRO STORICO',
    labelEN: 'OLD TOWN',
    titleIT: 'Tra le mura catalane',
    titleEN: 'Within the Catalan walls',
    descriptionIT: "I caruggi di Alghero, i bastioni medievali, le torri affacciate sul mare: il centro storico è unico nel suo genere, con un'anima catalana ancora viva.",
    descriptionEN: "Alghero's lanes, medieval bastions, and sea-facing towers form a historic centre unique in character, with its Catalan soul still alive.",
    image: images.oldtown1,
    imageAlt: images.oldtown1Alt,
  },
  {
    labelIT: 'TRAMONTI',
    labelEN: 'SUNSETS',
    titleIT: 'La luce della sera',
    titleEN: 'Evening light',
    descriptionIT: "I tramonti sul Golfo di Alghero sono famosi in tutta la Sardegna. Dalla terrazza o dai bastioni, lo spettacolo è sempre lo stesso: indimenticabile.",
    descriptionEN: 'Sunsets over the Gulf of Alghero are famous across Sardinia. From the terrace or the bastions, the spectacle is always the same: unforgettable.',
    image: images.sunset,
    imageAlt: images.sunsetAlt,
  },
  {
    labelIT: 'RISTORANTI',
    labelEN: 'RESTAURANTS',
    titleIT: 'Cucina di mare',
    titleEN: 'Seafood cuisine',
    descriptionIT: "Bottarga, aragosta, fregola ai frutti di mare: la cucina algherese è una delle più ricche della Sardegna. I migliori ristoranti sono a due passi.",
    descriptionEN: "Bottarga, lobster, seafood fregola: Algherese cuisine is among Sardinia's finest. The best restaurants are on your doorstep.",
    image: images.food,
    imageAlt: images.foodAlt,
  },
];

export default function ExperienceSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.08 });

  return (
    <section id="esperienza" className="py-24 md:py-36 bg-ivory overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={ref}
          className={`mb-16 md:mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="label-small text-terracotta text-[0.65rem] mb-4" style={{ letterSpacing: '0.25em' }}>
            {t('NEI DINTORNI', 'NEARBY')}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal" style={{ letterSpacing: '-0.01em' }}>
              {t('Cosa scoprire nei dintorni.', 'What to discover nearby.')}
            </h2>
            <p className="font-body text-sm text-charcoal/60 max-w-xs">
              {t(
                'Casa del Sole non organizza tour o escursioni. Ma Alghero offre tutto quello che serve.',
                'Casa del Sole does not organise tours. But Alghero offers everything you need.'
              )}
            </p>
          </div>
          <div className="w-12 h-px bg-sand mt-6" />
        </div>

        {/* Experience grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((exp, i) => (
            <div
              key={exp.labelIT}
              className={`group transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] mb-5">
                <img
                  src={exp.image}
                  alt={exp.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="label-small text-[0.55rem] text-white bg-charcoal/60 backdrop-blur-sm px-3 py-1.5" style={{ letterSpacing: '0.2em' }}>
                    {t(exp.labelIT, exp.labelEN)}
                  </span>
                </div>
              </div>

              {/* Text */}
              <h3 className="font-display text-2xl md:text-3xl font-light text-charcoal mb-2">
                {t(exp.titleIT, exp.titleEN)}
              </h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                {t(exp.descriptionIT, exp.descriptionEN)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
