"use client";

import { useEffect } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const handleRedeem = (name, points) => {
    alert(`Redeeming ${name} for ${points}!`);
  };

  return (
    <>
      {/* Full-width Navbar */}
      <div className="navbarWrapper">
        <Navbar/>
      </div>

      {/* Main Content Container */}
      <div className="container">
        <div className="pointsSection">
          <h2 className="sectionTitle">Redeem Your Green Points</h2>
          <div className="pointsDisplay">
            <div className="pointsIcon">🌱</div>
            <span className="pointsNumber">2,450 Points</span>
          </div>
        </div>

        <div className="productsGrid">
          {[
            {
              name: "Bamboo Water Bottle",
              points: "500 Points",
              price: "₹899",
              image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
            },
            {
              name: "Organic Cotton Tote Bag",
              points: "300 Points",
              price: "₹599",
              image: "https://apisap.fabindia.com/medias/20243357-01.jpg?context=bWFzdGVyfGltYWdlc3wxMzUxOTF8aW1hZ2UvanBlZ3xhR00yTDJneE15ODVPREkzTnpNM056Y3pOamN6TkM4eU1ESTBNek0xTjE4d01TNXFjR2N8NGRlOWJhMDkzMWNiMWYyODdhOWRlM2JlOWUwNDQwNzIwZTg4MDUyNGE4MjljZjlmODI3MDJhYjg3YWMwMDk4Mw",
            },
            {
              name: "Solar Power Bank",
              points: "1,200 Points",
              price: "₹2,499",
              image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300&h=200&fit=crop",
            },
            {
              name: "Bamboo Cutlery Set",
              points: "400 Points",
              price: "₹799",
              image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=300&h=200&fit=crop",
            },
            {
              name: "Seed Paper Notebook",
              points: "250 Points",
              price: "₹449",
              image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&h=200&fit=crop",
            },
            {
              name: "Beeswax Food Wraps",
              points: "350 Points",
              price: "₹699",
              image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
            },
            {
              name: "Plant-based Phone Case",
              points: "600 Points",
              price: "₹1,199",
              image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
            },
            {
              name: "Herb Growing Kit",
              points: "800 Points",
              price: "₹1,599",
              image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
            },
          ].map((product, index) => (
            <div className="productCard" key={index}>
              <img src={product.image} alt={product.name} className="productImage" />
              <div className="productName">{product.name}</div>
              <div className="productPoints">{product.points}</div>
              <div className="productPrice">{product.price}</div>
              <button
                className="redeemBtn"
                onClick={() => handleRedeem(product.name, product.points)}
              >
                Redeem Now
              </button>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="quoteSection">
          <div className="quoteIcon">❝</div>
          <p className="quote">
            Every act of kindness towards our planet deserves recognition, and every green choice you make today plants the seeds for a sustainable tomorrow.
          </p>
          <div className="quoteIconBottom">❞</div>
        </div>
      </div>

      {/* Full-width Footer */}
      <div className="footerWrapper">
        <Footer/>
      </div>

      <style jsx global>{`
        /* Global Reset and Full Page Coverage */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          height: 100%;
          width: 100%;
          overflow-x: hidden;
        }

        body {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%);
          background-attachment: fixed;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #2d5a2d;
          overflow-x: hidden;
        }

        #__next {
          min-height: 100vh;
          width: 100%;
          max-width: 100vw;
          background: transparent;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
        }
      `}</style>

      <style jsx>{`
        /* Full-width Navbar Wrapper */
        .navbarWrapper {
          width: 100%;
          background: linear-gradient(135deg, #2e7d32 0%, #4caf50 100%);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        /* Main Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background: transparent;
          min-height: calc(100vh - 120px);
          position: relative;
          flex: 1;
          width: 100%;
        }

        /* Full-width Footer Wrapper */
        .footerWrapper {
          width: 100%;
          background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
          margin-top: auto;
        }

        /* Points Section */
        .pointsSection {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 30px 0 40px;
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd200 100%);
          padding: 15px 20px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .sectionTitle {
          font-size: 1.6em;
          color: #ffffff;
          font-weight: 800;
        }

        .pointsDisplay {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #4caf50, #66bb6a);
          padding: 12px 20px;
          border-radius: 20px;
          color: #ffffff;
          font-weight: bold;
          box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
        }

        .pointsIcon {
          background: #ffd700;
          border-radius: 50%;
          padding: 5px;
          font-size: 12px;
        }

        .pointsNumber {
          font-size: 1.2em;
        }

        /* Products Grid */
        .productsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-bottom: 60px;
        }

        .productCard {
          background: #ffffff;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border: 1px solid #ddd;
          transition: all 0.2s ease;
        }

        .productCard:hover {
          transform: translateY(-2px);
          border-color: #ff9900;
        }

        .productImage {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 15px;
          transition: transform 0.3s ease;
        }

        .productCard:hover .productImage {
          transform: scale(1.05);
        }

        .productName {
          font-size: 1em;
          font-weight: 600;
          color: #0f1111;
          margin-bottom: 8px;
        }

        .productPoints {
          color: #4caf50;
          font-weight: bold;
          margin-bottom: 4px;
        }

        .productPrice {
          text-decoration: line-through;
          color: #888;
          margin-bottom: 12px;
          font-size: 0.9em;
        }

        .redeemBtn {
          background: #5cb85c;
          color: #ffffff;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .redeemBtn:hover {
          background: #449d44;
        }

        /* Quote Section */
        .quoteSection {
          position: relative;
          background: linear-gradient(135deg, #a1ffce 0%, #faffd1 40%, #76e4d9 100%);
          padding: 2rem;
          margin: 2rem 0 4rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .quote {
          font-style: italic;
          font-size: 1.25rem;
          color: #1b4332;
          font-weight: 500;
          line-height: 1.8;
          padding: 0 1rem;
        }

        .quoteIcon,
        .quoteIconBottom {
          font-size: 2.5rem;
          color: #2e7d32;
          animation: float 3s ease-in-out infinite;
        }

        .quoteIcon {
          position: absolute;
          top: 10px;
          left: 20px;
          animation-delay: 0s;
        }

        .quoteIconBottom {
          position: absolute;
          bottom: 10px;
          right: 20px;
          animation-delay: 1.5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .container {
            padding: 15px;
            margin: 0;
            max-width: 100%;
          }

          .pointsSection {
            flex-direction: column;
            gap: 15px;
            text-align: center;
            margin: 20px 0 30px;
          }

          .productsGrid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .quote {
            font-size: 1rem;
            line-height: 1.6;
          }

          .quoteIcon,
          .quoteIconBottom {
            font-size: 2rem;
          }

          .quoteSection {
            margin: 2rem 0 3rem;
            padding: 1.5rem;
          }

          .sectionTitle {
            font-size: 1.3em;
          }

          .pointsNumber {
            font-size: 1.1em;
          }
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .container {
            padding: 18px;
            max-width: calc(100% - 20px);
            margin: 0 auto;
          }

          .productsGrid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }

        /* Large Screen Optimization */
        @media (min-width: 1400px) {
          .container {
            max-width: 1400px;
          }

          .productsGrid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          }
        }
      `}</style>
    </>
  );
}
