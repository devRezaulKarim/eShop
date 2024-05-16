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

interface CardItems {
  image: StaticImageData;
  title: string;
  rating: number;
  price: number;
}

type CardItemProp = {
  cardItem: CardItems;
};
const ProductCard = ({ cardItem }: CardItemProp) => {
  const { image, title, rating, price } = cardItem;

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
      <Card>
        <CardHeader>
          <Image src={image} alt="card image" />
        </CardHeader>
        <CardContent>
          <h4>{title}</h4>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">{renderStars(rating)}</div>
            <div>
              <span>{rating}</span>
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
