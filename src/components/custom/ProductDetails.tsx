"use client";
import { Product } from "@/lib/productType";
import { Button } from "../ui/button";
import { useState } from "react";
import RadioSelectionField from "./RadioSelectionField";
import DetailsPageImage from "./DetailsPageImage";
import ProductInfo from "./ProductInfo";

interface ProductProp {
  product: Product;
}
const ProductDetails = ({ product }: ProductProp) => {
  const {
    title,
    images,
    description,
    price,
    ratings,
    color,
    size,
    stock,
    reviews,
  } = product;

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>(color[0]);
  const [selectedSize, setSelectedSize] = useState<string>(size[0]);

  const handleQuantity = (operation: string) => {
    if (quantity > 1 && operation === "minus") {
      setQuantity(quantity - 1);
    } else if (quantity < stock && operation === "plus") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="py-10">
      {/* details top part start */}
      <div className="md:flex gap-8">
        {/* ************** */}
        {/* images */}
        <DetailsPageImage images={images} title={title} />
        {/* ************** */}
        <div className="md:w-1/2">
          <ProductInfo
            title={title}
            ratings={ratings}
            price={price}
            description={description}
          />
          <div className="grid grid-cols-3 mb-4">
            <p className="font-bold text-gray-500">Available: {stock}</p>

            <div>
              <p className="font-bold text-gray-500 mb-2">Choose Color:</p>
              <RadioSelectionField
                values={color}
                setValue={setSelectedColor}
                defaultValue={selectedColor}
              />
            </div>

            <div>
              <p className="font-bold text-gray-500 mb-2">Select Size:</p>
              <RadioSelectionField
                values={size}
                defaultValue={selectedSize}
                setValue={setSelectedSize}
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <p className=" rounded-full flex items-center overflow-hidden">
              <button
                onClick={() => handleQuantity("minus")}
                className="font-semibold text-2xl border-r px-4 bg-gray-300 hover:bg-gray-400 rounded-l-full"
              >
                -
              </button>
              <span className="px-4 py-[2px] font-semibold text-xl bg-gray-300">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantity("plus")}
                className="font-semibold text-2xl border-l px-4 bg-gray-300 hover:bg-gray-400 rounded-r-full"
              >
                +
              </button>
            </p>
            <Button className="col-span-2 rounded-full text-lg uppercase py-6">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      {/* details top part ends */}
    </div>
  );
};

export default ProductDetails;
