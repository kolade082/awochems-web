import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection/HeroSection';
import { PRODUCTS } from '../data/products';
import '../styles/ProductPage.css';

const generateBackgroundColor = (index: number): string => {
  const colors = ['#3c4d7b', '#4b7e93'];
  return colors[index % colors.length];
};

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? PRODUCTS[productId] : null;

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="product-page">
      <HeroSection backgroundImage={product.heroImage} title={product.heroTitle} />
      <main className="product-main-content">
        <div className="product-content">
          <div className="product-details">
            <h1 className="header-text">{product.title}</h1>
            <p>{product.description}</p>
            
            <section className="product-features">
              <h2 className="header-text">Features</h2>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
            
            <section className="product-specifications">
              <h2 className="header-text">Specifications</h2>
              <ul>
                {product.specifications.map((spec, index) => (
                  <li key={index}>
                    <strong>{spec.name}:</strong> {spec.value}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          <div className="product-main-image-container">
            <img src={product.image} alt={product.title} className="product-main-image"/>
          </div>
        </div>

        <section className="related-products">
          <h2 className="header-text">Other Products</h2>
          <div className="related-products-grid">
            {product.relatedProducts.map((relatedProduct, index) => (
              <Link 
                to={relatedProduct.path} 
                key={index} 
                style={{ textDecoration: 'none' }}
              >
                <div 
                  className="related-product-item"
                  style={{ backgroundColor: generateBackgroundColor(index) }}
                >
                  <img src={relatedProduct.image} alt={relatedProduct.title} />
                  <h3>{relatedProduct.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="packaging-solution-cta">
          <div className="cta-content">
            <h2>FIND YOUR PACKAGING SOLUTION TODAY!</h2>
            <Link to="/contact" className="contact-us-button">CONTACT US</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPage; 