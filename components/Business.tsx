'use client';

import { Building2, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Webdesign",
    description: "Be unique and make sure your website stands for the crowd.",
    image: "/template1.jpg"
  },
  {
    title: "Webdesign",
    description: "Be unique and make sure your website stands for the crowd.",
    image: "/template2.jpg"
  },
  {
    title: "Webdesign",
    description: "Be unique and make sure your website stands for the crowd.",
    image: "/template3.jpg"
  },
  {
    title: "Webdesign",
    description: "Be unique and make sure your website stands for the crowd.",
    image: "/template4.jpg"
  },
  {
    title: "Webdesign",
    description: "Be unique and make sure your website stands for the crowd.",
    image: "/template5.jpg"
  },
  {
    title: "Webdesign",
    description: "Be unique and make sure your website stands for the crowd.",
    image: "/template6.jpg"
  },
  {
    title: "Webdesign",
    description: "Be unique and make sure your website stands for the crowd.",
    image: "/template7.jpg"
  },
  {
    title: "Webdesign",
    description: "Be unique and make sure your website stands for the crowd.",
    image: "/template8.jpg"
  }
]

const Business = () => {
  return (
    <section className="py-20 text-primary-foreground" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/parallax-bottom.jpg) no-repeat top center; background-size: cover;` }}>
      
      
        <div className="text-center mb-12">
          <h2 className="mb-4">
              Atendimento para Empresas
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Oferecemos planos corporativos e parcerias B2B, ideais para empresas que utilizam grande volume de notebooks.
            </p>
        </div>       
        
        <div className="grid grid-cols-4 gap-2 mx-auto 2xl:gap-10 max-w-[90%]">
          {portfolioItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center text-white mb-16">
              <img src={item.image} alt={item.title} className="w-full max-w-[420px] object-cover" />
              <div className="mt-8">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-l">{item.description}</p>
              </div>
            </div>
          ))}

        </div>        
      
    </section>
  );
};

export default Business;
