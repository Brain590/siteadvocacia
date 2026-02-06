import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '(61) 99387-3267',
      href: 'https://wa.me/5561993873267',
    },
    {
      icon: Send,
      label: 'Telegram',
      value: '@Brain_590',
      href: 'https://t.me/Brain_590',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'pereirabrito.adv.assoc@gmail.com',
      href: 'mailto:pereirabrito.adv.assoc@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Atendimento',
      value: 'Brasília e Todo o Brasil',
      href: '#',
    },
  ];

  const businessHours = [
    { day: 'Segunda - Quinta', hours: '09:00 - 18:00' },
    { day: 'Sexta', hours: '09:00 - 17:00' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-light"></div>

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-px bg-gold-500"></div>
            <span className="section-label">Contato</span>
            <div className="w-10 h-px bg-gold-500"></div>
          </div>
          <h2 className="text-navy-900 mb-6">
            Fale com um <span className="text-gold-500">Especialista</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Entre em contato agora mesmo. Nossa equipe está pronta para analisar seu caso
            e oferecer a melhor solução jurídica para você.
          </p>
        </div>

        {/* WhatsApp CTA Banner */}
        <div
          className={`mb-12 transition-all duration-1000 delay-100 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >
          <a
            href="https://wa.me/5561993873267"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-8 bg-[#25D366] text-white hover:bg-[#22c55e] transition-all duration-500 group"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-white/80 text-sm mb-1">Atendimento rápido via</p>
                <p className="font-serif text-2xl">WhatsApp</p>
                <p className="text-white/80 text-base">55 (61) 99387-3267</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 text-sm font-medium tracking-widest uppercase">
              Iniciar Conversa
              <Send className="w-4 h-4" strokeWidth={1.5} />
            </div>
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
              }`}
          >
            <div className="space-y-4">
              {/* Contact Cards */}
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center gap-5 p-6 bg-cream border border-transparent hover:border-gold-500 transition-all duration-500 ${isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                    }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 border border-gold-500 flex items-center justify-center group-hover:bg-gold-500 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-gold-500 group-hover:text-navy-900 transition-colors" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs tracking-widest uppercase text-gray-400 mb-1">{item.label}</div>
                    <div className="font-serif text-lg text-navy-900 group-hover:text-gold-500 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}

              {/* Business Hours */}
              <div
                className={`p-6 bg-navy-900 transition-all duration-1000 delay-700 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                  }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="w-5 h-5 text-gold-500" strokeWidth={1.5} />
                  <h4 className="font-serif text-lg text-white">Horário de Atendimento</h4>
                </div>
                <div className="space-y-3">
                  {businessHours.map((item) => (
                    <div key={item.day} className="flex justify-between text-base">
                      <span className="text-white/50">{item.day}</span>
                      <span className="text-gold-400 font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
              }`}
          >
            <div className="bg-cream p-10 border border-light">
              <h3 className="font-serif text-2xl text-navy-900 mb-2">
                Envie uma Mensagem
              </h3>
              <p className="text-gray-500 text-base mb-8">
                Preencha o formulário abaixo e retornaremos em breve.
              </p>

              {isSubmitted ? (
                <div className="text-center py-14">
                  <div className="w-16 h-16 border-2 border-gold-500 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-7 h-7 text-gold-500" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-2xl text-navy-900 mb-3">
                    Mensagem Enviada
                  </h4>
                  <p className="text-gray-500 text-base">
                    Entraremos em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs tracking-widest uppercase text-gray-400">Nome completo</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        required
                        className="h-14 bg-white border border-light rounded-none focus:border-gold-500 focus:ring-0 transition-colors text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs tracking-widest uppercase text-gray-400">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="h-14 bg-white border border-light rounded-none focus:border-gold-500 focus:ring-0 transition-colors text-base"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs tracking-widest uppercase text-gray-400">Telefone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(61) 99999-9999"
                        className="h-14 bg-white border border-light rounded-none focus:border-gold-500 focus:ring-0 transition-colors text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-xs tracking-widest uppercase text-gray-400">Área de Interesse</Label>
                      <select
                        id="subject"
                        required
                        className="w-full h-14 px-4 bg-white border border-light rounded-none focus:border-gold-500 focus:ring-0 transition-colors text-gray-600 text-base"
                      >
                        <option value="">Selecione...</option>
                        <option value="civel">Direito Cível</option>
                        <option value="trabalhista">Direito Trabalhista</option>
                        <option value="criminal">Direito Criminal</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs tracking-widest uppercase text-gray-400">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva seu caso..."
                      required
                      rows={5}
                      className="bg-white border border-light rounded-none focus:border-gold-500 focus:ring-0 resize-none transition-colors text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-900 rounded-none font-medium tracking-widest uppercase transition-all duration-500 text-sm"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-3">
                        <Send className="w-4 h-4" strokeWidth={1.5} />
                        Enviar Mensagem
                      </span>
                    )}
                  </Button>

                  <p className="text-sm text-gray-400 text-center">
                    Ao enviar, você concorda com nossa{' '}
                    <a href="#" className="text-gold-500 hover:underline">Política de Privacidade</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
