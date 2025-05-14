import { useState, FormEvent, ChangeEvent } from 'react';
import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_NAME } from '../constants/company';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value
    }));
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 tech-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-4 leading-tight hero-glow">Get in Touch</h2>
          <h3 className="text-2xl font-light mb-8 tracking-wide text-cyan-400">LET'S TRANSFORM YOUR IDEAS INTO REALITY</h3>
          <p className="text-xl mb-12 text-gray-300">Ready to start your digital journey? Let's discuss how {COMPANY_NAME} can help you innovate, scale, and digitalize your business.</p>
          <form 
            className="space-y-6" 
            onSubmit={handleSubmit}
            name="contact" 
            method="POST" 
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <input name="bot-field" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" 
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 btn-glow disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <ArrowRight size={20} className="ml-2" />
              </button>
              {status === 'success' && (
                <p className="mt-4 text-green-400">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-400">Failed to send message. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
