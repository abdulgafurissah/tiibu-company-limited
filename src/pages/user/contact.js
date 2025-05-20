/* eslint-disable jsx-a11y/iframe-has-title */
import '../../assests/styles/contact.css';
import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    const form = document.querySelector('.contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you shortly.');
        form.reset();
      });
    }
  }, []);

  return (
    <>
      <section className="hero">
        <h1>Contact Us</h1>
      </section>
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>Feel free to reach out to us using the form below, or contact us directly via email or phone. 
          We look forward to hearing from you!</p>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Your Phone" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="info-card">
            <h3>Email Us</h3>
            <p>info@tiibuconstruction.com</p>
          </div>
          <div className="info-card">
            <h3>Call Us</h3>
            <p>+254 123 456 789</p>
          </div>
          <div className="info-card">
            <h3>Visit Us</h3>
            <p>Westland Accra, Ghana</p>
          </div>
        </div>
        <div className="map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31714.785394224263!2d36.8073483!3d-1.2863899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7dd6f5bf567c0277!2zTmFpcm9iaSwgS2VueWE!5e0!3m2!1sen!2s!4v1635605894323!5m2!1sen!2s" 
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

export default Contact;

