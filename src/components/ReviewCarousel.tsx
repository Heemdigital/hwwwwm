import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { reviews } from '@/data/reviews';
import { property } from '@/data/property';
import { useInView } from '@/hooks/useInView';

export default function ReviewCarousel() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  const prev = () => setActive((p) => (p - 1 + reviews.length) % reviews.length);
  const next = () => setActive((p) => (p + 1) % reviews.length);

  const review = reviews[active];

  return (
    <section id="recensioni" className="py-24 md:py-36 bg-olive overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="label-small text-sand/60 text-[0.65rem] mb-4" style={{ letterSpacing: '0.25em' }}>
            {t('RECENSIONI', 'REVIEWS')}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ivory" style={{ letterSpacing: '-0.01em' }}>
              {t('Cosa dicono i nostri ospiti.', 'What our guests say.')}
            </h2>
            {/* Score cards */}
            <div className="flex gap-8">
              <div>
                <p className="font-display text-4xl font-light text-ivory">
                  {property.scores.overall}
                </p>
                <p className="label-small text-sand/60 text-[0.6rem] mt-1">
                  {t('VALUTAZIONE', 'OVERALL')}
                </p>
              </div>
              <div className="w-px bg-sand/20" />
              <div>
                <p className="font-display text-4xl font-light text-ivory">
                  {property.scores.location}
                </p>
                <p className="label-small text-sand/60 text-[0.6rem] mt-1">
                  {t('POSIZIONE', 'LOCATION')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="relative bg-ivory/5 border border-ivory/10 p-8 md:p-12 lg:p-16 min-h-[280px]">
            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.round(review.score / 2) ? 'text-sand fill-sand' : 'text-sand/30'}
                />
              ))}
              <span className="label-small text-sand/50 text-[0.6rem] ml-3 mt-0.5">
                {review.score} / 10
              </span>
            </div>

            {/* Quote */}
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-light text-ivory leading-[1.5] mb-8 max-w-3xl">
              "
              {t(review.textIT, review.textEN)}
              "
            </blockquote>

            {/* Author */}
            <footer className="flex items-center gap-3">
              <div className="w-8 h-px bg-sand/40" />
              <p className="label-small text-sand/60 text-[0.6rem]">
                {t(review.authorIT, review.authorEN)} · {t(review.countryIT, review.countryEN)} · {review.date}
              </p>
            </footer>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 ${
                    i === active
                      ? 'w-6 h-1 bg-sand'
                      : 'w-2 h-1 bg-sand/30 hover:bg-sand/60'
                  }`}
                  aria-label={`Recensione ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 border border-sand/30 text-sand/60 hover:border-sand hover:text-sand flex items-center justify-center transition-all duration-200"
                aria-label={t('Precedente', 'Previous')}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-sand/30 text-sand/60 hover:border-sand hover:text-sand flex items-center justify-center transition-all duration-200"
                aria-label={t('Successiva', 'Next')}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
