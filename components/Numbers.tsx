'use client';
import { ShieldCheck, TrendingUp, DollarSign, Database, AlertCircle, FileSignature, BoltIcon, ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";



const Numbers = () => {

  const numbers = [
    {
      title: "32%",
      description: "Páginas que carregam em menos de 3 segundos tem até 32% mais chances de serem encontradas pelo Google",
      image: "/feature1.jpg"
    },
    {
      title: "20%",
      description: "Ter um site profissional transmite confiança para o cliente e pode aumentar seu faturamento em até 20%",
      image: "/feature2.jpg"
    },
    {
      title: "200%",
      description: "Melhore sua visibilidade no Google em até 200% e reduza seus custos com marketing digital",
      image: "/feature3.jpg"
    }
  ];
  return (
    <section className="flex items-center justify-center p-10 pt-32 pb-24 gap-10 bg-[#161c24]" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/parallax-bottom.jpg) no-repeat bottom center; background-size: cover; background-attachment: fixed` }}>               
       {numbers.map((number, index) => (
        <div key={index} className="flex-1 p-12 pt-4 relative  flex flex-col items-center justify-start text-center shadow-xl" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/parallax-home.jpg) no-repeat top center; background-size: cover; background-attachment: fixed` }}>
          <h3 className="text-[126px] font-bold font-oswald leading-tight text-neongreen tracking-tight mt-[-90px] mb-4" style={{ textShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)' }}>{number.title}</h3>          
          <p className="text-white text-lg font-normal max-w-[350px] mx-auto leading-tight">{number.description}</p>
        </div>
       ))}
    </section>
  );
};

export default Numbers;
