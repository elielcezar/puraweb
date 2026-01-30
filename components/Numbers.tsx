'use client';
import { ShieldCheck, TrendingUp, DollarSign, Database, AlertCircle, FileSignature, BoltIcon, ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";



const Numbers = () => {

  const numbers = [
    {
      title: "Velocidade",
      description: "Páginas que carregam em menos de 3 segundos aumentam as chances de serem encontradas pelo Google em até <strong>32%</strong>",
      image: "/feature1.jpg"
    },
    {
      title: "Confiança",
      description: "Ter um site profissional transmite confiança para o cliente e pode aumentar seu faturamento em até <strong>26%</strong>",
      image: "/feature2.jpg"
    },
    {
      title: "Economia",
      description: "Reduza seus custos com marketing digital ao melhorar sua visibilidade no Google em até <strong>200%</strong>",
      image: "/feature3.jpg"
    }
  ];
  return (
    <section className="flex items-center justify-center p-10 pt-32 pb-24 gap-10 bg-[#161c24]" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/parallax-bottom.jpg) no-repeat bottom center; background-size: cover; background-attachment: fixed` }}>               
       {numbers.map((number, index) => (
        <div key={index} className="flex-1 px-12 pt-4 pb-8 relative flex flex-col items-center justify-start text-center shadow-xl" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/parallax-home.jpg) no-repeat top center; background-size: cover; background-attachment: fixed` }}>
          <h3 className="text-[66px] font-bold font-oswald uppercase leading-tight text-neongreen tracking-tight mt-[-60px] mb-4" style={{ textShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)' }}>{number.title}</h3>          
          <p dangerouslySetInnerHTML={{ __html: number.description }} className="numbers-description"></p>
        </div>
       ))}
    </section>
  );
};

export default Numbers;
