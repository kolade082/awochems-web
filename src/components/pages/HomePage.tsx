import { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import "../styles/HomePage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


import bag from "../../assets/images/bags.png";
import tray from "../../assets/images/Trays-icon.png";
import sheets from "../../assets/images/sheets.png";
import sacks from "../../assets/images/sacks.png";
import company_image from "../../assets/images/company_image.jpg";
import home2 from "../../assets/images/home2.jpg";
// import ContactFormSlide from "../ContactSlide/ContactSlide";

import foodProcessingIcon from "../../assets/icons/food-processing.png";
import foodIngredientsIcon from "../../assets/icons/food-ingredients-icon.png";
import aggregatesIcon from "../../assets/icons/aggregates-icon.png";
import animalIcon from "../../assets/icons/Animal-Supplements-icon.png";
import furnitureIcon from "../../assets/icons/furniture-icon.png";
import laundryIcon from "../../assets/icons/laundry-icon.png";
import pharmaceuticalIcon from "../../assets/icons/pharmaceutical-icon@.png";

import hrs from "../../assets/icons/24-hours.svg";
import calendar from "../../assets/icons/calendar.svg";
import thumbs from "../../assets/icons/thumbs.png";
import {Link} from "react-router-dom";

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <img src={company_image} alt="Slide 1" />,
    <img src={home2} alt="Slide 2" />,
    // <ContactFormSlide />, 
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };


  // console.log(user)
  return (
    <div className="home-page">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-container">
            {slides[currentSlide]}
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
            <FontAwesomeIcon icon={faChevronLeft}/>
          </button>
          <button className="slide-btn next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight}/>
          </button>


        </section>

        {/* Why Awochem? Section */}
        {/*<section className="why-awochem">*/}
        {/*  <h2>WHY AWOCHEM?</h2>*/}
        {/*  <div className="benefits">*/}
        {/*    <div className="benefit">*/}
        {/*      <svg*/}
        {/*          className="benefit-icon quality-icon"*/}
        {/*          xmlns="http://www.w3.org/2000/svg"*/}
        {/*          viewBox="0 0 24 24"*/}
        {/*          fill="none"*/}
        {/*          stroke="currentColor"*/}
        {/*      >*/}
        {/*        <circle cx="12" cy="12" r="10"/>*/}
        {/*        <path d="M12 8l3 3-3 3-3-3 3-3z"/>*/}
        {/*      </svg>*/}
        {/*      <span className="benefit-text">QUALITY</span>*/}
        {/*    </div>*/}
        {/*    <div className="benefit">*/}
        {/*      <svg*/}
        {/*          className="benefit-icon fast-icon"*/}
        {/*          xmlns="http://www.w3.org/2000/svg"*/}
        {/*          viewBox="0 0 24 24"*/}
        {/*          fill="none"*/}
        {/*          stroke="currentColor"*/}
        {/*      >*/}
        {/*        <path d="M5 12l2 2 4-4 2 2 4-4"/>*/}
        {/*        <path d="M3 3v18h18"/>*/}
        {/*      </svg>*/}
        {/*      <span className="benefit-text">FAST</span>*/}
        {/*    </div>*/}
        {/*    <div className="benefit">*/}
        {/*      <svg*/}
        {/*          className="benefit-icon industrial-icon"*/}
        {/*          xmlns="http://www.w3.org/2000/svg"*/}
        {/*          viewBox="0 0 24 24"*/}
        {/*          fill="none"*/}
        {/*          stroke="currentColor"*/}
        {/*      >*/}
        {/*        <rect x="3" y="3" width="7" height="8"/>*/}
        {/*        <rect x="14" y="3" width="7" height="7"/>*/}
        {/*        <rect x="14" y="14" width="7" height="7"/>*/}
        {/*        <rect x="3" y="14" width="7" height="7"/>*/}
        {/*      </svg>*/}
        {/*      <span className="benefit-text">INDUSTRIAL</span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* Explore Our Products Section */}
        <section className="explore-products-section">
          <div className="products-layout">
            <div className="product-cards">
              {/* Product Card for Specialist Bags */}
              <Link to="/product/category1" className="product-card-link">
              <div className="product-card card-specialist-bags">
                <img src={bag} alt="bag"/>
                <h3>Specialist Bags</h3>
                <p>All-purpose, accredited, flexible</p>
              </div>
              </Link>
              {/* Product Card for Tray & Dolav Liners */}
              <Link to="/product/category2" className="product-card-link">
              <div className="product-card card-tray-liners">
                <img src={tray} alt="bag"/>
                <h3>Tray & Dolav Liners</h3>
                <p>Safe, compliant, hygienic</p>
              </div>
              </Link>
              <Link to="/product/category3" className="product-card-link">
              <div className="product-card card-sheets-tubing">
                <img src={sheets} alt="bag"/>
                <h3>Sheets & Tubing</h3>
                <p>Tough, customisable, protective</p>
              </div>
              </Link>
              <Link to="/product/category4" className="product-card-link">
              <div className="product-card card-specialist-sacks">
                <img src={sacks} alt="bag"/>
                <h3>Specialist Sacks</h3>
                <p>Adaptable, purpose-built, strong</p>
              </div>
              </Link>
            </div>

            <div className="products-description">
              <h2>Explore Our Product Range</h2>
              <p>Our entire range is produced at our Lagos locations...</p>
              <button className="btn-core-products">OUR CORE PRODUCTS</button>
            </div>
          </div>
        </section>

        <section className="action-cta">
          <h2>Ready to Get Started?</h2>
          <p>Discover our solutions and take your business to the next level.</p>
          <div className="cta-buttons">
            <Link to="/signup" className="mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">SIGN UP</Link>
            <Link to="/login" className="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">Login</Link>
          </div>
        </section>

        <section className="why-choose-section">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>CHOOSE AWOCHEM</h2>
              <p>
                With Awochem, your business benefits from a personalised
                service. We are able to offer a wide range... Our audits are
                designed to recommend and specify the correct product for the
                application, often lighter, more environmentally friendly and a
                cost efficient solution.
              </p>
            </div>
            <div className="why-choose-icons">
              <div className="icon-item">
                <img src={hrs} alt="Dedicated Account"/>
                <p>We provide a dedicated account manager for every client</p>
              </div>
              <div className="icon-item">
                <img src={calendar} alt="Industry Experts"/>
                <p>
                  We are industry experts who supply major retailers globally
                </p>
              </div>
              <div className="icon-item">
                <img src={thumbs} alt="Unique Solutions"/>
                <p>
                  We offer unique solutions whilst reducing your carbon
                  footprint
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
            <Link to="/contact" className="contact-us-button">CONTACT US</Link>
          </div>
        </section>

        {/* Our Sectors Section */}
        <section className="our-sectors">
          <div className="sectors-container">
            <div className="sector-description">
              <h2>OUR MARKET SECTORS</h2>
              <p>
                Awochem has extensive ties within the food industry, yet carries
                these high standards and exceptional quality requirements to all
                the sectors we work with.
              </p>
            </div>
            <div className="sector-icons">
              {/* First three sector items */}
              <div className="sector-items">
                <img src={foodProcessingIcon} alt="Food Processing"/>
                <h3>Food Processing</h3>
              </div>
              <div className="sector-items">
                <img src={foodIngredientsIcon} alt="Food Ingredients"/>
                <h3>Food Ingredients</h3>
              </div>
              <div className="sector-items">
                <img src={animalIcon} alt="Animal Feed & Supplements"/>
                <h3>Animal Feed & Supplements</h3>
              </div>
            </div>
          </div>
          {/* Remaining four sector items */}
          <div className="sector-icons second-row">
            <div className="sector-items">
              <img src={furnitureIcon} alt="Furniture & Bedding"/>
              <h3>Furniture & Bedding</h3>
            </div>
            <div className="sector-items">
              <img src={laundryIcon} alt="Laundry"/>
              <h3>Laundry</h3>
            </div>
            <div className="sector-items">
              <img src={pharmaceuticalIcon} alt="Pharmaceutical"/>
              <h3>Pharmaceutical</h3>
            </div>
            <div className="sector-items">
              <img src={aggregatesIcon} alt="Aggregates"/>
              <h3>Aggregates</h3>
            </div>
          </div>
        </section>

      </main>

      <Footer/>
    </div>
  );
}

export default HomePage;
