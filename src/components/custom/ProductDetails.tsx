import { Product } from "@/lib/productType";

interface ProductProp {
  product: Product;
}
const ProductDetails = ({ product }: ProductProp) => {
  return <div>ProductDetails</div>;
};

export default ProductDetails;
