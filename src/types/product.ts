export interface Specification {
  name: string;
  value: string;
}

export interface RelatedProduct {
  title: string;
  image: string;
  path: string;
}

export interface ProductData {
  id: string;
  title: string;
  description: string;
  image: string;
  heroImage: string;
  heroTitle: string;
  features: string[];
  specifications: Specification[];
  relatedProducts: RelatedProduct[];
} 