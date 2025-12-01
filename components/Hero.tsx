import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center bg-sand-50 pt-40 md:pt-64 pb-12 overflow-hidden">
      
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 lg:gap-12 items-center h-full relative z-10">
        {/* Text Content - Takes 1/3 of the space */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 order-2 md:order-1 flex flex-col justify-center"
        >
          <span className="inline-block py-1.5 px-3 border border-brand-200 bg-brand-50 text-brand-700 text-[10px] font-bold tracking-widest uppercase rounded-full mb-6 w-fit">
            Priscila Valongo
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6 leading-tight">
            Movimento que <br/>
            <span className="text-brand-600 italic">Reabilita.</span>
          </h1>

          <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed font-medium">
            Uma abordagem clínica para o seu bem-estar. Unimos ciência e movimento para tratar dores, corrigir postura e devolver sua qualidade de vida com a Dra. Priscila Valongo.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white font-medium py-3.5 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-brand-500/20 text-sm tracking-wide uppercase cursor-pointer"
            >
              Agendar Avaliação
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection('classes')}
              className="inline-flex items-center justify-center bg-white border border-sand-300 hover:border-brand-500 text-slate-700 hover:text-brand-700 font-medium py-3.5 px-8 rounded-lg transition-all duration-300 text-sm tracking-wide uppercase cursor-pointer"
            >
              Nossos Tratamentos
            </button>
          </div>
          
          <div className="mt-10 pt-8 border-t border-sand-200 flex flex-col gap-3 text-xs text-slate-500 font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>
              Atendimento Individualizado
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>
              Fisioterapia Especializada
            </div>
          </div>
        </motion.div>

        {/* Image Content - Takes 2/3 of the space */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-1 md:col-span-2 order-1 md:order-2 h-[280px] md:h-[80vh] w-full relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full w-full group">
             <img
              src="https://i.ibb.co/MxPcd5TG/topo.png"
              alt="Estúdio de Pilates - Visão Geral"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center transform group-hover:scale-105 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
          </div>
          
           {/* Floating Badge - Moved to left-8 to avoid overlapping the face on the right */}
           <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/50 hidden lg:block z-20">
            <div className="flex items-center gap-4">
                 <div className="bg-brand-50 p-3 rounded-full">
                    <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 </div>
                 <div>
                    <p className="text-sm font-bold text-slate-800">Ambiente Clínico</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Equipamentos de Ponta</p>
                 </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;