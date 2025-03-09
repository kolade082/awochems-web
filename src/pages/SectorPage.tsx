import { useState } from 'react';
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import Modal from "../components/Modal/Modal";
import "../styles/SectorPage.css";
// import "../Modal/Modal.css";

// Import background image
import sus from "../assets/images/sus.jpg";

// Import darkened icons
import foodProcessingIcon from "../assets/icons/Darkened_food-processing.png";
import foodIngredientsIcon from "../assets/icons/Darkened_food-ingredients-icon.png";
import aggregatesIcon from "../assets/icons/Darkened_aggregates-icon.png";
import animalIcon from "../assets/icons/Darkened_Animal-Supplements-icon.png";
import furnitureIcon from "../assets/icons/Darkened_furniture-icon.png";
import laundryIcon from "../assets/icons/Darkened_laundry-icon.png";
import pharmaceuticalIcon from "../assets/icons/Darkened_pharmaceutical-icon.png";

// Import sector images
import foodprocessing from "../assets/images/foodprocessing.jpeg";
import animalfeed from "../assets/images/animalfeed.jpeg";
import foodingredients from "../assets/images/foodingredients.jpeg";
import furniture from "../assets/images/furniture.jpeg";
import laundry from "../assets/images/laundry.jpeg";
import aggregrates from "../assets/images/aggregrates.jpeg";
import pharm from "../assets/images/pharm.jpeg";

interface Sector {
  icon: string;
  title: string;
  description: string;
  moreDetails: string;
  detailImage: string;
}

const sectors: Sector[] = [
  {
    icon: foodProcessingIcon,
    title: "Food Processing",
    description: "This sector focuses on the transformation of raw ingredients into food products.",
    moreDetails: "This sector focuses on the transformation of raw ingredients into food products. It involves a wide range of activities from grinding grain to make raw flour to home cooking to complex industrial processes used to make convenience foods.",
    detailImage: foodprocessing,
  },
  {
    icon: foodIngredientsIcon,
    title: "Food Ingredients",
    description: "This sector ensures the quality and flavor of food remains consistent and high.",
    moreDetails: "Specializing in providing key food ingredients for a variety of dishes and products, this sector ensures the quality and flavor of food remains consistent and high. It includes spices, flavorings, and essential components for food manufacturing.",
    detailImage: foodingredients,
  },
  {
    icon: animalIcon,
    title: "Animal Feed & Supplements",
    description: "This sector provides feed and supplements to support the health and growth of livestock, poultry, and pets.",
    moreDetails: "Focused on the nutritional needs of animals, this sector provides feed and supplements to support the health and growth of livestock, poultry, and pets. Innovation in this sector is vital for sustainable and efficient animal husbandry.",
    detailImage: animalfeed,
  },
  {
    icon: furnitureIcon,
    title: "Furniture & Bedding",
    description: "This sector covers the design, manufacture, and sale of furniture and bedding.",
    moreDetails: "From stylish home furnishings to functional office setups, this sector covers the design, manufacture, and sale of furniture and bedding. Quality and comfort are paramount, with a focus on sustainable materials and practices.",
    detailImage: furniture,
  },
  {
    icon: laundryIcon,
    title: "Laundry",
    description: "The laundry sector services both domestic and commercial needs for clean textiles.",
    moreDetails: "The laundry sector services both domestic and commercial needs for clean textiles. It encompasses a range of services from traditional laundromats to specialized cleaning for uniforms, linens, and more.",
    detailImage: laundry,
  },
  {
    icon: pharmaceuticalIcon,
    title: "Pharmaceutical",
    description: "This critical sector is involved in the research, development, and distribution of medications.",
    moreDetails: "This critical sector is involved in the research, development, and distribution of medications. It plays a vital role in healthcare, striving to bring innovative treatments to market to improve patient outcomes.",
    detailImage: pharm,
  },
  {
    icon: aggregatesIcon,
    title: "Aggregates",
    description: "This sector provides essential materials such as sand, gravel, and crushed stone.",
    moreDetails: "Serving the construction industry, this sector provides essential materials such as sand, gravel, and crushed stone. These materials are foundational to infrastructure projects and construction activities.",
    detailImage: aggregrates,
  },
];

function SectorPage() {
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
  const isLastItemSingle = sectors.length % 2 !== 0;

  return (
    <div className="sector-page-wrapper">
      <HeroSection backgroundImage={sus} title="Our Sectors" />
      
      <div className="sector-container">
        {sectors.map((sector, index) => (
          <div
            className={`sector-item ${isLastItemSingle && index === sectors.length - 1 ? 'full-width' : ''}`}
            key={index}
            onClick={() => setSelectedSector(sector)}
          >
            <img src={sector.icon} alt={sector.title} />
            <h3>{sector.title}</h3>
            <p className="sector-description">{sector.description}</p>
            <button className="more-info-button" onClick={() => setSelectedSector(sector)}>
              Click for more
            </button>
          </div>
        ))}
      </div>

      <section className="packaging-solution-cta">
        <div className="cta-content">
          <h2>FIND YOUR PACKAGING SOLUTION TODAY!</h2>
          <Link to="/contact" className="contact-us-button">CONTACT US</Link>
        </div>
      </section>

      <Modal isOpen={!!selectedSector} onClose={() => setSelectedSector(null)}>
        {selectedSector && (
          <div>
            <div className="modal-header">
              <h2>{selectedSector.title}</h2>
            </div>
            <div className="modal-body">
              <img src={selectedSector.detailImage} alt={`${selectedSector.title} detail`} />
              <p>{selectedSector.moreDetails}</p>
            </div>
          </div>
        )}
      </Modal>    
    </div>
  );
}

export default SectorPage;
