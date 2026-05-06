import React from "react";
import { motion } from "motion/react";
import { EXPERIENCE } from "../constants";
import { Briefcase, Calendar } from "lucide-react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Journey</h2>
        <p className="text-slate-400">A timeline of my growth and contributions in the data industry.</p>
      </div>

      <div className="relative space-y-12">
        {/* Timeline Axis */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 hidden md:block" />

        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-brand-accent rounded-full -translate-x-1/2 border-4 border-brand-950 z-10 hidden md:block shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

            {/* Content Side */}
            <div className="md:w-1/2">
              <div className="tech-card border-none bg-slate-900/40 p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-brand-accent mt-1">
                      <Briefcase size={16} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-full text-slate-300 text-xs font-mono">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 group">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 group-hover:bg-brand-accent transition-colors" />
                      <span className="text-sm leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                   {exp.tools?.map((tool) => (
                     <span key={tool} className="text-[10px] font-mono font-bold text-brand-accent bg-brand-accent/5 px-2 py-1 rounded border border-brand-accent/20 uppercase tracking-tighter">
                       {tool}
                     </span>
                   ))}
                </div>
              </div>
            </div>

            {/* Empty Side (Spacer for Desktop) */}
            <div className="md:w-1/2 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
