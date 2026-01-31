'use client';

import Image from 'next/image';

const BrandsCarousel = () => {
  
  const brands = [    
    { name: 'Americanas', image: 'logo-americanas.webp' },    
    { name: 'Assai', image: 'logo-assai.webp' },
    { name: 'Buscape', image: 'logo-buscape.webp' },
    { name: 'Gazeta', image: 'logo-gazeta.webp' },
    { name: 'Mc4', image: 'logo-mc4.webp' },
    { name: 'Uninter', image: 'logo-uninter.webp' },
    { name: 'Subway', image: 'logo-sub.webp' },
    { name: 'Americanas', image: 'logo-americanas.webp' },    
    { name: 'Assai', image: 'logo-assai.webp' },
    { name: 'Buscape', image: 'logo-buscape.webp' },
    { name: 'Gazeta', image: 'logo-gazeta.webp' },
    { name: 'Mc4', image: 'logo-mc4.webp' },
    { name: 'Uninter', image: 'logo-uninter.webp' },
    { name: 'Subway', image: 'logo-sub.webp' },
    { name: 'Americanas', image: 'logo-americanas.webp' },    
    { name: 'Assai', image: 'logo-assai.webp' },
    { name: 'Buscape', image: 'logo-buscape.webp' },
    { name: 'Gazeta', image: 'logo-gazeta.webp' },
    { name: 'Mc4', image: 'logo-mc4.webp' },
    { name: 'Uninter', image: 'logo-uninter.webp' },
    { name: 'Subway', image: 'logo-sub.webp' }                
  ];



  return (
    <section id="brands" className="py-12 bg-background">
       <div className="text-center mb-12">                                   
            <p className="text-2xl text-primary mx-auto">
                Já trabalhamos para 
                <strong className="font-oswald uppercase text-5xl tracking-tight inline-block w-full">grandes marcas:</strong>                 
            </p>
          </div>          
        

      <div className="mx-auto px-4">      
        {/* Infinite Scroll Carousel */}
        <div className="overflow-hidden">
          <div 
            className="flex animate-infinite-scroll"
            style={{
              width: 'max-content',
            }}
          >            
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex-[0_0_auto] w-[150px] mr-8"
              >
                
                  <div className="relative w-full h-full flex items-center justify-center">                                        
                    <img 
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${brand.image}`}
                      alt={`Logo ${brand.name}`} 
                    
                      className="max-h-[60px] max-w-[150px]"
                    />
                  </div>
                
              </div>
            ))}           
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;

