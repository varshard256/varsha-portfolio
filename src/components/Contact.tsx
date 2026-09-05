import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Phone,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    if (personalInfo.phone) {
      navigator.clipboard.writeText(personalInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Direct mailto integration with pre-filled parameters
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Recruiter'}`);
    const body = encodeURIComponent(
      `Hello Varsha,\n\n${message}\n\nFrom:\n${name}\nEmail: ${email}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSentNotice(true);
      setTimeout(() => setSentNotice(false), 5000);
    }, 600);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-24 relative border-t border-white/5 bg-[#090b10]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Let's Build Something Great
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            I'm currently interested in opportunities where I can contribute to software development, full-stack applications, data-driven solutions, and cloud technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-sm shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Direct Contact & Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether you have an internship position, full-time engineering opportunity, or wish to review technical projects, feel free to reach out directly.
              </p>

              {/* Email Card with Copy Trigger */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-indigo-300 truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card with Copy & Call Trigger */}
              {personalInfo.phone && (
                <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                        Direct Phone / WhatsApp
                      </span>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-300 truncate block transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0"
                    title="Copy phone number to clipboard"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              )}

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Professional Networks
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-white/5 hover:border-indigo-500/30 text-slate-300 hover:text-white transition-all text-xs font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-400" />
                      GitHub
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-white/5 hover:border-sky-500/30 text-slate-300 hover:text-sky-300 transition-all text-xs font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-sky-400" />
                      LinkedIn
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-sm shadow-xl relative"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the message below to launch your email client with pre-filled parameters.
              </p>

              {sentNotice && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Email client opened! If your client did not launch, reach out to <strong>{personalInfo.email}</strong> directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-slate-600 text-sm transition-colors outline-none"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-slate-600 text-sm transition-colors outline-none"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the opportunity, role requirements, or collaboration idea..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder:text-slate-600 text-sm transition-colors outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-all duration-200 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Opening Mail Client...' : 'Send Message'}</span>
                </button>

                {/* Note about form backend integration */}
                <p className="text-[11px] font-mono text-slate-500 text-center pt-2">
                  * Form triggers your local mail client. Easily configure Formspree or EmailJS in <code>Contact.tsx</code> for direct API dispatch.
                </p>
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
