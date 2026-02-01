'use client';

import Image from 'next/image';

const BrandsCarousel = () => {
  
  const brands = [        
    { name: 'Assai', image: 'logo-assai.webp' },
    { name: 'Buscape', image: 'logo-buscape.webp' },
    { name: 'Americanas', image: 'logo-americanas.webp' },    
    { name: 'Gazeta', image: 'logo-gazeta.webp' },
    { name: 'Mc4', image: 'logo-mc4.webp' },
    { name: 'Uninter', image: 'logo-uninter.webp' },
    { name: 'Subway', image: 'logo-sub.webp' },    
    { name: 'Assai', image: 'logo-assai.webp' },
    { name: 'Buscape', image: 'logo-buscape.webp' },
    { name: 'Americanas', image: 'logo-americanas.webp' },    
    { name: 'Gazeta', image: 'logo-gazeta.webp' },
    { name: 'Mc4', image: 'logo-mc4.webp' },
    { name: 'Uninter', image: 'logo-uninter.webp' },
    { name: 'Subway', image: 'logo-sub.webp' },     
    { name: 'Assai', image: 'logo-assai.webp' },
    { name: 'Buscape', image: 'logo-buscape.webp' },
    { name: 'Americanas', image: 'logo-americanas.webp' },   
    { name: 'Gazeta', image: 'logo-gazeta.webp' },
    { name: 'Mc4', image: 'logo-mc4.webp' },
    { name: 'Uninter', image: 'logo-uninter.webp' },
    { name: 'Subway', image: 'logo-sub.webp' }                
  ];



  return (
    <section id="brands" className="py-20 bg-background">
       <div className="text-center mb-16">                                   
       <h3 className="mx-auto leading-tight font-pacifico text-neongreen text-[2.5rem] mb-[-20px]">
                Nossa equipe já passou por
            </h3>
            <h2 className="mb-4 mx-auto font-oswald text-[64px] md:text-[96px] leading-tight" style={{ textShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)', letterSpacing: '-3px' }}>
                Grandes Marcas
            </h2>
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
                className="flex-[0_0_auto] w-[220px] mr-8"
              >
                
                  <div className="relative w-full h-full flex items-center justify-center">                                        
                    <img 
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${brand.image}`}
                      alt={`Logo ${brand.name}`} 
                    
                      className="max-h-[90px] max-w-[200]"
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

