import { Phone, Clock } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-4">

            <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 portrait:text-center">
                <div className="flex justify-between portrait:flex-col portrait:items-center portrait:gap-4 text-center">
                    <div className="w-1/3">
                        <h4 className="font-semibold mb-4 text-xl flex items-center  justify-center gap-2 portrait:mb-2 portrait:pb-2 portrait:justify-center">
                            <Phone className="w-5 h-5" />
                            Contato
                        </h4>
                        <ul className="space-y-2 text-sm text-white">
                            <li>(41) 99963.1609</li>                            
                            <li><a href="mailto:contato@puraweb.com.br" className="text-white hover:text-white transition-colors">contato@puraweb.com.br</a></li>
                        </ul>
                    </div>

                    <div className="w-1/3 flex justify-center">
                        <div className="relative w-full max-w-[210px] mb-4 portrait:mx-auto">
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo-pura.webp`}
                                alt="NotebookExpert"
                                width="200"
                                height="95"                                
                            />
                        </div>
                    </div>
                   
                    <div className="w-1/3">
                        <h4 className="font-semibold mb-4 text-xl flex items-center justify-center gap-2 portrait:mb-2 portrait:pb-2 portrait:justify-center">
                            <Clock className="w-5 h-5" />
                            Atendimento
                        </h4>
                        <p><strong>Segunda a sexta feira</strong> das 9h às 18h </p>
                        <p><strong>Sábados</strong> das 9h às 13h</p>                       
                    </div>
                    
                </div>
                <div className="border-t border-gray-400 mt-12 py-4 text-center text-sm text-gray-400">
                    <p>&copy; 2026 PuraWeb. Todos os direitos reservados.</p>
                </div>
            </div>

            <div className="btn-circle">
                <a href="https://wa.me/5541998870606" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp text-3xl"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
