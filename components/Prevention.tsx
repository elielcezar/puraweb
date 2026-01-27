'use client';
import { ShieldCheck, TrendingUp, DollarSign, Database, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Prevention = () => {
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
    },
    {
      icon: Database,
      title: "Reduz riscos de perda de dados",
      description: "A prevenção ajuda a identificar problemas em HDs e SSDs antes que falhem."
    },
    {
      icon: DollarSign,
      title: "Economiza dinheiro",
      description: "Corrigir um defeito no início é muito mais barato do que trocar peças danificadas."
    }
  ];

  const dailyCare = [
    "Evite usar o notebook sobre superfícies macias (como cama ou sofá). Elas bloqueiam a ventilação e causam superaquecimento.",
    "Não mantenha o notebook sempre ligado na tomada. Isso reduz a vida útil da bateria.",
    "Mantenha o teclado limpo e protegido. Poeira e migalhas podem danificar as teclas.",
    "Use mochilas ou capas acolchoadas para transporte.",
    "Faça backup regularmente para proteger seus dados."
  ];

  return (
    <section className="pt-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Preventive Maintenance */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">
            Entrega em tempo recorde 
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto mb-6 rounded" />
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Você não precisa entender de programação. Nós entregamos tudo configurado para você focar no que importa: atender seus clientes. Escolha seu modelo e nós cuidamos do resto.
            </p>
          </div>          
        
            <motion.div 
              className="overflow-hidden"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >            
              <img 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/portfolios.webp`}
                alt="Business"                 
              />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Prevention;
