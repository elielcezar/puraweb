'use client';

import { Monitor, Zap, Cpu, Wrench, HardDrive, Thermometer, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import AutoPlay from 'embla-carousel-autoplay';

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

                <div key="01" className="flex-[0_0_100%] flex items-center justify-center bg-[#3d204e] min-h-[800px]">
                  <div className="flex items-center justify-center flex-col p-6 transition-all duration-300 h-full w-full" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/burst.jpg) no-repeat center center; background-size: cover` }}>                    
                    <h3 className="text-[56px] text-white font-pacifico mb-[-10px]">Sua marca muito mais</h3>
                    <p className="text-[104px] text-white font-bowlby mt-0">PROFISSIONAL</p>
                    <p className="text-white text-3xl font-normal">Sua empresa na internet com o melhor custo-benefício</p>               
                  </div>
                </div>           
                
                
                <div key="02" className="flex-[0_0_100%] flex items-center justify-center bg-[#3d204e] min-h-[800px]">
                  <div className="flex items-center justify-center flex-col p-6 transition-all duration-300 h-full w-full" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/fullscreen-slide-1.jpg) no-repeat center center; background-size: cover` }}>
                    
                        <h3 className="text-[56px] text-neongreen font-pacifico mb-[-10px]">Mais cliques, mais</h3>
                        <p className="text-[104px] text-white font-bowlby mt-0">VENDAS</p>
                        <p className="text-white text-3xl font-normal">Atraia clientes qualificados com um site feito para converter</p>  
                        <div className="cta-box flex gap-4 mt-10">
                          <Button className="btn-primary border-2 border-white rounded-none px-12 py-6 text-lg font-normal bg-transparent text-white hover:bg-white hover:text-black">Contato</Button>
                          <Button className="btn-primary border-2 border-white rounded-none px-12 py-6 text-lg font-normal bg-transparent text-white hover:bg-white hover:text-black">Portfólio</Button>
                        </div>
                    
                  </div>
                </div>

                <div key="03" className="flex-[0_0_100%] flex items-center justify-center bg-[#3d204e] min-h-[800px]">
                  <div className="flex items-center justify-center flex-col p-6 transition-all duration-300 h-full w-full" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/background1.jpg) no-repeat center center; background-size: cover` }}>                    
                    <h3 className="text-[56px] text-white font-pacifico mb-[-10px]">Seu site na internet</h3>
                    <p className="text-[104px] text-white font-bowlby mt-0">MAIS PROFISSIONAL</p>
                    <p className="text-white text-3xl font-normal">Com o melhor custo-benefício do mercado</p>               
                  </div>
                </div>

               
                
              
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6 lg:hidden">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center"
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
