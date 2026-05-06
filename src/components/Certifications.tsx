import React from "react";
import { motion } from "motion/react";
import { CERTIFICATIONS } from "../constants";
import { Award, ShieldCheck } from "lucide-react";

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section-container">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-500 font-mono text-sm uppercase tracking-widest mb-2"
        >
          Credentials
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white italic"
        >
          Industry <span className="text-brand-accent not-italic">Validation</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group glass p-6 rounded-2xl flex items-center gap-5 hover:border-brand-accent/40 transition-all border-white/5"
          >
            <div className="w-14 h-14 shrink-0 rounded-xl bg-slate-950 flex items-center justify-center border border-white/5 group-hover:border-brand-accent/20 transition-all">
               {cert.image ? (
                 <img 
                  src={cert.image} 
                  alt={cert.issuer} 
                  className="w-10 h-10 object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award text-brand-accent group-hover:scale-110 transition-transform"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>';
                    }
                  }}
                 />
               ) : (
                 <Award className="text-brand-accent group-hover:scale-110 transition-transform" size={28} />
               )}
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold text-sm leading-snug group-hover:text-brand-accent transition-colors">
                {cert.title}
              </h4>
              <div className="flex items-center justify-between mt-1">
                <div className="text-slate-500 text-xs font-mono flex items-center gap-1">
                  <ShieldCheck size={12} className="text-brand-accent" />
                  {cert.issuer}
                </div>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] text-brand-accent hover:underline font-mono"
                  >
                    View
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
