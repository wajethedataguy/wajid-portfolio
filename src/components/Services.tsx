import React from "react";
import { motion } from "motion/react";
import { SERVICES } from "../constants";
import { ArrowRight, Layers, Zap, BrainCircuit, Database, FileCode } from "lucide-react";

const getIcon = (index: number) => {
  const icons = [Layers, Zap, BrainCircuit, Database, FileCode];
  const Icon = icons[index % icons.length];
  return <Icon size={32} />;
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="section-container">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-mono text-sm uppercase tracking-widest mb-4"
          >
            How I Can Help
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white italic"
          >
            Freelance <span className="text-brand-accent not-italic">Solutions</span>
          </motion.h2>
          <p className="text-slate-400 mt-6 max-w-2xl text-lg">
            I specialize in building intelligent data infrastructure that scales with your business needs. 
            From automation to advanced analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group tech-card h-full flex flex-col p-8 bg-slate-900 border-white/5 hover:border-brand-accent/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                {getIcon(index)}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tools.map((tool) => (
                    <span key={tool} className="text-[10px] font-mono text-slate-500 uppercase tracking-wider px-2 py-1 bg-slate-950 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>
                
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-white font-bold text-sm group/btn"
                >
                  Hire Me 
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
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
