import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

const About = () => {
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
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const differentials = [
    'Atuação exclusiva em Direito Cível, Trabalhista e Criminal',
    'Estratégias personalizadas para cada caso',
    'Acompanhamento próximo em todas as etapas',
    'Histórico comprovado de resultados favoráveis',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-12'
              }`}
          >
            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src="/siteadvocacia/about-image.jpg"
                  alt="Advogado trabalhando"
                  className="w-full h-[550px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold-500/40 -z-10"></div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-navy-900 text-white p-8">
                <div className="font-serif text-5xl text-gold-400 font-normal">2014</div>
                <div className="text-sm tracking-widest uppercase mt-2 text-white/50">Desde</div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-12'
              }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-gold-500"></div>
              <span className="section-label">O Escritório</span>
            </div>

            {/* Headline */}
            <h2 className="text-navy-900 mb-8">
              Especialistas em<br />
              <span className="text-gold-500">Resolver seu Problema Jurídico</span>
            </h2>

            {/* Body Text */}
            <div className="space-y-5 text-navy-900/80 leading-relaxed mb-10">
              <p className="text-base">
                A <strong className="text-navy-900">P & B - Advogados Associados</strong> é um escritório
                com foco exclusivo nas áreas <span className="text-gold-500 font-medium">Cível, Trabalhista e Criminal</span>.
                Nossa equipe se destaca pelo conhecimento aprofundado dessas áreas do direito,
                garantindo estratégias eficientes e resultados comprovados.
              </p>
              <p className="text-base">
                Fundado em <span className="text-gold-500 font-medium">2014</span>, o escritório é liderado pelo Dr. Carlos Eduardo P. de Brito,
                construindo uma reputação sólida baseada em compromisso, ética e dedicação total a cada causa.
              </p>
              <p className="text-base">
                Atuamos em conjunto com parceiros altamente qualificados para entregar soluções jurídicas
                que funcionam na prática, seja no âmbito Cível, Trabalhista ou Criminal.
              </p>
            </div>

            {/* Differentials */}
            <div className="space-y-4 mb-10">
              {differentials.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 transition-all duration-700 ${isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                    }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 border border-gold-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gold-500" strokeWidth={2} />
                  </div>
                  <span className="text-navy-900/80 text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5561993873267"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
