import React from 'react';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    { icon: <FaUser />, title: "Who we are", value: "Your Box Of Yarn (YBOY)" },
    { icon: <FaMapMarkerAlt />, title: "Location", value: "Jhansi, Uttar Pradesh, India 🇮🇳" },
    { icon: <FaEnvelope />, title: "Email", value: "yboy@gmail.com" },
    { icon: <FaInstagram />, title: "Instagram", value: "@yourboxofyarn", link: "https://instagram.com/yourboxofyarn" },
    { icon: <FaYoutube />, title: "YouTube", value: "youtube.com/@yourboxofyarn", link: "https://youtube.com/@yourboxofyarn" },
    { icon: <FaTelegram />, title: "Telegram", value: "t.me/yourboxofYarnn", link: "https://t.me/yourboxofYarnn" },
  ];

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">We'd love to hear from you!</p>

      <div className="contact-grid">
        {contacts.map((c, i) => (
          <div key={i} className="contact-card">
            <div className="icon">{c.icon}</div>
            <div className="details">
              <div className="title">{c.title}</div>
              {c.link ? (
                <a href={c.link} target="_blank" rel="noopener noreferrer">{c.value}</a>
              ) : (
                <div className="value">{c.value}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="contact-quote">
        <q>There’s magic in turning yarn into something beautiful; stitch by stitch, story by story.</q>
        <cite>- Your Box Of Yarn</cite>
      </div>
    </section>
  );
};

export default Contact;
