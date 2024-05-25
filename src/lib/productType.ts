type Review = {
  username: string;
  comment: string;
  rating: number;
};

export interface Product {
  id: number;
  title: string;
  brand: string;
  description: string;
  size: string[];
  color: string[];
  price: number;
  thumbnail: string;
  images: string[];
  category: string;
  style: string;
  search: string[];
  stock: number;
  ratings: number;
  reviews: Review[];
}
