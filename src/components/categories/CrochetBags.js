import React from "react";
import { Link } from "react-router-dom";
import product5 from "../../media/categories/crochetBags/product1.jpg";
import product2 from "../../media/categories/crochetBags/product2.jpg";
import product3 from "../../media/categories/crochetBags/product3.jpg";
import product4 from "../../media/categories/crochetBags/product4.jpg";
import product1 from "../../media/categories/crochetBags/product5.jpg";

const products = [
  {
    name: "👜 Boho Chic Crochet Bag",
    image: product1,
    description: [
      "Handmade boho-style crochet bag.",
      "Perfect for summer outings and festivals.",
    ],
    // price: "₹---/-",
  },
  {
    name: "🎀 Pastel Tote Crochet Bag",
    image: product2,
    description: [
      "Soft pastel-toned tote bag.",
      "Lightweight and spacious for daily essentials.",
    ],
    // price: "₹---/-",
  },
  {
    name: "🌸 Round Rattan Crochet Bag",
    image: product3,
    description: [
      "Unique round shape with crochet overlay.",
      "Ideal for beach days or casual wear.",
    ],
    // price: "₹---/-",
  },
  {
    name: "🌼 Vintage Pattern Crochet Bag",
    image: product4,
    description: [
      "Elegant vintage-inspired crochet patterns.",
      "Adds a retro charm to your outfit.",
    ],
    // price: "₹---/-",
  },
  {
    name: "💜 Colorblock Crochet Shoulder Bag",
    image: product5,
    description: [
      "Trendy colorblock design.",
      "Perfect for carrying essentials in style.",
    ],
    // price: "₹---/-",
  },
];

const CrochetBags = () => {
  return (
    <section className="products-section" id="crochet-bags-categories">
      <div className="max-width">
        <h2 className="categoriesTitle">Handmade Crochet Bags 🧵👜</h2>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
          Our crochet bags are not just accessories, they’re fashion statements.
          Designed with love, these bags are both stylish and practical, making
          them the perfect companion for your everyday adventures.
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

export default CrochetBags;
