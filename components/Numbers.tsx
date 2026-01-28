'use client';
import { ShieldCheck, TrendingUp, DollarSign, Database, AlertCircle, FileSignature, BoltIcon, ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";



const Numbers = () => {

  return (
    <section className="flex items-center justify-center">
       
        <div className="flex-1 px-12 py-16 bg-neonred relative min-h-[350px] flex flex-col items-center justify-around overflow-hidden text-center">              
              <h3 className="text-[256px] tracking-tight font-normal font-archivo leading-tight text-white/10 absolute bottom-[-60px] right-[-50px]">32%</h3>
              <ShieldCheck className="w-20 h-20 text-neonred mx-auto mb-4 bg-white rounded-full p-6 relative z-10" />
              <p className="text-white text-xl font-light max-w-[70%]">Páginas que carregam em menos de 3 segundos tem até <strong className="text-white text-3xl font-bold">32%</strong> mais chances de ser encontrado pelo Google</p>
        </div>        
        <div className="flex-1 px-12 py-16 bg-[#17cfab] relative min-h-[350px] flex flex-col items-center justify-around overflow-hidden text-center">              
            <h3 className="text-[256px] tracking-tight font-normal font-archivo leading-tight text-white/10 absolute bottom-[-60px] right-[-50px]">20%</h3>
            <ShieldCheck className="w-20 h-20 text-neongreen mx-auto mb-4 bg-white rounded-full p-6 relative z-10" />
              <p className="text-white text-xl font-light max-w-[70%]">Ter um site profissional por aumentar seu faturamento em até <strong className="text-white text-3xl font-bold">20%</strong></p>
        </div>
        <div className="flex-1 px-12 py-16 bg-neonblue relative min-h-[350px] flex flex-col items-center justify-around overflow-hidden text-center">              
            <h3 className="text-[256px] tracking-tight font-normal font-archivo leading-tight text-white/10 absolute bottom-[-60px] right-[-50px]">200%</h3>
            <ShieldCheck className="w-20 h-20 text-neonblue mx-auto mb-4 bg-white rounded-full p-6 relative z-10" />
            <p className="text-white text-xl font-light max-w-[70%]">Melhore sua visibilidade no Google em até <strong className="text-white text-3xl font-bold">200%</strong> e reduza seus custos com marketing</p>
        </div>
    </section>
  );
};

export default Numbers;
