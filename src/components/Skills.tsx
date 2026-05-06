import React from "react";
import { motion } from "motion/react";
import { SKILLS, AI_ML_SKILLS } from "../constants";
import { CheckCircle2, BrainCircuit, Sparkles } from "lucide-react";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-slate-900/50 py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-mono text-sm uppercase tracking-widest mb-2"
          >
            Technical Arsenal
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Skill Set & Expertise
          </motion.h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full" />
        </div>

        {/* AI/ML Specialized Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-brand-accent/10 text-brand-accent">
              <BrainCircuit size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">AI / Machine Learning Specialization</h3>
            <div className="flex-1 h-px bg-slate-800 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_ML_SKILLS.map((set, idx) => (
              <motion.div
                key={set.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="tech-card h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <Sparkles size={16} />
                  </div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">{set.group}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {set.items.map(item => (
                    <span key={item} className="px-3 py-1.5 rounded-lg bg-slate-950/50 text-slate-300 text-xs font-medium border border-white/5 group-hover:border-brand-accent/30 transition-all">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Data Section */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-brand-accent/10 text-brand-accent">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Core Data & Cloud Engineering</h3>
            <div className="flex-1 h-px bg-slate-800 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="tech-card h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <span className="text-xs font-bold font-mono">{index + 1}</span>
                  </div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-lg bg-slate-950/50 text-slate-300 text-xs font-medium border border-white/5 group-hover:border-brand-accent/30 transition-all">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
