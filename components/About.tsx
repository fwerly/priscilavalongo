import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sand-50/50 -skew-x-12 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6">
            Mais que um Estúdio, <span className="text-brand-600">Uma Clínica de Movimento</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Na Clínica Priscila Valongo, entendemos que cada corpo carrega uma história. Nossa metodologia integra os princípios clássicos do Pilates com a ciência moderna da Fisioterapia para oferecer um tratamento completo, seguro e eficaz para dores crônicas, reabilitação pós-cirúrgica e manutenção da saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Activity className="w-8 h-8 text-brand-600" />,
              title: "Avaliação Biomecânica",
              desc: "Antes de qualquer movimento, realizamos uma análise detalhada da sua postura e padrões de movimento."
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-brand-600" />,
              title: "Segurança Clínica",
              desc: "Exercícios adaptados para suas patologias e limitações, supervisionados por fisioterapeuta qualificada."
            },
            {
              icon: <Heart className="w-8 h-8 text-brand-600" />,
              title: "Saúde Integral",
              desc: "Foco não apenas na estética, mas na funcionalidade do corpo, alívio da dor e qualidade de vida."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-sand-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-sand-100"
            >
              <div className="mb-4 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 font-serif">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;