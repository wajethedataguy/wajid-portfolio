import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "./constants";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-brand-950 text-slate-200 selection:bg-brand-accent/30 selection:text-brand-accent">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <a
        href={PERSONAL_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare size={24} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-white text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with me
        </span>
      </a>

      <Footer />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[60]">
        <div 
          id="scroll-progress" 
          className="h-full bg-brand-accent shadow-[0_0_10px_rgba(34,211,238,0.8)]" 
          style={{ width: '0%' }} 
        />
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const progress = document.getElementById('scroll-progress');
            if (progress) progress.style.width = scrolled + '%';
          });
        `
      }} />
    </div>
  );
}

