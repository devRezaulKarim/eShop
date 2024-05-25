"use client";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useEffect, useState } from "react";
import { Product } from "@/lib/productType";

const TopSelling = () => {
  const { products } = useAppSelector((state) => state.products);
  const [topSelling, setTopSelling] = useState<Product[]>([]);

  useEffect(() => {
    const newArrivals = [...products];
    setTopSelling(newArrivals.sort((a, b) => a.stock - b.stock));
  }, [products]);

  return (
    <section className="container py-10 lg:border-t">
      <h2 className="uppercase text-2xl lg:text-4xl text-center font-black">
        Top Selling
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6">
        {topSelling.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center w-full">
        <Link className="  inline-block " href={"/products"}>
          <Button variant={"outline"} className="px-10 rounded-full">
            View All
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default TopSelling;
