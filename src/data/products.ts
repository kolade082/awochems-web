import { ProductData } from "../types/product";
import bag from "../assets/images/bags.png";
import tray from "../assets/images/Trays-icon.png";
import sheets from "../assets/images/sheets.png";
import sacks from "../assets/images/sacks.png";
import sheetImage from "../assets/images/Sheetstubing.png";
import productImage from "../assets/images/specialbags.png";

export const PRODUCTS: Record<string, ProductData> = {
  "specialist-bags": {
    id: "specialist-bags",
    title: "Specialist Bags",
    description:
      "Specialist bags designed to meet the needs of specific industries and applications, offering enhanced durability, security, and functionality.",
    image: productImage,
    heroImage: bag,
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
        image: tray,
        path: "/product/tray-liners",
      },
      { title: "Sheet & Tubing", image: sheets, path: "/product/sheet-tubing" },
      {
        title: "Specialist Sacks",
        image: sacks,
        path: "/product/specialist-sacks",
      },
    ],
  },
  "sheet-tubing": {
    id: "sheet-tubing",
    title: "Sheet & Tubing",
    description:
      "Versatile sheet and tubing solutions suitable for a wide range of applications, from industrial packaging to protective coverings.",
    image: sheetImage,
    heroImage: sheets,
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
        image: bag,
        path: "/product/specialist-bags",
      },
      {
        title: "Tray & Dolav Liners",
        image: tray,
        path: "/product/tray-liners",
      },
      {
        title: "Specialist Sacks",
        image: sacks,
        path: "/product/specialist-sacks",
      },
    ],
  },
  "tray-dolav-liners": {
    id: "tray-dolav-liners",
    title: "Tray & Dolav Liners",
    description:
      "High-quality liners designed for trays and Dolavs, ensuring hygiene and protection in food processing and storage.",
    image: tray,
    heroImage: tray,
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
      { title: "Specialist Bags", image: bag, path: "/product/category1" },
      { title: "Sheet & Tubing", image: sheets, path: "/product/category3" },
      { title: "Specialist Sacks", image: sacks, path: "/product/category4" },
    ],
  },
  "specialist-sacks": {
    id: "specialist-sacks",
    title: "Specialist Sacks",
    description:
      "Customized sack solutions engineered for durability and tailored to meet the unique requirements of various industries.",
    image: sacks,
    heroImage: sacks,
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
      { title: "Specialist Bags", image: bag, path: "/product/category1" },
      { title: "Tray & Dolav Liners", image: tray, path: "/product/category2" },
      { title: "Sheet & Tubing", image: sheets, path: "/product/category3" },
    ],
  },
};
