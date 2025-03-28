import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../../assets/styles/FooterStyles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About AWOCHEM</h3>
          <p>
            AWOCHEM is serving industries  with innovative products and exceptional service.
            We specialize in manufacturing and supplying premium nylon materials
            for various industrial applications.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sector">Our Sectors</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Products</h3>
          <ul>
            <li><Link to="/product/specialist-bags">Specialist Bags</Link></li>
            <li><Link to="/product/tray-dolav-liners">Tray & Dolav Liners</Link></li>
            <li><Link to="/product/sheet-tubing">Sheet & Tubing</Link></li>
            <li><Link to="/product/specialist-sacks">Specialist Sacks</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <FaPhone className="contact-icon" />
              <span>+234 805 452 8088</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+234 802 322 0766</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>awochempolythene@gmail.com</span>
            </li>
            {/* <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Business Street, City, Country</span>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AWOCHEM. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
