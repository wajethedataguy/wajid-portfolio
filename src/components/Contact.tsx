import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import { PERSONAL_INFO } from "../constants";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let's build the{" "}
            <span className="text-brand-accent">Future</span> together.
          </h2>

          <p className="text-slate-400 text-lg mb-12">
            Interested in collaboration or have a project in mind? I'm always
            open to discussing new opportunities in Data Engineering and AI.
          </p>

          {/* CONTACT LINKS */}
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-slate-900 border border-transparent hover:border-white/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-500 tracking-widest">
                  Email Me
                </div>
                <div className="text-white font-medium text-sm">
                  {PERSONAL_INFO.email}
                </div>
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
                <div className="text-xs font-mono uppercase text-slate-500 tracking-widest">
                  WhatsApp
                </div>
                <div className="text-white font-medium text-sm">
                  +92 300 3239940
                </div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-10 rounded-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="text-brand-accent" size={24} />
            <h3 className="text-2xl font-bold text-white">
              Send a Message
            </h3>
          </div>

          {/* REAL FUNCTIONAL FORM */}
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const name = (form.elements.namedItem("name") as HTMLInputElement)
                ?.value;

              const email = (form.elements.namedItem("email") as HTMLInputElement)
                ?.value;

              const category = (
                form.elements.namedItem("category") as HTMLSelectElement
              )?.value;

              const message = (
                form.elements.namedItem("message") as HTMLTextAreaElement
              )?.value;

              const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                `${category} - Message from ${name}`
              )}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nCategory: ${category}\n\nMessage:\n${message}`
              )}`;

              window.location.href = mailtoLink;
            }}
          >
            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-brand-accent outline-none text-white transition-colors"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-brand-accent outline-none text-white transition-colors"
                required
              />
            </div>

            {/* CATEGORY */}
            <select
              name="category"
              className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-brand-accent outline-none text-white"
            >
              <option>Data Engineering</option>
              <option>AI / Machine Learning</option>
              <option>Consultation</option>
              <option>General Inquiry</option>
              <option>Others</option>
            </select>

            {/* MESSAGE */}
            <textarea
              name="message"
              rows={4}
              placeholder="Your message..."
              className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-brand-accent outline-none text-white resize-none"
              required
            />

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full group py-5 bg-white hover:bg-brand-accent text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              Send Message
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;