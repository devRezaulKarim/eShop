import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/lib/productType";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

type ProductProp = {
  product: Product;
};
const ProductCard = ({ product }: ProductProp) => {
  const { id, thumbnail, title, ratings, price } = product;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-500" : "text-gray-300"}
      />
    ));
  };
  return (
    <Link className="hover:scale-105 duration-200" href={`/products/${id}`}>
      <Card className="h-96">
        <CardHeader className="h-[70%]">
          <Image
            className=" w-full h-56 object-contain"
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
