import { ProductData } from "../types/product";
import specialistBagsImage from "../assets/images/specialbags.png";
import specialistBagsHeroImage from "../assets/images/bags.png";
import sheetsTubingHeroImage from "../assets/images/sheets.png";
import sheetTubingImage from "../assets/images/Sheetstubing.png";
import trayDolavLinersHeroImage from "../assets/images/Trays-icon.png";
import trayDolavLinersImage from "../assets/images/dolav.png";
import specialistSacksHeroImage from "../assets/images/sacks.png";
import specialistSacksImage from "../assets/images/Specialist-Sacks.jpg";

export const PRODUCTS: Record<string, ProductData> = {
  "packaging-industrial-bags": {
    id: "packaging-industrial-bags",
    title: "Specialist Bags",
    description:
      "Specialist bags designed to meet the needs of specific industries and applications, offering enhanced durability, security, and functionality.",
    image: specialistBagsImage,
    heroImage: specialistBagsHeroImage,
    heroTitle: "Specialist Bags",
    features: [
      "Enhanced Durability with reinforced materials",
      "Water-resistant for all-weather protection",
      "Customizable compartments for specific tools or equipment",
    ],
    specifications: [
      { name: "Material", value: "High-Density Polyethylene (HDPE)" },
      { name: "Capacity", value: "Up to 50kg" },
      { name: "Water Resistant", value: "Yes" },
    ],
    relatedProducts: [
      {
        title: "Tray & Dolav Liners",
        image: trayDolavLinersHeroImage,
        path: "/product/tray-dolav-liners",
      },
      { title: "Sheet & Tubing", image: sheetsTubingHeroImage, path: "/product/sheet-tubing" },
      {
        title: "Specialist Sacks",
        image: specialistSacksHeroImage,
        path: "/product/specialist-sacks",
      },
    ],
  },
  "food-consumer-packaging": {
    id: "food-consumer-packaging",
    title: "Sheet & Tubing",
    description:
      "Versatile sheet and tubing solutions suitable for a wide range of applications, from industrial packaging to protective coverings.",
    image: sheetTubingImage,
    heroImage: sheetsTubingHeroImage,
    heroTitle: "Sheet & Tubing",
    features: [
      "Customizable thickness and width",
      "High resistance to tearing and punctures",
      "Suitable for food contact",
    ],
    specifications: [
      { name: "Material", value: "LDPE and HDPE" },
      { name: "Width", value: "Up to 1.5 meters" },
      { name: "Length", value: "Customizable" },
    ],
    relatedProducts: [
      {
        title: "Specialist Bags",
        image: specialistBagsHeroImage,
        path: "/product/specialist-bags",
      },
      {
        title: "Tray & Dolav Liners",
        image: trayDolavLinersHeroImage,
        path: "/product/tray-dolav-liners",
      },
      {
        title: "Specialist Sacks",
        image: specialistSacksHeroImage,
        path: "/product/specialist-sacks",
      },
    ],
  },
  "printing-customisation": {
    id: "printing-customisation",
    title: "Tray & Dolav Liners",
    description:
      "High-quality liners designed for trays and Dolavs, ensuring hygiene and protection in food processing and storage.",
    image: trayDolavLinersImage,
    heroImage: trayDolavLinersHeroImage,
    heroTitle: "Tray & Dolav Liners",
    features: [
      "Made from FDA-approved materials",
      "Custom sizes available to fit any tray or Dolav",
      "Easy to clean and reuse",
    ],
    specifications: [
      { name: "Material", value: "Polyethylene" },
      { name: "Thickness", value: "2mm" },
      { name: "Color", value: "Clear" },
    ],
    relatedProducts: [
      {
        title: "Specialist Bags",
        image: specialistBagsHeroImage,
        path: "/product/specialist-bags",
      },
      {
        title: "Sheet & Tubing",
        image: sheetsTubingHeroImage,
        path: "/product/sheet-tubing",
      },
      {
        title: "Specialist Sacks",
        image: specialistSacksHeroImage,
        path: "/product/specialist-sacks",
      },
    ],
  },
  "stretch-shrink-wraps": {
    id: "stretch-shrink-wraps",
    title: "Specialist Sacks",
    description:
      "Customized sack solutions engineered for durability and tailored to meet the unique requirements of various industries.",
    image: specialistSacksImage,
    heroImage: specialistSacksHeroImage,
    heroTitle: "Specialist Sacks",
    features: [
      "Reinforced handles for heavy loads",
      "Breathable fabric options available",
      "Custom printing for branding and identification",
    ],
    specifications: [
      { name: "Capacity", value: "Up to 50kg" },
      { name: "Material", value: "Woven polypropylene" },
      { name: "Closure Type", value: "Stitching, zippers, or heat seal" },
    ],
    relatedProducts: [
      {
        title: "Specialist Bags",
        image: specialistBagsHeroImage,
        path: "/product/specialist-bags",
      },
      {
        title: "Tray & Dolav Liners",
        image: trayDolavLinersHeroImage,
        path: "/product/tray-dolav-liners",
      },
      {
        title: "Sheet & Tubing",
        image: sheetsTubingHeroImage,
        path: "/product/sheet-tubing",
      },
    ],
  },
};
