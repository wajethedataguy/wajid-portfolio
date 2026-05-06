import React from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO, EDUCATION, LANGUAGES, SOFT_SKILLS } from "../constants";
import { GraduationCap, Languages, Brain } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-bold uppercase tracking-widest mb-6">
            Discovery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Driven by Data,<br />
            Powered by <span className="text-brand-accent">Intelligence</span>.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            {PERSONAL_INFO.bio}
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-white font-bold text-lg">
                <GraduationCap className="text-brand-accent" size={20} />
                Education
              </h3>
              <div className="space-y-4">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="border-l-2 border-brand-accent/20 pl-4">
                    <div className="text-white font-medium text-sm">{edu.degree}</div>
                    <div className="text-slate-500 text-xs">{edu.period}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-white font-bold text-lg">
                <Languages className="text-brand-accent" size={20} />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium">
                    {lang}
                  </span>
                ))}
              </div>

              <h3 className="flex items-center gap-2 text-white font-bold text-lg pt-4">
                <Brain className="text-brand-accent" size={20} />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {SOFT_SKILLS.map((skill, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-brand-accent/5 border border-brand-accent/10 text-brand-accent text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative lg:sticky lg:top-32"
        >
          {/* Profile Picture Container */}
          <div className="aspect-[4/5] md:aspect-square glass rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent z-10 opacity-60" />
            <img
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80";
              }}
            />
          </div>

          {/* Accentuating Info Card */}
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-white/10 shadow-2xl z-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent font-bold text-xl">
                3+
              </div>
              <div>
                <div className="text-white font-bold">Years Experience</div>
                <div className="text-slate-400 text-sm">Industrial Expertise</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
