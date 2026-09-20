import { useLanguage } from '@/hooks/useLanguage';
import { useScrollHeader } from '@/hooks/useScrollHeader';

export default function MobileBookingBar() {
  const { t } = useLanguage();
  const scrolled = useScrollHeader(400);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-ivory border-t border-sand/50 px-4 py-3 flex gap-3 transition-transform duration-500 ${
        scrolled ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <button
        onClick={() => scrollTo('#prenota')}
        className="flex-1 label-small text-xs py-3.5 border border-charcoal/30 text-charcoal hover:border-charcoal transition-all duration-200"
      >
        {t('DISPONIBILITÀ', 'AVAILABILITY')}
      </button>
      <button
        onClick={() => scrollTo('#prenota')}
        className="flex-1 label-small text-xs py-3.5 bg-terracotta text-white hover:bg-terracotta/90 transition-colors duration-200"
      >
        {t('PRENOTA', 'BOOK NOW')}
      </button>
    </div>
  );
}
