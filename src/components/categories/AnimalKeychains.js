import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../media/categories/animalKeychains/mr-otto.jpg";
import pic2 from "../../media/categories/animalKeychains/mr-hootie.jpg";
import pic3 from "../../media/categories/animalKeychains/miss-charmie.png";
import pic4 from "../../media/categories/animalKeychains/oogway-junior.png";

const products = [
  {
    name: "🐙 Mr. Otto the Octopus",
    image: pic1,
    description: [
      "Hand-crocheted with love and high-quality yarn.",
      "Soft, squishy, and adorable — perfect for gifting or keeping!",
    ],
    price: "₹225/-",
  },
  {
    name: "🦉 Mr. Hootie the Owl",
    image: pic2,
    description: [
      "Wise and tiny (2.5 inches) with cute eyes and colorful feathers.",
      "Perfect companion for bags or car keys.",
    ],
    price: "₹120/-",
  },
  {
    name: "🦄 Miss Charmie the Unicorn",
    image: pic3,
    description: [
      "Magical charm in a small size! A dreamy gift for all ages.",
      "Hand-stitched with pastel yarn and sparkly horn.",
    ],
    price: "₹225/-",
  },
  {
    name: "🐢 Oogway Junior the Turtle",
    image: pic4,
    description: [
      "3 inches of slow-moving cuteness and wisdom.",
      "Sturdy design — made to last with a detailed shell pattern.",
    ],
    price: "₹190/-",
  },
];

const AnimalKeychains = () => {
  return (
    <section className="products-section" id="keyring-categories">
      <div className="max-width">
        <h2 className="categoriesTitle">Animal-Themed Crochet Keyrings 🧸</h2>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
          These cuties are waiting for you to welcome them into their forever
          home 🥺💕
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
                <li>Price: {product.price}</li>
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

        <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/categories" className="buy-now-button back-btn">
  ← Back to All Categories
</Link>

        </div>
      </div>
    </section>
  );
};

export default AnimalKeychains;
