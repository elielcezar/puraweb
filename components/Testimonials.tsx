'use client';

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Mariana Santos",
            role: "Proprietária de Salão de Beleza",
            content: "Meu salão ganhou uma presença online incrível! O site ficou lindo e minhas clientes adoraram poder agendar pelo WhatsApp direto da página. Já recebi várias clientes novas que me encontraram pelo Google.",
            rating: 5,
            location: "Curitiba, PR"
        },
        {
            name: "Roberto Mendes",
            role: "Advogado",
            content: "Profissionalismo do início ao fim. O site transmite exatamente a seriedade que meu escritório precisa.",
            rating: 5,
            location: "São Paulo, SP"
        },
        {
            name: "Fernanda Lima",
            role: "Nutricionista",
            content: "Finalmente tenho um site que mostra meu trabalho de forma profissional! A integração com o Instagram ficou perfeita e o botão do WhatsApp facilita muito o contato dos pacientes. Super recomendo a Pura Web!",
            rating: 5,
            location: "Belo Horizonte, MG"
        },
        {
            name: "Carlos Eduardo",
            role: "Dono de Restaurante",
            content: "O cardápio digital integrado ao site foi um diferencial enorme. Clientes consultam antes de vir e já chegam sabendo o que pedir.",
            rating: 5,
            location: "Rio de Janeiro, RJ"
        },
        {
            name: "Juliana Ferreira",
            role: "Personal Trainer",
            content: "Eu tinha medo de investir em um site, mas a Pura Web me mostrou que era mais acessível do que eu imaginava. O resultado superou todas as expectativas! Meus alunos adoram acessar os treinos e tirar dúvidas pelo site.",
            rating: 5,
            location: "Porto Alegre, RS"
        },
        {
            name: "André Souza",
            role: "Fotógrafo",
            content: "Meu portfólio online ficou simplesmente incrível. As fotos carregam rápido e o layout valoriza cada trabalho.",
            rating: 5,
            location: "Florianópolis, SC"
        },
        {
            name: "Patricia Oliveira",
            role: "Arquiteta",
            content: "A equipe entendeu exatamente o que eu precisava. Um site elegante que mostra meus projetos de forma impactante. Já fechei 3 projetos novos com clientes que me encontraram pelo site!",
            rating: 5,
            location: "Curitiba, PR"
        },
        {
            name: "Thiago Martins",
            role: "Corretor de Imóveis",
            content: "Antes eu dependia só de portais. Agora tenho meu próprio site com todos os imóveis e os clientes me veem como mais profissional.",
            rating: 5,
            location: "Brasília, DF"
        },
        {
            name: "Camila Rocha",
            role: "Confeiteira",
            content: "Minha confeitaria cresceu demais depois do site! Consigo mostrar todos os bolos, doces e os clientes fazem encomenda direto pelo WhatsApp. O catálogo de produtos é atualizado facilmente. Melhor investimento que fiz!",
            rating: 5,
            location: "Joinville, SC"
        },
        {
            name: "Lucas Almeida",
            role: "Dentista",
            content: "Atendimento excepcional! Tiraram todas as minhas dúvidas e entregaram um site moderno e funcional para meu consultório.",
            rating: 5,
            location: "Campinas, SP"
        },
        {
            name: "Renata Campos",
            role: "Professora de Inglês",
            content: "O site me ajudou a profissionalizar meu trabalho como professora particular. Agora tenho uma página com minha metodologia, valores e depoimentos de alunos. A credibilidade aumentou muito!",
            rating: 5,
            location: "Curitiba, PR"
        },
        {
            name: "Marcos Paulo",
            role: "Mecânico",
            content: "Nunca imaginei que uma oficina mecânica precisasse de site, mas depois que fiz, vi a diferença. Apareço no Google Maps e recebo clientes novos toda semana.",
            rating: 5,
            location: "Londrina, PR"
        },
        {
            name: "Isabela Costa",
            role: "Designer de Interiores",
            content: "A Pura Web capturou perfeitamente a essência do meu trabalho. O site tem um visual sofisticado e moderno, exatamente como meus projetos. A galeria de fotos ficou espetacular e o carregamento é super rápido!",
            rating: 5,
            location: "São Paulo, SP"
        },
        {
            name: "Ricardo Gomes",
            role: "Personal Organizer",
            content: "Site entregue antes do prazo e com qualidade impecável. O suporte pós-entrega também é excelente!",
            rating: 5,
            location: "Curitiba, PR"
        },
        {
            name: "Amanda Ribeiro",
            role: "Psicóloga",
            content: "Precisava de um site acolhedor e profissional ao mesmo tempo, e foi exatamente o que recebi. Meus pacientes elogiam muito a facilidade de encontrar informações e agendar consultas. O investimento valeu cada centavo!",
            rating: 5,
            location: "Maringá, PR"
        },
        {
            name: "Felipe Nascimento",
            role: "Instrutor de Música",
            content: "Agora meus alunos podem conhecer meu trabalho antes mesmo da primeira aula. O site mostra minha trajetória, os instrumentos que ensino e tem até vídeos de apresentações. Muito satisfeito!",
            rating: 5,
            location: "Curitiba, PR"
        }
    ];

    return (
        <section id="depoimentos" className="py-20 px-4 md:px-10">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-10">            
                    <h3 className="mx-auto leading-tight font-pacifico text-neongreen text-4xl mb-[-25px]">
                        Centenas de clientes
                    </h3>
                    <h2 className="mb-6 mx-auto font-oswald text-[64px] md:text-[96px] leading-tight" style={{ textShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)', letterSpacing: '-3px' }}>
                        satisfeitos
                    </h2>
                    <div className="h-1 w-24 bg-neongreen mx-auto mb-6 rounded" />
                    <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3 shadow-sm mb-0">
                        <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                        <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                        <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                        <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                        <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                        <p>
                            <span className="text-foreground text-2xl font-bold">4.8</span>
                            <span className="text-foreground text-md font-normal">/5.0</span>
                        </p>
                    </div>
                </div>    

                {/* Masonry Grid */}
                <motion.div 
                    className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="break-inside-avoid mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <div className="group bg-white p-6 border border-border hover:border-neongreen rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 relative">
                                <Quote className="absolute top-4 right-4 w-8 h-8 text-deepgray/10" />

                                <div className="flex items-center mb-4 gap-3">
                                    <div className="w-11 h-11 bg-neongreen/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-neongreen font-bold text-lg">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground text-md">{testimonial.name}</h4>                                        
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{testimonial.content}"</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Google Reviews Badge */}
                <div className="text-center mt-10 flex flex-col items-center">
                    <p className="text-muted-foreground mb-4">Avaliações verificadas de clientes reais</p>
                    <div className="bg-white px-6 py-3 rounded-full shadow-md border inline-flex items-center gap-3">
                        <img
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/google-logo.png`}
                            alt="Google"
                            width="80"
                            height="26"
                        />
                        <span className="text-sm font-medium text-foreground">Empresa Verificada</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
