import { COMPANY_NAME } from '../constants/company';
import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("form-name", "contact");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error:", error);
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
            name="contact" 
            method="POST" 
            data-netlify="true" 
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="_to" value="contact@aethertechnologies.se" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                name="message" 
                rows={4}
                required
                className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              ></textarea>
            </div>
            <div>
              {!submitted ? (
                <button 
                  type="submit" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 btn-glow"
                >
                  Send Message
                  <span className="ml-2">→</span>
                </button>
              ) : (
                <div className="text-green-400 text-lg font-semibold">
                  Message sent! We'll get back to you soon.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
