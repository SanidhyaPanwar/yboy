import React from "react";
import { Link } from "react-router-dom";

// Import product files (images/videos)
import product1 from "../../media/categories/dreamCatchers/product1.jpg";
import product2 from "../../media/categories/dreamCatchers/product2.mp4";
import product3 from "../../media/categories/dreamCatchers/product3.jpg";
import product4 from "../../media/categories/dreamCatchers/product4.mp4";
import product5 from "../../media/categories/dreamCatchers/product5.jpg";
import product6 from "../../media/categories/dreamCatchers/product6.mp4";

const DreamCatchers = () => {
  return (
    <section className="experience" id="dreamcatchers-range">
      <div className="max-width">
        <h2 className="rangeTitle">Handmade Crochet Dreamcatchers 🌙✨</h2>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
          Each of our dreamcatchers is a unique piece of art, carefully
          hand-crocheted with intricate stitches and vibrant threads. Inspired
          by traditional symbolism, these creations are believed to filter away
          negative energy and allow only good dreams to flow through.
          <br />
          <br />
          With delicate lace-like patterns, soft tassels, and thoughtfully
          chosen color combinations, they bring warmth and positivity to any
          space — whether hung above your bed, on a cozy wall corner, or as a
          centerpiece in your living room.
          <br />
          <br />
          Every design is one-of-a-kind, making them a meaningful gift for loved
          ones and a timeless addition to your home décor. Bring a touch of
          bohemian charm, serenity, and handmade love into your everyday life
          with these crochet dreamcatchers. 🌙✨
        </p>

        {/* Dreamcatcher 1 */}
        <div className="experience-content">
          <div className="column left">
            <img src={product1} alt="Earthy Sunburst Dreamcatcher" />
          </div>
          <div className="column right">
            <div className="text">🌼 Earthy Sunburst</div>
            <ul>
              <li>
                A bold blend of warm browns, golden yellow, and soft neutrals.
              </li>
              <li>
                Radiates sunshine and grounded energy with a rustic boho vibe.
              </li>
              <li>Perfect for adding a vibrant touch to your walls.</li>
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

        {/* Dreamcatcher 2 */}
        <div className="experience-content">
          <div className="column right">
            <div className="text">⭐ Mini Starflower</div>
            <ul>
              <li>Compact and delicate with a star-shaped floral pattern.</li>
              <li>
                Ocean blues and whites — small in size, big in charm.
              </li>
              <li>
                Ideal for cozy corners, cars, or a thoughtful handmade gift.
              </li>
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
            <img
              src={product3}
              alt="Mini Starflower Dreamcatcher"
              className="image-right"
            />
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Dreamcatcher 3 */}
        <div className="experience-content">
          <div className="column left">
            <img src={product5} alt="Teal Daisy Bloom Dreamcatcher" />
          </div>
          <div className="column right">
            <div className="text">🌿 Teal Daisy Bloom</div>
            <ul>
              <li>Refreshing teal tones with a cheerful yellow daisy center.</li>
              <li>
                Intricate crochet lacework adds calmness and positivity.
              </li>
              <li>Perfect centerpiece for any modern or boho home.</li>
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
          {[product2, product4, product6].map((src, i) => (
            <div className="product-card" key={i}>
              <video
                src={src}
                controls
                loop
                muted
                playsInline
                className="product-video"
              />
            </div>
          ))}
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

export default DreamCatchers;
