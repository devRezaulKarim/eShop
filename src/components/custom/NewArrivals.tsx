import { StaticImageData } from "next/image";
import cardImg from "@/assets/t-shirt.jpg";
import ProductCard from "./ProductCard";
import { Button } from "../ui/button";
import Link from "next/link";

interface CardItems {
  id:number,
  image: StaticImageData;
  title: string;
  rating: number;
  price: number;
}
const NewArrivals = () => {
  const cards: CardItems[] = [
    {
      id:1,
      image: cardImg,
      title: "T-Shirt for men",
      rating: 4.5,
      price: 20,
    },
    {
      id:2,
      image: cardImg,
      title: "Shirt  for men",
      rating: 5,
      price: 20,
    },
    {
      id:3,
      image: cardImg,
      title: "Denim  for men",
      rating: 4.5,
      price: 24,
    },
    {
      id:4,
      image: cardImg,
      title: "Checked Shirt  for men",
      rating: 4,
      price: 19,
    },
  ];
  return (
    <section className="container py-10">
      <h2 className="uppercase text-2xl lg:text-4xl text-center font-black">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6">
        {cards.map((card) => (
          <ProductCard key={card.title} cardItem={card} />
        ))}
      </div>

      <div className="mt-8 text-center w-full">
        <Link className=" inline-block " href={"/products"}>
          <Button variant={"outline"} className="px-10 rounded-full">
            View All
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;
