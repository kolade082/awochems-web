import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logos/awo-logo-white.png";
import "../../assets/styles/NavbarStyles.css";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="relative flex w-full navbar-dark-grey py-2 shadow-md shadow-black/5">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            style={{ height: "30px" }}
            alt="awochem Logo"
            loading="lazy"
          />
        </Link>
        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setIsNavExpanded(!isNavExpanded)}
          className="hamburger lg:hidden"
        >
          <FaBars size={20} />
        </button>
        </div>

        <ul
          className={`
          absolute lg:static
          top-full left-0 w-full
          flex flex-col lg:flex-row 
          items-center justify-center
          bg-black lg:bg-transparent
          space-y-4 lg:space-y-0 lg:space-x-6
          ${isNavExpanded ? "block" : "hidden"} 
          lg:flex
          lg:absolute lg:left-1/2 
          lg:transform lg:-translate-x-1/2
        `}
        >
          <li>
            <Link
              to="/"
              className="text-white hover:text-neutral-300 transition-colors"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link to="/" className="text-neutral-500 hover:text-neutral-700">
              OUR PRODUCTS
            </Link>
          </li>
          <li>
            <Link
              to="/sector"
              className="text-neutral-500 hover:text-neutral-700"
            >
              OUR SECTORS
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-neutral-500 hover:text-neutral-700"
            >
              CONTACT US
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-neutral-500 hover:text-neutral-700"
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
