/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import ProductCard from "./ProductCard";
import { Button } from "../ui/button";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/redux/slices/productsSlice";
import { Product } from "@/lib/productType";

const NewArrivals = () => {
  const { products } = useAppSelector((state) => state.products);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    const newArrivals = [...products];
    setNewArrivals(newArrivals.sort((a, b) => b.stock - a.stock));
  }, [products]);

  return (
    <section className="container py-10">
      <h2 className="uppercase text-2xl lg:text-4xl text-center font-black">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6">
        {newArrivals.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
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
