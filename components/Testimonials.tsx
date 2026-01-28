'use client';
import { motion } from "framer-motion";
import { Monitor, Zap, Cpu, Wrench, HardDrive, Thermometer, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import AutoPlay from 'embla-carousel-autoplay';
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Yulli Meireles",
            role: "Empresária",
            content: "Levei meu notebook para arrumar as dobradiças e o serviço ficou impecável. Super indico, atendimento e concerto rápido, super solicitos para explicar sobre o concerto!",
            rating: 5,
            location: "São Paulo, SP"
        },
        {
            name: "Leonardo Della Costa",
            role: "Professora",
            content: "Atendimento excepcional e muita qualidade de seriedade na prestação de serviço. Recomendo!",
            rating: 5,
            location: "Belo Horizonte, MG"
        },
        {
            name: "Álex Dias",
            role: "Designer",
            content: "Arrumaram 2 notebooks da minha família, ambos de reparo em placa.",
            rating: 5,
            location: "Rio de Janeiro, RJ"
        },
        {
            name: "Carlos Oliveira",
            role: "Gestor de TI",
            content: "Atendimento corporativo impecável. Cuidam de toda frota de notebooks da empresa com rapidez e qualidade.",
            rating: 5,
            location: "Brasília, DF"
        },
        {
            name: "Leonardo Della Costa",
            role: "Professora",
            content: "Atendimento excepcional e muita qualidade de seriedade na prestação de serviço. Recomendo!",
            rating: 5,
            location: "Belo Horizonte, MG"
        },
        {
            name: "Álex Dias",
            role: "Designer",
            content: "Arrumaram 2 notebooks da minha família, ambos de reparo em placa.",
            rating: 5,
            location: "Rio de Janeiro, RJ"
        },
        {
            name: "Carlos Oliveira",
            role: "Gestor de TI",
            content: "Atendimento corporativo impecável. Cuidam de toda frota de notebooks da empresa com rapidez e qualidade.",
            rating: 5,
            location: "Brasília, DF"
        }
    ];

    // Configuração do Embla Carousel
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
            slidesToScroll: 1,
        },
        [
            AutoPlay({
                delay: 1500,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
            })
        ]
    );

    // Funções de navegação
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);
   

    return (
        <section id="servicos" className="pt-20 pb-20 px-10 bg-slate-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="mb-1">
                        Quem contrata, aprova!
                    </h2>
                    <div className="h-1 w-24 bg-neonblue mx-auto mb-6 rounded" />
                    
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative mx-auto px-20">
                {/* Navigation Buttons */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center portrait:hidden"
                    aria-label="Anterior"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={scrollNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center portrait:hidden"
                    aria-label="Próximo"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Embla Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-6 pr-8 pl-8">

                        {/*allServices.map((service, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-16px)]"
                >
                  <div className="group bg-card rounded-xl p-6 border border-border hover:border-accent hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
              ))*/}


                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 120 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                key={index}
                                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-16px)]"
                            >
                                <div className="group bg-card rounded-xl p-6 border border-border hover:border-accent hover:shadow-lg transition-all duration-300 h-full relative">
                                    <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />

                                    <div className="flex items-center mb-4 gap-4">
                                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                            <span className="text-accent font-bold text-lg">
                                                {testimonial.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                            <div className="flex text-yellow-500 text-sm">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">"{testimonial.content}"</p>

                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Google Reviews Badge */}
                    <div className="text-center mt-12 flex flex-col items-center">

                        <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 shadow-sm mb-4">
                            <Star className="w-7 h-7 fill-amber-400 text-amber-400 mx-0" />
                            <Star className="w-7 h-7 fill-amber-400 text-amber-400 mx-0" />
                            <Star className="w-7 h-7 fill-amber-400 text-amber-400 mx-0" />
                            <Star className="w-7 h-7 fill-amber-400 text-amber-400 mx-0" />
                            <Star className="w-7 h-7 fill-amber-400 text-amber-400 mx-0" />
                            <p>
                                <span className="font-semibold text-foreground text-3xl font-bold">4.8</span>
                                <span className="font-semibold text-foreground text-lg font-normal">/5.0</span>
                            </p>
                        </div>

                        <p id="reviews-count" className="text-gray-600">Baseado em mais de 850 avaliações no Google</p>

                        <div className="flex items-center justify-center mt-4 space-x-4 portrait:flex-col">
                            <div className="bg-white px-4 pt-2 pb-1 rounded-lg shadow-md border">
                                <div className="flex items-center">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/google-logo.png`}
                                        alt="Google"
                                        width="90"
                                        height="30"
                                        className="mr-2"
                                    />
                                    <span className="text-sm font-medium text-gray-700">Empresa Verificada</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-6 lg:hidden">
                    <button
                        onClick={scrollPrev}
                        className="w-10 h-10 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-10 h-10 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

            </div>


        </section>
    );
};

export default Testimonials;
