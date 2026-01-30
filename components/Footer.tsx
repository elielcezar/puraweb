import { Phone, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className=" text-white pt-48 pb-60 bg-[#202632]" style={{ background: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/clients-background-final-home.jpg) no-repeat top center; background-size: cover; background-attachment: fixed` }}>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">

                <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo-pura.webp`}
                    alt="NotebookExpert"
                    width="250"
                    height="95"
                />
                <p className="text-white text-xl mb-[-20px] mt-6">Se você chegou até aqui é porque nosso produto funciona!</p>
                
                <h2 className="text-white mt-0">Pronto para conquistar mais clientes?</h2>
                
               
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