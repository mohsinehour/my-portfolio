import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, ExternalLink, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// Get your free access key at https://web3forms.com — paste it below
const WEB3FORMS_ACCESS_KEY = 'f56a42a2-b730-4bfc-b02f-28b3197fc1b0';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget; // capture reference before any await — avoids stale/null currentTarget
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New message from portfolio contact form');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success === true) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        console.error('Web3Forms returned success:false', result);
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission threw an error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-[#004F94]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#004F94]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Let's Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-primary">Together</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Have a project in mind, or just want to say hi? I'm always open to discussing product design work or partnership opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-10 md:p-12 bg-gradient-to-br from-brand to-primary text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Get in touch</h3>
              <p className="text-white mb-10 leading-relaxed">
                Whether you have a question or just want to connect, my inbox is always open. I'll try my best to get back to you!
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 shrink-0 bg-white/10 rounded-full flex items-center justify-center">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <div>
                    <a href="https://calendar.app.google/T69N8yqQao4JQFvh7" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:scale-105 hover:underline transition-transform duration-300 ease-in-out flex items-center gap-2">Book a Call <ExternalLink size={18} /></a>
                    <p className="font-md text-md text-white">Schedule a 30 min call with me</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-white mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/mohsine-hourmat-allah/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-colors transform hover:-translate-y-1 duration-200">
                    <FaLinkedin size={18} />
                  </a>
                  <a href="https://x.com/mohsinehour_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-colors transform hover:-translate-y-1 duration-200">
                    <FaXTwitter size={18} />
                  </a>
                  <a href="https://github.com/mohsinehour" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-colors transform hover:-translate-y-1 duration-200">
                    <FaGithub size={18} />
                  </a>
                  <a href="mailto:hourmatallahmohsine@gmail.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-colors transform hover:-translate-y-1 duration-200">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Background design */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 border-[40px] border-white/5 rounded-full"></div>
          </div>

          <div className="p-10 md:p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Honeypot field — invisible to humans, bots fill it in and get silently rejected */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-1 focus:ring-brand focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-1 focus:ring-brand focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-1 focus:ring-brand focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-gradient-brand text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                {status === 'idle' && <Send size={18} />}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                  <CheckCircle size={18} /> Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 text-sm font-medium">
                  <AlertCircle size={18} /> Something went wrong. Please try emailing me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}