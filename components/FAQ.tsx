'use client';

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona?",
      answer: "Basta nos chamar pelo WhatsApp. Nosso time de atendimento vai conhecer melhor seu negócio e o que você precisa para o seu site. Em seguida, vamos enviar o orçamento e sugestões de design que atendem suas necessidades, já fazendo uma rápida simulação de como ficaria o site com a sua marca e cores. Tudo isso de forma gratuita e sem compromisso."
    },
    {
      question: "Quanto tempo leva para criar um site?",
      answer: "O prazo varia dependendo da complexidade de cada projeto. Sites institucionais simples geralmente ficam prontos entre 3 a 5 dias, enquanto projetos mais elaborados podem levar até 1 mês."
    },
    {
      question: "E quanto custa?",
      answer: "A partir de <strong>R$490,00</strong> para projetos rápidos, e você pode parcelar em até 12x sem juros. Mas também desenvolvemos projetos altamente customizados, com as funcionalidades que você precisar e valor a combinar."
    },
    {
      question: "O site será responsivo (mobile)?",
      answer: "Sim! Todos os nossos sites são 100% responsivos, ou seja, se adaptam perfeitamente a qualquer dispositivo: celulares, tablets, notebooks e desktops. Isso é essencial para uma boa experiência do usuário e para o SEO."
    },
    {
      question: "Posso fazer alterações depois?",
      answer: "Claro! Após a entrega, você pode solicitar ajustes e atualizações. Também oferecemos pacotes de manutenção mensal ou você pode contratar alterações pontuais no futuro conforme sua necessidade."
    },
    {
      question: "O que está incluído no investimento?",
      answer: "Nosso pacote inclui: design personalizado, desenvolvimento responsivo, otimização para SEO, integração com WhatsApp, configuração de domínio e hospedagem, formulário de contato e treinamento básico para gerenciar o site."
    },   
    {
      question: "O site terá integração com redes sociais?",
      answer: "Sim! Integramos seu site com todas as redes sociais que você utiliza: Instagram, Facebook, WhatsApp, LinkedIn, YouTube e outras. Também podemos adicionar feed do Instagram e botões de compartilhamento."
    },
    {
      question: "Como funciona o suporte após a entrega?",
      answer: "Oferecemos 30 dias de suporte gratuito após a entrega para ajustes e dúvidas. Após esse período, você pode contratar nosso plano de manutenção mensal ou solicitar suporte pontual quando precisar."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 portrait:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start portrait:grid-cols-1">
          
          {/* Coluna Esquerda - Título e Texto */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:top-32"
          >
            <h3 className="mx-auto leading-tight font-pacifico text-neongreen text-[2.5rem] mb-[-20px] portrait:text-center">
                Perguntas
            </h3>
            <h2 className="mb-6 mx-auto font-oswald text-[64px] md:text-[96px] leading-tight portrait:text-center" style={{ textShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)', letterSpacing: '-3px' }}>
                Frequentes
            </h2>
            <div className="h-1 w-24 bg-neongreen mb-6 rounded portrait:mx-auto" />
            <p className="text-muted-foreground text-lg leading-relaxed portrait:text-center">
              Reunimos as principais dúvidas dos nossos clientes sobre criação de sites. 
              Se você não encontrar a resposta que procura, entre em contato conosco pelo WhatsApp, será um prazer lhe atender.
            </p>
            
            {/* CTA WhatsApp */}
            <div className="mt-8">
              <a 
                href="https://wa.me/554188815706" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-wpp inline-flex bg-neongreen border-neongreen portrait:w-full shadow-xl"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                <span>Quero fazer um teste GRÁTIS!</span>
              </a>
            </div>
          </motion.div>

          {/* Coluna Direita - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-sm border border-border overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-deepgray hover:text-white transition-all duration-300 data-[state=open]:bg-deepgray data-[state=open]:text-white data-[state=open]:hover:bg-deepgray">
                    <span className="text-lg font-semibold pr-4 leading-tight">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-deepgray">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
