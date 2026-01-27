'use client';

import { Calendar, Settings, Shield, Zap, TrendingUp, Star } from "lucide-react";
import H2 from "./ui/H2";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Calendar,
      text: "Site pronto em tempo recorde"
    },
    {
      icon: Settings,
      text: "Suporte ágil via WhatsApp"
    },
    {
      icon: Shield,
      text: "Otimizado para o Google"
    },
    {
      icon: Zap,
      text: "Investimento único e sem taxas"
    },
    {
      icon: TrendingUp,
      text: "Visual moderno e profissional"
    },
    {
      icon: Star,
      text: "Perfeito para celular e tablet"
    }
  ];

  return (
    <section id="sobre" className="py-20 portrait:py-0" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img_88.jpg) no-repeat top right; background-size: cover;` }}>
      <div className="container mx-auto px-4 flex portrait:flex-col gap-12">       

        <motion.div 
          className="flex-1 max-w-4xl mx-auto text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >       
            <h2 className="text-foreground mb-4 leading-tight">
            Por que escolher a<br/>
            Pura Web?
            </h2>
            <div className="h-1 w-24 bg-neongreen mx-left mb-6 rounded" />
            
            <p className="text-2xl leading-tight text-muted-foreground leading-relaxed mb-6">
              Porque na Pura Web acreditamos que toda empresa merece ter uma presença digital de alto nível sem precisar investir fortunas.
            </p>
            
            <p className="text-lg font-medium text-primary">
              Combinamos agilidade com um processo de criação simplificado para entregar resultados reais. Somos especialistas em transformar a presença digital de pequenas empresas, criando sites bonitos e que funcionam como verdadeiras máquinas de vendas. Com a Pura Web, você tem a garantia de um serviço transparente, suporte humanizado e o melhor custo-benefício do mercado para colocar sua empresa no mapa.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-card p-4 text-center border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-14 h-14 bg-neonred rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>              
                    <p className="text-muted-foreground">{feature.text}</p>
                  </div>
                );
              })}
            </div>
        </motion.div>

        <motion.div 
          className="flex-1 max-w-lg flex items-center justify-center relative min-h-[500px] md:min-h-[600px] overflow-hidden"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >        
          <img 
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img01.jpg`}
            alt="About" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
                
      </div>
    </section>
  );
};

export default WhyChooseUs;

