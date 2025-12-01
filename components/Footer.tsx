import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 border-b border-slate-800 pb-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 bg-white p-4 rounded-lg inline-block">
               <img 
                 src="https://i.ibb.co/B2HKKKSn/Whats-App-Image-2025-11-23-at-12-50-20.jpg" 
                 alt="Priscila Valongo Logo" 
                 className="h-48 md:h-72 w-auto object-contain"
               />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Clínica especializada em reabilitação física e método Pilates. Cuidando da sua saúde com ciência, ética e movimento consciente.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-brand-400 transition-colors cursor-pointer block">A Clínica</a></li>
                <li><a href="#classes" onClick={(e) => scrollToSection(e, 'classes')} className="hover:text-brand-400 transition-colors cursor-pointer block">Tratamentos</a></li>
                <li><a href="#team" onClick={(e) => scrollToSection(e, 'team')} className="hover:text-brand-400 transition-colors cursor-pointer block">Corpo Clínico</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-brand-400 transition-colors cursor-pointer block">Agendamento</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Social</h4>
             <div className="flex space-x-4">
                <a href="https://www.instagram.com/privalongofisio/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-brand-600 hover:text-white transition-all">
                    <Instagram size={20} />
                </a>
             </div>
          </div>
        </div>
        
        <div className="text-center md:text-left text-xs text-slate-600">
          © 2025 Priscila Valongo - Pilates e Fisioterapia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;