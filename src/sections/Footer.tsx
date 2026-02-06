import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'O Escritório', href: '#about' },
    { name: 'Áreas de Atuação', href: '#practice-areas' },
    { name: 'Equipe', href: '#team' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-navy-900 text-white overflow-hidden"
    >
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gold-500/40"></div>

      <div className="relative max-w-6xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="mb-6">
              <div className="font-serif text-2xl tracking-wide">
                <span className="font-normal">P</span>
                <span className="mx-1 text-gold-500">&</span>
                <span className="font-medium">B</span>
              </div>
              <div className="text-sm tracking-widest uppercase text-white/40 mt-1">
                Advogados Associados
              </div>
            </div>
            <p className="text-white/50 leading-relaxed mb-6 max-w-md text-base">
              Especialistas em <span className="text-gold-400">Direito Cível, Trabalhista e Criminal</span>.
              Comprometimento, ética e resultados comprovados há mais de 12 anos.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              <a
                href="https://wa.me/5561993873267"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://t.me/Brain_590"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#0088cc] hover:bg-[#0088cc] hover:text-white transition-all duration-300"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
          >
            <h4 className="font-serif text-lg mb-5 text-gold-500">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/50 hover:text-gold-400 transition-colors duration-300 text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}
          >
            <h4 className="font-serif text-lg mb-5 text-gold-500">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5561993873267"
                  className="flex items-center gap-3 text-white/50 hover:text-gold-400 transition-colors text-base"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  55 (61) 99387-3267
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5561993873267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-[#25D366] transition-colors text-base"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:pereirabrito.adv.assoc@gmail.com"
                  className="flex items-center gap-3 text-white/50 hover:text-gold-400 transition-colors text-base"
                >
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                  pereirabrito.adv.assoc@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-white/50 text-base">
                  <MapPin className="w-4 h-4" strokeWidth={1.5} />
                  Brasília, DF
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`h-px bg-white/10 mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
        ></div>

        {/* Bottom Footer */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-600 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
            }`}
        >
          <p className="text-white/30 text-sm tracking-wider">
            © {new Date().getFullYear()} P & B - Advogados Associados. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-sm">
            <a
              href="#"
              className="text-white/30 hover:text-gold-400 transition-colors tracking-wider"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-gold-400 transition-colors tracking-wider"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>

      {/* OAB Badge */}
      <div className="absolute bottom-4 right-8 text-white/20 text-sm tracking-widest">
        OAB/DF
      </div>
    </footer>
  );
};

export default Footer;
