import { useRef } from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useInView } from '@/hooks/useInView';
import { property } from '@/data/property';

export default function ContactSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="contatti" className="py-24 md:py-36 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="label-small text-terracotta text-[0.65rem] mb-4" style={{ letterSpacing: '0.25em' }}>
            {t('CONTATTI', 'CONTACT')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal" style={{ letterSpacing: '-0.01em' }}>
            {t('Siamo qui per voi.', "We're here for you.")}
          </h2>
          <div className="w-12 h-px bg-sand mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left – contact info */}
          <div
            className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="mb-8">
              <p className="font-display text-2xl font-light text-charcoal mb-1">{property.name}</p>
              <p className="label-small text-stone text-[0.6rem]" style={{ letterSpacing: '0.15em' }}>GUEST ROOMS</p>
            </div>

            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-terracotta flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="label-small text-stone text-[0.6rem] mb-1" style={{ letterSpacing: '0.15em' }}>
                    {t('INDIRIZZO', 'ADDRESS')}
                  </p>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                    {property.address.street}
                    <br />
                    {property.address.cap} {property.address.city} ({property.address.province})
                    <br />
                    {property.address.country}
                  </p>
                </div>
              </div>

              {/* Phone placeholder */}
              <div className="flex items-start gap-4">
                <Phone size={16} className="text-terracotta flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="label-small text-stone text-[0.6rem] mb-1" style={{ letterSpacing: '0.15em' }}>
                    {t('TELEFONO', 'PHONE')}
                  </p>
                  <p className="font-body text-sm text-charcoal/40 italic">
                    {t('[Numero disponibile su richiesta]', '[Number available on request]')}
                  </p>
                </div>
              </div>

              {/* Email placeholder */}
              <div className="flex items-start gap-4">
                <Mail size={16} className="text-terracotta flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="label-small text-stone text-[0.6rem] mb-1" style={{ letterSpacing: '0.15em' }}>EMAIL</p>
                  <p className="font-body text-sm text-charcoal/40 italic">
                    {t('[Email disponibile su richiesta]', '[Email available on request]')}
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="label-small text-[0.65rem] px-6 py-3 border border-stone/40 text-charcoal/60 flex items-center gap-2 cursor-not-allowed opacity-50">
                <Phone size={13} />
                {t('CHIAMA', 'CALL')}
              </button>
              <button className="label-small text-[0.65rem] px-6 py-3 border border-stone/40 text-charcoal/60 flex items-center gap-2 cursor-not-allowed opacity-50">
                <Mail size={13} />
                EMAIL
              </button>
              <a
                href="https://maps.google.com/?q=Via+XX+Settembre+1+Alghero+Sardinia+Italy"
                target="_blank"
                rel="noopener noreferrer"
                className="label-small text-[0.65rem] px-6 py-3 bg-charcoal text-ivory hover:bg-terracotta transition-colors duration-300 flex items-center gap-2"
              >
                <ExternalLink size={13} />
                {t('COME ARRIVARE', 'DIRECTIONS')}
              </a>
            </div>

            <p className="font-body text-xs text-charcoal/30 mt-4 italic">
              {t(
                'I recapiti diretti saranno aggiornati a breve.',
                'Direct contact details will be updated shortly.'
              )}
            </p>
          </div>

          {/* Right – map placeholder */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative overflow-hidden bg-sand/20 border border-sand/30 aspect-[4/3]">
              <iframe
                title={t('Mappa Casa del Sole Alghero', 'Map Casa del Sole Alghero')}
                src="https://www.openstreetmap.org/export/embed.html?bbox=8.3120%2C40.5570%2C8.3220%2C40.5620&layer=mapnik&marker=40.5595%2C8.3170"
                className="w-full h-full border-0"
                loading="lazy"
                aria-label={t('Mappa di Alghero', 'Map of Alghero')}
              />
              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-ivory/95 backdrop-blur px-4 py-3">
                <p className="font-display text-sm font-light text-charcoal">Casa del Sole</p>
                <p className="label-small text-stone text-[0.55rem] mt-0.5">Via XX Settembre, 1 · Alghero</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
