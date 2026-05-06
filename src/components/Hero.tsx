import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, BrainCircuit, Database as DbIcon, Terminal, MessageSquare, Phone, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-white/5 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-slate-300 font-mono text-xs uppercase tracking-widest">{PERSONAL_INFO.availability}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9]"
        >
          <span className="text-white drop-shadow-sm">Building Production</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-brand-accent to-blue-400">
            Data & AI Systems
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          {PERSONAL_INFO.heroHook}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-brand-accent hover:bg-white text-brand-950 font-bold rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-brand-accent/20 w-full sm:w-auto justify-center"
          >
            Hire Me Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl flex items-center gap-2 border border-white/5 transition-all w-full sm:w-auto justify-center"
          >
            Get Resume (ATS)
            <Download size={20} />
          </button>
          <a 
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-500/10 hover:bg-green-500 text-green-500 hover:text-white border border-green-500/20 font-bold rounded-xl flex items-center gap-2 transition-all w-full sm:w-auto justify-center"
          >
            WhatsApp <MessageSquare size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-8 text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em]"
        >
          <div className="flex items-center gap-2">
            <DbIcon size={14} className="text-brand-accent" />
            Reliable Data Design
          </div>
          <div className="flex items-center gap-2">
            <BrainCircuit size={14} className="text-brand-500" />
            AI-Native Systems
          </div>
        </motion.div>

        {/* Tech Stack Floating Icons */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 p-8">
           {[BrainCircuit, DbIcon, Terminal].map((Icon, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5 + (i * 0.1) }}
               className="p-4 rounded-2xl bg-slate-900 border border-white/5 text-brand-accent"
             >
               <Icon size={24} />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
