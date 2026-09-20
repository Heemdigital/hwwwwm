import { useLanguage } from '@/hooks/useLanguage';
import { navItems } from '@/data/navigation';

export default function Footer() {
  const { lang, setLang, t } = useLanguage();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-12 border-b border-ivory/10">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-light text-ivory mb-1">Casa del Sole</p>
            <p className="label-small text-ivory/30 text-[0.6rem]" style={{ letterSpacing: '0.2em' }}>
              GUEST ROOMS · ALGHERO
            </p>
            <div className="w-8 h-px bg-terracotta mt-5 mb-5" />
            <p className="font-body text-xs text-ivory/40 leading-relaxed max-w-[200px]">
              {t(
                'Un rifugio tranquillo nel cuore di Alghero, Sardegna.',
                'A quiet retreat in the heart of Alghero, Sardinia.'
              )}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-small text-ivory/30 text-[0.6rem] mb-6" style={{ letterSpacing: '0.2em' }}>
              {t('NAVIGAZIONE', 'NAVIGATION')}
            </p>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="block label-small text-[0.65rem] text-ivory/50 hover:text-ivory transition-colors duration-200"
                  style={{ letterSpacing: '0.15em' }}
                >
                  {t(item.labelIT, item.labelEN)}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#prenota')}
                className="block label-small text-[0.65rem] text-terracotta hover:text-sand transition-colors duration-200"
                style={{ letterSpacing: '0.15em' }}
              >
                {t('PRENOTA', 'BOOK')}
              </button>
            </nav>
          </div>

          {/* Contact & Language */}
          <div>
            <p className="label-small text-ivory/30 text-[0.6rem] mb-6" style={{ letterSpacing: '0.2em' }}>
              {t('INFORMAZIONI', 'INFO')}
            </p>
            <div className="space-y-2 mb-8">
              <p className="font-body text-xs text-ivory/40">Via XX Settembre, n.1</p>
              <p className="font-body text-xs text-ivory/40">07041 Alghero (SS), Italia</p>
            </div>

            {/* Language */}
            <div className="flex items-center gap-3 mb-8">
              <p className="label-small text-ivory/30 text-[0.6rem]" style={{ letterSpacing: '0.15em' }}>
                {t('LINGUA', 'LANGUAGE')}:
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLang('IT')}
                  className={`label-small text-[0.65rem] transition-colors duration-200 ${lang === 'IT' ? 'text-ivory' : 'text-ivory/30 hover:text-ivory/70'}`}
                >
                  IT
                </button>
                <span className="text-ivory/20 text-xs">/</span>
                <button
                  onClick={() => setLang('EN')}
                  className={`label-small text-[0.65rem] transition-colors duration-200 ${lang === 'EN' ? 'text-ivory' : 'text-ivory/30 hover:text-ivory/70'}`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Book CTA */}
            <button
              onClick={() => scrollTo('#prenota')}
              className="label-small text-xs px-6 py-3 border border-terracotta text-terracotta hover:bg-terracotta hover:text-white transition-all duration-300"
            >
              {t('PRENOTA IL TUO SOGGIORNO', 'BOOK YOUR STAY')}
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-body text-xs text-ivory/25">
            Casa del Sole Guest Rooms · Alghero, Sardegna
          </p>
          <div className="flex items-center gap-5">
            <button className="label-small text-[0.6rem] text-ivory/25 hover:text-ivory/50 transition-colors duration-200">
              Privacy
            </button>
            <button className="label-small text-[0.6rem] text-ivory/25 hover:text-ivory/50 transition-colors duration-200">
              Cookie
            </button>
            <button className="label-small text-[0.6rem] text-ivory/25 hover:text-ivory/50 transition-colors duration-200">
              {t('Termini', 'Terms')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
