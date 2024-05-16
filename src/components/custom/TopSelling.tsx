import { StaticImageData } from "next/image";
import cardImg from "@/assets/t-shirt.jpg";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { Button } from "../ui/button";

interface CardItems {
  image: StaticImageData;
  title: string;
  rating: number;
  price: number;
}

const TopSelling = () => {
  const cards: CardItems[] = [
    {
      image: cardImg,
      title: "T-Shirt for men",
      rating: 4.5,
      price: 20,
    },
    {
      image: cardImg,
      title: "Shirt  for men",
      rating: 5,
      price: 20,
    },
    {
      image: cardImg,
      title: "Denim  for men",
      rating: 4.5,
      price: 24,
    },
    {
      image: cardImg,
      title: "Checked Shirt  for men",
      rating: 4,
      price: 19,
    },
  ];
  return (
    <section className="container py-10 lg:border-t">
      <h2 className="uppercase text-2xl lg:text-4xl text-center font-black">
        Top Selling
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6">
        {cards.map((card) => (
          <ProductCard key={card.title} cardItem={card} />
        ))}
      </div>

      <div className="mt-8 text-center w-full">
        <Link className="  inline-block " href={"#"}>
          <Button variant={"outline"} className="px-10 rounded-full">
            View All
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default TopSelling;
