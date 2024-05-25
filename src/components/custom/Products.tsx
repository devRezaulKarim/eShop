/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import ProductCard from "./ProductCard";
import { Product } from "@/lib/productType";
import { fetchProducts } from "@/redux/slices/productsSlice";
import { useEffect } from "react";

const Products = () => {
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (products.length <= 0) {
      dispatch(fetchProducts());
    }
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
