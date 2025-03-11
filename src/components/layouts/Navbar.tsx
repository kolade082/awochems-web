import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logos/awo-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/NavbarStyles.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const closeMenus = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-menu') && !target.closest('.menu-icon')) {
        setIsOpen(false);
      }
      if (!target.closest('.products-link') && !target.closest('.submenu')) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('click', closeMenus);
    return () => document.removeEventListener('click', closeMenus);
  }, []);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  
  const toggleProducts = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsProductsOpen(!isProductsOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src={Logo} alt="AWO Logo" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleLinkClick}>
              HOME
            </Link>
          </li>

          <li className="nav-item">
            <div 
              className={`nav-link products-link ${isProductsOpen ? 'active' : ''}`} 
              onClick={toggleProducts}
            >
              OUR PRODUCTS
              <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`dropdown-icon ${isProductsOpen ? 'rotate' : ''}`}
              />
            </div>
            <ul className={`submenu ${isProductsOpen ? "active" : ""}`}>
              <li>
                <Link to="/product/category1" onClick={handleLinkClick}>Specialist Bag</Link>
              </li>
              <li>
                <Link to="/product/category2" onClick={handleLinkClick}>Tray & Dolav Liners</Link>
              </li>
              <li>
                <Link to="/product/category3" onClick={handleLinkClick}>Sheet & Tubing</Link>
              </li>
              <li>
                <Link to="/product/category4" onClick={handleLinkClick}>Specialist Sacks</Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/sector" className="nav-link" onClick={handleLinkClick}>
              OUR SECTORS
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={handleLinkClick}>
              ABOUT US
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
