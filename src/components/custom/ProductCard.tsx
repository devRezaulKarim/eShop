import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

type Review = {
  username: string;
  comment: string;
  rating: number;
};
interface Product {
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
type ProductProp = {
  product: Product;
};
const ProductCard = ({ product }: ProductProp) => {
  const { thumbnail, title, ratings, price } = product;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-500" : "text-gray-300"}
      />
    ));
  };
  return (
    <Link href={"#"}>
      <Card className="h-96">
        <CardHeader className="h-[70%]">
          <Image
            className="m-auto"
            src={thumbnail}
            alt="card image"
            width={130}
            height={200}
          />
        </CardHeader>
        <CardContent>
          <h4>{title}</h4>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">{renderStars(ratings)}</div>
            <div>
              <span>{ratings}</span>
              <span className="text-gray-500">/5</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="font-bold">{`$${price}`}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
