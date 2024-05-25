import { FaStar } from "react-icons/fa6";

interface Props {
  title: string;
  ratings: number;
  price: number;
  description: string;
}
const ProductInfo = ({ title, ratings, price, description }: Props) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={
          index < Math.round(rating) ? "text-yellow-500" : "text-gray-300"
        }
      />
    ));
  };
  return (
    <div>
      <h1 className="lg:text-5xl font-bold mb-4">{title}</h1>
      <div className="flex gap-4 items-center mb-4">
        <p className="flex gap-1">{renderStars(ratings)}</p>
        <p className="text-lg font-bold">
          {ratings}
          <span className="text-base text-gray-500">/5</span>
        </p>
      </div>
      <p className="text-2xl font-bold mb-4">${price}</p>
      <p className="mb-4">{description}</p>
    </div>
  );
};

export default ProductInfo;
