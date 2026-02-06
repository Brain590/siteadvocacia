import { useEffect, useRef, useState } from 'react';
import { Scale, Briefcase, Gavel, ArrowRight, Check } from 'lucide-react';

const PracticeAreas = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const practiceAreas = [
    {
      icon: Scale,
      number: '01',
      title: 'Direito Cível',
      description: 'Atuação completa em questões cíveis, incluindo contratos, responsabilidade civil, direito de família, sucessões e elaboração de contratos.',
      services: [
        'Inventários e Partilhas',
        'Divórcio',
        'Usucapião',
        'Reintegração de Posse',
        'Responsabilidade Civil',
        'Danos Morais',
      ],
    },
    {
      icon: Briefcase,
      number: '02',
      title: 'Direito Trabalhista',
      description: 'Defesa dos direitos trabalhistas, representando tanto empregados quanto empregadores em todas as instâncias judiciais.',
      services: [
        'Reclamações trabalhistas',
        'Acidentes de trabalho',
        'Rescisões contratuais',
        'Direitos do trabalhador',
        'Consultoria preventiva',
      ],
    },
    {
      icon: Gavel,
      number: '03',
      title: 'Direito Criminal',
      description: 'Atuação estratégica na defesa criminal, desde a fase investigatória até os tribunais superiores.',
      services: [
        'Defesa criminal em geral',
        'Habeas corpus',
        'Audiência de custódia',
        'Crimes contra a pessoa',
        'Crimes patrimoniais',
      ],
    },
  ];

  return (
    <section
      id="practice-areas"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-navy-900 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-px bg-gold-500"></div>
            <span className="section-label">Áreas de Atuação</span>
            <div className="w-10 h-px bg-gold-500"></div>
          </div>
          <h2 className="text-white mb-6">
            Especialização que <span className="text-gold-500">Faz a Diferença</span>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Nosso foco exclusivo nas áreas Cível, Trabalhista e Criminal nos permite oferecer
            conhecimento aprofundado e estratégias eficientes para cada caso.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={area.title}
              className={`group relative bg-navy-800 p-10 transition-all duration-700 hover:bg-navy-800/80 hover:shadow-elegant border border-white/5 hover:border-gold-500/30 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Number */}
              <div className="absolute top-8 right-8 font-serif text-5xl text-white/5 group-hover:text-gold-500/20 transition-colors">
                {area.number}
              </div>

              {/* Icon */}
              <div className="relative mb-8">
                <div className="w-14 h-14 border border-gold-500 flex items-center justify-center transition-all duration-500 group-hover:bg-gold-500">
                  <area.icon className="w-6 h-6 text-gold-500 group-hover:text-navy-900 transition-colors" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl text-gold-500 mb-4 transition-colors">
                {area.title}
              </h3>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                {area.description}
              </p>

              {/* Services List */}
              <ul className="space-y-3 mb-10">
                {area.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-3 text-base text-white/70">
                    <Check className="w-4 h-4 text-gold-500 flex-shrink-0" strokeWidth={2} />
                    {service}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="https://wa.me/5561993873267"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-white group-hover:text-gold-500 transition-colors"
              >
                Falar com Especialista
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
        >
          <a
            href="https://wa.me/5561993873267"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            Agendar Consulta
            <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
