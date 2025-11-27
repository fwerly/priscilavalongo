import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Activity, HeartPulse, Zap } from 'lucide-react';

const ServiceDetails: React.FC = () => {
  const details = [
    {
      id: "reabilitacao",
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "Pilates Clínico: Reabilitação & Movimento",
      subtitle: "Recupere sua qualidade de vida sem dor.",
      description: "O Pilates Clínico é uma adaptação do método tradicional focada especificamente na patologia do paciente. Diferente de uma aula comum, aqui cada exercício é selecionado clinicamente para tratar lesões, hérnias de disco, pós-operatórios e dores crônicas.",
      features: [
        "Avaliação postural individualizada antes do início.",
        "Exercícios de baixo impacto para proteção articular.",
        "Foco no fortalecimento do 'Core' (centro de força) para estabilização da coluna.",
        "Ideal para hérnia de disco, escoliose e condromalácia."
      ],
      bgColor: "bg-white"
    },
    {
      id: "gerontologia",
      icon: <HeartPulse className="w-8 h-8 text-white" />,
      title: "Gerontologia & Tratamento de Dor",
      subtitle: "Envelhecimento ativo e terapia manual especializada.",
      description: "Nossa abordagem em Gerontologia visa a autonomia e independência do idoso, trabalhando equilíbrio e força muscular para prevenção de quedas. Integrado ao Tratamento de Dor, utilizamos terapia manual e liberação miofascial para alívio imediato de tensões.",
      features: [
        "Prevenção de quedas e melhora do equilíbrio.",
        "Manutenção da massa muscular (Sarcopenia).",
        "Terapia Manual para alívio de dores agudas (cervicalgias, lombalgias).",
        "Exercícios cognitivos e motores integrados."
      ],
      bgColor: "bg-sand-50"
    },
    {
      id: "condicionamento",
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Pilates Clássico: Condicionamento Físico",
      subtitle: "Força, fluidez e controle total do corpo.",
      description: "Para quem não possui lesões agudas e busca performance. O método clássico segue a rigorosidade técnica criada por Joseph Pilates, utilizando os equipamentos originais (Reformer, Cadillac, Chair, Barrel) para desafiar o corpo em força e flexibilidade.",
      features: [
        "Definição muscular global sem hipertrofia excessiva.",
        "Melhora expressiva da flexibilidade e postura.",
        "Aulas dinâmicas e desafiadoras.",
        "Conexão corpo e mente para redução de estresse."
      ],
      bgColor: "bg-white"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-0">
      {details.map((service) => (
        <div 
          key={service.id} 
          id={service.id} 
          className={`${service.bgColor} py-24 border-t border-sand-100 scroll-mt-20`}
        >
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-12 items-start">
                {/* Icon & Title Side - Sticky apenas em Desktop (md:sticky) */}
                <div className="md:w-1/3 md:sticky md:top-24">
                  <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center shadow-lg mb-6 rotate-3 hover:rotate-0 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-800 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-brand-600 font-medium text-lg mb-6">
                    {service.subtitle}
                  </p>
                  <button 
                    onClick={scrollToContact}
                    className="inline-flex items-center text-sm font-bold text-slate-800 border-b-2 border-brand-500 hover:text-brand-600 transition-colors pb-1 cursor-pointer"
                  >
                    Agendar Avaliação
                  </button>
                </div>

                {/* Content Side */}
                <div className="md:w-2/3">
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-sand-200">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                      Principais Benefícios
                    </h4>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceDetails;