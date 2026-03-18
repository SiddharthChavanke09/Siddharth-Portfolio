import React, { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:5000/api/messages', formData);
      if (response.data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.errors?.[0]?.msg || 'Failed to send message'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-dark-light py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6" data-aos="fade-right">
            <div className="flex items-center gap-4">
              <div className="text-accent text-2xl neon-glow">
                <HiMail />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Email</h3>
                <a href="mailto:siddharthchavanke920@gmail.com" className="text-text-primary hover:text-primary transition-colors">
                  siddharthchavanke920@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-primary text-2xl neon-glow">
                <HiPhone />
              </div>
              <div>
                <h3 className="font-semibold text-accent">Phone</h3>
                <a href="tel:9172041620" className="text-text-primary hover:text-primary transition-colors">
                  9172041620
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-tertiary text-2xl neon-glow">
                <HiLocationMarker />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Location</h3>
                <p className="text-text-primary">Pune, Maharashtra 411014</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" data-aos="fade-left">
            <div>
              <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary placeholder-gray-500 transition-all neon-border"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary placeholder-gray-500 transition-all neon-border"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-dark border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-primary placeholder-gray-500 transition-all neon-border resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            {status.message && (
              <div className={`p-3 rounded-lg ${
                status.type === 'success' ? 'bg-accent/20 text-accent border border-accent' : 'bg-tertiary/20 text-tertiary border border-tertiary'
              }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;