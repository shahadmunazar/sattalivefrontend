import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', mobile: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <div className="text-center mb-5 animate-fade-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions or need support? We're here to help. Reach out to us anytime.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-lg-5 animate-fade-up delay-100">
            <div className="glass-panel p-4 p-md-5 h-100">
              <h3 className="text-white mb-4">Contact Information</h3>
              <p className="text-secondary mb-5">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center gap-4 p-4 rounded-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="bg-primary bg-opacity-25 p-3 rounded-circle text-primary shadow-lg" style={{ boxShadow: '0 0 15px rgba(37,99,235,0.5)' }}>
                    <FaPhoneAlt size={24} />
                  </div>
                  <div>
                    <p className="text-muted mb-1 small text-uppercase tracking-wider">Call / WhatsApp Us</p>
                    <a href="tel:+919876543210" className="text-white fw-bold text-decoration-none fs-4">+91 98765 43210</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7 animate-fade-up delay-200">
            <div className="glass-panel p-4 p-md-5">
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label text-secondary small">Your Name *</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary small">Email Address *</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-secondary small">Mobile Number *</label>
                    <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="+91 00000 00000" />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-secondary small">Message *</label>
                    <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="How can we help you?"></textarea>
                  </div>
                  
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn-primary-custom w-100 py-3" disabled={status === 'loading'}>
                      {status === 'loading' ? (
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      ) : (
                        <><FaPaperPlane /> Send Message</>
                      )}
                    </button>
                    
                    {status === 'success' && (
                      <div className="alert alert-success mt-3 mb-0 rounded-3 text-center" role="alert">
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
