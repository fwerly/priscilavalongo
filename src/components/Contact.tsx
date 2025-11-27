import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const STUDIO_EMAIL = "contato@priscilavalongo.com.br"; 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Avaliação de Fisioterapia'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Contato Site: ${formData.interest}`);
    const body = encodeURIComponent(
      `Olá Dra. Priscila!\n\nGostaria de mais informações.\n\n` +
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Interesse: ${formData.interest}`
    );

    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-1/3">
             <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Entre em Contato</h2>
             <p className="text-slate-600 mb-10">Estamos prontos para cuidar da sua saúde. Agende sua avaliação ou tire suas dúvidas.</p>
             
             <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-full text-brand-600">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">Telefone / WhatsApp</h4>
                        <p className="text-slate-500 text-sm">(21) 97385-8888</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-full text-brand-600">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">Email</h4>
                        <p className="text-slate-500 text-sm">contato@priscilavalongo.com.br</p>
                    </div>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 bg-sand-50 p-8 md:p-10 rounded-2xl border border-sand-200"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6">Agendamento Online</h3>
            
            <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-white border border-sand-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-white border border-sand-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Telefone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-white border border-sand-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all" 
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Como podemos ajudar?</label>
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-white border border-sand-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all"
                >
                  <option value="Avaliação de Fisioterapia">Avaliação de Fisioterapia (Dor/Lesão)</option>
                  <option value="Pilates Clínico">Pilates Clínico</option>
                  <option value="Pilates Fitness">Pilates Condicionamento</option>
                  <option value="Gestantes">Pilates para Gestantes</option>
                  <option value="Idosos">Pilates para Melhor Idade</option>
                </select>
              </div>
              <div className="col-span-2 mt-2">
                <button 
                  type="submit"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-md transition-colors shadow-md uppercase tracking-wider text-sm"
                >
                  Solicitar Contato
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
