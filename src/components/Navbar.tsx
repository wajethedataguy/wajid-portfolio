import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Database, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-950/80 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 text-brand-accent font-mono font-bold text-xl cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Database size={24} />
          <span>W.HUSSAIN</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-slate-400 hover:text-brand-accent transition-colors text-sm font-medium uppercase tracking-wider"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="h-4 w-px bg-slate-800" />
          <div className="flex items-center gap-4">
            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-slate-400 hover:text-brand-accent transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-900 border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-brand-accent text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
