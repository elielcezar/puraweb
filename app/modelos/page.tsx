import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Target, Shield, Heart, Zap, GlobeIcon } from "lucide-react";
import Map from "@/components/Map";
import { PointerIcon, BookImage, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nós | Notebook Expert - 16 Anos de Experiência",
  description: "Assistência técnica especializada em notebooks e MacBooks com mais de 16 anos de experiência em Curitiba. Qualidade, confiança e garantia no atendimento.",
  keywords: "sobre notebook expert, assistência técnica Curitiba, experiência notebooks, empresa especializada notebooks",
  openGraph: {
    title: "Sobre Nós | Notebook Expert - 16 Anos de Experiência",
    description: "Assistência técnica especializada em notebooks e MacBooks com mais de 16 anos de experiência em Curitiba.",
    url: "https://eliel.dev/clients/notebookexpert/sobre",
    type: "website",
    images: [
      {
        url: "/about3.jpg",
        width: 1200,
        height: 630,
        alt: "Sobre Notebook Expert",
      },
    ],
  },
};


const models = [
  {
    id: 1,
    name: "Modelo 1",
    description: "Descrição do modelo 1",
    image: "/modelos/modelo01.webp",
  },
  {
    id: 1,
    name: "Modelo 1",
    description: "Descrição do modelo 1",
    image: "/modelos/modelo01.webp",
  },
  {
    id: 1,
    name: "Modelo 1",
    description: "Descrição do modelo 1",
    image: "/modelos/modelo01.webp",
  },
  {
    id: 1,
    name: "Modelo 1",
    description: "Descrição do modelo 1",
    image: "/modelos/modelo01.webp",
  },
  {
    id: 1,
    name: "Modelo 1",
    description: "Descrição do modelo 1",
    image: "/modelos/modelo01.webp",
  },
  {
    id: 1,
    name: "Modelo 1",
    description: "Descrição do modelo 1",
    image: "/modelos/modelo01.webp",
  },
];

export default function ModelosPage() {  

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        
        {/* Hero Section */}
        <section className="pt-44 pb-20 relative bg-gradient-to-r from-[var(--darkblue)] via-[var(--deepblue)] to-[var(--blue)] text-white portrait:py-16 portrait:pt-28" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/parallax-bottom2.jpg) no-repeat bottom left; background-size: cover; background-attachment: fixed` }}>
          <div className="container mx-auto px-4">

          <div className="text-center mb-32">            
            <h3 className="mx-auto leading-tight font-pacifico text-neongreen text-[2.5rem] mb-[-20px]">
              Páginas validadas para você
            </h3>
            <h2 className="mb-6 mx-auto font-oswald text-[96px] leading-tight text-white" style={{ textShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)', letterSpacing: '-3px' }}>
              VENDER MUITO MAIS
            </h2>
            <div className="h-1 w-24 bg-neongreen mx-auto mb-6 rounded" />           
          </div>         

            <div className="flex gap-12 mt-10 mb-20 text-center text-white text-md font-semibold">
                <p className="flex-1 flex flex-col items-center justify-center max-w-[350px] mx-auto">                                    
                  <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 bg-neongreen rounded-full mt-[-70px] relative z-10">
                    <PointerIcon className="w-10 h-10 text-white" />
                  </div>
                  <span>Você escolhe os modelos que fazem mais sentido para o seu negócio</span>
                </p>
                <p className="flex-1 flex flex-col items-center justify-center max-w-[350px] mx-auto">                  
                  <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 bg-neongreen rounded-full mt-[-70px] relative z-10">
                    <BookImage className="w-10 h-10 text-white" />
                  </div>
                  <span>Nós pegamos o melhor de cada um e criamos um projeto personalizado para você</span>
                </p>
                <p className="flex-1 flex flex-col items-center justify-center max-w-[350px] mx-auto">                  
                  <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4 bg-neongreen rounded-full mt-[-70px] relative z-10">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <span>Nós colocamos no ar configurado e otimizado para você começar a vender</span>
                </p>
              </div>          
            </div>      

           {/* CTA WhatsApp */}
            <div className="flex justify-center gap-8 w-full max-w-[700px] mx-auto mt-10">             
              <a  href="https://wa.me/5541999631609" target="_blank" rel="noopener noreferrer" className="py-4 px-8 btn-wpp bg-transparent border-3 border-neongreen hover:text-white hover:bg-neongreen hover:border-neongreen shadow-[0px_5px_25px_rgb(23_207_198_/_50%)] transition-all duration-300 hover:bg-neongreen/90">
                <i className="fab fa-whatsapp text-2xl"></i>
                <span>Solicite uma simulação GRÁTIS!</span>
              </a>

            </div>          
        </section>     

        <section className="py-20 text-center">
          <div className="w-full max-w-[90%] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {models.map((model) => (
                <div key={model.id}>
                  <img src={model.image} alt={model.name} className="w-full h-full object-cover shadow-xl" />
                </div>
              ))}
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
}

