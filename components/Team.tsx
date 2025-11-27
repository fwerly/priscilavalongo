import React from 'react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-sand-50 rounded-3xl overflow-hidden shadow-2xl border border-sand-100">
          <div className="flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="md:w-1/2 relative min-h-[400px]">
               <img 
                  src="https://i.ibb.co/PvnJdVDp/Gemini-Generated-Image-g6clirg6clirg6cl.png" 
                  alt="Dra. Priscila Valongo Fisioterapeuta" 
                  className="w-full h-full object-cover absolute inset-0"
                />
            </div>
            
            {/* Content Side */}
            <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-4 block">Responsável Técnica</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-2">Dra. Priscila Valongo</h3>
              <p className="text-slate-500 font-medium mb-8 text-sm">Fisioterapeuta | Especialista em Pilates</p>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                "Minha missão é proporcionar liberdade de movimento. Como fisioterapeuta, utilizo o Pilates não apenas como exercício, mas como uma ferramenta poderosa de reabilitação e prevenção. No nosso espaço, olhamos para o paciente como um todo, tratando a causa da dor, não apenas o sintoma."
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-bold text-brand-600 text-2xl">15+</p>
                    <p className="text-xs text-slate-500 uppercase mt-1">Anos de Experiência</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    {/* Added whitespace-nowrap and text-lg to fix wrapping issues */}
                    <p className="font-bold text-brand-600 text-lg whitespace-nowrap">CREFITO-2<br />98468-F</p>
                    <p className="text-xs text-slate-500 uppercase mt-1">Registro Profissional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;