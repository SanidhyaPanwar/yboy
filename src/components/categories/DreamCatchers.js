import React from "react";
import { Link } from "react-router-dom";
import product1 from "../../media/categories/dreamCatchers/product1.jpg";
import product2 from "../../media/categories/dreamCatchers/product2.mp4";
import product3 from "../../media/categories/dreamCatchers/product3.jpg";
import product4 from "../../media/categories/dreamCatchers/product4.mp4";
import product5 from "../../media/categories/dreamCatchers/product5.jpg";
import product6 from "../../media/categories/dreamCatchers/product6.mp4";

const products = [
  {
    name: "🌼 Earthy Sunburst",
    image: product1,
    description: [
      "A bold blend of warm browns, golden yellow, and soft neutrals.",
      "Radiates sunshine and grounded energy with a rustic boho vibe.",
      "Perfect for adding a vibrant touch to your walls.",
    ],
    // price: "₹---/-",
  },
  {
    name: "⭐ Mini Starflower",
    image: product3,
    description: [
      "Compact and delicate with a star-shaped floral pattern.",
      "Ocean blues and whites — small in size, big in charm.",
      "Ideal for cozy corners, cars, or a thoughtful handmade gift.",
    ],
    // price: "₹---/-",
  },
  {
    name: "🌿 Teal Daisy Bloom",
    image: product5,
    description: [
      "Refreshing teal tones with a cheerful yellow daisy center.",
      "Intricate crochet lacework adds calmness and positivity.",
      "Perfect centerpiece for any modern or boho home.",
    ],
    // price: "₹---/-",
  },
];

const videos = [product2, product4, product6];

const DreamCatchers = () => {
  return (
    <section className="products-section" id="dreamcatchers-categories">
      <div className="max-width">
        <h2 className="categoriesTitle">Handmade Crochet Dreamcatchers 🌙✨</h2>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
  Our crochet dreamcatchers are handmade with love, featuring intricate patterns
  and vibrant threads. Inspired by tradition, they bring positivity, filter away
  negativity, and add a touch of boho charm to any space. Each piece is unique —
  a meaningful gift or a timeless décor accent. 🌙✨
</p>


        {products.map((product, index) => (
          <div
            key={index}
            className={`product-content ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="column left">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="column right">
              <div className="text">{product.name}</div>
              <ul>
                {product.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
                {/* <li>Price: {product.price}</li> */}
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
            <hr />
          </div>
        ))}

        {/* Video Showcase */}
        <h3 style={{ textAlign: "center", margin: "40px 0 20px" }}>
          🎥 See Them in Action
        </h3>
        <div className="video-row">
          {videos.map((src, i) => (
            <video
              key={i}
              src={src}
              controls
              loop
              muted
              playsInline
              className="product-video"
            />
          ))}
        </div>

        {/* Back link */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link to="/categories" className="buy-now-button back-btn">
            ← Back to All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DreamCatchers;
