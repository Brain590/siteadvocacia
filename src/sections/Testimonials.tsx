import { useEffect, useRef, useState } from 'react';

const Testimonials = () => {
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
            { threshold: 0.1, rootMargin: '50px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const videos = [
        { id: '-nl13zI0yNM', title: 'Depoimento de Cliente' },
        { id: '8CDSFowRCzg', title: 'Experiência Positiva' },
        { id: 'DAm7Z5oDW8U', title: 'Sucesso Jurídico' },
        { id: 'A8Ur0bGH8nM', title: 'Atendimento de Excelência' },
        { id: 'oOHxY2UvwvA', title: 'Reconhecimento Profissional' },
        { id: 'ZkvCSOsg1AM', title: 'Confiança e Resultados' },
        { id: 'Fqby6Cr1zHQ', title: 'Comprometimento' },
    ];

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="relative py-28 md:py-36 bg-navy-900 overflow-hidden"
        >
            <div className="relative max-w-6xl mx-auto px-8">
                {/* Section Header */}
                <div
                    className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-10 h-px bg-gold-500"></div>
                        <span className="section-label-gold">Depoimentos</span>
                        <div className="w-10 h-px bg-gold-500"></div>
                    </div>
                    <h2 className="text-white mb-6">
                        O que dizem nossos <span className="text-gold-500">clientes</span>
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                        A satisfação e os resultados de nossos clientes são a base do nosso
                        escritório. Confira alguns relatos sobre nossa atuação.
                    </p>
                </div>

                {/* Videos Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {videos.map((video, index) => (
                        <div
                            key={video.id}
                            className={`relative transition-all duration-1000 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="relative aspect-video rounded-sm overflow-hidden bg-navy-800 shadow-2xl border border-white/5 group-hover:border-gold-500/30 transition-colors">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>

                                {/* Decorative Elements */}
                                <div className="absolute inset-0 pointer-events-none border border-white/5 group-hover:border-gold-500/30 transition-colors z-10"></div>
                            </div>

                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                                <span className="text-xs tracking-widest uppercase text-white/40 font-medium">{video.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <div className="inline-block p-1 border border-gold-500/20">
                        <div className="px-8 py-4 bg-navy-800 border border-gold-500/30">
                            <p className="text-white/80 font-serif italic text-2xl">
                                "Comprometimento com a verdade e justiça em cada caso."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
