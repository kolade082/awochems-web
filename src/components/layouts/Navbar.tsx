import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logos/awo-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/NavbarStyles.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="AWO Logo" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>

          <li className="nav-item">
            <div className="nav-link products-link" onClick={toggleProducts}>
              OUR PRODUCTS
              <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
            </div>
            <ul className={isProductsOpen ? "submenu active" : "submenu"}>
              <li>
                <Link to="/product/category1">Specialist Bag</Link>
              </li>
              <li>
                <Link to="/product/category2">Tray & Dolav Liners</Link>
              </li>
              <li>
                <Link to="/product/category3">Sheet & Tubing</Link>
              </li>
              <li>
                <Link to="/product/category4">Specialist Sacks</Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/sector" className="nav-link">
              OUR SECTORS
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">
              ABOUT US
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
