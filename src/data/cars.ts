import toyotaCamry from "@/assets/toyota-camry.png";
import fordExplorer from "@/assets/ford-explorer.png";
import teslaModelS from "@/assets/tesla-model-s.png";
import porscheTaycan from "@/assets/porsche-taycan.png";
import teslaModel3 from "@/assets/tesla-model-3.png";
import jeepWrangler from "@/assets/jeep-wrangler.png";
import fordMustang from "@/assets/ford-mustang.png";
import teslaModelSOutdoor from "@/assets/tesla-model-s-outdoor.png";
import porsche911 from "@/assets/porsche-911.png";

export interface Car {
  id: string;
  name: string;
  category: string;
  image: string;
  images: string[];
  seats: number;
  bags: number;
  transmission: string;
  price: number;
  range?: string;
  year?: string;
  features: string[];
  rating: number;
  reviews: number;
  ratingDistribution: { stars: number; percentage: number }[];
}

export const cars: Car[] = [
  {
    id: "1",
    name: "Toyota Camry",
    category: "Economy",
    image: toyotaCamry,
    images: [toyotaCamry],
    seats: 4,
    bags: 2,
    transmission: "Auto",
    price: 85,
    features: ["Bluetooth Connectivity", "Backup Camera", "Cruise Control"],
    rating: 4.5,
    reviews: 89,
    ratingDistribution: [
      { stars: 5, percentage: 65 },
      { stars: 4, percentage: 25 },
      { stars: 3, percentage: 8 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 0 },
    ],
  },
  {
    id: "2",
    name: "Ford Explorer",
    category: "SUV",
    image: fordExplorer,
    images: [fordExplorer],
    seats: 7,
    bags: 4,
    transmission: "Auto",
    price: 120,
    features: ["4WD", "Third Row Seating", "Blind Spot Monitoring"],
    rating: 4.6,
    reviews: 124,
    ratingDistribution: [
      { stars: 5, percentage: 72 },
      { stars: 4, percentage: 20 },
      { stars: 3, percentage: 6 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 0 },
    ],
  },
  {
    id: "3",
    name: "Tesla Model S",
    category: "Electric",
    image: teslaModelS,
    images: [teslaModelS, teslaModelSOutdoor],
    seats: 5,
    bags: 3,
    transmission: "Auto",
    price: 150,
    range: "405 mi",
    features: ["Autopilot", "Premium Audio", "Glass Roof"],
    rating: 4.8,
    reviews: 156,
    ratingDistribution: [
      { stars: 5, percentage: 85 },
      { stars: 4, percentage: 12 },
      { stars: 3, percentage: 2 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 0 },
    ],
  },
  {
    id: "4",
    name: "Porsche Taycan Turbo S",
    category: "Luxury",
    image: porscheTaycan,
    images: [porscheTaycan],
    seats: 4,
    bags: 2,
    transmission: "Automatic",
    price: 250,
    range: "390 mi",
    year: "2024",
    features: ["Advanced GPS Navigation", "Advanced Safety Suite", "Premium Sound System"],
    rating: 4.9,
    reviews: 142,
    ratingDistribution: [
      { stars: 5, percentage: 91 },
      { stars: 4, percentage: 7 },
      { stars: 3, percentage: 2 },
      { stars: 2, percentage: 0 },
      { stars: 1, percentage: 0 },
    ],
  },
  {
    id: "5",
    name: "Tesla Model 3",
    category: "Electric",
    image: teslaModel3,
    images: [teslaModel3],
    seats: 5,
    bags: 2,
    transmission: "Auto",
    price: 95,
    range: "358 mi",
    features: ["Autopilot", "Minimalist Interior", "Over-the-Air Updates"],
    rating: 4.7,
    reviews: 203,
    ratingDistribution: [
      { stars: 5, percentage: 78 },
      { stars: 4, percentage: 18 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 0 },
    ],
  },
  {
    id: "6",
    name: "Jeep Wrangler",
    category: "SUV",
    image: jeepWrangler,
    images: [jeepWrangler],
    seats: 5,
    bags: 2,
    transmission: "Auto",
    price: 110,
    features: ["Off-Road Package", "Removable Top", "4WD"],
    rating: 4.5,
    reviews: 97,
    ratingDistribution: [
      { stars: 5, percentage: 68 },
      { stars: 4, percentage: 22 },
      { stars: 3, percentage: 8 },
      { stars: 2, percentage: 2 },
      { stars: 1, percentage: 0 },
    ],
  },
  {
    id: "7",
    name: "Ford Mustang",
    category: "Convertible",
    image: fordMustang,
    images: [fordMustang],
    seats: 4,
    bags: 2,
    transmission: "Auto",
    price: 140,
    features: ["V8 Engine", "Premium Audio", "Performance Package"],
    rating: 4.7,
    reviews: 134,
    ratingDistribution: [
      { stars: 5, percentage: 79 },
      { stars: 4, percentage: 16 },
      { stars: 3, percentage: 4 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 0 },
    ],
  },
  {
    id: "8",
    name: "Porsche 911",
    category: "Luxury",
    image: porsche911,
    images: [porsche911],
    seats: 2,
    bags: 2,
    transmission: "Auto",
    price: 320,
    features: ["Sport Chrono Package", "Leather Interior", "Adaptive Suspension"],
    rating: 4.9,
    reviews: 87,
    ratingDistribution: [
      { stars: 5, percentage: 92 },
      { stars: 4, percentage: 7 },
      { stars: 3, percentage: 1 },
      { stars: 2, percentage: 0 },
      { stars: 1, percentage: 0 },
    ],
  },
];
