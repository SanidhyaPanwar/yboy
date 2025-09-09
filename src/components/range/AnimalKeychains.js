import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../img/Range/AnimalKeychains/mr-otto.jpg";
import pic2 from "../../img/Range/AnimalKeychains/mr-hootie.jpg";
import pic3 from "../../img/Range/AnimalKeychains/miss-charmie.png";
import pic4 from "../../img/Range/AnimalKeychains/oogway-junior.png";

const AnimalKeychains = () => {
  return (
    <section className="experience" id="keyring-range">
      <div className="max-width">
        <h2 className="rangeTitle">Animal-Themed Crochet Keyrings 🧸</h2>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
          These cuties are waiting for you to welcome them into their forever
          home 🥺💕
        </p>

        {/* Mr. Otto the Octopus */}
        <div className="experience-content">
          <div className="column left">
            <img src={pic1} alt="Mr. Otto the Octopus" />
          </div>
          <div className="column right">
            <div className="text">🐙 Mr. Otto the Octopus</div>
            <ul>
              <li>Hand-crocheted with love and high-quality yarn.</li>
              <li>
                Soft, squishy, and adorable — perfect for gifting or keeping!
              </li>
              <li>Price: ₹225/-</li>
            </ul>
            <a
              href="https://instagram.com/yourboxofyarn"
              target="_blank"
              rel="noopener noreferrer"
              className="buy-now-button"
            >
              🛍️ Buy Now via Instagram DM
            </a>
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Mr. Hootie the Owl */}
        <div className="experience-content">
          <div className="column right">
            <div className="text">🦉 Mr. Hootie the Owl</div>
            <ul>
              <li>
                Wise and tiny (2.5 inches) with cute eyes and colorful feathers.
              </li>
              <li>Perfect companion for bags or car keys.</li>
              <li>Price: ₹120/-</li>
            </ul>
			<a
              href="https://instagram.com/yourboxofyarn"
              target="_blank"
              rel="noopener noreferrer"
              className="buy-now-button"
            >
              🛍️ Buy Now via Instagram DM
            </a>
          </div>
          <div className="column left">
            <img src={pic2} alt="Mr. Hootie the Owl" className="image-right" />
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Miss Charmie the Unicorn */}
        <div className="experience-content">
          <div className="column left">
            <img src={pic3} alt="Miss Charmie the Unicorn" />
          </div>
          <div className="column right">
            <div className="text">🦄 Miss Charmie the Unicorn</div>
            <ul>
              <li>
                Magical charm in a small size! A dreamy gift for all ages.
              </li>
              <li>Hand-stitched with pastel yarn and sparkly horn.</li>
              <li>Price: ₹225/-</li>
            </ul>
			<a
              href="https://instagram.com/yourboxofyarn"
              target="_blank"
              rel="noopener noreferrer"
              className="buy-now-button"
            >
              🛍️ Buy Now via Instagram DM
            </a>
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Oogway Junior the Turtle */}
        <div className="experience-content">
          <div className="column right">
            <div className="text">🐢 Oogway Junior the Turtle</div>
            <ul>
              <li>3 inches of slow-moving cuteness and wisdom.</li>
              <li>
                Sturdy design — made to last with a detailed shell pattern.
              </li>
              <li>Price: ₹190/-</li>
            </ul>
			<a
              href="https://instagram.com/yourboxofyarn"
              target="_blank"
              rel="noopener noreferrer"
              className="buy-now-button"
            >
              🛍️ Buy Now via Instagram DM
            </a>
          </div>
          <div className="column left">
            <img
              src={pic4}
              alt="Oogway Junior the Turtle"
              className="image-right"
            />
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Back link */}
        <div style={{ textAlign: "center" }}>
          <Link to="/ranges" className="btn">
            ← Back to All Ranges
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnimalKeychains;
