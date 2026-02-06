import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'O Escritório', href: '#about' },
    { name: 'Áreas de Atuação', href: '#practice-areas' },
    { name: 'Equipe', href: '#team' },
  ];

  const dropdownLinks = [
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/98 backdrop-blur-sm py-5'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center"
            >
              <div className={`font-serif text-xl tracking-wide transition-colors duration-500 ${isScrolled ? 'text-navy-900' : 'text-white'
                }`}>
                <span className="font-normal">P</span>
                <span className="mx-1 text-gold-500">&</span>
                <span className="font-medium">B</span>
                <span className={`ml-3 text-base tracking-widest uppercase ${isScrolled ? 'text-gray-500' : 'text-white/60'}`}>
                  Advogados Associados
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`nav-link ${isScrolled
                    ? 'text-gray-600 hover:text-gold-500'
                    : 'text-white/80 hover:text-gold-500'
                    }`}
                >
                  {link.name}
                </a>
              ))}

              {/* Dropdown Menu */}
              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={`nav-link flex items-center gap-1 group py-4 transition-all ${isScrolled
                    ? 'text-gray-600 hover:text-gold-500'
                    : 'text-white/80 hover:text-gold-500'
                    }`}
                >
                  MAIS
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Bridge to prevent gaps */}
                <div className={`absolute left-0 right-0 h-4 top-full ${isDropdownOpen ? 'block' : 'hidden'}`}></div>

                {/* Dropdown Content */}
                <div
                  className={`absolute top-[calc(100%+4px)] right-0 w-64 py-3 bg-navy-900 border border-gold-500/20 shadow-2xl transition-all duration-300 ${isDropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                >
                  {dropdownLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="block px-8 py-5 text-[0.85rem] tracking-[0.15em] font-medium uppercase text-white/70 hover:text-gold-500 hover:bg-white/5 transition-all"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/5561993873267"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium tracking-widest uppercase px-6 py-3 border transition-all duration-500 ${isScrolled
                  ? 'border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
                  : 'border-white/40 text-white hover:bg-white hover:text-navy-900'
                  }`}
              >
                Fale Conosco
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-navy-900' : 'text-white'
                }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className="absolute inset-0 bg-navy-900/98 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div className="relative h-full flex flex-col items-center justify-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-white text-xl font-serif hover:text-gold-500 transition-colors"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.4s ease ${index * 0.08}s`,
              }}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Group Label */}
          <div
            className="w-10 h-px bg-gold-500/30 my-2"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: `all 0.4s ease ${navLinks.length * 0.08}s`,
            }}
          ></div>

          {dropdownLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-white/60 text-lg font-serif hover:text-gold-500 transition-colors"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.4s ease ${(navLinks.length + 1 + index) * 0.08}s`,
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5561993873267"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 text-sm font-medium tracking-widest uppercase px-8 py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-all duration-500"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: 'all 0.4s ease 0.6s',
            }}
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
