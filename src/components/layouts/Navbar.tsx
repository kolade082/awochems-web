import {useState} from "react";
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import Logo from "../../assets/logos/awo-logo-white.png";
import '../../assets/styles/NavbarStyles.css'

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);


    return (
        <nav className="relative flex w-full justify-between navbar-dark-grey py-2 shadow-md shadow-black/5">
            <div className="flex w-full justify-between px-3 lg:px-4">
                {/* Hamburger Menu Icon */}
                <button onClick={() => setIsNavExpanded(!isNavExpanded)} className="hamburger lg:hidden">
                    <FaBars size={20}/>
                </button>
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={Logo}
                        style={{height: "30px"}}
                        alt="awochem Logo"
                        loading="lazy"
                    />
                </Link>


                <ul className={`navbar-menu ${isNavExpanded ? 'navbar-block' : 'navbar-hidden'} lg:flex items-center lg:mr-auto`}>
                    <li style={{marginLeft: "2em", marginRight: "2em"}}>
                        <Link
                            to="/"
                            className="text-neutral-500 hover:text-neutral-700"
                        >
                            HOME
                        </Link>
                    </li>
                    <div className="dropdown">
                        <button
                            onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                            className="text-white"
                        >
                            OUR PRODUCTS
                        </button>

                        {isProductsDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="/product/category1">Specialist Bag</Link></li>
                                <li><Link to="/product/category2">Tray & Dolav Liners</Link></li>
                                <li><Link to="/product/category3">Sheet & Tubing</Link></li>
                                <li><Link to="/product/category4">Specialist Sacks</Link></li>
                                {/* More categories */}
                            </ul>
                        )}
                    </div>
                    <li style={{marginLeft: "2em", marginRight: "2em"}}>
                        <Link
                            to="/sector"
                            className="text-neutral-500 hover:text-neutral-700"
                        >
                            OUR SECTORS
                        </Link>
                    </li>
                    <li style={{marginLeft: "2em", marginRight: "2em"}}>
                        <Link
                            to="/contact"
                            className="text-neutral-500 hover:text-neutral-700"
                        >
                            CONTACT US
                        </Link>
                    </li>
                    <li style={{marginLeft: "2em", marginRight: "2em"}}>
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
