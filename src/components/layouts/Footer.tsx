import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../../assets/styles/FooterStyles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About AWO Chemicals</h3>
          <p>
            AWO Chemicals is a leading provider of high-quality chemical solutions,
            serving industries worldwide with innovative products and exceptional service.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/sectors">Our Sectors</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Products</h3>
          <ul>
            <li><Link to="/product/category1">Specialist Bag</Link></li>
            <li><Link to="/product/category2">Tray & Dolav Liners</Link></li>
            <li><Link to="/product/category3">Sheet & Tubing</Link></li>
            <li><Link to="/product/category4">Specialist Sacks</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <FaPhone className="contact-icon" />
              <span>+1 234 567 890</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>info@awochemicals.com</span>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Business Street, City, Country</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AWO Chemicals. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
