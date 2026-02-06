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
        stopOnMouseEnter: false,
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
    <section className="pt-32 pb-20 text-primary-foreground bg-[#202632]" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/bg-geral3.jpg) no-repeat bottom left; background-size: cover; background-attachment: fixed` }}>


      <div className="text-center mb-12 portrait:px-4">
        <h3 className="mx-auto leading-tight font-pacifico text-neongreen text-[2.5rem] mb-[-20px] portrait:text-[1.75rem] portrait:mb-[0px]">
          Páginas validadas para você
        </h3>
        <h2 className="mb-6 mx-auto font-oswald text-[96px] leading-tight text-white portrait:text-[70px]" style={{ textShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)', letterSpacing: '-3px' }}>
          VENDER MUITO MAIS
        </h2>
        <div className="h-1 w-24 bg-neongreen mx-auto mb-6 rounded" />
        <p className="text-2xl text-white max-w-3xl mx-auto portrait:text-xl">
          Um site profissional e moderno agrega valor ao seu negócio e aumenta suas chances de venda
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative mx-auto mb-12">
        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-10 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-16 h-16 border-2 bg-deepgray/70 border-white text-accent-foreground shadow-lg hover:bg-neongreen transition-all duration-300 flex items-center justify-center portrait:hidden"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-10 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-16 h-16 border-2 bg-deepgray/70 border-white text-accent-foreground shadow-lg hover:bg-neongreen transition-all duration-300 flex items-center justify-center portrait:hidden"
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
            className="w-10 h-10 bg-deepgray text-accent-foreground bg-deepgray/70 border-2 border-white shadow-lg hover:bg-neongreen/90 transition-all duration-300 flex items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="w-10 h-10 bg-deepgray text-accent-foreground bg-deepgray/70 border-2 border-white shadow-lg hover:bg-neongreen/90 transition-all duration-300 flex items-center justify-center"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* CTA WhatsApp */}
      <div className="flex justify-center gap-8 w-full max-w-[700px] mx-auto portrait:flex-col portrait:px-4 portrait:py-12">
        {/*<a href="#" target="_blank" rel="noopener noreferrer" className="py-4 px-4 btn-wpp bg-transparent border-2 border-neongreen hover:text-white hover:bg-neongreen hover:border-neongreen hover:shadow-[0px_5px_25px_rgb(23_207_198_/_50%)] transition-all duration-300 portrait:w-full portrait:bg-neongreen">
          <i className="fa-regular fa-pen-to-square text-2xl"></i>
          <span>Veja todos os modelos</span>
        </a>*/}

        <a href="https://wa.me/554199631609" target="_blank" rel="noopener noreferrer" className="py-4 px-4 btn-wpp bg-transparent border-2 border-neongreen hover:text-white hover:bg-neongreen hover:border-neongreen hover:shadow-[0px_5px_25px_rgb(23_207_198_/_50%)] transition-all duration-300 portrait:w-full portrait:bg-neongreen">
          <i className="fab fa-whatsapp text-2xl"></i>
          <span>Solicite uma simulação GRÁTIS!</span>
        </a>

      </div>

    </section>
  );
};

export default Services;
