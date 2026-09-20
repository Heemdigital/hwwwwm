import { useRef, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { galleryImages } from '@/data/gallery';
import { useInView } from '@/hooks/useInView';
import Lightbox from './Lightbox';

const categories = ['ALL', 'CAMERE', 'VISTA MARE', 'TERRAZZA', 'ALGHERO', 'NEI DINTORNI'];
const categoriesEN = ['ALL', 'ROOMS', 'SEA VIEW', 'TERRACE', 'ALGHERO', 'NEARBY'];

export default function Gallery() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const cats = lang === 'IT' ? categories : categoriesEN;

  const filtered = activeCategory === 'ALL' || (lang === 'EN' && activeCategory === 'ALL')
    ? galleryImages
    : galleryImages.filter((img) =>
        lang === 'IT' ? img.categoryIT === activeCategory : img.categoryEN === activeCategory
      );

  return (
    <section id="galleria" className="py-24 md:py-36 bg-ivory">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="label-small text-terracotta text-[0.65rem] mb-4" style={{ letterSpacing: '0.25em' }}>
            {t('GALLERIA', 'GALLERY')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-8" style={{ letterSpacing: '-0.01em' }}>
            {t('Immagini di Casa del Sole.', 'Images of Casa del Sole.')}
          </h2>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {cats.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(lang === 'IT' ? categories[i] : categoriesEN[i])}
                className={`label-small text-[0.6rem] px-4 py-2 border transition-all duration-200 ${
                  activeCategory === (lang === 'IT' ? categories[i] : categoriesEN[i])
                    ? 'bg-charcoal border-charcoal text-ivory'
                    : 'border-stone/40 text-stone hover:border-charcoal hover:text-charcoal'
                }`}
                style={{ letterSpacing: '0.15em' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div
          className={`columns-2 md:columns-3 gap-3 md:gap-4 transition-all duration-700 delay-100 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {filtered.map((img, i) => (
            <div
              key={img.id}
              className="break-inside-avoid mb-3 md:mb-4 overflow-hidden cursor-pointer group"
              onClick={() => setLightboxIndex(i)}
            >
              <div className={`relative overflow-hidden ${img.wide ? 'aspect-[16/9]' : img.tall ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/25 transition-all duration-500 flex items-end p-4">
                  <span className="label-small text-[0.55rem] text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300" style={{ letterSpacing: '0.2em' }}>
                    {lang === 'IT' ? img.categoryIT : img.categoryEN}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
