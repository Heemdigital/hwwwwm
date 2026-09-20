import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import { navItems } from '@/data/navigation';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const scrolled = useScrollHeader(60);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex flex-col leading-none"
              aria-label="Casa del Sole Guest Rooms – torna su"
            >
              <span
                className={`font-display text-xl lg:text-2xl font-medium tracking-wide transition-colors duration-300 ${
                  scrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                Casa del Sole
              </span>
              <span
                className={`label-small tracking-widest transition-colors duration-300 ${
                  scrolled ? 'text-stone' : 'text-white/70'
                }`}
                style={{ fontSize: '0.6rem' }}
              >
                GUEST ROOMS · ALGHERO
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Navigazione principale">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`label-small transition-colors duration-300 hover:text-terracotta ${
                    scrolled ? 'text-charcoal/70' : 'text-white/80'
                  }`}
                  style={{ fontSize: '0.65rem' }}
                >
                  {t(item.labelIT, item.labelEN)}
                </button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-4 lg:gap-5">
              {/* Language switcher */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setLang('IT')}
                  className={`label-small text-[0.6rem] px-1.5 py-0.5 transition-all duration-200 ${
                    lang === 'IT'
                      ? scrolled
                        ? 'text-charcoal border-b border-charcoal'
                        : 'text-white border-b border-white'
                      : scrolled
                      ? 'text-stone hover:text-charcoal'
                      : 'text-white/50 hover:text-white'
                  }`}
                  aria-label="Italiano"
                >
                  IT
                </button>
                <span className={`text-[0.6rem] ${scrolled ? 'text-stone' : 'text-white/40'}`}>/</span>
                <button
                  onClick={() => setLang('EN')}
                  className={`label-small text-[0.6rem] px-1.5 py-0.5 transition-all duration-200 ${
                    lang === 'EN'
                      ? scrolled
                        ? 'text-charcoal border-b border-charcoal'
                        : 'text-white border-b border-white'
                      : scrolled
                      ? 'text-stone hover:text-charcoal'
                      : 'text-white/50 hover:text-white'
                  }`}
                  aria-label="English"
                >
                  EN
                </button>
              </div>

              {/* Book CTA */}
              <button
                onClick={() => scrollTo('#prenota')}
                className={`hidden lg:block label-small text-[0.65rem] px-5 py-2.5 border transition-all duration-300 hover:bg-terracotta hover:border-terracotta hover:text-white ${
                  scrolled
                    ? 'border-charcoal text-charcoal'
                    : 'border-white text-white'
                }`}
              >
                {t('PRENOTA', 'BOOK')}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden transition-colors duration-300 ${
                  scrolled ? 'text-charcoal' : 'text-white'
                }`}
                aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal flex flex-col justify-center px-8 transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-6" aria-label="Navigazione mobile">
          {navItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="font-display text-4xl font-light text-ivory/90 hover:text-sand text-left transition-colors duration-200"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {t(item.labelIT, item.labelEN)}
            </button>
          ))}
        </nav>
        <div className="mt-12">
          <button
            onClick={() => scrollTo('#prenota')}
            className="label-small text-xs px-8 py-4 bg-terracotta text-white hover:bg-terracotta/90 transition-colors duration-200"
          >
            {t('PRENOTA IL TUO SOGGIORNO', 'BOOK YOUR STAY')}
          </button>
        </div>
      </div>
    </>
  );
}
