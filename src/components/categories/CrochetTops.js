import React from "react";
import { Link } from "react-router-dom";
import product1 from "../../media/categories/crochetTops/product1.jpg";
import product2 from "../../media/categories/crochetTops/product2.jpg";
import product3 from "../../media/categories/crochetTops/product3.jpg";
import product4 from "../../media/categories/crochetTops/product4.MOV";

const products = [
  {
    name: "🌼 Boho Summer Top",
    image: product1,
    description: [
      "Lightweight and airy design for warm weather.",
      "Soft cotton blend for comfort and breathability.",
      "Perfect for layering or standalone wear.",
    ],
    // price: "₹---/-",
  },
  {
    name: "⭐ Classic V-Neck Top",
    image: product2,
    description: [
      "Elegant V-neck design suitable for all occasions.",
      "Durable yarn with intricate crochet pattern.",
      "Available in soft pastel shades.",
    ],
    // price: "₹---/-",
  },
  {
    name: "🌿 Floral Crochet Top",
    image: product3,
    description: [
      "Delicate floral motifs add a touch of femininity.",
      "Soft yarn ensures comfort and flexibility.",
      "Great for casual outings or festive occasions.",
    ],
    // price: "₹---/-",
  },
];

const CrochetTops = () => {
  return (
    <section className="products-section" id="crochet-tops-categories">
      <div className="max-width">
        <h2 className="categoriesTitle">Handmade Crochet Tops 🧶✨</h2>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
          Our crochet tops are meticulously handcrafted for comfort and style.
          Each piece is made with soft, breathable yarn to ensure a perfect fit
          and a unique handmade look. From casual wear to statement pieces,
          these crochet tops add charm and elegance to any outfit.
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
        <div className="product-content">
          <div className="column left">
            <video
              src={product4}
              controls
              loop
              muted
              playsInline
              className="product-video"
            />
          </div>
          <div className="column right">
            <div className="text">✨ Crochet Tops Showcase</div>
            <ul>
              <li>Watch the tops come alive in motion.</li>
              <li>See the fine details, texture, and fit in real life.</li>
              <li>Perfect for choosing your next favorite piece.</li>
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

        {/* Back to Categories */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link to="/categories" className="buy-now-button back-btn">
            ← Back to All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CrochetTops;
