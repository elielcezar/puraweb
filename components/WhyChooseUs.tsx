'use client';

import { Calendar, Settings, Shield, Zap, TrendingUp, Star } from "lucide-react";
import H2 from "./ui/H2";
import { motion } from "framer-motion";

const WhyChooseUs = () => {  

  return (
    <section
      id="sobre"
      className="why-choose-us-bg py-20 portrait:pb-10"
      style={{ ['--why-choose-us-bg' as string]: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img_88.jpg)` }}
    >
      <div className="container mx-auto px-4 flex portrait:flex-col gap-12">       

        <motion.div 
          className="flex-1 max-w-4xl mx-auto text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >       
            <h2 className="text-deepgray mb-5 leading-tight flex items-center gap-3 tracking-tight text-5xl font-bold portrait:text-3xl">
              Somos a
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo2.png`} alt="Pura Web" className="mt-[-3px]"/>
            </h2>            
            
            <p className="text-[1.15rem] text-deepgray font-normal mb-4 portrait:text-md">             
              Somos especialistas em criar sites <strong>ultra rápidos</strong>, com <strong>design premium</strong> e que funcionam como verdadeiras <strong>máquinas de vendas</strong>.
            </p>

            <p className="text-[1.15rem] text-deepgray font-normal mb-4 portrait:text-md">    
              <strong className="text-deepgray">Sites feitos para converter:</strong> utilizamos modelos pré-construídos, testados e validados para todos os tipos de negócio. 
            </p>          
            <p className="text-[1.15rem] text-deepgray font-normal mb-4 portrait:text-md">            
              <strong>Agilidade e eficiência:</strong> aqui você pode ter a certeza de que seu site será entregue no prazo e com a qualidade que você precisa.
            </p>

            <p className="text-[1.15rem] text-deepgray font-normal mb-4 portrait:text-md">     
              Na <strong  className="text-deepgray">Pura Web</strong> acreditamos que toda empresa merece ter uma presença digital de alto nível sem precisar investir fortunas.
            </p>               
          
        </motion.div>

        <motion.div 
          className="flex-1 max-w-lg flex items-center justify-center relative overflow-hidden shadow-xl portrait:hidden rounded-2xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >        
          <img 
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/why/w05.jpg`}
            alt="About" 
            className="absolute inset-0 w-full object-cover rounded-2xl"
          />
        </motion.div>
                
      </div>
    </section>
  );
};

export default WhyChooseUs;

