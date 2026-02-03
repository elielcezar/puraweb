'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X} from "lucide-react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { scrollToSection} from "@/utils/helpers";

const DRAWER_ANIMATION_MS = 250;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCloseDrawer = useCallback(() => {
    if (!isMenuOpen && !isClosing) return;
    setIsMenuOpen(false);
    setIsClosing(true);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setIsClosing(false);
      closeTimeoutRef.current = null;
    }, DRAWER_ANIMATION_MS);
  }, [isMenuOpen, isClosing]);

  const handleToggleMenu = useCallback(() => {
    if (isClosing) return;
    if (isMenuOpen) {
      handleCloseDrawer();
    } else {
      setIsMenuOpen(true);
    }
  }, [isMenuOpen, isClosing, handleCloseDrawer]);

  // Bloquear scroll do body quando o menu mobile estiver aberto (evita barra de rolagem)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Limpar timeout ao desmontar
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);


  return (
    <header className="fixed top-3 left-0 right-0 z-[100] bg-[#141a26]/80 backdrop-blur-sm landscape:w-[90%] max-w-[1400px] rounded-full mx-auto pl-2 pr-0 pt-0">
      <nav className=" mx-auto px-4 py-3">
        <div className="flex items-center justify-between portrait:flex-col portrait:items-center portrait:gap-4">
          {/* Logo */}          
          <div className="flex items-center gap-2 justify-between w-full">                 
            <div className="landscape:w-[20%]">
              <img 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo-pura.webp`}
                alt="Logo" 
                width="121" 
                height="57" 
                className="mt-[-16px] portrait:w-[100px] portrait:h-[50px]"              
              />
            </div>
           
            <nav className="flex items-center justify-center gap-12 portrait:hidden landscape:w-[60%]">
              <Link href="#" onClick={() => scrollToSection('#sobre', 50)} className="text-white text-sm font-semibold hover:text-neongreen transition-colors uppercase cursor-pointer">      
                Quem Somos
              </Link>
              {/*<Link href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/modelos`} className="text-white text-sm font-semibold hover:text-neongreen transition-colors uppercase">      
                Nossos Sites
              </Link> */ }           
              <Link href="#" onClick={() => scrollToSection('#faq', 50)} className="text-white text-sm font-semibold hover:text-neongreen transition-colors uppercase cursor-pointer">      
                Como Funciona
              </Link>                                      
              <Link href="#" onClick={() => scrollToSection('#contato', 50)} className="text-white text-sm font-semibold hover:text-neongreen transition-colors uppercase cursor-pointer">      
                Contato
              </Link>                                      
            </nav>          
            <div className="landscape:w-[20%] text-right">
              <Link href="#" onClick={() => scrollToSection('#contato', 50)} className="text-white text-md font-bold transition-colors bg-neongreen hover:bg-deepgray text-white px-4 py-2 rounded-full border-2 border-neongreen hover:border-white portrait:py-1 portrait:px-3 portrait:mr-12">      
                Teste, é grátis!
              </Link>
            </div>
          </div>


          {/* Mobile Menu Button - only on mobile */}
          <button
            type="button"
            className="absolute right-4 top-4 md:hidden"
            onClick={handleToggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            disabled={isClosing}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile drawer: renderizado em portal; ao fechar desliza para a esquerda */}
        {(isMenuOpen || isClosing) &&
          typeof document !== "undefined" &&
          createPortal(
            <div className="md:hidden">
              <div
                className="fixed inset-0 bg-black/50 z-[200]"
                aria-hidden
                onClick={handleCloseDrawer}
              />
              <aside
                className={`fixed left-0 top-0 bottom-0 w-[85vw] min-w-[280px] bg-background shadow-xl z-[210] flex flex-col pt-20 px-6 pb-6 overflow-y-auto ${isClosing ? "drawer-slide-out" : "drawer-slide-in"}`}
                role="dialog"
                aria-label="Menu de navegação"
              >
                <nav className="flex flex-col gap-1">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`}
                    className="text-foreground hover:text-neongreen font-semibold py-3 px-4 rounded-md hover:bg-muted transition-colors uppercase text-sm"
                    onClick={handleCloseDrawer}
                  >
                    Quem Somos
                  </Link>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/sobre`}
                    className="text-foreground hover:text-neongreen font-semibold py-3 px-4 rounded-md hover:bg-muted transition-colors uppercase text-sm"
                    onClick={handleCloseDrawer}
                  >
                    Nossos Sites
                  </Link>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/franquia`}
                    className="text-foreground hover:text-neongreen font-semibold py-3 px-4 rounded-md hover:bg-muted transition-colors uppercase text-sm"
                    onClick={handleCloseDrawer}
                  >
                    Como Funciona
                  </Link>
                </nav>
                <div className="mt-6">
                  <Link
                    href="https://wa.me/5541999631609"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wpp inline-flex text-center w-full justify-center"
                    onClick={handleCloseDrawer}
                  >
                    Teste, é grátis!
                  </Link>
                </div>
              </aside>
            </div>,
            document.body
          )}
      </nav>
    </header>
  );
};

export default Header;
