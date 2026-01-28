'use client';
import { ShieldCheck, TrendingUp, DollarSign, Database, AlertCircle, FileSignature, BoltIcon, ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";



const Features = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Investimento único e sem taxas",
      description: "Pague 1 vez, use para sempre",
      image: "/feature1.jpg"
    },
    {
      icon: FileSignature,
      title: "Visual moderno e profissional",
      description: "Sua vitrine aberta para o mundo, mesmo quando você está descansando.",
      image: "/feature2.jpg"
    },
    {
      icon: ZapIcon,
      title: "Alto desempenho no Google",
      description: "Sites otimizados para desempenho de SEO e carregamento rápido.",
      image: "/feature3.jpg"
    },
    {
      icon: DollarSign,
      title: "Confirguração de Domínio e Hospedagem",
      description: "Deixe tudo com a gente, cuidamos de tudo para você focar em seus clientes.",
      image: "/feature1.jpg"
    },
    {
      icon: FileSignature,
      title: "Integrações com plataformas externas",
      description: "Integrações com plataformas externas como WhatsApp, Facebook, Instagram, entre outras.",
      image: "/feature2.jpg"
    },
    {
      icon: ZapIcon,
      title: "Botão de WhatsApp",
      description: "Mais facilidade e agilidade para atender seus clientes.",
      image: "/feature3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">        
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <img src={benefit.image} alt={benefit.title} className="w-full shadow-xl" />
              <benefit.icon className="w-20 h-20 text-white mx-auto mb-4 bg-neongreen rounded-full p-6 mt-[-40px] relative z-10" />
              <h3 className="text-xl font-bold mb-2 font-oswald uppercase mx-auto leading-tight">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
