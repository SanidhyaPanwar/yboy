import React from "react";
import { Link } from "react-router-dom";

// Import product files
import product1 from "../../media/categories/crochetBags/product1.jpg";
import product2 from "../../media/categories/crochetBags/product2.jpg";
import product3 from "../../media/categories/crochetBags/product3.jpg";
import product4 from "../../media/categories/crochetBags/product4.jpg";
import product5 from "../../media/categories/crochetBags/product5.jpg";
import product6 from "../../media/categories/crochetBags/product6.mp4";

const CrochetBags = () => {
  return (
    <section className="experience" id="crochet-bags-range">
      <div className="max-width">
        <h2 className="rangeTitle">Handmade Crochet Bags 👜✨</h2>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
          Our crochet bags are meticulously handcrafted with love, combining
          style, functionality, and sustainability. Each bag features unique
          patterns and textures, perfect for everyday use or gifting to
          someone special.
          <br />
          <br />
          Made from eco-friendly materials, they are durable, lightweight, and
          designed to complement any outfit — from casual day trips to
          elegant evenings.
          <br />
          <br />
          Add a touch of handmade charm to your wardrobe with these
          one-of-a-kind crochet bags. 👜✨
        </p>

        {/* Bag 1 */}
        <div className="experience-content">
          <div className="column left">
            <img src={product1} alt="Boho Chic Tote Bag" />
          </div>
          <div className="column right">
            <div className="text">👜 Boho Chic Tote</div>
            <ul>
              <li>Spacious and stylish, perfect for daily errands.</li>
              <li>Earthy tones with intricate crochet detailing.</li>
              <li>Handmade with love and care for a sustainable choice.</li>
              {/* <li>Price: ₹---/-</li> */}
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

        {/* Bag 2 */}
        <div className="experience-content">
          <div className="column right">
            <div className="text">🎨 Colorful Sling Bag</div>
            <ul>
              <li>Compact yet roomy, perfect for essentials.</li>
              <li>Bright, cheerful colors with fun patterns.</li>
              <li>Great for casual outings and travel.</li>
              {/* <li>Price: ₹---/-</li> */}
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
            <img src={product2} alt="Colorful Sling Bag" />
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Bag 3 */}
        <div className="experience-content">
          <div className="column left">
            <img src={product3} alt="Mini Crochet Crossbody" />
          </div>
          <div className="column right">
            <div className="text">🌿 Mini Crossbody</div>
            <ul>
              <li>Compact design with intricate crochet texture.</li>
              <li>Perfect for lightweight carrying on casual days.</li>
              <li>Handmade with eco-conscious materials.</li>
              {/* <li>Price: ₹---/-</li> */}
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

        {/* Optional: Add video showcase row */}
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          🎥 See Them in Action
        </h3>
        <div className="products-grid">
          <div className="product-card">
            <video
              src={product6}
              controls
              loop
              muted
              playsInline
              className="product-video"
            />
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              Crochet Bags Video Showcase
            </div>
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Back link */}
        <div style={{ textAlign: "center" }}>
          <Link to="/categories" className="btn">
            ← Back to All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CrochetBags;
