import React, { useState } from 'react';

const encode = (data) => new URLSearchParams(data).toString();

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'portfolio-contact', ...formData }),
      });
      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="contact-page">
      <section className="page-heading">
        <p className="page-eyebrow">Let&apos;s connect</p>
        <h1>Have a role, project, or problem worth solving?</h1>
        <p>
          I am open to conversations about technical support, IT support, application support, customer success, product support, and junior development opportunities.
        </p>
      </section>

      <section className="contact-layout">
        <article className="contact-intro-card">
          <p className="section-label">Start a conversation</p>
          <h2>I would be glad to hear from you.</h2>
          <p>
            Send a message with a little context about the opportunity or project. I value clear communication and will respond as soon as I can.
          </p>
          <div className="contact-link-stack">
            <a href="https://www.linkedin.com/in/eric-reyna-3a7269147/" target="_blank" rel="noreferrer">
              <span>LinkedIn</span><strong>Connect professionally →</strong>
            </a>
            <a href="https://github.com/Ereyna21" target="_blank" rel="noreferrer">
              <span>GitHub</span><strong>Explore my code →</strong>
            </a>
          </div>
        </article>

        <form
          className="contact-form-card"
          name="portfolio-contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="portfolio-contact" />
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} autoComplete="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="7" value={formData.message} onChange={handleChange} required />
          </div>
          <button className="btn-primary-custom contact-submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p className="form-status success">Thank you. Your message has been sent.</p>}
          {status === 'error' && <p className="form-status error">The message could not be sent. Please connect with me through LinkedIn.</p>}
        </form>
      </section>
    </main>
  );
}
