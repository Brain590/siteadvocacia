import { useEffect, useRef, useState } from 'react';
import { Linkedin, Mail, Award, BookOpen } from 'lucide-react';

const Team = () => {
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

  const teamMembers = [
    {
      name: 'Carlos Eduardo P. de Brito',
      role: 'Advogado Sênior, Escritor e Palestrante',
      oab: 'OAB/DF 44.005 e OAB/GO 41.166',
      image: '/IMG-20180413-WA0044-1.jpg',
      specialties: ['Direito Cível', 'Trabalhista', 'Criminal', 'Inventários', 'Divórcio'],
      qualifications: [
        'Pós-Graduação em Direito e Processo Penal',
        'Especialista em Neuropsicologia',
        'Especialista em Psicanálise'
      ],
      description: 'Experiência de excelência desde 2014. Escritor e Palestrante, o Dr. Carlos atua em conjunto com parceiros especializados nas áreas Trabalhista, Criminal e Cível, com foco em resultados estratégicos e humanizados.',
    },
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-cream overflow-hidden"
    >
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
            <span className="section-label">Liderança</span>
            <div className="w-10 h-px bg-gold-500"></div>
          </div>
          <h2 className="text-navy-900 mb-6">
            Nosso <span className="text-gold-500">Fundador</span>
          </h2>
          <p className="text-navy-900/70 text-lg leading-relaxed">
            Conheça o profissional à frente do escritório, com dedicação exclusiva
            e excelência na defesa de seus direitos.
          </p>
        </div>

        {/* Pro Split Layout */}
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-16'
              }`}
          >
            {/* Image Column */}
            <div className="relative group">
              <div className="relative overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border border-gold-500/30 -z-10"></div>

              {/* OAB Badge - Floating style */}
              <div className="absolute -bottom-4 -right-4 bg-navy-900 text-white px-6 py-4 shadow-xl">
                <span className="text-xs tracking-widest uppercase font-medium text-gold-400 block mb-1">Registro Profissional</span>
                <span className="text-sm tracking-wide">{member.oab}</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl text-navy-900 mb-2">{member.name}</h3>
                <p className="text-lg tracking-[0.2em] uppercase text-gold-500 font-medium">{member.role}</p>
              </div>

              <div className="w-20 h-px bg-gold-500"></div>

              <p className="text-navy-900/80 text-xl leading-relaxed italic font-serif">
                "{member.description}"
              </p>

              <div>
                <p className="text-xs tracking-widest uppercase text-navy-900/40 mb-4 font-bold">Formação e Qualificações</p>
                <ul className="space-y-2 mb-6">
                  {member.qualifications.map((qual, i) => (
                    <li key={i} className="flex items-center gap-3 text-navy-900/70 text-base">
                      <div className="w-1.5 h-1.5 bg-gold-400 rounded-full"></div>
                      {qual}
                    </li>
                  ))}
                </ul>

                <p className="text-xs tracking-widest uppercase text-navy-900/40 mb-4 font-bold">Especialidades em Destaque</p>
                <div className="flex flex-wrap gap-3">
                  {member.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="text-xs tracking-wider uppercase px-4 py-2 bg-white border border-light-border text-navy-900 hover:border-gold-500 transition-colors"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social/Contact Icons */}
              <div className="flex gap-4 pt-6">
                <a
                  href="#"
                  className="w-12 h-12 border border-navy-900/10 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a
                  href="mailto:pereirabrito.adv.assoc@gmail.com"
                  className="w-12 h-12 border border-navy-900/10 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Sub-Authority Section */}
        <div
          className={`mt-24 grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-500 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="flex items-center gap-6 p-10 bg-white shadow-sm border border-navy-900/5 hover:border-gold-500/20 transition-all group">
            <div className="w-14 h-14 border border-gold-500 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors">
              <Award className="w-6 h-6 text-gold-500 group-hover:text-navy-900" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-serif text-2xl text-navy-900 mb-1">Inscrição Regular</h4>
              <p className="text-navy-900/50">Advogado plenamente habilitado e regular perante a OAB/DF e OAB/GO.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-10 bg-white shadow-sm border border-navy-900/5 hover:border-gold-500/20 transition-all group">
            <div className="w-14 h-14 border border-gold-500 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors">
              <BookOpen className="w-6 h-6 text-gold-500 group-hover:text-navy-900" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-serif text-2xl text-navy-900 mb-1">Especialização Técnica</h4>
              <p className="text-navy-900/50">Formação sólida e contínua para resultados de alta complexidade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
