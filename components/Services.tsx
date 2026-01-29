'use client';

import { Monitor, Zap, Cpu, Wrench, HardDrive, Thermometer, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import AutoPlay from 'embla-carousel-autoplay';

const portfolioItems = [
    {
      title: "Webdesign",
      description: "Be unique and make sure your website stands for the crowd.",
      image: "/template1.jpg"
    },
    {
      title: "Webdesign",
      description: "Be unique and make sure your website stands for the crowd.",
      image: "/template2.jpg"
    },
    {
      title: "Webdesign",
      description: "Be unique and make sure your website stands for the crowd.",
      image: "/template3.jpg"
    },
    {
      title: "Webdesign",
      description: "Be unique and make sure your website stands for the crowd.",
      image: "/template4.jpg"
    },
    {
      title: "Webdesign",
      description: "Be unique and make sure your website stands for the crowd.",
      image: "/template5.jpg"
    },
    {
      title: "Webdesign",
      description: "Be unique and make sure your website stands for the crowd.",
      image: "/template6.jpg"
    },
    {
      title: "Webdesign",
      description: "Be unique and make sure your website stands for the crowd.",
      image: "/template7.jpg"
    },
    {
      title: "Webdesign",
      description: "Be unique and make sure your website stands for the crowd.",
      image: "/template8.jpg"
    }
  ]

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

  // Todos os serviços em uma única lista
  const allServices = [
    { icon: Monitor, title: "Troca de Tela", description: "Substituição de telas quebradas ou com falhas de imagem" },
    { icon: Wrench, title: "Teclado e Carcaça", description: "Substituição de teclado, dobradiças e carcaças" },
    { icon: Thermometer, title: "Resfriamento", description: "Troca de cooler e reparo de superaquecimento" },
    { icon: Cpu, title: "Placa-Mãe", description: "Reparo de placa-mãe e componentes eletrônicos" },
    { icon: Zap, title: "Energia", description: "Recuperação de notebooks com problemas de liga/desliga" },
    { icon: HardDrive, title: "SSD Installation", description: "Aumente a velocidade do seu notebook em até 10x" },
    { icon: Cpu, title: "Memória RAM", description: "Expansão de memória para melhor desempenho" },
    { icon: Thermometer, title: "Limpeza Profunda", description: "Limpeza interna e troca de pasta térmica" },
    { icon: Monitor, title: "Sistema Operacional", description: "Formatação e otimização do sistema" },
    { icon: Cpu, title: "Reparo de BIOS", description: "Reparo de BIOS e chips de memória" },
    { icon: Cpu, title: "Troca de conectores", description: "Troca de conectores de energia e portas USB" },
  ];

  return (
    <section className="py-32 text-primary-foreground bg-[#202632]">
           
      
    <div className="text-center mb-24">

      <h2 className="text-white mb-4 leading-tight">
                Entrega em tempo recorde  
              </h2>
              <div className="h-1 w-24 bg-neonred mx-auto mb-6 rounded" />
                <p className="text-[1.15rem] text-muted-foreground max-w-4xl mx-auto text-white">
                  Você não precisa entender de programação. Nós entregamos tudo configurado para você focar no que importa: atender seus clientes. Escolha um modelo e nós cuidamos do resto.
                </p>     
      </div>       

      {/* Carousel Container */}
        <div className="relative mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-10 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center portrait:hidden"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-10 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center portrait:hidden"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(25%-16px)] p-10">
                        <img src={item.image} alt={item.title} className="w-full max-w-[420px] object-cover" />                       
                    </div>
                ))}
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

export default Services;
