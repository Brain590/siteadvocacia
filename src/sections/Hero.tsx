import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !contentRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);

      const bgElement = heroRef.current.querySelector('.hero-bg') as HTMLElement;
      if (bgElement) {
        bgElement.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 + progress * 0.02})`;
        bgElement.style.opacity = `${1 - progress * 0.5}`;
      }

      contentRef.current.style.opacity = `${1 - progress}`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="hero-bg absolute inset-0 transition-transform duration-100">
        <img
          src="/siteadvocacia/hero-bg.jpg"
          alt="Escritório de Advocacia"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/60"></div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-6xl mx-auto px-8 py-32"
      >
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-up">
            <div className="w-12 h-px bg-gold-500"></div>
            <span className="section-label text-white/80 text-lg">
              P & B - Advogados Associados
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-white mb-8 opacity-0 animate-fade-up animation-delay-100">
            <span className="block font-light italic text-gold-400">Excelência Jurídica</span>
            <span className="block mt-4 text-4xl md:text-5xl lg:text-6xl font-normal">na Resolução de Causas</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-up animation-delay-200">
            Atuamos com foco exclusivo nas áreas <span className="text-gold-400 font-medium">Cível, Trabalhista e Criminal</span>.
            Nossa equipe especializada garante a melhor estratégia para cada caso,
            com resultados comprovados e total comprometimento com seus direitos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-300">
            <a
              href="https://wa.me/5561993873267"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Consulta Inicial
            </a>
            <button
              onClick={() => scrollToSection('#practice-areas')}
              className="btn-outline-white"
            >
              Áreas de Atuação
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-16 mt-16 pt-10 border-t border-white/10 opacity-0 animate-fade-up animation-delay-400">
            <div>
              <div className="text-white/5 text-gold-400 font-normal">500+</div>
              <div className="text-white/50 text-sm tracking-widest uppercase mt-2">Causas Resolvidas</div>
            </div>
            <div>
              <div className="font-serif text-4xl text-gold-400 font-normal">12+</div>
              <div className="text-white/50 text-sm tracking-widest uppercase mt-2">Anos de Atuação</div>
            </div>
            <div>
              <div className="font-serif text-4xl text-gold-400 font-normal">98%</div>
              <div className="text-white/50 text-sm tracking-widest uppercase mt-2">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in animation-delay-500">
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-gold-500 transition-colors duration-500"
        >
          <span className="text-xs tracking-widest uppercase"></span>
          <ArrowDown className="w-4 h-4" strokeWidth={1} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
