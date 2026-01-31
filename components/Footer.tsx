import { Phone, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className=" text-white pt-32 pb-44 bg-[#202632]" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/bg-geral3.jpg) no-repeat bottom left; background-size: cover; background-attachment: fixed` }}>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">

                <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo-pura.webp`}
                    alt="NotebookExpert"
                    width="250"
                    height="95"
                />               
                
                <h2 className="text-white mt-6 mb-0">Pronto para conquistar mais clientes?</h2>

                <p className="text-white text-xl mt-[-20px] mb-12">Entre em contato e vamos fazer uma simulação com sua marca totalmente GRÁTIS! 😎</p>
                
               
                <div className="flex justify-between portrait:flex-col portrait:items-center portrait:gap-4 text-center w-full">
                    <div className="w-1/2 flex justify-center items-center gap-4 border-r">
                        <Phone className="w-10 h-10 text-neongreen" />
                        <p className="text-2xl">(41) 99963.1609</p>
                    </div>
                    <div className="w-1/2 flex justify-center items-center gap-4 border-l">
                        <Mail className="w-10 h-10 text-neongreen" />
                        <p className="text-2xl">contato@puraweb.com.br</p>
                    </div>                    
                </div>

            </div>

            <div className="btn-circle">
                <a href="https://wa.me/5541999631609" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp text-4xl"></i>
                </a>
            </div>
           
        </footer>
    );
};

export default Footer;