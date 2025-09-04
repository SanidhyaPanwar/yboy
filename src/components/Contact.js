import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact Us</h2>
        <div className="contact-content">
          {/* Left Column */}
          <div className="text">We'd love to hear from you!</div>
            <p>
              Whether you're curious about our crochet collections, want to place a custom order, or just want to say hi, feel free to reach out!
            </p>
            <div className="column left">
            
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Who we are</div>
                  <div className="sub-title">Your Box Of Yarn (YBOY)</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Location</div>
                  <div className="sub-title">Jhansi, Uttar Pradesh, India 🇮🇳</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">yboy@gmail.com</div>
                </div>
              </div>
              {/* Optional: Add social media */}
              <div className="row">
                <i className="fab fa-instagram"></i>
                <div className="info">
                  <div className="head">Instagram</div>
                  <div className="sub-title">
                    <a
                      href="https://instagram.com/yourboxofyarn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @yourboxofyarn
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <i className="fab fa-youtube"></i>
                <div className="info">
                  <div className="head">YouTube</div>
                  <div className="sub-title">
                    <a
                      href="https://youtube.com/@yourboxofyarn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      youtube.com/@yourboxofyarn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="column right">
            <div className="text">
              <q>
                There’s magic in turning yarn into something beautiful;
                stitch by stitch, story by story.
              </q>
              <br />
            </div>
            <cite>- Your Box Of Yarn</cite>

            {/* Optional: Add a contact form */}
            {/* 
            <form>
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="field email">
                  <input type="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="field">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <div className="button">
                <button type="submit">Send Message</button>
              </div>
            </form>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
