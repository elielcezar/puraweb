'use client';
import { ShieldCheck, TrendingUp, DollarSign, Database, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Features = () => {
  const benefits = [
    {
      icon: AlertCircle,
      title: "Evita superaquecimento",
      description: "A poeira acumulada impede a ventilação, causando lentidão e danos à placa-mãe."
    },
    {
      icon: TrendingUp,
      title: "Aumenta a vida útil",
      description: "Limpezas periódicas e troca da pasta térmica reduzem o desgaste interno."
    },
    {
      icon: ShieldCheck,
      title: "Melhora o desempenho",
      description: "Um sistema limpo e otimizado roda mais rápido e com menos travamentos."
    }
  ];

  return (
    <section className="py-20 bg-neongreen">
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
