
export function openWhatsApp(message: string = 'Olá! Gostaria de solicitar um orçamento para assistência técnica.') {
    if (typeof window !== 'undefined') {
        window.open(`https://wa.me/5541998870606?text=${encodeURIComponent(message)}`, '_blank');
    }
}


export function scrollToSection(sectionId: string, offset: number) {
    if (typeof window !== 'undefined') {

        const target = document.querySelector(sectionId);

        if (target) {
            window.scroll({
                top: (target as HTMLElement).offsetTop - offset,
                behavior: "smooth"
            });
        }else{
            console.error(`Section with ID ${sectionId} not found`);
        }       
        
    }
}


