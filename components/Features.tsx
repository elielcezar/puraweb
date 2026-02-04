'use client';
import { DollarSign, FileSignature, ZapIcon, Router, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const Features = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Investimento<br/>único",
      description: "Pague 1 vez, use para sempre, sem taxas adicionais ou mensalidades.",
      image: "/feature1.jpg"
    },
    {
      icon: FileSignature,
      title: "Visual moderno e<br/>profissional",
      description: "Sua vitrine aberta para o mundo, mesmo quando você está descansando.",
      image: "/feature2.jpg"
    },
    {
      icon: ZapIcon,
      title: "Alto desempenho<br/>no Google",
      description: "Sites otimizados para desempenho de SEO e carregamento rápido.",
      image: "/feature3.jpg"
    },
    {
      icon: Router,
      title: "Configuração de<br/>Domínio e Hospedagem",
      description: "Deixe tudo com a gente, cuidamos de tudo para você focar em seus clientes.",
      image: "/feature4.jpg"
    },
    {
      icon: Share2,
      title: "Integrações com<br/>plataformas externas",
      description: "Integrações com plataformas externas como WhatsApp, Facebook, Instagram, entre outras.",
      image: "/feature5.jpg"
    },
    {
      icon: FaWhatsapp,
      title: "Botão de<br/>WhatsApp",
      description: "Mais facilidade para seus clientes com um botão de WhatsApp sempre visível na tela.",
      image: "/feature6.jpg"
    }
  ];

  return (
    <section className="pt-32 pb-10 bg-slate-50 portrait:pt-20 portrait:pb-5">
      <div className="container mx-auto px-4">   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center border-2 border-neongreen rounded-sm p-8 shadow-xl hover:shadow-2xl mb-16 transition-all duration-300 hover:mt-[-20px]">
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 bg-neongreen rounded-full mt-[-70px] relative z-10">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <h3 dangerouslySetInnerHTML={{ __html: benefit.title }} className="text-3xl font-bold mb-8 font-oswald uppercase mx-auto leading-tight"></h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
