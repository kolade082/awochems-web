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
    title: "Packaging & Industrial Bags",
    description:
      "A wide range of industrial bags for various applications, including packaging for foam, preformed items, and more.",
    image: specialistBagsImage,
    heroImage: specialistBagsHeroImage,
    heroTitle: "Packaging & Industrial Bags",
    features: [
      "Special bags for foam industry (for mattresses)",
      "Customizable sizes for different packaging needs",
      "Made from durable industrial nylon",
    ],
    specifications: [
      {
        name: "Materials",
        value:
          "Industrial Nylon, High-Density Polyethylene (HDPE), Low-Density Polyethylene (LDPE)",
      },
      {
        name: "Types",
        value: "Jumbo Bag, Mattress Bag, Sachet Nylon, Poly Bag",
      },
    ],
    relatedProducts: [
      {
        title: "Food & Consumer Packaging",
        image: trayDolavLinersHeroImage,
        path: "/product/food-consumer-packaging",
      },
      {
        title: "Printing & Customisation",
        image: sheetsTubingHeroImage,
        path: "/product/printing-customisation",
      },
      {
        title: "Stretch & Shrink Wraps",
        image: specialistSacksHeroImage,
        path: "/product/stretch-shrink-wraps",
      },
    ],
  },
  "food-consumer-packaging": {
    id: "food-consumer-packaging",
    title: "Food & Consumer Packaging",
    description:
      "Packaging solutions for food products, including bread wrappers and packaging for consumer goods.",
    image: sheetTubingImage,
    heroImage: sheetsTubingHeroImage,
    heroTitle: "Food & Consumer Packaging",
    features: [
      "Bread wrappers designed for freshness and durability",
      "Food-safe materials used in production",
      "Customizable to suit branding and product specifications",
    ],
    specifications: [
      {
        name: "Material",
        value:
          "Low-Density Polyethylene (LDPE), High-Density Polyethylene (HDPE)",
      },
      { name: "Type", value: "Bread Wrappers, Bread Nylon" },
    ],
    relatedProducts: [
      {
        title: "Packaging & Industrial Bags",
        image: specialistBagsHeroImage,
        path: "/product/packaging-industrial-bags",
      },
      {
        title: "Printing & Customisation",
        image: sheetsTubingHeroImage,
        path: "/product/printing-customisation",
      },
      {
        title: "Stretch & Shrink Wraps",
        image: specialistSacksHeroImage,
        path: "/product/stretch-shrink-wraps",
      },
    ],
  },
  "printing-customisation": {
    id: "printing-customisation",
    title: "Printing & Customisation",
    description:
      "Custom printing solutions for packaging materials, including nylon, Biaxially-Oriented Polypropylene (BOPP), Low-Density Polyethylene (LDPE), and High-Density Polyethylene (HDPE) films.",
    image: trayDolavLinersImage,
    heroImage: trayDolavLinersHeroImage,
    heroTitle: "Printing & Customisation",
    features: [
      "Printing available on Biaxially-Oriented Polypropylene (BOPP), Low-Density Polyethylene (LDPE), and High-Density Polyethylene (HDPE) materials",
      "Customised designs to fit your branding needs",
      "High-quality printing for long-lasting results",
    ],
    specifications: [
      {
        name: "Materials",
        value:
          "Linear Low-Density Polyethylene (LLDPE), High-Density Polyethylene (HDPE), Biaxially-Oriented Polypropylene (BOPP)",
      },
      { name: "Print Type", value: "Custom Printing" },
    ],
    relatedProducts: [
      {
        title: "Packaging & Industrial Bags",
        image: specialistBagsHeroImage,
        path: "/product/packaging-industrial-bags",
      },
      {
        title: "Food & Consumer Packaging",
        image: sheetsTubingHeroImage,
        path: "/product/food-consumer-packaging",
      },
      {
        title: "Stretch & Shrink Wraps",
        image: specialistSacksHeroImage,
        path: "/product/stretch-shrink-wraps",
      },
    ],
  },
  "stretch-shrink-wraps": {
    id: "stretch-shrink-wraps",
    title: "Stretch & Shrink Wraps",
    description:
      "Stretch and shrink wraps made from durable nylon, ideal for securing and protecting products during storage or transit.",
    image: specialistSacksImage,
    heroImage: specialistSacksHeroImage,
    heroTitle: "Stretch & Shrink Wraps",
    features: [
      "High-strength nylon for durability",
      "Shrink wrap for tight, secure packaging",
      "Stretch wrap for easy application and secure load containment",
    ],
    specifications: [
      { name: "Material", value: "Nylon, High-Density Polyethylene (HDPE)" },
      { name: "Types", value: "Shrink Wrap Nylon, Stretch Nylon" },
    ],
    relatedProducts: [
      {
        title: "Packaging & Industrial Bags",
        image: specialistBagsHeroImage,
        path: "/product/packaging-industrial-bags",
      },
      {
        title: "Food & Consumer Packaging",
        image: sheetsTubingHeroImage,
        path: "/product/food-consumer-packaging",
      },
      {
        title: "Printing & Customisation",
        image: sheetsTubingHeroImage,
        path: "/product/printing-customisation",
      },
    ],
  },
};
