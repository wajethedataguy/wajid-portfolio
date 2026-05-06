import React from "react";
import { motion } from "motion/react";
import { FEATURED_PROJECTS, LATEST_PROJECTS, PERSONAL_INFO, STATS } from "../constants";
import { ExternalLink, Github, Zap, Cpu, Terminal, ArrowUpRight, CheckCircle2 } from "lucide-react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="section-container">
        {/* Stats Banner */}
        <div className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-slate-900 border border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#22d3ee 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }} />
           {STATS.map((stat, i) => (
             <div key={i} className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 italic">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-brand-accent uppercase tracking-widest">
                  {stat.label}
                </div>
             </div>
           ))}
           <div className="hidden md:flex flex-col justify-center items-center text-center p-4 border-l border-white/5">
              <CheckCircle2 className="text-brand-accent mb-2" size={32} />
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-4">Reliability Guaranteed</div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic tracking-tight">
              Featured <span className="text-brand-accent not-italic">Innovations</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Showcasing my most impactful projects where AI meets robust Data Engineering.
            </p>
          </div>
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group text-brand-accent hover:text-white transition-colors flex items-center gap-2 font-mono text-sm tracking-tighter"
          >
             VIEW ARCHIVE <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Featured Projects - Larger Cards */}
        <div className="grid grid-cols-1 gap-12 mb-24">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-slate-900 border border-white/5 hover:border-brand-accent/20 transition-all duration-500"
            >
              {/* Image Placeholder/Icon Area */}
              <div className="relative h-[300px] lg:h-auto overflow-hidden bg-brand-950 flex items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-white/5">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                
                <motion.div 
                   whileHover={{ scale: 1.05 }}
                   className="relative z-10 w-full max-w-sm aspect-video glass rounded-2xl border-white/10 flex items-center justify-center shadow-2xl"
                >
                   {index === 0 ? <Cpu size={120} className="text-brand-accent opacity-20" /> : <Terminal size={120} className="text-brand-500 opacity-20" />}
                   <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                     <div className="w-16 h-1 bg-brand-accent rounded-full mb-2" />
                     <div className="text-white/20 font-mono text-xs uppercase tracking-widest italic">{project.subtitle}</div>
                   </div>
                </motion.div>

                {/* Floating Tech Tags */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 z-20">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-brand-950/90 border border-white/10 text-[10px] font-mono text-brand-accent uppercase font-bold backdrop-blur-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block text-brand-accent font-mono text-xs uppercase tracking-[0.2em] mb-4">
                  Feature Case Study
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                  {project.title}
                </h3>
                <div className="text-brand-500 font-bold mb-6 italic">{project.subtitle}</div>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-10 text-sm">
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                    <div className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-2">Problem</div>
                    <div className="text-slate-300 leading-snug">{project.problem}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                    <div className="text-[10px] font-bold text-green-400 uppercase tracking-widest mb-2">Solution</div>
                    <div className="text-slate-300 leading-snug">{project.solution}</div>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Zap size={14} className="text-brand-accent" /> Highlights
                  </div>
                  <ul className="grid gap-3">
                    {project.contributions.map((c, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-brand-accent/5 border border-brand-accent/10 mb-8">
                   <div className="text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-1">Impact</div>
                   <div className="text-slate-200 font-medium">{project.impact}</div>
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                   <a 
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-brand-accent transition-colors flex items-center gap-2"
                   >
                     Github Source <Github size={18} />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Latest 5 Projects */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-bold text-white whitespace-nowrap tracking-tight">Latest Implementations</h3>
            <div className="h-px bg-slate-800 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LATEST_PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="tech-card flex flex-col group h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                     <Terminal size={20} />
                  </div>
                  <a href={PERSONAL_INFO.github} className="text-slate-500 hover:text-brand-accent transition-colors">
                    <Github size={18} />
                  </a>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors leading-snug">
                  {project.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                  {project.impact}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-tighter">
                      #{t.replace(/\s+/g, '')}
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

export default Projects;
