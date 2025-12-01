import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const WHATSAPP_NUMBER = "5521973858888";

  const [formData, setFormData] = useState({
    name: '',
    interest: 'Avaliação de Fisioterapia'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppClick = (e: React.FormEvent) => {
    e.preventDefault();
    
    let message = "";
    
    if (formData.name.trim()) {
      message = `Olá! Me chamo *${formData.name}* e gostaria de informações sobre *${formData.interest}*.`;
    } else {
      message = `Olá! Gostaria de informações sobre *${formData.interest}*.`;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-1/3">
             <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Fale Conosco</h2>
             <p className="text-slate-600 mb-10 leading-relaxed">
               Priorizamos um atendimento ágil e humanizado. A forma mais rápida de falar com a Dra. Priscila ou agendar sua avaliação é diretamente pelo nosso WhatsApp.
             </p>
             
             <div className="space-y-8">
                
                <div className="flex items-start gap-4">
                    <div className="bg-[#25D366]/10 p-3 rounded-full text-[#25D366]">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">WhatsApp / Telefone</h4>
                        <p className="text-slate-500 text-sm mt-1 mb-2">(21) 97385-8888</p>
                        <p className="text-xs text-brand-600 font-medium bg-brand-50 inline-block px-2 py-1 rounded">Atendimento Prioritário</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-sand-100 p-3 rounded-full text-slate-600">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">Localização</h4>
                        <p className="text-slate-500 text-sm mt-1">
                          Região Oceânica de Niterói<br/>
                          <span className="text-xs text-slate-400">Estacionamento no local</span>
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-sand-100 p-3 rounded-full text-slate-600">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">Horários</h4>
                        <p className="text-slate-500 text-sm mt-1">Segunda a Sexta: 09h às 18h</p>
                    </div>
                </div>
             </div>
          </div>

          {/* WhatsApp Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 bg-[#F0FDF4] p-8 md:p-12 rounded-3xl border border-[#DCFCE7] shadow-xl relative overflow-hidden"
          >
            {/* Background decoration to look like WhatsApp chat pattern opacity */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#166534 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#25D366] p-2.5 rounded-full text-white shadow-lg shadow-green-200">
                  <MessageCircle size={24} fill="currentColor" className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Iniciar conversa</h3>
                  <p className="text-sm text-green-700 font-medium">Respostamos em poucos minutos</p>
                </div>
              </div>
              
              <form className="space-y-6" onSubmit={handleWhatsAppClick}>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 pl-1">Seu Nome (Opcional)</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite seu nome..."
                    className="w-full px-5 py-4 rounded-xl bg-white border border-green-200 focus:border-[#25D366] focus:ring-2 focus:ring-green-100 outline-none transition-all placeholder:text-slate-300 shadow-sm" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 pl-1">Como podemos ajudar?</label>
                  <div className="relative">
                    <select 
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-white border border-green-200 focus:border-[#25D366] focus:ring-2 focus:ring-green-100 outline-none transition-all appearance-none cursor-pointer shadow-sm text-slate-700"
                    >
                      <option value="Avaliação de Fisioterapia">Quero agendar uma Avaliação (Dor/Lesão)</option>
                      <option value="Pilates Clínico">Tenho interesse em Pilates Clínico</option>
                      <option value="Pilates Fitness">Tenho interesse em Pilates Condicionamento</option>
                      <option value="Gestantes">Pilates para Gestantes</option>
                      <option value="Idosos">Pilates para Melhor Idade</option>
                      <option value="Dúvidas Gerais">Tenho outras dúvidas</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-green-200 hover:shadow-green-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-lg"
                  >
                    <MessageCircle size={24} fill="white" />
                    Chamar no WhatsApp Agora
                  </button>
                  <p className="text-center text-xs text-green-700/60 mt-4 font-medium">
                    * Ao clicar, você será redirecionado automaticamente para o aplicativo.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;