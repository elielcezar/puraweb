'use client';

import { Calendar, Settings, Shield, Zap, TrendingUp, Star } from "lucide-react";
import H2 from "./ui/H2";
import { motion } from "framer-motion";

const WhyChooseUs = () => {  

  return (
    <section id="sobre" className="py-20 portrait:py-0" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img_88.jpg) no-repeat top right; background-size: cover` }}>
      <div className="container mx-auto px-4 flex portrait:flex-col gap-12">       

        <motion.div 
          className="flex-1 max-w-4xl mx-auto text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >       
            <h2 className="text-foreground mb-4 leading-tight flex items-center gap-3 tracking-tight">
            Somos a
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo2.png`} alt="Pura Web" className="mt-[-10px]"/>
            </h2>            
            
            <p className="text-[1.95rem] leading-tight text-primary leading-relaxed mb-6 font-oswald">
              Acreditamos que toda empresa merece ter uma presença digital de alto nível sem precisar investir fortunas.
            </p>            
            <p className="text-[1.15rem] font-normal text-muted-foreground mb-4">
            Na Pura Web combinamos agilidade com um processo de criação simplificado para entregar resultados reais. 
            </p>
            <p className="text-[1.15rem] font-normal text-muted-foreground mb-4">
              Somos especialistas em transformar a presença digital de pequenas empresas, criando sites bonitos e que funcionam como verdadeiras máquinas de vendas.
            </p>
            <p className="text-[1.15rem] font-normal text-muted-foreground mb-4">
              Com a Pura Web, você tem a garantia de um serviço transparente, suporte agilizado e o melhor custo-benefício do mercado para colocar sua empresa no mapa.
            </p>
          
        </motion.div>

        <motion.div 
          className="flex-1 max-w-lg flex items-center justify-center relative overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >        
          <img 
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img01.jpg`}
            alt="About" 
            className="absolute inset-0 w-full object-cover rounded-sm"
          />
        </motion.div>
                
      </div>
    </section>
  );
};

export default WhyChooseUs;

