import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const treatments = [
    {
      id: "reabilitacao",
      category: "Pilates Clínico",
      title: "Reabilitação & Movimento",
      desc: "Ideal para quem possui hernias, dores lombares ou lesões articulares. O método é adaptado para tratar a patologia enquanto fortalece o corpo.",
      image: "https://i.ibb.co/9k00TwwC/Gemini-Generated-Image-457xlh457xlh457x.png"
    },
    {
      id: "gerontologia",
      category: "Fisioterapia",
      title: "Gerontologia & Tratamento de Dor",
      desc: "Sessões focadas em terapia manual, liberação miofascial e exercícios terapêuticos para alívio agudo e crônico de dores.",
      image: "https://i.ibb.co/8LMFsFv6/Gemini-Generated-Image-x6gpi8x6gpi8x6gp.png"
    },
    {
      id: "condicionamento",
      category: "Pilates Clássico",
      title: "Condicionamento Físico",
      desc: "Para quem busca definição, flexibilidade e controle corporal avançado nos equipamentos Reformer, Cadillac e Chair.",
      image: "https://i.ibb.co/DgVBBtS3/Gemini-Generated-Image-blxvbhblxvbhblxv.png"
    }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="classes" className="py-24 bg-sand-50 scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-2 block">Nossas Especialidades</span>
            <h2 className="text-4xl font-serif font-bold text-slate-800">Tratamentos & Aulas</h2>
          </div>
          <a href="#contact" className="text-slate-600 hover:text-brand-700 border-b border-slate-300 hover:border-brand-600 transition-all pb-1">
            Ver grade de horários
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {treatments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-brand-700 uppercase tracking-wide">
                  {item.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-grow">
                  {item.desc}
                </p>
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className="text-brand-600 font-bold text-sm hover:text-brand-800 flex items-center gap-1 group-hover:gap-2 transition-all mt-auto cursor-pointer"
                >
                  Saiba mais <span className="text-lg">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;