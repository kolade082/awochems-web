import { useState, useEffect } from "react";
import "../styles/HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import printingCustomisation from "../assets/images/bags.png";
import foodConsumerPackaging from "../assets/images/bread-outline.png";
import cardWraps from "../assets/images/sheets.png";
import packagingBags from "../assets/images/sacks.png";
import company_image from "../assets/images/company_image.jpg";
import home2 from "../assets/images/home2.jpg";
// import ContactFormSlide from "../ContactSlide/ContactSlide";

import foodProcessingIcon from "../assets/icons/food-processing.png";
import foodIngredientsIcon from "../assets/icons/food-ingredients-icon.png";
import aggregatesIcon from "../assets/icons/aggregates-icon.png";
import animalIcon from "../assets/icons/Animal-Supplements-icon.png";
import furnitureIcon from "../assets/icons/furniture-icon.png";
import laundryIcon from "../assets/icons/laundry-icon.png";
import pharmaceuticalIcon from "../assets/icons/pharmaceutical-icon@.png";

import hrs from "../assets/icons/24-hours.svg";
import calendar from "../assets/icons/calendar.svg";
import thumbs from "../assets/icons/thumbs.png";
import { Link } from "react-router-dom";

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <img src={company_image} alt="Slide 1" />,
    <img src={home2} alt="Slide 2" />,
    // <ContactFormSlide />,
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    // Observe all animated elements
    const elements = document.querySelectorAll(
      ".intro-section, .benefit, .product-card, .products-description, .why-choose-text, .icon-item, .home-sector-items, .home-sector-description"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // console.log(user)
  return (
    <div className="home-page">
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-container">
            {slides[currentSlide]}
            <div className="hero-content">
              <h1>Welcome to AWOCHEM</h1>
              {/* <p>Your Trusted Partner in Quality Chemical Solutions</p> */}
              <div className="hero-buttons">
                <Link to="/sector" className="primary-btn">
                  Explore Sectors
                </Link>
                <Link to="/contact" className="secondary-btn">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
          <button className="slide-btn prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="slide-btn next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </section>

        <section className="intro-section">
          <div className="intro-content">
            <h2>Excellence in Industrial Packaging</h2>

            <div className="stats-container">
              <div className="stat-item">
                <h3>15+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Customer Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Awochem? Section */}
        <section className="why-awochem">
          <div className="benefits">
            <div className="benefit">
              <svg
                className="benefit-icon industrial-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="3" y="3" width="7" height="8" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <span className="benefit-text">INDUSTRIAL EXPERTISE</span>
              <p className="benefit-description">
                Comprehensive solutions for all industrial packaging needs
              </p>
              <ul className="benefit-features">
                <li>Custom Manufacturing</li>
                <li>Technical Consultation</li>
                <li>Industry-Specific Solutions</li>
              </ul>
            </div>

            <div className="benefit">
              <svg
                className="benefit-icon quality-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l3 3-3 3-3-3 3-3z" />
              </svg>
              <span className="benefit-text">QUALITY ASSURANCE</span>
              <p className="benefit-description">
                Premium products meeting international standards with rigorous
                quality control
              </p>
              <ul className="benefit-features">
                <li>ISO Certified Manufacturing</li>
                <li>Quality Testing at Every Stage</li>
              </ul>
            </div>

            <div className="benefit">
              <svg
                className="benefit-icon fast-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M5 12l2 2 4-4 2 2 4-4" />
                <path d="M3 3v18h18" />
              </svg>
              <span className="benefit-text">RAPID DELIVERY</span>
              <p className="benefit-description">
                Quick delivery and efficient service with real-time tracking
              </p>
              <ul className="benefit-features">
                <li>Flexible Delivery Options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Explore Our Products Section */}
        <section className="explore-products-section">
          <div className="products-layout">
            <div className="product-cards">
              {/* Product Card for Specialist Bags */}
              <Link to="/product/packaging-industrial-bags" className="product-card-link">
                <div className="product-card card-packaging-bags">
                  <img src={packagingBags} alt="packagingBags" />
                  <h3>Packaging & Industrial Bags</h3>
                  <p>Durable, versatile, high-quality</p>
                </div>
              </Link>
              {/* Product Card for Tray & Dolav Liners */}
              <Link to="/product/food-consumer-packaging" className="product-card-link">
                <div className="product-card card-food-consumer-packaging">
                  <img src={foodConsumerPackaging} alt="bag" />
                  <h3>Food & Consumer Packaging</h3>
                  <p>Safe, hygienic, reliable</p>
                </div>
              </Link>
              <Link to="/product/printing-customisation" className="product-card-link">
                <div className="product-card card-printing-customisation">
                  <img src={printingCustomisation} alt="bag" />
                  <h3>Printing & Customisation</h3>
                  <p>Custom prints, high-quality branding</p>
                </div>
              </Link>
              <Link to="/product/stretch-shrink-wraps" className="product-card-link">
                <div className="product-card card-wraps">
                  <img src={cardWraps} alt="cardWraps" />
                  <h3>Stretch & Shrink Wraps</h3>
                  <p>Flexible, protective, strong</p>
                </div>
              </Link>
            </div>

            <div className="products-description">
              <h2>Our Product Categories</h2>
              <p>
                Discover our comprehensive range of high-quality packaging
                solutions designed to meet specific industrial needs. Each
                category represents our commitment to excellence in material
                quality, safety standards, and customer satisfaction.
              </p>
              <div className="product-highlights">
                <div className="highlight">
                  <span className="highlight-number">100%</span>
                  <p>Quality Tested Materials</p>
                </div>
                <div className="highlight">
                  <span className="highlight-number">4</span>
                  <p>Specialized Categories</p>
                </div>
                <div className="highlight">
                  <span className="highlight-number">∞</span>
                  <p>Customization Options</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-section">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>WHY PARTNER WITH AWOCHEM?</h2>
              <p>
                Choosing the right partner for your packaging needs is essential
                for quality, efficiency, and reliability. At Awochem, we are
                committed to providing exceptional service, innovative
                solutions, and industry expertise to help your business thrive.
              </p>
            </div>
            <div className="why-choose-icons">
              <div className="icon-item">
                <img src={hrs} alt="Dedicated Account" />
                <p>
                  We work with professionals employees that are well qualified
                  in their prospective field of operation to deliver products
                  and services that well satisfies our customers, who in turn
                  gives us a lot of referrals.
                </p>
              </div>
              <div className="icon-item">
                <img src={calendar} alt="Industry Experts" />
                <p>
                  We have 15 years experience in the servicing and production of
                  packaged polythene. Our delivery system is Nation wide. Our
                  reputation speaks well of us.
                </p>
              </div>
              <div className="icon-item">
                <img src={thumbs} alt="Unique Solutions" />
                <p>
                  We are a manufacturer of polyethylene packaging. We extrude
                  poly film, imprint to customer specifications, and then
                  convert the film into a variety of bag styles. We also
                  manufacture retail flexible plastic packaging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Find Your Packaging Solution CTA Section */}
        <section className="packaging-solution-cta">
          <div className="cta-content">
            <h2>FIND YOUR PACKAGING SOLUTION TODAY!</h2>
            {/*<button>CONTACT US</button>*/}
            <Link to="/contact" className="contact-us-button">
              CONTACT US
            </Link>
          </div>
        </section>

        {/* Our Sectors Section */}
        <section className="our-sectors">
          <div className="sectors-container">
            <div className="home-sector-description">
              <h2>INDUSTRY SECTORS WE SERVE</h2>
              <p>
                Awochem has extensive ties within the food industry, yet carries
                these high standards and exceptional quality requirements to all
                the sectors we work with.
              </p>
            </div>
            <div className="sector-icons">
              {/* First three sector items */}
              <div className="home-sector-items">
                <img src={foodProcessingIcon} alt="Food Processing" />
                <h3>Food Processing</h3>
              </div>
              <div className="home-sector-items">
                <img src={foodIngredientsIcon} alt="Food Ingredients" />
                <h3>Food Ingredients</h3>
              </div>
              <div className="home-sector-items">
                <img src={animalIcon} alt="Animal Feed & Supplements" />
                <h3>Animal Feed & Supplements</h3>
              </div>
            </div>
          </div>
          {/* Remaining four sector items */}
          <div className="sector-icons second-row">
            <div className="home-sector-items">
              <img src={furnitureIcon} alt="Furniture & Bedding" />
              <h3>Furniture & Bedding</h3>
            </div>
            <div className="home-sector-items">
              <img src={laundryIcon} alt="Laundry" />
              <h3>Laundry</h3>
            </div>
            <div className="home-sector-items">
              <img src={pharmaceuticalIcon} alt="Pharmaceutical" />
              <h3>Pharmaceutical</h3>
            </div>
            <div className="home-sector-items">
              <img src={aggregatesIcon} alt="Aggregates" />
              <h3>Aggregates</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
