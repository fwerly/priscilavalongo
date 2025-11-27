import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
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
                <li><a href="#about" className="hover:text-brand-400 transition-colors">A Clínica</a></li>
                <li><a href="#classes" className="hover:text-brand-400 transition-colors">Tratamentos</a></li>
                <li><a href="#team" className="hover:text-brand-400 transition-colors">Corpo Clínico</a></li>
                <li><a href="#contact" className="hover:text-brand-400 transition-colors">Agendamento</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Social</h4>
             <div className="flex space-x-4">
                <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-600 hover:text-white transition-all"><Instagram size={20} /></a>
                <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-600 hover:text-white transition-all"><Facebook size={20} /></a>
                <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-600 hover:text-white transition-all"><Linkedin size={20} /></a>
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
