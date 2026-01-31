'use client';

import { useState } from "react";
import { 
  Menu, 
  X, 
  Cpu, 
  Monitor, 
  Keyboard, 
  Battery, 
  Wrench, 
  HardDrive, 
  Thermometer, 
  Droplet, 
  Settings, 
  Database 
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { icon: Cpu, text: "Reparo de placa-mãe" },
    { icon: Monitor, text: "Troca de tela / display" },
    { icon: Keyboard, text: "Troca de teclado" },
    { icon: Battery, text: "Troca de bateria" },
    { icon: Wrench, text: "Troca de carcaça / dobradiça" },
    { icon: HardDrive, text: "Upgrade SSD e memória" },
    { icon: Thermometer, text: "Limpeza e pasta térmica" },
    { icon: Droplet, text: "Reparo após líquido derramado" },
    { icon: Settings, text: "Formatação e otimização" },
    { icon: Database, text: "Recuperação de dados" },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-[100] bg-[#141a26]/80 backdrop-blur-sm w-[90%] max-w-[1400px] rounded-full mx-auto pl-2 pr-0 pt-0">
      <nav className=" mx-auto px-4 py-3">
        <div className="flex items-center justify-between portrait:flex-col portrait:items-center portrait:gap-4">
          {/* Logo */}          
          <div className="flex items-center gap-2 justify-between w-full">                 
            <img 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo-pura.webp`}
              alt="Logo" 
              width="121" 
              height="57" 
              className="mt-[-16px]"              
            />
            <nav className="flex items-center gap-6">
              <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`} className="text-white text-sm font-semibold hover:text-neongreen transition-colors uppercase">      
                Quem Somos
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/sobre`} className="text-white text-sm font-semibold hover:text-neongreen transition-colors uppercase">      
                Nossos Serviços
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/sobre`} className="text-white text-sm font-semibold hover:text-neongreen transition-colors uppercase">      
                Portfólio
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/franquia`} className="text-white text-sm font-semibold hover:text-neongreen transition-colors uppercase">      
                FAQ
              </Link>                                      
            </nav>          
            <div>
              <Link href="https://wa.me/5541999631609" target="_blank" rel="noopener noreferrer" className="text-white text-md font-bold transition-colors bg-neongreen hover:bg-primary text-white px-4 py-2 rounded-full hover:border-primary border-2 border-neongreen hover:border-white">      
                Faça um teste, é grátis!
              </Link>
            </div>
          </div>


          {/* Mobile Menu Button */}
         {/* <button
            className="absolute right-4 top-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>*/}
        </div>

        {/* Mobile Navigation */}
        {/*isMenuOpen && (
          <div className="lg:hidden mt-4 py-8 border-t border-border">
            <div className="flex flex-col gap-4">
              
              <div className="flex flex-col gap-2 mb-4">
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/sobre`} className="text-foreground hover:text-accent font-medium py-2 px-4 rounded-md hover:bg-accent/10 transition-colors">
                  Sobre
                </a>
                <a href="#" className="text-foreground hover:text-accent font-medium py-2 px-4 rounded-md hover:bg-accent/10 transition-colors">
                  Atendimento Empresarial
                </a>
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/franquia`} className="text-foreground hover:text-accent font-medium py-2 px-4 rounded-md hover:bg-accent/10 transition-colors">
                  Franquia
                </a>
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/compra-venda`} className="text-foreground hover:text-accent font-medium py-2 px-4 rounded-md hover:bg-accent/10 transition-colors">
                  Compra & Venda
                </a>
                <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/dicas`} className="text-foreground hover:text-accent font-medium py-2 px-4 rounded-md hover:bg-accent/10 transition-colors">
                  Dicas
                </a>
                
              </div>

              <a href="#contact" className="btn-primary text-[17px] px-4 text-center">
                  <i className="fa-regular fa-circle-user"></i>
                  <span className="ml-2 ">Área do Cliente</span>
              </a>  

              <div className="flex space-x-4 portrait:justify-center">
                  <a href="#" className="text-[var(--blue)] hover:text-white transition-colors text-2xl">
                      <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-[var(--blue)] hover:text-white transition-colors text-2xl mr-9">
                      <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-[var(--blue)] hover:text-white transition-colors text-2xl">
                      <i className="fab fa-whatsapp"></i>
                  </a>
              </div>           
            </div>
          </div>
        )*/}
      </nav>
    </header>
  );
};

export default Header;
