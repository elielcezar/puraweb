'use client';

import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState, useEffect } from 'react';
import AutoPlay from 'embla-carousel-autoplay';
import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  // Configuração do Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 1,
    },
    [
      AutoPlay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      })
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect(); // Initial call

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Funções de navegação
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const animProps = (index: number, delayOrder: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: selectedIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const, delay: delayOrder * 0.2 }
  });

  return (
    <section id="servicos">

      {/* Carousel Container */}
      <div className="relative mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-20 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 border-2 border-white text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center portrait:hidden"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-20 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 border-2 border-white text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center portrait:hidden"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">

            <div key="01" className="flex-[0_0_100%] flex items-center justify-center bg-[#3d204e] min-h-[800px] portrait:min-h-[100vh] relative overflow-hidden">
              {/* Imagem de background otimizada com priority para LCP */}
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/burst.webp`}
                alt="Sua marca com muito mais impacto"
                fill
                priority
                fetchPriority="high"
                quality={85}
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
              <div className="flex items-center justify-center flex-col p-6 transition-all duration-300 h-full w-full relative z-10">
                <motion.h3 
                  {...animProps(0, 1)}
                  className="text-[56px] text-white text-center font-pacifico landscape:mb-[-20px] portrait:text-[12vw] portrait:leading-[12vw] portrait:[text-shadow:5px_5px_5px_rgba(0,0,0,0.5)]"
                >
                  Sua marca com muito mais
                </motion.h3>
                <motion.p 
                  {...animProps(0, 2)}
                  className="text-[140px] text-white font-oswald mt-0 font-bold tracking-tight leading-tight portrait:text-[24vw] portrait:[text-shadow:5px_5px_5px_rgba(0,0,0,0.5)]" 
                  style={{ textShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)', letterSpacing: '-3px' }}
                >
                  IMPACTO
                </motion.p>
                <motion.p 
                  {...animProps(0, 3)}
                  className="text-white text-3xl font-normal portrait:text-xl text-center portrait:font-bold portrait:[text-shadow:2px_2px_2px_rgba(0,0,0,0.5)]"
                >
                  Atraia clientes qualificados com um site feito para converter
                </motion.p>
              </div>
            </div>


            <div key="02" className="flex-[0_0_100%] flex items-center justify-center bg-[#3d204e] min-h-[800px] portrait:min-h-[100vh] relative overflow-hidden">
              {/* Imagem de background com lazy loading */}
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/fullscreen-slide-1.webp`}
                alt="Mais cliques, mais vendas"
                fill
                loading="lazy"
                quality={85}
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
              <div className="flex items-center justify-center flex-col p-6 transition-all duration-300 h-full w-full relative z-10">

                <motion.h3 
                  {...animProps(1, 1)}
                  className="text-[56px] text-neongreen font-pacifico text-center mb-[-10px] portrait:text-[10vw] portrait:leading-[12vw]"
                >
                  Mais cliques, mais
                </motion.h3>
                <motion.p 
                  {...animProps(1, 2)}
                  className="text-[140px] text-white font-oswald mt-0 font-bold tracking-tight leading-tight portrait:text-[24vw]" 
                  style={{ textShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)', letterSpacing: '-3px' }}
                >
                  VENDAS
                </motion.p>
                <motion.p 
                  {...animProps(1, 3)}
                  className="text-white text-3xl font-normal portrait:text-xl text-center"
                >
                  Sua presença na internet com o melhor custo-benefício
                </motion.p>
                {/* CTA WhatsApp */}
                <motion.div 
                  {...animProps(1, 4)}
                  className="flex justify-center gap-8 w-full max-w-[700px] mx-auto mt-6 portrait:flex-col portrait:gap-4 portrait:w-full"
                >
                  {/*<a href="#" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white border-2 border-white py-4 px-8 btn-wpp hover:bg-white hover:text-deepgray hover:border-white transition-all duration-300 [box-shadow:0px_5px_5px_rgb(0_0_0_/_15%)]">
                    <i className="fa-regular fa-pen-to-square text-2xl"></i>
                    <span>Ver todos os modelos</span>
                  </a>*/}

                  <a href="https://wa.me/554188815706" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white border-2 border-white py-4 px-6 btn-wpp hover:bg-neongreen hover:text-white hover:border-neongreen shadow-sm transition-all duration-300 rounded-sm">
                    <i className="fab fa-whatsapp text-2xl"></i>
                    <span>Teste GRÁTIS!</span>
                  </a>
                </motion.div>

              </div>
            </div>

            <div key="03" className="flex-[0_0_100%] flex items-center justify-center bg-[#3d204e] min-h-[800px] portrait:min-h-[100vh] relative overflow-hidden">
              {/* Imagem de background com lazy loading */}
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/background1.webp`}
                alt="Nosso foco é o desempenho"
                fill
                loading="lazy"
                quality={85}
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
              <div className="flex items-center justify-center flex-col p-6 transition-all duration-300 h-full w-full relative z-10">
                <motion.h3 
                  {...animProps(2, 1)}
                  className="text-[56px] text-white font-pacifico mb-[-10px] portrait:text-[10vw] portrait:leading-[14vw]"
                >
                  Nosso foco é o
                </motion.h3>
                <motion.p 
                  {...animProps(2, 2)}
                  className="text-[140px] text-white font-oswald mt-0 font-bold tracking-tight leading-tight portrait:text-[16vw]" 
                  style={{ textShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)', letterSpacing: '-3px' }}
                >
                  DESEMPENHO
                </motion.p>
                <motion.p 
                  {...animProps(2, 3)}
                  className="text-white text-3xl font-normal portrait:text-xl text-center"
                >
                  Para você atrair mais clientes
                </motion.p>

                {/* CTA WhatsApp */}
                <div 
                  {...animProps(1, 4)}
                  className="flex justify-center gap-8 w-full max-w-[700px] mx-auto mt-10 portrait:flex-col portrait:gap-4 portrait:w-full"
                >
                  {/*<a href="#" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white border-2 border-white py-4 px-8 btn-wpp hover:bg-white hover:text-deepgray hover:border-white transition-all duration-300 [box-shadow:0px_5px_5px_rgb(0_0_0_/_15%)]">
                    <i className="fa-regular fa-pen-to-square text-2xl"></i>
                    <span>Ver todos os modelos</span>
                  </a>*/}
                  <a href="https://wa.me/554188815706" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white border-2 border-white py-4 px-6 btn-wpp hover:bg-neongreen hover:text-white hover:border-neongreen shadow-sm transition-all duration-300 rounded-sm portrait:font-bold">
                    <i className="fab fa-whatsapp text-2xl"></i>
                    <span>Orçamento RÁPIDO!</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
