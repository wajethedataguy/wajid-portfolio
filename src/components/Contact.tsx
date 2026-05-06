import React from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, MessageSquare, Send } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's build the <span className="text-brand-accent">Future</span> together.</h2>
          <p className="text-slate-400 text-lg mb-12">
            Interested in collaboration or have a project in mind? I'm always open to discussing new opportunities in Data Engineering and AI.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-slate-900 border border-transparent hover:border-white/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-500 tracking-widest">Email Me</div>
                <div className="text-white font-medium text-sm">{PERSONAL_INFO.email}</div>
              </div>
            </a>

            <a 
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-slate-900 border border-transparent hover:border-white/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                <MessageSquare size={24} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-500 tracking-widest">WhatsApp</div>
                <div className="text-white font-medium text-sm">+92 300 3239940</div>
              </div>
            </a>

            <a 
              href={PERSONAL_INFO.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-slate-900 border border-transparent hover:border-white/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                <div className="font-bold text-xl italic font-serif">Up</div>
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-500 tracking-widest">Upwork</div>
                <div className="text-white font-medium text-sm">Portfolio</div>
              </div>
            </a>

            <a 
              href={PERSONAL_INFO.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-slate-900 border border-transparent hover:border-white/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                <div className="font-bold text-xl italic font-serif">fv</div>
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-500 tracking-widest">Fiverr</div>
                <div className="text-white font-medium text-sm">Professional</div>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-10 rounded-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="text-brand-accent" size={24} />
            <h3 className="text-2xl font-bold text-white">Send a Message</h3>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-slate-500 tracking-widest ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-brand-accent outline-none text-white transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-slate-500 tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-brand-accent outline-none text-white transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-slate-500 tracking-widest ml-1">Project Category</label>
              <select className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-brand-accent outline-none text-white appearance-none transition-colors">
                <option>Data Engineering</option>
                <option>AI / Machine Learning</option>
                <option>Consultation</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-slate-500 tracking-widest ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="How can I help you?"
                className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-brand-accent outline-none text-white transition-colors resize-none"
              />
            </div>

            <button className="w-full group py-5 bg-white hover:bg-brand-accent text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
