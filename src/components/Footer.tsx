import React from "react";
import { Database, Heart } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center space-x-2 text-brand-accent font-mono font-bold text-lg">
          <Database size={20} />
          <span>W.HUSSAIN</span>
        </div>

        <div className="text-slate-500 text-sm flex items-center gap-2">
          &copy; {currentYear} All Rights Reserved. Built with <Heart size={14} className="text-red-500 fill-red-500" /> for Data Engineering.
        </div>

        <div className="flex items-center space-x-6 text-slate-400">
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors text-sm font-medium">LinkedIn</a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors text-sm font-medium">GitHub</a>
          <a href="#about" className="hover:text-brand-accent transition-colors text-sm font-medium">About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
