'use client';
import { ShieldCheck, TrendingUp, DollarSign, Database, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Features = () => {
  const benefits = [
    {
      icon: AlertCircle,
      title: "Aumente suas Vendas",
      description: "Um site profissional pode render até 20% a mais de faturamento."
    },
    {
      icon: TrendingUp,
      title: "Presença 24h",
      description: "Sua vitrine aberta para o mundo, mesmo quando você está descansando."
    },
    {
      icon: ShieldCheck,
      title: "Mais profissionalismo",
      description: "Pare de usar árvores de links genéricas. Leve seu cliente para sua própria casa digital."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">        
           
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card p-4 text-center border border-border shadow-sm hover:shadow-md transition-shadow">
              <benefit.icon className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
